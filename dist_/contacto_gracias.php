<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow CORS if needed
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Start session to access potential existing session variables
session_start();

// Get input data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Map frontend fields to backend variables
$nombre = $input['firstName'] ?? '';
$apellido = $input['lastName'] ?? '';
$area = $input['areaCode'] ?? '';
$telefono = $input['phoneNumber'] ?? '';
$email = $input['email'] ?? '';
$consulta = $input['description'] ?? '';
$ramo = 11;
$campaign_id = 'a51a37e1-2805-48ef-b6d1-723386ed2d1c';
$origen = 'Landing page';

// 1. Generate TOKEN
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.rus.com.ar/v2/login/token',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>'{
    "username": "user_freestyle",
    "password": "Kp7r9Aq2"
  }',
    CURLOPT_HTTPHEADER => array(
        'x-api-key: HThiJv4KJf5YKf3Zd7YzN4fhpZI7FzF88jGvTQ1A',
        'Content-Type: application/json'
    ),
));
$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
if(curl_errno($curl)){
    echo json_encode(['status' => 'error', 'message' => 'Error connecting to auth service: ' . curl_error($curl)]);
    exit;
}
curl_close($curl);

$responseData = json_decode($response, true);
$tokenCRM = $responseData['access_token'] ?? null;

if (!$tokenCRM) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to obtain access token', 'debug' => $responseData]);
    exit;
}

// 2. Prepare Data for CRM
$datos = [];
$datos['first_name'] = $nombre;
$datos['last_name'] = $apellido;
$datos['tel_codigo_c'] = $area;
$datos['tel_numero_c'] = $telefono;
$datos['email1'] = $email;
$datos['description'] = $consulta;
$datos['ramo_c'] = $ramo;
$datos['rc_campaigns_id_c'] = $campaign_id;
$datos['lead_source'] = $origen;

// Check for Producer Hash (from Session or Input)
//$hash = '11268';
$hash = '9601';

if ($hash != '') {
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.rus.com.ar/v2/crm/productores?codigo_c=' . $hash,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'x-api-key: HThiJv4KJf5YKf3Zd7YzN4fhpZI7FzF88jGvTQ1A',
            'Authorization: Bearer ' . $tokenCRM
        ),
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    
    $responseProd = json_decode($response, true);
    if (isset($responseProd['id'])) {
        $productor_id = $responseProd['id'];
        $datos['rus_productores_leads_1rus_productores_ida'] = $productor_id;
    }
}

$datosJson = json_encode($datos);

// 3. Send to Prospectos Endpoint
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.rus.com.ar/v2/crm/prospectos',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => $datosJson,
    CURLOPT_HTTPHEADER => array(
        'x-api-key: HThiJv4KJf5YKf3Zd7YzN4fhpZI7FzF88jGvTQ1A',
        'Content-Type: application/json',
        'Authorization: Bearer ' . $tokenCRM
    ),
));

$response = curl_exec($curl);
$crmResponse = json_decode($response, true);

if(curl_errno($curl)){
    $error_msg = curl_error($curl);
    curl_close($curl);
    echo json_encode(['status' => 'error', 'message' => 'Error sending to CRM: ' . $error_msg, 'debug_datos' => $datos]);
} else {
    curl_close($curl);
    echo json_encode(['status' => 'success', 'data' => $crmResponse, 'debug_datos' => $datos]);
}

?>