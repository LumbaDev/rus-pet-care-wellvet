/// <reference types="vite/client" />
import { Shield, CheckCircle, ArrowRight, Video, Stethoscope, Heart, Pill, Sparkles, Phone, Menu, X, Star, FlaskConical, MessageCircle, Syringe, HeartPulse } from "lucide-react";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import heroImage from "../assets/hero-image.png";
import logoImage from "../assets/logo-chip-petcare.png";
import logoNavImage from "../assets/logo-chip-petcare.png";
import logoSolo from "../assets/logo-nav-image.png";
import vetCareImage from "../assets/vet-care-image.png";
import ssnLogo from "../assets/ssn-logo.svg";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

const REDIRECT_URL = "https://www.rus.com.ar/productos/mascotas/?utm_source=landing&utm_medium=web&utm_campaign=petcare_landing";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const services = [
    {
      icon: FlaskConical,
      label: "Estudios y análisis",
      value: "Bienestar",
      description: "Reintegros",
    },
    {
      icon: Syringe,
      label: "Vacunación",
      value: "Prevención",
      description: "Reintegros",
    },
    {
      icon: HeartPulse,
      label: "Cirugía e internación",
      value: "Cuidado",
      description: "Reintegros",
    },
    {
      icon: Stethoscope,
      label: "Prevención",
      value: "Atención veterinaria",
      description: "Consultas y tratamientos",
    },
    {
      icon: Pill,
      label: "Medicamentos",
      value: "40% OFF",
      description: "Reintegros",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const openDialog = (planName: string) => {
    setSelectedPlan(planName);
    setDialogOpen(true);
  };

  const onSubmit = async (data: any) => {
    try {
      // Determinar la URL según el entorno (Local vs Producción)
      // En desarrollo (Vite) usamos la URL completa a XAMPP
      // En producción (Build) usamos la ruta relativa, ya que el PHP se copia a la carpeta final
      const url = import.meta.env.DEV ? "http://localhost/rus-petcare/public/contacto_gracias.php" : "./contacto_gracias.php";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          areaCode: data.areaCode,
          phoneNumber: data.phoneNumber,
          email: data.email,
          description: `Plan ${selectedPlan}`,
          ramo: 8, // Valor por defecto, ajustar según requerimientos de RUS
          hash: new URLSearchParams(window.location.search).get("hash") || "", // Capturar hash de la URL si existe
        }),
      });

      const result = await response.json();
      console.log("Response:", result);

      if (result.status === "error") {
        throw new Error(result.message || "Error en el servidor");
      }

      Swal.fire({
        title: "¡Solicitud Enviada!",
        text: `¡Gracias! Te contactaremos pronto sobre el plan ${selectedPlan}`,
        icon: "success",
        confirmButtonColor: "#2F73E8",
        customClass: { container: "swal2-override" },
      });
      setDialogOpen(false);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("POSSIBLE CAUSE: Apache server might be down or not running on port 80. Check XAMPP.");

      Swal.fire({
        title: "Error",
        text: "Hubo un error al enviar la solicitud. Por favor verificá tu conexión o intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#2F73E8",
        customClass: { container: "swal2-override" },
      });
    }
  };

  const currentService = services[currentServiceIndex];

  // Animation variants para scroll
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: "-100px" },
  };

  const staggerItem = (index: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
  });

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .swal2-container {
          z-index: 10000 !important;
          pointer-events: auto !important; 
        }
      `}</style>
      {/* STICKY NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <img src={isScrolled ? logoNavImage : logoImage} alt="RUS PETCARE" className={`transition-all duration-300 ${isScrolled ? "h-13 md:h-14" : "h-13 md:h-14"}`} />

            <div className="hidden md:flex items-center gap-6">
              <a href="#planes" className={`text-xs transition-all font-bold uppercase tracking-wide ${isScrolled ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`}>
                Planes
              </a>
              <a href="#beneficios" className={`text-xs transition-all font-bold uppercase tracking-wide ${isScrolled ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`}>
                Beneficios
              </a>
              <a href="#como-funciona" className={`text-xs transition-all font-bold uppercase tracking-wide ${isScrolled ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`}>
                Cómo funciona
              </a>
              <a href="#faq" className={`text-xs transition-all font-bold uppercase tracking-wide ${isScrolled ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`}>
                FAQ
              </a>
              <a href="#ayuda" className={`text-xs transition-all font-bold uppercase tracking-wide ${isScrolled ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`}>
                Ayuda
              </a>
            </div>

            <button className={`md:hidden transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 px-4 bg-white rounded-lg shadow-xl">
              <div className="flex flex-col gap-3">
                <a href="#planes" className="text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide">
                  Planes
                </a>
                <a href="#beneficios" className="text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide">
                  Beneficios
                </a>
                <a href="#como-funciona" className="text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide">
                  Cómo funciona
                </a>
                <a href="#faq" className="text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide">
                  FAQ
                </a>
                <a href="#ayuda" className="text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide">
                  Ayuda
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Hero Image as Background */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="RUS PetCare - Cuidado integral de mascotas" className="w-full h-full object-cover object-center" />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2F73E8]/95 via-[#2F73E8]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div className="max-w-lg">
                <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-2">
                  <span className="text-white/90 text-xs font-medium">🐾 Cuidá su biniestar y pagá menos</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2 leading-none">Salud para mascotas 🧡 </h1>

                <p className="text-base text-white/90 mb-6 max-w-md leading-snug">Acompañamiento integral de su bienestar.</p>

                <a href="#planes" className="bg-[#F29100] hover:bg-[#d97e00] text-white px-8 py-3.5 rounded-full text-base font-bold transition-all shadow-2xl hover:scale-105 inline-flex items-center gap-2">
                  Ver planes
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right side - Floating elements positioned strategically */}
              <div className="relative xl:block hidden h-[450px]">
                {/* Floating price badge - Top Right */}
                <div className="absolute top-12 right-8 bg-[#F29100] text-white rounded-2xl px-6 py-4 shadow-2xl transform hover:scale-105 transition-all">
                  <div className="text-xs font-medium mb-1 opacity-90">Desde</div>
                  <div className="text-2xl font-bold">
                    $7.000<span className="text-base font-medium opacity-90">/mes</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <div className="text-xs opacity-90">Plan Simple</div>
                  </div>
                </div>

                {/* Floating service card with animation - Bottom Right */}
                <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl w-[280px]">
                  <div className="relative overflow-hidden h-40">
                    <AnimatePresence mode="wait">
                      <motion.div key={currentServiceIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#6AC9D9]/20 flex items-center justify-center mb-4">
                          <currentService.icon className="w-6 h-6 text-[#26499D]" />
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{currentService.label}</div>
                        <div className="text-xl font-bold text-gray-900 mb-2">{currentService.value}</div>
                        <div className="text-sm text-gray-600 leading-relaxed">{currentService.description}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress indicator dots */}
                  <div className="flex gap-1.5 mt-4 justify-center">
                    {services.map((_, index) => (
                      <div key={index} className={`h-1.5 rounded-full transition-all ${index === currentServiceIndex ? "w-6 bg-[#26499D]" : "w-1.5 bg-gray-300"}`} />
                    ))}
                  </div>
                </div>

                {/* Additional floating badge - Middle Left for visual balance */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border-2 border-[#6AC9D9]/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#26499D] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Coberturas hasta</div>
                      <div className="text-base font-bold text-gray-900">$250K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INTRODUCTION - COMPACT */}
      <section id="beneficios" className="py-12 lg:py-16 px-4 lg:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-[#6AC9D9]/15 rounded-full mb-3">
              <span className="text-[#2F73E8] font-bold text-xs uppercase tracking-wider">Una nueva forma de Cuidar</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">¡Más que un seguro!</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Sumamos prevención y acompañamiento a la protección tradicional.</p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-4 gap-5 mb-12 max-w-4xl mx-auto">
            <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-lg border-2 border-[#2F73E8]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center text-xl">✨</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Protección completa</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600">Cobertura por accidentes, enfermedades y situaciones complejas cuando las necesites.</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-[#2F73E8] to-[#001489] rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#6AC9D9]/20 flex items-center justify-center text-xl">🐶🐱</div>
                <div>
                  <h3 className="text-lg font-bold text-white">Cuidado diario</h3>
                </div>
              </div>
              <p className="text-sm text-white/90">Guardería, traslados, chequeos, baño y peluquería, consultas para mantenerlos saludables siempre.</p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-3.5">
            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl">📹</div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-base">Telemedicina ilimitada</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Consultá con veterinarios cuando lo necesites, sin límite.</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl">❤️</div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-base">Prevención activa</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Vacunación, castración y desparacitación.</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl">🩺</div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-base">Red de clínicas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Atención en todo el país o con tu veterinario de confianza.</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-base">Cobertura completa</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Consultas con especialistas e intervención quirúrgica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="planes" className="py-16 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full mb-4">
              <span className="text-gray-700 font-bold text-xs uppercase tracking-wider">Cuatro opciones, una decisión simple</span>
            </div>
            <div className="flex items-center justify-center gap-2 my-4">
              <div>
                <h2 className="text-2xl md:text-3xl text-gray-900">
                  ¿Cómo usar <span className="font-bold">RUS PetCare</span> en WellVet?
                </h2>
              </div>
            </div>
            <div className="my-5">
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Cuatro niveles de cobertura para distintas necesidades.
                <br />
                Si tenés dudas escribinos por{" "}
                <a href="https://wa.me/5491139869999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#1fa855] font-semibold transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
            {/* SIMPLE */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                  RUS PETCARE
                  <br />
                  SIMPLE
                </h3>
                <p className="text-gray-600 text-sm">Cobertura básica esencial</p>
              </div>

              <div className="mb-7">
                <div className="text-xs text-gray-500 mb-1">Desde</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-gray-900">$7.000</span>
                  <span className="text-base text-gray-500">/mes</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Responsabilidad Civil $5.000.000</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Videollamada online (telemedicina)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Consulta en centro veterinario por enfermedad o accidente *</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Orientación Legal telefónica</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Baño y peluquería*</span>
                </div>
              </div>

              <div className="space-y-2.5 mt-auto">
                <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2 flex justify-center items-center">
                  Contratar ahora
                </a>
                <a href="https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20SIMPLE%20de%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* ESENCIAL */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                  RUS PETCARE
                  <br />
                  ESENCIAL
                </h3>
                <p className="text-gray-600 text-sm">Primeros pasos en el cuidado</p>
              </div>

              <div className="mb-7">
                <div className="text-xs text-gray-500 mb-1">Desde</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-gray-900">$15.000</span>
                  <span className="text-base text-gray-500">/mes</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-900 font-medium">Todo lo del plan Simple</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Atención en centro veterinario, a domicilio y telefónico</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Análisis y estudios*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Descuento en medicamentos 40% Off</span>
                </div>
              </div>

              <div className="space-y-2.5 mt-auto">
                {/* <button onClick={() => openDialog("ESENCIAL")} className="w-full bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  Contratar online
                </button> */}
                <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2 flex justify-center items-center">
                  Contratar ahora
                </a>
                <a href="https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20ESENCIAL%20de%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* INTEGRAL - HIGHLIGHTED */}
            <div className="bg-gradient-to-br from-[#26499D] to-[#001489] rounded-2xl p-7 relative lg:scale-105 shadow-2xl h-full flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-[#F29100] text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">Recomendado</div>
              </div>

              <div className="mb-6 relative z-10">
                <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
                  RUS PETCARE
                  <br />
                  INTEGRAL
                </h3>
                <p className="text-white/80 text-sm">Cobertura completa para el día a día</p>
              </div>

              <div className="mb-7 relative z-10">
                <div className="text-xs text-white/60 mb-1">Desde</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-white">$25.000</span>
                  <span className="text-base text-white/60">/mes</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 relative z-10 flex-grow">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Todo lo del Plan Esencial</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Cobertura de Muerte accidental o sacrificio forzoso por accidente / por enfermedad no prevenible</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Vacunación*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Intervención quirúrgica e internación (post intervención)*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Cremación</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Traslado por enfermedad o accidente (para el tutor y su mascota)*</span>
                </div>
              </div>

              <div className="space-y-2.5 relative z-10 mt-auto">
                <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#F29100] hover:bg-[#d97e00] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2 flex justify-center items-center">
                  Contratar ahora
                </a>
                <a href="https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20INTEGRAL%20de%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* SUPERIOR */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                  RUS PETCARE
                  <br />
                  SUPERIOR
                </h3>
                <p className="text-gray-600 text-sm">Máxima protección y tranquilidad</p>
              </div>

              <div className="mb-7">
                <div className="text-xs text-gray-500 mb-1">Desde</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-gray-900">$35.000</span>
                  <span className="text-base text-gray-500">/mes</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 text-sm font-medium">Todo lo del Plan Esencial e Integral</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Cobertura por Robo</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Guardería canina por enfermedad o intervención*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Castración*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Chequeo general*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Consultas con especialistas médicos y tratamientos exclusivos*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Desparasitación (antipulgas y garrapatas)</span>
                </div>
              </div>

              <div className="space-y-2.5 mt-auto">
                {/* <button onClick={() => openDialog("SUPERIOR")} className="w-full bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  Contratar online
                </button> */}
                <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2 flex justify-center items-center">
                  Contratar ahora
                </a>
                <a href="https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20SUPERIOR%20de%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center max-w-4xl mx-auto">
            <p className="text-xs text-gray-500">Algunas prestaciones tienen carencia (tiempo de espera) antes de poder usarse.</p>
          </div>
        </div>
      </section>

      {/* DETAILED BENEFITS GRID CON MONTOS */}
      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Beneficios con montos reales</h2>
            <p className="text-base text-gray-600">Todos nuestros planes cuentan con la cobertura de Responsabilidad Civil más alta del mercado.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">📹</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide">Ilimitado</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telemedicina</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">Videollamadas ilimitadas con veterinarios. Resolvé dudas desde casa, cualquier día.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">🩺</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1.5 bg-[#F29100]/20 text-[#F29100] rounded-full text-xs font-bold uppercase tracking-wide">Hasta $35.000*</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Atención veterinaria</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">Consultas, tratamientos y procedimientos en clínicas de la red.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">🔬</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1.5 bg-[#F29100]/20 text-[#F29100] rounded-full text-xs font-bold uppercase tracking-wide">Hasta $35.000*</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Análisis y estudios</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">Laboratorio, rayos X, ecografías y estudios complementarios.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">💊</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide">40% OFF</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicamentos</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">Descuento del 40% en farmacias adheridas. Máximo anual cubierto.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">🛁</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide">Hasta $35.000*</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Baño y peluquería</h3>
            </div>

            <div className="bg-gradient-to-br from-[#26499D] to-[#001489] rounded-2xl p-7 shadow-2xl flex flex-col justify-center text-center">
              <div className="mb-4">
                <span className="text-5xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Inversión que se recupera</h3>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <p className="text-center text-gray-600 mb-6 font-medium">Si tenés dudas o ganas de contratar</p>
            <a href="https://wa.me/5491139869999?text=Hola,%20tengo%20dudas%20sobre%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <MessageCircle className="w-6 h-6 fill-white/20" />
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO USE - STEPPER */}
      <section id="como-funciona" className="py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#2F73E8]/10 rounded-full mb-3">
              <span className="text-[#2F73E8] font-bold text-xs uppercase tracking-wider">Paso a paso</span>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2 my-4">
                <div>
                  <h2 className="text-xl xl:text-2xl md:text-3xl text-gray-900 flex items-center gap-2">
                    ¿Cómo usar <span className="font-bold">RUS PetCare</span>?
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-gray-600 max-w-2xl mx-auto">Desde que lo contratás hasta que usás los beneficios, todo es simple y rápido</p>
            </div>
          </div>

          {/* Stepper - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2F73E8] via-[#6AC9D9] to-[#F29100] opacity-30"></div>

              <div className="grid grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">1</div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Contratás tu plan</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Elegís la cobertura que mejor se adapta a tus necesidades.</p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">2</div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Cuando necesitás usarlo, te comunicás con nosotros</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Llamás al 0800-444-1441 (opción 2) y un asesor te indica cómo usar tu plan y las opciones disponibles.</p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">3</div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Elegís cómo usar los beneficios</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Con profesionales de nuestra red o con tu veterinario habitual a través de reintegro.</p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#F29100] to-[#d97e00] flex items-center justify-center shadow-lg border-2 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">4</div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Si elegiste a tu veterinario, te reintegramos</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Cargá las facturas desde la app RUS Móvil y recibí el reintegro directamente en tu cuenta.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper - Mobile */}
          <div className="lg:hidden space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md">
                  <div className="text-xl font-bold text-white">1</div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Contratás tu plan</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Elegís la cobertura que mejor se adapta a tus necesidades.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md">
                  <div className="text-xl font-bold text-white">2</div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Cuando necesitás usarlo, te comunicás con nosotros</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Llamás al 0800-444-1441 (opción 2) y un asesor te indica cómo usar tu plan y las opciones disponibles.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md">
                  <div className="text-xl font-bold text-white">3</div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Elegís cómo usar los beneficios</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Con profesionales de nuestra red o con tu veterinario habitual a través de reintegro.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F29100] to-[#d97e00] flex items-center justify-center shadow-md">
                  <div className="text-xl font-bold text-white">4</div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Si elegiste a tu veterinario, te reintegramos</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Cargá las facturas desde la app RUS Móvil y recibí el reintegro directamente en tu cuenta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section id="faq" className="py-16 lg:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#26499D]/10 rounded-full mb-3">
              <span className="text-[#26499D] font-bold text-xs uppercase tracking-wider">Respondemos tus dudas</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">Preguntas frecuentes</h2>
            <p className="text-base text-gray-600">
              Todo lo que necesitás saber sobre <span className="font-bold">RUS PetCare</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Column 1 */}
            <div className="space-y-3">
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="item-1" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Qué mascotas puedo asegurar?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    Se puede asegurar <strong>perros o gatos</strong> de compañía y/o vigilancia exclusivamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Qué edad debe tener mi mascota para contratar el seguro?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    Debe tener entre <strong>3 meses y 8 años</strong> inclusive al momento de la contratación. La cobertura puede mantenerse hasta los 12 años.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Puedo ir a mi veterinaria de confianza?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    Sí. El plan contempla <strong>libre elección veterinaria</strong>. Podés atender a tu mascota con el profesional que elijas y luego solicitar el reintegro según los límites de cobertura de tu plan. Además, contamos con una <strong>red de clínicas veterinarias adheridas</strong>, disponible para cuando no cuentes con un profesional de confianza o te encuentres de viaje.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Cómo solicito una asistencia veterinaria?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    Para solicitar una <strong>asistencia veterinaria</strong>, debés comunicarte <strong>previamente</strong> con la central de asistencia llamando al <strong>0800-444-1441</strong> (opción 2). Desde allí te indicarán cómo continuar según tu ubicación y el tipo de prestación.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Cómo funciona el reintegro?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    <strong>Si la asistencia se realiza bajo modalidad de reintegro, el proceso es muy simple:</strong> Una vez realizada la consulta o el tratamiento, deberás subir la factura y el informe médico a través de nuestra app o web. La documentación será evaluada dentro de las <strong>72 horas hábiles</strong>, y el reintegro se efectuará según las condiciones y límites de tu plan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Se puede asegurar una mascota sin raza?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">Sí, en RUS podrás asegurar a mascotas mestizas, es decir que no pertenecen a ninguna raza en particular.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="item-7" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Cuántas mascotas puedo asegurar por póliza?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    Podés asegurar <strong>todas las mascotas que tengas en tu hogar</strong>. Para cada una, se deberá contratar <strong>una póliza individual</strong>, lo que permite adaptar la cobertura a las necesidades de cada mascota.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Dónde tiene validez la cobertura?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    La cobertura es válida <strong>en todo el país</strong>, siempre dentro de la República Argentina.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Necesito la libreta sanitaria?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">Sí, es importante que tu mascota tenga la libreta sanitaria al día al momento de contratar el seguro.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Cuál es la vigencia de la póliza?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    La vigencia es <strong>semestral</strong>, y su renovación es automática.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Se pueden asegurar mascotas consideradas potencialmente peligrosas?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">Sí, siempre que se cumplan las medidas de seguridad exigidas en póliza.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-gray-900">¿Cómo denunciar un siniestro?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    La denuncia del siniestro puede realizarse de manera simple comunicándote con <strong>Atención al Cliente de RUS al 0800-888-7787</strong>, dentro de las 72 horas hábiles de conocido el siniestro.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div id="ayuda" className="mt-8 py-16 px-4 lg:px-6 bg-[#26499D] rounded-xl p-6 shadow-sm max-w-6xl mx-auto text-center text-white">
            <h3 className="font-bold text-white mb-2">¿Tenés otra consulta?</h3>
            <p className="text-sm text-white mb-4">Nuestro equipo está disponible para ayudarte</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/5491139869999?text=Hola,%20tengo%20una%20consulta%20sobre%20RUS%20PetCare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fa855] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              {/*               <a href="mailto:info@ruspetcare.com.ar" className="inline-flex items-center justify-center gap-2 bg-[#26499D] hover:bg-[#001489] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105">
                <Phone className="w-4 h-4" />
                Email
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2F73E8] py-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F73E8] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <img src={logoImage} alt="RUS PETCARE" className="h-13 lg:h-14 mb-4" />
              <p className="text-sm text-white leading-relaxed mb-4">Acompañando el bienestar de tu mascota, todos los días.</p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Producto</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a href="#planes" className="hover:text-white transition-colors">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-white transition-colors">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#ayuda" className="hover:text-white transition-colors">
                    Ayuda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a href="https://www.rus.seg.ar/nosotros" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="https://www.rus.seg.ar/contacto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*           <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/80 text-xs">© 2026 RUS PETCARE. Todos los derechos reservados.</p>
            <div className="flex gap-5">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">
                Términos
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">
                Privacidad
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">
                Cookies
              </a>
            </div>
          </div> */}
        </div>
      </footer>

      {/* FOOTER REGULATORIO SSN */}
      <section className="bg-white py-8 pt-14 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Top Row */}
            <div className="flex justify-center gap-80 items-start pb-6 border-b border-gray-200">
              {/* Inscripción SSN */}
              <div className="text-center px-5">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">N° de inscripción SSN</h4>
                <p className="text-base text-gray-600">0360</p>
              </div>

              {/* Atención al asegurado */}
              {/*               <div className="text-center">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Atención al asegurado</h4>
                <p className="text-base text-gray-600">0800-666-8400</p>
              </div> */}

              {/* SSN Link y Logo */}
              <div className="text-center flex flex-col items-center px-5">
                <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-[#0066A8] hover:underline text-sm mb-3">
                  www.argentina.gob.ar/ssn
                </a>
                <img src={ssnLogo} alt="SSN - Superintendencia de Seguros de la Nación" className="h-10" />
              </div>
            </div>

            {/* Bottom Row - Two columns */}
            <div className="grid grid-cols-2 gap-12 pt-6">
              {/* Left - Service Info */}
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  La entidad aseguradora dispone de un <strong className="text-gray-800">Servicio de Atención al Asegurado</strong> que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
                </p>
                <p>
                  En caso de reclamo ante la entidad aseguradora no resuelto o desestimado, podrá denunciarlo a través de{" "}
                  <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-[#0066A8] hover:underline">
                    www.argentina.gob.ar/ssn
                  </a>
                  .
                </p>
              </div>

              {/* Right - Contact Info */}
              <div className="text-sm text-gray-700 space-y-3">
                <div>
                  <p>
                    <strong>RESPONSABLE:</strong> Frontoni, Diego Alejandro
                  </p>
                  <p className="text-gray-600">Tel.: 0800 888 9787 - Opción: 1</p>
                </div>
                <div>
                  <p>
                    <strong>SUPLENTE:</strong> Manzur, Luisina
                  </p>
                  <p className="text-gray-600">Tel.: 0800 888 9787 - Opción: 2</p>
                </div>
                <div>
                  <p>
                    <strong>EMAIL:</strong>{" "}
                    <a href="mailto:saarus@riouruguay.com.ar" className="text-[#0066A8] hover:underline">
                      saarus@riouruguay.com.ar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {/* Inscripción y Atención */}
            <div className="flex flex-col justify-center gap-4 text-center pb-4 border-b border-gray-200">
              <div>
                <h4 className="text-xs font-semibold text-gray-800 mb-1">N° de inscripción SSN</h4>
                <p className="text-sm text-gray-600">0360</p>
              </div>
              {/*         <div>
                <h4 className="text-xs font-semibold text-gray-800 mb-1">Atención al asegurado</h4>
                <p className="text-sm text-gray-600">0800-666-8400</p>
              </div> */}
              <div className="text-center pb-4 border-b border-gray-200">
                <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-[#0066A8] hover:underline text-sm block mb-3">
                  www.argentina.gob.ar/ssn
                </a>
                <img src={ssnLogo} alt="SSN - Superintendencia de Seguros de la Nación" className="h-12 mx-auto" />
              </div>
              {/* SSN Link y Logo */}

              {/* Service Info */}
              <div className="text-xs text-gray-600 leading-relaxed pb-4 border-b border-gray-200">
                <p className="mb-3">
                  La entidad aseguradora dispone de un <strong className="text-gray-800">Servicio de Atención al Asegurado</strong> que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
                </p>
                <p>
                  En caso de reclamo ante la entidad aseguradora no resuelto o desestimado, podrá denunciarlo a través de{" "}
                  <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-[#0066A8] hover:underline">
                    www.argentina.gob.ar/ssn
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-xs text-gray-700 space-y-3 pb-4 border-b border-gray-200">
              <div>
                <p>
                  <strong>RESPONSABLE:</strong> Frontoni, Diego Alejandro
                </p>
                <p className="text-gray-600">Tel.: 0800 888 9787 - Opción: 1</p>
              </div>
              <div>
                <p>
                  <strong>SUPLENTE:</strong> Manzur, Luisina
                </p>
                <p className="text-gray-600">Tel.: 0800 888 9787 - Opción: 2</p>
              </div>
              <div>
                <p>
                  <strong>EMAIL:</strong>{" "}
                  <a href="mailto:saarus@riouruguay.com.ar" className="text-[#0066A8] hover:underline">
                    saarus@riouruguay.com.ar
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright - Ambos layouts */}
          <div className="text-center pt-4 mt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">© Copyright 2018 Río Uruguay Cooperativa de Seguros Limitada. Congreso de Tucumán 21. Concepción del Uruguay, Entre Ríos, Argentina.</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTRATACIÓN */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Contratar Plan {selectedPlan}</DialogTitle>
            <DialogDescription className="text-gray-600">Completá tus datos y nos contactaremos a la brevedad para finalizar tu contratación.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-900">
                  Nombre
                </Label>
                <Input
                  id="firstName"
                  placeholder="Juan"
                  {...register("firstName", {
                    required: "El nombre es requerido",
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  })}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message as string}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-900">
                  Apellido
                </Label>
                <Input
                  id="lastName"
                  placeholder="Pérez"
                  {...register("lastName", {
                    required: "El apellido es requerido",
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  })}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message as string}</p>}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2 col-span-1">
                <div className="mb-1">
                  <Label htmlFor="areaCode" className="text-gray-900">
                    Cód. Área
                  </Label>
                </div>
                <Input
                  id="areaCode"
                  placeholder="11"
                  type="text"
                  maxLength={4}
                  inputMode="numeric"
                  {...register("areaCode", {
                    required: "Req.",
                    pattern: { value: /^[0-9]+$/, message: "Solo números" },
                    validate: (value, formValues) => {
                      const total = (value || "").length + (formValues.phoneNumber || "").length;
                      return total === 10 || " ";
                    },
                    onChange: (e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      e.target.value = value.slice(0, 4);
                    },
                  })}
                  className={errors.areaCode ? "border-red-500" : ""}
                />
                {errors.areaCode && errors.areaCode.type !== "validate" && <p className="text-red-500 text-xs">{errors.areaCode.message as string}</p>}
              </div>
              <div className="space-y-2 col-span-2">
                <div className="mb-1">
                  <Label htmlFor="phoneNumber" className="text-gray-900">
                    Teléfono
                  </Label>
                </div>
                <Input
                  id="phoneNumber"
                  placeholder="12345678"
                  type="text"
                  maxLength={8}
                  inputMode="numeric"
                  {...register("phoneNumber", {
                    required: "Requerido",
                    pattern: { value: /^[0-9]+$/, message: "Solo números" },
                    validate: (value, formValues) => {
                      const total = (formValues.areaCode || "").length + (value || "").length;
                      return total === 10 || "El area + el numero de teléfono deben tener 10 dígitos en total.";
                    },
                    onChange: (e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      e.target.value = value.slice(0, 8);
                    },
                  })}
                  className={errors.phoneNumber ? "border-red-500" : ""}
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message as string}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan" className="text-gray-900">
                Plan seleccionado
              </Label>
              <Input id="plan" type="text" value={selectedPlan} readOnly className="bg-gray-50 cursor-not-allowed" />
            </div>

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={() => setDialogOpen(false)} disabled={isSubmitting} className={`flex-1 px-4 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-semibold transition-colors ${isSubmitting ? "bg-gray-100 cursor-not-allowed opacity-50" : "hover:bg-gray-50"}`}>
                Cancelar
              </button>
              <button type="submit" disabled={isSubmitting} className={`flex-1 px-4 py-3 text-white rounded-full font-semibold transition-colors ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#2F73E8] hover:bg-[#001489]"}`}>
                {isSubmitting ? "Contratando..." : "Contratar"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
