function z2(e, t) {
  for (var s = 0; s < t.length; s++) {
    const o = t[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const a in o)
        if (a !== "default" && !(a in e)) {
          const c = Object.getOwnPropertyDescriptor(o, a);
          c && Object.defineProperty(e, a, c.get ? c : { enumerable: !0, get: () => o[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const c of a) if (c.type === "childList") for (const u of c.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && o(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(a) {
    const c = {};
    return (a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? (c.credentials = "include") : a.crossOrigin === "anonymous" ? (c.credentials = "omit") : (c.credentials = "same-origin"), c);
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = s(a);
    fetch(a.href, c);
  }
})();
function Zy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Du = { exports: {} },
  Zo = {},
  Ru = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp;
function $2() {
  if (Fp) return je;
  Fp = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    u = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object" ? null : ((A = (w && A[w]) || A["@@iterator"]), typeof A == "function" ? A : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    C = {};
  function D(A, U, me) {
    ((this.props = A), (this.context = U), (this.refs = C), (this.updater = me || N));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (A, U) {
      if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, A, U, "setState");
    }),
    (D.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function M() {}
  M.prototype = D.prototype;
  function T(A, U, me) {
    ((this.props = A), (this.context = U), (this.refs = C), (this.updater = me || N));
  }
  var O = (T.prototype = new M());
  ((O.constructor = T), j(O, D.prototype), (O.isPureReactComponent = !0));
  var W = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    q = { current: null },
    G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(A, U, me) {
    var ve,
      Ee = {},
      Ae = null,
      be = null;
    if (U != null) for (ve in (U.ref !== void 0 && (be = U.ref), U.key !== void 0 && (Ae = "" + U.key), U)) $.call(U, ve) && !G.hasOwnProperty(ve) && (Ee[ve] = U[ve]);
    var Me = arguments.length - 2;
    if (Me === 1) Ee.children = me;
    else if (1 < Me) {
      for (var Le = Array(Me), tt = 0; tt < Me; tt++) Le[tt] = arguments[tt + 2];
      Ee.children = Le;
    }
    if (A && A.defaultProps) for (ve in ((Me = A.defaultProps), Me)) Ee[ve] === void 0 && (Ee[ve] = Me[ve]);
    return { $$typeof: e, type: A, key: Ae, ref: be, props: Ee, _owner: q.current };
  }
  function se(A, U) {
    return { $$typeof: e, type: A.type, key: U, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function Ce(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }
  function Te(A) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (me) {
        return U[me];
      })
    );
  }
  var ge = /\/+/g;
  function ye(A, U) {
    return typeof A == "object" && A !== null && A.key != null ? Te("" + A.key) : U.toString(36);
  }
  function Se(A, U, me, ve, Ee) {
    var Ae = typeof A;
    (Ae === "undefined" || Ae === "boolean") && (A = null);
    var be = !1;
    if (A === null) be = !0;
    else
      switch (Ae) {
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case e:
            case t:
              be = !0;
          }
      }
    if (be)
      return (
        (be = A),
        (Ee = Ee(be)),
        (A = ve === "" ? "." + ye(be, 0) : ve),
        W(Ee)
          ? ((me = ""),
            A != null && (me = A.replace(ge, "$&/") + "/"),
            Se(Ee, U, me, "", function (tt) {
              return tt;
            }))
          : Ee != null && (Ce(Ee) && (Ee = se(Ee, me + (!Ee.key || (be && be.key === Ee.key) ? "" : ("" + Ee.key).replace(ge, "$&/") + "/") + A)), U.push(Ee)),
        1
      );
    if (((be = 0), (ve = ve === "" ? "." : ve + ":"), W(A)))
      for (var Me = 0; Me < A.length; Me++) {
        Ae = A[Me];
        var Le = ve + ye(Ae, Me);
        be += Se(Ae, U, me, Le, Ee);
      }
    else if (((Le = x(A)), typeof Le == "function")) for (A = Le.call(A), Me = 0; !(Ae = A.next()).done; ) ((Ae = Ae.value), (Le = ve + ye(Ae, Me++)), (be += Se(Ae, U, me, Le, Ee)));
    else if (Ae === "object") throw ((U = String(A)), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."));
    return be;
  }
  function De(A, U, me) {
    if (A == null) return A;
    var ve = [],
      Ee = 0;
    return (
      Se(A, ve, "", "", function (Ae) {
        return U.call(me, Ae, Ee++);
      }),
      ve
    );
  }
  function Pe(A) {
    if (A._status === -1) {
      var U = A._result;
      ((U = U()),
        U.then(
          function (me) {
            (A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = me));
          },
          function (me) {
            (A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = me));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = U)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var he = { current: null },
    V = { transition: null },
    oe = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: V, ReactCurrentOwner: q };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (je.Children = {
      map: De,
      forEach: function (A, U, me) {
        De(
          A,
          function () {
            U.apply(this, arguments);
          },
          me,
        );
      },
      count: function (A) {
        var U = 0;
        return (
          De(A, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (A) {
        return (
          De(A, function (U) {
            return U;
          }) || []
        );
      },
      only: function (A) {
        if (!Ce(A)) throw Error("React.Children.only expected to receive a single React element child.");
        return A;
      },
    }),
    (je.Component = D),
    (je.Fragment = s),
    (je.Profiler = a),
    (je.PureComponent = T),
    (je.StrictMode = o),
    (je.Suspense = p),
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe),
    (je.act = Z),
    (je.cloneElement = function (A, U, me) {
      if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
      var ve = j({}, A.props),
        Ee = A.key,
        Ae = A.ref,
        be = A._owner;
      if (U != null) {
        if ((U.ref !== void 0 && ((Ae = U.ref), (be = q.current)), U.key !== void 0 && (Ee = "" + U.key), A.type && A.type.defaultProps)) var Me = A.type.defaultProps;
        for (Le in U) $.call(U, Le) && !G.hasOwnProperty(Le) && (ve[Le] = U[Le] === void 0 && Me !== void 0 ? Me[Le] : U[Le]);
      }
      var Le = arguments.length - 2;
      if (Le === 1) ve.children = me;
      else if (1 < Le) {
        Me = Array(Le);
        for (var tt = 0; tt < Le; tt++) Me[tt] = arguments[tt + 2];
        ve.children = Me;
      }
      return { $$typeof: e, type: A.type, key: Ee, ref: Ae, props: ve, _owner: be };
    }),
    (je.createContext = function (A) {
      return ((A = { $$typeof: u, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (A.Provider = { $$typeof: c, _context: A }), (A.Consumer = A));
    }),
    (je.createElement = B),
    (je.createFactory = function (A) {
      var U = B.bind(null, A);
      return ((U.type = A), U);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (je.isValidElement = Ce),
    (je.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: Pe };
    }),
    (je.memo = function (A, U) {
      return { $$typeof: y, type: A, compare: U === void 0 ? null : U };
    }),
    (je.startTransition = function (A) {
      var U = V.transition;
      V.transition = {};
      try {
        A();
      } finally {
        V.transition = U;
      }
    }),
    (je.unstable_act = Z),
    (je.useCallback = function (A, U) {
      return he.current.useCallback(A, U);
    }),
    (je.useContext = function (A) {
      return he.current.useContext(A);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (A) {
      return he.current.useDeferredValue(A);
    }),
    (je.useEffect = function (A, U) {
      return he.current.useEffect(A, U);
    }),
    (je.useId = function () {
      return he.current.useId();
    }),
    (je.useImperativeHandle = function (A, U, me) {
      return he.current.useImperativeHandle(A, U, me);
    }),
    (je.useInsertionEffect = function (A, U) {
      return he.current.useInsertionEffect(A, U);
    }),
    (je.useLayoutEffect = function (A, U) {
      return he.current.useLayoutEffect(A, U);
    }),
    (je.useMemo = function (A, U) {
      return he.current.useMemo(A, U);
    }),
    (je.useReducer = function (A, U, me) {
      return he.current.useReducer(A, U, me);
    }),
    (je.useRef = function (A) {
      return he.current.useRef(A);
    }),
    (je.useState = function (A) {
      return he.current.useState(A);
    }),
    (je.useSyncExternalStore = function (A, U, me) {
      return he.current.useSyncExternalStore(A, U, me);
    }),
    (je.useTransition = function () {
      return he.current.useTransition();
    }),
    (je.version = "18.3.1"),
    je
  );
}
var Bp;
function Hd() {
  return (Bp || ((Bp = 1), (Ru.exports = $2())), Ru.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp;
function U2() {
  if (zp) return Zo;
  zp = 1;
  var e = Hd(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(h, p, y) {
    var g,
      w = {},
      x = null,
      N = null;
    (y !== void 0 && (x = "" + y), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (N = p.ref));
    for (g in p) o.call(p, g) && !c.hasOwnProperty(g) && (w[g] = p[g]);
    if (h && h.defaultProps) for (g in ((p = h.defaultProps), p)) w[g] === void 0 && (w[g] = p[g]);
    return { $$typeof: t, type: h, key: x, ref: N, props: w, _owner: a.current };
  }
  return ((Zo.Fragment = s), (Zo.jsx = u), (Zo.jsxs = u), Zo);
}
var $p;
function W2() {
  return ($p || (($p = 1), (Du.exports = U2())), Du.exports);
}
var f = W2(),
  za = {},
  Mu = { exports: {} },
  Wt = {},
  Lu = { exports: {} },
  _u = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up;
function H2() {
  return (
    Up ||
      ((Up = 1),
      (function (e) {
        function t(V, oe) {
          var Z = V.length;
          V.push(oe);
          e: for (; 0 < Z; ) {
            var A = (Z - 1) >>> 1,
              U = V[A];
            if (0 < a(U, oe)) ((V[A] = oe), (V[Z] = U), (Z = A));
            else break e;
          }
        }
        function s(V) {
          return V.length === 0 ? null : V[0];
        }
        function o(V) {
          if (V.length === 0) return null;
          var oe = V[0],
            Z = V.pop();
          if (Z !== oe) {
            V[0] = Z;
            e: for (var A = 0, U = V.length, me = U >>> 1; A < me; ) {
              var ve = 2 * (A + 1) - 1,
                Ee = V[ve],
                Ae = ve + 1,
                be = V[Ae];
              if (0 > a(Ee, Z)) Ae < U && 0 > a(be, Ee) ? ((V[A] = be), (V[Ae] = Z), (A = Ae)) : ((V[A] = Ee), (V[ve] = Z), (A = ve));
              else if (Ae < U && 0 > a(be, Z)) ((V[A] = be), (V[Ae] = Z), (A = Ae));
              else break e;
            }
          }
          return oe;
        }
        function a(V, oe) {
          var Z = V.sortIndex - oe.sortIndex;
          return Z !== 0 ? Z : V.id - oe.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var c = performance;
          e.unstable_now = function () {
            return c.now();
          };
        } else {
          var u = Date,
            h = u.now();
          e.unstable_now = function () {
            return u.now() - h;
          };
        }
        var p = [],
          y = [],
          g = 1,
          w = null,
          x = 3,
          N = !1,
          j = !1,
          C = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(V) {
          for (var oe = s(y); oe !== null; ) {
            if (oe.callback === null) o(y);
            else if (oe.startTime <= V) (o(y), (oe.sortIndex = oe.expirationTime), t(p, oe));
            else break;
            oe = s(y);
          }
        }
        function W(V) {
          if (((C = !1), O(V), !j))
            if (s(p) !== null) ((j = !0), Pe($));
            else {
              var oe = s(y);
              oe !== null && he(W, oe.startTime - V);
            }
        }
        function $(V, oe) {
          ((j = !1), C && ((C = !1), M(B), (B = -1)), (N = !0));
          var Z = x;
          try {
            for (O(oe), w = s(p); w !== null && (!(w.expirationTime > oe) || (V && !Te())); ) {
              var A = w.callback;
              if (typeof A == "function") {
                ((w.callback = null), (x = w.priorityLevel));
                var U = A(w.expirationTime <= oe);
                ((oe = e.unstable_now()), typeof U == "function" ? (w.callback = U) : w === s(p) && o(p), O(oe));
              } else o(p);
              w = s(p);
            }
            if (w !== null) var me = !0;
            else {
              var ve = s(y);
              (ve !== null && he(W, ve.startTime - oe), (me = !1));
            }
            return me;
          } finally {
            ((w = null), (x = Z), (N = !1));
          }
        }
        var q = !1,
          G = null,
          B = -1,
          se = 5,
          Ce = -1;
        function Te() {
          return !(e.unstable_now() - Ce < se);
        }
        function ge() {
          if (G !== null) {
            var V = e.unstable_now();
            Ce = V;
            var oe = !0;
            try {
              oe = G(!0, V);
            } finally {
              oe ? ye() : ((q = !1), (G = null));
            }
          } else q = !1;
        }
        var ye;
        if (typeof T == "function")
          ye = function () {
            T(ge);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            De = Se.port2;
          ((Se.port1.onmessage = ge),
            (ye = function () {
              De.postMessage(null);
            }));
        } else
          ye = function () {
            D(ge, 0);
          };
        function Pe(V) {
          ((G = V), q || ((q = !0), ye()));
        }
        function he(V, oe) {
          B = D(function () {
            V(e.unstable_now());
          }, oe);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            j || N || ((j = !0), Pe($));
          }),
          (e.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (se = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (e.unstable_next = function (V) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = x;
            }
            var Z = x;
            x = oe;
            try {
              return V();
            } finally {
              x = Z;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (V, oe) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var Z = x;
            x = V;
            try {
              return oe();
            } finally {
              x = Z;
            }
          }),
          (e.unstable_scheduleCallback = function (V, oe, Z) {
            var A = e.unstable_now();
            switch ((typeof Z == "object" && Z !== null ? ((Z = Z.delay), (Z = typeof Z == "number" && 0 < Z ? A + Z : A)) : (Z = A), V)) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return ((U = Z + U), (V = { id: g++, callback: oe, priorityLevel: V, startTime: Z, expirationTime: U, sortIndex: -1 }), Z > A ? ((V.sortIndex = Z), t(y, V), s(p) === null && V === s(y) && (C ? (M(B), (B = -1)) : (C = !0), he(W, Z - A))) : ((V.sortIndex = U), t(p, V), j || N || ((j = !0), Pe($))), V);
          }),
          (e.unstable_shouldYield = Te),
          (e.unstable_wrapCallback = function (V) {
            var oe = x;
            return function () {
              var Z = x;
              x = oe;
              try {
                return V.apply(this, arguments);
              } finally {
                x = Z;
              }
            };
          }));
      })(_u)),
    _u
  );
}
var Wp;
function K2() {
  return (Wp || ((Wp = 1), (Lu.exports = H2())), Lu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp;
function G2() {
  if (Hp) return Wt;
  Hp = 1;
  var e = Hd(),
    t = K2();
  function s(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = new Set(),
    a = {};
  function c(n, r) {
    (u(n, r), u(n + "Capture", r));
  }
  function u(n, r) {
    for (a[n] = r, n = 0; n < r.length; n++) o.add(r[n]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    p = Object.prototype.hasOwnProperty,
    y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    w = {};
  function x(n) {
    return p.call(w, n) ? !0 : p.call(g, n) ? !1 : y.test(n) ? (w[n] = !0) : ((g[n] = !0), !1);
  }
  function N(n, r, i, l) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : i !== null ? !i.acceptsBooleans : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function j(n, r, i, l) {
    if (r === null || typeof r > "u" || N(n, r, i, l)) return !0;
    if (l) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function C(n, r, i, l, d, m, v) {
    ((this.acceptsBooleans = r === 2 || r === 3 || r === 4), (this.attributeName = l), (this.attributeNamespace = d), (this.mustUseProperty = i), (this.propertyName = n), (this.type = r), (this.sanitizeURL = m), (this.removeEmptyString = v));
  }
  var D = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (n) {
    D[n] = new C(n, 0, !1, n, null, !1, !1);
  }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var r = n[0];
      D[r] = new C(r, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (n) {
      D[n] = new C(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (n) {
      D[n] = new C(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (n) {
      D[n] = new C(n, 3, !1, n.toLowerCase(), null, !1, !1);
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      D[n] = new C(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      D[n] = new C(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      D[n] = new C(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      D[n] = new C(n, 5, !1, n.toLowerCase(), null, !1, !1);
    }));
  var M = /[\-:]([a-z])/g;
  function T(n) {
    return n[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (n) {
    var r = n.replace(M, T);
    D[r] = new C(r, 1, !1, n, null, !1, !1);
  }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (n) {
      var r = n.replace(M, T);
      D[r] = new C(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var r = n.replace(M, T);
      D[r] = new C(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      D[n] = new C(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      D[n] = new C(n, 1, !1, n.toLowerCase(), null, !0, !0);
    }));
  function O(n, r, i, l) {
    var d = D.hasOwnProperty(r) ? D[r] : null;
    (d !== null ? d.type !== 0 : l || !(2 < r.length) || (r[0] !== "o" && r[0] !== "O") || (r[1] !== "n" && r[1] !== "N")) && (j(r, i, d, l) && (i = null), l || d === null ? x(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : d.mustUseProperty ? (n[d.propertyName] = i === null ? (d.type === 3 ? !1 : "") : i) : ((r = d.attributeName), (l = d.attributeNamespace), i === null ? n.removeAttribute(r) : ((d = d.type), (i = d === 3 || (d === 4 && i === !0) ? "" : "" + i), l ? n.setAttributeNS(l, r, i) : n.setAttribute(r, i))));
  }
  var W = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $ = Symbol.for("react.element"),
    q = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    se = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Te = Symbol.for("react.context"),
    ge = Symbol.for("react.forward_ref"),
    ye = Symbol.for("react.suspense"),
    Se = Symbol.for("react.suspense_list"),
    De = Symbol.for("react.memo"),
    Pe = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function oe(n) {
    return n === null || typeof n != "object" ? null : ((n = (V && n[V]) || n["@@iterator"]), typeof n == "function" ? n : null);
  }
  var Z = Object.assign,
    A;
  function U(n) {
    if (A === void 0)
      try {
        throw Error();
      } catch (i) {
        var r = i.stack.trim().match(/\n( *(at )?)/);
        A = (r && r[1]) || "";
      }
    return (
      `
` +
      A +
      n
    );
  }
  var me = !1;
  function ve(n, r) {
    if (!n || me) return "";
    me = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (I) {
            var l = I;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (I) {
            l = I;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (I) {
          l = I;
        }
        n();
      }
    } catch (I) {
      if (I && l && typeof I.stack == "string") {
        for (
          var d = I.stack.split(`
`),
            m = l.stack.split(`
`),
            v = d.length - 1,
            b = m.length - 1;
          1 <= v && 0 <= b && d[v] !== m[b];
        )
          b--;
        for (; 1 <= v && 0 <= b; v--, b--)
          if (d[v] !== m[b]) {
            if (v !== 1 || b !== 1)
              do
                if ((v--, b--, 0 > b || d[v] !== m[b])) {
                  var E =
                    `
` + d[v].replace(" at new ", " at ");
                  return (n.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", n.displayName)), E);
                }
              while (1 <= v && 0 <= b);
            break;
          }
      }
    } finally {
      ((me = !1), (Error.prepareStackTrace = i));
    }
    return (n = n ? n.displayName || n.name : "") ? U(n) : "";
  }
  function Ee(n) {
    switch (n.tag) {
      case 5:
        return U(n.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((n = ve(n.type, !1)), n);
      case 11:
        return ((n = ve(n.type.render, !1)), n);
      case 1:
        return ((n = ve(n.type, !0)), n);
      default:
        return "";
    }
  }
  function Ae(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case G:
        return "Fragment";
      case q:
        return "Portal";
      case se:
        return "Profiler";
      case B:
        return "StrictMode";
      case ye:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Te:
          return (n.displayName || "Context") + ".Consumer";
        case Ce:
          return (n._context.displayName || "Context") + ".Provider";
        case ge:
          var r = n.render;
          return ((n = n.displayName), n || ((n = r.displayName || r.name || ""), (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")), n);
        case De:
          return ((r = n.displayName || null), r !== null ? r : Ae(n.type) || "Memo");
        case Pe:
          ((r = n._payload), (n = n._init));
          try {
            return Ae(n(r));
          } catch {}
      }
    return null;
  }
  function be(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return ((n = r.render), (n = n.displayName || n.name || ""), r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"));
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ae(r);
      case 8:
        return r === B ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Me(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Le(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tt(n) {
    var r = Le(n) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      l = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get,
        m = i.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (v) {
            ((l = "" + v), m.call(this, v));
          },
        }),
        Object.defineProperty(n, r, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[r]);
          },
        }
      );
    }
  }
  function Jt(n) {
    n._valueTracker || (n._valueTracker = tt(n));
  }
  function jn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var i = r.getValue(),
      l = "";
    return (n && (l = Le(n) ? (n.checked ? "true" : "false") : n.value), (n = l), n !== i ? (r.setValue(n), !0) : !1);
  }
  function cs(n) {
    if (((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")) return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function us(n, r) {
    var i = r.checked;
    return Z({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function Ri(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    ((i = Me(r.value != null ? r.value : i)), (n._wrapperState = { initialChecked: l, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null }));
  }
  function ho(n, r) {
    ((r = r.checked), r != null && O(n, "checked", r, !1));
  }
  function ds(n, r) {
    ho(n, r);
    var i = Me(r.value),
      l = r.type;
    if (i != null) l === "number" ? ((i === 0 && n.value === "") || n.value != i) && (n.value = "" + i) : n.value !== "" + i && (n.value = "" + i);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    (r.hasOwnProperty("value") ? mo(n, r.type, i) : r.hasOwnProperty("defaultValue") && mo(n, r.type, Me(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked));
  }
  function Mi(n, r, i) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!((l !== "submit" && l !== "reset") || (r.value !== void 0 && r.value !== null))) return;
      ((r = "" + n._wrapperState.initialValue), i || r === n.value || (n.value = r), (n.defaultValue = r));
    }
    ((i = n.name), i !== "" && (n.name = ""), (n.defaultChecked = !!n._wrapperState.initialChecked), i !== "" && (n.name = i));
  }
  function mo(n, r, i) {
    (r !== "number" || cs(n.ownerDocument) !== n) && (i == null ? (n.defaultValue = "" + n._wrapperState.initialValue) : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var fs = Array.isArray;
  function Un(n, r, i, l) {
    if (((n = n.options), r)) {
      r = {};
      for (var d = 0; d < i.length; d++) r["$" + i[d]] = !0;
      for (i = 0; i < n.length; i++) ((d = r.hasOwnProperty("$" + n[i].value)), n[i].selected !== d && (n[i].selected = d), d && l && (n[i].defaultSelected = !0));
    } else {
      for (i = "" + Me(i), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === i) {
          ((n[d].selected = !0), l && (n[d].defaultSelected = !0));
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function S(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(s(91));
    return Z({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function _(n, r) {
    var i = r.value;
    if (i == null) {
      if (((i = r.children), (r = r.defaultValue), i != null)) {
        if (r != null) throw Error(s(92));
        if (fs(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        r = i;
      }
      (r == null && (r = ""), (i = r));
    }
    n._wrapperState = { initialValue: Me(i) };
  }
  function z(n, r) {
    var i = Me(r.value),
      l = Me(r.defaultValue);
    (i != null && ((i = "" + i), i !== n.value && (n.value = i), r.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i)), l != null && (n.defaultValue = "" + l));
  }
  function ee(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function J(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function X(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? J(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ne,
    Re = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, i, l, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, i, l, d);
            });
          }
        : n;
    })(function (n, r) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
      else {
        for (ne = ne || document.createElement("div"), ne.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ne.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
      }
    });
  function ze(n, r) {
    if (r) {
      var i = n.firstChild;
      if (i && i === n.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ze = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    Wl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ze).forEach(function (n) {
    Wl.forEach(function (r) {
      ((r = r + n.charAt(0).toUpperCase() + n.substring(1)), (Ze[r] = Ze[n]));
    });
  });
  function hs(n, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || (Ze.hasOwnProperty(n) && Ze[n]) ? ("" + r).trim() : r + "px";
  }
  function ms(n, r) {
    n = n.style;
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        var l = i.indexOf("--") === 0,
          d = hs(i, r[i], l);
        (i === "float" && (i = "cssFloat"), l ? n.setProperty(i, d) : (n[i] = d));
      }
  }
  var Hl = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ps(n, r) {
    if (r) {
      if (Hl[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(s(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(s(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(s(62));
    }
  }
  function po(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gs = null;
  function Kl(n) {
    return ((n = n.target || n.srcElement || window), n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n);
  }
  var Gl = null,
    ys = null,
    vs = null;
  function nh(n) {
    if ((n = Vo(n))) {
      if (typeof Gl != "function") throw Error(s(280));
      var r = n.stateNode;
      r && ((r = na(r)), Gl(n.stateNode, n.type, r));
    }
  }
  function rh(n) {
    ys ? (vs ? vs.push(n) : (vs = [n])) : (ys = n);
  }
  function sh() {
    if (ys) {
      var n = ys,
        r = vs;
      if (((vs = ys = null), nh(n), r)) for (n = 0; n < r.length; n++) nh(r[n]);
    }
  }
  function oh(n, r) {
    return n(r);
  }
  function ih() {}
  var ql = !1;
  function ah(n, r, i) {
    if (ql) return n(r, i);
    ql = !0;
    try {
      return oh(n, r, i);
    } finally {
      ((ql = !1), (ys !== null || vs !== null) && (ih(), sh()));
    }
  }
  function go(n, r) {
    var i = n.stateNode;
    if (i === null) return null;
    var l = na(i);
    if (l === null) return null;
    i = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) || ((n = n.type), (l = !(n === "button" || n === "input" || n === "select" || n === "textarea"))), (n = !l));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (i && typeof i != "function") throw Error(s(231, r, typeof i));
    return i;
  }
  var Yl = !1;
  if (h)
    try {
      var yo = {};
      (Object.defineProperty(yo, "passive", {
        get: function () {
          Yl = !0;
        },
      }),
        window.addEventListener("test", yo, yo),
        window.removeEventListener("test", yo, yo));
    } catch {
      Yl = !1;
    }
  function G0(n, r, i, l, d, m, v, b, E) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, I);
    } catch (K) {
      this.onError(K);
    }
  }
  var vo = !1,
    Li = null,
    _i = !1,
    Xl = null,
    q0 = {
      onError: function (n) {
        ((vo = !0), (Li = n));
      },
    };
  function Y0(n, r, i, l, d, m, v, b, E) {
    ((vo = !1), (Li = null), G0.apply(q0, arguments));
  }
  function X0(n, r, i, l, d, m, v, b, E) {
    if ((Y0.apply(this, arguments), vo)) {
      if (vo) {
        var I = Li;
        ((vo = !1), (Li = null));
      } else throw Error(s(198));
      _i || ((_i = !0), (Xl = I));
    }
  }
  function Lr(n) {
    var r = n,
      i = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do ((r = n), (r.flags & 4098) !== 0 && (i = r.return), (n = r.return));
      while (n);
    }
    return r.tag === 3 ? i : null;
  }
  function lh(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if ((r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)), r !== null)) return r.dehydrated;
    }
    return null;
  }
  function ch(n) {
    if (Lr(n) !== n) throw Error(s(188));
  }
  function Q0(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = Lr(n)), r === null)) throw Error(s(188));
      return r !== n ? null : n;
    }
    for (var i = n, l = r; ; ) {
      var d = i.return;
      if (d === null) break;
      var m = d.alternate;
      if (m === null) {
        if (((l = d.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === i) return (ch(d), n);
          if (m === l) return (ch(d), r);
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== l.return) ((i = d), (l = m));
      else {
        for (var v = !1, b = d.child; b; ) {
          if (b === i) {
            ((v = !0), (i = d), (l = m));
            break;
          }
          if (b === l) {
            ((v = !0), (l = d), (i = m));
            break;
          }
          b = b.sibling;
        }
        if (!v) {
          for (b = m.child; b; ) {
            if (b === i) {
              ((v = !0), (i = m), (l = d));
              break;
            }
            if (b === l) {
              ((v = !0), (l = m), (i = d));
              break;
            }
            b = b.sibling;
          }
          if (!v) throw Error(s(189));
        }
      }
      if (i.alternate !== l) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? n : r;
  }
  function uh(n) {
    return ((n = Q0(n)), n !== null ? dh(n) : null);
  }
  function dh(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = dh(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fh = t.unstable_scheduleCallback,
    hh = t.unstable_cancelCallback,
    Z0 = t.unstable_shouldYield,
    J0 = t.unstable_requestPaint,
    nt = t.unstable_now,
    eb = t.unstable_getCurrentPriorityLevel,
    Ql = t.unstable_ImmediatePriority,
    mh = t.unstable_UserBlockingPriority,
    Ii = t.unstable_NormalPriority,
    tb = t.unstable_LowPriority,
    ph = t.unstable_IdlePriority,
    Vi = null,
    An = null;
  function nb(n) {
    if (An && typeof An.onCommitFiberRoot == "function")
      try {
        An.onCommitFiberRoot(Vi, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var mn = Math.clz32 ? Math.clz32 : ob,
    rb = Math.log,
    sb = Math.LN2;
  function ob(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((rb(n) / sb) | 0)) | 0);
  }
  var Oi = 64,
    Fi = 4194304;
  function wo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Bi(n, r) {
    var i = n.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      d = n.suspendedLanes,
      m = n.pingedLanes,
      v = i & 268435455;
    if (v !== 0) {
      var b = v & ~d;
      b !== 0 ? (l = wo(b)) : ((m &= v), m !== 0 && (l = wo(m)));
    } else ((v = i & ~d), v !== 0 ? (l = wo(v)) : m !== 0 && (l = wo(m)));
    if (l === 0) return 0;
    if (r !== 0 && r !== l && (r & d) === 0 && ((d = l & -l), (m = r & -r), d >= m || (d === 16 && (m & 4194240) !== 0))) return r;
    if (((l & 4) !== 0 && (l |= i & 16), (r = n.entangledLanes), r !== 0)) for (n = n.entanglements, r &= l; 0 < r; ) ((i = 31 - mn(r)), (d = 1 << i), (l |= n[i]), (r &= ~d));
    return l;
  }
  function ib(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ab(n, r) {
    for (var i = n.suspendedLanes, l = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var v = 31 - mn(m),
        b = 1 << v,
        E = d[v];
      (E === -1 ? ((b & i) === 0 || (b & l) !== 0) && (d[v] = ib(b, r)) : E <= r && (n.expiredLanes |= b), (m &= ~b));
    }
  }
  function Zl(n) {
    return ((n = n.pendingLanes & -1073741825), n !== 0 ? n : n & 1073741824 ? 1073741824 : 0);
  }
  function gh() {
    var n = Oi;
    return ((Oi <<= 1), (Oi & 4194240) === 0 && (Oi = 64), n);
  }
  function Jl(n) {
    for (var r = [], i = 0; 31 > i; i++) r.push(n);
    return r;
  }
  function xo(n, r, i) {
    ((n.pendingLanes |= r), r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)), (n = n.eventTimes), (r = 31 - mn(r)), (n[r] = i));
  }
  function lb(n, r) {
    var i = n.pendingLanes & ~r;
    ((n.pendingLanes = r), (n.suspendedLanes = 0), (n.pingedLanes = 0), (n.expiredLanes &= r), (n.mutableReadLanes &= r), (n.entangledLanes &= r), (r = n.entanglements));
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var d = 31 - mn(i),
        m = 1 << d;
      ((r[d] = 0), (l[d] = -1), (n[d] = -1), (i &= ~m));
    }
  }
  function ec(n, r) {
    var i = (n.entangledLanes |= r);
    for (n = n.entanglements; i; ) {
      var l = 31 - mn(i),
        d = 1 << l;
      ((d & r) | (n[l] & r) && (n[l] |= r), (i &= ~d));
    }
  }
  var Be = 0;
  function yh(n) {
    return ((n &= -n), 1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var vh,
    tc,
    wh,
    xh,
    bh,
    nc = !1,
    zi = [],
    sr = null,
    or = null,
    ir = null,
    bo = new Map(),
    ko = new Map(),
    ar = [],
    cb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function kh(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        sr = null;
        break;
      case "dragenter":
      case "dragleave":
        or = null;
        break;
      case "mouseover":
      case "mouseout":
        ir = null;
        break;
      case "pointerover":
      case "pointerout":
        bo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ko.delete(r.pointerId);
    }
  }
  function Co(n, r, i, l, d, m) {
    return n === null || n.nativeEvent !== m ? ((n = { blockedOn: r, domEventName: i, eventSystemFlags: l, nativeEvent: m, targetContainers: [d] }), r !== null && ((r = Vo(r)), r !== null && tc(r)), n) : ((n.eventSystemFlags |= l), (r = n.targetContainers), d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function ub(n, r, i, l, d) {
    switch (r) {
      case "focusin":
        return ((sr = Co(sr, n, r, i, l, d)), !0);
      case "dragenter":
        return ((or = Co(or, n, r, i, l, d)), !0);
      case "mouseover":
        return ((ir = Co(ir, n, r, i, l, d)), !0);
      case "pointerover":
        var m = d.pointerId;
        return (bo.set(m, Co(bo.get(m) || null, n, r, i, l, d)), !0);
      case "gotpointercapture":
        return ((m = d.pointerId), ko.set(m, Co(ko.get(m) || null, n, r, i, l, d)), !0);
    }
    return !1;
  }
  function Ch(n) {
    var r = _r(n.target);
    if (r !== null) {
      var i = Lr(r);
      if (i !== null) {
        if (((r = i.tag), r === 13)) {
          if (((r = lh(i)), r !== null)) {
            ((n.blockedOn = r),
              bh(n.priority, function () {
                wh(i);
              }));
            return;
          }
        } else if (r === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $i(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var i = sc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var l = new i.constructor(i.type, i);
        ((gs = l), i.target.dispatchEvent(l), (gs = null));
      } else return ((r = Vo(i)), r !== null && tc(r), (n.blockedOn = i), !1);
      r.shift();
    }
    return !0;
  }
  function Sh(n, r, i) {
    $i(n) && i.delete(r);
  }
  function db() {
    ((nc = !1), sr !== null && $i(sr) && (sr = null), or !== null && $i(or) && (or = null), ir !== null && $i(ir) && (ir = null), bo.forEach(Sh), ko.forEach(Sh));
  }
  function So(n, r) {
    n.blockedOn === r && ((n.blockedOn = null), nc || ((nc = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, db)));
  }
  function Eo(n) {
    function r(d) {
      return So(d, n);
    }
    if (0 < zi.length) {
      So(zi[0], n);
      for (var i = 1; i < zi.length; i++) {
        var l = zi[i];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (sr !== null && So(sr, n), or !== null && So(or, n), ir !== null && So(ir, n), bo.forEach(r), ko.forEach(r), i = 0; i < ar.length; i++) ((l = ar[i]), l.blockedOn === n && (l.blockedOn = null));
    for (; 0 < ar.length && ((i = ar[0]), i.blockedOn === null); ) (Ch(i), i.blockedOn === null && ar.shift());
  }
  var ws = W.ReactCurrentBatchConfig,
    Ui = !0;
  function fb(n, r, i, l) {
    var d = Be,
      m = ws.transition;
    ws.transition = null;
    try {
      ((Be = 1), rc(n, r, i, l));
    } finally {
      ((Be = d), (ws.transition = m));
    }
  }
  function hb(n, r, i, l) {
    var d = Be,
      m = ws.transition;
    ws.transition = null;
    try {
      ((Be = 4), rc(n, r, i, l));
    } finally {
      ((Be = d), (ws.transition = m));
    }
  }
  function rc(n, r, i, l) {
    if (Ui) {
      var d = sc(n, r, i, l);
      if (d === null) (bc(n, r, l, Wi, i), kh(n, l));
      else if (ub(d, n, r, i, l)) l.stopPropagation();
      else if ((kh(n, l), r & 4 && -1 < cb.indexOf(n))) {
        for (; d !== null; ) {
          var m = Vo(d);
          if ((m !== null && vh(m), (m = sc(n, r, i, l)), m === null && bc(n, r, l, Wi, i), m === d)) break;
          d = m;
        }
        d !== null && l.stopPropagation();
      } else bc(n, r, l, null, i);
    }
  }
  var Wi = null;
  function sc(n, r, i, l) {
    if (((Wi = null), (n = Kl(l)), (n = _r(n)), n !== null))
      if (((r = Lr(n)), r === null)) n = null;
      else if (((i = r.tag), i === 13)) {
        if (((n = lh(r)), n !== null)) return n;
        n = null;
      } else if (i === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return ((Wi = n), null);
  }
  function Eh(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (eb()) {
          case Ql:
            return 1;
          case mh:
            return 4;
          case Ii:
          case tb:
            return 16;
          case ph:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var lr = null,
    oc = null,
    Hi = null;
  function Nh() {
    if (Hi) return Hi;
    var n,
      r = oc,
      i = r.length,
      l,
      d = "value" in lr ? lr.value : lr.textContent,
      m = d.length;
    for (n = 0; n < i && r[n] === d[n]; n++);
    var v = i - n;
    for (l = 1; l <= v && r[i - l] === d[m - l]; l++);
    return (Hi = d.slice(n, 1 < l ? 1 - l : void 0));
  }
  function Ki(n) {
    var r = n.keyCode;
    return ("charCode" in n ? ((n = n.charCode), n === 0 && r === 13 && (n = 13)) : (n = r), n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0);
  }
  function Gi() {
    return !0;
  }
  function Ph() {
    return !1;
  }
  function Kt(n) {
    function r(i, l, d, m, v) {
      ((this._reactName = i), (this._targetInst = d), (this.type = l), (this.nativeEvent = m), (this.target = v), (this.currentTarget = null));
      for (var b in n) n.hasOwnProperty(b) && ((i = n[b]), (this[b] = i ? i(m) : m[b]));
      return ((this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Gi : Ph), (this.isPropagationStopped = Ph), this);
    }
    return (
      Z(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), (this.isDefaultPrevented = Gi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), (this.isPropagationStopped = Gi));
        },
        persist: function () {},
        isPersistent: Gi,
      }),
      r
    );
  }
  var xs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ic = Kt(xs),
    No = Z({}, xs, { view: 0, detail: 0 }),
    mb = Kt(No),
    ac,
    lc,
    Po,
    qi = Z({}, No, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: uc,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0 ? (n.fromElement === n.srcElement ? n.toElement : n.fromElement) : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n ? n.movementX : (n !== Po && (Po && n.type === "mousemove" ? ((ac = n.screenX - Po.screenX), (lc = n.screenY - Po.screenY)) : (lc = ac = 0), (Po = n)), ac);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : lc;
      },
    }),
    jh = Kt(qi),
    pb = Z({}, qi, { dataTransfer: 0 }),
    gb = Kt(pb),
    yb = Z({}, No, { relatedTarget: 0 }),
    cc = Kt(yb),
    vb = Z({}, xs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wb = Kt(vb),
    xb = Z({}, xs, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    bb = Kt(xb),
    kb = Z({}, xs, { data: 0 }),
    Ah = Kt(kb),
    Cb = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Sb = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    Eb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nb(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Eb[n]) ? !!r[n] : !1;
  }
  function uc() {
    return Nb;
  }
  var Pb = Z({}, No, {
      key: function (n) {
        if (n.key) {
          var r = Cb[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress" ? ((n = Ki(n)), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Sb[n.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: uc,
      charCode: function (n) {
        return n.type === "keypress" ? Ki(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress" ? Ki(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
    }),
    jb = Kt(Pb),
    Ab = Z({}, qi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Th = Kt(Ab),
    Tb = Z({}, No, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uc }),
    Db = Kt(Tb),
    Rb = Z({}, xs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mb = Kt(Rb),
    Lb = Z({}, qi, {
      deltaX: function (n) {
        return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _b = Kt(Lb),
    Ib = [9, 13, 27, 32],
    dc = h && "CompositionEvent" in window,
    jo = null;
  h && "documentMode" in document && (jo = document.documentMode);
  var Vb = h && "TextEvent" in window && !jo,
    Dh = h && (!dc || (jo && 8 < jo && 11 >= jo)),
    Rh = " ",
    Mh = !1;
  function Lh(n, r) {
    switch (n) {
      case "keyup":
        return Ib.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _h(n) {
    return ((n = n.detail), typeof n == "object" && "data" in n ? n.data : null);
  }
  var bs = !1;
  function Ob(n, r) {
    switch (n) {
      case "compositionend":
        return _h(r);
      case "keypress":
        return r.which !== 32 ? null : ((Mh = !0), Rh);
      case "textInput":
        return ((n = r.data), n === Rh && Mh ? null : n);
      default:
        return null;
    }
  }
  function Fb(n, r) {
    if (bs) return n === "compositionend" || (!dc && Lh(n, r)) ? ((n = Nh()), (Hi = oc = lr = null), (bs = !1), n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Dh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Bb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ih(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Bb[n.type] : r === "textarea";
  }
  function Vh(n, r, i, l) {
    (rh(l), (r = Ji(r, "onChange")), 0 < r.length && ((i = new ic("onChange", "change", null, i, l)), n.push({ event: i, listeners: r })));
  }
  var Ao = null,
    To = null;
  function zb(n) {
    tm(n, 0);
  }
  function Yi(n) {
    var r = Ns(n);
    if (jn(r)) return n;
  }
  function $b(n, r) {
    if (n === "change") return r;
  }
  var Oh = !1;
  if (h) {
    var fc;
    if (h) {
      var hc = "oninput" in document;
      if (!hc) {
        var Fh = document.createElement("div");
        (Fh.setAttribute("oninput", "return;"), (hc = typeof Fh.oninput == "function"));
      }
      fc = hc;
    } else fc = !1;
    Oh = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Bh() {
    Ao && (Ao.detachEvent("onpropertychange", zh), (To = Ao = null));
  }
  function zh(n) {
    if (n.propertyName === "value" && Yi(To)) {
      var r = [];
      (Vh(r, To, n, Kl(n)), ah(zb, r));
    }
  }
  function Ub(n, r, i) {
    n === "focusin" ? (Bh(), (Ao = r), (To = i), Ao.attachEvent("onpropertychange", zh)) : n === "focusout" && Bh();
  }
  function Wb(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(To);
  }
  function Hb(n, r) {
    if (n === "click") return Yi(r);
  }
  function Kb(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function Gb(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var pn = typeof Object.is == "function" ? Object.is : Gb;
  function Do(n, r) {
    if (pn(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(n),
      l = Object.keys(r);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var d = i[l];
      if (!p.call(r, d) || !pn(n[d], r[d])) return !1;
    }
    return !0;
  }
  function $h(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Uh(n, r) {
    var i = $h(n);
    n = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = n + i.textContent.length), n <= r && l >= r)) return { node: i, offset: r - n };
        n = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = $h(i);
    }
  }
  function Wh(n, r) {
    return n && r ? (n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Wh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1) : !1;
  }
  function Hh() {
    for (var n = window, r = cs(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) n = r.contentWindow;
      else break;
      r = cs(n.document);
    }
    return r;
  }
  function mc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && ((r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password")) || r === "textarea" || n.contentEditable === "true");
  }
  function qb(n) {
    var r = Hh(),
      i = n.focusedElem,
      l = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Wh(i.ownerDocument.documentElement, i)) {
      if (l !== null && mc(i)) {
        if (((r = l.start), (n = l.end), n === void 0 && (n = r), "selectionStart" in i)) ((i.selectionStart = r), (i.selectionEnd = Math.min(n, i.value.length)));
        else if (((n = ((r = i.ownerDocument || document) && r.defaultView) || window), n.getSelection)) {
          n = n.getSelection();
          var d = i.textContent.length,
            m = Math.min(l.start, d);
          ((l = l.end === void 0 ? m : Math.min(l.end, d)), !n.extend && m > l && ((d = l), (l = m), (m = d)), (d = Uh(i, m)));
          var v = Uh(i, l);
          d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && ((r = r.createRange()), r.setStart(d.node, d.offset), n.removeAllRanges(), m > l ? (n.addRange(r), n.extend(v.node, v.offset)) : (r.setEnd(v.node, v.offset), n.addRange(r)));
        }
      }
      for (r = [], n = i; (n = n.parentNode); ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++) ((n = r[i]), (n.element.scrollLeft = n.left), (n.element.scrollTop = n.top));
    }
  }
  var Yb = h && "documentMode" in document && 11 >= document.documentMode,
    ks = null,
    pc = null,
    Ro = null,
    gc = !1;
  function Kh(n, r, i) {
    var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    gc || ks == null || ks !== cs(l) || ((l = ks), "selectionStart" in l && mc(l) ? (l = { start: l.selectionStart, end: l.selectionEnd }) : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()), (l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset })), (Ro && Do(Ro, l)) || ((Ro = l), (l = Ji(pc, "onSelect")), 0 < l.length && ((r = new ic("onSelect", "select", null, r, i)), n.push({ event: r, listeners: l }), (r.target = ks))));
  }
  function Xi(n, r) {
    var i = {};
    return ((i[n.toLowerCase()] = r.toLowerCase()), (i["Webkit" + n] = "webkit" + r), (i["Moz" + n] = "moz" + r), i);
  }
  var Cs = { animationend: Xi("Animation", "AnimationEnd"), animationiteration: Xi("Animation", "AnimationIteration"), animationstart: Xi("Animation", "AnimationStart"), transitionend: Xi("Transition", "TransitionEnd") },
    yc = {},
    Gh = {};
  h && ((Gh = document.createElement("div").style), "AnimationEvent" in window || (delete Cs.animationend.animation, delete Cs.animationiteration.animation, delete Cs.animationstart.animation), "TransitionEvent" in window || delete Cs.transitionend.transition);
  function Qi(n) {
    if (yc[n]) return yc[n];
    if (!Cs[n]) return n;
    var r = Cs[n],
      i;
    for (i in r) if (r.hasOwnProperty(i) && i in Gh) return (yc[n] = r[i]);
    return n;
  }
  var qh = Qi("animationend"),
    Yh = Qi("animationiteration"),
    Xh = Qi("animationstart"),
    Qh = Qi("transitionend"),
    Zh = new Map(),
    Jh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(n, r) {
    (Zh.set(n, r), c(r, [n]));
  }
  for (var vc = 0; vc < Jh.length; vc++) {
    var wc = Jh[vc],
      Xb = wc.toLowerCase(),
      Qb = wc[0].toUpperCase() + wc.slice(1);
    cr(Xb, "on" + Qb);
  }
  (cr(qh, "onAnimationEnd"), cr(Yh, "onAnimationIteration"), cr(Xh, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(Qh, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Zb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
  function em(n, r, i) {
    var l = n.type || "unknown-event";
    ((n.currentTarget = i), X0(l, r, void 0, n), (n.currentTarget = null));
  }
  function tm(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var l = n[i],
        d = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var v = l.length - 1; 0 <= v; v--) {
            var b = l[v],
              E = b.instance,
              I = b.currentTarget;
            if (((b = b.listener), E !== m && d.isPropagationStopped())) break e;
            (em(d, b, I), (m = E));
          }
        else
          for (v = 0; v < l.length; v++) {
            if (((b = l[v]), (E = b.instance), (I = b.currentTarget), (b = b.listener), E !== m && d.isPropagationStopped())) break e;
            (em(d, b, I), (m = E));
          }
      }
    }
    if (_i) throw ((n = Xl), (_i = !1), (Xl = null), n);
  }
  function We(n, r) {
    var i = r[Pc];
    i === void 0 && (i = r[Pc] = new Set());
    var l = n + "__bubble";
    i.has(l) || (nm(r, n, 2, !1), i.add(l));
  }
  function xc(n, r, i) {
    var l = 0;
    (r && (l |= 4), nm(i, n, l, r));
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function Lo(n) {
    if (!n[Zi]) {
      ((n[Zi] = !0),
        o.forEach(function (i) {
          i !== "selectionchange" && (Zb.has(i) || xc(i, !1, n), xc(i, !0, n));
        }));
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Zi] || ((r[Zi] = !0), xc("selectionchange", !1, r));
    }
  }
  function nm(n, r, i, l) {
    switch (Eh(r)) {
      case 1:
        var d = fb;
        break;
      case 4:
        d = hb;
        break;
      default:
        d = rc;
    }
    ((i = d.bind(null, r, i, n)), (d = void 0), !Yl || (r !== "touchstart" && r !== "touchmove" && r !== "wheel") || (d = !0), l ? (d !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: d }) : n.addEventListener(r, i, !0)) : d !== void 0 ? n.addEventListener(r, i, { passive: d }) : n.addEventListener(r, i, !1));
  }
  function bc(n, r, i, l, d) {
    var m = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var b = l.stateNode.containerInfo;
          if (b === d || (b.nodeType === 8 && b.parentNode === d)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var E = v.tag;
              if ((E === 3 || E === 4) && ((E = v.stateNode.containerInfo), E === d || (E.nodeType === 8 && E.parentNode === d))) return;
              v = v.return;
            }
          for (; b !== null; ) {
            if (((v = _r(b)), v === null)) return;
            if (((E = v.tag), E === 5 || E === 6)) {
              l = m = v;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    ah(function () {
      var I = m,
        K = Kl(i),
        Y = [];
      e: {
        var H = Zh.get(n);
        if (H !== void 0) {
          var te = ic,
            ae = n;
          switch (n) {
            case "keypress":
              if (Ki(i) === 0) break e;
            case "keydown":
            case "keyup":
              te = jb;
              break;
            case "focusin":
              ((ae = "focus"), (te = cc));
              break;
            case "focusout":
              ((ae = "blur"), (te = cc));
              break;
            case "beforeblur":
            case "afterblur":
              te = cc;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = jh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = gb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = Db;
              break;
            case qh:
            case Yh:
            case Xh:
              te = wb;
              break;
            case Qh:
              te = Mb;
              break;
            case "scroll":
              te = mb;
              break;
            case "wheel":
              te = _b;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = bb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = Th;
          }
          var ue = (r & 4) !== 0,
            rt = !ue && n === "scroll",
            R = ue ? (H !== null ? H + "Capture" : null) : H;
          ue = [];
          for (var P = I, L; P !== null; ) {
            L = P;
            var Q = L.stateNode;
            if ((L.tag === 5 && Q !== null && ((L = Q), R !== null && ((Q = go(P, R)), Q != null && ue.push(_o(P, Q, L)))), rt)) break;
            P = P.return;
          }
          0 < ue.length && ((H = new te(H, ae, null, i, K)), Y.push({ event: H, listeners: ue }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (((H = n === "mouseover" || n === "pointerover"), (te = n === "mouseout" || n === "pointerout"), H && i !== gs && (ae = i.relatedTarget || i.fromElement) && (_r(ae) || ae[Wn]))) break e;
          if ((te || H) && ((H = K.window === K ? K : (H = K.ownerDocument) ? H.defaultView || H.parentWindow : window), te ? ((ae = i.relatedTarget || i.toElement), (te = I), (ae = ae ? _r(ae) : null), ae !== null && ((rt = Lr(ae)), ae !== rt || (ae.tag !== 5 && ae.tag !== 6)) && (ae = null)) : ((te = null), (ae = I)), te !== ae)) {
            if (((ue = jh), (Q = "onMouseLeave"), (R = "onMouseEnter"), (P = "mouse"), (n === "pointerout" || n === "pointerover") && ((ue = Th), (Q = "onPointerLeave"), (R = "onPointerEnter"), (P = "pointer")), (rt = te == null ? H : Ns(te)), (L = ae == null ? H : Ns(ae)), (H = new ue(Q, P + "leave", te, i, K)), (H.target = rt), (H.relatedTarget = L), (Q = null), _r(K) === I && ((ue = new ue(R, P + "enter", ae, i, K)), (ue.target = L), (ue.relatedTarget = rt), (Q = ue)), (rt = Q), te && ae))
              t: {
                for (ue = te, R = ae, P = 0, L = ue; L; L = Ss(L)) P++;
                for (L = 0, Q = R; Q; Q = Ss(Q)) L++;
                for (; 0 < P - L; ) ((ue = Ss(ue)), P--);
                for (; 0 < L - P; ) ((R = Ss(R)), L--);
                for (; P--; ) {
                  if (ue === R || (R !== null && ue === R.alternate)) break t;
                  ((ue = Ss(ue)), (R = Ss(R)));
                }
                ue = null;
              }
            else ue = null;
            (te !== null && rm(Y, H, te, ue, !1), ae !== null && rt !== null && rm(Y, rt, ae, ue, !0));
          }
        }
        e: {
          if (((H = I ? Ns(I) : window), (te = H.nodeName && H.nodeName.toLowerCase()), te === "select" || (te === "input" && H.type === "file"))) var fe = $b;
          else if (Ih(H))
            if (Oh) fe = Kb;
            else {
              fe = Wb;
              var we = Ub;
            }
          else (te = H.nodeName) && te.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (fe = Hb);
          if (fe && (fe = fe(n, I))) {
            Vh(Y, fe, i, K);
            break e;
          }
          (we && we(n, H, I), n === "focusout" && (we = H._wrapperState) && we.controlled && H.type === "number" && mo(H, "number", H.value));
        }
        switch (((we = I ? Ns(I) : window), n)) {
          case "focusin":
            (Ih(we) || we.contentEditable === "true") && ((ks = we), (pc = I), (Ro = null));
            break;
          case "focusout":
            Ro = pc = ks = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((gc = !1), Kh(Y, i, K));
            break;
          case "selectionchange":
            if (Yb) break;
          case "keydown":
          case "keyup":
            Kh(Y, i, K);
        }
        var xe;
        if (dc)
          e: {
            switch (n) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else bs ? Lh(n, i) && (ke = "onCompositionEnd") : n === "keydown" && i.keyCode === 229 && (ke = "onCompositionStart");
        (ke && (Dh && i.locale !== "ko" && (bs || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && bs && (xe = Nh()) : ((lr = K), (oc = "value" in lr ? lr.value : lr.textContent), (bs = !0))), (we = Ji(I, ke)), 0 < we.length && ((ke = new Ah(ke, n, null, i, K)), Y.push({ event: ke, listeners: we }), xe ? (ke.data = xe) : ((xe = _h(i)), xe !== null && (ke.data = xe)))), (xe = Vb ? Ob(n, i) : Fb(n, i)) && ((I = Ji(I, "onBeforeInput")), 0 < I.length && ((K = new Ah("onBeforeInput", "beforeinput", null, i, K)), Y.push({ event: K, listeners: I }), (K.data = xe))));
      }
      tm(Y, r);
    });
  }
  function _o(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function Ji(n, r) {
    for (var i = r + "Capture", l = []; n !== null; ) {
      var d = n,
        m = d.stateNode;
      (d.tag === 5 && m !== null && ((d = m), (m = go(n, i)), m != null && l.unshift(_o(n, m, d)), (m = go(n, r)), m != null && l.push(_o(n, m, d))), (n = n.return));
    }
    return l;
  }
  function Ss(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rm(n, r, i, l, d) {
    for (var m = r._reactName, v = []; i !== null && i !== l; ) {
      var b = i,
        E = b.alternate,
        I = b.stateNode;
      if (E !== null && E === l) break;
      (b.tag === 5 && I !== null && ((b = I), d ? ((E = go(i, m)), E != null && v.unshift(_o(i, E, b))) : d || ((E = go(i, m)), E != null && v.push(_o(i, E, b)))), (i = i.return));
    }
    v.length !== 0 && n.push({ event: r, listeners: v });
  }
  var Jb = /\r\n?/g,
    e2 = /\u0000|\uFFFD/g;
  function sm(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        Jb,
        `
`,
      )
      .replace(e2, "");
  }
  function ea(n, r, i) {
    if (((r = sm(r)), sm(n) !== r && i)) throw Error(s(425));
  }
  function ta() {}
  var kc = null,
    Cc = null;
  function Sc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || (typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null);
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0,
    t2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    om = typeof Promise == "function" ? Promise : void 0,
    n2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof om < "u"
          ? function (n) {
              return om.resolve(null).then(n).catch(r2);
            }
          : Ec;
  function r2(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Nc(n, r) {
    var i = r,
      l = 0;
    do {
      var d = i.nextSibling;
      if ((n.removeChild(i), d && d.nodeType === 8))
        if (((i = d.data), i === "/$")) {
          if (l === 0) {
            (n.removeChild(d), Eo(r));
            return;
          }
          l--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || l++;
      i = d;
    } while (i);
    Eo(r);
  }
  function ur(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = n.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function im(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var i = n.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (r === 0) return n;
          r--;
        } else i === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Es = Math.random().toString(36).slice(2),
    Tn = "__reactFiber$" + Es,
    Io = "__reactProps$" + Es,
    Wn = "__reactContainer$" + Es,
    Pc = "__reactEvents$" + Es,
    s2 = "__reactListeners$" + Es,
    o2 = "__reactHandles$" + Es;
  function _r(n) {
    var r = n[Tn];
    if (r) return r;
    for (var i = n.parentNode; i; ) {
      if ((r = i[Wn] || i[Tn])) {
        if (((i = r.alternate), r.child !== null || (i !== null && i.child !== null)))
          for (n = im(n); n !== null; ) {
            if ((i = n[Tn])) return i;
            n = im(n);
          }
        return r;
      }
      ((n = i), (i = n.parentNode));
    }
    return null;
  }
  function Vo(n) {
    return ((n = n[Tn] || n[Wn]), !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3) ? null : n);
  }
  function Ns(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(s(33));
  }
  function na(n) {
    return n[Io] || null;
  }
  var jc = [],
    Ps = -1;
  function dr(n) {
    return { current: n };
  }
  function He(n) {
    0 > Ps || ((n.current = jc[Ps]), (jc[Ps] = null), Ps--);
  }
  function $e(n, r) {
    (Ps++, (jc[Ps] = n.current), (n.current = r));
  }
  var fr = {},
    Ct = dr(fr),
    Ft = dr(!1),
    Ir = fr;
  function js(n, r) {
    var i = n.type.contextTypes;
    if (!i) return fr;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      m;
    for (m in i) d[m] = r[m];
    return (l && ((n = n.stateNode), (n.__reactInternalMemoizedUnmaskedChildContext = r), (n.__reactInternalMemoizedMaskedChildContext = d)), d);
  }
  function Bt(n) {
    return ((n = n.childContextTypes), n != null);
  }
  function ra() {
    (He(Ft), He(Ct));
  }
  function am(n, r, i) {
    if (Ct.current !== fr) throw Error(s(168));
    ($e(Ct, r), $e(Ft, i));
  }
  function lm(n, r, i) {
    var l = n.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function")) return i;
    l = l.getChildContext();
    for (var d in l) if (!(d in r)) throw Error(s(108, be(n) || "Unknown", d));
    return Z({}, i, l);
  }
  function sa(n) {
    return ((n = ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) || fr), (Ir = Ct.current), $e(Ct, n), $e(Ft, Ft.current), !0);
  }
  function cm(n, r, i) {
    var l = n.stateNode;
    if (!l) throw Error(s(169));
    (i ? ((n = lm(n, r, Ir)), (l.__reactInternalMemoizedMergedChildContext = n), He(Ft), He(Ct), $e(Ct, n)) : He(Ft), $e(Ft, i));
  }
  var Hn = null,
    oa = !1,
    Ac = !1;
  function um(n) {
    Hn === null ? (Hn = [n]) : Hn.push(n);
  }
  function i2(n) {
    ((oa = !0), um(n));
  }
  function hr() {
    if (!Ac && Hn !== null) {
      Ac = !0;
      var n = 0,
        r = Be;
      try {
        var i = Hn;
        for (Be = 1; n < i.length; n++) {
          var l = i[n];
          do l = l(!0);
          while (l !== null);
        }
        ((Hn = null), (oa = !1));
      } catch (d) {
        throw (Hn !== null && (Hn = Hn.slice(n + 1)), fh(Ql, hr), d);
      } finally {
        ((Be = r), (Ac = !1));
      }
    }
    return null;
  }
  var As = [],
    Ts = 0,
    ia = null,
    aa = 0,
    en = [],
    tn = 0,
    Vr = null,
    Kn = 1,
    Gn = "";
  function Or(n, r) {
    ((As[Ts++] = aa), (As[Ts++] = ia), (ia = n), (aa = r));
  }
  function dm(n, r, i) {
    ((en[tn++] = Kn), (en[tn++] = Gn), (en[tn++] = Vr), (Vr = n));
    var l = Kn;
    n = Gn;
    var d = 32 - mn(l) - 1;
    ((l &= ~(1 << d)), (i += 1));
    var m = 32 - mn(r) + d;
    if (30 < m) {
      var v = d - (d % 5);
      ((m = (l & ((1 << v) - 1)).toString(32)), (l >>= v), (d -= v), (Kn = (1 << (32 - mn(r) + d)) | (i << d) | l), (Gn = m + n));
    } else ((Kn = (1 << m) | (i << d) | l), (Gn = n));
  }
  function Tc(n) {
    n.return !== null && (Or(n, 1), dm(n, 1, 0));
  }
  function Dc(n) {
    for (; n === ia; ) ((ia = As[--Ts]), (As[Ts] = null), (aa = As[--Ts]), (As[Ts] = null));
    for (; n === Vr; ) ((Vr = en[--tn]), (en[tn] = null), (Gn = en[--tn]), (en[tn] = null), (Kn = en[--tn]), (en[tn] = null));
  }
  var Gt = null,
    qt = null,
    qe = !1,
    gn = null;
  function fm(n, r) {
    var i = on(5, null, null, 0);
    ((i.elementType = "DELETED"), (i.stateNode = r), (i.return = n), (r = n.deletions), r === null ? ((n.deletions = [i]), (n.flags |= 16)) : r.push(i));
  }
  function hm(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return ((r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r), r !== null ? ((n.stateNode = r), (Gt = n), (qt = ur(r.firstChild)), !0) : !1);
      case 6:
        return ((r = n.pendingProps === "" || r.nodeType !== 3 ? null : r), r !== null ? ((n.stateNode = r), (Gt = n), (qt = null), !0) : !1);
      case 13:
        return ((r = r.nodeType !== 8 ? null : r), r !== null ? ((i = Vr !== null ? { id: Kn, overflow: Gn } : null), (n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }), (i = on(18, null, null, 0)), (i.stateNode = r), (i.return = n), (n.child = i), (Gt = n), (qt = null), !0) : !1);
      default:
        return !1;
    }
  }
  function Rc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Mc(n) {
    if (qe) {
      var r = qt;
      if (r) {
        var i = r;
        if (!hm(n, r)) {
          if (Rc(n)) throw Error(s(418));
          r = ur(i.nextSibling);
          var l = Gt;
          r && hm(n, r) ? fm(l, i) : ((n.flags = (n.flags & -4097) | 2), (qe = !1), (Gt = n));
        }
      } else {
        if (Rc(n)) throw Error(s(418));
        ((n.flags = (n.flags & -4097) | 2), (qe = !1), (Gt = n));
      }
    }
  }
  function mm(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Gt = n;
  }
  function la(n) {
    if (n !== Gt) return !1;
    if (!qe) return (mm(n), (qe = !0), !1);
    var r;
    if (((r = n.tag !== 3) && !(r = n.tag !== 5) && ((r = n.type), (r = r !== "head" && r !== "body" && !Sc(n.type, n.memoizedProps))), r && (r = qt))) {
      if (Rc(n)) throw (pm(), Error(s(418)));
      for (; r; ) (fm(n, r), (r = ur(r.nextSibling)));
    }
    if ((mm(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(s(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                qt = ur(n.nextSibling);
                break e;
              }
              r--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || r++;
          }
          n = n.nextSibling;
        }
        qt = null;
      }
    } else qt = Gt ? ur(n.stateNode.nextSibling) : null;
    return !0;
  }
  function pm() {
    for (var n = qt; n; ) n = ur(n.nextSibling);
  }
  function Ds() {
    ((qt = Gt = null), (qe = !1));
  }
  function Lc(n) {
    gn === null ? (gn = [n]) : gn.push(n);
  }
  var a2 = W.ReactCurrentBatchConfig;
  function Oo(n, r, i) {
    if (((n = i.ref), n !== null && typeof n != "function" && typeof n != "object")) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(s(309));
          var l = i.stateNode;
        }
        if (!l) throw Error(s(147, n));
        var d = l,
          m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m
          ? r.ref
          : ((r = function (v) {
              var b = d.refs;
              v === null ? delete b[m] : (b[m] = v);
            }),
            (r._stringRef = m),
            r);
      }
      if (typeof n != "string") throw Error(s(284));
      if (!i._owner) throw Error(s(290, n));
    }
    return n;
  }
  function ca(n, r) {
    throw ((n = Object.prototype.toString.call(r)), Error(s(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n)));
  }
  function gm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ym(n) {
    function r(R, P) {
      if (n) {
        var L = R.deletions;
        L === null ? ((R.deletions = [P]), (R.flags |= 16)) : L.push(P);
      }
    }
    function i(R, P) {
      if (!n) return null;
      for (; P !== null; ) (r(R, P), (P = P.sibling));
      return null;
    }
    function l(R, P) {
      for (R = new Map(); P !== null; ) (P.key !== null ? R.set(P.key, P) : R.set(P.index, P), (P = P.sibling));
      return R;
    }
    function d(R, P) {
      return ((R = br(R, P)), (R.index = 0), (R.sibling = null), R);
    }
    function m(R, P, L) {
      return ((R.index = L), n ? ((L = R.alternate), L !== null ? ((L = L.index), L < P ? ((R.flags |= 2), P) : L) : ((R.flags |= 2), P)) : ((R.flags |= 1048576), P));
    }
    function v(R) {
      return (n && R.alternate === null && (R.flags |= 2), R);
    }
    function b(R, P, L, Q) {
      return P === null || P.tag !== 6 ? ((P = Eu(L, R.mode, Q)), (P.return = R), P) : ((P = d(P, L)), (P.return = R), P);
    }
    function E(R, P, L, Q) {
      var fe = L.type;
      return fe === G ? K(R, P, L.props.children, Q, L.key) : P !== null && (P.elementType === fe || (typeof fe == "object" && fe !== null && fe.$$typeof === Pe && gm(fe) === P.type)) ? ((Q = d(P, L.props)), (Q.ref = Oo(R, P, L)), (Q.return = R), Q) : ((Q = Ma(L.type, L.key, L.props, null, R.mode, Q)), (Q.ref = Oo(R, P, L)), (Q.return = R), Q);
    }
    function I(R, P, L, Q) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== L.containerInfo || P.stateNode.implementation !== L.implementation ? ((P = Nu(L, R.mode, Q)), (P.return = R), P) : ((P = d(P, L.children || [])), (P.return = R), P);
    }
    function K(R, P, L, Q, fe) {
      return P === null || P.tag !== 7 ? ((P = Kr(L, R.mode, Q, fe)), (P.return = R), P) : ((P = d(P, L)), (P.return = R), P);
    }
    function Y(R, P, L) {
      if ((typeof P == "string" && P !== "") || typeof P == "number") return ((P = Eu("" + P, R.mode, L)), (P.return = R), P);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case $:
            return ((L = Ma(P.type, P.key, P.props, null, R.mode, L)), (L.ref = Oo(R, null, P)), (L.return = R), L);
          case q:
            return ((P = Nu(P, R.mode, L)), (P.return = R), P);
          case Pe:
            var Q = P._init;
            return Y(R, Q(P._payload), L);
        }
        if (fs(P) || oe(P)) return ((P = Kr(P, R.mode, L, null)), (P.return = R), P);
        ca(R, P);
      }
      return null;
    }
    function H(R, P, L, Q) {
      var fe = P !== null ? P.key : null;
      if ((typeof L == "string" && L !== "") || typeof L == "number") return fe !== null ? null : b(R, P, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case $:
            return L.key === fe ? E(R, P, L, Q) : null;
          case q:
            return L.key === fe ? I(R, P, L, Q) : null;
          case Pe:
            return ((fe = L._init), H(R, P, fe(L._payload), Q));
        }
        if (fs(L) || oe(L)) return fe !== null ? null : K(R, P, L, Q, null);
        ca(R, L);
      }
      return null;
    }
    function te(R, P, L, Q, fe) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number") return ((R = R.get(L) || null), b(P, R, "" + Q, fe));
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case $:
            return ((R = R.get(Q.key === null ? L : Q.key) || null), E(P, R, Q, fe));
          case q:
            return ((R = R.get(Q.key === null ? L : Q.key) || null), I(P, R, Q, fe));
          case Pe:
            var we = Q._init;
            return te(R, P, L, we(Q._payload), fe);
        }
        if (fs(Q) || oe(Q)) return ((R = R.get(L) || null), K(P, R, Q, fe, null));
        ca(P, Q);
      }
      return null;
    }
    function ae(R, P, L, Q) {
      for (var fe = null, we = null, xe = P, ke = (P = 0), vt = null; xe !== null && ke < L.length; ke++) {
        xe.index > ke ? ((vt = xe), (xe = null)) : (vt = xe.sibling);
        var Ie = H(R, xe, L[ke], Q);
        if (Ie === null) {
          xe === null && (xe = vt);
          break;
        }
        (n && xe && Ie.alternate === null && r(R, xe), (P = m(Ie, P, ke)), we === null ? (fe = Ie) : (we.sibling = Ie), (we = Ie), (xe = vt));
      }
      if (ke === L.length) return (i(R, xe), qe && Or(R, ke), fe);
      if (xe === null) {
        for (; ke < L.length; ke++) ((xe = Y(R, L[ke], Q)), xe !== null && ((P = m(xe, P, ke)), we === null ? (fe = xe) : (we.sibling = xe), (we = xe)));
        return (qe && Or(R, ke), fe);
      }
      for (xe = l(R, xe); ke < L.length; ke++) ((vt = te(xe, R, ke, L[ke], Q)), vt !== null && (n && vt.alternate !== null && xe.delete(vt.key === null ? ke : vt.key), (P = m(vt, P, ke)), we === null ? (fe = vt) : (we.sibling = vt), (we = vt)));
      return (
        n &&
          xe.forEach(function (kr) {
            return r(R, kr);
          }),
        qe && Or(R, ke),
        fe
      );
    }
    function ue(R, P, L, Q) {
      var fe = oe(L);
      if (typeof fe != "function") throw Error(s(150));
      if (((L = fe.call(L)), L == null)) throw Error(s(151));
      for (var we = (fe = null), xe = P, ke = (P = 0), vt = null, Ie = L.next(); xe !== null && !Ie.done; ke++, Ie = L.next()) {
        xe.index > ke ? ((vt = xe), (xe = null)) : (vt = xe.sibling);
        var kr = H(R, xe, Ie.value, Q);
        if (kr === null) {
          xe === null && (xe = vt);
          break;
        }
        (n && xe && kr.alternate === null && r(R, xe), (P = m(kr, P, ke)), we === null ? (fe = kr) : (we.sibling = kr), (we = kr), (xe = vt));
      }
      if (Ie.done) return (i(R, xe), qe && Or(R, ke), fe);
      if (xe === null) {
        for (; !Ie.done; ke++, Ie = L.next()) ((Ie = Y(R, Ie.value, Q)), Ie !== null && ((P = m(Ie, P, ke)), we === null ? (fe = Ie) : (we.sibling = Ie), (we = Ie)));
        return (qe && Or(R, ke), fe);
      }
      for (xe = l(R, xe); !Ie.done; ke++, Ie = L.next()) ((Ie = te(xe, R, ke, Ie.value, Q)), Ie !== null && (n && Ie.alternate !== null && xe.delete(Ie.key === null ? ke : Ie.key), (P = m(Ie, P, ke)), we === null ? (fe = Ie) : (we.sibling = Ie), (we = Ie)));
      return (
        n &&
          xe.forEach(function (B2) {
            return r(R, B2);
          }),
        qe && Or(R, ke),
        fe
      );
    }
    function rt(R, P, L, Q) {
      if ((typeof L == "object" && L !== null && L.type === G && L.key === null && (L = L.props.children), typeof L == "object" && L !== null)) {
        switch (L.$$typeof) {
          case $:
            e: {
              for (var fe = L.key, we = P; we !== null; ) {
                if (we.key === fe) {
                  if (((fe = L.type), fe === G)) {
                    if (we.tag === 7) {
                      (i(R, we.sibling), (P = d(we, L.props.children)), (P.return = R), (R = P));
                      break e;
                    }
                  } else if (we.elementType === fe || (typeof fe == "object" && fe !== null && fe.$$typeof === Pe && gm(fe) === we.type)) {
                    (i(R, we.sibling), (P = d(we, L.props)), (P.ref = Oo(R, we, L)), (P.return = R), (R = P));
                    break e;
                  }
                  i(R, we);
                  break;
                } else r(R, we);
                we = we.sibling;
              }
              L.type === G ? ((P = Kr(L.props.children, R.mode, Q, L.key)), (P.return = R), (R = P)) : ((Q = Ma(L.type, L.key, L.props, null, R.mode, Q)), (Q.ref = Oo(R, P, L)), (Q.return = R), (R = Q));
            }
            return v(R);
          case q:
            e: {
              for (we = L.key; P !== null; ) {
                if (P.key === we)
                  if (P.tag === 4 && P.stateNode.containerInfo === L.containerInfo && P.stateNode.implementation === L.implementation) {
                    (i(R, P.sibling), (P = d(P, L.children || [])), (P.return = R), (R = P));
                    break e;
                  } else {
                    i(R, P);
                    break;
                  }
                else r(R, P);
                P = P.sibling;
              }
              ((P = Nu(L, R.mode, Q)), (P.return = R), (R = P));
            }
            return v(R);
          case Pe:
            return ((we = L._init), rt(R, P, we(L._payload), Q));
        }
        if (fs(L)) return ae(R, P, L, Q);
        if (oe(L)) return ue(R, P, L, Q);
        ca(R, L);
      }
      return (typeof L == "string" && L !== "") || typeof L == "number" ? ((L = "" + L), P !== null && P.tag === 6 ? (i(R, P.sibling), (P = d(P, L)), (P.return = R), (R = P)) : (i(R, P), (P = Eu(L, R.mode, Q)), (P.return = R), (R = P)), v(R)) : i(R, P);
    }
    return rt;
  }
  var Rs = ym(!0),
    vm = ym(!1),
    ua = dr(null),
    da = null,
    Ms = null,
    _c = null;
  function Ic() {
    _c = Ms = da = null;
  }
  function Vc(n) {
    var r = ua.current;
    (He(ua), (n._currentValue = r));
  }
  function Oc(n, r, i) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (((n.childLanes & r) !== r ? ((n.childLanes |= r), l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), n === i)) break;
      n = n.return;
    }
  }
  function Ls(n, r) {
    ((da = n), (_c = Ms = null), (n = n.dependencies), n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (zt = !0), (n.firstContext = null)));
  }
  function nn(n) {
    var r = n._currentValue;
    if (_c !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), Ms === null)) {
        if (da === null) throw Error(s(308));
        ((Ms = n), (da.dependencies = { lanes: 0, firstContext: n }));
      } else Ms = Ms.next = n;
    return r;
  }
  var Fr = null;
  function Fc(n) {
    Fr === null ? (Fr = [n]) : Fr.push(n);
  }
  function wm(n, r, i, l) {
    var d = r.interleaved;
    return (d === null ? ((i.next = i), Fc(r)) : ((i.next = d.next), (d.next = i)), (r.interleaved = i), qn(n, l));
  }
  function qn(n, r) {
    n.lanes |= r;
    var i = n.alternate;
    for (i !== null && (i.lanes |= r), i = n, n = n.return; n !== null; ) ((n.childLanes |= r), (i = n.alternate), i !== null && (i.childLanes |= r), (i = n), (n = n.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var mr = !1;
  function Bc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xm(n, r) {
    ((n = n.updateQueue), r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects }));
  }
  function Yn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function pr(n, r, i) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (_e & 2) !== 0)) {
      var d = l.pending;
      return (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)), (l.pending = r), qn(n, i));
    }
    return ((d = l.interleaved), d === null ? ((r.next = r), Fc(l)) : ((r.next = d.next), (d.next = r)), (l.interleaved = r), qn(n, i));
  }
  function fa(n, r, i) {
    if (((r = r.updateQueue), r !== null && ((r = r.shared), (i & 4194240) !== 0))) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (i |= l), (r.lanes = i), ec(n, i));
    }
  }
  function bm(n, r) {
    var i = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var d = null,
        m = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          (m === null ? (d = m = v) : (m = m.next = v), (i = i.next));
        } while (i !== null);
        m === null ? (d = m = r) : (m = m.next = r);
      } else d = m = r;
      ((i = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: l.shared, effects: l.effects }), (n.updateQueue = i));
      return;
    }
    ((n = i.lastBaseUpdate), n === null ? (i.firstBaseUpdate = r) : (n.next = r), (i.lastBaseUpdate = r));
  }
  function ha(n, r, i, l) {
    var d = n.updateQueue;
    mr = !1;
    var m = d.firstBaseUpdate,
      v = d.lastBaseUpdate,
      b = d.shared.pending;
    if (b !== null) {
      d.shared.pending = null;
      var E = b,
        I = E.next;
      ((E.next = null), v === null ? (m = I) : (v.next = I), (v = E));
      var K = n.alternate;
      K !== null && ((K = K.updateQueue), (b = K.lastBaseUpdate), b !== v && (b === null ? (K.firstBaseUpdate = I) : (b.next = I), (K.lastBaseUpdate = E)));
    }
    if (m !== null) {
      var Y = d.baseState;
      ((v = 0), (K = I = E = null), (b = m));
      do {
        var H = b.lane,
          te = b.eventTime;
        if ((l & H) === H) {
          K !== null && (K = K.next = { eventTime: te, lane: 0, tag: b.tag, payload: b.payload, callback: b.callback, next: null });
          e: {
            var ae = n,
              ue = b;
            switch (((H = r), (te = i), ue.tag)) {
              case 1:
                if (((ae = ue.payload), typeof ae == "function")) {
                  Y = ae.call(te, Y, H);
                  break e;
                }
                Y = ae;
                break e;
              case 3:
                ae.flags = (ae.flags & -65537) | 128;
              case 0:
                if (((ae = ue.payload), (H = typeof ae == "function" ? ae.call(te, Y, H) : ae), H == null)) break e;
                Y = Z({}, Y, H);
                break e;
              case 2:
                mr = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && ((n.flags |= 64), (H = d.effects), H === null ? (d.effects = [b]) : H.push(b));
        } else ((te = { eventTime: te, lane: H, tag: b.tag, payload: b.payload, callback: b.callback, next: null }), K === null ? ((I = K = te), (E = Y)) : (K = K.next = te), (v |= H));
        if (((b = b.next), b === null)) {
          if (((b = d.shared.pending), b === null)) break;
          ((H = b), (b = H.next), (H.next = null), (d.lastBaseUpdate = H), (d.shared.pending = null));
        }
      } while (!0);
      if ((K === null && (E = Y), (d.baseState = E), (d.firstBaseUpdate = I), (d.lastBaseUpdate = K), (r = d.shared.interleaved), r !== null)) {
        d = r;
        do ((v |= d.lane), (d = d.next));
        while (d !== r);
      } else m === null && (d.shared.lanes = 0);
      (($r |= v), (n.lanes = v), (n.memoizedState = Y));
    }
  }
  function km(n, r, i) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var l = n[r],
          d = l.callback;
        if (d !== null) {
          if (((l.callback = null), (l = i), typeof d != "function")) throw Error(s(191, d));
          d.call(l);
        }
      }
  }
  var Fo = {},
    Dn = dr(Fo),
    Bo = dr(Fo),
    zo = dr(Fo);
  function Br(n) {
    if (n === Fo) throw Error(s(174));
    return n;
  }
  function zc(n, r) {
    switch (($e(zo, r), $e(Bo, n), $e(Dn, Fo), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : X(null, "");
        break;
      default:
        ((n = n === 8 ? r.parentNode : r), (r = n.namespaceURI || null), (n = n.tagName), (r = X(r, n)));
    }
    (He(Dn), $e(Dn, r));
  }
  function _s() {
    (He(Dn), He(Bo), He(zo));
  }
  function Cm(n) {
    Br(zo.current);
    var r = Br(Dn.current),
      i = X(r, n.type);
    r !== i && ($e(Bo, n), $e(Dn, i));
  }
  function $c(n) {
    Bo.current === n && (He(Dn), He(Bo));
  }
  var Ye = dr(0);
  function ma(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  var Uc = [];
  function Wc() {
    for (var n = 0; n < Uc.length; n++) Uc[n]._workInProgressVersionPrimary = null;
    Uc.length = 0;
  }
  var pa = W.ReactCurrentDispatcher,
    Hc = W.ReactCurrentBatchConfig,
    zr = 0,
    Xe = null,
    dt = null,
    gt = null,
    ga = !1,
    $o = !1,
    Uo = 0,
    l2 = 0;
  function St() {
    throw Error(s(321));
  }
  function Kc(n, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < n.length; i++) if (!pn(n[i], r[i])) return !1;
    return !0;
  }
  function Gc(n, r, i, l, d, m) {
    if (((zr = m), (Xe = r), (r.memoizedState = null), (r.updateQueue = null), (r.lanes = 0), (pa.current = n === null || n.memoizedState === null ? f2 : h2), (n = i(l, d)), $o)) {
      m = 0;
      do {
        if ((($o = !1), (Uo = 0), 25 <= m)) throw Error(s(301));
        ((m += 1), (gt = dt = null), (r.updateQueue = null), (pa.current = m2), (n = i(l, d)));
      } while ($o);
    }
    if (((pa.current = wa), (r = dt !== null && dt.next !== null), (zr = 0), (gt = dt = Xe = null), (ga = !1), r)) throw Error(s(300));
    return n;
  }
  function qc() {
    var n = Uo !== 0;
    return ((Uo = 0), n);
  }
  function Rn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (gt === null ? (Xe.memoizedState = gt = n) : (gt = gt.next = n), gt);
  }
  function rn() {
    if (dt === null) {
      var n = Xe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = dt.next;
    var r = gt === null ? Xe.memoizedState : gt.next;
    if (r !== null) ((gt = r), (dt = n));
    else {
      if (n === null) throw Error(s(310));
      ((dt = n), (n = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }), gt === null ? (Xe.memoizedState = gt = n) : (gt = gt.next = n));
    }
    return gt;
  }
  function Wo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Yc(n) {
    var r = rn(),
      i = r.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = n;
    var l = dt,
      d = l.baseQueue,
      m = i.pending;
    if (m !== null) {
      if (d !== null) {
        var v = d.next;
        ((d.next = m.next), (m.next = v));
      }
      ((l.baseQueue = d = m), (i.pending = null));
    }
    if (d !== null) {
      ((m = d.next), (l = l.baseState));
      var b = (v = null),
        E = null,
        I = m;
      do {
        var K = I.lane;
        if ((zr & K) === K) (E !== null && (E = E.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), (l = I.hasEagerState ? I.eagerState : n(l, I.action)));
        else {
          var Y = { lane: K, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null };
          (E === null ? ((b = E = Y), (v = l)) : (E = E.next = Y), (Xe.lanes |= K), ($r |= K));
        }
        I = I.next;
      } while (I !== null && I !== m);
      (E === null ? (v = l) : (E.next = b), pn(l, r.memoizedState) || (zt = !0), (r.memoizedState = l), (r.baseState = v), (r.baseQueue = E), (i.lastRenderedState = l));
    }
    if (((n = i.interleaved), n !== null)) {
      d = n;
      do ((m = d.lane), (Xe.lanes |= m), ($r |= m), (d = d.next));
      while (d !== n);
    } else d === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Xc(n) {
    var r = rn(),
      i = r.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = n;
    var l = i.dispatch,
      d = i.pending,
      m = r.memoizedState;
    if (d !== null) {
      i.pending = null;
      var v = (d = d.next);
      do ((m = n(m, v.action)), (v = v.next));
      while (v !== d);
      (pn(m, r.memoizedState) || (zt = !0), (r.memoizedState = m), r.baseQueue === null && (r.baseState = m), (i.lastRenderedState = m));
    }
    return [m, l];
  }
  function Sm() {}
  function Em(n, r) {
    var i = Xe,
      l = rn(),
      d = r(),
      m = !pn(l.memoizedState, d);
    if ((m && ((l.memoizedState = d), (zt = !0)), (l = l.queue), Qc(jm.bind(null, i, l, n), [n]), l.getSnapshot !== r || m || (gt !== null && gt.memoizedState.tag & 1))) {
      if (((i.flags |= 2048), Ho(9, Pm.bind(null, i, l, d, r), void 0, null), yt === null)) throw Error(s(349));
      (zr & 30) !== 0 || Nm(i, r, d);
    }
    return d;
  }
  function Nm(n, r, i) {
    ((n.flags |= 16384), (n = { getSnapshot: r, value: i }), (r = Xe.updateQueue), r === null ? ((r = { lastEffect: null, stores: null }), (Xe.updateQueue = r), (r.stores = [n])) : ((i = r.stores), i === null ? (r.stores = [n]) : i.push(n)));
  }
  function Pm(n, r, i, l) {
    ((r.value = i), (r.getSnapshot = l), Am(r) && Tm(n));
  }
  function jm(n, r, i) {
    return i(function () {
      Am(r) && Tm(n);
    });
  }
  function Am(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !pn(n, i);
    } catch {
      return !0;
    }
  }
  function Tm(n) {
    var r = qn(n, 1);
    r !== null && xn(r, n, 1, -1);
  }
  function Dm(n) {
    var r = Rn();
    return (typeof n == "function" && (n = n()), (r.memoizedState = r.baseState = n), (n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wo, lastRenderedState: n }), (r.queue = n), (n = n.dispatch = d2.bind(null, Xe, n)), [r.memoizedState, n]);
  }
  function Ho(n, r, i, l) {
    return ((n = { tag: n, create: r, destroy: i, deps: l, next: null }), (r = Xe.updateQueue), r === null ? ((r = { lastEffect: null, stores: null }), (Xe.updateQueue = r), (r.lastEffect = n.next = n)) : ((i = r.lastEffect), i === null ? (r.lastEffect = n.next = n) : ((l = i.next), (i.next = n), (n.next = l), (r.lastEffect = n))), n);
  }
  function Rm() {
    return rn().memoizedState;
  }
  function ya(n, r, i, l) {
    var d = Rn();
    ((Xe.flags |= n), (d.memoizedState = Ho(1 | r, i, void 0, l === void 0 ? null : l)));
  }
  function va(n, r, i, l) {
    var d = rn();
    l = l === void 0 ? null : l;
    var m = void 0;
    if (dt !== null) {
      var v = dt.memoizedState;
      if (((m = v.destroy), l !== null && Kc(l, v.deps))) {
        d.memoizedState = Ho(r, i, m, l);
        return;
      }
    }
    ((Xe.flags |= n), (d.memoizedState = Ho(1 | r, i, m, l)));
  }
  function Mm(n, r) {
    return ya(8390656, 8, n, r);
  }
  function Qc(n, r) {
    return va(2048, 8, n, r);
  }
  function Lm(n, r) {
    return va(4, 2, n, r);
  }
  function _m(n, r) {
    return va(4, 4, n, r);
  }
  function Im(n, r) {
    if (typeof r == "function")
      return (
        (n = n()),
        r(n),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function Vm(n, r, i) {
    return ((i = i != null ? i.concat([n]) : null), va(4, 4, Im.bind(null, r, n), i));
  }
  function Zc() {}
  function Om(n, r) {
    var i = rn();
    r = r === void 0 ? null : r;
    var l = i.memoizedState;
    return l !== null && r !== null && Kc(r, l[1]) ? l[0] : ((i.memoizedState = [n, r]), n);
  }
  function Fm(n, r) {
    var i = rn();
    r = r === void 0 ? null : r;
    var l = i.memoizedState;
    return l !== null && r !== null && Kc(r, l[1]) ? l[0] : ((n = n()), (i.memoizedState = [n, r]), n);
  }
  function Bm(n, r, i) {
    return (zr & 21) === 0 ? (n.baseState && ((n.baseState = !1), (zt = !0)), (n.memoizedState = i)) : (pn(i, r) || ((i = gh()), (Xe.lanes |= i), ($r |= i), (n.baseState = !0)), r);
  }
  function c2(n, r) {
    var i = Be;
    ((Be = i !== 0 && 4 > i ? i : 4), n(!0));
    var l = Hc.transition;
    Hc.transition = {};
    try {
      (n(!1), r());
    } finally {
      ((Be = i), (Hc.transition = l));
    }
  }
  function zm() {
    return rn().memoizedState;
  }
  function u2(n, r, i) {
    var l = wr(n);
    if (((i = { lane: l, action: i, hasEagerState: !1, eagerState: null, next: null }), $m(n))) Um(r, i);
    else if (((i = wm(n, r, i, l)), i !== null)) {
      var d = Dt();
      (xn(i, n, l, d), Wm(i, r, l));
    }
  }
  function d2(n, r, i) {
    var l = wr(n),
      d = { lane: l, action: i, hasEagerState: !1, eagerState: null, next: null };
    if ($m(n)) Um(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && ((m = r.lastRenderedReducer), m !== null))
        try {
          var v = r.lastRenderedState,
            b = m(v, i);
          if (((d.hasEagerState = !0), (d.eagerState = b), pn(b, v))) {
            var E = r.interleaved;
            (E === null ? ((d.next = d), Fc(r)) : ((d.next = E.next), (E.next = d)), (r.interleaved = d));
            return;
          }
        } catch {
        } finally {
        }
      ((i = wm(n, r, d, l)), i !== null && ((d = Dt()), xn(i, n, l, d), Wm(i, r, l)));
    }
  }
  function $m(n) {
    var r = n.alternate;
    return n === Xe || (r !== null && r === Xe);
  }
  function Um(n, r) {
    $o = ga = !0;
    var i = n.pending;
    (i === null ? (r.next = r) : ((r.next = i.next), (i.next = r)), (n.pending = r));
  }
  function Wm(n, r, i) {
    if ((i & 4194240) !== 0) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (i |= l), (r.lanes = i), ec(n, i));
    }
  }
  var wa = { readContext: nn, useCallback: St, useContext: St, useEffect: St, useImperativeHandle: St, useInsertionEffect: St, useLayoutEffect: St, useMemo: St, useReducer: St, useRef: St, useState: St, useDebugValue: St, useDeferredValue: St, useTransition: St, useMutableSource: St, useSyncExternalStore: St, useId: St, unstable_isNewReconciler: !1 },
    f2 = {
      readContext: nn,
      useCallback: function (n, r) {
        return ((Rn().memoizedState = [n, r === void 0 ? null : r]), n);
      },
      useContext: nn,
      useEffect: Mm,
      useImperativeHandle: function (n, r, i) {
        return ((i = i != null ? i.concat([n]) : null), ya(4194308, 4, Im.bind(null, r, n), i));
      },
      useLayoutEffect: function (n, r) {
        return ya(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return ya(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var i = Rn();
        return ((r = r === void 0 ? null : r), (n = n()), (i.memoizedState = [n, r]), n);
      },
      useReducer: function (n, r, i) {
        var l = Rn();
        return ((r = i !== void 0 ? i(r) : r), (l.memoizedState = l.baseState = r), (n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }), (l.queue = n), (n = n.dispatch = u2.bind(null, Xe, n)), [l.memoizedState, n]);
      },
      useRef: function (n) {
        var r = Rn();
        return ((n = { current: n }), (r.memoizedState = n));
      },
      useState: Dm,
      useDebugValue: Zc,
      useDeferredValue: function (n) {
        return (Rn().memoizedState = n);
      },
      useTransition: function () {
        var n = Dm(!1),
          r = n[0];
        return ((n = c2.bind(null, n[1])), (Rn().memoizedState = n), [r, n]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, i) {
        var l = Xe,
          d = Rn();
        if (qe) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = r()), yt === null)) throw Error(s(349));
          (zr & 30) !== 0 || Nm(l, r, i);
        }
        d.memoizedState = i;
        var m = { value: i, getSnapshot: r };
        return ((d.queue = m), Mm(jm.bind(null, l, m, n), [n]), (l.flags |= 2048), Ho(9, Pm.bind(null, l, m, i, r), void 0, null), i);
      },
      useId: function () {
        var n = Rn(),
          r = yt.identifierPrefix;
        if (qe) {
          var i = Gn,
            l = Kn;
          ((i = (l & ~(1 << (32 - mn(l) - 1))).toString(32) + i), (r = ":" + r + "R" + i), (i = Uo++), 0 < i && (r += "H" + i.toString(32)), (r += ":"));
        } else ((i = l2++), (r = ":" + r + "r" + i.toString(32) + ":"));
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    h2 = {
      readContext: nn,
      useCallback: Om,
      useContext: nn,
      useEffect: Qc,
      useImperativeHandle: Vm,
      useInsertionEffect: Lm,
      useLayoutEffect: _m,
      useMemo: Fm,
      useReducer: Yc,
      useRef: Rm,
      useState: function () {
        return Yc(Wo);
      },
      useDebugValue: Zc,
      useDeferredValue: function (n) {
        var r = rn();
        return Bm(r, dt.memoizedState, n);
      },
      useTransition: function () {
        var n = Yc(Wo)[0],
          r = rn().memoizedState;
        return [n, r];
      },
      useMutableSource: Sm,
      useSyncExternalStore: Em,
      useId: zm,
      unstable_isNewReconciler: !1,
    },
    m2 = {
      readContext: nn,
      useCallback: Om,
      useContext: nn,
      useEffect: Qc,
      useImperativeHandle: Vm,
      useInsertionEffect: Lm,
      useLayoutEffect: _m,
      useMemo: Fm,
      useReducer: Xc,
      useRef: Rm,
      useState: function () {
        return Xc(Wo);
      },
      useDebugValue: Zc,
      useDeferredValue: function (n) {
        var r = rn();
        return dt === null ? (r.memoizedState = n) : Bm(r, dt.memoizedState, n);
      },
      useTransition: function () {
        var n = Xc(Wo)[0],
          r = rn().memoizedState;
        return [n, r];
      },
      useMutableSource: Sm,
      useSyncExternalStore: Em,
      useId: zm,
      unstable_isNewReconciler: !1,
    };
  function yn(n, r) {
    if (n && n.defaultProps) {
      ((r = Z({}, r)), (n = n.defaultProps));
      for (var i in n) r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  function Jc(n, r, i, l) {
    ((r = n.memoizedState), (i = i(l, r)), (i = i == null ? r : Z({}, r, i)), (n.memoizedState = i), n.lanes === 0 && (n.updateQueue.baseState = i));
  }
  var xa = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Lr(n) === n : !1;
    },
    enqueueSetState: function (n, r, i) {
      n = n._reactInternals;
      var l = Dt(),
        d = wr(n),
        m = Yn(l, d);
      ((m.payload = r), i != null && (m.callback = i), (r = pr(n, m, d)), r !== null && (xn(r, n, d, l), fa(r, n, d)));
    },
    enqueueReplaceState: function (n, r, i) {
      n = n._reactInternals;
      var l = Dt(),
        d = wr(n),
        m = Yn(l, d);
      ((m.tag = 1), (m.payload = r), i != null && (m.callback = i), (r = pr(n, m, d)), r !== null && (xn(r, n, d, l), fa(r, n, d)));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var i = Dt(),
        l = wr(n),
        d = Yn(i, l);
      ((d.tag = 2), r != null && (d.callback = r), (r = pr(n, d, l)), r !== null && (xn(r, n, l, i), fa(r, n, l)));
    },
  };
  function Hm(n, r, i, l, d, m, v) {
    return ((n = n.stateNode), typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, m, v) : r.prototype && r.prototype.isPureReactComponent ? !Do(i, l) || !Do(d, m) : !0);
  }
  function Km(n, r, i) {
    var l = !1,
      d = fr,
      m = r.contextType;
    return (typeof m == "object" && m !== null ? (m = nn(m)) : ((d = Bt(r) ? Ir : Ct.current), (l = r.contextTypes), (m = (l = l != null) ? js(n, d) : fr)), (r = new r(i, m)), (n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null), (r.updater = xa), (n.stateNode = r), (r._reactInternals = n), l && ((n = n.stateNode), (n.__reactInternalMemoizedUnmaskedChildContext = d), (n.__reactInternalMemoizedMaskedChildContext = m)), r);
  }
  function Gm(n, r, i, l) {
    ((n = r.state), typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, l), r.state !== n && xa.enqueueReplaceState(r, r.state, null));
  }
  function eu(n, r, i, l) {
    var d = n.stateNode;
    ((d.props = i), (d.state = n.memoizedState), (d.refs = {}), Bc(n));
    var m = r.contextType;
    (typeof m == "object" && m !== null ? (d.context = nn(m)) : ((m = Bt(r) ? Ir : Ct.current), (d.context = js(n, m))), (d.state = n.memoizedState), (m = r.getDerivedStateFromProps), typeof m == "function" && (Jc(n, r, m, i), (d.state = n.memoizedState)), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || (typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function") || ((r = d.state), typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && xa.enqueueReplaceState(d, d.state, null), ha(n, i, d, l), (d.state = n.memoizedState)), typeof d.componentDidMount == "function" && (n.flags |= 4194308));
  }
  function Is(n, r) {
    try {
      var i = "",
        l = r;
      do ((i += Ee(l)), (l = l.return));
      while (l);
      var d = i;
    } catch (m) {
      d =
        `
Error generating stack: ` +
        m.message +
        `
` +
        m.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function tu(n, r, i) {
    return { value: n, source: null, stack: i ?? null, digest: r ?? null };
  }
  function nu(n, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var p2 = typeof WeakMap == "function" ? WeakMap : Map;
  function qm(n, r, i) {
    ((i = Yn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var l = r.value;
    return (
      (i.callback = function () {
        (Pa || ((Pa = !0), (yu = l)), nu(n, r));
      }),
      i
    );
  }
  function Ym(n, r, i) {
    ((i = Yn(-1, i)), (i.tag = 3));
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = r.value;
      ((i.payload = function () {
        return l(d);
      }),
        (i.callback = function () {
          nu(n, r);
        }));
    }
    var m = n.stateNode;
    return (
      m !== null &&
        typeof m.componentDidCatch == "function" &&
        (i.callback = function () {
          (nu(n, r), typeof l != "function" && (yr === null ? (yr = new Set([this])) : yr.add(this)));
          var v = r.stack;
          this.componentDidCatch(r.value, { componentStack: v !== null ? v : "" });
        }),
      i
    );
  }
  function Xm(n, r, i) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new p2();
      var d = new Set();
      l.set(r, d);
    } else ((d = l.get(r)), d === void 0 && ((d = new Set()), l.set(r, d)));
    d.has(i) || (d.add(i), (n = A2.bind(null, n, r, i)), r.then(n, n));
  }
  function Qm(n) {
    do {
      var r;
      if (((r = n.tag === 13) && ((r = n.memoizedState), (r = r !== null ? r.dehydrated !== null : !0)), r)) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zm(n, r, i, l, d) {
    return (n.mode & 1) === 0 ? (n === r ? (n.flags |= 65536) : ((n.flags |= 128), (i.flags |= 131072), (i.flags &= -52805), i.tag === 1 && (i.alternate === null ? (i.tag = 17) : ((r = Yn(-1, 1)), (r.tag = 2), pr(i, r, 1))), (i.lanes |= 1)), n) : ((n.flags |= 65536), (n.lanes = d), n);
  }
  var g2 = W.ReactCurrentOwner,
    zt = !1;
  function Tt(n, r, i, l) {
    r.child = n === null ? vm(r, null, i, l) : Rs(r, n.child, i, l);
  }
  function Jm(n, r, i, l, d) {
    i = i.render;
    var m = r.ref;
    return (Ls(r, d), (l = Gc(n, r, i, l, m, d)), (i = qc()), n !== null && !zt ? ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~d), Xn(n, r, d)) : (qe && i && Tc(r), (r.flags |= 1), Tt(n, r, l, d), r.child));
  }
  function ep(n, r, i, l, d) {
    if (n === null) {
      var m = i.type;
      return typeof m == "function" && !Su(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? ((r.tag = 15), (r.type = m), tp(n, r, m, l, d)) : ((n = Ma(i.type, null, l, r, r.mode, d)), (n.ref = r.ref), (n.return = r), (r.child = n));
    }
    if (((m = n.child), (n.lanes & d) === 0)) {
      var v = m.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Do), i(v, l) && n.ref === r.ref)) return Xn(n, r, d);
    }
    return ((r.flags |= 1), (n = br(m, l)), (n.ref = r.ref), (n.return = r), (r.child = n));
  }
  function tp(n, r, i, l, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Do(m, l) && n.ref === r.ref)
        if (((zt = !1), (r.pendingProps = l = m), (n.lanes & d) !== 0)) (n.flags & 131072) !== 0 && (zt = !0);
        else return ((r.lanes = n.lanes), Xn(n, r, d));
    }
    return ru(n, r, i, l, d);
  }
  function np(n, r, i) {
    var l = r.pendingProps,
      d = l.children,
      m = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if ((r.mode & 1) === 0) ((r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), $e(Os, Yt), (Yt |= i));
      else {
        if ((i & 1073741824) === 0) return ((n = m !== null ? m.baseLanes | i : i), (r.lanes = r.childLanes = 1073741824), (r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }), (r.updateQueue = null), $e(Os, Yt), (Yt |= n), null);
        ((r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (l = m !== null ? m.baseLanes : i), $e(Os, Yt), (Yt |= l));
      }
    else (m !== null ? ((l = m.baseLanes | i), (r.memoizedState = null)) : (l = i), $e(Os, Yt), (Yt |= l));
    return (Tt(n, r, d, i), r.child);
  }
  function rp(n, r) {
    var i = r.ref;
    ((n === null && i !== null) || (n !== null && n.ref !== i)) && ((r.flags |= 512), (r.flags |= 2097152));
  }
  function ru(n, r, i, l, d) {
    var m = Bt(i) ? Ir : Ct.current;
    return ((m = js(r, m)), Ls(r, d), (i = Gc(n, r, i, l, m, d)), (l = qc()), n !== null && !zt ? ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~d), Xn(n, r, d)) : (qe && l && Tc(r), (r.flags |= 1), Tt(n, r, i, d), r.child));
  }
  function sp(n, r, i, l, d) {
    if (Bt(i)) {
      var m = !0;
      sa(r);
    } else m = !1;
    if ((Ls(r, d), r.stateNode === null)) (ka(n, r), Km(r, i, l), eu(r, i, l, d), (l = !0));
    else if (n === null) {
      var v = r.stateNode,
        b = r.memoizedProps;
      v.props = b;
      var E = v.context,
        I = i.contextType;
      typeof I == "object" && I !== null ? (I = nn(I)) : ((I = Bt(i) ? Ir : Ct.current), (I = js(r, I)));
      var K = i.getDerivedStateFromProps,
        Y = typeof K == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      (Y || (typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function") || ((b !== l || E !== I) && Gm(r, v, l, I)), (mr = !1));
      var H = r.memoizedState;
      ((v.state = H), ha(r, l, v, d), (E = r.memoizedState), b !== l || H !== E || Ft.current || mr ? (typeof K == "function" && (Jc(r, i, K, l), (E = r.memoizedState)), (b = mr || Hm(r, i, b, l, H, E, I)) ? (Y || (typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function") || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (r.flags |= 4194308), (r.memoizedProps = l), (r.memoizedState = E)), (v.props = l), (v.state = E), (v.context = I), (l = b)) : (typeof v.componentDidMount == "function" && (r.flags |= 4194308), (l = !1)));
    } else {
      ((v = r.stateNode), xm(n, r), (b = r.memoizedProps), (I = r.type === r.elementType ? b : yn(r.type, b)), (v.props = I), (Y = r.pendingProps), (H = v.context), (E = i.contextType), typeof E == "object" && E !== null ? (E = nn(E)) : ((E = Bt(i) ? Ir : Ct.current), (E = js(r, E))));
      var te = i.getDerivedStateFromProps;
      ((K = typeof te == "function" || typeof v.getSnapshotBeforeUpdate == "function") || (typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function") || ((b !== Y || H !== E) && Gm(r, v, l, E)), (mr = !1), (H = r.memoizedState), (v.state = H), ha(r, l, v, d));
      var ae = r.memoizedState;
      b !== Y || H !== ae || Ft.current || mr ? (typeof te == "function" && (Jc(r, i, te, l), (ae = r.memoizedState)), (I = mr || Hm(r, i, I, l, H, ae, E) || !1) ? (K || (typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function") || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, ae, E), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(l, ae, E)), typeof v.componentDidUpdate == "function" && (r.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || (b === n.memoizedProps && H === n.memoizedState) || (r.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || (b === n.memoizedProps && H === n.memoizedState) || (r.flags |= 1024), (r.memoizedProps = l), (r.memoizedState = ae)), (v.props = l), (v.state = ae), (v.context = E), (l = I)) : (typeof v.componentDidUpdate != "function" || (b === n.memoizedProps && H === n.memoizedState) || (r.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || (b === n.memoizedProps && H === n.memoizedState) || (r.flags |= 1024), (l = !1));
    }
    return su(n, r, i, l, m, d);
  }
  function su(n, r, i, l, d, m) {
    rp(n, r);
    var v = (r.flags & 128) !== 0;
    if (!l && !v) return (d && cm(r, i, !1), Xn(n, r, m));
    ((l = r.stateNode), (g2.current = r));
    var b = v && typeof i.getDerivedStateFromError != "function" ? null : l.render();
    return ((r.flags |= 1), n !== null && v ? ((r.child = Rs(r, n.child, null, m)), (r.child = Rs(r, null, b, m))) : Tt(n, r, b, m), (r.memoizedState = l.state), d && cm(r, i, !0), r.child);
  }
  function op(n) {
    var r = n.stateNode;
    (r.pendingContext ? am(n, r.pendingContext, r.pendingContext !== r.context) : r.context && am(n, r.context, !1), zc(n, r.containerInfo));
  }
  function ip(n, r, i, l, d) {
    return (Ds(), Lc(d), (r.flags |= 256), Tt(n, r, i, l), r.child);
  }
  var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function iu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ap(n, r, i) {
    var l = r.pendingProps,
      d = Ye.current,
      m = !1,
      v = (r.flags & 128) !== 0,
      b;
    if (((b = v) || (b = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), b ? ((m = !0), (r.flags &= -129)) : (n === null || n.memoizedState !== null) && (d |= 1), $e(Ye, d & 1), n === null)) return (Mc(r), (n = r.memoizedState), n !== null && ((n = n.dehydrated), n !== null) ? ((r.mode & 1) === 0 ? (r.lanes = 1) : n.data === "$!" ? (r.lanes = 8) : (r.lanes = 1073741824), null) : ((v = l.children), (n = l.fallback), m ? ((l = r.mode), (m = r.child), (v = { mode: "hidden", children: v }), (l & 1) === 0 && m !== null ? ((m.childLanes = 0), (m.pendingProps = v)) : (m = La(v, l, 0, null)), (n = Kr(n, l, i, null)), (m.return = r), (n.return = r), (m.sibling = n), (r.child = m), (r.child.memoizedState = iu(i)), (r.memoizedState = ou), n) : au(r, v)));
    if (((d = n.memoizedState), d !== null && ((b = d.dehydrated), b !== null))) return y2(n, r, v, l, b, d, i);
    if (m) {
      ((m = l.fallback), (v = r.mode), (d = n.child), (b = d.sibling));
      var E = { mode: "hidden", children: l.children };
      return ((v & 1) === 0 && r.child !== d ? ((l = r.child), (l.childLanes = 0), (l.pendingProps = E), (r.deletions = null)) : ((l = br(d, E)), (l.subtreeFlags = d.subtreeFlags & 14680064)), b !== null ? (m = br(b, m)) : ((m = Kr(m, v, i, null)), (m.flags |= 2)), (m.return = r), (l.return = r), (l.sibling = m), (r.child = l), (l = m), (m = r.child), (v = n.child.memoizedState), (v = v === null ? iu(i) : { baseLanes: v.baseLanes | i, cachePool: null, transitions: v.transitions }), (m.memoizedState = v), (m.childLanes = n.childLanes & ~i), (r.memoizedState = ou), l);
    }
    return ((m = n.child), (n = m.sibling), (l = br(m, { mode: "visible", children: l.children })), (r.mode & 1) === 0 && (l.lanes = i), (l.return = r), (l.sibling = null), n !== null && ((i = r.deletions), i === null ? ((r.deletions = [n]), (r.flags |= 16)) : i.push(n)), (r.child = l), (r.memoizedState = null), l);
  }
  function au(n, r) {
    return ((r = La({ mode: "visible", children: r }, n.mode, 0, null)), (r.return = n), (n.child = r));
  }
  function ba(n, r, i, l) {
    return (l !== null && Lc(l), Rs(r, n.child, null, i), (n = au(r, r.pendingProps.children)), (n.flags |= 2), (r.memoizedState = null), n);
  }
  function y2(n, r, i, l, d, m, v) {
    if (i) return r.flags & 256 ? ((r.flags &= -257), (l = tu(Error(s(422)))), ba(n, r, v, l)) : r.memoizedState !== null ? ((r.child = n.child), (r.flags |= 128), null) : ((m = l.fallback), (d = r.mode), (l = La({ mode: "visible", children: l.children }, d, 0, null)), (m = Kr(m, d, v, null)), (m.flags |= 2), (l.return = r), (m.return = r), (l.sibling = m), (r.child = l), (r.mode & 1) !== 0 && Rs(r, n.child, null, v), (r.child.memoizedState = iu(v)), (r.memoizedState = ou), m);
    if ((r.mode & 1) === 0) return ba(n, r, v, null);
    if (d.data === "$!") {
      if (((l = d.nextSibling && d.nextSibling.dataset), l)) var b = l.dgst;
      return ((l = b), (m = Error(s(419))), (l = tu(m, l, void 0)), ba(n, r, v, l));
    }
    if (((b = (v & n.childLanes) !== 0), zt || b)) {
      if (((l = yt), l !== null)) {
        switch (v & -v) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        ((d = (d & (l.suspendedLanes | v)) !== 0 ? 0 : d), d !== 0 && d !== m.retryLane && ((m.retryLane = d), qn(n, d), xn(l, n, d, -1)));
      }
      return (Cu(), (l = tu(Error(s(421)))), ba(n, r, v, l));
    }
    return d.data === "$?" ? ((r.flags |= 128), (r.child = n.child), (r = T2.bind(null, n)), (d._reactRetry = r), null) : ((n = m.treeContext), (qt = ur(d.nextSibling)), (Gt = r), (qe = !0), (gn = null), n !== null && ((en[tn++] = Kn), (en[tn++] = Gn), (en[tn++] = Vr), (Kn = n.id), (Gn = n.overflow), (Vr = r)), (r = au(r, l.children)), (r.flags |= 4096), r);
  }
  function lp(n, r, i) {
    n.lanes |= r;
    var l = n.alternate;
    (l !== null && (l.lanes |= r), Oc(n.return, r, i));
  }
  function lu(n, r, i, l, d) {
    var m = n.memoizedState;
    m === null ? (n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: i, tailMode: d }) : ((m.isBackwards = r), (m.rendering = null), (m.renderingStartTime = 0), (m.last = l), (m.tail = i), (m.tailMode = d));
  }
  function cp(n, r, i) {
    var l = r.pendingProps,
      d = l.revealOrder,
      m = l.tail;
    if ((Tt(n, r, l.children, i), (l = Ye.current), (l & 2) !== 0)) ((l = (l & 1) | 2), (r.flags |= 128));
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && lp(n, i, r);
          else if (n.tag === 19) lp(n, i, r);
          else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      l &= 1;
    }
    if (($e(Ye, l), (r.mode & 1) === 0)) r.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (i = r.child, d = null; i !== null; ) ((n = i.alternate), n !== null && ma(n) === null && (d = i), (i = i.sibling));
          ((i = d), i === null ? ((d = r.child), (r.child = null)) : ((d = i.sibling), (i.sibling = null)), lu(r, !1, d, i, m));
          break;
        case "backwards":
          for (i = null, d = r.child, r.child = null; d !== null; ) {
            if (((n = d.alternate), n !== null && ma(n) === null)) {
              r.child = d;
              break;
            }
            ((n = d.sibling), (d.sibling = i), (i = d), (d = n));
          }
          lu(r, !0, i, null, m);
          break;
        case "together":
          lu(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ka(n, r) {
    (r.mode & 1) === 0 && n !== null && ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function Xn(n, r, i) {
    if ((n !== null && (r.dependencies = n.dependencies), ($r |= r.lanes), (i & r.childLanes) === 0)) return null;
    if (n !== null && r.child !== n.child) throw Error(s(153));
    if (r.child !== null) {
      for (n = r.child, i = br(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; ) ((n = n.sibling), (i = i.sibling = br(n, n.pendingProps)), (i.return = r));
      i.sibling = null;
    }
    return r.child;
  }
  function v2(n, r, i) {
    switch (r.tag) {
      case 3:
        (op(r), Ds());
        break;
      case 5:
        Cm(r);
        break;
      case 1:
        Bt(r.type) && sa(r);
        break;
      case 4:
        zc(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context,
          d = r.memoizedProps.value;
        ($e(ua, l._currentValue), (l._currentValue = d));
        break;
      case 13:
        if (((l = r.memoizedState), l !== null)) return l.dehydrated !== null ? ($e(Ye, Ye.current & 1), (r.flags |= 128), null) : (i & r.child.childLanes) !== 0 ? ap(n, r, i) : ($e(Ye, Ye.current & 1), (n = Xn(n, r, i)), n !== null ? n.sibling : null);
        $e(Ye, Ye.current & 1);
        break;
      case 19:
        if (((l = (i & r.childLanes) !== 0), (n.flags & 128) !== 0)) {
          if (l) return cp(n, r, i);
          r.flags |= 128;
        }
        if (((d = r.memoizedState), d !== null && ((d.rendering = null), (d.tail = null), (d.lastEffect = null)), $e(Ye, Ye.current), l)) break;
        return null;
      case 22:
      case 23:
        return ((r.lanes = 0), np(n, r, i));
    }
    return Xn(n, r, i);
  }
  var up, cu, dp, fp;
  ((up = function (n, r) {
    for (var i = r.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (cu = function () {}),
    (dp = function (n, r, i, l) {
      var d = n.memoizedProps;
      if (d !== l) {
        ((n = r.stateNode), Br(Dn.current));
        var m = null;
        switch (i) {
          case "input":
            ((d = us(n, d)), (l = us(n, l)), (m = []));
            break;
          case "select":
            ((d = Z({}, d, { value: void 0 })), (l = Z({}, l, { value: void 0 })), (m = []));
            break;
          case "textarea":
            ((d = S(n, d)), (l = S(n, l)), (m = []));
            break;
          default:
            typeof d.onClick != "function" && typeof l.onClick == "function" && (n.onclick = ta);
        }
        ps(i, l);
        var v;
        i = null;
        for (I in d)
          if (!l.hasOwnProperty(I) && d.hasOwnProperty(I) && d[I] != null)
            if (I === "style") {
              var b = d[I];
              for (v in b) b.hasOwnProperty(v) && (i || (i = {}), (i[v] = ""));
            } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (a.hasOwnProperty(I) ? m || (m = []) : (m = m || []).push(I, null));
        for (I in l) {
          var E = l[I];
          if (((b = d != null ? d[I] : void 0), l.hasOwnProperty(I) && E !== b && (E != null || b != null)))
            if (I === "style")
              if (b) {
                for (v in b) !b.hasOwnProperty(v) || (E && E.hasOwnProperty(v)) || (i || (i = {}), (i[v] = ""));
                for (v in E) E.hasOwnProperty(v) && b[v] !== E[v] && (i || (i = {}), (i[v] = E[v]));
              } else (i || (m || (m = []), m.push(I, i)), (i = E));
            else I === "dangerouslySetInnerHTML" ? ((E = E ? E.__html : void 0), (b = b ? b.__html : void 0), E != null && b !== E && (m = m || []).push(I, E)) : I === "children" ? (typeof E != "string" && typeof E != "number") || (m = m || []).push(I, "" + E) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (a.hasOwnProperty(I) ? (E != null && I === "onScroll" && We("scroll", n), m || b === E || (m = [])) : (m = m || []).push(I, E));
        }
        i && (m = m || []).push("style", i);
        var I = m;
        (r.updateQueue = I) && (r.flags |= 4);
      }
    }),
    (fp = function (n, r, i, l) {
      i !== l && (r.flags |= 4);
    }));
  function Ko(n, r) {
    if (!qe)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var i = null; r !== null; ) (r.alternate !== null && (i = r), (r = r.sibling));
          i === null ? (n.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = n.tail;
          for (var l = null; i !== null; ) (i.alternate !== null && (l = i), (i = i.sibling));
          l === null ? (r || n.tail === null ? (n.tail = null) : (n.tail.sibling = null)) : (l.sibling = null);
      }
  }
  function Et(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      i = 0,
      l = 0;
    if (r) for (var d = n.child; d !== null; ) ((i |= d.lanes | d.childLanes), (l |= d.subtreeFlags & 14680064), (l |= d.flags & 14680064), (d.return = n), (d = d.sibling));
    else for (d = n.child; d !== null; ) ((i |= d.lanes | d.childLanes), (l |= d.subtreeFlags), (l |= d.flags), (d.return = n), (d = d.sibling));
    return ((n.subtreeFlags |= l), (n.childLanes = i), r);
  }
  function w2(n, r, i) {
    var l = r.pendingProps;
    switch ((Dc(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Et(r), null);
      case 1:
        return (Bt(r.type) && ra(), Et(r), null);
      case 3:
        return ((l = r.stateNode), _s(), He(Ft), He(Ct), Wc(), l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)), (n === null || n.child === null) && (la(r) ? (r.flags |= 4) : n === null || (n.memoizedState.isDehydrated && (r.flags & 256) === 0) || ((r.flags |= 1024), gn !== null && (xu(gn), (gn = null)))), cu(n, r), Et(r), null);
      case 5:
        $c(r);
        var d = Br(zo.current);
        if (((i = r.type), n !== null && r.stateNode != null)) (dp(n, r, i, l, d), n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152)));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(s(166));
            return (Et(r), null);
          }
          if (((n = Br(Dn.current)), la(r))) {
            ((l = r.stateNode), (i = r.type));
            var m = r.memoizedProps;
            switch (((l[Tn] = r), (l[Io] = m), (n = (r.mode & 1) !== 0), i)) {
              case "dialog":
                (We("cancel", l), We("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Mo.length; d++) We(Mo[d], l);
                break;
              case "source":
                We("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (We("error", l), We("load", l));
                break;
              case "details":
                We("toggle", l);
                break;
              case "input":
                (Ri(l, m), We("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!m.multiple }), We("invalid", l));
                break;
              case "textarea":
                (_(l, m), We("invalid", l));
            }
            (ps(i, m), (d = null));
            for (var v in m)
              if (m.hasOwnProperty(v)) {
                var b = m[v];
                v === "children" ? (typeof b == "string" ? l.textContent !== b && (m.suppressHydrationWarning !== !0 && ea(l.textContent, b, n), (d = ["children", b])) : typeof b == "number" && l.textContent !== "" + b && (m.suppressHydrationWarning !== !0 && ea(l.textContent, b, n), (d = ["children", "" + b]))) : a.hasOwnProperty(v) && b != null && v === "onScroll" && We("scroll", l);
              }
            switch (i) {
              case "input":
                (Jt(l), Mi(l, m, !0));
                break;
              case "textarea":
                (Jt(l), ee(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (l.onclick = ta);
            }
            ((l = d), (r.updateQueue = l), l !== null && (r.flags |= 4));
          } else {
            ((v = d.nodeType === 9 ? d : d.ownerDocument), n === "http://www.w3.org/1999/xhtml" && (n = J(i)), n === "http://www.w3.org/1999/xhtml" ? (i === "script" ? ((n = v.createElement("div")), (n.innerHTML = "<script><\/script>"), (n = n.removeChild(n.firstChild))) : typeof l.is == "string" ? (n = v.createElement(i, { is: l.is })) : ((n = v.createElement(i)), i === "select" && ((v = n), l.multiple ? (v.multiple = !0) : l.size && (v.size = l.size)))) : (n = v.createElementNS(n, i)), (n[Tn] = r), (n[Io] = l), up(n, r, !1, !1), (r.stateNode = n));
            e: {
              switch (((v = po(i, l)), i)) {
                case "dialog":
                  (We("cancel", n), We("close", n), (d = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (We("load", n), (d = l));
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Mo.length; d++) We(Mo[d], n);
                  d = l;
                  break;
                case "source":
                  (We("error", n), (d = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (We("error", n), We("load", n), (d = l));
                  break;
                case "details":
                  (We("toggle", n), (d = l));
                  break;
                case "input":
                  (Ri(n, l), (d = us(n, l)), We("invalid", n));
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  ((n._wrapperState = { wasMultiple: !!l.multiple }), (d = Z({}, l, { value: void 0 })), We("invalid", n));
                  break;
                case "textarea":
                  (_(n, l), (d = S(n, l)), We("invalid", n));
                  break;
                default:
                  d = l;
              }
              (ps(i, d), (b = d));
              for (m in b)
                if (b.hasOwnProperty(m)) {
                  var E = b[m];
                  m === "style" ? ms(n, E) : m === "dangerouslySetInnerHTML" ? ((E = E ? E.__html : void 0), E != null && Re(n, E)) : m === "children" ? (typeof E == "string" ? (i !== "textarea" || E !== "") && ze(n, E) : typeof E == "number" && ze(n, "" + E)) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? E != null && m === "onScroll" && We("scroll", n) : E != null && O(n, m, E, v));
                }
              switch (i) {
                case "input":
                  (Jt(n), Mi(n, l, !1));
                  break;
                case "textarea":
                  (Jt(n), ee(n));
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + Me(l.value));
                  break;
                case "select":
                  ((n.multiple = !!l.multiple), (m = l.value), m != null ? Un(n, !!l.multiple, m, !1) : l.defaultValue != null && Un(n, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = ta);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return (Et(r), null);
      case 6:
        if (n && r.stateNode != null) fp(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(s(166));
          if (((i = Br(zo.current)), Br(Dn.current), la(r))) {
            if (((l = r.stateNode), (i = r.memoizedProps), (l[Tn] = r), (m = l.nodeValue !== i) && ((n = Gt), n !== null)))
              switch (n.tag) {
                case 3:
                  ea(l.nodeValue, i, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ea(l.nodeValue, i, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else ((l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l)), (l[Tn] = r), (r.stateNode = l));
        }
        return (Et(r), null);
      case 13:
        if ((He(Ye), (l = r.memoizedState), n === null || (n.memoizedState !== null && n.memoizedState.dehydrated !== null))) {
          if (qe && qt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) (pm(), Ds(), (r.flags |= 98560), (m = !1));
          else if (((m = la(r)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!m) throw Error(s(318));
              if (((m = r.memoizedState), (m = m !== null ? m.dehydrated : null), !m)) throw Error(s(317));
              m[Tn] = r;
            } else (Ds(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4));
            (Et(r), (m = !1));
          } else (gn !== null && (xu(gn), (gn = null)), (m = !0));
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? ((r.lanes = i), r) : ((l = l !== null), l !== (n !== null && n.memoizedState !== null) && l && ((r.child.flags |= 8192), (r.mode & 1) !== 0 && (n === null || (Ye.current & 1) !== 0 ? ft === 0 && (ft = 3) : Cu())), r.updateQueue !== null && (r.flags |= 4), Et(r), null);
      case 4:
        return (_s(), cu(n, r), n === null && Lo(r.stateNode.containerInfo), Et(r), null);
      case 10:
        return (Vc(r.type._context), Et(r), null);
      case 17:
        return (Bt(r.type) && ra(), Et(r), null);
      case 19:
        if ((He(Ye), (m = r.memoizedState), m === null)) return (Et(r), null);
        if (((l = (r.flags & 128) !== 0), (v = m.rendering), v === null))
          if (l) Ko(m, !1);
          else {
            if (ft !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((v = ma(n)), v !== null)) {
                  for (r.flags |= 128, Ko(m, !1), l = v.updateQueue, l !== null && ((r.updateQueue = l), (r.flags |= 4)), r.subtreeFlags = 0, l = i, i = r.child; i !== null; ) ((m = i), (n = l), (m.flags &= 14680066), (v = m.alternate), v === null ? ((m.childLanes = 0), (m.lanes = n), (m.child = null), (m.subtreeFlags = 0), (m.memoizedProps = null), (m.memoizedState = null), (m.updateQueue = null), (m.dependencies = null), (m.stateNode = null)) : ((m.childLanes = v.childLanes), (m.lanes = v.lanes), (m.child = v.child), (m.subtreeFlags = 0), (m.deletions = null), (m.memoizedProps = v.memoizedProps), (m.memoizedState = v.memoizedState), (m.updateQueue = v.updateQueue), (m.type = v.type), (n = v.dependencies), (m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext })), (i = i.sibling));
                  return ($e(Ye, (Ye.current & 1) | 2), r.child);
                }
                n = n.sibling;
              }
            m.tail !== null && nt() > Fs && ((r.flags |= 128), (l = !0), Ko(m, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = ma(v)), n !== null)) {
              if (((r.flags |= 128), (l = !0), (i = n.updateQueue), i !== null && ((r.updateQueue = i), (r.flags |= 4)), Ko(m, !0), m.tail === null && m.tailMode === "hidden" && !v.alternate && !qe)) return (Et(r), null);
            } else 2 * nt() - m.renderingStartTime > Fs && i !== 1073741824 && ((r.flags |= 128), (l = !0), Ko(m, !1), (r.lanes = 4194304));
          m.isBackwards ? ((v.sibling = r.child), (r.child = v)) : ((i = m.last), i !== null ? (i.sibling = v) : (r.child = v), (m.last = v));
        }
        return m.tail !== null ? ((r = m.tail), (m.rendering = r), (m.tail = r.sibling), (m.renderingStartTime = nt()), (r.sibling = null), (i = Ye.current), $e(Ye, l ? (i & 1) | 2 : i & 1), r) : (Et(r), null);
      case 22:
      case 23:
        return (ku(), (l = r.memoizedState !== null), n !== null && (n.memoizedState !== null) !== l && (r.flags |= 8192), l && (r.mode & 1) !== 0 ? (Yt & 1073741824) !== 0 && (Et(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Et(r), null);
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function x2(n, r) {
    switch ((Dc(r), r.tag)) {
      case 1:
        return (Bt(r.type) && ra(), (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 3:
        return (_s(), He(Ft), He(Ct), Wc(), (n = r.flags), (n & 65536) !== 0 && (n & 128) === 0 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 5:
        return ($c(r), null);
      case 13:
        if ((He(Ye), (n = r.memoizedState), n !== null && n.dehydrated !== null)) {
          if (r.alternate === null) throw Error(s(340));
          Ds();
        }
        return ((n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 19:
        return (He(Ye), null);
      case 4:
        return (_s(), null);
      case 10:
        return (Vc(r.type._context), null);
      case 22:
      case 23:
        return (ku(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ca = !1,
    Nt = !1,
    b2 = typeof WeakSet == "function" ? WeakSet : Set,
    ie = null;
  function Vs(n, r) {
    var i = n.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          Je(n, r, l);
        }
      else i.current = null;
  }
  function uu(n, r, i) {
    try {
      i();
    } catch (l) {
      Je(n, r, l);
    }
  }
  var hp = !1;
  function k2(n, r) {
    if (((kc = Ui), (n = Hh()), mc(n))) {
      if ("selectionStart" in n) var i = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          i = ((i = n.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var d = l.anchorOffset,
              m = l.focusNode;
            l = l.focusOffset;
            try {
              (i.nodeType, m.nodeType);
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              b = -1,
              E = -1,
              I = 0,
              K = 0,
              Y = n,
              H = null;
            t: for (;;) {
              for (var te; Y !== i || (d !== 0 && Y.nodeType !== 3) || (b = v + d), Y !== m || (l !== 0 && Y.nodeType !== 3) || (E = v + l), Y.nodeType === 3 && (v += Y.nodeValue.length), (te = Y.firstChild) !== null; ) ((H = Y), (Y = te));
              for (;;) {
                if (Y === n) break t;
                if ((H === i && ++I === d && (b = v), H === m && ++K === l && (E = v), (te = Y.nextSibling) !== null)) break;
                ((Y = H), (H = Y.parentNode));
              }
              Y = te;
            }
            i = b === -1 || E === -1 ? null : { start: b, end: E };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Cc = { focusedElem: n, selectionRange: i }, Ui = !1, ie = r; ie !== null; )
      if (((r = ie), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)) ((n.return = r), (ie = n));
      else
        for (; ie !== null; ) {
          r = ie;
          try {
            var ae = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ae !== null) {
                    var ue = ae.memoizedProps,
                      rt = ae.memoizedState,
                      R = r.stateNode,
                      P = R.getSnapshotBeforeUpdate(r.elementType === r.type ? ue : yn(r.type, ue), rt);
                    R.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? (L.textContent = "") : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (Q) {
            Je(r, r.return, Q);
          }
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (ie = n));
            break;
          }
          ie = r.return;
        }
    return ((ae = hp), (hp = !1), ae);
  }
  function Go(n, r, i) {
    var l = r.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var d = (l = l.next);
      do {
        if ((d.tag & n) === n) {
          var m = d.destroy;
          ((d.destroy = void 0), m !== void 0 && uu(r, i, m));
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function Sa(n, r) {
    if (((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & n) === n) {
          var l = i.create;
          i.destroy = l();
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function du(n) {
    var r = n.ref;
    if (r !== null) {
      var i = n.stateNode;
      switch (n.tag) {
        case 5:
          n = i;
          break;
        default:
          n = i;
      }
      typeof r == "function" ? r(n) : (r.current = n);
    }
  }
  function mp(n) {
    var r = n.alternate;
    (r !== null && ((n.alternate = null), mp(r)), (n.child = null), (n.deletions = null), (n.sibling = null), n.tag === 5 && ((r = n.stateNode), r !== null && (delete r[Tn], delete r[Io], delete r[Pc], delete r[s2], delete r[o2])), (n.stateNode = null), (n.return = null), (n.dependencies = null), (n.memoizedProps = null), (n.memoizedState = null), (n.pendingProps = null), (n.stateNode = null), (n.updateQueue = null));
  }
  function pp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function gp(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || pp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function fu(n, r, i) {
    var l = n.tag;
    if (l === 5 || l === 6) ((n = n.stateNode), r ? (i.nodeType === 8 ? i.parentNode.insertBefore(n, r) : i.insertBefore(n, r)) : (i.nodeType === 8 ? ((r = i.parentNode), r.insertBefore(n, i)) : ((r = i), r.appendChild(n)), (i = i._reactRootContainer), i != null || r.onclick !== null || (r.onclick = ta)));
    else if (l !== 4 && ((n = n.child), n !== null)) for (fu(n, r, i), n = n.sibling; n !== null; ) (fu(n, r, i), (n = n.sibling));
  }
  function hu(n, r, i) {
    var l = n.tag;
    if (l === 5 || l === 6) ((n = n.stateNode), r ? i.insertBefore(n, r) : i.appendChild(n));
    else if (l !== 4 && ((n = n.child), n !== null)) for (hu(n, r, i), n = n.sibling; n !== null; ) (hu(n, r, i), (n = n.sibling));
  }
  var xt = null,
    vn = !1;
  function gr(n, r, i) {
    for (i = i.child; i !== null; ) (yp(n, r, i), (i = i.sibling));
  }
  function yp(n, r, i) {
    if (An && typeof An.onCommitFiberUnmount == "function")
      try {
        An.onCommitFiberUnmount(Vi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Nt || Vs(i, r);
      case 6:
        var l = xt,
          d = vn;
        ((xt = null), gr(n, r, i), (xt = l), (vn = d), xt !== null && (vn ? ((n = xt), (i = i.stateNode), n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : xt.removeChild(i.stateNode)));
        break;
      case 18:
        xt !== null && (vn ? ((n = xt), (i = i.stateNode), n.nodeType === 8 ? Nc(n.parentNode, i) : n.nodeType === 1 && Nc(n, i), Eo(n)) : Nc(xt, i.stateNode));
        break;
      case 4:
        ((l = xt), (d = vn), (xt = i.stateNode.containerInfo), (vn = !0), gr(n, r, i), (xt = l), (vn = d));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Nt && ((l = i.updateQueue), l !== null && ((l = l.lastEffect), l !== null))) {
          d = l = l.next;
          do {
            var m = d,
              v = m.destroy;
            ((m = m.tag), v !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && uu(i, r, v), (d = d.next));
          } while (d !== l);
        }
        gr(n, r, i);
        break;
      case 1:
        if (!Nt && (Vs(i, r), (l = i.stateNode), typeof l.componentWillUnmount == "function"))
          try {
            ((l.props = i.memoizedProps), (l.state = i.memoizedState), l.componentWillUnmount());
          } catch (b) {
            Je(i, r, b);
          }
        gr(n, r, i);
        break;
      case 21:
        gr(n, r, i);
        break;
      case 22:
        i.mode & 1 ? ((Nt = (l = Nt) || i.memoizedState !== null), gr(n, r, i), (Nt = l)) : gr(n, r, i);
        break;
      default:
        gr(n, r, i);
    }
  }
  function vp(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var i = n.stateNode;
      (i === null && (i = n.stateNode = new b2()),
        r.forEach(function (l) {
          var d = D2.bind(null, n, l);
          i.has(l) || (i.add(l), l.then(d, d));
        }));
    }
  }
  function wn(n, r) {
    var i = r.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var d = i[l];
        try {
          var m = n,
            v = r,
            b = v;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 5:
                ((xt = b.stateNode), (vn = !1));
                break e;
              case 3:
                ((xt = b.stateNode.containerInfo), (vn = !0));
                break e;
              case 4:
                ((xt = b.stateNode.containerInfo), (vn = !0));
                break e;
            }
            b = b.return;
          }
          if (xt === null) throw Error(s(160));
          (yp(m, v, d), (xt = null), (vn = !1));
          var E = d.alternate;
          (E !== null && (E.return = null), (d.return = null));
        } catch (I) {
          Je(d, r, I);
        }
      }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) (wp(r, n), (r = r.sibling));
  }
  function wp(n, r) {
    var i = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wn(r, n), Mn(n), l & 4)) {
          try {
            (Go(3, n, n.return), Sa(3, n));
          } catch (ue) {
            Je(n, n.return, ue);
          }
          try {
            Go(5, n, n.return);
          } catch (ue) {
            Je(n, n.return, ue);
          }
        }
        break;
      case 1:
        (wn(r, n), Mn(n), l & 512 && i !== null && Vs(i, i.return));
        break;
      case 5:
        if ((wn(r, n), Mn(n), l & 512 && i !== null && Vs(i, i.return), n.flags & 32)) {
          var d = n.stateNode;
          try {
            ze(d, "");
          } catch (ue) {
            Je(n, n.return, ue);
          }
        }
        if (l & 4 && ((d = n.stateNode), d != null)) {
          var m = n.memoizedProps,
            v = i !== null ? i.memoizedProps : m,
            b = n.type,
            E = n.updateQueue;
          if (((n.updateQueue = null), E !== null))
            try {
              (b === "input" && m.type === "radio" && m.name != null && ho(d, m), po(b, v));
              var I = po(b, m);
              for (v = 0; v < E.length; v += 2) {
                var K = E[v],
                  Y = E[v + 1];
                K === "style" ? ms(d, Y) : K === "dangerouslySetInnerHTML" ? Re(d, Y) : K === "children" ? ze(d, Y) : O(d, K, Y, I);
              }
              switch (b) {
                case "input":
                  ds(d, m);
                  break;
                case "textarea":
                  z(d, m);
                  break;
                case "select":
                  var H = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!m.multiple;
                  var te = m.value;
                  te != null ? Un(d, !!m.multiple, te, !1) : H !== !!m.multiple && (m.defaultValue != null ? Un(d, !!m.multiple, m.defaultValue, !0) : Un(d, !!m.multiple, m.multiple ? [] : "", !1));
              }
              d[Io] = m;
            } catch (ue) {
              Je(n, n.return, ue);
            }
        }
        break;
      case 6:
        if ((wn(r, n), Mn(n), l & 4)) {
          if (n.stateNode === null) throw Error(s(162));
          ((d = n.stateNode), (m = n.memoizedProps));
          try {
            d.nodeValue = m;
          } catch (ue) {
            Je(n, n.return, ue);
          }
        }
        break;
      case 3:
        if ((wn(r, n), Mn(n), l & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            Eo(r.containerInfo);
          } catch (ue) {
            Je(n, n.return, ue);
          }
        break;
      case 4:
        (wn(r, n), Mn(n));
        break;
      case 13:
        (wn(r, n), Mn(n), (d = n.child), d.flags & 8192 && ((m = d.memoizedState !== null), (d.stateNode.isHidden = m), !m || (d.alternate !== null && d.alternate.memoizedState !== null) || (gu = nt())), l & 4 && vp(n));
        break;
      case 22:
        if (((K = i !== null && i.memoizedState !== null), n.mode & 1 ? ((Nt = (I = Nt) || K), wn(r, n), (Nt = I)) : wn(r, n), Mn(n), l & 8192)) {
          if (((I = n.memoizedState !== null), (n.stateNode.isHidden = I) && !K && (n.mode & 1) !== 0))
            for (ie = n, K = n.child; K !== null; ) {
              for (Y = ie = K; ie !== null; ) {
                switch (((H = ie), (te = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Go(4, H, H.return);
                    break;
                  case 1:
                    Vs(H, H.return);
                    var ae = H.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      ((l = H), (i = H.return));
                      try {
                        ((r = l), (ae.props = r.memoizedProps), (ae.state = r.memoizedState), ae.componentWillUnmount());
                      } catch (ue) {
                        Je(l, i, ue);
                      }
                    }
                    break;
                  case 5:
                    Vs(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      kp(Y);
                      continue;
                    }
                }
                te !== null ? ((te.return = H), (ie = te)) : kp(Y);
              }
              K = K.sibling;
            }
          e: for (K = null, Y = n; ; ) {
            if (Y.tag === 5) {
              if (K === null) {
                K = Y;
                try {
                  ((d = Y.stateNode), I ? ((m = d.style), typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : (m.display = "none")) : ((b = Y.stateNode), (E = Y.memoizedProps.style), (v = E != null && E.hasOwnProperty("display") ? E.display : null), (b.style.display = hs("display", v))));
                } catch (ue) {
                  Je(n, n.return, ue);
                }
              }
            } else if (Y.tag === 6) {
              if (K === null)
                try {
                  Y.stateNode.nodeValue = I ? "" : Y.memoizedProps;
                } catch (ue) {
                  Je(n, n.return, ue);
                }
            } else if (((Y.tag !== 22 && Y.tag !== 23) || Y.memoizedState === null || Y === n) && Y.child !== null) {
              ((Y.child.return = Y), (Y = Y.child));
              continue;
            }
            if (Y === n) break e;
            for (; Y.sibling === null; ) {
              if (Y.return === null || Y.return === n) break e;
              (K === Y && (K = null), (Y = Y.return));
            }
            (K === Y && (K = null), (Y.sibling.return = Y.return), (Y = Y.sibling));
          }
        }
        break;
      case 19:
        (wn(r, n), Mn(n), l & 4 && vp(n));
        break;
      case 21:
        break;
      default:
        (wn(r, n), Mn(n));
    }
  }
  function Mn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = n.return; i !== null; ) {
            if (pp(i)) {
              var l = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (ze(d, ""), (l.flags &= -33));
            var m = gp(n);
            hu(n, m, d);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              b = gp(n);
            fu(n, b, v);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        Je(n, n.return, E);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function C2(n, r, i) {
    ((ie = n), xp(n));
  }
  function xp(n, r, i) {
    for (var l = (n.mode & 1) !== 0; ie !== null; ) {
      var d = ie,
        m = d.child;
      if (d.tag === 22 && l) {
        var v = d.memoizedState !== null || Ca;
        if (!v) {
          var b = d.alternate,
            E = (b !== null && b.memoizedState !== null) || Nt;
          b = Ca;
          var I = Nt;
          if (((Ca = v), (Nt = E) && !I)) for (ie = d; ie !== null; ) ((v = ie), (E = v.child), v.tag === 22 && v.memoizedState !== null ? Cp(d) : E !== null ? ((E.return = v), (ie = E)) : Cp(d));
          for (; m !== null; ) ((ie = m), xp(m), (m = m.sibling));
          ((ie = d), (Ca = b), (Nt = I));
        }
        bp(n);
      } else (d.subtreeFlags & 8772) !== 0 && m !== null ? ((m.return = d), (ie = m)) : bp(n);
    }
  }
  function bp(n) {
    for (; ie !== null; ) {
      var r = ie;
      if ((r.flags & 8772) !== 0) {
        var i = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Nt || Sa(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !Nt)
                  if (i === null) l.componentDidMount();
                  else {
                    var d = r.elementType === r.type ? i.memoizedProps : yn(r.type, i.memoizedProps);
                    l.componentDidUpdate(d, i.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && km(r, m, l);
                break;
              case 3:
                var v = r.updateQueue;
                if (v !== null) {
                  if (((i = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        i = r.child.stateNode;
                        break;
                      case 1:
                        i = r.child.stateNode;
                    }
                  km(r, v, i);
                }
                break;
              case 5:
                var b = r.stateNode;
                if (i === null && r.flags & 4) {
                  i = b;
                  var E = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      E.autoFocus && i.focus();
                      break;
                    case "img":
                      E.src && (i.src = E.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var I = r.alternate;
                  if (I !== null) {
                    var K = I.memoizedState;
                    if (K !== null) {
                      var Y = K.dehydrated;
                      Y !== null && Eo(Y);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Nt || (r.flags & 512 && du(r));
        } catch (H) {
          Je(r, r.return, H);
        }
      }
      if (r === n) {
        ie = null;
        break;
      }
      if (((i = r.sibling), i !== null)) {
        ((i.return = r.return), (ie = i));
        break;
      }
      ie = r.return;
    }
  }
  function kp(n) {
    for (; ie !== null; ) {
      var r = ie;
      if (r === n) {
        ie = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        ((i.return = r.return), (ie = i));
        break;
      }
      ie = r.return;
    }
  }
  function Cp(n) {
    for (; ie !== null; ) {
      var r = ie;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              Sa(4, r);
            } catch (E) {
              Je(r, i, E);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = r.return;
              try {
                l.componentDidMount();
              } catch (E) {
                Je(r, d, E);
              }
            }
            var m = r.return;
            try {
              du(r);
            } catch (E) {
              Je(r, m, E);
            }
            break;
          case 5:
            var v = r.return;
            try {
              du(r);
            } catch (E) {
              Je(r, v, E);
            }
        }
      } catch (E) {
        Je(r, r.return, E);
      }
      if (r === n) {
        ie = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        ((b.return = r.return), (ie = b));
        break;
      }
      ie = r.return;
    }
  }
  var S2 = Math.ceil,
    Ea = W.ReactCurrentDispatcher,
    mu = W.ReactCurrentOwner,
    sn = W.ReactCurrentBatchConfig,
    _e = 0,
    yt = null,
    at = null,
    bt = 0,
    Yt = 0,
    Os = dr(0),
    ft = 0,
    qo = null,
    $r = 0,
    Na = 0,
    pu = 0,
    Yo = null,
    $t = null,
    gu = 0,
    Fs = 1 / 0,
    Qn = null,
    Pa = !1,
    yu = null,
    yr = null,
    ja = !1,
    vr = null,
    Aa = 0,
    Xo = 0,
    vu = null,
    Ta = -1,
    Da = 0;
  function Dt() {
    return (_e & 6) !== 0 ? nt() : Ta !== -1 ? Ta : (Ta = nt());
  }
  function wr(n) {
    return (n.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && bt !== 0 ? bt & -bt : a2.transition !== null ? (Da === 0 && (Da = gh()), Da) : ((n = Be), n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Eh(n.type))), n);
  }
  function xn(n, r, i, l) {
    if (50 < Xo) throw ((Xo = 0), (vu = null), Error(s(185)));
    (xo(n, i, l), ((_e & 2) === 0 || n !== yt) && (n === yt && ((_e & 2) === 0 && (Na |= i), ft === 4 && xr(n, bt)), Ut(n, l), i === 1 && _e === 0 && (r.mode & 1) === 0 && ((Fs = nt() + 500), oa && hr())));
  }
  function Ut(n, r) {
    var i = n.callbackNode;
    ab(n, r);
    var l = Bi(n, n === yt ? bt : 0);
    if (l === 0) (i !== null && hh(i), (n.callbackNode = null), (n.callbackPriority = 0));
    else if (((r = l & -l), n.callbackPriority !== r)) {
      if ((i != null && hh(i), r === 1))
        (n.tag === 0 ? i2(Ep.bind(null, n)) : um(Ep.bind(null, n)),
          n2(function () {
            (_e & 6) === 0 && hr();
          }),
          (i = null));
      else {
        switch (yh(l)) {
          case 1:
            i = Ql;
            break;
          case 4:
            i = mh;
            break;
          case 16:
            i = Ii;
            break;
          case 536870912:
            i = ph;
            break;
          default:
            i = Ii;
        }
        i = Mp(i, Sp.bind(null, n));
      }
      ((n.callbackPriority = r), (n.callbackNode = i));
    }
  }
  function Sp(n, r) {
    if (((Ta = -1), (Da = 0), (_e & 6) !== 0)) throw Error(s(327));
    var i = n.callbackNode;
    if (Bs() && n.callbackNode !== i) return null;
    var l = Bi(n, n === yt ? bt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || r) r = Ra(n, l);
    else {
      r = l;
      var d = _e;
      _e |= 2;
      var m = Pp();
      (yt !== n || bt !== r) && ((Qn = null), (Fs = nt() + 500), Wr(n, r));
      do
        try {
          P2();
          break;
        } catch (b) {
          Np(n, b);
        }
      while (!0);
      (Ic(), (Ea.current = m), (_e = d), at !== null ? (r = 0) : ((yt = null), (bt = 0), (r = ft)));
    }
    if (r !== 0) {
      if ((r === 2 && ((d = Zl(n)), d !== 0 && ((l = d), (r = wu(n, d)))), r === 1)) throw ((i = qo), Wr(n, 0), xr(n, l), Ut(n, nt()), i);
      if (r === 6) xr(n, l);
      else {
        if (((d = n.current.alternate), (l & 30) === 0 && !E2(d) && ((r = Ra(n, l)), r === 2 && ((m = Zl(n)), m !== 0 && ((l = m), (r = wu(n, m)))), r === 1))) throw ((i = qo), Wr(n, 0), xr(n, l), Ut(n, nt()), i);
        switch (((n.finishedWork = d), (n.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Hr(n, $t, Qn);
            break;
          case 3:
            if ((xr(n, l), (l & 130023424) === l && ((r = gu + 500 - nt()), 10 < r))) {
              if (Bi(n, 0) !== 0) break;
              if (((d = n.suspendedLanes), (d & l) !== l)) {
                (Dt(), (n.pingedLanes |= n.suspendedLanes & d));
                break;
              }
              n.timeoutHandle = Ec(Hr.bind(null, n, $t, Qn), r);
              break;
            }
            Hr(n, $t, Qn);
            break;
          case 4:
            if ((xr(n, l), (l & 4194240) === l)) break;
            for (r = n.eventTimes, d = -1; 0 < l; ) {
              var v = 31 - mn(l);
              ((m = 1 << v), (v = r[v]), v > d && (d = v), (l &= ~m));
            }
            if (((l = d), (l = nt() - l), (l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * S2(l / 1960)) - l), 10 < l)) {
              n.timeoutHandle = Ec(Hr.bind(null, n, $t, Qn), l);
              break;
            }
            Hr(n, $t, Qn);
            break;
          case 5:
            Hr(n, $t, Qn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (Ut(n, nt()), n.callbackNode === i ? Sp.bind(null, n) : null);
  }
  function wu(n, r) {
    var i = Yo;
    return (n.current.memoizedState.isDehydrated && (Wr(n, r).flags |= 256), (n = Ra(n, r)), n !== 2 && ((r = $t), ($t = i), r !== null && xu(r)), n);
  }
  function xu(n) {
    $t === null ? ($t = n) : $t.push.apply($t, n);
  }
  function E2(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var l = 0; l < i.length; l++) {
            var d = i[l],
              m = d.getSnapshot;
            d = d.value;
            try {
              if (!pn(m(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = r.child), r.subtreeFlags & 16384 && i !== null)) ((i.return = r), (r = i));
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function xr(n, r) {
    for (r &= ~pu, r &= ~Na, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - mn(r),
        l = 1 << i;
      ((n[i] = -1), (r &= ~l));
    }
  }
  function Ep(n) {
    if ((_e & 6) !== 0) throw Error(s(327));
    Bs();
    var r = Bi(n, 0);
    if ((r & 1) === 0) return (Ut(n, nt()), null);
    var i = Ra(n, r);
    if (n.tag !== 0 && i === 2) {
      var l = Zl(n);
      l !== 0 && ((r = l), (i = wu(n, l)));
    }
    if (i === 1) throw ((i = qo), Wr(n, 0), xr(n, r), Ut(n, nt()), i);
    if (i === 6) throw Error(s(345));
    return ((n.finishedWork = n.current.alternate), (n.finishedLanes = r), Hr(n, $t, Qn), Ut(n, nt()), null);
  }
  function bu(n, r) {
    var i = _e;
    _e |= 1;
    try {
      return n(r);
    } finally {
      ((_e = i), _e === 0 && ((Fs = nt() + 500), oa && hr()));
    }
  }
  function Ur(n) {
    vr !== null && vr.tag === 0 && (_e & 6) === 0 && Bs();
    var r = _e;
    _e |= 1;
    var i = sn.transition,
      l = Be;
    try {
      if (((sn.transition = null), (Be = 1), n)) return n();
    } finally {
      ((Be = l), (sn.transition = i), (_e = r), (_e & 6) === 0 && hr());
    }
  }
  function ku() {
    ((Yt = Os.current), He(Os));
  }
  function Wr(n, r) {
    ((n.finishedWork = null), (n.finishedLanes = 0));
    var i = n.timeoutHandle;
    if ((i !== -1 && ((n.timeoutHandle = -1), t2(i)), at !== null))
      for (i = at.return; i !== null; ) {
        var l = i;
        switch ((Dc(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && ra());
            break;
          case 3:
            (_s(), He(Ft), He(Ct), Wc());
            break;
          case 5:
            $c(l);
            break;
          case 4:
            _s();
            break;
          case 13:
            He(Ye);
            break;
          case 19:
            He(Ye);
            break;
          case 10:
            Vc(l.type._context);
            break;
          case 22:
          case 23:
            ku();
        }
        i = i.return;
      }
    if (((yt = n), (at = n = br(n.current, null)), (bt = Yt = r), (ft = 0), (qo = null), (pu = Na = $r = 0), ($t = Yo = null), Fr !== null)) {
      for (r = 0; r < Fr.length; r++)
        if (((i = Fr[r]), (l = i.interleaved), l !== null)) {
          i.interleaved = null;
          var d = l.next,
            m = i.pending;
          if (m !== null) {
            var v = m.next;
            ((m.next = d), (l.next = v));
          }
          i.pending = l;
        }
      Fr = null;
    }
    return n;
  }
  function Np(n, r) {
    do {
      var i = at;
      try {
        if ((Ic(), (pa.current = wa), ga)) {
          for (var l = Xe.memoizedState; l !== null; ) {
            var d = l.queue;
            (d !== null && (d.pending = null), (l = l.next));
          }
          ga = !1;
        }
        if (((zr = 0), (gt = dt = Xe = null), ($o = !1), (Uo = 0), (mu.current = null), i === null || i.return === null)) {
          ((ft = 1), (qo = r), (at = null));
          break;
        }
        e: {
          var m = n,
            v = i.return,
            b = i,
            E = r;
          if (((r = bt), (b.flags |= 32768), E !== null && typeof E == "object" && typeof E.then == "function")) {
            var I = E,
              K = b,
              Y = K.tag;
            if ((K.mode & 1) === 0 && (Y === 0 || Y === 11 || Y === 15)) {
              var H = K.alternate;
              H ? ((K.updateQueue = H.updateQueue), (K.memoizedState = H.memoizedState), (K.lanes = H.lanes)) : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var te = Qm(v);
            if (te !== null) {
              ((te.flags &= -257), Zm(te, v, b, m, r), te.mode & 1 && Xm(m, I, r), (r = te), (E = I));
              var ae = r.updateQueue;
              if (ae === null) {
                var ue = new Set();
                (ue.add(E), (r.updateQueue = ue));
              } else ae.add(E);
              break e;
            } else {
              if ((r & 1) === 0) {
                (Xm(m, I, r), Cu());
                break e;
              }
              E = Error(s(426));
            }
          } else if (qe && b.mode & 1) {
            var rt = Qm(v);
            if (rt !== null) {
              ((rt.flags & 65536) === 0 && (rt.flags |= 256), Zm(rt, v, b, m, r), Lc(Is(E, b)));
              break e;
            }
          }
          ((m = E = Is(E, b)), ft !== 4 && (ft = 2), Yo === null ? (Yo = [m]) : Yo.push(m), (m = v));
          do {
            switch (m.tag) {
              case 3:
                ((m.flags |= 65536), (r &= -r), (m.lanes |= r));
                var R = qm(m, E, r);
                bm(m, R);
                break e;
              case 1:
                b = E;
                var P = m.type,
                  L = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || (L !== null && typeof L.componentDidCatch == "function" && (yr === null || !yr.has(L))))) {
                  ((m.flags |= 65536), (r &= -r), (m.lanes |= r));
                  var Q = Ym(m, b, r);
                  bm(m, Q);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Ap(i);
      } catch (fe) {
        ((r = fe), at === i && i !== null && (at = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Pp() {
    var n = Ea.current;
    return ((Ea.current = wa), n === null ? wa : n);
  }
  function Cu() {
    ((ft === 0 || ft === 3 || ft === 2) && (ft = 4), yt === null || (($r & 268435455) === 0 && (Na & 268435455) === 0) || xr(yt, bt));
  }
  function Ra(n, r) {
    var i = _e;
    _e |= 2;
    var l = Pp();
    (yt !== n || bt !== r) && ((Qn = null), Wr(n, r));
    do
      try {
        N2();
        break;
      } catch (d) {
        Np(n, d);
      }
    while (!0);
    if ((Ic(), (_e = i), (Ea.current = l), at !== null)) throw Error(s(261));
    return ((yt = null), (bt = 0), ft);
  }
  function N2() {
    for (; at !== null; ) jp(at);
  }
  function P2() {
    for (; at !== null && !Z0(); ) jp(at);
  }
  function jp(n) {
    var r = Rp(n.alternate, n, Yt);
    ((n.memoizedProps = n.pendingProps), r === null ? Ap(n) : (at = r), (mu.current = null));
  }
  function Ap(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (((n = r.return), (r.flags & 32768) === 0)) {
        if (((i = w2(i, r, Yt)), i !== null)) {
          at = i;
          return;
        }
      } else {
        if (((i = x2(i, r)), i !== null)) {
          ((i.flags &= 32767), (at = i));
          return;
        }
        if (n !== null) ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null));
        else {
          ((ft = 6), (at = null));
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        at = r;
        return;
      }
      at = r = n;
    } while (r !== null);
    ft === 0 && (ft = 5);
  }
  function Hr(n, r, i) {
    var l = Be,
      d = sn.transition;
    try {
      ((sn.transition = null), (Be = 1), j2(n, r, i, l));
    } finally {
      ((sn.transition = d), (Be = l));
    }
    return null;
  }
  function j2(n, r, i, l) {
    do Bs();
    while (vr !== null);
    if ((_e & 6) !== 0) throw Error(s(327));
    i = n.finishedWork;
    var d = n.finishedLanes;
    if (i === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), i === n.current)) throw Error(s(177));
    ((n.callbackNode = null), (n.callbackPriority = 0));
    var m = i.lanes | i.childLanes;
    if (
      (lb(n, m),
      n === yt && ((at = yt = null), (bt = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        ja ||
        ((ja = !0),
        Mp(Ii, function () {
          return (Bs(), null);
        })),
      (m = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || m)
    ) {
      ((m = sn.transition), (sn.transition = null));
      var v = Be;
      Be = 1;
      var b = _e;
      ((_e |= 4), (mu.current = null), k2(n, i), wp(i, n), qb(Cc), (Ui = !!kc), (Cc = kc = null), (n.current = i), C2(i), J0(), (_e = b), (Be = v), (sn.transition = m));
    } else n.current = i;
    if ((ja && ((ja = !1), (vr = n), (Aa = d)), (m = n.pendingLanes), m === 0 && (yr = null), nb(i.stateNode), Ut(n, nt()), r !== null)) for (l = n.onRecoverableError, i = 0; i < r.length; i++) ((d = r[i]), l(d.value, { componentStack: d.stack, digest: d.digest }));
    if (Pa) throw ((Pa = !1), (n = yu), (yu = null), n);
    return ((Aa & 1) !== 0 && n.tag !== 0 && Bs(), (m = n.pendingLanes), (m & 1) !== 0 ? (n === vu ? Xo++ : ((Xo = 0), (vu = n))) : (Xo = 0), hr(), null);
  }
  function Bs() {
    if (vr !== null) {
      var n = yh(Aa),
        r = sn.transition,
        i = Be;
      try {
        if (((sn.transition = null), (Be = 16 > n ? 16 : n), vr === null)) var l = !1;
        else {
          if (((n = vr), (vr = null), (Aa = 0), (_e & 6) !== 0)) throw Error(s(331));
          var d = _e;
          for (_e |= 4, ie = n.current; ie !== null; ) {
            var m = ie,
              v = m.child;
            if ((ie.flags & 16) !== 0) {
              var b = m.deletions;
              if (b !== null) {
                for (var E = 0; E < b.length; E++) {
                  var I = b[E];
                  for (ie = I; ie !== null; ) {
                    var K = ie;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Go(8, K, m);
                    }
                    var Y = K.child;
                    if (Y !== null) ((Y.return = K), (ie = Y));
                    else
                      for (; ie !== null; ) {
                        K = ie;
                        var H = K.sibling,
                          te = K.return;
                        if ((mp(K), K === I)) {
                          ie = null;
                          break;
                        }
                        if (H !== null) {
                          ((H.return = te), (ie = H));
                          break;
                        }
                        ie = te;
                      }
                  }
                }
                var ae = m.alternate;
                if (ae !== null) {
                  var ue = ae.child;
                  if (ue !== null) {
                    ae.child = null;
                    do {
                      var rt = ue.sibling;
                      ((ue.sibling = null), (ue = rt));
                    } while (ue !== null);
                  }
                }
                ie = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && v !== null) ((v.return = m), (ie = v));
            else
              e: for (; ie !== null; ) {
                if (((m = ie), (m.flags & 2048) !== 0))
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(9, m, m.return);
                  }
                var R = m.sibling;
                if (R !== null) {
                  ((R.return = m.return), (ie = R));
                  break e;
                }
                ie = m.return;
              }
          }
          var P = n.current;
          for (ie = P; ie !== null; ) {
            v = ie;
            var L = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && L !== null) ((L.return = v), (ie = L));
            else
              e: for (v = P; ie !== null; ) {
                if (((b = ie), (b.flags & 2048) !== 0))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Sa(9, b);
                    }
                  } catch (fe) {
                    Je(b, b.return, fe);
                  }
                if (b === v) {
                  ie = null;
                  break e;
                }
                var Q = b.sibling;
                if (Q !== null) {
                  ((Q.return = b.return), (ie = Q));
                  break e;
                }
                ie = b.return;
              }
          }
          if (((_e = d), hr(), An && typeof An.onPostCommitFiberRoot == "function"))
            try {
              An.onPostCommitFiberRoot(Vi, n);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((Be = i), (sn.transition = r));
      }
    }
    return !1;
  }
  function Tp(n, r, i) {
    ((r = Is(i, r)), (r = qm(n, r, 1)), (n = pr(n, r, 1)), (r = Dt()), n !== null && (xo(n, 1, r), Ut(n, r)));
  }
  function Je(n, r, i) {
    if (n.tag === 3) Tp(n, n, i);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Tp(r, n, i);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || (typeof l.componentDidCatch == "function" && (yr === null || !yr.has(l)))) {
            ((n = Is(i, n)), (n = Ym(r, n, 1)), (r = pr(r, n, 1)), (n = Dt()), r !== null && (xo(r, 1, n), Ut(r, n)));
            break;
          }
        }
        r = r.return;
      }
  }
  function A2(n, r, i) {
    var l = n.pingCache;
    (l !== null && l.delete(r), (r = Dt()), (n.pingedLanes |= n.suspendedLanes & i), yt === n && (bt & i) === i && (ft === 4 || (ft === 3 && (bt & 130023424) === bt && 500 > nt() - gu) ? Wr(n, 0) : (pu |= i)), Ut(n, r));
  }
  function Dp(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? (r = 1) : ((r = Fi), (Fi <<= 1), (Fi & 130023424) === 0 && (Fi = 4194304)));
    var i = Dt();
    ((n = qn(n, r)), n !== null && (xo(n, r, i), Ut(n, i)));
  }
  function T2(n) {
    var r = n.memoizedState,
      i = 0;
    (r !== null && (i = r.retryLane), Dp(n, i));
  }
  function D2(n, r) {
    var i = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          d = n.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(r), Dp(n, i));
  }
  var Rp;
  Rp = function (n, r, i) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ft.current) zt = !0;
      else {
        if ((n.lanes & i) === 0 && (r.flags & 128) === 0) return ((zt = !1), v2(n, r, i));
        zt = (n.flags & 131072) !== 0;
      }
    else ((zt = !1), qe && (r.flags & 1048576) !== 0 && dm(r, aa, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        (ka(n, r), (n = r.pendingProps));
        var d = js(r, Ct.current);
        (Ls(r, i), (d = Gc(null, r, l, n, d, i)));
        var m = qc();
        return ((r.flags |= 1), typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? ((r.tag = 1), (r.memoizedState = null), (r.updateQueue = null), Bt(l) ? ((m = !0), sa(r)) : (m = !1), (r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null), Bc(r), (d.updater = xa), (r.stateNode = d), (d._reactInternals = r), eu(r, l, n, i), (r = su(null, r, l, !0, m, i))) : ((r.tag = 0), qe && m && Tc(r), Tt(null, r, d, i), (r = r.child)), r);
      case 16:
        l = r.elementType;
        e: {
          switch ((ka(n, r), (n = r.pendingProps), (d = l._init), (l = d(l._payload)), (r.type = l), (d = r.tag = M2(l)), (n = yn(l, n)), d)) {
            case 0:
              r = ru(null, r, l, n, i);
              break e;
            case 1:
              r = sp(null, r, l, n, i);
              break e;
            case 11:
              r = Jm(null, r, l, n, i);
              break e;
            case 14:
              r = ep(null, r, l, yn(l.type, n), i);
              break e;
          }
          throw Error(s(306, l, ""));
        }
        return r;
      case 0:
        return ((l = r.type), (d = r.pendingProps), (d = r.elementType === l ? d : yn(l, d)), ru(n, r, l, d, i));
      case 1:
        return ((l = r.type), (d = r.pendingProps), (d = r.elementType === l ? d : yn(l, d)), sp(n, r, l, d, i));
      case 3:
        e: {
          if ((op(r), n === null)) throw Error(s(387));
          ((l = r.pendingProps), (m = r.memoizedState), (d = m.element), xm(n, r), ha(r, l, null, i));
          var v = r.memoizedState;
          if (((l = v.element), m.isDehydrated))
            if (((m = { element: l, isDehydrated: !1, cache: v.cache, pendingSuspenseBoundaries: v.pendingSuspenseBoundaries, transitions: v.transitions }), (r.updateQueue.baseState = m), (r.memoizedState = m), r.flags & 256)) {
              ((d = Is(Error(s(423)), r)), (r = ip(n, r, l, i, d)));
              break e;
            } else if (l !== d) {
              ((d = Is(Error(s(424)), r)), (r = ip(n, r, l, i, d)));
              break e;
            } else for (qt = ur(r.stateNode.containerInfo.firstChild), Gt = r, qe = !0, gn = null, i = vm(r, null, l, i), r.child = i; i; ) ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Ds(), l === d)) {
              r = Xn(n, r, i);
              break e;
            }
            Tt(n, r, l, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (Cm(r), n === null && Mc(r), (l = r.type), (d = r.pendingProps), (m = n !== null ? n.memoizedProps : null), (v = d.children), Sc(l, d) ? (v = null) : m !== null && Sc(l, m) && (r.flags |= 32), rp(n, r), Tt(n, r, v, i), r.child);
      case 6:
        return (n === null && Mc(r), null);
      case 13:
        return ap(n, r, i);
      case 4:
        return (zc(r, r.stateNode.containerInfo), (l = r.pendingProps), n === null ? (r.child = Rs(r, null, l, i)) : Tt(n, r, l, i), r.child);
      case 11:
        return ((l = r.type), (d = r.pendingProps), (d = r.elementType === l ? d : yn(l, d)), Jm(n, r, l, d, i));
      case 7:
        return (Tt(n, r, r.pendingProps, i), r.child);
      case 8:
        return (Tt(n, r, r.pendingProps.children, i), r.child);
      case 12:
        return (Tt(n, r, r.pendingProps.children, i), r.child);
      case 10:
        e: {
          if (((l = r.type._context), (d = r.pendingProps), (m = r.memoizedProps), (v = d.value), $e(ua, l._currentValue), (l._currentValue = v), m !== null))
            if (pn(m.value, v)) {
              if (m.children === d.children && !Ft.current) {
                r = Xn(n, r, i);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var b = m.dependencies;
                if (b !== null) {
                  v = m.child;
                  for (var E = b.firstContext; E !== null; ) {
                    if (E.context === l) {
                      if (m.tag === 1) {
                        ((E = Yn(-1, i & -i)), (E.tag = 2));
                        var I = m.updateQueue;
                        if (I !== null) {
                          I = I.shared;
                          var K = I.pending;
                          (K === null ? (E.next = E) : ((E.next = K.next), (K.next = E)), (I.pending = E));
                        }
                      }
                      ((m.lanes |= i), (E = m.alternate), E !== null && (E.lanes |= i), Oc(m.return, i, r), (b.lanes |= i));
                      break;
                    }
                    E = E.next;
                  }
                } else if (m.tag === 10) v = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (((v = m.return), v === null)) throw Error(s(341));
                  ((v.lanes |= i), (b = v.alternate), b !== null && (b.lanes |= i), Oc(v, i, r), (v = m.sibling));
                } else v = m.child;
                if (v !== null) v.return = m;
                else
                  for (v = m; v !== null; ) {
                    if (v === r) {
                      v = null;
                      break;
                    }
                    if (((m = v.sibling), m !== null)) {
                      ((m.return = v.return), (v = m));
                      break;
                    }
                    v = v.return;
                  }
                m = v;
              }
          (Tt(n, r, d.children, i), (r = r.child));
        }
        return r;
      case 9:
        return ((d = r.type), (l = r.pendingProps.children), Ls(r, i), (d = nn(d)), (l = l(d)), (r.flags |= 1), Tt(n, r, l, i), r.child);
      case 14:
        return ((l = r.type), (d = yn(l, r.pendingProps)), (d = yn(l.type, d)), ep(n, r, l, d, i));
      case 15:
        return tp(n, r, r.type, r.pendingProps, i);
      case 17:
        return ((l = r.type), (d = r.pendingProps), (d = r.elementType === l ? d : yn(l, d)), ka(n, r), (r.tag = 1), Bt(l) ? ((n = !0), sa(r)) : (n = !1), Ls(r, i), Km(r, l, d), eu(r, l, d, i), su(null, r, l, !0, n, i));
      case 19:
        return cp(n, r, i);
      case 22:
        return np(n, r, i);
    }
    throw Error(s(156, r.tag));
  };
  function Mp(n, r) {
    return fh(n, r);
  }
  function R2(n, r, i, l) {
    ((this.tag = n), (this.key = i), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = r), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = l), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null));
  }
  function on(n, r, i, l) {
    return new R2(n, r, i, l);
  }
  function Su(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function M2(n) {
    if (typeof n == "function") return Su(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === ge)) return 11;
      if (n === De) return 14;
    }
    return 2;
  }
  function br(n, r) {
    var i = n.alternate;
    return (i === null ? ((i = on(n.tag, r, n.key, n.mode)), (i.elementType = n.elementType), (i.type = n.type), (i.stateNode = n.stateNode), (i.alternate = n), (n.alternate = i)) : ((i.pendingProps = r), (i.type = n.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)), (i.flags = n.flags & 14680064), (i.childLanes = n.childLanes), (i.lanes = n.lanes), (i.child = n.child), (i.memoizedProps = n.memoizedProps), (i.memoizedState = n.memoizedState), (i.updateQueue = n.updateQueue), (r = n.dependencies), (i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), (i.sibling = n.sibling), (i.index = n.index), (i.ref = n.ref), i);
  }
  function Ma(n, r, i, l, d, m) {
    var v = 2;
    if (((l = n), typeof n == "function")) Su(n) && (v = 1);
    else if (typeof n == "string") v = 5;
    else
      e: switch (n) {
        case G:
          return Kr(i.children, d, m, r);
        case B:
          ((v = 8), (d |= 8));
          break;
        case se:
          return ((n = on(12, i, r, d | 2)), (n.elementType = se), (n.lanes = m), n);
        case ye:
          return ((n = on(13, i, r, d)), (n.elementType = ye), (n.lanes = m), n);
        case Se:
          return ((n = on(19, i, r, d)), (n.elementType = Se), (n.lanes = m), n);
        case he:
          return La(i, d, m, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Ce:
                v = 10;
                break e;
              case Te:
                v = 9;
                break e;
              case ge:
                v = 11;
                break e;
              case De:
                v = 14;
                break e;
              case Pe:
                ((v = 16), (l = null));
                break e;
            }
          throw Error(s(130, n == null ? n : typeof n, ""));
      }
    return ((r = on(v, i, r, d)), (r.elementType = n), (r.type = l), (r.lanes = m), r);
  }
  function Kr(n, r, i, l) {
    return ((n = on(7, n, l, r)), (n.lanes = i), n);
  }
  function La(n, r, i, l) {
    return ((n = on(22, n, l, r)), (n.elementType = he), (n.lanes = i), (n.stateNode = { isHidden: !1 }), n);
  }
  function Eu(n, r, i) {
    return ((n = on(6, n, null, r)), (n.lanes = i), n);
  }
  function Nu(n, r, i) {
    return ((r = on(4, n.children !== null ? n.children : [], n.key, r)), (r.lanes = i), (r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }), r);
  }
  function L2(n, r, i, l, d) {
    ((this.tag = r), (this.containerInfo = n), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = Jl(0)), (this.expirationTimes = Jl(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = Jl(0)), (this.identifierPrefix = l), (this.onRecoverableError = d), (this.mutableSourceEagerHydrationData = null));
  }
  function Pu(n, r, i, l, d, m, v, b, E) {
    return ((n = new L2(n, r, i, b, E)), r === 1 ? ((r = 1), m === !0 && (r |= 8)) : (r = 0), (m = on(3, null, null, r)), (n.current = m), (m.stateNode = n), (m.memoizedState = { element: l, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }), Bc(m), n);
  }
  function _2(n, r, i) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: i };
  }
  function Lp(n) {
    if (!n) return fr;
    n = n._reactInternals;
    e: {
      if (Lr(n) !== n || n.tag !== 1) throw Error(s(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Bt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(s(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Bt(i)) return lm(n, i, r);
    }
    return r;
  }
  function _p(n, r, i, l, d, m, v, b, E) {
    return ((n = Pu(i, l, !0, n, d, m, v, b, E)), (n.context = Lp(null)), (i = n.current), (l = Dt()), (d = wr(i)), (m = Yn(l, d)), (m.callback = r ?? null), pr(i, m, d), (n.current.lanes = d), xo(n, d, l), Ut(n, l), n);
  }
  function _a(n, r, i, l) {
    var d = r.current,
      m = Dt(),
      v = wr(d);
    return ((i = Lp(i)), r.context === null ? (r.context = i) : (r.pendingContext = i), (r = Yn(m, v)), (r.payload = { element: n }), (l = l === void 0 ? null : l), l !== null && (r.callback = l), (n = pr(d, r, v)), n !== null && (xn(n, d, v, m), fa(n, d, v)), v);
  }
  function Ia(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ip(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function ju(n, r) {
    (Ip(n, r), (n = n.alternate) && Ip(n, r));
  }
  function I2() {
    return null;
  }
  var Vp =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Au(n) {
    this._internalRoot = n;
  }
  ((Va.prototype.render = Au.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(s(409));
      _a(n, r, null, null);
    }),
    (Va.prototype.unmount = Au.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          (Ur(function () {
            _a(null, n, null, null);
          }),
            (r[Wn] = null));
        }
      }));
  function Va(n) {
    this._internalRoot = n;
  }
  Va.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = xh();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < ar.length && r !== 0 && r < ar[i].priority; i++);
      (ar.splice(i, 0, n), i === 0 && Ch(n));
    }
  };
  function Tu(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Oa(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable ")));
  }
  function Op() {}
  function V2(n, r, i, l, d) {
    if (d) {
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var I = Ia(v);
          m.call(I);
        };
      }
      var v = _p(r, l, n, 0, null, !1, !1, "", Op);
      return ((n._reactRootContainer = v), (n[Wn] = v.current), Lo(n.nodeType === 8 ? n.parentNode : n), Ur(), v);
    }
    for (; (d = n.lastChild); ) n.removeChild(d);
    if (typeof l == "function") {
      var b = l;
      l = function () {
        var I = Ia(E);
        b.call(I);
      };
    }
    var E = Pu(n, 0, !1, null, null, !1, !1, "", Op);
    return (
      (n._reactRootContainer = E),
      (n[Wn] = E.current),
      Lo(n.nodeType === 8 ? n.parentNode : n),
      Ur(function () {
        _a(r, E, i, l);
      }),
      E
    );
  }
  function Fa(n, r, i, l, d) {
    var m = i._reactRootContainer;
    if (m) {
      var v = m;
      if (typeof d == "function") {
        var b = d;
        d = function () {
          var E = Ia(v);
          b.call(E);
        };
      }
      _a(r, v, n, d);
    } else v = V2(i, r, n, d, l);
    return Ia(v);
  }
  ((vh = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = wo(r.pendingLanes);
          i !== 0 && (ec(r, i | 1), Ut(r, nt()), (_e & 6) === 0 && ((Fs = nt() + 500), hr()));
        }
        break;
      case 13:
        (Ur(function () {
          var l = qn(n, 1);
          if (l !== null) {
            var d = Dt();
            xn(l, n, 1, d);
          }
        }),
          ju(n, 1));
    }
  }),
    (tc = function (n) {
      if (n.tag === 13) {
        var r = qn(n, 134217728);
        if (r !== null) {
          var i = Dt();
          xn(r, n, 134217728, i);
        }
        ju(n, 134217728);
      }
    }),
    (wh = function (n) {
      if (n.tag === 13) {
        var r = wr(n),
          i = qn(n, r);
        if (i !== null) {
          var l = Dt();
          xn(i, n, r, l);
        }
        ju(n, r);
      }
    }),
    (xh = function () {
      return Be;
    }),
    (bh = function (n, r) {
      var i = Be;
      try {
        return ((Be = n), r());
      } finally {
        Be = i;
      }
    }),
    (Gl = function (n, r, i) {
      switch (r) {
        case "input":
          if ((ds(n, i), (r = i.name), i.type === "radio" && r != null)) {
            for (i = n; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
              var l = i[r];
              if (l !== n && l.form === n.form) {
                var d = na(l);
                if (!d) throw Error(s(90));
                (jn(l), ds(l, d));
              }
            }
          }
          break;
        case "textarea":
          z(n, i);
          break;
        case "select":
          ((r = i.value), r != null && Un(n, !!i.multiple, r, !1));
      }
    }),
    (oh = bu),
    (ih = Ur));
  var O2 = { usingClientEntryPoint: !1, Events: [Vo, Ns, na, rh, sh, bu] },
    Qo = { findFiberByHostInstance: _r, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    F2 = {
      bundleType: Qo.bundleType,
      version: Qo.version,
      rendererPackageName: Qo.rendererPackageName,
      rendererConfig: Qo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return ((n = uh(n)), n === null ? null : n.stateNode);
      },
      findFiberByHostInstance: Qo.findFiberByHostInstance || I2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ba.isDisabled && Ba.supportsFiber)
      try {
        ((Vi = Ba.inject(F2)), (An = Ba));
      } catch {}
  }
  return (
    (Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O2),
    (Wt.createPortal = function (n, r) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Tu(r)) throw Error(s(200));
      return _2(n, r, null, i);
    }),
    (Wt.createRoot = function (n, r) {
      if (!Tu(n)) throw Error(s(299));
      var i = !1,
        l = "",
        d = Vp;
      return (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), (r = Pu(n, 1, !1, null, null, i, !1, l, d)), (n[Wn] = r.current), Lo(n.nodeType === 8 ? n.parentNode : n), new Au(r));
    }),
    (Wt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0) throw typeof n.render == "function" ? Error(s(188)) : ((n = Object.keys(n).join(",")), Error(s(268, n)));
      return ((n = uh(r)), (n = n === null ? null : n.stateNode), n);
    }),
    (Wt.flushSync = function (n) {
      return Ur(n);
    }),
    (Wt.hydrate = function (n, r, i) {
      if (!Oa(r)) throw Error(s(200));
      return Fa(null, n, r, !0, i);
    }),
    (Wt.hydrateRoot = function (n, r, i) {
      if (!Tu(n)) throw Error(s(405));
      var l = (i != null && i.hydratedSources) || null,
        d = !1,
        m = "",
        v = Vp;
      if ((i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), (r = _p(r, null, n, 1, i ?? null, d, !1, m, v)), (n[Wn] = r.current), Lo(n), l)) for (n = 0; n < l.length; n++) ((i = l[n]), (d = i._getVersion), (d = d(i._source)), r.mutableSourceEagerHydrationData == null ? (r.mutableSourceEagerHydrationData = [i, d]) : r.mutableSourceEagerHydrationData.push(i, d));
      return new Va(r);
    }),
    (Wt.render = function (n, r, i) {
      if (!Oa(r)) throw Error(s(200));
      return Fa(null, n, r, !1, i);
    }),
    (Wt.unmountComponentAtNode = function (n) {
      if (!Oa(n)) throw Error(s(40));
      return n._reactRootContainer
        ? (Ur(function () {
            Fa(null, null, n, !1, function () {
              ((n._reactRootContainer = null), (n[Wn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Wt.unstable_batchedUpdates = bu),
    (Wt.unstable_renderSubtreeIntoContainer = function (n, r, i, l) {
      if (!Oa(i)) throw Error(s(200));
      if (n == null || n._reactInternals === void 0) throw Error(s(38));
      return Fa(n, r, i, !1, l);
    }),
    (Wt.version = "18.3.1-next-f1338f8080-20240426"),
    Wt
  );
}
var Kp;
function Jy() {
  if (Kp) return Mu.exports;
  Kp = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Mu.exports = G2()), Mu.exports);
}
var Gp;
function q2() {
  if (Gp) return za;
  Gp = 1;
  var e = Jy();
  return ((za.createRoot = e.createRoot), (za.hydrateRoot = e.hydrateRoot), za);
}
var Y2 = q2(),
  k = Hd();
const Ve = Zy(k),
  X2 = z2({ __proto__: null, default: Ve }, [k]);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Z2 = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, s, o) => (o ? o.toUpperCase() : s.toLowerCase())),
  qp = (e) => {
    const t = Z2(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  ev = (...e) =>
    e
      .filter((t, s, o) => !!t && t.trim() !== "" && o.indexOf(t) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J2 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = k.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: s = 2, absoluteStrokeWidth: o, className: a = "", children: c, iconNode: u, ...h }, p) => k.createElement("svg", { ref: p, ...J2, width: t, height: t, stroke: e, strokeWidth: o ? (Number(s) * 24) / Number(t) : s, className: ev("lucide", a), ...h }, [...u.map(([y, g]) => k.createElement(y, g)), ...(Array.isArray(c) ? c : [c])]));
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nn = (e, t) => {
  const s = k.forwardRef(({ className: o, ...a }, c) => k.createElement(e1, { ref: c, iconNode: t, className: ev(`lucide-${Q2(qp(e))}`, `lucide-${e}`, o), ...a }));
  return ((s.displayName = qp(e)), s);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t1 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  n1 = Nn("arrow-right", t1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  s1 = Nn("chevron-down", r1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o1 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  lt = Nn("circle-check-big", o1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  a1 = Nn("menu", i1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l1 = [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]],
  Gr = Nn("message-circle", l1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = [
    ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }],
    ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
  ],
  u1 = Nn("pill", c1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]],
  $a = Nn("shield", d1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = [
    ["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  h1 = Nn("sparkles", f1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = [
    ["path", { d: "M11 2v2", key: "1539x4" }],
    ["path", { d: "M5 2v2", key: "1yf1q8" }],
    ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
    ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
    ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
  ],
  p1 = Nn("stethoscope", m1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = [
    ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5", key: "ftymec" }],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }],
  ],
  y1 = Nn("video", g1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  tv = Nn("x", v1);
/*!
 * sweetalert2 v11.26.18
 * Released under the MIT License.
 */ function nv(e, t, s) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : s;
  throw new TypeError("Private element is not present on this object");
}
function w1(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Yp(e, t) {
  return e.get(nv(e, t));
}
function x1(e, t, s) {
  (w1(e, t), t.set(e, s));
}
function b1(e, t, s) {
  return (e.set(nv(e, t), s), s);
}
const k1 = 100,
  pe = {},
  C1 = () => {
    pe.previousActiveElement instanceof HTMLElement ? (pe.previousActiveElement.focus(), (pe.previousActiveElement = null)) : document.body && document.body.focus();
  },
  S1 = (e) =>
    new Promise((t) => {
      if (!e) return t();
      const s = window.scrollX,
        o = window.scrollY;
      ((pe.restoreFocusTimeout = setTimeout(() => {
        (C1(), t());
      }, k1)),
        window.scrollTo(s, o));
    }),
  rv = "swal2-",
  E1 = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "draggable", "dragging"],
  F = E1.reduce((e, t) => ((e[t] = rv + t), e), {}),
  N1 = ["success", "warning", "info", "question", "error"],
  ll = N1.reduce((e, t) => ((e[t] = rv + t), e), {}),
  sv = "SweetAlert2:",
  Kd = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  It = (e) => {
    console.warn(`${sv} ${typeof e == "object" ? e.join(" ") : e}`);
  },
  as = (e) => {
    console.error(`${sv} ${e}`);
  },
  Xp = [],
  P1 = (e) => {
    Xp.includes(e) || (Xp.push(e), It(e));
  },
  ov = (e, t = null) => {
    P1(`"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`);
  },
  Al = (e) => (typeof e == "function" ? e() : e),
  Gd = (e) => e && typeof e.toPromise == "function",
  xi = (e) => (Gd(e) ? e.toPromise() : Promise.resolve(e)),
  qd = (e) => e && Promise.resolve(e) === e,
  Vt = () => document.body.querySelector(`.${F.container}`),
  bi = (e) => {
    const t = Vt();
    return t ? t.querySelector(e) : null;
  },
  Qt = (e) => bi(`.${e}`),
  Fe = () => Qt(F.popup),
  ro = () => Qt(F.icon),
  j1 = () => Qt(F["icon-content"]),
  iv = () => Qt(F.title),
  Yd = () => Qt(F["html-container"]),
  av = () => Qt(F.image),
  Xd = () => Qt(F["progress-steps"]),
  Tl = () => Qt(F["validation-message"]),
  Bn = () => bi(`.${F.actions} .${F.confirm}`),
  so = () => bi(`.${F.actions} .${F.cancel}`),
  ls = () => bi(`.${F.actions} .${F.deny}`),
  A1 = () => Qt(F["input-label"]),
  oo = () => bi(`.${F.loader}`),
  ki = () => Qt(F.actions),
  lv = () => Qt(F.footer),
  Dl = () => Qt(F["timer-progress-bar"]),
  Qd = () => Qt(F.close),
  T1 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  Zd = () => {
    const e = Fe();
    if (!e) return [];
    const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
      s = Array.from(t).sort((c, u) => {
        const h = parseInt(c.getAttribute("tabindex") || "0"),
          p = parseInt(u.getAttribute("tabindex") || "0");
        return h > p ? 1 : h < p ? -1 : 0;
      }),
      o = e.querySelectorAll(T1),
      a = Array.from(o).filter((c) => c.getAttribute("tabindex") !== "-1");
    return [...new Set(s.concat(a))].filter((c) => Ht(c));
  },
  Jd = () => er(document.body, F.shown) && !er(document.body, F["toast-shown"]) && !er(document.body, F["no-backdrop"]),
  Rl = () => {
    const e = Fe();
    return e ? er(e, F.toast) : !1;
  },
  D1 = () => {
    const e = Fe();
    return e ? e.hasAttribute("data-loading") : !1;
  },
  Zt = (e, t) => {
    if (((e.textContent = ""), t)) {
      const o = new DOMParser().parseFromString(t, "text/html"),
        a = o.querySelector("head");
      a &&
        Array.from(a.childNodes).forEach((u) => {
          e.appendChild(u);
        });
      const c = o.querySelector("body");
      c &&
        Array.from(c.childNodes).forEach((u) => {
          u instanceof HTMLVideoElement || u instanceof HTMLAudioElement ? e.appendChild(u.cloneNode(!0)) : e.appendChild(u);
        });
    }
  },
  er = (e, t) => {
    if (!t) return !1;
    const s = t.split(/\s+/);
    for (let o = 0; o < s.length; o++) if (!e.classList.contains(s[o])) return !1;
    return !0;
  },
  R1 = (e, t) => {
    Array.from(e.classList).forEach((s) => {
      !Object.values(F).includes(s) && !Object.values(ll).includes(s) && !Object.values(t.showClass || {}).includes(s) && e.classList.remove(s);
    });
  },
  Xt = (e, t, s) => {
    if ((R1(e, t), !t.customClass)) return;
    const o = t.customClass[s];
    if (o) {
      if (typeof o != "string" && !o.forEach) {
        It(`Invalid type of customClass.${s}! Expected string or iterable object, got "${typeof o}"`);
        return;
      }
      Oe(e, o);
    }
  },
  Ml = (e, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return e.querySelector(`.${F.popup} > .${F[t]}`);
      case "checkbox":
        return e.querySelector(`.${F.popup} > .${F.checkbox} input`);
      case "radio":
        return e.querySelector(`.${F.popup} > .${F.radio} input:checked`) || e.querySelector(`.${F.popup} > .${F.radio} input:first-child`);
      case "range":
        return e.querySelector(`.${F.popup} > .${F.range} input`);
      default:
        return e.querySelector(`.${F.popup} > .${F.input}`);
    }
  },
  cv = (e) => {
    if ((e.focus(), e.type !== "file")) {
      const t = e.value;
      ((e.value = ""), (e.value = t));
    }
  },
  uv = (e, t, s) => {
    !e ||
      !t ||
      (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)),
      t.forEach((o) => {
        Array.isArray(e)
          ? e.forEach((a) => {
              s ? a.classList.add(o) : a.classList.remove(o);
            })
          : s
            ? e.classList.add(o)
            : e.classList.remove(o);
      }));
  },
  Oe = (e, t) => {
    uv(e, t, !0);
  },
  hn = (e, t) => {
    uv(e, t, !1);
  },
  Pr = (e, t) => {
    const s = Array.from(e.children);
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      if (a instanceof HTMLElement && er(a, t)) return a;
    }
  },
  ns = (e, t, s) => {
    (s === `${parseInt(`${s}`)}` && (s = parseInt(s)), s || parseInt(`${s}`) === 0 ? e.style.setProperty(t, typeof s == "number" ? `${s}px` : s) : e.style.removeProperty(t));
  },
  wt = (e, t = "flex") => {
    e && (e.style.display = t);
  },
  At = (e) => {
    e && (e.style.display = "none");
  },
  ef = (e, t = "block") => {
    e &&
      new MutationObserver(() => {
        Ci(e, e.innerHTML, t);
      }).observe(e, { childList: !0, subtree: !0 });
  },
  Qp = (e, t, s, o) => {
    const a = e.querySelector(t);
    a && a.style.setProperty(s, o);
  },
  Ci = (e, t, s = "flex") => {
    t ? wt(e, s) : At(e);
  },
  Ht = (e) => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
  M1 = () => !Ht(Bn()) && !Ht(ls()) && !Ht(so()),
  fd = (e) => e.scrollHeight > e.clientHeight,
  L1 = (e, t) => {
    let s = e;
    for (; s && s !== t; ) {
      if (fd(s)) return !0;
      s = s.parentElement;
    }
    return !1;
  },
  dv = (e) => {
    const t = window.getComputedStyle(e),
      s = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      o = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return s > 0 || o > 0;
  },
  tf = (e, t = !1) => {
    const s = Dl();
    s &&
      Ht(s) &&
      (t && ((s.style.transition = "none"), (s.style.width = "100%")),
      setTimeout(() => {
        ((s.style.transition = `width ${e / 1e3}s linear`), (s.style.width = "0%"));
      }, 10));
  },
  _1 = () => {
    const e = Dl();
    if (!e) return;
    const t = parseInt(window.getComputedStyle(e).width);
    (e.style.removeProperty("transition"), (e.style.width = "100%"));
    const s = parseInt(window.getComputedStyle(e).width),
      o = (t / s) * 100;
    e.style.width = `${o}%`;
  },
  I1 = () => typeof window > "u" || typeof document > "u",
  V1 = `
 <div aria-labelledby="${F.title}" aria-describedby="${F["html-container"]}" class="${F.popup}" tabindex="-1">
   <button type="button" class="${F.close}"></button>
   <ul class="${F["progress-steps"]}"></ul>
   <div class="${F.icon}"></div>
   <img class="${F.image}" />
   <h2 class="${F.title}" id="${F.title}"></h2>
   <div class="${F["html-container"]}" id="${F["html-container"]}"></div>
   <input class="${F.input}" id="${F.input}" />
   <input type="file" class="${F.file}" />
   <div class="${F.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${F.select}" id="${F.select}"></select>
   <div class="${F.radio}"></div>
   <label class="${F.checkbox}">
     <input type="checkbox" id="${F.checkbox}" />
     <span class="${F.label}"></span>
   </label>
   <textarea class="${F.textarea}" id="${F.textarea}"></textarea>
   <div class="${F["validation-message"]}" id="${F["validation-message"]}"></div>
   <div class="${F.actions}">
     <div class="${F.loader}"></div>
     <button type="button" class="${F.confirm}"></button>
     <button type="button" class="${F.deny}"></button>
     <button type="button" class="${F.cancel}"></button>
   </div>
   <div class="${F.footer}"></div>
   <div class="${F["timer-progress-bar-container"]}">
     <div class="${F["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  O1 = () => {
    const e = Vt();
    return e ? (e.remove(), hn([document.documentElement, document.body], [F["no-backdrop"], F["toast-shown"], F["has-column"]]), !0) : !1;
  },
  qr = () => {
    pe.currentInstance && pe.currentInstance.resetValidationMessage();
  },
  F1 = () => {
    const e = Fe();
    if (!e) return;
    const t = Pr(e, F.input),
      s = Pr(e, F.file),
      o = e.querySelector(`.${F.range} input`),
      a = e.querySelector(`.${F.range} output`),
      c = Pr(e, F.select),
      u = e.querySelector(`.${F.checkbox} input`),
      h = Pr(e, F.textarea);
    (t && (t.oninput = qr),
      s && (s.onchange = qr),
      c && (c.onchange = qr),
      u && (u.onchange = qr),
      h && (h.oninput = qr),
      o &&
        a &&
        ((o.oninput = () => {
          (qr(), (a.value = o.value));
        }),
        (o.onchange = () => {
          (qr(), (a.value = o.value));
        })));
  },
  B1 = (e) => {
    if (typeof e == "string") {
      const t = document.querySelector(e);
      if (!t) throw new Error(`Target element "${e}" not found`);
      return t;
    }
    return e;
  },
  z1 = (e) => {
    const t = Fe();
    t && (t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true"));
  },
  $1 = (e) => {
    window.getComputedStyle(e).direction === "rtl" && (Oe(Vt(), F.rtl), (pe.isRTL = !0));
  },
  U1 = (e) => {
    const t = O1();
    if (I1()) {
      as("SweetAlert2 requires document to initialize");
      return;
    }
    const s = document.createElement("div");
    ((s.className = F.container), t && Oe(s, F["no-transition"]), Zt(s, V1), (s.dataset.swal2Theme = e.theme));
    const o = B1(e.target || "body");
    (o.appendChild(s), e.topLayer && (s.setAttribute("popover", ""), s.showPopover()), z1(e), $1(o), F1());
  },
  nf = (e, t) => {
    e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? W1(e, t) : e && Zt(t, e);
  },
  W1 = (e, t) => {
    "jquery" in e ? H1(t, e) : Zt(t, e.toString());
  },
  H1 = (e, t) => {
    if (((e.textContent = ""), 0 in t)) for (let s = 0; s in t; s++) e.appendChild(t[s].cloneNode(!0));
    else e.appendChild(t.cloneNode(!0));
  },
  K1 = (e, t) => {
    const s = ki(),
      o = oo();
    !s || !o || (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? At(s) : wt(s), Xt(s, t, "actions"), G1(s, o, t), Zt(o, t.loaderHtml || ""), Xt(o, t, "loader"));
  };
function G1(e, t, s) {
  const o = Bn(),
    a = ls(),
    c = so();
  !o || !a || !c || (Vu(o, "confirm", s), Vu(a, "deny", s), Vu(c, "cancel", s), q1(o, a, c, s), s.reverseButtons && (s.toast ? (e.insertBefore(c, o), e.insertBefore(a, o)) : (e.insertBefore(c, t), e.insertBefore(a, t), e.insertBefore(o, t))));
}
function q1(e, t, s, o) {
  if (!o.buttonsStyling) {
    hn([e, t, s], F.styled);
    return;
  }
  (Oe([e, t, s], F.styled), o.confirmButtonColor && e.style.setProperty("--swal2-confirm-button-background-color", o.confirmButtonColor), o.denyButtonColor && t.style.setProperty("--swal2-deny-button-background-color", o.denyButtonColor), o.cancelButtonColor && s.style.setProperty("--swal2-cancel-button-background-color", o.cancelButtonColor), Iu(e), Iu(t), Iu(s));
}
function Iu(e) {
  const t = window.getComputedStyle(e);
  if (t.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const s = t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, "rgba($1, $2, $3, 0.5)");
  e.style.setProperty("--swal2-action-button-focus-box-shadow", t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${s}`));
}
function Vu(e, t, s) {
  const o = Kd(t);
  (Ci(e, s[`show${o}Button`], "inline-block"), Zt(e, s[`${t}ButtonText`] || ""), e.setAttribute("aria-label", s[`${t}ButtonAriaLabel`] || ""), (e.className = F[t]), Xt(e, s, `${t}Button`));
}
const Y1 = (e, t) => {
    const s = Qd();
    s && (Zt(s, t.closeButtonHtml || ""), Xt(s, t, "closeButton"), Ci(s, t.showCloseButton), s.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  X1 = (e, t) => {
    const s = Vt();
    s && (Q1(s, t.backdrop), Z1(s, t.position), J1(s, t.grow), Xt(s, t, "container"));
  };
function Q1(e, t) {
  typeof t == "string" ? (e.style.background = t) : t || Oe([document.documentElement, document.body], F["no-backdrop"]);
}
function Z1(e, t) {
  t && (t in F ? Oe(e, F[t]) : (It('The "position" parameter is not valid, defaulting to "center"'), Oe(e, F.center)));
}
function J1(e, t) {
  t && Oe(e, F[`grow-${t}`]);
}
var Ue = { innerParams: new WeakMap(), domCache: new WeakMap() };
const ek = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
  tk = (e, t) => {
    const s = Fe();
    if (!s) return;
    const o = Ue.innerParams.get(e),
      a = !o || t.input !== o.input;
    (ek.forEach((c) => {
      const u = Pr(s, F[c]);
      u && (sk(c, t.inputAttributes), (u.className = F[c]), a && At(u));
    }),
      t.input && (a && nk(t), ok(t)));
  },
  nk = (e) => {
    if (!e.input) return;
    if (!st[e.input]) {
      as(`Unexpected type of input! Expected ${Object.keys(st).join(" | ")}, got "${e.input}"`);
      return;
    }
    const t = fv(e.input);
    if (!t) return;
    const s = st[e.input](t, e);
    (wt(t),
      e.inputAutoFocus &&
        setTimeout(() => {
          cv(s);
        }));
  },
  rk = (e) => {
    for (let t = 0; t < e.attributes.length; t++) {
      const s = e.attributes[t].name;
      ["id", "type", "value", "style"].includes(s) || e.removeAttribute(s);
    }
  },
  sk = (e, t) => {
    const s = Fe();
    if (!s) return;
    const o = Ml(s, e);
    if (o) {
      rk(o);
      for (const a in t) o.setAttribute(a, t[a]);
    }
  },
  ok = (e) => {
    if (!e.input) return;
    const t = fv(e.input);
    t && Xt(t, e, "input");
  },
  rf = (e, t) => {
    !e.placeholder && t.inputPlaceholder && (e.placeholder = t.inputPlaceholder);
  },
  Si = (e, t, s) => {
    if (s.inputLabel) {
      const o = document.createElement("label"),
        a = F["input-label"];
      (o.setAttribute("for", e.id), (o.className = a), typeof s.customClass == "object" && Oe(o, s.customClass.inputLabel), (o.innerText = s.inputLabel), t.insertAdjacentElement("beforebegin", o));
    }
  },
  fv = (e) => {
    const t = Fe();
    if (t) return Pr(t, F[e] || F.input);
  },
  cl = (e, t) => {
    ["string", "number"].includes(typeof t) ? (e.value = `${t}`) : qd(t) || It(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`);
  },
  st = {};
st.text =
  st.email =
  st.password =
  st.number =
  st.tel =
  st.url =
  st.search =
  st.date =
  st["datetime-local"] =
  st.time =
  st.week =
  st.month =
    (e, t) => {
      const s = e;
      return (cl(s, t.inputValue), Si(s, s, t), rf(s, t), (s.type = t.input), s);
    };
st.file = (e, t) => {
  const s = e;
  return (Si(s, s, t), rf(s, t), s);
};
st.range = (e, t) => {
  const s = e,
    o = s.querySelector("input"),
    a = s.querySelector("output");
  return (o && (cl(o, t.inputValue), (o.type = t.input), Si(o, e, t)), a && cl(a, t.inputValue), e);
};
st.select = (e, t) => {
  const s = e;
  if (((s.textContent = ""), t.inputPlaceholder)) {
    const o = document.createElement("option");
    (Zt(o, t.inputPlaceholder), (o.value = ""), (o.disabled = !0), (o.selected = !0), s.appendChild(o));
  }
  return (Si(s, s, t), s);
};
st.radio = (e) => {
  const t = e;
  return ((t.textContent = ""), e);
};
st.checkbox = (e, t) => {
  const s = Fe();
  if (!s) throw new Error("Popup not found");
  const o = Ml(s, "checkbox");
  if (!o) throw new Error("Checkbox input not found");
  ((o.value = "1"), (o.checked = !!t.inputValue));
  const c = e.querySelector("span");
  if (c) {
    const u = t.inputPlaceholder || t.inputLabel;
    u && Zt(c, u);
  }
  return o;
};
st.textarea = (e, t) => {
  const s = e;
  (cl(s, t.inputValue), rf(s, t), Si(s, s, t));
  const o = (a) => parseInt(window.getComputedStyle(a).marginLeft) + parseInt(window.getComputedStyle(a).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const a = Fe();
        if (!a) return;
        const c = parseInt(window.getComputedStyle(a).width),
          u = () => {
            if (!document.body.contains(s)) return;
            const h = s.offsetWidth + o(s),
              p = Fe();
            p && (h > c ? (p.style.width = `${h}px`) : ns(p, "width", t.width));
          };
        new MutationObserver(u).observe(s, { attributes: !0, attributeFilter: ["style"] });
      }
    }),
    s
  );
};
const ik = (e, t) => {
    const s = Yd();
    s && (ef(s), Xt(s, t, "htmlContainer"), t.html ? (nf(t.html, s), wt(s, "block")) : t.text ? ((s.textContent = t.text), wt(s, "block")) : At(s), tk(e, t));
  },
  ak = (e, t) => {
    const s = lv();
    s && (ef(s), Ci(s, !!t.footer, "block"), t.footer && nf(t.footer, s), Xt(s, t, "footer"));
  },
  lk = (e, t) => {
    const s = Ue.innerParams.get(e),
      o = ro();
    if (!o) return;
    if (s && t.icon === s.icon) {
      (Jp(o, t), Zp(o, t));
      return;
    }
    if (!t.icon && !t.iconHtml) {
      At(o);
      return;
    }
    if (t.icon && Object.keys(ll).indexOf(t.icon) === -1) {
      (as(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`), At(o));
      return;
    }
    (wt(o), Jp(o, t), Zp(o, t), Oe(o, t.showClass && t.showClass.icon), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", hv));
  },
  Zp = (e, t) => {
    for (const [s, o] of Object.entries(ll)) t.icon !== s && hn(e, o);
    (Oe(e, t.icon && ll[t.icon]), dk(e, t), hv(), Xt(e, t, "icon"));
  },
  hv = () => {
    const e = Fe();
    if (!e) return;
    const t = window.getComputedStyle(e).getPropertyValue("background-color"),
      s = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
    for (let o = 0; o < s.length; o++) s[o].style.backgroundColor = t;
  },
  ck = (e) => `
  ${e.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${e.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  uk = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  Jp = (e, t) => {
    if (!t.icon && !t.iconHtml) return;
    let s = e.innerHTML,
      o = "";
    (t.iconHtml ? (o = eg(t.iconHtml)) : t.icon === "success" ? ((o = ck(t)), (s = s.replace(/ style=".*?"/g, ""))) : t.icon === "error" ? (o = uk) : t.icon && (o = eg({ question: "?", warning: "!", info: "i" }[t.icon])), s.trim() !== o.trim() && Zt(e, o));
  },
  dk = (e, t) => {
    if (t.iconColor) {
      ((e.style.color = t.iconColor), (e.style.borderColor = t.iconColor));
      for (const s of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) Qp(e, s, "background-color", t.iconColor);
      Qp(e, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  eg = (e) => `<div class="${F["icon-content"]}">${e}</div>`,
  fk = (e, t) => {
    const s = av();
    if (s) {
      if (!t.imageUrl) {
        At(s);
        return;
      }
      (wt(s, ""), s.setAttribute("src", t.imageUrl), s.setAttribute("alt", t.imageAlt || ""), ns(s, "width", t.imageWidth), ns(s, "height", t.imageHeight), (s.className = F.image), Xt(s, t, "image"));
    }
  };
let sf = !1,
  mv = 0,
  pv = 0,
  gv = 0,
  yv = 0;
const hk = (e) => {
    (e.addEventListener("mousedown", ul), document.body.addEventListener("mousemove", dl), e.addEventListener("mouseup", fl), e.addEventListener("touchstart", ul), document.body.addEventListener("touchmove", dl), e.addEventListener("touchend", fl));
  },
  mk = (e) => {
    (e.removeEventListener("mousedown", ul), document.body.removeEventListener("mousemove", dl), e.removeEventListener("mouseup", fl), e.removeEventListener("touchstart", ul), document.body.removeEventListener("touchmove", dl), e.removeEventListener("touchend", fl));
  },
  ul = (e) => {
    const t = Fe();
    if (!t) return;
    const s = ro();
    if (e.target === t || (s && s.contains(e.target))) {
      sf = !0;
      const o = vv(e);
      ((mv = o.clientX), (pv = o.clientY), (gv = parseInt(t.style.insetInlineStart) || 0), (yv = parseInt(t.style.insetBlockStart) || 0), Oe(t, "swal2-dragging"));
    }
  },
  dl = (e) => {
    const t = Fe();
    if (t && sf) {
      let { clientX: s, clientY: o } = vv(e);
      const a = s - mv;
      ((t.style.insetInlineStart = `${gv + (pe.isRTL ? -a : a)}px`), (t.style.insetBlockStart = `${yv + (o - pv)}px`));
    }
  },
  fl = () => {
    const e = Fe();
    ((sf = !1), hn(e, "swal2-dragging"));
  },
  vv = (e) => {
    let t = 0,
      s = 0;
    return (e.type.startsWith("mouse") ? ((t = e.clientX), (s = e.clientY)) : e.type.startsWith("touch") && ((t = e.touches[0].clientX), (s = e.touches[0].clientY)), { clientX: t, clientY: s });
  },
  pk = (e, t) => {
    const s = Vt(),
      o = Fe();
    if (!(!s || !o)) {
      if (t.toast) {
        (ns(s, "width", t.width), (o.style.width = "100%"));
        const a = oo();
        a && o.insertBefore(a, ro());
      } else ns(o, "width", t.width);
      (ns(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), At(Tl()), gk(o, t), t.draggable && !t.toast ? (Oe(o, F.draggable), hk(o)) : (hn(o, F.draggable), mk(o)));
    }
  },
  gk = (e, t) => {
    const s = t.showClass || {};
    ((e.className = `${F.popup} ${Ht(e) ? s.popup : ""}`), t.toast ? (Oe([document.documentElement, document.body], F["toast-shown"]), Oe(e, F.toast)) : Oe(e, F.modal), Xt(e, t, "popup"), typeof t.customClass == "string" && Oe(e, t.customClass), t.icon && Oe(e, F[`icon-${t.icon}`]));
  },
  yk = (e, t) => {
    const s = Xd();
    if (!s) return;
    const { progressSteps: o, currentProgressStep: a } = t;
    if (!o || o.length === 0 || a === void 0) {
      At(s);
      return;
    }
    (wt(s),
      (s.textContent = ""),
      a >= o.length && It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
      o.forEach((c, u) => {
        const h = vk(c);
        if ((s.appendChild(h), u === a && Oe(h, F["active-progress-step"]), u !== o.length - 1)) {
          const p = wk(t);
          s.appendChild(p);
        }
      }));
  },
  vk = (e) => {
    const t = document.createElement("li");
    return (Oe(t, F["progress-step"]), Zt(t, e), t);
  },
  wk = (e) => {
    const t = document.createElement("li");
    return (Oe(t, F["progress-step-line"]), e.progressStepsDistance && ns(t, "width", e.progressStepsDistance), t);
  },
  xk = (e, t) => {
    const s = iv();
    s && (ef(s), Ci(s, !!(t.title || t.titleText), "block"), t.title && nf(t.title, s), t.titleText && (s.innerText = t.titleText), Xt(s, t, "title"));
  },
  wv = (e, t) => {
    var s;
    (pk(e, t), X1(e, t), yk(e, t), lk(e, t), fk(e, t), xk(e, t), Y1(e, t), ik(e, t), K1(e, t), ak(e, t));
    const o = Fe();
    (typeof t.didRender == "function" && o && t.didRender(o), (s = pe.eventEmitter) === null || s === void 0 || s.emit("didRender", o));
  },
  bk = () => Ht(Fe()),
  xv = () => {
    var e;
    return (e = Bn()) === null || e === void 0 ? void 0 : e.click();
  },
  kk = () => {
    var e;
    return (e = ls()) === null || e === void 0 ? void 0 : e.click();
  },
  Ck = () => {
    var e;
    return (e = so()) === null || e === void 0 ? void 0 : e.click();
  },
  io = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
  bv = (e) => {
    if (e.keydownTarget && e.keydownHandlerAdded && e.keydownHandler) {
      const t = e.keydownHandler;
      (e.keydownTarget.removeEventListener("keydown", t, { capture: e.keydownListenerCapture }), (e.keydownHandlerAdded = !1));
    }
  },
  Sk = (e, t, s) => {
    if ((bv(e), !t.toast)) {
      const o = (c) => Nk(t, c, s);
      e.keydownHandler = o;
      const a = t.keydownListenerCapture ? window : Fe();
      if (a) {
        ((e.keydownTarget = a), (e.keydownListenerCapture = t.keydownListenerCapture));
        const c = o;
        (e.keydownTarget.addEventListener("keydown", c, { capture: e.keydownListenerCapture }), (e.keydownHandlerAdded = !0));
      }
    }
  },
  hd = (e, t) => {
    var s;
    const o = Zd();
    if (o.length) {
      ((e = e + t), e === -2 && (e = o.length - 1), e === o.length ? (e = 0) : e === -1 && (e = o.length - 1), o[e].focus());
      return;
    }
    (s = Fe()) === null || s === void 0 || s.focus();
  },
  kv = ["ArrowRight", "ArrowDown"],
  Ek = ["ArrowLeft", "ArrowUp"],
  Nk = (e, t, s) => {
    e && (t.isComposing || t.keyCode === 229 || (e.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? Pk(t, e) : t.key === "Tab" ? jk(t) : [...kv, ...Ek].includes(t.key) ? Ak(t.key) : t.key === "Escape" && Tk(t, e, s)));
  },
  Pk = (e, t) => {
    if (!Al(t.allowEnterKey)) return;
    const s = Fe();
    if (!s || !t.input) return;
    const o = Ml(s, t.input);
    if (e.target && o && e.target instanceof HTMLElement && e.target.outerHTML === o.outerHTML) {
      if (["textarea", "file"].includes(t.input)) return;
      (xv(), e.preventDefault());
    }
  },
  jk = (e) => {
    const t = e.target,
      s = Zd();
    let o = -1;
    for (let a = 0; a < s.length; a++)
      if (t === s[a]) {
        o = a;
        break;
      }
    (e.shiftKey ? hd(o, -1) : hd(o, 1), e.stopPropagation(), e.preventDefault());
  },
  Ak = (e) => {
    const t = ki(),
      s = Bn(),
      o = ls(),
      a = so();
    if (!t || !s || !o || !a) return;
    const c = [s, o, a];
    if (document.activeElement instanceof HTMLElement && !c.includes(document.activeElement)) return;
    const u = kv.includes(e) ? "nextElementSibling" : "previousElementSibling";
    let h = document.activeElement;
    if (h) {
      for (let p = 0; p < t.children.length; p++) {
        if (((h = h[u]), !h)) return;
        if (h instanceof HTMLButtonElement && Ht(h)) break;
      }
      h instanceof HTMLButtonElement && h.focus();
    }
  },
  Tk = (e, t, s) => {
    (e.preventDefault(), Al(t.allowEscapeKey) && s(io.esc));
  };
var eo = { swalPromiseResolve: new WeakMap(), swalPromiseReject: new WeakMap() };
const Dk = () => {
    const e = Vt();
    Array.from(document.body.children).forEach((s) => {
      s.contains(e) || (s.hasAttribute("aria-hidden") && s.setAttribute("data-previous-aria-hidden", s.getAttribute("aria-hidden") || ""), s.setAttribute("aria-hidden", "true"));
    });
  },
  Cv = () => {
    Array.from(document.body.children).forEach((t) => {
      t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
    });
  },
  Sv = typeof window < "u" && !!window.GestureEvent,
  Rk = () => {
    if (Sv && !er(document.body, F.iosfix)) {
      const e = document.body.scrollTop;
      ((document.body.style.top = `${e * -1}px`), Oe(document.body, F.iosfix), Mk());
    }
  },
  Mk = () => {
    const e = Vt();
    if (!e) return;
    let t;
    ((e.ontouchstart = (s) => {
      t = Lk(s);
    }),
      (e.ontouchmove = (s) => {
        t && (s.preventDefault(), s.stopPropagation());
      }));
  },
  Lk = (e) => {
    const t = e.target,
      s = Vt(),
      o = Yd();
    return !s || !o || _k(e) || Ik(e) ? !1 : t === s || (!fd(s) && t instanceof HTMLElement && !L1(t, o) && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" && !(fd(o) && o.contains(t)));
  },
  _k = (e) => !!(e.touches && e.touches.length && e.touches[0].touchType === "stylus"),
  Ik = (e) => e.touches && e.touches.length > 1,
  Vk = () => {
    if (er(document.body, F.iosfix)) {
      const e = parseInt(document.body.style.top, 10);
      (hn(document.body, F.iosfix), (document.body.style.top = ""), (document.body.scrollTop = e * -1));
    }
  },
  Ok = () => {
    const e = document.createElement("div");
    ((e.className = F["scrollbar-measure"]), document.body.appendChild(e));
    const t = e.getBoundingClientRect().width - e.clientWidth;
    return (document.body.removeChild(e), t);
  };
let Qs = null;
const Fk = (e) => {
    Qs === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && ((Qs = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))), (document.body.style.paddingRight = `${Qs + Ok()}px`));
  },
  Bk = () => {
    Qs !== null && ((document.body.style.paddingRight = `${Qs}px`), (Qs = null));
  };
function Ev(e, t, s, o) {
  (Rl() ? tg(e, o) : (S1(s).then(() => tg(e, o)), bv(pe)), Sv ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), (t.innerHTML = "")) : t.remove(), Jd() && (Bk(), Vk(), Cv()), zk());
}
function zk() {
  hn([document.documentElement, document.body], [F.shown, F["height-auto"], F["no-backdrop"], F["toast-shown"]]);
}
function jr(e) {
  e = Uk(e);
  const t = eo.swalPromiseResolve.get(this),
    s = $k(this);
  this.isAwaitingPromise ? e.isDismissed || (Ei(this), t(e)) : s && t(e);
}
const $k = (e) => {
  const t = Fe();
  if (!t) return !1;
  const s = Ue.innerParams.get(e);
  if (!s || er(t, s.hideClass.popup)) return !1;
  (hn(t, s.showClass.popup), Oe(t, s.hideClass.popup));
  const o = Vt();
  return (hn(o, s.showClass.backdrop), Oe(o, s.hideClass.backdrop), Wk(e, t, s), !0);
};
function Nv(e) {
  const t = eo.swalPromiseReject.get(this);
  (Ei(this), t && t(e));
}
const Ei = (e) => {
    e.isAwaitingPromise && (delete e.isAwaitingPromise, Ue.innerParams.get(e) || e._destroy());
  },
  Uk = (e) => (typeof e > "u" ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 } : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e)),
  Wk = (e, t, s) => {
    var o;
    const a = Vt(),
      c = dv(t);
    (typeof s.willClose == "function" && s.willClose(t), (o = pe.eventEmitter) === null || o === void 0 || o.emit("willClose", t), c && a ? Hk(e, t, a, !!s.returnFocus, s.didClose) : a && Ev(e, a, !!s.returnFocus, s.didClose));
  },
  Hk = (e, t, s, o, a) => {
    pe.swalCloseEventFinishedCallback = Ev.bind(null, e, s, o, a);
    const c = function (u) {
      if (u.target === t) {
        var h;
        ((h = pe.swalCloseEventFinishedCallback) === null || h === void 0 || h.call(pe), delete pe.swalCloseEventFinishedCallback, t.removeEventListener("animationend", c), t.removeEventListener("transitionend", c));
      }
    };
    (t.addEventListener("animationend", c), t.addEventListener("transitionend", c));
  },
  tg = (e, t) => {
    setTimeout(() => {
      var s;
      (typeof t == "function" && t.bind(e.params)(), (s = pe.eventEmitter) === null || s === void 0 || s.emit("didClose"), e._destroy && e._destroy());
    });
  },
  to = (e) => {
    let t = Fe();
    if ((t || new fi(), (t = Fe()), !t)) return;
    const s = oo();
    (Rl() ? At(ro()) : Kk(t, e), wt(s), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus());
  },
  Kk = (e, t) => {
    const s = ki(),
      o = oo();
    !s || !o || (!t && Ht(Bn()) && (t = Bn()), wt(s), t && (At(t), o.setAttribute("data-button-to-replace", t.className), s.insertBefore(o, t)), Oe([e, s], F.loading));
  },
  Gk = (e, t) => {
    t.input === "select" || t.input === "radio" ? Zk(e, t) : ["text", "email", "number", "tel", "textarea"].some((s) => s === t.input) && (Gd(t.inputValue) || qd(t.inputValue)) && (to(Bn()), Jk(e, t));
  },
  qk = (e, t) => {
    const s = e.getInput();
    if (!s) return null;
    switch (t.input) {
      case "checkbox":
        return Yk(s);
      case "radio":
        return Xk(s);
      case "file":
        return Qk(s);
      default:
        return t.inputAutoTrim ? s.value.trim() : s.value;
    }
  },
  Yk = (e) => (e.checked ? 1 : 0),
  Xk = (e) => (e.checked ? e.value : null),
  Qk = (e) => (e.files && e.files.length ? (e.getAttribute("multiple") !== null ? e.files : e.files[0]) : null),
  Zk = (e, t) => {
    const s = Fe();
    if (!s) return;
    const o = (a) => {
      t.input === "select" ? eC(s, hl(a), t) : t.input === "radio" && tC(s, hl(a), t);
    };
    Gd(t.inputOptions) || qd(t.inputOptions)
      ? (to(Bn()),
        xi(t.inputOptions).then((a) => {
          (e.hideLoading(), o(a));
        }))
      : typeof t.inputOptions == "object"
        ? o(t.inputOptions)
        : as(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`);
  },
  Jk = (e, t) => {
    const s = e.getInput();
    s &&
      (At(s),
      xi(t.inputValue)
        .then((o) => {
          ((s.value = t.input === "number" ? `${parseFloat(o) || 0}` : `${o}`), wt(s), s.focus(), e.hideLoading());
        })
        .catch((o) => {
          (as(`Error in inputValue promise: ${o}`), (s.value = ""), wt(s), s.focus(), e.hideLoading());
        }));
  };
function eC(e, t, s) {
  const o = Pr(e, F.select);
  if (!o) return;
  const a = (c, u, h) => {
    const p = document.createElement("option");
    ((p.value = h), Zt(p, u), (p.selected = Pv(h, s.inputValue)), c.appendChild(p));
  };
  (t.forEach((c) => {
    const u = c[0],
      h = c[1];
    if (Array.isArray(h)) {
      const p = document.createElement("optgroup");
      ((p.label = u), (p.disabled = !1), o.appendChild(p), h.forEach((y) => a(p, y[1], y[0])));
    } else a(o, h, u);
  }),
    o.focus());
}
function tC(e, t, s) {
  const o = Pr(e, F.radio);
  if (!o) return;
  t.forEach((c) => {
    const u = c[0],
      h = c[1],
      p = document.createElement("input"),
      y = document.createElement("label");
    ((p.type = "radio"), (p.name = F.radio), (p.value = u), Pv(u, s.inputValue) && (p.checked = !0));
    const g = document.createElement("span");
    (Zt(g, h), (g.className = F.label), y.appendChild(p), y.appendChild(g), o.appendChild(y));
  });
  const a = o.querySelectorAll("input");
  a.length && a[0].focus();
}
const hl = (e) => {
    const t = [];
    return (
      e instanceof Map
        ? e.forEach((s, o) => {
            let a = s;
            (typeof a == "object" && (a = hl(a)), t.push([o, a]));
          })
        : Object.keys(e).forEach((s) => {
            let o = e[s];
            (typeof o == "object" && (o = hl(o)), t.push([s, o]));
          }),
      t
    );
  },
  Pv = (e, t) => !!t && t !== null && t !== void 0 && t.toString() === e.toString(),
  nC = (e) => {
    const t = Ue.innerParams.get(e);
    (e.disableButtons(), t.input ? jv(e, "confirm") : af(e, !0));
  },
  rC = (e) => {
    const t = Ue.innerParams.get(e);
    (e.disableButtons(), t.returnInputValueOnDeny ? jv(e, "deny") : of(e, !1));
  },
  sC = (e, t) => {
    (e.disableButtons(), t(io.cancel));
  },
  jv = (e, t) => {
    const s = Ue.innerParams.get(e);
    if (!s.input) {
      as(`The "input" parameter is needed to be set when using returnInputValueOn${Kd(t)}`);
      return;
    }
    const o = e.getInput(),
      a = qk(e, s);
    s.inputValidator ? oC(e, a, t) : o && !o.checkValidity() ? (e.enableButtons(), e.showValidationMessage(s.validationMessage || o.validationMessage)) : t === "deny" ? of(e, a) : af(e, a);
  },
  oC = (e, t, s) => {
    const o = Ue.innerParams.get(e);
    (e.disableInput(),
      Promise.resolve()
        .then(() => xi(o.inputValidator(t, o.validationMessage)))
        .then((c) => {
          (e.enableButtons(), e.enableInput(), c ? e.showValidationMessage(c) : s === "deny" ? of(e, t) : af(e, t));
        }));
  },
  of = (e, t) => {
    const s = Ue.innerParams.get(e);
    (s.showLoaderOnDeny && to(ls()),
      s.preDeny
        ? ((e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => xi(s.preDeny(t, s.validationMessage)))
            .then((a) => {
              a === !1 ? (e.hideLoading(), Ei(e)) : e.close({ isDenied: !0, value: typeof a > "u" ? t : a });
            })
            .catch((a) => Av(e, a)))
        : e.close({ isDenied: !0, value: t }));
  },
  ng = (e, t) => {
    e.close({ isConfirmed: !0, value: t });
  },
  Av = (e, t) => {
    e.rejectPromise(t);
  },
  af = (e, t) => {
    const s = Ue.innerParams.get(e);
    (s.showLoaderOnConfirm && to(),
      s.preConfirm
        ? (e.resetValidationMessage(),
          (e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => xi(s.preConfirm(t, s.validationMessage)))
            .then((a) => {
              Ht(Tl()) || a === !1 ? (e.hideLoading(), Ei(e)) : ng(e, typeof a > "u" ? t : a);
            })
            .catch((a) => Av(e, a)))
        : ng(e, t));
  };
function ml() {
  const e = Ue.innerParams.get(this);
  if (!e) return;
  const t = Ue.domCache.get(this);
  (At(t.loader), Rl() ? e.icon && wt(ro()) : iC(t), hn([t.popup, t.actions], F.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), (t.confirmButton.disabled = !1), (t.denyButton.disabled = !1), (t.cancelButton.disabled = !1));
}
const iC = (e) => {
  const t = e.loader.getAttribute("data-button-to-replace"),
    s = t ? e.popup.getElementsByClassName(t) : [];
  s.length ? wt(s[0], "inline-block") : M1() && At(e.actions);
};
function Tv() {
  const e = Ue.innerParams.get(this),
    t = Ue.domCache.get(this);
  return t ? Ml(t.popup, e.input) : null;
}
function Dv(e, t, s) {
  const o = Ue.domCache.get(e);
  t.forEach((a) => {
    o[a].disabled = s;
  });
}
function Rv(e, t) {
  const s = Fe();
  if (!(!s || !e))
    if (e.type === "radio") {
      const o = s.querySelectorAll(`[name="${F.radio}"]`);
      for (let a = 0; a < o.length; a++) o[a].disabled = t;
    } else e.disabled = t;
}
function Mv() {
  Dv(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function Lv() {
  Dv(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function _v() {
  Rv(this.getInput(), !1);
}
function Iv() {
  Rv(this.getInput(), !0);
}
function Vv(e) {
  const t = Ue.domCache.get(this),
    s = Ue.innerParams.get(this);
  (Zt(t.validationMessage, e), (t.validationMessage.className = F["validation-message"]), s.customClass && s.customClass.validationMessage && Oe(t.validationMessage, s.customClass.validationMessage), wt(t.validationMessage));
  const o = this.getInput();
  o && (o.setAttribute("aria-invalid", "true"), o.setAttribute("aria-describedby", F["validation-message"]), cv(o), Oe(o, F.inputerror));
}
function Ov() {
  const e = Ue.domCache.get(this);
  e.validationMessage && At(e.validationMessage);
  const t = this.getInput();
  t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), hn(t, F.inputerror));
}
const Ar = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: !1, draggable: !1, animation: !0, theme: "light", showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: {}, target: "body", color: void 0, backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showDenyButton: !1, showCancelButton: !1, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusDeny: !1, focusCancel: !1, returnFocus: !0, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: !1, showLoaderOnDeny: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoFocus: !0, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: !1, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, willOpen: void 0, didOpen: void 0, didRender: void 0, willClose: void 0, didClose: void 0, didDestroy: void 0, scrollbarPadding: !0, topLayer: !1 },
  aC = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "draggable", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "theme", "willClose"],
  lC = { allowEnterKey: void 0 },
  cC = ["allowOutsideClick", "allowEnterKey", "backdrop", "draggable", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
  Fv = (e) => Object.prototype.hasOwnProperty.call(Ar, e),
  Bv = (e) => aC.indexOf(e) !== -1,
  zv = (e) => lC[e],
  uC = (e) => {
    Fv(e) || It(`Unknown parameter "${e}"`);
  },
  dC = (e) => {
    cC.includes(e) && It(`The parameter "${e}" is incompatible with toasts`);
  },
  fC = (e) => {
    const t = zv(e);
    t && ov(e, t);
  },
  $v = (e) => {
    (e.backdrop === !1 && e.allowOutsideClick && It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), e.theme && !["light", "dark", "auto", "minimal", "borderless", "bootstrap-4", "bootstrap-4-light", "bootstrap-4-dark", "bootstrap-5", "bootstrap-5-light", "bootstrap-5-dark", "material-ui", "material-ui-light", "material-ui-dark", "embed-iframe", "bulma", "bulma-light", "bulma-dark"].includes(e.theme) && It(`Invalid theme "${e.theme}"`));
    for (const t in e) (uC(t), e.toast && dC(t), fC(t));
  };
function Uv(e) {
  const t = Vt(),
    s = Fe(),
    o = Ue.innerParams.get(this);
  if (!s || er(s, o.hideClass.popup)) {
    It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    return;
  }
  const a = hC(e),
    c = Object.assign({}, o, a);
  ($v(c), t && (t.dataset.swal2Theme = c.theme), wv(this, c), Ue.innerParams.set(this, c), Object.defineProperties(this, { params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 } }));
}
const hC = (e) => {
  const t = {};
  return (
    Object.keys(e).forEach((s) => {
      if (Bv(s)) {
        const o = e;
        t[s] = o[s];
      } else It(`Invalid parameter to update: ${s}`);
    }),
    t
  );
};
function Wv() {
  var e;
  const t = Ue.domCache.get(this),
    s = Ue.innerParams.get(this);
  if (!s) {
    Hv(this);
    return;
  }
  (t.popup && pe.swalCloseEventFinishedCallback && (pe.swalCloseEventFinishedCallback(), delete pe.swalCloseEventFinishedCallback), typeof s.didDestroy == "function" && s.didDestroy(), (e = pe.eventEmitter) === null || e === void 0 || e.emit("didDestroy"), mC(this));
}
const mC = (e) => {
    (Hv(e), delete e.params, delete pe.keydownHandler, delete pe.keydownTarget, delete pe.currentInstance);
  },
  Hv = (e) => {
    e.isAwaitingPromise ? (Ou(Ue, e), (e.isAwaitingPromise = !0)) : (Ou(eo, e), Ou(Ue, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy);
  },
  Ou = (e, t) => {
    for (const s in e) e[s].delete(t);
  };
var pC = Object.freeze({ __proto__: null, _destroy: Wv, close: jr, closeModal: jr, closePopup: jr, closeToast: jr, disableButtons: Lv, disableInput: Iv, disableLoading: ml, enableButtons: Mv, enableInput: _v, getInput: Tv, handleAwaitingPromise: Ei, hideLoading: ml, rejectPromise: Nv, resetValidationMessage: Ov, showValidationMessage: Vv, update: Uv });
const gC = (e, t, s) => {
    e.toast ? yC(e, t, s) : (wC(t), xC(t), bC(e, t, s));
  },
  yC = (e, t, s) => {
    t.popup.onclick = () => {
      (e && (vC(e) || e.timer || e.input)) || s(io.close);
    };
  },
  vC = (e) => !!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
let pl = !1;
const wC = (e) => {
    e.popup.onmousedown = () => {
      e.container.onmouseup = function (t) {
        ((e.container.onmouseup = () => {}), t.target === e.container && (pl = !0));
      };
    };
  },
  xC = (e) => {
    e.container.onmousedown = (t) => {
      (t.target === e.container && t.preventDefault(),
        (e.popup.onmouseup = function (s) {
          ((e.popup.onmouseup = () => {}), (s.target === e.popup || (s.target instanceof HTMLElement && e.popup.contains(s.target))) && (pl = !0));
        }));
    };
  },
  bC = (e, t, s) => {
    t.container.onclick = (o) => {
      if (pl) {
        pl = !1;
        return;
      }
      o.target === t.container && Al(e.allowOutsideClick) && s(io.backdrop);
    };
  },
  kC = (e) => typeof e == "object" && e !== null && "jquery" in e,
  rg = (e) => e instanceof Element || kC(e),
  CC = (e) => {
    const t = {};
    return (
      typeof e[0] == "object" && !rg(e[0])
        ? Object.assign(t, e[0])
        : ["title", "html", "icon"].forEach((s, o) => {
            const a = e[o];
            typeof a == "string" || rg(a) ? (t[s] = a) : a !== void 0 && as(`Unexpected type of ${s}! Expected "string" or "Element", got ${typeof a}`);
          }),
      t
    );
  };
function SC(...e) {
  return new this(...e);
}
function EC(e) {
  class t extends this {
    _main(o, a) {
      return super._main(o, Object.assign({}, e, a));
    }
  }
  return t;
}
const NC = () => pe.timeout && pe.timeout.getTimerLeft(),
  Kv = () => {
    if (pe.timeout) return (_1(), pe.timeout.stop());
  },
  Gv = () => {
    if (pe.timeout) {
      const e = pe.timeout.start();
      return (tf(e), e);
    }
  },
  PC = () => {
    const e = pe.timeout;
    return e && (e.running ? Kv() : Gv());
  },
  jC = (e) => {
    if (pe.timeout) {
      const t = pe.timeout.increase(e);
      return (tf(t, !0), t);
    }
  },
  AC = () => !!(pe.timeout && pe.timeout.isRunning());
let sg = !1;
const md = {};
function TC(e = "data-swal-template") {
  ((md[e] = this), sg || (document.body.addEventListener("click", DC), (sg = !0)));
}
const DC = (e) => {
  for (let t = e.target; t && t !== document; t = t.parentNode)
    for (const s in md) {
      const o = t.getAttribute && t.getAttribute(s);
      if (o) {
        md[s].fire({ template: o });
        return;
      }
    }
};
class RC {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return (typeof this.events[t] > "u" && (this.events[t] = []), this.events[t]);
  }
  on(t, s) {
    const o = this._getHandlersByEventName(t);
    o.includes(s) || o.push(s);
  }
  once(t, s) {
    const o = (...a) => {
      (this.removeListener(t, o), s.apply(this, a));
    };
    this.on(t, o);
  }
  emit(t, ...s) {
    this._getHandlersByEventName(t).forEach((o) => {
      try {
        o.apply(this, s);
      } catch (a) {
        console.error(a);
      }
    });
  }
  removeListener(t, s) {
    const o = this._getHandlersByEventName(t),
      a = o.indexOf(s);
    a > -1 && o.splice(a, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
pe.eventEmitter = new RC();
const MC = (e, t) => {
    pe.eventEmitter && pe.eventEmitter.on(e, t);
  },
  LC = (e, t) => {
    pe.eventEmitter && pe.eventEmitter.once(e, t);
  },
  _C = (e, t) => {
    if (pe.eventEmitter) {
      if (!e) {
        pe.eventEmitter.reset();
        return;
      }
      t ? pe.eventEmitter.removeListener(e, t) : pe.eventEmitter.removeAllListeners(e);
    }
  };
var IC = Object.freeze({ __proto__: null, argsToParams: CC, bindClickHandler: TC, clickCancel: Ck, clickConfirm: xv, clickDeny: kk, enableLoading: to, fire: SC, getActions: ki, getCancelButton: so, getCloseButton: Qd, getConfirmButton: Bn, getContainer: Vt, getDenyButton: ls, getFocusableElements: Zd, getFooter: lv, getHtmlContainer: Yd, getIcon: ro, getIconContent: j1, getImage: av, getInputLabel: A1, getLoader: oo, getPopup: Fe, getProgressSteps: Xd, getTimerLeft: NC, getTimerProgressBar: Dl, getTitle: iv, getValidationMessage: Tl, increaseTimer: jC, isDeprecatedParameter: zv, isLoading: D1, isTimerRunning: AC, isUpdatableParameter: Bv, isValidParameter: Fv, isVisible: bk, mixin: EC, off: _C, on: MC, once: LC, resumeTimer: Gv, showLoading: to, stopTimer: Kv, toggleTimer: PC });
class VC {
  constructor(t, s) {
    ((this.callback = t), (this.remaining = s), (this.running = !1), this.start());
  }
  start() {
    return (this.running || ((this.running = !0), (this.started = new Date()), (this.id = setTimeout(this.callback, this.remaining))), this.remaining);
  }
  stop() {
    return (this.started && this.running && ((this.running = !1), clearTimeout(this.id), (this.remaining -= new Date().getTime() - this.started.getTime())), this.remaining);
  }
  increase(t) {
    const s = this.running;
    return (s && this.stop(), (this.remaining += t), s && this.start(), this.remaining);
  }
  getTimerLeft() {
    return (this.running && (this.stop(), this.start()), this.remaining);
  }
  isRunning() {
    return this.running;
  }
}
const qv = ["swal-title", "swal-html", "swal-footer"],
  OC = (e) => {
    const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
    if (!t) return {};
    const s = t.content;
    return (KC(s), Object.assign(FC(s), BC(s), zC(s), $C(s), UC(s), WC(s), HC(s, qv)));
  },
  FC = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-param")).forEach((o) => {
        ss(o, ["name", "value"]);
        const a = o.getAttribute("name"),
          c = o.getAttribute("value");
        !a || !c || (a in Ar && typeof Ar[a] == "boolean" ? (t[a] = c !== "false") : a in Ar && typeof Ar[a] == "object" ? (t[a] = JSON.parse(c)) : (t[a] = c));
      }),
      t
    );
  },
  BC = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-function-param")).forEach((o) => {
        const a = o.getAttribute("name"),
          c = o.getAttribute("value");
        !a || !c || (t[a] = new Function(`return ${c}`)());
      }),
      t
    );
  },
  zC = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-button")).forEach((o) => {
        ss(o, ["type", "color", "aria-label"]);
        const a = o.getAttribute("type");
        if (!(!a || !["confirm", "cancel", "deny"].includes(a))) {
          if (((t[`${a}ButtonText`] = o.innerHTML), (t[`show${Kd(a)}Button`] = !0), o.hasAttribute("color"))) {
            const c = o.getAttribute("color");
            c !== null && (t[`${a}ButtonColor`] = c);
          }
          if (o.hasAttribute("aria-label")) {
            const c = o.getAttribute("aria-label");
            c !== null && (t[`${a}ButtonAriaLabel`] = c);
          }
        }
      }),
      t
    );
  },
  $C = (e) => {
    const t = {},
      s = e.querySelector("swal-image");
    return (s && (ss(s, ["src", "width", "height", "alt"]), s.hasAttribute("src") && (t.imageUrl = s.getAttribute("src") || void 0), s.hasAttribute("width") && (t.imageWidth = s.getAttribute("width") || void 0), s.hasAttribute("height") && (t.imageHeight = s.getAttribute("height") || void 0), s.hasAttribute("alt") && (t.imageAlt = s.getAttribute("alt") || void 0)), t);
  },
  UC = (e) => {
    const t = {},
      s = e.querySelector("swal-icon");
    return (s && (ss(s, ["type", "color"]), s.hasAttribute("type") && (t.icon = s.getAttribute("type")), s.hasAttribute("color") && (t.iconColor = s.getAttribute("color")), (t.iconHtml = s.innerHTML)), t);
  },
  WC = (e) => {
    const t = {},
      s = e.querySelector("swal-input");
    s && (ss(s, ["type", "label", "placeholder", "value"]), (t.input = s.getAttribute("type") || "text"), s.hasAttribute("label") && (t.inputLabel = s.getAttribute("label")), s.hasAttribute("placeholder") && (t.inputPlaceholder = s.getAttribute("placeholder")), s.hasAttribute("value") && (t.inputValue = s.getAttribute("value")));
    const o = Array.from(e.querySelectorAll("swal-input-option"));
    return (
      o.length &&
        ((t.inputOptions = {}),
        o.forEach((a) => {
          ss(a, ["value"]);
          const c = a.getAttribute("value");
          if (!c) return;
          const u = a.innerHTML;
          t.inputOptions[c] = u;
        })),
      t
    );
  },
  HC = (e, t) => {
    const s = {};
    for (const o in t) {
      const a = t[o],
        c = e.querySelector(a);
      c && (ss(c, []), (s[a.replace(/^swal-/, "")] = c.innerHTML.trim()));
    }
    return s;
  },
  KC = (e) => {
    const t = qv.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
    Array.from(e.children).forEach((s) => {
      const o = s.tagName.toLowerCase();
      t.includes(o) || It(`Unrecognized element <${o}>`);
    });
  },
  ss = (e, t) => {
    Array.from(e.attributes).forEach((s) => {
      t.indexOf(s.name) === -1 && It([`Unrecognized attribute "${s.name}" on <${e.tagName.toLowerCase()}>.`, `${t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."}`]);
    });
  },
  Yv = 10,
  GC = (e) => {
    var t, s;
    const o = Vt(),
      a = Fe();
    if (!o || !a) return;
    (typeof e.willOpen == "function" && e.willOpen(a), (t = pe.eventEmitter) === null || t === void 0 || t.emit("willOpen", a));
    const u = window.getComputedStyle(document.body).overflowY;
    if (
      (XC(o, a, e),
      setTimeout(() => {
        qC(o, a);
      }, Yv),
      Jd() && (YC(o, e.scrollbarPadding !== void 0 ? e.scrollbarPadding : !1, u), Dk()),
      !Rl() && !pe.previousActiveElement && (pe.previousActiveElement = document.activeElement),
      typeof e.didOpen == "function")
    ) {
      const h = e.didOpen;
      setTimeout(() => h(a));
    }
    (s = pe.eventEmitter) === null || s === void 0 || s.emit("didOpen", a);
  },
  gl = (e) => {
    const t = Fe();
    if (!t || e.target !== t) return;
    const s = Vt();
    s && (t.removeEventListener("animationend", gl), t.removeEventListener("transitionend", gl), (s.style.overflowY = "auto"), hn(s, F["no-transition"]));
  },
  qC = (e, t) => {
    dv(t) ? ((e.style.overflowY = "hidden"), t.addEventListener("animationend", gl), t.addEventListener("transitionend", gl)) : (e.style.overflowY = "auto");
  },
  YC = (e, t, s) => {
    (Rk(),
      t && s !== "hidden" && Fk(s),
      setTimeout(() => {
        e.scrollTop = 0;
      }));
  },
  XC = (e, t, s) => {
    var o;
    ((o = s.showClass) !== null && o !== void 0 && o.backdrop && Oe(e, s.showClass.backdrop),
      s.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          wt(t, "grid"),
          setTimeout(() => {
            var a;
            ((a = s.showClass) !== null && a !== void 0 && a.popup && Oe(t, s.showClass.popup), t.style.removeProperty("opacity"));
          }, Yv))
        : wt(t, "grid"),
      Oe([document.documentElement, document.body], F.shown),
      s.heightAuto && s.backdrop && !s.toast && Oe([document.documentElement, document.body], F["height-auto"]));
  };
var og = { email: (e, t) => (/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address")), url: (e, t) => (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")) };
function QC(e) {
  e.inputValidator || (e.input === "email" && (e.inputValidator = og.email), e.input === "url" && (e.inputValidator = og.url));
}
function ZC(e) {
  (!e.target || (typeof e.target == "string" && !document.querySelector(e.target)) || (typeof e.target != "string" && !e.target.appendChild)) && (It('Target parameter is not valid, defaulting to "body"'), (e.target = "body"));
}
function JC(e) {
  (QC(e),
    e.showLoaderOnConfirm &&
      !e.preConfirm &&
      It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    ZC(e),
    typeof e.title == "string" &&
      (e.title = e.title
        .split(
          `
`,
        )
        .join("<br />")),
    U1(e));
}
let Ln;
var Ua = new WeakMap();
class it {
  constructor(...t) {
    if ((x1(this, Ua, Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 })), typeof window > "u")) return;
    Ln = this;
    const s = Object.freeze(this.constructor.argsToParams(t));
    ((this.params = s), (this.isAwaitingPromise = !1), b1(Ua, this, this._main(Ln.params)));
  }
  _main(t, s = {}) {
    if (($v(Object.assign({}, s, t)), pe.currentInstance)) {
      const c = eo.swalPromiseResolve.get(pe.currentInstance),
        { isAwaitingPromise: u } = pe.currentInstance;
      (pe.currentInstance._destroy(), u || c({ isDismissed: !0 }), Jd() && Cv());
    }
    pe.currentInstance = Ln;
    const o = tS(t, s);
    (JC(o), Object.freeze(o), pe.timeout && (pe.timeout.stop(), delete pe.timeout), clearTimeout(pe.restoreFocusTimeout));
    const a = nS(Ln);
    return (wv(Ln, o), Ue.innerParams.set(Ln, o), eS(Ln, a, o));
  }
  then(t) {
    return Yp(Ua, this).then(t);
  }
  finally(t) {
    return Yp(Ua, this).finally(t);
  }
}
const eS = (e, t, s) =>
    new Promise((o, a) => {
      const c = (u) => {
        e.close({ isDismissed: !0, dismiss: u, isConfirmed: !1, isDenied: !1 });
      };
      (eo.swalPromiseResolve.set(e, o),
        eo.swalPromiseReject.set(e, a),
        (t.confirmButton.onclick = () => {
          nC(e);
        }),
        (t.denyButton.onclick = () => {
          rC(e);
        }),
        (t.cancelButton.onclick = () => {
          sC(e, c);
        }),
        (t.closeButton.onclick = () => {
          c(io.close);
        }),
        gC(s, t, c),
        Sk(pe, s, c),
        Gk(e, s),
        GC(s),
        rS(pe, s, c),
        sS(t, s),
        setTimeout(() => {
          t.container.scrollTop = 0;
        }));
    }),
  tS = (e, t) => {
    const s = OC(e),
      o = Object.assign({}, Ar, t, s, e);
    return ((o.showClass = Object.assign({}, Ar.showClass, o.showClass)), (o.hideClass = Object.assign({}, Ar.hideClass, o.hideClass)), o.animation === !1 && ((o.showClass = { backdrop: "swal2-noanimation" }), (o.hideClass = {})), o);
  },
  nS = (e) => {
    const t = { popup: Fe(), container: Vt(), actions: ki(), confirmButton: Bn(), denyButton: ls(), cancelButton: so(), loader: oo(), closeButton: Qd(), validationMessage: Tl(), progressSteps: Xd() };
    return (Ue.domCache.set(e, t), t);
  },
  rS = (e, t, s) => {
    const o = Dl();
    (At(o),
      t.timer &&
        ((e.timeout = new VC(() => {
          (s("timer"), delete e.timeout);
        }, t.timer)),
        t.timerProgressBar &&
          o &&
          (wt(o),
          Xt(o, t, "timerProgressBar"),
          setTimeout(() => {
            e.timeout && e.timeout.running && tf(t.timer);
          }))));
  },
  sS = (e, t) => {
    if (!t.toast) {
      if (!Al(t.allowEnterKey)) {
        (ov("allowEnterKey"), aS());
        return;
      }
      oS(e) || iS(e, t) || hd(-1, 1);
    }
  },
  oS = (e) => {
    const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
    for (const s of t) if (s instanceof HTMLElement && Ht(s)) return (s.focus(), !0);
    return !1;
  },
  iS = (e, t) => (t.focusDeny && Ht(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && Ht(e.cancelButton) ? (e.cancelButton.focus(), !0) : t.focusConfirm && Ht(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1),
  aS = () => {
    document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
  };
it.prototype.disableButtons = Lv;
it.prototype.enableButtons = Mv;
it.prototype.getInput = Tv;
it.prototype.disableInput = Iv;
it.prototype.enableInput = _v;
it.prototype.hideLoading = ml;
it.prototype.disableLoading = ml;
it.prototype.showValidationMessage = Vv;
it.prototype.resetValidationMessage = Ov;
it.prototype.close = jr;
it.prototype.closePopup = jr;
it.prototype.closeModal = jr;
it.prototype.closeToast = jr;
it.prototype.rejectPromise = Nv;
it.prototype.update = Uv;
it.prototype._destroy = Wv;
Object.assign(it, IC);
Object.keys(pC).forEach((e) => {
  it[e] = function (...t) {
    if (Ln && Ln[e]) return Ln[e](...t);
  };
});
it.DismissReason = io;
it.version = "11.26.18";
const fi = it;
fi.default = fi;
typeof document < "u" &&
  (function (e, t) {
    var s = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(s), s.styleSheet)) s.styleSheet.disabled || (s.styleSheet.cssText = t);
    else
      try {
        s.innerHTML = t;
      } catch {
        s.innerText = t;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
  );
const lf = k.createContext({});
function cf(e) {
  const t = k.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Xv = typeof window < "u",
  Qv = Xv ? k.useLayoutEffect : k.useEffect,
  Ll = k.createContext(null);
function uf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function df(e, t) {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}
const zn = (e, t, s) => (s > t ? t : s < e ? e : s);
let ff = () => {};
const nr = {},
  Zv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Jv(e) {
  return typeof e == "object" && e !== null;
}
const ew = (e) => /^0[^.\s]+$/u.test(e);
function hf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fn = (e) => e,
  lS = (e, t) => (s) => t(e(s)),
  Ni = (...e) => e.reduce(lS),
  hi = (e, t, s) => {
    const o = t - e;
    return o === 0 ? 1 : (s - e) / o;
  };
class mf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (uf(this.subscriptions, t), () => df(this.subscriptions, t));
  }
  notify(t, s, o) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1) this.subscriptions[0](t, s, o);
      else
        for (let c = 0; c < a; c++) {
          const u = this.subscriptions[c];
          u && u(t, s, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const tr = (e) => e * 1e3,
  dn = (e) => e / 1e3;
function tw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const nw = (e, t, s) => (((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e,
  cS = 1e-7,
  uS = 12;
function dS(e, t, s, o, a) {
  let c,
    u,
    h = 0;
  do ((u = t + (s - t) / 2), (c = nw(u, o, a) - e), c > 0 ? (s = u) : (t = u));
  while (Math.abs(c) > cS && ++h < uS);
  return u;
}
function Pi(e, t, s, o) {
  if (e === t && s === o) return fn;
  const a = (c) => dS(c, 0, 1, e, s);
  return (c) => (c === 0 || c === 1 ? c : nw(a(c), t, o));
}
const rw = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  sw = (e) => (t) => 1 - e(1 - t),
  ow = Pi(0.33, 1.53, 0.69, 0.99),
  pf = sw(ow),
  iw = rw(pf),
  aw = (e) => ((e *= 2) < 1 ? 0.5 * pf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  gf = (e) => 1 - Math.sin(Math.acos(e)),
  lw = sw(gf),
  cw = rw(gf),
  fS = Pi(0.42, 0, 1, 1),
  hS = Pi(0, 0, 0.58, 1),
  uw = Pi(0.42, 0, 0.58, 1),
  mS = (e) => Array.isArray(e) && typeof e[0] != "number",
  dw = (e) => Array.isArray(e) && typeof e[0] == "number",
  pS = { linear: fn, easeIn: fS, easeInOut: uw, easeOut: hS, circIn: gf, circInOut: cw, circOut: lw, backIn: pf, backInOut: iw, backOut: ow, anticipate: aw },
  gS = (e) => typeof e == "string",
  ig = (e) => {
    if (dw(e)) {
      ff(e.length === 4);
      const [t, s, o, a] = e;
      return Pi(t, s, o, a);
    } else if (gS(e)) return pS[e];
    return e;
  },
  Wa = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function yS(e, t) {
  let s = new Set(),
    o = new Set(),
    a = !1,
    c = !1;
  const u = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (u.has(g) && (y.schedule(g), e()), g(h));
  }
  const y = {
    schedule: (g, w = !1, x = !1) => {
      const j = x && a ? s : o;
      return (w && u.add(g), j.has(g) || j.add(g), g);
    },
    cancel: (g) => {
      (o.delete(g), u.delete(g));
    },
    process: (g) => {
      if (((h = g), a)) {
        c = !0;
        return;
      }
      ((a = !0), ([s, o] = [o, s]), s.forEach(p), s.clear(), (a = !1), c && ((c = !1), y.process(g)));
    },
  };
  return y;
}
const vS = 40;
function fw(e, t) {
  let s = !1,
    o = !0;
  const a = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (s = !0),
    u = Wa.reduce((O, W) => ((O[W] = yS(c)), O), {}),
    { setup: h, read: p, resolveKeyframes: y, preUpdate: g, update: w, preRender: x, render: N, postRender: j } = u,
    C = () => {
      const O = nr.useManualTiming ? a.timestamp : performance.now();
      ((s = !1), nr.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(O - a.timestamp, vS), 1)), (a.timestamp = O), (a.isProcessing = !0), h.process(a), p.process(a), y.process(a), g.process(a), w.process(a), x.process(a), N.process(a), j.process(a), (a.isProcessing = !1), s && t && ((o = !1), e(C)));
    },
    D = () => {
      ((s = !0), (o = !0), a.isProcessing || e(C));
    };
  return {
    schedule: Wa.reduce((O, W) => {
      const $ = u[W];
      return ((O[W] = (q, G = !1, B = !1) => (s || D(), $.schedule(q, G, B))), O);
    }, {}),
    cancel: (O) => {
      for (let W = 0; W < Wa.length; W++) u[Wa[W]].cancel(O);
    },
    state: a,
    steps: u,
  };
}
const { schedule: Ge, cancel: Dr, state: kt, steps: Fu } = fw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fn, !0);
let tl;
function wS() {
  tl = void 0;
}
const Lt = {
    now: () => (tl === void 0 && Lt.set(kt.isProcessing || nr.useManualTiming ? kt.timestamp : performance.now()), tl),
    set: (e) => {
      ((tl = e), queueMicrotask(wS));
    },
  },
  hw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  mw = hw("--"),
  xS = hw("var(--"),
  yf = (e) => (xS(e) ? bS.test(e.split("/*")[0].trim()) : !1),
  bS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ag(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const ao = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  mi = { ...ao, transform: (e) => zn(0, 1, e) },
  Ha = { ...ao, default: 1 },
  oi = (e) => Math.round(e * 1e5) / 1e5,
  vf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kS(e) {
  return e == null;
}
const CS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  wf = (e, t) => (s) => !!((typeof s == "string" && CS.test(s) && s.startsWith(e)) || (t && !kS(s) && Object.prototype.hasOwnProperty.call(s, t))),
  pw = (e, t, s) => (o) => {
    if (typeof o != "string") return o;
    const [a, c, u, h] = o.match(vf);
    return { [e]: parseFloat(a), [t]: parseFloat(c), [s]: parseFloat(u), alpha: h !== void 0 ? parseFloat(h) : 1 };
  },
  SS = (e) => zn(0, 255, e),
  Bu = { ...ao, transform: (e) => Math.round(SS(e)) },
  Jr = { test: wf("rgb", "red"), parse: pw("red", "green", "blue"), transform: ({ red: e, green: t, blue: s, alpha: o = 1 }) => "rgba(" + Bu.transform(e) + ", " + Bu.transform(t) + ", " + Bu.transform(s) + ", " + oi(mi.transform(o)) + ")" };
function ES(e) {
  let t = "",
    s = "",
    o = "",
    a = "";
  return (e.length > 5 ? ((t = e.substring(1, 3)), (s = e.substring(3, 5)), (o = e.substring(5, 7)), (a = e.substring(7, 9))) : ((t = e.substring(1, 2)), (s = e.substring(2, 3)), (o = e.substring(3, 4)), (a = e.substring(4, 5)), (t += t), (s += s), (o += o), (a += a)), { red: parseInt(t, 16), green: parseInt(s, 16), blue: parseInt(o, 16), alpha: a ? parseInt(a, 16) / 255 : 1 });
}
const pd = { test: wf("#"), parse: ES, transform: Jr.transform },
  ji = (e) => ({ test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
  Sr = ji("deg"),
  On = ji("%"),
  re = ji("px"),
  NS = ji("vh"),
  PS = ji("vw"),
  lg = { ...On, parse: (e) => On.parse(e) / 100, transform: (e) => On.transform(e * 100) },
  Gs = { test: wf("hsl", "hue"), parse: pw("hue", "saturation", "lightness"), transform: ({ hue: e, saturation: t, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + On.transform(oi(t)) + ", " + On.transform(oi(s)) + ", " + oi(mi.transform(o)) + ")" },
  ct = {
    test: (e) => Jr.test(e) || pd.test(e) || Gs.test(e),
    parse: (e) => (Jr.test(e) ? Jr.parse(e) : Gs.test(e) ? Gs.parse(e) : pd.parse(e)),
    transform: (e) => (typeof e == "string" ? e : e.hasOwnProperty("red") ? Jr.transform(e) : Gs.transform(e)),
    getAnimatableNone: (e) => {
      const t = ct.parse(e);
      return ((t.alpha = 0), ct.transform(t));
    },
  },
  jS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function AS(e) {
  var t, s;
  return isNaN(e) && typeof e == "string" && (((t = e.match(vf)) == null ? void 0 : t.length) || 0) + (((s = e.match(jS)) == null ? void 0 : s.length) || 0) > 0;
}
const gw = "number",
  yw = "color",
  TS = "var",
  DS = "var(",
  cg = "${}",
  RS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pi(e) {
  const t = e.toString(),
    s = [],
    o = { color: [], number: [], var: [] },
    a = [];
  let c = 0;
  const h = t.replace(RS, (p) => (ct.test(p) ? (o.color.push(c), a.push(yw), s.push(ct.parse(p))) : p.startsWith(DS) ? (o.var.push(c), a.push(TS), s.push(p)) : (o.number.push(c), a.push(gw), s.push(parseFloat(p))), ++c, cg)).split(cg);
  return { values: s, split: h, indexes: o, types: a };
}
function vw(e) {
  return pi(e).values;
}
function ww(e) {
  const { split: t, types: s } = pi(e),
    o = t.length;
  return (a) => {
    let c = "";
    for (let u = 0; u < o; u++)
      if (((c += t[u]), a[u] !== void 0)) {
        const h = s[u];
        h === gw ? (c += oi(a[u])) : h === yw ? (c += ct.transform(a[u])) : (c += a[u]);
      }
    return c;
  };
}
const MS = (e) => (typeof e == "number" ? 0 : ct.test(e) ? ct.getAnimatableNone(e) : e);
function LS(e) {
  const t = vw(e);
  return ww(e)(t.map(MS));
}
const Rr = { test: AS, parse: vw, createTransformer: ww, getAnimatableNone: LS };
function zu(e, t, s) {
  return (s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? e + (t - e) * 6 * s : s < 1 / 2 ? t : s < 2 / 3 ? e + (t - e) * (2 / 3 - s) * 6 : e);
}
function _S({ hue: e, saturation: t, lightness: s, alpha: o }) {
  ((e /= 360), (t /= 100), (s /= 100));
  let a = 0,
    c = 0,
    u = 0;
  if (!t) a = c = u = s;
  else {
    const h = s < 0.5 ? s * (1 + t) : s + t - s * t,
      p = 2 * s - h;
    ((a = zu(p, h, e + 1 / 3)), (c = zu(p, h, e)), (u = zu(p, h, e - 1 / 3)));
  }
  return { red: Math.round(a * 255), green: Math.round(c * 255), blue: Math.round(u * 255), alpha: o };
}
function yl(e, t) {
  return (s) => (s > 0 ? t : e);
}
const Qe = (e, t, s) => e + (t - e) * s,
  $u = (e, t, s) => {
    const o = e * e,
      a = s * (t * t - o) + o;
    return a < 0 ? 0 : Math.sqrt(a);
  },
  IS = [pd, Jr, Gs],
  VS = (e) => IS.find((t) => t.test(e));
function ug(e) {
  const t = VS(e);
  if (!t) return !1;
  let s = t.parse(e);
  return (t === Gs && (s = _S(s)), s);
}
const dg = (e, t) => {
    const s = ug(e),
      o = ug(t);
    if (!s || !o) return yl(e, t);
    const a = { ...s };
    return (c) => ((a.red = $u(s.red, o.red, c)), (a.green = $u(s.green, o.green, c)), (a.blue = $u(s.blue, o.blue, c)), (a.alpha = Qe(s.alpha, o.alpha, c)), Jr.transform(a));
  },
  gd = new Set(["none", "hidden"]);
function OS(e, t) {
  return gd.has(e) ? (s) => (s <= 0 ? e : t) : (s) => (s >= 1 ? t : e);
}
function FS(e, t) {
  return (s) => Qe(e, t, s);
}
function xf(e) {
  return typeof e == "number" ? FS : typeof e == "string" ? (yf(e) ? yl : ct.test(e) ? dg : $S) : Array.isArray(e) ? xw : typeof e == "object" ? (ct.test(e) ? dg : BS) : yl;
}
function xw(e, t) {
  const s = [...e],
    o = s.length,
    a = e.map((c, u) => xf(c)(c, t[u]));
  return (c) => {
    for (let u = 0; u < o; u++) s[u] = a[u](c);
    return s;
  };
}
function BS(e, t) {
  const s = { ...e, ...t },
    o = {};
  for (const a in s) e[a] !== void 0 && t[a] !== void 0 && (o[a] = xf(e[a])(e[a], t[a]));
  return (a) => {
    for (const c in o) s[c] = o[c](a);
    return s;
  };
}
function zS(e, t) {
  const s = [],
    o = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const c = t.types[a],
      u = e.indexes[c][o[c]],
      h = e.values[u] ?? 0;
    ((s[a] = h), o[c]++);
  }
  return s;
}
const $S = (e, t) => {
  const s = Rr.createTransformer(t),
    o = pi(e),
    a = pi(t);
  return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? ((gd.has(e) && !a.values.length) || (gd.has(t) && !o.values.length) ? OS(e, t) : Ni(xw(zS(o, a), a.values), s)) : yl(e, t);
};
function bw(e, t, s) {
  return typeof e == "number" && typeof t == "number" && typeof s == "number" ? Qe(e, t, s) : xf(e)(e, t);
}
const US = (e) => {
    const t = ({ timestamp: s }) => e(s);
    return { start: (s = !0) => Ge.update(t, s), stop: () => Dr(t), now: () => (kt.isProcessing ? kt.timestamp : Lt.now()) };
  },
  kw = (e, t, s = 10) => {
    let o = "";
    const a = Math.max(Math.round(t / s), 2);
    for (let c = 0; c < a; c++) o += Math.round(e(c / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  vl = 2e4;
function bf(e) {
  let t = 0;
  const s = 50;
  let o = e.next(t);
  for (; !o.done && t < vl; ) ((t += s), (o = e.next(t)));
  return t >= vl ? 1 / 0 : t;
}
function WS(e, t = 100, s) {
  const o = s({ ...e, keyframes: [0, t] }),
    a = Math.min(bf(o), vl);
  return { type: "keyframes", ease: (c) => o.next(a * c).value / t, duration: dn(a) };
}
const HS = 5;
function Cw(e, t, s) {
  const o = Math.max(t - HS, 0);
  return tw(s - e(o), t - o);
}
const et = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 0.005, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 },
  Uu = 0.001;
function KS({ duration: e = et.duration, bounce: t = et.bounce, velocity: s = et.velocity, mass: o = et.mass }) {
  let a,
    c,
    u = 1 - t;
  ((u = zn(et.minDamping, et.maxDamping, u)),
    (e = zn(et.minDuration, et.maxDuration, dn(e))),
    u < 1
      ? ((a = (y) => {
          const g = y * u,
            w = g * e,
            x = g - s,
            N = yd(y, u),
            j = Math.exp(-w);
          return Uu - (x / N) * j;
        }),
        (c = (y) => {
          const w = y * u * e,
            x = w * s + s,
            N = Math.pow(u, 2) * Math.pow(y, 2) * e,
            j = Math.exp(-w),
            C = yd(Math.pow(y, 2), u);
          return ((-a(y) + Uu > 0 ? -1 : 1) * ((x - N) * j)) / C;
        }))
      : ((a = (y) => {
          const g = Math.exp(-y * e),
            w = (y - s) * e + 1;
          return -Uu + g * w;
        }),
        (c = (y) => {
          const g = Math.exp(-y * e),
            w = (s - y) * (e * e);
          return g * w;
        })));
  const h = 5 / e,
    p = qS(a, c, h);
  if (((e = tr(e)), isNaN(p))) return { stiffness: et.stiffness, damping: et.damping, duration: e };
  {
    const y = Math.pow(p, 2) * o;
    return { stiffness: y, damping: u * 2 * Math.sqrt(o * y), duration: e };
  }
}
const GS = 12;
function qS(e, t, s) {
  let o = s;
  for (let a = 1; a < GS; a++) o = o - e(o) / t(o);
  return o;
}
function yd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const YS = ["duration", "bounce"],
  XS = ["stiffness", "damping", "mass"];
function fg(e, t) {
  return t.some((s) => e[s] !== void 0);
}
function QS(e) {
  let t = { velocity: et.velocity, stiffness: et.stiffness, damping: et.damping, mass: et.mass, isResolvedFromDuration: !1, ...e };
  if (!fg(e, XS) && fg(e, YS))
    if (e.visualDuration) {
      const s = e.visualDuration,
        o = (2 * Math.PI) / (s * 1.2),
        a = o * o,
        c = 2 * zn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
      t = { ...t, mass: et.mass, stiffness: a, damping: c };
    } else {
      const s = KS(e);
      ((t = { ...t, ...s, mass: et.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function wl(e = et.visualDuration, t = et.bounce) {
  const s = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
  let { restSpeed: o, restDelta: a } = s;
  const c = s.keyframes[0],
    u = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: c },
    { stiffness: p, damping: y, mass: g, duration: w, velocity: x, isResolvedFromDuration: N } = QS({ ...s, velocity: -dn(s.velocity || 0) }),
    j = x || 0,
    C = y / (2 * Math.sqrt(p * g)),
    D = u - c,
    M = dn(Math.sqrt(p / g)),
    T = Math.abs(D) < 5;
  (o || (o = T ? et.restSpeed.granular : et.restSpeed.default), a || (a = T ? et.restDelta.granular : et.restDelta.default));
  let O;
  if (C < 1) {
    const $ = yd(M, C);
    O = (q) => {
      const G = Math.exp(-C * M * q);
      return u - G * (((j + C * M * D) / $) * Math.sin($ * q) + D * Math.cos($ * q));
    };
  } else if (C === 1) O = ($) => u - Math.exp(-M * $) * (D + (j + M * D) * $);
  else {
    const $ = M * Math.sqrt(C * C - 1);
    O = (q) => {
      const G = Math.exp(-C * M * q),
        B = Math.min($ * q, 300);
      return u - (G * ((j + C * M * D) * Math.sinh(B) + $ * D * Math.cosh(B))) / $;
    };
  }
  const W = {
    calculatedDuration: (N && w) || null,
    next: ($) => {
      const q = O($);
      if (N) h.done = $ >= w;
      else {
        let G = $ === 0 ? j : 0;
        C < 1 && (G = $ === 0 ? tr(j) : Cw(O, $, q));
        const B = Math.abs(G) <= o,
          se = Math.abs(u - q) <= a;
        h.done = B && se;
      }
      return ((h.value = h.done ? u : q), h);
    },
    toString: () => {
      const $ = Math.min(bf(W), vl),
        q = kw((G) => W.next($ * G).value, $, 30);
      return $ + "ms " + q;
    },
    toTransition: () => {},
  };
  return W;
}
wl.applyToOptions = (e) => {
  const t = WS(e, 100, wl);
  return ((e.ease = t.ease), (e.duration = tr(t.duration)), (e.type = "keyframes"), e);
};
function vd({ keyframes: e, velocity: t = 0, power: s = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: c = 500, modifyTarget: u, min: h, max: p, restDelta: y = 0.5, restSpeed: g }) {
  const w = e[0],
    x = { done: !1, value: w },
    N = (B) => (h !== void 0 && B < h) || (p !== void 0 && B > p),
    j = (B) => (h === void 0 ? p : p === void 0 || Math.abs(h - B) < Math.abs(p - B) ? h : p);
  let C = s * t;
  const D = w + C,
    M = u === void 0 ? D : u(D);
  M !== D && (C = M - w);
  const T = (B) => -C * Math.exp(-B / o),
    O = (B) => M + T(B),
    W = (B) => {
      const se = T(B),
        Ce = O(B);
      ((x.done = Math.abs(se) <= y), (x.value = x.done ? M : Ce));
    };
  let $, q;
  const G = (B) => {
    N(x.value) && (($ = B), (q = wl({ keyframes: [x.value, j(x.value)], velocity: Cw(O, B, x.value), damping: a, stiffness: c, restDelta: y, restSpeed: g })));
  };
  return (
    G(0),
    {
      calculatedDuration: null,
      next: (B) => {
        let se = !1;
        return (!q && $ === void 0 && ((se = !0), W(B), G(B)), $ !== void 0 && B >= $ ? q.next(B - $) : (!se && W(B), x));
      },
    }
  );
}
function ZS(e, t, s) {
  const o = [],
    a = s || nr.mix || bw,
    c = e.length - 1;
  for (let u = 0; u < c; u++) {
    let h = a(e[u], e[u + 1]);
    if (t) {
      const p = Array.isArray(t) ? t[u] || fn : t;
      h = Ni(p, h);
    }
    o.push(h);
  }
  return o;
}
function JS(e, t, { clamp: s = !0, ease: o, mixer: a } = {}) {
  const c = e.length;
  if ((ff(c === t.length), c === 1)) return () => t[0];
  if (c === 2 && t[0] === t[1]) return () => t[1];
  const u = e[0] === e[1];
  e[0] > e[c - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const h = ZS(t, o, a),
    p = h.length,
    y = (g) => {
      if (u && g < e[0]) return t[0];
      let w = 0;
      if (p > 1) for (; w < e.length - 2 && !(g < e[w + 1]); w++);
      const x = hi(e[w], e[w + 1], g);
      return h[w](x);
    };
  return s ? (g) => y(zn(e[0], e[c - 1], g)) : y;
}
function eE(e, t) {
  const s = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const a = hi(0, t, o);
    e.push(Qe(s, 1, a));
  }
}
function tE(e) {
  const t = [0];
  return (eE(t, e.length - 1), t);
}
function nE(e, t) {
  return e.map((s) => s * t);
}
function rE(e, t) {
  return e.map(() => t || uw).splice(0, e.length - 1);
}
function ii({ duration: e = 300, keyframes: t, times: s, ease: o = "easeInOut" }) {
  const a = mS(o) ? o.map(ig) : ig(o),
    c = { done: !1, value: t[0] },
    u = nE(s && s.length === t.length ? s : tE(t), e),
    h = JS(u, t, { ease: Array.isArray(a) ? a : rE(t, a) });
  return { calculatedDuration: e, next: (p) => ((c.value = h(p)), (c.done = p >= e), c) };
}
const sE = (e) => e !== null;
function kf(e, { repeat: t, repeatType: s = "loop" }, o, a = 1) {
  const c = e.filter(sE),
    h = a < 0 || (t && s !== "loop" && t % 2 === 1) ? 0 : c.length - 1;
  return !h || o === void 0 ? c[h] : o;
}
const oE = { decay: vd, inertia: vd, tween: ii, keyframes: ii, spring: wl };
function Sw(e) {
  typeof e.type == "string" && (e.type = oE[e.type]);
}
class Cf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, s) {
    return this.finished.then(t, s);
  }
}
const iE = (e) => e / 100;
class Sf extends Cf {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var o, a;
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== Lt.now() && this.tick(Lt.now()), (this.isStopped = !0), this.state !== "idle" && (this.teardown(), (a = (o = this.options).onStop) == null || a.call(o)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Sw(t);
    const { type: s = ii, repeat: o = 0, repeatDelay: a = 0, repeatType: c, velocity: u = 0 } = t;
    let { keyframes: h } = t;
    const p = s || ii;
    p !== ii && typeof h[0] != "number" && ((this.mixKeyframes = Ni(iE, bw(h[0], h[1]))), (h = [0, 100]));
    const y = p({ ...t, keyframes: h });
    (c === "mirror" && (this.mirroredGenerator = p({ ...t, keyframes: [...h].reverse(), velocity: -u })), y.calculatedDuration === null && (y.calculatedDuration = bf(y)));
    const { calculatedDuration: g } = y;
    ((this.calculatedDuration = g), (this.resolvedDuration = g + a), (this.totalDuration = this.resolvedDuration * (o + 1) - a), (this.generator = y));
  }
  updateTime(t) {
    const s = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = s);
  }
  tick(t, s = !1) {
    const { generator: o, totalDuration: a, mixKeyframes: c, mirroredGenerator: u, resolvedDuration: h, calculatedDuration: p } = this;
    if (this.startTime === null) return o.next(0);
    const { delay: y = 0, keyframes: g, repeat: w, repeatType: x, repeatDelay: N, type: j, onUpdate: C, finalKeyframe: D } = this.options;
    (this.speed > 0 ? (this.startTime = Math.min(this.startTime, t)) : this.speed < 0 && (this.startTime = Math.min(t - a / this.speed, this.startTime)), s ? (this.currentTime = t) : this.updateTime(t));
    const M = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      T = this.playbackSpeed >= 0 ? M < 0 : M > a;
    ((this.currentTime = Math.max(M, 0)), this.state === "finished" && this.holdTime === null && (this.currentTime = a));
    let O = this.currentTime,
      W = o;
    if (w) {
      const B = Math.min(this.currentTime, a) / h;
      let se = Math.floor(B),
        Ce = B % 1;
      (!Ce && B >= 1 && (Ce = 1), Ce === 1 && se--, (se = Math.min(se, w + 1)), !!(se % 2) && (x === "reverse" ? ((Ce = 1 - Ce), N && (Ce -= N / h)) : x === "mirror" && (W = u)), (O = zn(0, 1, Ce) * h));
    }
    const $ = T ? { done: !1, value: g[0] } : W.next(O);
    c && ($.value = c($.value));
    let { done: q } = $;
    !T && p !== null && (q = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
    const G = this.holdTime === null && (this.state === "finished" || (this.state === "running" && q));
    return (G && j !== vd && ($.value = kf(g, this.options, D, this.speed)), C && C($.value), G && this.finish(), $);
  }
  then(t, s) {
    return this.finished.then(t, s);
  }
  get duration() {
    return dn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + dn(t);
  }
  get time() {
    return dn(this.currentTime);
  }
  set time(t) {
    var s;
    ((t = tr(t)), (this.currentTime = t), this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? (this.holdTime = t) : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (s = this.driver) == null || s.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Lt.now());
    const s = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), s && (this.time = dn(this.currentTime)));
  }
  play() {
    var a, c;
    if (this.isStopped) return;
    const { driver: t = US, startTime: s } = this.options;
    (this.driver || (this.driver = t((u) => this.tick(u))), (c = (a = this.options).onPlay) == null || c.call(a));
    const o = this.driver.now();
    (this.state === "finished" ? (this.updateFinished(), (this.startTime = o)) : this.holdTime !== null ? (this.startTime = o - this.holdTime) : this.startTime || (this.startTime = s ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), (this.holdTime = null), (this.state = "running"), this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(Lt.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var t, s;
    (this.notifyFinished(), this.teardown(), (this.state = "finished"), (s = (t = this.options).onComplete) == null || s.call(t));
  }
  cancel() {
    var t, s;
    ((this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), (s = (t = this.options).onCancel) == null || s.call(t));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var s;
    return (this.options.allowFlatten && ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()), (s = this.driver) == null || s.stop(), t.observe(this));
  }
}
function aE(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const es = (e) => (e * 180) / Math.PI,
  wd = (e) => {
    const t = es(Math.atan2(e[1], e[0]));
    return xd(t);
  },
  lE = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2, rotate: wd, rotateZ: wd, skewX: (e) => es(Math.atan(e[1])), skewY: (e) => es(Math.atan(e[2])), skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2 },
  xd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  hg = wd,
  mg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  pg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  cE = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: mg, scaleY: pg, scale: (e) => (mg(e) + pg(e)) / 2, rotateX: (e) => xd(es(Math.atan2(e[6], e[5]))), rotateY: (e) => xd(es(Math.atan2(-e[2], e[0]))), rotateZ: hg, rotate: hg, skewX: (e) => es(Math.atan(e[4])), skewY: (e) => es(Math.atan(e[1])), skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2 };
function bd(e) {
  return e.includes("scale") ? 1 : 0;
}
function kd(e, t) {
  if (!e || e === "none") return bd(t);
  const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, a;
  if (s) ((o = cE), (a = s));
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = lE), (a = h));
  }
  if (!a) return bd(t);
  const c = o[t],
    u = a[1].split(",").map(dE);
  return typeof c == "function" ? c(u) : u[c];
}
const uE = (e, t) => {
  const { transform: s = "none" } = getComputedStyle(e);
  return kd(s, t);
};
function dE(e) {
  return parseFloat(e.trim());
}
const lo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  co = new Set(lo),
  gg = (e) => e === ao || e === re,
  fE = new Set(["x", "y", "z"]),
  hE = lo.filter((e) => !fE.has(e));
function mE(e) {
  const t = [];
  return (
    hE.forEach((s) => {
      const o = e.getValue(s);
      o !== void 0 && (t.push([s, o.get()]), o.set(s.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Tr = { width: ({ x: e }, { paddingLeft: t = "0", paddingRight: s = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(s), height: ({ y: e }, { paddingTop: t = "0", paddingBottom: s = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(s), top: (e, { top: t }) => parseFloat(t), left: (e, { left: t }) => parseFloat(t), bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min), right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min), x: (e, { transform: t }) => kd(t, "x"), y: (e, { transform: t }) => kd(t, "y") };
Tr.translateX = Tr.x;
Tr.translateY = Tr.y;
const rs = new Set();
let Cd = !1,
  Sd = !1,
  Ed = !1;
function Ew() {
  if (Sd) {
    const e = Array.from(rs).filter((o) => o.needsMeasurement),
      t = new Set(e.map((o) => o.element)),
      s = new Map();
    (t.forEach((o) => {
      const a = mE(o);
      a.length && (s.set(o, a), o.render());
    }),
      e.forEach((o) => o.measureInitialState()),
      t.forEach((o) => {
        o.render();
        const a = s.get(o);
        a &&
          a.forEach(([c, u]) => {
            var h;
            (h = o.getValue(c)) == null || h.set(u);
          });
      }),
      e.forEach((o) => o.measureEndState()),
      e.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((Sd = !1), (Cd = !1), rs.forEach((e) => e.complete(Ed)), rs.clear());
}
function Nw() {
  rs.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Sd = !0));
  });
}
function pE() {
  ((Ed = !0), Nw(), Ew(), (Ed = !1));
}
class Ef {
  constructor(t, s, o, a, c, u = !1) {
    ((this.state = "pending"), (this.isAsync = !1), (this.needsMeasurement = !1), (this.unresolvedKeyframes = [...t]), (this.onComplete = s), (this.name = o), (this.motionValue = a), (this.element = c), (this.isAsync = u));
  }
  scheduleResolve() {
    ((this.state = "scheduled"), this.isAsync ? (rs.add(this), Cd || ((Cd = !0), Ge.read(Nw), Ge.resolveKeyframes(Ew))) : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: s, element: o, motionValue: a } = this;
    if (t[0] === null) {
      const c = a == null ? void 0 : a.get(),
        u = t[t.length - 1];
      if (c !== void 0) t[0] = c;
      else if (o && s) {
        const h = o.readValue(s, u);
        h != null && (t[0] = h);
      }
      (t[0] === void 0 && (t[0] = u), a && c === void 0 && a.set(t[0]));
    }
    aE(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), rs.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (rs.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const gE = (e) => e.startsWith("--");
function yE(e, t, s) {
  gE(t) ? e.style.setProperty(t, s) : (e.style[t] = s);
}
const vE = hf(() => window.ScrollTimeline !== void 0),
  wE = {};
function xE(e, t) {
  const s = hf(e);
  return () => wE[t] ?? s();
}
const Pw = xE(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ri = ([e, t, s, o]) => `cubic-bezier(${e}, ${t}, ${s}, ${o})`,
  yg = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: ri([0, 0.65, 0.55, 1]), circOut: ri([0.55, 0, 1, 0.45]), backIn: ri([0.31, 0.01, 0.66, -0.59]), backOut: ri([0.33, 1.53, 0.69, 0.99]) };
function jw(e, t) {
  if (e) return typeof e == "function" ? (Pw() ? kw(e, t) : "ease-out") : dw(e) ? ri(e) : Array.isArray(e) ? e.map((s) => jw(s, t) || yg.easeOut) : yg[e];
}
function bE(e, t, s, { delay: o = 0, duration: a = 300, repeat: c = 0, repeatType: u = "loop", ease: h = "easeOut", times: p } = {}, y = void 0) {
  const g = { [t]: s };
  p && (g.offset = p);
  const w = jw(h, a);
  Array.isArray(w) && (g.easing = w);
  const x = { delay: o, duration: a, easing: Array.isArray(w) ? "linear" : w, fill: "both", iterations: c + 1, direction: u === "reverse" ? "alternate" : "normal" };
  return (y && (x.pseudoElement = y), e.animate(g, x));
}
function Aw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function kE({ type: e, ...t }) {
  return Aw(e) && Pw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class CE extends Cf {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !t)) return;
    const { element: s, name: o, keyframes: a, pseudoElement: c, allowFlatten: u = !1, finalKeyframe: h, onComplete: p } = t;
    ((this.isPseudoElement = !!c), (this.allowFlatten = u), (this.options = t), ff(typeof t.type != "string"));
    const y = kE(t);
    ((this.animation = bE(s, o, a, y, c)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const g = kf(a, this.options, h, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(g) : yE(s, o, g), this.animation.cancel());
        }
        (p == null || p(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped || ((this.manualStartTime = null), this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, s;
    (s = (t = this.animation).finish) == null || s.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, s;
    this.isPseudoElement || (s = (t = this.animation).commitStyles) == null || s.call(t);
  }
  get duration() {
    var s, o;
    const t = ((o = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : o.call(s).duration) || 0;
    return dn(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + dn(t);
  }
  get time() {
    return dn(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = tr(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: s }) {
    var o;
    return (this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({ easing: "linear" })), (this.animation.onfinish = null), t && vE() ? ((this.animation.timeline = t), fn) : s(this));
  }
}
const Tw = { anticipate: aw, backInOut: iw, circInOut: cw };
function SE(e) {
  return e in Tw;
}
function EE(e) {
  typeof e.ease == "string" && SE(e.ease) && (e.ease = Tw[e.ease]);
}
const Wu = 10;
class NE extends CE {
  constructor(t) {
    (EE(t), Sw(t), super(t), t.startTime !== void 0 && (this.startTime = t.startTime), (this.options = t));
  }
  updateMotionValue(t) {
    const { motionValue: s, onUpdate: o, onComplete: a, element: c, ...u } = this.options;
    if (!s) return;
    if (t !== void 0) {
      s.set(t);
      return;
    }
    const h = new Sf({ ...u, autoplay: !1 }),
      p = Math.max(Wu, Lt.now() - this.startTime),
      y = zn(0, Wu, p - Wu);
    (s.setWithVelocity(h.sample(Math.max(0, p - y)).value, h.sample(p).value, y), h.stop());
  }
}
const vg = (e, t) => (t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || (typeof e == "string" && (Rr.test(e) || e === "0") && !e.startsWith("url("))));
function PE(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let s = 0; s < e.length; s++) if (e[s] !== t) return !0;
}
function jE(e, t, s, o) {
  const a = e[0];
  if (a === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const c = e[e.length - 1],
    u = vg(a, t),
    h = vg(c, t);
  return !u || !h ? !1 : PE(e) || ((s === "spring" || Aw(s)) && o);
}
function Nd(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const AE = new Set(["opacity", "clipPath", "filter", "transform"]),
  TE = hf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function DE(e) {
  var g;
  const { motionValue: t, name: s, repeatDelay: o, repeatType: a, damping: c, type: u } = e;
  if (!(((g = t == null ? void 0 : t.owner) == null ? void 0 : g.current) instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: y } = t.owner.getProps();
  return TE() && s && AE.has(s) && (s !== "transform" || !y) && !p && !o && a !== "mirror" && c !== 0 && u !== "inertia";
}
const RE = 40;
class ME extends Cf {
  constructor({ autoplay: t = !0, delay: s = 0, type: o = "keyframes", repeat: a = 0, repeatDelay: c = 0, repeatType: u = "loop", keyframes: h, name: p, motionValue: y, element: g, ...w }) {
    var j;
    (super(),
      (this.stop = () => {
        var C, D;
        (this._animation && (this._animation.stop(), (C = this.stopTimeline) == null || C.call(this)), (D = this.keyframeResolver) == null || D.cancel());
      }),
      (this.createdAt = Lt.now()));
    const x = { autoplay: t, delay: s, type: o, repeat: a, repeatDelay: c, repeatType: u, name: p, motionValue: y, element: g, ...w },
      N = (g == null ? void 0 : g.KeyframeResolver) || Ef;
    ((this.keyframeResolver = new N(h, (C, D, M) => this.onKeyframesResolved(C, D, x, !M), p, y, g)), (j = this.keyframeResolver) == null || j.scheduleResolve());
  }
  onKeyframesResolved(t, s, o, a) {
    this.keyframeResolver = void 0;
    const { name: c, type: u, velocity: h, delay: p, isHandoff: y, onUpdate: g } = o;
    ((this.resolvedAt = Lt.now()), jE(t, c, u, h) || ((nr.instantAnimations || !p) && (g == null || g(kf(t, o, s))), (t[0] = t[t.length - 1]), Nd(o), (o.repeat = 0)));
    const x = { startTime: a ? (this.resolvedAt ? (this.resolvedAt - this.createdAt > RE ? this.resolvedAt : this.createdAt) : this.createdAt) : void 0, finalKeyframe: s, ...o, keyframes: t },
      N = !y && DE(x) ? new NE({ ...x, element: x.motionValue.owner.current }) : new Sf(x);
    (N.finished.then(() => this.notifyFinished()).catch(fn), this.pendingTimeline && ((this.stopTimeline = N.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)), (this._animation = N));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, s) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (this._animation || ((t = this.keyframeResolver) == null || t.resume(), pE()), this._animation);
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (this._animation ? (this.stopTimeline = this.animation.attachTimeline(t)) : (this.pendingTimeline = t), () => this.stop());
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel());
  }
}
const LE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _E(e) {
  const t = LE.exec(e);
  if (!t) return [,];
  const [, s, o, a] = t;
  return [`--${s ?? o}`, a];
}
function Dw(e, t, s = 1) {
  const [o, a] = _E(e);
  if (!o) return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const u = c.trim();
    return Zv(u) ? parseFloat(u) : u;
  }
  return yf(a) ? Dw(a, t, s + 1) : a;
}
function Nf(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const IE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  VE = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  OE = { type: "keyframes", duration: 0.8 },
  FE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  BE = (e, { keyframes: t }) => (t.length > 2 ? OE : co.has(e) ? (e.startsWith("scale") ? VE(t[1]) : IE) : FE);
function zE({ when: e, delay: t, delayChildren: s, staggerChildren: o, staggerDirection: a, repeat: c, repeatType: u, repeatDelay: h, from: p, elapsed: y, ...g }) {
  return !!Object.keys(g).length;
}
const $E = (e) => e !== null;
function UE(e, { repeat: t, repeatType: s = "loop" }, o) {
  const a = e.filter($E),
    c = t && s !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
  return a[c];
}
function Rw(e, t, s, o = 0, a = 1) {
  const c = Array.from(e)
      .sort((y, g) => y.sortNodePosition(g))
      .indexOf(t),
    u = e.size,
    h = (u - 1) * o;
  return typeof s == "function" ? s(c, u) : a === 1 ? c * o : h - c * o;
}
const Pf =
    (e, t, s, o = {}, a, c) =>
    (u) => {
      const h = Nf(o, e) || {},
        p = h.delay || o.delay || 0;
      let { elapsed: y = 0 } = o;
      y = y - tr(p);
      const g = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...h,
        delay: -y,
        onUpdate: (x) => {
          (t.set(x), h.onUpdate && h.onUpdate(x));
        },
        onComplete: () => {
          (u(), h.onComplete && h.onComplete());
        },
        name: e,
        motionValue: t,
        element: c ? void 0 : a,
      };
      (zE(h) || Object.assign(g, BE(e, g)), g.duration && (g.duration = tr(g.duration)), g.repeatDelay && (g.repeatDelay = tr(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from));
      let w = !1;
      if (((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) && (Nd(g), g.delay === 0 && (w = !0)), (nr.instantAnimations || nr.skipAnimations) && ((w = !0), Nd(g), (g.delay = 0)), (g.allowFlatten = !h.type && !h.ease), w && !c && t.get() !== void 0)) {
        const x = UE(g.keyframes, h);
        if (x !== void 0) {
          Ge.update(() => {
            (g.onUpdate(x), g.onComplete());
          });
          return;
        }
      }
      return h.isSync ? new Sf(g) : new ME(g);
    },
  Mw = new Set(["width", "height", "top", "left", "right", "bottom", ...lo]),
  wg = 30,
  WE = (e) => !isNaN(parseFloat(e));
class HE {
  constructor(t, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        var c;
        const a = Lt.now();
        if ((this.updatedAt !== a && this.setPrevFrameValue(), (this.prev = this.current), this.setCurrent(o), this.current !== this.prev && ((c = this.events.change) == null || c.notify(this.current), this.dependents))) for (const u of this.dependents) u.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = s.owner));
  }
  setCurrent(t) {
    ((this.current = t), (this.updatedAt = Lt.now()), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = WE(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, s) {
    this.events[t] || (this.events[t] = new mf());
    const o = this.events[t].add(s);
    return t === "change"
      ? () => {
          (o(),
            Ge.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, s) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = s));
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, s, o) {
    (this.set(s), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(t, s = !0) {
    (this.updateAndNotify(t), (this.prev = t), (this.prevUpdatedAt = this.prevFrameValue = void 0), s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Lt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > wg) return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, wg);
    return tw(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0), (this.animation = t(s)), this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, s;
    ((t = this.dependents) == null || t.clear(), (s = this.events.destroy) == null || s.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function no(e, t) {
  return new HE(e, t);
}
function xg(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((s, o) => {
        ((t[0][o] = s.get()), (t[1][o] = s.getVelocity()));
      }),
    t
  );
}
function jf(e, t, s, o) {
  if (typeof t == "function") {
    const [a, c] = xg(o);
    t = t(s !== void 0 ? s : e.custom, a, c);
  }
  if ((typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function")) {
    const [a, c] = xg(o);
    t = t(s !== void 0 ? s : e.custom, a, c);
  }
  return t;
}
function Zs(e, t, s) {
  const o = e.getProps();
  return jf(o, t, s !== void 0 ? s : o.custom, e);
}
const Pd = (e) => Array.isArray(e);
function KE(e, t, s) {
  e.hasValue(t) ? e.getValue(t).set(s) : e.addValue(t, no(s));
}
function GE(e) {
  return Pd(e) ? e[e.length - 1] || 0 : e;
}
function qE(e, t) {
  const s = Zs(e, t);
  let { transitionEnd: o = {}, transition: a = {}, ...c } = s || {};
  c = { ...c, ...o };
  for (const u in c) {
    const h = GE(c[u]);
    KE(e, u, h);
  }
}
const jt = (e) => !!(e && e.getVelocity);
function YE(e) {
  return !!(jt(e) && e.add);
}
function jd(e, t) {
  const s = e.getValue("willChange");
  if (YE(s)) return s.add(t);
  if (!s && nr.WillChange) {
    const o = new nr.WillChange("auto");
    (e.addValue("willChange", o), o.add(t));
  }
}
function Af(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const XE = "framerAppearId",
  Lw = "data-" + Af(XE);
function _w(e) {
  return e.props[Lw];
}
function QE({ protectedKeys: e, needsAnimating: t }, s) {
  const o = e.hasOwnProperty(s) && t[s] !== !0;
  return ((t[s] = !1), o);
}
function Iw(e, t, { delay: s = 0, transitionOverride: o, type: a } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: u, ...h } = t;
  o && (c = o);
  const p = [],
    y = a && e.animationState && e.animationState.getState()[a];
  for (const g in h) {
    const w = e.getValue(g, e.latestValues[g] ?? null),
      x = h[g];
    if (x === void 0 || (y && QE(y, g))) continue;
    const N = { delay: s, ...Nf(c || {}, g) },
      j = w.get();
    if (j !== void 0 && !w.isAnimating && !Array.isArray(x) && x === j && !N.velocity) continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const M = _w(e);
      if (M) {
        const T = window.MotionHandoffAnimation(M, g, Ge);
        T !== null && ((N.startTime = T), (C = !0));
      }
    }
    (jd(e, g), w.start(Pf(g, w, x, e.shouldReduceMotion && Mw.has(g) ? { type: !1 } : N, e, C)));
    const D = w.animation;
    D && p.push(D);
  }
  return (
    u &&
      Promise.all(p).then(() => {
        Ge.update(() => {
          u && qE(e, u);
        });
      }),
    p
  );
}
function Ad(e, t, s = {}) {
  var p;
  const o = Zs(e, t, s.type === "exit" ? ((p = e.presenceContext) == null ? void 0 : p.custom) : void 0);
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  s.transitionOverride && (a = s.transitionOverride);
  const c = o ? () => Promise.all(Iw(e, o, s)) : () => Promise.resolve(),
    u =
      e.variantChildren && e.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: g = 0, staggerChildren: w, staggerDirection: x } = a;
            return ZE(e, t, y, g, w, x, s);
          }
        : () => Promise.resolve(),
    { when: h } = a;
  if (h) {
    const [y, g] = h === "beforeChildren" ? [c, u] : [u, c];
    return y().then(() => g());
  } else return Promise.all([c(), u(s.delay)]);
}
function ZE(e, t, s = 0, o = 0, a = 0, c = 1, u) {
  const h = [];
  for (const p of e.variantChildren) (p.notify("AnimationStart", t), h.push(Ad(p, t, { ...u, delay: s + (typeof o == "function" ? 0 : o) + Rw(e.variantChildren, p, o, a, c) }).then(() => p.notify("AnimationComplete", t))));
  return Promise.all(h);
}
function JE(e, t, s = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const a = t.map((c) => Ad(e, c, s));
    o = Promise.all(a);
  } else if (typeof t == "string") o = Ad(e, t, s);
  else {
    const a = typeof t == "function" ? Zs(e, t, s.custom) : t;
    o = Promise.all(Iw(e, a, s));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const eN = { test: (e) => e === "auto", parse: (e) => e },
  Vw = (e) => (t) => t.test(e),
  Ow = [ao, re, On, Sr, PS, NS, eN],
  bg = (e) => Ow.find(Vw(e));
function tN(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ew(e) : !0;
}
const nN = new Set(["brightness", "contrast", "saturate", "opacity"]);
function rN(e) {
  const [t, s] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [o] = s.match(vf) || [];
  if (!o) return e;
  const a = s.replace(o, "");
  let c = nN.has(t) ? 1 : 0;
  return (o !== s && (c *= 100), t + "(" + c + a + ")");
}
const sN = /\b([a-z-]*)\(.*?\)/gu,
  Td = {
    ...Rr,
    getAnimatableNone: (e) => {
      const t = e.match(sN);
      return t ? t.map(rN).join(" ") : e;
    },
  },
  kg = { ...ao, transform: Math.round },
  oN = { rotate: Sr, rotateX: Sr, rotateY: Sr, rotateZ: Sr, scale: Ha, scaleX: Ha, scaleY: Ha, scaleZ: Ha, skew: Sr, skewX: Sr, skewY: Sr, distance: re, translateX: re, translateY: re, translateZ: re, x: re, y: re, z: re, perspective: re, transformPerspective: re, opacity: mi, originX: lg, originY: lg, originZ: re },
  Tf = { borderWidth: re, borderTopWidth: re, borderRightWidth: re, borderBottomWidth: re, borderLeftWidth: re, borderRadius: re, radius: re, borderTopLeftRadius: re, borderTopRightRadius: re, borderBottomRightRadius: re, borderBottomLeftRadius: re, width: re, maxWidth: re, height: re, maxHeight: re, top: re, right: re, bottom: re, left: re, inset: re, insetBlock: re, insetBlockStart: re, insetBlockEnd: re, insetInline: re, insetInlineStart: re, insetInlineEnd: re, padding: re, paddingTop: re, paddingRight: re, paddingBottom: re, paddingLeft: re, paddingBlock: re, paddingBlockStart: re, paddingBlockEnd: re, paddingInline: re, paddingInlineStart: re, paddingInlineEnd: re, margin: re, marginTop: re, marginRight: re, marginBottom: re, marginLeft: re, marginBlock: re, marginBlockStart: re, marginBlockEnd: re, marginInline: re, marginInlineStart: re, marginInlineEnd: re, backgroundPositionX: re, backgroundPositionY: re, ...oN, zIndex: kg, fillOpacity: mi, strokeOpacity: mi, numOctaves: kg },
  iN = { ...Tf, color: ct, backgroundColor: ct, outlineColor: ct, fill: ct, stroke: ct, borderColor: ct, borderTopColor: ct, borderRightColor: ct, borderBottomColor: ct, borderLeftColor: ct, filter: Td, WebkitFilter: Td },
  Fw = (e) => iN[e];
function Bw(e, t) {
  let s = Fw(e);
  return (s !== Td && (s = Rr), s.getAnimatableNone ? s.getAnimatableNone(t) : void 0);
}
const aN = new Set(["auto", "none", "0"]);
function lN(e, t, s) {
  let o = 0,
    a;
  for (; o < e.length && !a; ) {
    const c = e[o];
    (typeof c == "string" && !aN.has(c) && pi(c).values.length && (a = e[o]), o++);
  }
  if (a && s) for (const c of t) e[c] = Bw(s, a);
}
class cN extends Ef {
  constructor(t, s, o, a, c) {
    super(t, s, o, a, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: s, name: o } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let g = 0; g < t.length; g++) {
      let w = t[g];
      if (typeof w == "string" && ((w = w.trim()), yf(w))) {
        const x = Dw(w, s.current);
        (x !== void 0 && (t[g] = x), g === t.length - 1 && (this.finalKeyframe = w));
      }
    }
    if ((this.resolveNoneKeyframes(), !Mw.has(o) || t.length !== 2)) return;
    const [a, c] = t,
      u = bg(a),
      h = bg(c),
      p = ag(a),
      y = ag(c);
    if (p !== y && Tr[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (u !== h)
      if (gg(u) && gg(h))
        for (let g = 0; g < t.length; g++) {
          const w = t[g];
          typeof w == "string" && (t[g] = parseFloat(w));
        }
      else Tr[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: s } = this,
      o = [];
    for (let a = 0; a < t.length; a++) (t[a] === null || tN(t[a])) && o.push(a);
    o.length && lN(t, o, s);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: s, name: o } = this;
    if (!t || !t.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset), (this.measuredOrigin = Tr[o](t.measureViewportBox(), window.getComputedStyle(t.current))), (s[0] = this.measuredOrigin));
    const a = s[s.length - 1];
    a !== void 0 && t.getValue(o, a).jump(a, !1);
  }
  measureEndState() {
    var h;
    const { element: t, name: s, unresolvedKeyframes: o } = this;
    if (!t || !t.current) return;
    const a = t.getValue(s);
    a && a.jump(this.measuredOrigin, !1);
    const c = o.length - 1,
      u = o[c];
    ((o[c] = Tr[s](t.measureViewportBox(), window.getComputedStyle(t.current))),
      u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u),
      (h = this.removedTransforms) != null &&
        h.length &&
        this.removedTransforms.forEach(([p, y]) => {
          t.getValue(p).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function uN(e, t, s) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let o = document;
    const a = (s == null ? void 0 : s[e]) ?? o.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e);
}
const zw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function $w(e) {
  return Jv(e) && "offsetHeight" in e;
}
const { schedule: Df } = fw(queueMicrotask, !1),
  kn = { x: !1, y: !1 };
function Uw() {
  return kn.x || kn.y;
}
function dN(e) {
  return e === "x" || e === "y"
    ? kn[e]
      ? null
      : ((kn[e] = !0),
        () => {
          kn[e] = !1;
        })
    : kn.x || kn.y
      ? null
      : ((kn.x = kn.y = !0),
        () => {
          kn.x = kn.y = !1;
        });
}
function Ww(e, t) {
  const s = uN(e),
    o = new AbortController(),
    a = { passive: !0, ...t, signal: o.signal };
  return [s, a, () => o.abort()];
}
function Cg(e) {
  return !(e.pointerType === "touch" || Uw());
}
function fN(e, t, s = {}) {
  const [o, a, c] = Ww(e, s),
    u = (h) => {
      if (!Cg(h)) return;
      const { target: p } = h,
        y = t(p, h);
      if (typeof y != "function" || !p) return;
      const g = (w) => {
        Cg(w) && (y(w), p.removeEventListener("pointerleave", g));
      };
      p.addEventListener("pointerleave", g, a);
    };
  return (
    o.forEach((h) => {
      h.addEventListener("pointerenter", u, a);
    }),
    c
  );
}
const Hw = (e, t) => (t ? (e === t ? !0 : Hw(e, t.parentElement)) : !1),
  Rf = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1),
  hN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Kw(e) {
  return hN.has(e.tagName) || e.isContentEditable === !0;
}
const nl = new WeakSet();
function Sg(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Hu(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const mN = (e, t) => {
  const s = e.currentTarget;
  if (!s) return;
  const o = Sg(() => {
    if (nl.has(s)) return;
    Hu(s, "down");
    const a = Sg(() => {
        Hu(s, "up");
      }),
      c = () => Hu(s, "cancel");
    (s.addEventListener("keyup", a, t), s.addEventListener("blur", c, t));
  });
  (s.addEventListener("keydown", o, t), s.addEventListener("blur", () => s.removeEventListener("keydown", o), t));
};
function Eg(e) {
  return Rf(e) && !Uw();
}
function pN(e, t, s = {}) {
  const [o, a, c] = Ww(e, s),
    u = (h) => {
      const p = h.currentTarget;
      if (!Eg(h)) return;
      nl.add(p);
      const y = t(p, h),
        g = (N, j) => {
          (window.removeEventListener("pointerup", w), window.removeEventListener("pointercancel", x), nl.has(p) && nl.delete(p), Eg(N) && typeof y == "function" && y(N, { success: j }));
        },
        w = (N) => {
          g(N, p === window || p === document || s.useGlobalTarget || Hw(p, N.target));
        },
        x = (N) => {
          g(N, !1);
        };
      (window.addEventListener("pointerup", w, a), window.addEventListener("pointercancel", x, a));
    };
  return (
    o.forEach((h) => {
      ((s.useGlobalTarget ? window : h).addEventListener("pointerdown", u, a), $w(h) && (h.addEventListener("focus", (y) => mN(y, a)), !Kw(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    c
  );
}
function Gw(e) {
  return Jv(e) && "ownerSVGElement" in e;
}
function gN(e) {
  return Gw(e) && e.tagName === "svg";
}
const yN = [...Ow, ct, Rr],
  vN = (e) => yN.find(Vw(e)),
  Ng = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qs = () => ({ x: Ng(), y: Ng() }),
  Pg = () => ({ min: 0, max: 0 }),
  pt = () => ({ x: Pg(), y: Pg() }),
  Dd = { current: null },
  qw = { current: !1 },
  wN = typeof window < "u";
function xN() {
  if (((qw.current = !0), !!wN))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Dd.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Dd.current = !1;
}
const bN = new WeakMap();
function _l(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function gi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Mf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Lf = ["initial", ...Mf];
function Il(e) {
  return _l(e.animate) || Lf.some((t) => gi(e[t]));
}
function Yw(e) {
  return !!(Il(e) || e.variants);
}
function kN(e, t, s) {
  for (const o in t) {
    const a = t[o],
      c = s[o];
    if (jt(a)) e.addValue(o, a);
    else if (jt(c)) e.addValue(o, no(a, { owner: e }));
    else if (c !== a)
      if (e.hasValue(o)) {
        const u = e.getValue(o);
        u.liveStyle === !0 ? u.jump(a) : u.hasAnimated || u.set(a);
      } else {
        const u = e.getStaticValue(o);
        e.addValue(o, no(u !== void 0 ? u : a, { owner: e }));
      }
  }
  for (const o in s) t[o] === void 0 && e.removeValue(o);
  return t;
}
const jg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let xl = {};
function Xw(e) {
  xl = e;
}
function CN() {
  return xl;
}
class SN {
  scrapeMotionValuesFromProps(t, s, o) {
    return {};
  }
  constructor({ parent: t, props: s, presenceContext: o, reducedMotionConfig: a, blockInitialAnimation: c, visualState: u }, h = {}) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ef),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Lt.now();
        this.renderScheduledAt < x && ((this.renderScheduledAt = x), Ge.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: y } = u;
    ((this.latestValues = p), (this.baseTarget = { ...p }), (this.initialValues = s.initial ? { ...p } : {}), (this.renderState = y), (this.parent = t), (this.props = s), (this.presenceContext = o), (this.depth = t ? t.depth + 1 : 0), (this.reducedMotionConfig = a), (this.options = h), (this.blockInitialAnimation = !!c), (this.isControllingVariants = Il(s)), (this.isVariantNode = Yw(s)), this.isVariantNode && (this.variantChildren = new Set()), (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: g, ...w } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const x in w) {
      const N = w[x];
      p[x] !== void 0 && jt(N) && N.set(p[x]);
    }
  }
  mount(t) {
    var s;
    ((this.current = t), bN.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, a) => this.bindToMotionValue(a, o)), this.reducedMotionConfig === "never" ? (this.shouldReduceMotion = !1) : this.reducedMotionConfig === "always" ? (this.shouldReduceMotion = !0) : (qw.current || xN(), (this.shouldReduceMotion = Dd.current)), (s = this.parent) == null || s.addChild(this), this.update(this.props, this.presenceContext));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(), Dr(this.notifyUpdate), Dr(this.render), this.valueSubscriptions.forEach((s) => s()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this));
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const o = this.features[s];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, s) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const o = co.has(t);
    o && this.onBindTransform && this.onBindTransform();
    const a = s.on("change", (u) => {
      ((this.latestValues[t] = u), this.props.onUpdate && Ge.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender());
    });
    let c;
    (typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, t, s)),
      this.valueSubscriptions.set(t, () => {
        (a(), c && c(), s.owner && s.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in xl) {
      const s = xl[t];
      if (!s) continue;
      const { isEnabled: o, Feature: a } = s;
      if ((!this.features[t] && a && o(this.props) && (this.features[t] = new a(this)), this.features[t])) {
        const c = this.features[t];
        c.isMounted ? c.update() : (c.mount(), (c.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, s) {
    this.latestValues[t] = s;
  }
  update(t, s) {
    ((t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = t), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = s));
    for (let o = 0; o < jg.length; o++) {
      const a = jg[o];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const c = "on" + a,
        u = t[c];
      u && (this.propEventSubscriptions[a] = this.on(a, u));
    }
    ((this.prevMotionValues = kN(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const s = this.getClosestVariantNode();
    if (s) return (s.variantChildren && s.variantChildren.add(t), () => s.variantChildren.delete(t));
  }
  addValue(t, s) {
    const o = this.values.get(t);
    s !== o && (o && this.removeValue(t), this.bindToMotionValue(t, s), this.values.set(t, s), (this.latestValues[t] = s.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const s = this.valueSubscriptions.get(t);
    (s && (s(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, s) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let o = this.values.get(t);
    return (o === void 0 && s !== void 0 && ((o = no(s === null ? void 0 : s, { owner: this })), this.addValue(t, o)), o);
  }
  readValue(t, s) {
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options));
    return (o != null && (typeof o == "string" && (Zv(o) || ew(o)) ? (o = parseFloat(o)) : !vN(o) && Rr.test(s) && (o = Bw(t, s)), this.setBaseTarget(t, jt(o) ? o.get() : o)), jt(o) ? o.get() : o);
  }
  setBaseTarget(t, s) {
    this.baseTarget[t] = s;
  }
  getBaseTarget(t) {
    var c;
    const { initial: s } = this.props;
    let o;
    if (typeof s == "string" || typeof s == "object") {
      const u = jf(this.props, s, (c = this.presenceContext) == null ? void 0 : c.custom);
      u && (o = u[t]);
    }
    if (s && o !== void 0) return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !jt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, s) {
    return (this.events[t] || (this.events[t] = new mf()), this.events[t].add(s));
  }
  notify(t, ...s) {
    this.events[t] && this.events[t].notify(...s);
  }
  scheduleRenderMicrotask() {
    Df.render(this.render);
  }
}
class Mr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class Qw extends SN {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = cN));
  }
  sortInstanceNodePosition(t, s) {
    return t.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, s) {
    const o = t.style;
    return o ? o[s] : void 0;
  }
  removeValueFromRenderState(t, { vars: s, style: o }) {
    (delete s[t], delete o[t]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    jt(t) &&
      (this.childSubscription = t.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function Zw({ top: e, left: t, right: s, bottom: o }) {
  return { x: { min: t, max: s }, y: { min: e, max: o } };
}
function EN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NN(e, t) {
  if (!t) return e;
  const s = t({ x: e.left, y: e.top }),
    o = t({ x: e.right, y: e.bottom });
  return { top: s.y, left: s.x, bottom: o.y, right: o.x };
}
function Ku(e) {
  return e === void 0 || e === 1;
}
function Rd({ scale: e, scaleX: t, scaleY: s }) {
  return !Ku(e) || !Ku(t) || !Ku(s);
}
function Qr(e) {
  return Rd(e) || Jw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Jw(e) {
  return Ag(e.x) || Ag(e.y);
}
function Ag(e) {
  return e && e !== "0%";
}
function bl(e, t, s) {
  const o = e - s,
    a = t * o;
  return s + a;
}
function Tg(e, t, s, o, a) {
  return (a !== void 0 && (e = bl(e, a, o)), bl(e, s, o) + t);
}
function Md(e, t = 0, s = 1, o, a) {
  ((e.min = Tg(e.min, t, s, o, a)), (e.max = Tg(e.max, t, s, o, a)));
}
function ex(e, { x: t, y: s }) {
  (Md(e.x, t.translate, t.scale, t.originPoint), Md(e.y, s.translate, s.scale, s.originPoint));
}
const Dg = 0.999999999999,
  Rg = 1.0000000000001;
function PN(e, t, s, o = !1) {
  const a = s.length;
  if (!a) return;
  t.x = t.y = 1;
  let c, u;
  for (let h = 0; h < a; h++) {
    ((c = s[h]), (u = c.projectionDelta));
    const { visualElement: p } = c.options;
    (p && p.props.style && p.props.style.display === "contents") || (o && c.options.layoutScroll && c.scroll && c !== c.root && Xs(e, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), u && ((t.x *= u.x.scale), (t.y *= u.y.scale), ex(e, u)), o && Qr(c.latestValues) && Xs(e, c.latestValues));
  }
  (t.x < Rg && t.x > Dg && (t.x = 1), t.y < Rg && t.y > Dg && (t.y = 1));
}
function Ys(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Mg(e, t, s, o, a = 0.5) {
  const c = Qe(e.min, e.max, a);
  Md(e, t, s, c, o);
}
function Xs(e, t) {
  (Mg(e.x, t.x, t.scaleX, t.scale, t.originX), Mg(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function tx(e, t) {
  return Zw(NN(e.getBoundingClientRect(), t));
}
function jN(e, t, s) {
  const o = tx(e, s),
    { scroll: a } = t;
  return (a && (Ys(o.x, a.offset.x), Ys(o.y, a.offset.y)), o);
}
const AN = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  TN = lo.length;
function DN(e, t, s) {
  let o = "",
    a = !0;
  for (let c = 0; c < TN; c++) {
    const u = lo[c],
      h = e[u];
    if (h === void 0) continue;
    let p = !0;
    if ((typeof h == "number" ? (p = h === (u.startsWith("scale") ? 1 : 0)) : (p = parseFloat(h) === 0), !p || s)) {
      const y = zw(h, Tf[u]);
      if (!p) {
        a = !1;
        const g = AN[u] || u;
        o += `${g}(${y}) `;
      }
      s && (t[u] = y);
    }
  }
  return ((o = o.trim()), s ? (o = s(t, a ? "" : o)) : a && (o = "none"), o);
}
function _f(e, t, s) {
  const { style: o, vars: a, transformOrigin: c } = e;
  let u = !1,
    h = !1;
  for (const p in t) {
    const y = t[p];
    if (co.has(p)) {
      u = !0;
      continue;
    } else if (mw(p)) {
      a[p] = y;
      continue;
    } else {
      const g = zw(y, Tf[p]);
      p.startsWith("origin") ? ((h = !0), (c[p] = g)) : (o[p] = g);
    }
  }
  if ((t.transform || (u || s ? (o.transform = DN(t, e.transform, s)) : o.transform && (o.transform = "none")), h)) {
    const { originX: p = "50%", originY: y = "50%", originZ: g = 0 } = c;
    o.transformOrigin = `${p} ${y} ${g}`;
  }
}
function nx(e, { style: t, vars: s }, o, a) {
  const c = e.style;
  let u;
  for (u in t) c[u] = t[u];
  a == null || a.applyProjectionStyles(c, o);
  for (u in s) c.setProperty(u, s[u]);
}
function Lg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Jo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (re.test(e)) e = parseFloat(e);
        else return e;
      const s = Lg(e, t.target.x),
        o = Lg(e, t.target.y);
      return `${s}% ${o}%`;
    },
  },
  RN = {
    correct: (e, { treeScale: t, projectionDelta: s }) => {
      const o = e,
        a = Rr.parse(e);
      if (a.length > 5) return o;
      const c = Rr.createTransformer(e),
        u = typeof a[0] != "number" ? 1 : 0,
        h = s.x.scale * t.x,
        p = s.y.scale * t.y;
      ((a[0 + u] /= h), (a[1 + u] /= p));
      const y = Qe(h, p, 0.5);
      return (typeof a[2 + u] == "number" && (a[2 + u] /= y), typeof a[3 + u] == "number" && (a[3 + u] /= y), c(a));
    },
  },
  Ld = { borderRadius: { ...Jo, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: Jo, borderTopRightRadius: Jo, borderBottomLeftRadius: Jo, borderBottomRightRadius: Jo, boxShadow: RN };
function rx(e, { layout: t, layoutId: s }) {
  return co.has(e) || e.startsWith("origin") || ((t || s !== void 0) && (!!Ld[e] || e === "opacity"));
}
function If(e, t, s) {
  var u;
  const o = e.style,
    a = t == null ? void 0 : t.style,
    c = {};
  if (!o) return c;
  for (const h in o) (jt(o[h]) || (a && jt(a[h])) || rx(h, e) || ((u = s == null ? void 0 : s.getValue(h)) == null ? void 0 : u.liveStyle) !== void 0) && (c[h] = o[h]);
  return c;
}
function MN(e) {
  return window.getComputedStyle(e);
}
class LN extends Qw {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = nx));
  }
  readValueFromInstance(t, s) {
    var o;
    if (co.has(s)) return (o = this.projection) != null && o.isProjecting ? bd(s) : uE(t, s);
    {
      const a = MN(t),
        c = (mw(s) ? a.getPropertyValue(s) : a[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: s }) {
    return tx(t, s);
  }
  build(t, s, o) {
    _f(t, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, s, o) {
    return If(t, s, o);
  }
}
const _N = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  IN = { offset: "strokeDashoffset", array: "strokeDasharray" };
function VN(e, t, s = 1, o = 0, a = !0) {
  e.pathLength = 1;
  const c = a ? _N : IN;
  e[c.offset] = re.transform(-o);
  const u = re.transform(t),
    h = re.transform(s);
  e[c.array] = `${u} ${h}`;
}
const ON = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function sx(e, { attrX: t, attrY: s, attrScale: o, pathLength: a, pathSpacing: c = 1, pathOffset: u = 0, ...h }, p, y, g) {
  if ((_f(e, h, y), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: w, style: x } = e;
  (w.transform && ((x.transform = w.transform), delete w.transform), (x.transform || w.transformOrigin) && ((x.transformOrigin = w.transformOrigin ?? "50% 50%"), delete w.transformOrigin), x.transform && ((x.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"), delete w.transformBox));
  for (const N of ON) w[N] !== void 0 && ((x[N] = w[N]), delete w[N]);
  (t !== void 0 && (w.x = t), s !== void 0 && (w.y = s), o !== void 0 && (w.scale = o), a !== void 0 && VN(w, a, c, u, !1));
}
const ox = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
  ix = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function FN(e, t, s, o) {
  nx(e, t, void 0, o);
  for (const a in t.attrs) e.setAttribute(ox.has(a) ? a : Af(a), t.attrs[a]);
}
function ax(e, t, s) {
  const o = If(e, t, s);
  for (const a in e)
    if (jt(e[a]) || jt(t[a])) {
      const c = lo.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      o[c] = e[a];
    }
  return o;
}
class BN extends Qw {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = pt));
  }
  getBaseTargetFromProps(t, s) {
    return t[s];
  }
  readValueFromInstance(t, s) {
    if (co.has(s)) {
      const o = Fw(s);
      return (o && o.default) || 0;
    }
    return ((s = ox.has(s) ? s : Af(s)), t.getAttribute(s));
  }
  scrapeMotionValuesFromProps(t, s, o) {
    return ax(t, s, o);
  }
  build(t, s, o) {
    sx(t, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(t, s, o, a) {
    FN(t, s, o, a);
  }
  mount(t) {
    ((this.isSVGTag = ix(t.tagName)), super.mount(t));
  }
}
const zN = Lf.length;
function lx(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const s = e.parent ? lx(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (s.initial = e.props.initial), s);
  }
  const t = {};
  for (let s = 0; s < zN; s++) {
    const o = Lf[s],
      a = e.props[o];
    (gi(a) || a === !1) && (t[o] = a);
  }
  return t;
}
function cx(e, t) {
  if (!Array.isArray(t)) return !1;
  const s = t.length;
  if (s !== e.length) return !1;
  for (let o = 0; o < s; o++) if (t[o] !== e[o]) return !1;
  return !0;
}
const $N = [...Mf].reverse(),
  UN = Mf.length;
function WN(e) {
  return (t) => Promise.all(t.map(({ animation: s, options: o }) => JE(e, s, o)));
}
function HN(e) {
  let t = WN(e),
    s = _g(),
    o = !0;
  const a = (p) => (y, g) => {
    var x;
    const w = Zs(e, g, p === "exit" ? ((x = e.presenceContext) == null ? void 0 : x.custom) : void 0);
    if (w) {
      const { transition: N, transitionEnd: j, ...C } = w;
      y = { ...y, ...C, ...j };
    }
    return y;
  };
  function c(p) {
    t = p(e);
  }
  function u(p) {
    const { props: y } = e,
      g = lx(e.parent) || {},
      w = [],
      x = new Set();
    let N = {},
      j = 1 / 0;
    for (let D = 0; D < UN; D++) {
      const M = $N[D],
        T = s[M],
        O = y[M] !== void 0 ? y[M] : g[M],
        W = gi(O),
        $ = M === p ? T.isActive : null;
      $ === !1 && (j = D);
      let q = O === g[M] && O !== y[M] && W;
      if ((q && o && e.manuallyAnimateOnMount && (q = !1), (T.protectedKeys = { ...N }), (!T.isActive && $ === null) || (!O && !T.prevProp) || _l(O) || typeof O == "boolean")) continue;
      const G = KN(T.prevProp, O);
      let B = G || (M === p && T.isActive && !q && W) || (D > j && W),
        se = !1;
      const Ce = Array.isArray(O) ? O : [O];
      let Te = Ce.reduce(a(M), {});
      $ === !1 && (Te = {});
      const { prevResolvedValues: ge = {} } = T,
        ye = { ...ge, ...Te },
        Se = (he) => {
          ((B = !0), x.has(he) && ((se = !0), x.delete(he)), (T.needsAnimating[he] = !0));
          const V = e.getValue(he);
          V && (V.liveStyle = !1);
        };
      for (const he in ye) {
        const V = Te[he],
          oe = ge[he];
        if (N.hasOwnProperty(he)) continue;
        let Z = !1;
        (Pd(V) && Pd(oe) ? (Z = !cx(V, oe)) : (Z = V !== oe), Z ? (V != null ? Se(he) : x.add(he)) : V !== void 0 && x.has(he) ? Se(he) : (T.protectedKeys[he] = !0));
      }
      ((T.prevProp = O), (T.prevResolvedValues = Te), T.isActive && (N = { ...N, ...Te }), o && e.blockInitialAnimation && (B = !1));
      const De = q && G;
      B &&
        (!De || se) &&
        w.push(
          ...Ce.map((he) => {
            const V = { type: M };
            if (typeof he == "string" && o && !De && e.manuallyAnimateOnMount && e.parent) {
              const { parent: oe } = e,
                Z = Zs(oe, he);
              if (oe.enteringChildren && Z) {
                const { delayChildren: A } = Z.transition || {};
                V.delay = Rw(oe.enteringChildren, e, A);
              }
            }
            return { animation: he, options: V };
          }),
        );
    }
    if (x.size) {
      const D = {};
      if (typeof y.initial != "boolean") {
        const M = Zs(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        M && M.transition && (D.transition = M.transition);
      }
      (x.forEach((M) => {
        const T = e.getBaseTarget(M),
          O = e.getValue(M);
        (O && (O.liveStyle = !0), (D[M] = T ?? null));
      }),
        w.push({ animation: D }));
    }
    let C = !!w.length;
    return (o && (y.initial === !1 || y.initial === y.animate) && !e.manuallyAnimateOnMount && (C = !1), (o = !1), C ? t(w) : Promise.resolve());
  }
  function h(p, y) {
    var w;
    if (s[p].isActive === y) return Promise.resolve();
    ((w = e.variantChildren) == null ||
      w.forEach((x) => {
        var N;
        return (N = x.animationState) == null ? void 0 : N.setActive(p, y);
      }),
      (s[p].isActive = y));
    const g = u(p);
    for (const x in s) s[x].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: u,
    setActive: h,
    setAnimateFunction: c,
    getState: () => s,
    reset: () => {
      s = _g();
    },
  };
}
function KN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !cx(t, e) : !1;
}
function Yr(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function _g() {
  return { animate: Yr(!0), whileInView: Yr(), whileHover: Yr(), whileTap: Yr(), whileDrag: Yr(), whileFocus: Yr(), exit: Yr() };
}
const ux = 1e-4,
  GN = 1 - ux,
  qN = 1 + ux,
  dx = 0.01,
  YN = 0 - dx,
  XN = 0 + dx;
function _t(e) {
  return e.max - e.min;
}
function QN(e, t, s) {
  return Math.abs(e - t) <= s;
}
function Ig(e, t, s, o = 0.5) {
  ((e.origin = o), (e.originPoint = Qe(t.min, t.max, e.origin)), (e.scale = _t(s) / _t(t)), (e.translate = Qe(s.min, s.max, e.origin) - e.originPoint), ((e.scale >= GN && e.scale <= qN) || isNaN(e.scale)) && (e.scale = 1), ((e.translate >= YN && e.translate <= XN) || isNaN(e.translate)) && (e.translate = 0));
}
function ai(e, t, s, o) {
  (Ig(e.x, t.x, s.x, o ? o.originX : void 0), Ig(e.y, t.y, s.y, o ? o.originY : void 0));
}
function Vg(e, t, s) {
  ((e.min = s.min + t.min), (e.max = e.min + _t(t)));
}
function ZN(e, t, s) {
  (Vg(e.x, t.x, s.x), Vg(e.y, t.y, s.y));
}
function Og(e, t, s) {
  ((e.min = t.min - s.min), (e.max = e.min + _t(t)));
}
function kl(e, t, s) {
  (Og(e.x, t.x, s.x), Og(e.y, t.y, s.y));
}
function Fg(e, t, s, o, a) {
  return ((e -= t), (e = bl(e, 1 / s, o)), a !== void 0 && (e = bl(e, 1 / a, o)), e);
}
function JN(e, t = 0, s = 1, o = 0.5, a, c = e, u = e) {
  if ((On.test(t) && ((t = parseFloat(t)), (t = Qe(u.min, u.max, t / 100) - u.min)), typeof t != "number")) return;
  let h = Qe(c.min, c.max, o);
  (e === c && (h -= t), (e.min = Fg(e.min, t, s, h, a)), (e.max = Fg(e.max, t, s, h, a)));
}
function Bg(e, t, [s, o, a], c, u) {
  JN(e, t[s], t[o], t[a], t.scale, c, u);
}
const eP = ["x", "scaleX", "originX"],
  tP = ["y", "scaleY", "originY"];
function zg(e, t, s, o) {
  (Bg(e.x, t, eP, s ? s.x : void 0, o ? o.x : void 0), Bg(e.y, t, tP, s ? s.y : void 0, o ? o.y : void 0));
}
function $g(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function bn(e, t) {
  ($g(e.x, t.x), $g(e.y, t.y));
}
function Ug(e, t) {
  ((e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin));
}
function Wg(e) {
  return e.translate === 0 && e.scale === 1;
}
function fx(e) {
  return Wg(e.x) && Wg(e.y);
}
function Hg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function nP(e, t) {
  return Hg(e.x, t.x) && Hg(e.y, t.y);
}
function Kg(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function hx(e, t) {
  return Kg(e.x, t.x) && Kg(e.y, t.y);
}
function Gg(e) {
  return _t(e.x) / _t(e.y);
}
function qg(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function un(e) {
  return [e("x"), e("y")];
}
function rP(e, t, s) {
  let o = "";
  const a = e.x.translate / t.x,
    c = e.y.translate / t.y,
    u = (s == null ? void 0 : s.z) || 0;
  if (((a || c || u) && (o = `translate3d(${a}px, ${c}px, ${u}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), s)) {
    const { transformPerspective: y, rotate: g, rotateX: w, rotateY: x, skewX: N, skewY: j } = s;
    (y && (o = `perspective(${y}px) ${o}`), g && (o += `rotate(${g}deg) `), w && (o += `rotateX(${w}deg) `), x && (o += `rotateY(${x}deg) `), N && (o += `skewX(${N}deg) `), j && (o += `skewY(${j}deg) `));
  }
  const h = e.x.scale * t.x,
    p = e.y.scale * t.y;
  return ((h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none");
}
const mx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  sP = mx.length,
  Yg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xg = (e) => typeof e == "number" || re.test(e);
function oP(e, t, s, o, a, c) {
  a ? ((e.opacity = Qe(0, s.opacity ?? 1, iP(o))), (e.opacityExit = Qe(t.opacity ?? 1, 0, aP(o)))) : c && (e.opacity = Qe(t.opacity ?? 1, s.opacity ?? 1, o));
  for (let u = 0; u < sP; u++) {
    const h = `border${mx[u]}Radius`;
    let p = Qg(t, h),
      y = Qg(s, h);
    if (p === void 0 && y === void 0) continue;
    (p || (p = 0), y || (y = 0), p === 0 || y === 0 || Xg(p) === Xg(y) ? ((e[h] = Math.max(Qe(Yg(p), Yg(y), o), 0)), (On.test(y) || On.test(p)) && (e[h] += "%")) : (e[h] = y));
  }
  (t.rotate || s.rotate) && (e.rotate = Qe(t.rotate || 0, s.rotate || 0, o));
}
function Qg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const iP = px(0, 0.5, lw),
  aP = px(0.5, 0.95, fn);
function px(e, t, s) {
  return (o) => (o < e ? 0 : o > t ? 1 : s(hi(e, t, o)));
}
function lP(e, t) {
  const s = Lt.now(),
    o = ({ timestamp: a }) => {
      const c = a - s;
      c >= t && (Dr(o), e(c - t));
    };
  return (Ge.setup(o, !0), () => Dr(o));
}
function yi(e, t, s, o = { passive: !0 }) {
  return (e.addEventListener(t, s, o), () => e.removeEventListener(t, s));
}
function rl(e) {
  return jt(e) ? e.get() : e;
}
function cP(e, t, s) {
  const o = jt(e) ? e : no(e);
  return (o.start(Pf("", o, t, s)), o.animation);
}
const uP = (e, t) => e.depth - t.depth;
class dP {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (uf(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (df(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(uP), (this.isDirty = !1), this.children.forEach(t));
  }
}
class fP {
  constructor() {
    this.members = [];
  }
  add(t) {
    (uf(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if ((df(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(t) {
    const s = this.members.findIndex((a) => t === a);
    if (s === 0) return !1;
    let o;
    for (let a = s; a >= 0; a--) {
      const c = this.members[a];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(t, s) {
    const o = this.lead;
    if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
      (o.instance && o.scheduleRender(), t.scheduleRender(), (t.resumeFrom = o), s && (t.resumeFrom.preserveOpacity = !0), o.snapshot && ((t.snapshot = o.snapshot), (t.snapshot.latestValues = o.animationValues || o.latestValues)), t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: a } = t.options;
      a === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: s, resumingFrom: o } = t;
      (s.onExitComplete && s.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const sl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Gu = ["", "X", "Y", "Z"],
  hP = 1e3;
let mP = 0;
function qu(e, t, s, o) {
  const { latestValues: a } = t;
  a[e] && ((s[e] = a[e]), t.setStaticValue(e, 0), o && (o[e] = 0));
}
function gx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const s = _w(t);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: a, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Ge, !(a || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && gx(o);
}
function yx({ attachResizeListener: e, defaultParent: t, measureScroll: s, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(u = {}, h = t == null ? void 0 : t()) {
      ((this.id = mP++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1), this.nodes.forEach(yP), this.nodes.forEach(bP), this.nodes.forEach(kP), this.nodes.forEach(vP));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = u),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dP());
    }
    addEventListener(u, h) {
      return (this.eventHandlers.has(u) || this.eventHandlers.set(u, new mf()), this.eventHandlers.get(u).add(h));
    }
    notifyListeners(u, ...h) {
      const p = this.eventHandlers.get(u);
      p && p.notify(...h);
    }
    hasListeners(u) {
      return this.eventHandlers.has(u);
    }
    mount(u) {
      if (this.instance) return;
      ((this.isSVG = Gw(u) && !gN(u)), (this.instance = u));
      const { layoutId: h, layout: p, visualElement: y } = this.options;
      if ((y && !y.current && y.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), e)) {
        let g,
          w = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (Ge.read(() => {
          w = window.innerWidth;
        }),
          e(u, () => {
            const N = window.innerWidth;
            N !== w && ((w = N), (this.root.updateBlockedByResize = !0), g && g(), (g = lP(x, 250)), sl.hasAnimatedSinceResize && ((sl.hasAnimatedSinceResize = !1), this.nodes.forEach(ey)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          y &&
          (h || p) &&
          this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: w, hasRelativeLayoutChanged: x, layout: N }) => {
            if (this.isTreeAnimationBlocked()) {
              ((this.target = void 0), (this.relativeTarget = void 0));
              return;
            }
            const j = this.options.transition || y.getDefaultTransition() || PP,
              { onLayoutAnimationStart: C, onLayoutAnimationComplete: D } = y.getProps(),
              M = !this.targetLayout || !hx(this.targetLayout, N),
              T = !w && x;
            if (this.options.layoutRoot || this.resumeFrom || T || (w && (M || !this.currentAnimation))) {
              this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
              const O = { ...Nf(j, "layout"), onPlay: C, onComplete: D };
              ((y.shouldReduceMotion || this.options.layoutRoot) && ((O.delay = 0), (O.type = !1)), this.startAnimation(O), this.setAnimationOrigin(g, T));
            } else (w || ey(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
            this.targetLayout = N;
          }));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const u = this.getStack();
      (u && u.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), this.eventHandlers.clear(), Dr(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(CP), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: u } = this.options;
      return u && u.getProps().transformTemplate;
    }
    willUpdate(u = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if ((window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const w = this.path[g];
        ((w.shouldResetTransform = !0), w.updateScroll("snapshot"), w.options.layoutRoot && w.willUpdate(!1));
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const y = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0), this.updateSnapshot(), u && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zg));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Jg);
        return;
      }
      ((this.animationCommitId = this.animationId), this.isUpdating ? ((this.isUpdating = !1), this.nodes.forEach(xP), this.nodes.forEach(pP), this.nodes.forEach(gP)) : this.nodes.forEach(Jg), this.clearAllSnapshots());
      const h = Lt.now();
      ((kt.delta = zn(0, 1e3 / 60, h - kt.timestamp)), (kt.timestamp = h), (kt.isProcessing = !0), Fu.update.process(kt), Fu.preRender.process(kt), Fu.render.process(kt), (kt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Df.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(wP), this.sharedNodes.forEach(SP));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), Ge.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ge.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || ((this.snapshot = this.measure()), this.snapshot && !_t(this.snapshot.measuredBox.x) && !_t(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const u = this.layout;
      ((this.layout = this.measure(!1)), this.layoutVersion++, (this.layoutCorrected = pt()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0);
    }
    updateScroll(u = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if ((this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (h = !1), h && this.instance)) {
        const p = o(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: u, isRoot: p, offset: s(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : p };
      }
    }
    resetTransform() {
      if (!a) return;
      const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !fx(this.projectionDelta),
        p = this.getTransformTemplate(),
        y = p ? p(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      u && this.instance && (h || Qr(this.latestValues) || g) && (a(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(u = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (u && (p = this.removeTransform(p)), jP(p), { animationId: this.root.animationId, measuredBox: h, layoutBox: p, latestValues: {}, source: this.id });
    }
    measurePageBox() {
      var y;
      const { visualElement: u } = this.options;
      if (!u) return pt();
      const h = u.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(AP))) {
        const { scroll: g } = this.root;
        g && (Ys(h.x, g.offset.x), Ys(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(u) {
      var p;
      const h = pt();
      if ((bn(h, u), (p = this.scroll) != null && p.wasRoot)) return h;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: w, options: x } = g;
        g !== this.root && w && x.layoutScroll && (w.wasRoot && bn(h, u), Ys(h.x, w.offset.x), Ys(h.y, w.offset.y));
      }
      return h;
    }
    applyTransform(u, h = !1) {
      const p = pt();
      bn(p, u);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        (!h && g.options.layoutScroll && g.scroll && g !== g.root && Xs(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }), Qr(g.latestValues) && Xs(p, g.latestValues));
      }
      return (Qr(this.latestValues) && Xs(p, this.latestValues), p);
    }
    removeTransform(u) {
      const h = pt();
      bn(h, u);
      for (let p = 0; p < this.path.length; p++) {
        const y = this.path[p];
        if (!y.instance || !Qr(y.latestValues)) continue;
        Rd(y.latestValues) && y.updateSnapshot();
        const g = pt(),
          w = y.measurePageBox();
        (bn(g, w), zg(h, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, g));
      }
      return (Qr(this.latestValues) && zg(h, this.latestValues), h);
    }
    setTargetDelta(u) {
      ((this.targetDelta = u), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(u) {
      this.options = { ...this.options, ...u, crossfade: u.crossfade !== void 0 ? u.crossfade : !0 };
    }
    clearMeasurements() {
      ((this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== kt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(u = !1) {
      var N;
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (!(u || (p && this.isSharedProjectionDirty) || this.isProjectionDirty || ((N = this.parent) != null && N.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: g, layoutId: w } = this.options;
      if (!this.layout || !(g || w)) return;
      this.resolvedRelativeTargetAt = kt.timestamp;
      const x = this.getClosestProjectingParent();
      (x && this.linkedParentVersion !== x.layoutVersion && !x.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (x && x.layout ? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || ((this.target = pt()), (this.targetWithTransforms = pt())), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ZN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : bn(this.target, this.layout.layoutBox), ex(this.target, this.targetDelta)) : bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && ((this.attemptToResolveRelativeTarget = !1), x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? this.createRelativeTarget(x, this.target, x.target) : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Rd(this.parent.latestValues) || Jw(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(u, h, p) {
      ((this.relativeParent = u), (this.linkedParentVersion = u.layoutVersion), this.forceRelativeParentToResolveTarget(), (this.relativeTarget = pt()), (this.relativeTargetOrigin = pt()), kl(this.relativeTargetOrigin, h, p), bn(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var j;
      const u = this.getLead(),
        h = !!this.resumingFrom || this !== u;
      let p = !0;
      if (((this.isProjectionDirty || ((j = this.parent) != null && j.isProjectionDirty)) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === kt.timestamp && (p = !1), p)) return;
      const { layout: y, layoutId: g } = this.options;
      if (((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || g))) return;
      bn(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        x = this.treeScale.y;
      (PN(this.layoutCorrected, this.treeScale, this.path, h), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && ((u.target = u.layout.layoutBox), (u.targetWithTransforms = pt())));
      const { target: N } = u;
      if (!N) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ug(this.prevProjectionDelta.x, this.projectionDelta.x), Ug(this.prevProjectionDelta.y, this.projectionDelta.y)), ai(this.projectionDelta, this.layoutCorrected, N, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== x || !qg(this.projectionDelta.x, this.prevProjectionDelta.x) || !qg(this.projectionDelta.y, this.prevProjectionDelta.y)) && ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", N)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(u = !0) {
      var h;
      if (((h = this.options.visualElement) == null || h.scheduleRender(), u)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = qs()), (this.projectionDelta = qs()), (this.projectionDeltaWithTransform = qs()));
    }
    setAnimationOrigin(u, h = !1) {
      const p = this.snapshot,
        y = p ? p.latestValues : {},
        g = { ...this.latestValues },
        w = qs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !h));
      const x = pt(),
        N = p ? p.source : void 0,
        j = this.layout ? this.layout.source : void 0,
        C = N !== j,
        D = this.getStack(),
        M = !D || D.members.length <= 1,
        T = !!(C && !M && this.options.crossfade === !0 && !this.path.some(NP));
      this.animationProgress = 0;
      let O;
      ((this.mixTargetDelta = (W) => {
        const $ = W / 1e3;
        (ty(w.x, u.x, $), ty(w.y, u.y, $), this.setTargetDelta(w), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (kl(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), EP(this.relativeTarget, this.relativeTargetOrigin, x, $), O && nP(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = pt()), bn(O, this.relativeTarget)), C && ((this.animationValues = g), oP(g, y, this.latestValues, $, T, M)), this.root.scheduleUpdateProjection(), this.scheduleRender(), (this.animationProgress = $));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(u) {
      var h, p, y;
      (this.notifyListeners("animationStart"),
        (h = this.currentAnimation) == null || h.stop(),
        (y = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (Dr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ge.update(() => {
          ((sl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = no(0)),
            (this.currentAnimation = cP(this.motionValue, [0, 1e3], {
              ...u,
              velocity: 0,
              isSync: !0,
              onUpdate: (g) => {
                (this.mixTargetDelta(g), u.onUpdate && u.onUpdate(g));
              },
              onStop: () => {},
              onComplete: () => {
                (u.onComplete && u.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
      const u = this.getStack();
      (u && u.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hP), this.currentAnimation.stop()), this.completeAnimation());
    }
    applyTransformsToTarget() {
      const u = this.getLead();
      let { targetWithTransforms: h, target: p, layout: y, latestValues: g } = u;
      if (!(!h || !p || !y)) {
        if (this !== u && this.layout && y && vx(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
          p = this.target || pt();
          const w = _t(this.layout.layoutBox.x);
          ((p.x.min = u.target.x.min), (p.x.max = p.x.min + w));
          const x = _t(this.layout.layoutBox.y);
          ((p.y.min = u.target.y.min), (p.y.max = p.y.min + x));
        }
        (bn(h, p), Xs(h, g), ai(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(u, h) {
      (this.sharedNodes.has(u) || this.sharedNodes.set(u, new fP()), this.sharedNodes.get(u).add(h));
      const y = h.options.initialPromotionConfig;
      h.promote({ transition: y ? y.transition : void 0, preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(h) : void 0 });
    }
    isLead() {
      const u = this.getStack();
      return u ? u.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: u } = this.options;
      return u ? ((h = this.getStack()) == null ? void 0 : h.lead) || this : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: u } = this.options;
      return u ? ((h = this.getStack()) == null ? void 0 : h.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: u } = this.options;
      if (u) return this.root.sharedNodes.get(u);
    }
    promote({ needsReset: u, transition: h, preserveFollowOpacity: p } = {}) {
      const y = this.getStack();
      (y && y.promote(this, p), u && ((this.projectionDelta = void 0), (this.needsReset = !0)), h && this.setOptions({ transition: h }));
    }
    relegate() {
      const u = this.getStack();
      return u ? u.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: u } = this.options;
      if (!u) return;
      let h = !1;
      const { latestValues: p } = u;
      if (((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h)) return;
      const y = {};
      p.z && qu("z", u, y, this.animationValues);
      for (let g = 0; g < Gu.length; g++) (qu(`rotate${Gu[g]}`, u, y, this.animationValues), qu(`skew${Gu[g]}`, u, y, this.animationValues));
      u.render();
      for (const g in y) (u.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]));
      u.scheduleRender();
    }
    applyProjectionStyles(u, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        u.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1), (u.visibility = ""), (u.opacity = ""), (u.pointerEvents = rl(h == null ? void 0 : h.pointerEvents) || ""), (u.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId && ((u.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1), (u.pointerEvents = rl(h == null ? void 0 : h.pointerEvents) || "")), this.hasProjected && !Qr(this.latestValues) && ((u.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      u.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let w = rP(this.projectionDeltaWithTransform, this.treeScale, g);
      (p && (w = p(g, w)), (u.transform = w));
      const { x, y: N } = this.projectionDelta;
      ((u.transformOrigin = `${x.origin * 100}% ${N.origin * 100}% 0`), y.animationValues ? (u.opacity = y === this ? (g.opacity ?? this.latestValues.opacity ?? 1) : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit) : (u.opacity = y === this ? (g.opacity !== void 0 ? g.opacity : "") : g.opacityExit !== void 0 ? g.opacityExit : 0));
      for (const j in Ld) {
        if (g[j] === void 0) continue;
        const { correct: C, applyTo: D, isCSSVariable: M } = Ld[j],
          T = w === "none" ? g[j] : C(g[j], y);
        if (D) {
          const O = D.length;
          for (let W = 0; W < O; W++) u[D[W]] = T;
        } else M ? (this.options.visualElement.renderState.vars[j] = T) : (u[j] = T);
      }
      this.options.layoutId && (u.pointerEvents = y === this ? rl(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((u) => {
        var h;
        return (h = u.currentAnimation) == null ? void 0 : h.stop();
      }),
        this.root.nodes.forEach(Zg),
        this.root.sharedNodes.clear());
    }
  };
}
function pP(e) {
  e.updateLayout();
}
function gP(e) {
  var s;
  const t = ((s = e.resumeFrom) == null ? void 0 : s.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = e.layout,
      { animationType: c } = e.options,
      u = t.source !== e.layout.source;
    c === "size"
      ? un((w) => {
          const x = u ? t.measuredBox[w] : t.layoutBox[w],
            N = _t(x);
          ((x.min = o[w].min), (x.max = x.min + N));
        })
      : vx(c, t.layoutBox, o) &&
        un((w) => {
          const x = u ? t.measuredBox[w] : t.layoutBox[w],
            N = _t(o[w]);
          ((x.max = x.min + N), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[w].max = e.relativeTarget[w].min + N)));
        });
    const h = qs();
    ai(h, o, t.layoutBox);
    const p = qs();
    u ? ai(p, e.applyTransform(a, !0), t.measuredBox) : ai(p, o, t.layoutBox);
    const y = !fx(h);
    let g = !1;
    if (!e.resumeFrom) {
      const w = e.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: x, layout: N } = w;
        if (x && N) {
          const j = pt();
          kl(j, t.layoutBox, x.layoutBox);
          const C = pt();
          (kl(C, o, N.layoutBox), hx(j, C) || (g = !0), w.options.layoutRoot && ((e.relativeTarget = C), (e.relativeTargetOrigin = j), (e.relativeParent = w)));
        }
      }
    }
    e.notifyListeners("didUpdate", { layout: o, snapshot: t, delta: p, layoutDelta: h, hasLayoutChanged: y, hasRelativeLayoutChanged: g });
  } else if (e.isLead()) {
    const { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function yP(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wP(e) {
  e.clearSnapshot();
}
function Zg(e) {
  e.clearMeasurements();
}
function Jg(e) {
  e.isLayoutDirty = !1;
}
function xP(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform());
}
function ey(e) {
  (e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0));
}
function bP(e) {
  e.resolveTargetDelta();
}
function kP(e) {
  e.calcProjection();
}
function CP(e) {
  e.resetSkewAndRotation();
}
function SP(e) {
  e.removeLeadSnapshot();
}
function ty(e, t, s) {
  ((e.translate = Qe(t.translate, 0, s)), (e.scale = Qe(t.scale, 1, s)), (e.origin = t.origin), (e.originPoint = t.originPoint));
}
function ny(e, t, s, o) {
  ((e.min = Qe(t.min, s.min, o)), (e.max = Qe(t.max, s.max, o)));
}
function EP(e, t, s, o) {
  (ny(e.x, t.x, s.x, o), ny(e.y, t.y, s.y, o));
}
function NP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const PP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ry = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  sy = ry("applewebkit/") && !ry("chrome/") ? Math.round : fn;
function oy(e) {
  ((e.min = sy(e.min)), (e.max = sy(e.max)));
}
function jP(e) {
  (oy(e.x), oy(e.y));
}
function vx(e, t, s) {
  return e === "position" || (e === "preserve-aspect" && !QN(Gg(t), Gg(s), 0.2));
}
function AP(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const TP = yx({ attachResizeListener: (e, t) => yi(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }),
  Yu = { current: void 0 },
  wx = yx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Yu.current) {
        const e = new TP({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Yu.current = e));
      }
      return Yu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Vf = k.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
function iy(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function DP(...e) {
  return (t) => {
    let s = !1;
    const o = e.map((a) => {
      const c = iy(a, t);
      return (!s && typeof c == "function" && (s = !0), c);
    });
    if (s)
      return () => {
        for (let a = 0; a < o.length; a++) {
          const c = o[a];
          typeof c == "function" ? c() : iy(e[a], null);
        }
      };
  };
}
function RP(...e) {
  return k.useCallback(DP(...e), e);
}
class MP extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const s = this.props.childRef.current;
    if (s && t.isPresent && !this.props.isPresent) {
      const o = s.offsetParent,
        a = ($w(o) && o.offsetWidth) || 0,
        c = this.props.sizeRef.current;
      ((c.height = s.offsetHeight || 0), (c.width = s.offsetWidth || 0), (c.top = s.offsetTop), (c.left = s.offsetLeft), (c.right = a - c.width - c.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function LP({ children: e, isPresent: t, anchorX: s, root: o }) {
  var g;
  const a = k.useId(),
    c = k.useRef(null),
    u = k.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: h } = k.useContext(Vf),
    p = ((g = e.props) == null ? void 0 : g.ref) ?? (e == null ? void 0 : e.ref),
    y = RP(c, p);
  return (
    k.useInsertionEffect(() => {
      const { width: w, height: x, top: N, left: j, right: C } = u.current;
      if (t || !c.current || !w || !x) return;
      const D = s === "left" ? `left: ${j}` : `right: ${C}`;
      c.current.dataset.motionPopId = a;
      const M = document.createElement("style");
      h && (M.nonce = h);
      const T = o ?? document.head;
      return (
        T.appendChild(M),
        M.sheet &&
          M.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${x}px !important;
            ${D}px !important;
            top: ${N}px !important;
          }
        `),
        () => {
          T.contains(M) && T.removeChild(M);
        }
      );
    }, [t]),
    f.jsx(MP, { isPresent: t, childRef: c, sizeRef: u, children: k.cloneElement(e, { ref: y }) })
  );
}
const _P = ({ children: e, initial: t, isPresent: s, onExitComplete: o, custom: a, presenceAffectsLayout: c, mode: u, anchorX: h, root: p }) => {
  const y = cf(IP),
    g = k.useId();
  let w = !0,
    x = k.useMemo(
      () => (
        (w = !1),
        {
          id: g,
          initial: t,
          isPresent: s,
          custom: a,
          onExitComplete: (N) => {
            y.set(N, !0);
            for (const j of y.values()) if (!j) return;
            o && o();
          },
          register: (N) => (y.set(N, !1), () => y.delete(N)),
        }
      ),
      [s, y, o],
    );
  return (
    c && w && (x = { ...x }),
    k.useMemo(() => {
      y.forEach((N, j) => y.set(j, !1));
    }, [s]),
    k.useEffect(() => {
      !s && !y.size && o && o();
    }, [s]),
    u === "popLayout" && (e = f.jsx(LP, { isPresent: s, anchorX: h, root: p, children: e })),
    f.jsx(Ll.Provider, { value: x, children: e })
  );
};
function IP() {
  return new Map();
}
function xx(e = !0) {
  const t = k.useContext(Ll);
  if (t === null) return [!0, null];
  const { isPresent: s, onExitComplete: o, register: a } = t,
    c = k.useId();
  k.useEffect(() => {
    if (e) return a(c);
  }, [e]);
  const u = k.useCallback(() => e && o && o(c), [c, o, e]);
  return !s && o ? [!1, u] : [!0];
}
const Ka = (e) => e.key || "";
function ay(e) {
  const t = [];
  return (
    k.Children.forEach(e, (s) => {
      k.isValidElement(s) && t.push(s);
    }),
    t
  );
}
const VP = ({ children: e, custom: t, initial: s = !0, onExitComplete: o, presenceAffectsLayout: a = !0, mode: c = "sync", propagate: u = !1, anchorX: h = "left", root: p }) => {
    const [y, g] = xx(u),
      w = k.useMemo(() => ay(e), [e]),
      x = u && !y ? [] : w.map(Ka),
      N = k.useRef(!0),
      j = k.useRef(w),
      C = cf(() => new Map()),
      D = k.useRef(new Set()),
      [M, T] = k.useState(w),
      [O, W] = k.useState(w);
    Qv(() => {
      ((N.current = !1), (j.current = w));
      for (let G = 0; G < O.length; G++) {
        const B = Ka(O[G]);
        x.includes(B) ? (C.delete(B), D.current.delete(B)) : C.get(B) !== !0 && C.set(B, !1);
      }
    }, [O, x.length, x.join("-")]);
    const $ = [];
    if (w !== M) {
      let G = [...w];
      for (let B = 0; B < O.length; B++) {
        const se = O[B],
          Ce = Ka(se);
        x.includes(Ce) || (G.splice(B, 0, se), $.push(se));
      }
      return (c === "wait" && $.length && (G = $), W(ay(G)), T(w), null);
    }
    const { forceRender: q } = k.useContext(lf);
    return f.jsx(f.Fragment, {
      children: O.map((G) => {
        const B = Ka(G),
          se = u && !y ? !1 : w === O || x.includes(B),
          Ce = () => {
            if (D.current.has(B)) return;
            if ((D.current.add(B), C.has(B))) C.set(B, !0);
            else return;
            let Te = !0;
            (C.forEach((ge) => {
              ge || (Te = !1);
            }),
              Te && (q == null || q(), W(j.current), u && (g == null || g()), o && o()));
          };
        return f.jsx(_P, { isPresent: se, initial: !N.current || s ? void 0 : !1, custom: t, presenceAffectsLayout: a, mode: c, root: p, onExitComplete: se ? void 0 : Ce, anchorX: h, children: G }, B);
      }),
    });
  },
  bx = k.createContext({ strict: !1 }),
  ly = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
let cy = !1;
function OP() {
  if (cy) return;
  const e = {};
  for (const t in ly) e[t] = { isEnabled: (s) => ly[t].some((o) => !!s[o]) };
  (Xw(e), (cy = !0));
}
function kx() {
  return (OP(), CN());
}
function FP(e) {
  const t = kx();
  for (const s in e) t[s] = { ...t[s], ...e[s] };
  Xw(t);
}
const BP = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Cl(e) {
  return e.startsWith("while") || (e.startsWith("drag") && e !== "draggable") || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || BP.has(e);
}
let Cx = (e) => !Cl(e);
function zP(e) {
  typeof e == "function" && (Cx = (t) => (t.startsWith("on") ? !Cl(t) : e(t)));
}
try {
  zP(require("@emotion/is-prop-valid").default);
} catch {}
function $P(e, t, s) {
  const o = {};
  for (const a in e) (a === "values" && typeof e.values == "object") || ((Cx(a) || (s === !0 && Cl(a)) || (!t && !Cl(a)) || (e.draggable && a.startsWith("onDrag"))) && (o[a] = e[a]));
  return o;
}
const Vl = k.createContext({});
function UP(e, t) {
  if (Il(e)) {
    const { initial: s, animate: o } = e;
    return { initial: s === !1 || gi(s) ? s : void 0, animate: gi(o) ? o : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function WP(e) {
  const { initial: t, animate: s } = UP(e, k.useContext(Vl));
  return k.useMemo(() => ({ initial: t, animate: s }), [uy(t), uy(s)]);
}
function uy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Of = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Sx(e, t, s) {
  for (const o in t) !jt(t[o]) && !rx(o, s) && (e[o] = t[o]);
}
function HP({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const s = Of();
    return (_f(s, t, e), Object.assign({}, s.vars, s.style));
  }, [t]);
}
function KP(e, t) {
  const s = e.style || {},
    o = {};
  return (Sx(o, s, e), Object.assign(o, HP(e, t)), o);
}
function GP(e, t) {
  const s = {},
    o = KP(e, t);
  return (e.drag && e.dragListener !== !1 && ((s.draggable = !1), (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"), (o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0), (s.style = o), s);
}
const Ex = () => ({ ...Of(), attrs: {} });
function qP(e, t, s, o) {
  const a = k.useMemo(() => {
    const c = Ex();
    return (sx(c, t, ix(o), e.transformTemplate, e.style), { ...c.attrs, style: { ...c.style } });
  }, [t]);
  if (e.style) {
    const c = {};
    (Sx(c, e.style, e), (a.style = { ...c, ...a.style }));
  }
  return a;
}
const YP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ff(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(YP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function XP(e, t, s, { latestValues: o }, a, c = !1, u) {
  const p = ((u ?? Ff(e)) ? qP : GP)(t, o, a, e),
    y = $P(t, typeof e == "string", c),
    g = e !== k.Fragment ? { ...y, ...p, ref: s } : {},
    { children: w } = t,
    x = k.useMemo(() => (jt(w) ? w.get() : w), [w]);
  return k.createElement(e, { ...g, children: x });
}
function QP({ scrapeMotionValuesFromProps: e, createRenderState: t }, s, o, a) {
  return { latestValues: ZP(s, o, a, e), renderState: t() };
}
function ZP(e, t, s, o) {
  const a = {},
    c = o(e, {});
  for (const x in c) a[x] = rl(c[x]);
  let { initial: u, animate: h } = e;
  const p = Il(e),
    y = Yw(e);
  t && y && !p && e.inherit !== !1 && (u === void 0 && (u = t.initial), h === void 0 && (h = t.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || u === !1;
  const w = g ? h : u;
  if (w && typeof w != "boolean" && !_l(w)) {
    const x = Array.isArray(w) ? w : [w];
    for (let N = 0; N < x.length; N++) {
      const j = jf(e, x[N]);
      if (j) {
        const { transitionEnd: C, transition: D, ...M } = j;
        for (const T in M) {
          let O = M[T];
          if (Array.isArray(O)) {
            const W = g ? O.length - 1 : 0;
            O = O[W];
          }
          O !== null && (a[T] = O);
        }
        for (const T in C) a[T] = C[T];
      }
    }
  }
  return a;
}
const Nx = (e) => (t, s) => {
    const o = k.useContext(Vl),
      a = k.useContext(Ll),
      c = () => QP(e, t, o, a);
    return s ? c() : cf(c);
  },
  JP = Nx({ scrapeMotionValuesFromProps: If, createRenderState: Of }),
  ej = Nx({ scrapeMotionValuesFromProps: ax, createRenderState: Ex }),
  tj = Symbol.for("motionComponentSymbol");
function nj(e, t, s) {
  const o = k.useRef(s);
  k.useInsertionEffect(() => {
    o.current = s;
  });
  const a = k.useRef(null);
  return k.useCallback(
    (c) => {
      var h;
      (c && ((h = e.onMount) == null || h.call(e, c)), t && (c ? t.mount(c) : t.unmount()));
      const u = o.current;
      if (typeof u == "function")
        if (c) {
          const p = u(c);
          typeof p == "function" && (a.current = p);
        } else a.current ? (a.current(), (a.current = null)) : u(c);
      else u && (u.current = c);
    },
    [t],
  );
}
const Px = k.createContext({});
function si(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function rj(e, t, s, o, a, c) {
  var D, M;
  const { visualElement: u } = k.useContext(Vl),
    h = k.useContext(bx),
    p = k.useContext(Ll),
    y = k.useContext(Vf).reducedMotion,
    g = k.useRef(null);
  ((o = o || h.renderer), !g.current && o && (g.current = o(e, { visualState: t, parent: u, props: s, presenceContext: p, blockInitialAnimation: p ? p.initial === !1 : !1, reducedMotionConfig: y, isSVG: c })));
  const w = g.current,
    x = k.useContext(Px);
  w && !w.projection && a && (w.type === "html" || w.type === "svg") && sj(g.current, s, a, x);
  const N = k.useRef(!1);
  k.useInsertionEffect(() => {
    w && N.current && w.update(s, p);
  });
  const j = s[Lw],
    C = k.useRef(!!j && !((D = window.MotionHandoffIsComplete) != null && D.call(window, j)) && ((M = window.MotionHasOptimisedAnimation) == null ? void 0 : M.call(window, j)));
  return (
    Qv(() => {
      w && ((N.current = !0), (window.MotionIsMounted = !0), w.updateFeatures(), w.scheduleRenderMicrotask(), C.current && w.animationState && w.animationState.animateChanges());
    }),
    k.useEffect(() => {
      w &&
        (!C.current && w.animationState && w.animationState.animateChanges(),
        C.current &&
          (queueMicrotask(() => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) == null || T.call(window, j);
          }),
          (C.current = !1)),
        (w.enteringChildren = void 0));
    }),
    w
  );
}
function sj(e, t, s, o) {
  const { layoutId: a, layout: c, drag: u, dragConstraints: h, layoutScroll: p, layoutRoot: y, layoutCrossfade: g } = t;
  ((e.projection = new s(e.latestValues, t["data-framer-portal-id"] ? void 0 : jx(e.parent))), e.projection.setOptions({ layoutId: a, layout: c, alwaysMeasureLayout: !!u || (h && si(h)), visualElement: e, animationType: typeof c == "string" ? c : "both", initialPromotionConfig: o, crossfade: g, layoutScroll: p, layoutRoot: y }));
}
function jx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : jx(e.parent);
}
function Xu(e, { forwardMotionProps: t = !1, type: s } = {}, o, a) {
  o && FP(o);
  const c = s ? s === "svg" : Ff(e),
    u = c ? ej : JP;
  function h(y, g) {
    let w;
    const x = { ...k.useContext(Vf), ...y, layoutId: oj(y) },
      { isStatic: N } = x,
      j = WP(y),
      C = u(y, N);
    if (!N && Xv) {
      ij();
      const D = aj(x);
      ((w = D.MeasureLayout), (j.visualElement = rj(e, C, x, a, D.ProjectionNode, c)));
    }
    return f.jsxs(Vl.Provider, { value: j, children: [w && j.visualElement ? f.jsx(w, { visualElement: j.visualElement, ...x }) : null, XP(e, y, nj(C, j.visualElement, g), C, N, t, c)] });
  }
  h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const p = k.forwardRef(h);
  return ((p[tj] = e), p);
}
function oj({ layoutId: e }) {
  const t = k.useContext(lf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ij(e, t) {
  k.useContext(bx).strict;
}
function aj(e) {
  const t = kx(),
    { drag: s, layout: o } = t;
  if (!s && !o) return {};
  const a = { ...s, ...o };
  return { MeasureLayout: (s != null && s.isEnabled(e)) || (o != null && o.isEnabled(e)) ? a.MeasureLayout : void 0, ProjectionNode: a.ProjectionNode };
}
function lj(e, t) {
  if (typeof Proxy > "u") return Xu;
  const s = new Map(),
    o = (c, u) => Xu(c, u, e, t),
    a = (c, u) => o(c, u);
  return new Proxy(a, { get: (c, u) => (u === "create" ? o : (s.has(u) || s.set(u, Xu(u, void 0, e, t)), s.get(u))) });
}
const cj = (e, t) => ((t.isSVG ?? Ff(e)) ? new BN(t) : new LN(t, { allowProjection: e !== k.Fragment }));
class uj extends Mr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = HN(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    _l(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    t !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this));
  }
}
let dj = 0;
class fj extends Mr {
  constructor() {
    (super(...arguments), (this.id = dj++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: s } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const a = this.node.animationState.setActive("exit", !t);
    s &&
      !t &&
      a.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const hj = { animation: { Feature: uj }, exit: { Feature: fj } };
function Ai(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const mj = (e) => (t) => Rf(t) && e(t, Ai(t));
function li(e, t, s, o) {
  return yi(e, t, mj(s), o);
}
const Ax = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  dy = (e, t) => Math.abs(e - t);
function pj(e, t) {
  const s = dy(e.x, t.x),
    o = dy(e.y, t.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
const fy = new Set(["auto", "scroll"]);
class Tx {
  constructor(t, s, { transformPagePoint: o, contextWindow: a = window, dragSnapToOrigin: c = !1, distanceThreshold: u = 3, element: h } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (N) => {
        this.handleScroll(N.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const N = Zu(this.lastMoveEventInfo, this.history),
          j = this.startEvent !== null,
          C = pj(N.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!j && !C) return;
        const { point: D } = N,
          { timestamp: M } = kt;
        this.history.push({ ...D, timestamp: M });
        const { onStart: T, onMove: O } = this.handlers;
        (j || (T && T(this.lastMoveEvent, N), (this.startEvent = this.lastMoveEvent)), O && O(this.lastMoveEvent, N));
      }),
      (this.handlePointerMove = (N, j) => {
        ((this.lastMoveEvent = N), (this.lastMoveEventInfo = Qu(j, this.transformPagePoint)), Ge.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (N, j) => {
        this.end();
        const { onEnd: C, onSessionEnd: D, resumeAnimation: M } = this.handlers;
        if (((this.dragSnapToOrigin || !this.startEvent) && M && M(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const T = Zu(N.type === "pointercancel" ? this.lastMoveEventInfo : Qu(j, this.transformPagePoint), this.history);
        (this.startEvent && C && C(N, T), D && D(N, T));
      }),
      !Rf(t))
    )
      return;
    ((this.dragSnapToOrigin = c), (this.handlers = s), (this.transformPagePoint = o), (this.distanceThreshold = u), (this.contextWindow = a || window));
    const p = Ai(t),
      y = Qu(p, this.transformPagePoint),
      { point: g } = y,
      { timestamp: w } = kt;
    this.history = [{ ...g, timestamp: w }];
    const { onSessionStart: x } = s;
    (x && x(t, Zu(y, this.history)), (this.removeListeners = Ni(li(this.contextWindow, "pointermove", this.handlePointerMove), li(this.contextWindow, "pointerup", this.handlePointerUp), li(this.contextWindow, "pointercancel", this.handlePointerUp))), h && this.startScrollTracking(h));
  }
  startScrollTracking(t) {
    let s = t.parentElement;
    for (; s; ) {
      const o = getComputedStyle(s);
      ((fy.has(o.overflowX) || fy.has(o.overflowY)) && this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }), (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }),
      window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const s = this.scrollPositions.get(t);
    if (!s) return;
    const o = t === window,
      a = o ? { x: window.scrollX, y: window.scrollY } : { x: t.scrollLeft, y: t.scrollTop },
      c = { x: a.x - s.x, y: a.y - s.y };
    (c.x === 0 && c.y === 0) || (o ? this.lastMoveEventInfo && ((this.lastMoveEventInfo.point.x += c.x), (this.lastMoveEventInfo.point.y += c.y)) : this.history.length > 0 && ((this.history[0].x -= c.x), (this.history[0].y -= c.y)), this.scrollPositions.set(t, a), Ge.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Dr(this.updatePoint));
  }
}
function Qu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Zu({ point: e }, t) {
  return { point: e, delta: hy(e, Dx(t)), offset: hy(e, gj(t)), velocity: yj(t, 0.1) };
}
function gj(e) {
  return e[0];
}
function Dx(e) {
  return e[e.length - 1];
}
function yj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let s = e.length - 1,
    o = null;
  const a = Dx(e);
  for (; s >= 0 && ((o = e[s]), !(a.timestamp - o.timestamp > tr(t))); ) s--;
  if (!o) return { x: 0, y: 0 };
  const c = dn(a.timestamp - o.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const u = { x: (a.x - o.x) / c, y: (a.y - o.y) / c };
  return (u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u);
}
function vj(e, { min: t, max: s }, o) {
  return (t !== void 0 && e < t ? (e = o ? Qe(t, e, o.min) : Math.max(e, t)) : s !== void 0 && e > s && (e = o ? Qe(s, e, o.max) : Math.min(e, s)), e);
}
function my(e, t, s) {
  return { min: t !== void 0 ? e.min + t : void 0, max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0 };
}
function wj(e, { top: t, left: s, bottom: o, right: a }) {
  return { x: my(e.x, s, a), y: my(e.y, t, o) };
}
function py(e, t) {
  let s = t.min - e.min,
    o = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([s, o] = [o, s]), { min: s, max: o });
}
function xj(e, t) {
  return { x: py(e.x, t.x), y: py(e.y, t.y) };
}
function bj(e, t) {
  let s = 0.5;
  const o = _t(e),
    a = _t(t);
  return (a > o ? (s = hi(t.min, t.max - o, e.min)) : o > a && (s = hi(e.min, e.max - a, t.min)), zn(0, 1, s));
}
function kj(e, t) {
  const s = {};
  return (t.min !== void 0 && (s.min = t.min - e.min), t.max !== void 0 && (s.max = t.max - e.min), s);
}
const _d = 0.35;
function Cj(e = _d) {
  return (e === !1 ? (e = 0) : e === !0 && (e = _d), { x: gy(e, "left", "right"), y: gy(e, "top", "bottom") });
}
function gy(e, t, s) {
  return { min: yy(e, t), max: yy(e, s) };
}
function yy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Sj = new WeakMap();
class Ej {
  constructor(t) {
    ((this.openDragLock = null), (this.isDragging = !1), (this.currentDirection = null), (this.originPoint = { x: 0, y: 0 }), (this.constraints = !1), (this.hasMutatedConstraints = !1), (this.elastic = pt()), (this.latestPointerEvent = null), (this.latestPanInfo = null), (this.visualElement = t));
  }
  start(t, { snapToCursor: s = !1, distanceThreshold: o } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const c = (w) => {
        s ? (this.stopAnimation(), this.snapToCursor(Ai(w).point)) : this.pauseAnimation();
      },
      u = (w, x) => {
        this.stopAnimation();
        const { drag: N, dragPropagation: j, onDragStart: C } = this.getProps();
        if (N && !j && (this.openDragLock && this.openDragLock(), (this.openDragLock = dN(N)), !this.openDragLock)) return;
        ((this.latestPointerEvent = w),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          un((M) => {
            let T = this.getAxisMotionValue(M).get() || 0;
            if (On.test(T)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const W = O.layout.layoutBox[M];
                W && (T = _t(W) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[M] = T;
          }),
          C && Ge.postRender(() => C(w, x)),
          jd(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      h = (w, x) => {
        ((this.latestPointerEvent = w), (this.latestPanInfo = x));
        const { dragPropagation: N, dragDirectionLock: j, onDirectionLock: C, onDrag: D } = this.getProps();
        if (!N && !this.openDragLock) return;
        const { offset: M } = x;
        if (j && this.currentDirection === null) {
          ((this.currentDirection = Nj(M)), this.currentDirection !== null && C && C(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, M), this.updateAxis("y", x.point, M), this.visualElement.render(), D && D(w, x));
      },
      p = (w, x) => {
        ((this.latestPointerEvent = w), (this.latestPanInfo = x), this.stop(w, x), (this.latestPointerEvent = null), (this.latestPanInfo = null));
      },
      y = () =>
        un((w) => {
          var x;
          return this.getAnimationState(w) === "paused" && ((x = this.getAxisMotionValue(w).animation) == null ? void 0 : x.play());
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Tx(t, { onSessionStart: c, onStart: u, onMove: h, onSessionEnd: p, resumeAnimation: y }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: g, distanceThreshold: o, contextWindow: Ax(this.visualElement), element: this.visualElement.current });
  }
  stop(t, s) {
    const o = t || this.latestPointerEvent,
      a = s || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !a || !o)) return;
    const { velocity: u } = a;
    this.startAnimation(u);
    const { onDragEnd: h } = this.getProps();
    h && Ge.postRender(() => h(o, a));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: s } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0));
    const { dragPropagation: o } = this.getProps();
    (!o && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), s && s.setActive("whileDrag", !1));
  }
  updateAxis(t, s, o) {
    const { drag: a } = this.getProps();
    if (!o || !Ga(t, a, this.currentDirection)) return;
    const c = this.getAxisMotionValue(t);
    let u = this.originPoint[t] + o[t];
    (this.constraints && this.constraints[t] && (u = vj(u, this.constraints[t], this.elastic[t])), c.set(u));
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: t, dragElastic: s } = this.getProps(),
      o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (c = this.visualElement.projection) == null ? void 0 : c.layout,
      a = this.constraints;
    (t && si(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? (this.constraints = wj(o.layoutBox, t)) : (this.constraints = !1),
      (this.elastic = Cj(s)),
      a !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        un((u) => {
          this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = kj(o.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: s } = this.getProps();
    if (!t || !si(t)) return !1;
    const o = t.current,
      { projection: a } = this.visualElement;
    if (!a || !a.layout) return !1;
    const c = jN(o, a.root, this.visualElement.getTransformPagePoint());
    let u = xj(a.layout.layoutBox, c);
    if (s) {
      const h = s(EN(u));
      ((this.hasMutatedConstraints = !!h), h && (u = Zw(h)));
    }
    return u;
  }
  startAnimation(t) {
    const { drag: s, dragMomentum: o, dragElastic: a, dragTransition: c, dragSnapToOrigin: u, onDragTransitionEnd: h } = this.getProps(),
      p = this.constraints || {},
      y = un((g) => {
        if (!Ga(g, s, this.currentDirection)) return;
        let w = (p && p[g]) || {};
        u && (w = { min: 0, max: 0 });
        const x = a ? 200 : 1e6,
          N = a ? 40 : 1e7,
          j = { type: "inertia", velocity: o ? t[g] : 0, bounceStiffness: x, bounceDamping: N, timeConstant: 750, restDelta: 1, restSpeed: 10, ...c, ...w };
        return this.startAxisValueAnimation(g, j);
      });
    return Promise.all(y).then(h);
  }
  startAxisValueAnimation(t, s) {
    const o = this.getAxisMotionValue(t);
    return (jd(this.visualElement, t), o.start(Pf(t, o, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    un((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    un((t) => {
      var s;
      return (s = this.getAxisMotionValue(t).animation) == null ? void 0 : s.pause();
    });
  }
  getAnimationState(t) {
    var s;
    return (s = this.getAxisMotionValue(t).animation) == null ? void 0 : s.state;
  }
  getAxisMotionValue(t) {
    const s = `_drag${t.toUpperCase()}`,
      o = this.visualElement.getProps(),
      a = o[s];
    return a || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    un((s) => {
      const { drag: o } = this.getProps();
      if (!Ga(s, o, this.currentDirection)) return;
      const { projection: a } = this.visualElement,
        c = this.getAxisMotionValue(s);
      if (a && a.layout) {
        const { min: u, max: h } = a.layout.layoutBox[s],
          p = c.get() || 0;
        c.set(t[s] - Qe(u, h, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: s } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!si(s) || !o || !this.constraints) return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    un((u) => {
      const h = this.getAxisMotionValue(u);
      if (h && this.constraints !== !1) {
        const p = h.get();
        a[u] = bj({ min: p, max: p }, this.constraints[u]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      un((u) => {
        if (!Ga(u, t, null)) return;
        const h = this.getAxisMotionValue(u),
          { min: p, max: y } = this.constraints[u];
        h.set(Qe(p, y, a[u]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Sj.set(this.visualElement, this);
    const t = this.visualElement.current,
      s = li(t, "pointerdown", (p) => {
        const { drag: y, dragListener: g = !0 } = this.getProps();
        y && g && !Kw(p.target) && this.start(p);
      }),
      o = () => {
        const { dragConstraints: p } = this.getProps();
        si(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: a } = this.visualElement,
      c = a.addEventListener("measure", o);
    (a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Ge.read(o));
    const u = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      h = a.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: y }) => {
        this.isDragging &&
          y &&
          (un((g) => {
            const w = this.getAxisMotionValue(g);
            w && ((this.originPoint[g] += p[g].translate), w.set(w.get() + p[g].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (u(), s(), c(), h && h());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: a = !1, dragConstraints: c = !1, dragElastic: u = _d, dragMomentum: h = !0 } = t;
    return { ...t, drag: s, dragDirectionLock: o, dragPropagation: a, dragConstraints: c, dragElastic: u, dragMomentum: h };
  }
}
function Ga(e, t, s) {
  return (t === !0 || t === e) && (s === null || s === e);
}
function Nj(e, t = 10) {
  let s = null;
  return (Math.abs(e.y) > t ? (s = "y") : Math.abs(e.x) > t && (s = "x"), s);
}
class Pj extends Mr {
  constructor(t) {
    (super(t), (this.removeGroupControls = fn), (this.removeListeners = fn), (this.controls = new Ej(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || fn));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    t !== s && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const vy = (e) => (t, s) => {
  e && Ge.postRender(() => e(t, s));
};
class jj extends Mr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = fn));
  }
  onPointerDown(t) {
    this.session = new Tx(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: Ax(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: s, onPan: o, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: vy(t),
      onStart: vy(s),
      onMove: o,
      onEnd: (c, u) => {
        (delete this.session, a && Ge.postRender(() => a(c, u)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = li(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ju = !1;
class Aj extends k.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: s, switchLayoutGroup: o, layoutId: a } = this.props,
      { projection: c } = t;
    (c &&
      (s.group && s.group.add(c),
      o && o.register && a && o.register(c),
      Ju && c.root.didUpdate(),
      c.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      c.setOptions({ ...c.options, onExitComplete: () => this.safeToRemove() })),
      (sl.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: s, visualElement: o, drag: a, isPresent: c } = this.props,
      { projection: u } = o;
    return (
      u &&
        ((u.isPresent = c),
        (Ju = !0),
        a || t.layoutDependency !== s || s === void 0 || t.isPresent !== c ? u.willUpdate() : this.safeToRemove(),
        t.isPresent !== c &&
          (c
            ? u.promote()
            : u.relegate() ||
              Ge.postRender(() => {
                const h = u.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Df.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: s, switchLayoutGroup: o } = this.props,
      { projection: a } = t;
    ((Ju = !0), a && (a.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(a), o && o.deregister && o.deregister(a)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Rx(e) {
  const [t, s] = xx(),
    o = k.useContext(lf);
  return f.jsx(Aj, { ...e, layoutGroup: o, switchLayoutGroup: k.useContext(Px), isPresent: t, safeToRemove: s });
}
const Tj = { pan: { Feature: jj }, drag: { Feature: Pj, ProjectionNode: wx, MeasureLayout: Rx } };
function wy(e, t, s) {
  const { props: o } = e;
  e.animationState && o.whileHover && e.animationState.setActive("whileHover", s === "Start");
  const a = "onHover" + s,
    c = o[a];
  c && Ge.postRender(() => c(t, Ai(t)));
}
class Dj extends Mr {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = fN(t, (s, o) => (wy(this.node, o, "Start"), (a) => wy(this.node, a, "End"))));
  }
  unmount() {}
}
class Rj extends Mr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Ni(
      yi(this.node.current, "focus", () => this.onFocus()),
      yi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function xy(e, t, s) {
  const { props: o } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && o.whileTap && e.animationState.setActive("whileTap", s === "Start");
  const a = "onTap" + (s === "End" ? "" : s),
    c = o[a];
  c && Ge.postRender(() => c(t, Ai(t)));
}
class Mj extends Mr {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = pN(t, (s, o) => (xy(this.node, o, "Start"), (a, { success: c }) => xy(this.node, a, c ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {}
}
const Id = new WeakMap(),
  ed = new WeakMap(),
  Lj = (e) => {
    const t = Id.get(e.target);
    t && t(e);
  },
  _j = (e) => {
    e.forEach(Lj);
  };
function Ij({ root: e, ...t }) {
  const s = e || document;
  ed.has(s) || ed.set(s, {});
  const o = ed.get(s),
    a = JSON.stringify(t);
  return (o[a] || (o[a] = new IntersectionObserver(_j, { root: e, ...t })), o[a]);
}
function Vj(e, t, s) {
  const o = Ij(t);
  return (
    Id.set(e, s),
    o.observe(e),
    () => {
      (Id.delete(e), o.unobserve(e));
    }
  );
}
const Oj = { some: 0, all: 1 };
class Fj extends Mr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: s, margin: o, amount: a = "some", once: c } = t,
      u = { root: s ? s.current : void 0, rootMargin: o, threshold: typeof a == "number" ? a : Oj[a] },
      h = (p) => {
        const { isIntersecting: y } = p;
        if (this.isInView === y || ((this.isInView = y), c && !y && this.hasEnteredView)) return;
        (y && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: g, onViewportLeave: w } = this.node.getProps(),
          x = y ? g : w;
        x && x(p);
      };
    return Vj(this.node.current, u, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Bj(t, s)) && this.startObserver();
  }
  unmount() {}
}
function Bj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (s) => e[s] !== t[s];
}
const zj = { inView: { Feature: Fj }, tap: { Feature: Mj }, focus: { Feature: Rj }, hover: { Feature: Dj } },
  $j = { layout: { ProjectionNode: wx, MeasureLayout: Rx } },
  Uj = { ...hj, ...zj, ...Tj, ...$j },
  Wj = lj(Uj, cj);
var Ti = (e) => e.type === "checkbox",
  ts = (e) => e instanceof Date,
  Mt = (e) => e == null;
const Mx = (e) => typeof e == "object";
var ot = (e) => !Mt(e) && !Array.isArray(e) && Mx(e) && !ts(e),
  Hj = (e) => (ot(e) && e.target ? (Ti(e.target) ? e.target.checked : e.target.value) : e),
  Kj = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Gj = (e, t) => e.has(Kj(t)),
  qj = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return ot(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Bf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Pt(e) {
  let t;
  const s = Array.isArray(e),
    o = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Bf && (e instanceof Blob || o)) && (s || ot(e)))
    if (((t = s ? [] : {}), !s && !qj(e))) t = e;
    else for (const a in e) e.hasOwnProperty(a) && (t[a] = Pt(e[a]));
  else return e;
  return t;
}
var Ol = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  ut = (e) => e === void 0,
  de = (e, t, s) => {
    if (!t || !ot(e)) return s;
    const o = Ol(t.split(/[,[\].]+?/)).reduce((a, c) => (Mt(a) ? a : a[c]), e);
    return ut(o) || o === e ? (ut(e[t]) ? s : e[t]) : o;
  },
  _n = (e) => typeof e == "boolean",
  zf = (e) => /^\w*$/.test(e),
  Lx = (e) => Ol(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Ke = (e, t, s) => {
    let o = -1;
    const a = zf(t) ? [t] : Lx(t),
      c = a.length,
      u = c - 1;
    for (; ++o < c; ) {
      const h = a[o];
      let p = s;
      if (o !== u) {
        const y = e[h];
        p = ot(y) || Array.isArray(y) ? y : isNaN(+a[o + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      ((e[h] = p), (e = e[h]));
    }
  };
const by = { BLUR: "blur", FOCUS_OUT: "focusout" },
  Cn = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
  Zn = { max: "max", min: "min", maxLength: "maxLength", minLength: "minLength", pattern: "pattern", required: "required", validate: "validate" };
Ve.createContext(null);
var Yj = (e, t, s, o = !0) => {
    const a = { defaultValues: t._defaultValues };
    for (const c in e)
      Object.defineProperty(a, c, {
        get: () => {
          const u = c;
          return (t._proxyFormState[u] !== Cn.all && (t._proxyFormState[u] = !o || Cn.all), e[u]);
        },
      });
    return a;
  },
  Vn = (e) => typeof e == "string",
  Xj = (e, t, s, o, a) => (Vn(e) ? (o && t.watch.add(e), de(s, e, a)) : Array.isArray(e) ? e.map((c) => (o && t.watch.add(c), de(s, c))) : (o && (t.watchAll = !0), s)),
  Qj = (e, t, s, o, a) => (t ? { ...s[e], types: { ...(s[e] && s[e].types ? s[e].types : {}), [o]: a || !0 } } : {}),
  ci = (e) => (Array.isArray(e) ? e : [e]),
  ky = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (a) => {
        for (const c of e) c.next && c.next(a);
      },
      subscribe: (a) => (
        e.push(a),
        {
          unsubscribe: () => {
            e = e.filter((c) => c !== a);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Vd = (e) => Mt(e) || !Mx(e);
function Nr(e, t) {
  if (Vd(e) || Vd(t)) return e === t;
  if (ts(e) && ts(t)) return e.getTime() === t.getTime();
  const s = Object.keys(e),
    o = Object.keys(t);
  if (s.length !== o.length) return !1;
  for (const a of s) {
    const c = e[a];
    if (!o.includes(a)) return !1;
    if (a !== "ref") {
      const u = t[a];
      if ((ts(c) && ts(u)) || (ot(c) && ot(u)) || (Array.isArray(c) && Array.isArray(u)) ? !Nr(c, u) : c !== u) return !1;
    }
  }
  return !0;
}
var Rt = (e) => ot(e) && !Object.keys(e).length,
  $f = (e) => e.type === "file",
  Sn = (e) => typeof e == "function",
  Sl = (e) => {
    if (!Bf) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  _x = (e) => e.type === "select-multiple",
  Uf = (e) => e.type === "radio",
  Zj = (e) => Uf(e) || Ti(e),
  td = (e) => Sl(e) && e.isConnected;
function Jj(e, t) {
  const s = t.slice(0, -1).length;
  let o = 0;
  for (; o < s; ) e = ut(e) ? o++ : e[t[o++]];
  return e;
}
function eA(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !ut(e[t])) return !1;
  return !0;
}
function mt(e, t) {
  const s = Array.isArray(t) ? t : zf(t) ? [t] : Lx(t),
    o = s.length === 1 ? e : Jj(e, s),
    a = s.length - 1,
    c = s[a];
  return (o && delete o[c], a !== 0 && ((ot(o) && Rt(o)) || (Array.isArray(o) && eA(o))) && mt(e, s.slice(0, -1)), e);
}
var Ix = (e) => {
  for (const t in e) if (Sn(e[t])) return !0;
  return !1;
};
function El(e, t = {}) {
  const s = Array.isArray(e);
  if (ot(e) || s) for (const o in e) Array.isArray(e[o]) || (ot(e[o]) && !Ix(e[o])) ? ((t[o] = Array.isArray(e[o]) ? [] : {}), El(e[o], t[o])) : Mt(e[o]) || (t[o] = !0);
  return t;
}
function Vx(e, t, s) {
  const o = Array.isArray(e);
  if (ot(e) || o) for (const a in e) Array.isArray(e[a]) || (ot(e[a]) && !Ix(e[a])) ? (ut(t) || Vd(s[a]) ? (s[a] = Array.isArray(e[a]) ? El(e[a], []) : { ...El(e[a]) }) : Vx(e[a], Mt(t) ? {} : t[a], s[a])) : (s[a] = !Nr(e[a], t[a]));
  return s;
}
var ei = (e, t) => Vx(e, t, El(t));
const Cy = { value: !1, isValid: !1 },
  Sy = { value: !0, isValid: !0 };
var Ox = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const t = e.filter((s) => s && s.checked && !s.disabled).map((s) => s.value);
        return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled ? (e[0].attributes && !ut(e[0].attributes.value) ? (ut(e[0].value) || e[0].value === "" ? Sy : { value: e[0].value, isValid: !0 }) : Sy) : Cy;
    }
    return Cy;
  },
  Fx = (e, { valueAsNumber: t, valueAsDate: s, setValueAs: o }) => (ut(e) ? e : t ? (e === "" ? NaN : e && +e) : s && Vn(e) ? new Date(e) : o ? o(e) : e);
const Ey = { isValid: !1, value: null };
var Bx = (e) => (Array.isArray(e) ? e.reduce((t, s) => (s && s.checked && !s.disabled ? { isValid: !0, value: s.value } : t), Ey) : Ey);
function Ny(e) {
  const t = e.ref;
  return $f(t) ? t.files : Uf(t) ? Bx(e.refs).value : _x(t) ? [...t.selectedOptions].map(({ value: s }) => s) : Ti(t) ? Ox(e.refs).value : Fx(ut(t.value) ? e.ref.value : t.value, e);
}
var tA = (e, t, s, o) => {
    const a = {};
    for (const c of e) {
      const u = de(t, c);
      u && Ke(a, c, u._f);
    }
    return { criteriaMode: s, names: [...e], fields: a, shouldUseNativeValidation: o };
  },
  Nl = (e) => e instanceof RegExp,
  ti = (e) => (ut(e) ? e : Nl(e) ? e.source : ot(e) ? (Nl(e.value) ? e.value.source : e.value) : e),
  Py = (e) => ({ isOnSubmit: !e || e === Cn.onSubmit, isOnBlur: e === Cn.onBlur, isOnChange: e === Cn.onChange, isOnAll: e === Cn.all, isOnTouch: e === Cn.onTouched });
const jy = "AsyncFunction";
var nA = (e) => !!e && !!e.validate && !!((Sn(e.validate) && e.validate.constructor.name === jy) || (ot(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === jy))),
  rA = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate),
  Ay = (e, t, s) => !s && (t.watchAll || t.watch.has(e) || [...t.watch].some((o) => e.startsWith(o) && /^\.\w+/.test(e.slice(o.length))));
const ui = (e, t, s, o) => {
  for (const a of s || Object.keys(e)) {
    const c = de(e, a);
    if (c) {
      const { _f: u, ...h } = c;
      if (u) {
        if (u.refs && u.refs[0] && t(u.refs[0], a) && !o) return !0;
        if (u.ref && t(u.ref, u.name) && !o) return !0;
        if (ui(h, t)) break;
      } else if (ot(h) && ui(h, t)) break;
    }
  }
};
function Ty(e, t, s) {
  const o = de(e, s);
  if (o || zf(s)) return { error: o, name: s };
  const a = s.split(".");
  for (; a.length; ) {
    const c = a.join("."),
      u = de(t, c),
      h = de(e, c);
    if (u && !Array.isArray(u) && s !== c) return { name: s };
    if (h && h.type) return { name: c, error: h };
    a.pop();
  }
  return { name: s };
}
var sA = (e, t, s, o) => {
    s(e);
    const { name: a, ...c } = e;
    return Rt(c) || Object.keys(c).length >= Object.keys(t).length || Object.keys(c).find((u) => t[u] === (!o || Cn.all));
  },
  oA = (e, t, s) => !e || !t || e === t || ci(e).some((o) => o && (s ? o === t : o.startsWith(t) || t.startsWith(o))),
  iA = (e, t, s, o, a) => (a.isOnAll ? !1 : !s && a.isOnTouch ? !(t || e) : (s ? o.isOnBlur : a.isOnBlur) ? !e : (s ? o.isOnChange : a.isOnChange) ? e : !0),
  aA = (e, t) => !Ol(de(e, t)).length && mt(e, t),
  lA = (e, t, s) => {
    const o = ci(de(e, s));
    return (Ke(o, "root", t[s]), Ke(e, s, o), e);
  },
  ol = (e) => Vn(e);
function Dy(e, t, s = "validate") {
  if (ol(e) || (Array.isArray(e) && e.every(ol)) || (_n(e) && !e)) return { type: s, message: ol(e) ? e : "", ref: t };
}
var zs = (e) => (ot(e) && !Nl(e) ? e : { value: e, message: "" }),
  Ry = async (e, t, s, o, a, c) => {
    const { ref: u, refs: h, required: p, maxLength: y, minLength: g, min: w, max: x, pattern: N, validate: j, name: C, valueAsNumber: D, mount: M } = e._f,
      T = de(s, C);
    if (!M || t.has(C)) return {};
    const O = h ? h[0] : u,
      W = (ge) => {
        a && O.reportValidity && (O.setCustomValidity(_n(ge) ? "" : ge || ""), O.reportValidity());
      },
      $ = {},
      q = Uf(u),
      G = Ti(u),
      B = q || G,
      se = ((D || $f(u)) && ut(u.value) && ut(T)) || (Sl(u) && u.value === "") || T === "" || (Array.isArray(T) && !T.length),
      Ce = Qj.bind(null, C, o, $),
      Te = (ge, ye, Se, De = Zn.maxLength, Pe = Zn.minLength) => {
        const he = ge ? ye : Se;
        $[C] = { type: ge ? De : Pe, message: he, ref: u, ...Ce(ge ? De : Pe, he) };
      };
    if (c ? !Array.isArray(T) || !T.length : p && ((!B && (se || Mt(T))) || (_n(T) && !T) || (G && !Ox(h).isValid) || (q && !Bx(h).isValid))) {
      const { value: ge, message: ye } = ol(p) ? { value: !!p, message: p } : zs(p);
      if (ge && (($[C] = { type: Zn.required, message: ye, ref: O, ...Ce(Zn.required, ye) }), !o)) return (W(ye), $);
    }
    if (!se && (!Mt(w) || !Mt(x))) {
      let ge, ye;
      const Se = zs(x),
        De = zs(w);
      if (!Mt(T) && !isNaN(T)) {
        const Pe = u.valueAsNumber || (T && +T);
        (Mt(Se.value) || (ge = Pe > Se.value), Mt(De.value) || (ye = Pe < De.value));
      } else {
        const Pe = u.valueAsDate || new Date(T),
          he = (Z) => new Date(new Date().toDateString() + " " + Z),
          V = u.type == "time",
          oe = u.type == "week";
        (Vn(Se.value) && T && (ge = V ? he(T) > he(Se.value) : oe ? T > Se.value : Pe > new Date(Se.value)), Vn(De.value) && T && (ye = V ? he(T) < he(De.value) : oe ? T < De.value : Pe < new Date(De.value)));
      }
      if ((ge || ye) && (Te(!!ge, Se.message, De.message, Zn.max, Zn.min), !o)) return (W($[C].message), $);
    }
    if ((y || g) && !se && (Vn(T) || (c && Array.isArray(T)))) {
      const ge = zs(y),
        ye = zs(g),
        Se = !Mt(ge.value) && T.length > +ge.value,
        De = !Mt(ye.value) && T.length < +ye.value;
      if ((Se || De) && (Te(Se, ge.message, ye.message), !o)) return (W($[C].message), $);
    }
    if (N && !se && Vn(T)) {
      const { value: ge, message: ye } = zs(N);
      if (Nl(ge) && !T.match(ge) && (($[C] = { type: Zn.pattern, message: ye, ref: u, ...Ce(Zn.pattern, ye) }), !o)) return (W(ye), $);
    }
    if (j) {
      if (Sn(j)) {
        const ge = await j(T, s),
          ye = Dy(ge, O);
        if (ye && (($[C] = { ...ye, ...Ce(Zn.validate, ye.message) }), !o)) return (W(ye.message), $);
      } else if (ot(j)) {
        let ge = {};
        for (const ye in j) {
          if (!Rt(ge) && !o) break;
          const Se = Dy(await j[ye](T, s), O, ye);
          Se && ((ge = { ...Se, ...Ce(ye, Se.message) }), W(Se.message), o && ($[C] = ge));
        }
        if (!Rt(ge) && (($[C] = { ref: O, ...ge }), !o)) return $;
      }
    }
    return (W(!0), $);
  };
const cA = { mode: Cn.onSubmit, reValidateMode: Cn.onChange, shouldFocusError: !0 };
function uA(e = {}) {
  let t = { ...cA, ...e },
    s = { submitCount: 0, isDirty: !1, isLoading: Sn(t.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: t.errors || {}, disabled: t.disabled || !1 };
  const o = {};
  let a = ot(t.defaultValues) || ot(t.values) ? Pt(t.values || t.defaultValues) || {} : {},
    c = t.shouldUnregister ? {} : Pt(a),
    u = { action: !1, mount: !1, watch: !1 },
    h = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    p,
    y = 0;
  const g = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 };
  let w = { ...g };
  const x = { array: ky(), state: ky() },
    N = Py(t.mode),
    j = Py(t.reValidateMode),
    C = t.criteriaMode === Cn.all,
    D = (S) => (_) => {
      (clearTimeout(y), (y = setTimeout(S, _)));
    },
    M = async (S) => {
      if (!t.disabled && (g.isValid || w.isValid || S)) {
        const _ = t.resolver ? Rt((await se()).errors) : await Te(o, !0);
        _ !== s.isValid && x.state.next({ isValid: _ });
      }
    },
    T = (S, _) => {
      !t.disabled &&
        (g.isValidating || g.validatingFields || w.isValidating || w.validatingFields) &&
        ((S || Array.from(h.mount)).forEach((z) => {
          z && (_ ? Ke(s.validatingFields, z, _) : mt(s.validatingFields, z));
        }),
        x.state.next({ validatingFields: s.validatingFields, isValidating: !Rt(s.validatingFields) }));
    },
    O = (S, _ = [], z, ee, J = !0, X = !0) => {
      if (ee && z && !t.disabled) {
        if (((u.action = !0), X && Array.isArray(de(o, S)))) {
          const ne = z(de(o, S), ee.argA, ee.argB);
          J && Ke(o, S, ne);
        }
        if (X && Array.isArray(de(s.errors, S))) {
          const ne = z(de(s.errors, S), ee.argA, ee.argB);
          (J && Ke(s.errors, S, ne), aA(s.errors, S));
        }
        if ((g.touchedFields || w.touchedFields) && X && Array.isArray(de(s.touchedFields, S))) {
          const ne = z(de(s.touchedFields, S), ee.argA, ee.argB);
          J && Ke(s.touchedFields, S, ne);
        }
        ((g.dirtyFields || w.dirtyFields) && (s.dirtyFields = ei(a, c)), x.state.next({ name: S, isDirty: ye(S, _), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid }));
      } else Ke(c, S, _);
    },
    W = (S, _) => {
      (Ke(s.errors, S, _), x.state.next({ errors: s.errors }));
    },
    $ = (S) => {
      ((s.errors = S), x.state.next({ errors: s.errors, isValid: !1 }));
    },
    q = (S, _, z, ee) => {
      const J = de(o, S);
      if (J) {
        const X = de(c, S, ut(z) ? de(a, S) : z);
        (ut(X) || (ee && ee.defaultChecked) || _ ? Ke(c, S, _ ? X : Ny(J._f)) : Pe(S, X), u.mount && M());
      }
    },
    G = (S, _, z, ee, J) => {
      let X = !1,
        ne = !1;
      const Re = { name: S };
      if (!t.disabled) {
        if (!z || ee) {
          (g.isDirty || w.isDirty) && ((ne = s.isDirty), (s.isDirty = Re.isDirty = ye()), (X = ne !== Re.isDirty));
          const ze = Nr(de(a, S), _);
          ((ne = !!de(s.dirtyFields, S)), ze ? mt(s.dirtyFields, S) : Ke(s.dirtyFields, S, !0), (Re.dirtyFields = s.dirtyFields), (X = X || ((g.dirtyFields || w.dirtyFields) && ne !== !ze)));
        }
        if (z) {
          const ze = de(s.touchedFields, S);
          ze || (Ke(s.touchedFields, S, z), (Re.touchedFields = s.touchedFields), (X = X || ((g.touchedFields || w.touchedFields) && ze !== z)));
        }
        X && J && x.state.next(Re);
      }
      return X ? Re : {};
    },
    B = (S, _, z, ee) => {
      const J = de(s.errors, S),
        X = (g.isValid || w.isValid) && _n(_) && s.isValid !== _;
      if ((t.delayError && z ? ((p = D(() => W(S, z))), p(t.delayError)) : (clearTimeout(y), (p = null), z ? Ke(s.errors, S, z) : mt(s.errors, S)), (z ? !Nr(J, z) : J) || !Rt(ee) || X)) {
        const ne = { ...ee, ...(X && _n(_) ? { isValid: _ } : {}), errors: s.errors, name: S };
        ((s = { ...s, ...ne }), x.state.next(ne));
      }
    },
    se = async (S) => {
      T(S, !0);
      const _ = await t.resolver(c, t.context, tA(S || h.mount, o, t.criteriaMode, t.shouldUseNativeValidation));
      return (T(S), _);
    },
    Ce = async (S) => {
      const { errors: _ } = await se(S);
      if (S)
        for (const z of S) {
          const ee = de(_, z);
          ee ? Ke(s.errors, z, ee) : mt(s.errors, z);
        }
      else s.errors = _;
      return _;
    },
    Te = async (S, _, z = { valid: !0 }) => {
      for (const ee in S) {
        const J = S[ee];
        if (J) {
          const { _f: X, ...ne } = J;
          if (X) {
            const Re = h.array.has(X.name),
              ze = J._f && nA(J._f);
            ze && g.validatingFields && T([ee], !0);
            const Ze = await Ry(J, h.disabled, c, C, t.shouldUseNativeValidation && !_, Re);
            if ((ze && g.validatingFields && T([ee]), Ze[X.name] && ((z.valid = !1), _))) break;
            !_ && (de(Ze, X.name) ? (Re ? lA(s.errors, Ze, X.name) : Ke(s.errors, X.name, Ze[X.name])) : mt(s.errors, X.name));
          }
          !Rt(ne) && (await Te(ne, _, z));
        }
      }
      return z.valid;
    },
    ge = () => {
      for (const S of h.unMount) {
        const _ = de(o, S);
        _ && (_._f.refs ? _._f.refs.every((z) => !td(z)) : !td(_._f.ref)) && Le(S);
      }
      h.unMount = new Set();
    },
    ye = (S, _) => !t.disabled && (S && _ && Ke(c, S, _), !Nr(U(), a)),
    Se = (S, _, z) => Xj(S, h, { ...(u.mount ? c : ut(_) ? a : Vn(S) ? { [S]: _ } : _) }, z, _),
    De = (S) => Ol(de(u.mount ? c : a, S, t.shouldUnregister ? de(a, S, []) : [])),
    Pe = (S, _, z = {}) => {
      const ee = de(o, S);
      let J = _;
      if (ee) {
        const X = ee._f;
        X && (!X.disabled && Ke(c, S, Fx(_, X)), (J = Sl(X.ref) && Mt(_) ? "" : _), _x(X.ref) ? [...X.ref.options].forEach((ne) => (ne.selected = J.includes(ne.value))) : X.refs ? (Ti(X.ref) ? (X.refs.length > 1 ? X.refs.forEach((ne) => (!ne.defaultChecked || !ne.disabled) && (ne.checked = Array.isArray(J) ? !!J.find((Re) => Re === ne.value) : J === ne.value)) : X.refs[0] && (X.refs[0].checked = !!J)) : X.refs.forEach((ne) => (ne.checked = ne.value === J))) : $f(X.ref) ? (X.ref.value = "") : ((X.ref.value = J), X.ref.type || x.state.next({ name: S, values: Pt(c) })));
      }
      ((z.shouldDirty || z.shouldTouch) && G(S, J, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && A(S));
    },
    he = (S, _, z) => {
      for (const ee in _) {
        const J = _[ee],
          X = `${S}.${ee}`,
          ne = de(o, X);
        (h.array.has(S) || ot(J) || (ne && !ne._f)) && !ts(J) ? he(X, J, z) : Pe(X, J, z);
      }
    },
    V = (S, _, z = {}) => {
      const ee = de(o, S),
        J = h.array.has(S),
        X = Pt(_);
      (Ke(c, S, X), J ? (x.array.next({ name: S, values: Pt(c) }), (g.isDirty || g.dirtyFields || w.isDirty || w.dirtyFields) && z.shouldDirty && x.state.next({ name: S, dirtyFields: ei(a, c), isDirty: ye(S, X) })) : ee && !ee._f && !Mt(X) ? he(S, X, z) : Pe(S, X, z), Ay(S, h) && x.state.next({ ...s }), x.state.next({ name: u.mount ? S : void 0, values: Pt(c) }));
    },
    oe = async (S) => {
      u.mount = !0;
      const _ = S.target;
      let z = _.name,
        ee = !0;
      const J = de(o, z),
        X = (ne) => {
          ee = Number.isNaN(ne) || (ts(ne) && isNaN(ne.getTime())) || Nr(ne, de(c, z, ne));
        };
      if (J) {
        let ne, Re;
        const ze = _.type ? Ny(J._f) : Hj(S),
          Ze = S.type === by.BLUR || S.type === by.FOCUS_OUT,
          Wl = (!rA(J._f) && !t.resolver && !de(s.errors, z) && !J._f.deps) || iA(Ze, de(s.touchedFields, z), s.isSubmitted, j, N),
          hs = Ay(z, h, Ze);
        (Ke(c, z, ze), Ze ? (J._f.onBlur && J._f.onBlur(S), p && p(0)) : J._f.onChange && J._f.onChange(S));
        const ms = G(z, ze, Ze),
          Hl = !Rt(ms) || hs;
        if ((!Ze && x.state.next({ name: z, type: S.type, values: Pt(c) }), Wl)) return ((g.isValid || w.isValid) && (t.mode === "onBlur" ? Ze && M() : Ze || M()), Hl && x.state.next({ name: z, ...(hs ? {} : ms) }));
        if ((!Ze && hs && x.state.next({ ...s }), t.resolver)) {
          const { errors: ps } = await se([z]);
          if ((X(ze), ee)) {
            const po = Ty(s.errors, o, z),
              gs = Ty(ps, o, po.name || z);
            ((ne = gs.error), (z = gs.name), (Re = Rt(ps)));
          }
        } else (T([z], !0), (ne = (await Ry(J, h.disabled, c, C, t.shouldUseNativeValidation))[z]), T([z]), X(ze), ee && (ne ? (Re = !1) : (g.isValid || w.isValid) && (Re = await Te(o, !0))));
        ee && (J._f.deps && A(J._f.deps), B(z, Re, ne, ms));
      }
    },
    Z = (S, _) => {
      if (de(s.errors, _) && S.focus) return (S.focus(), 1);
    },
    A = async (S, _ = {}) => {
      let z, ee;
      const J = ci(S);
      if (t.resolver) {
        const X = await Ce(ut(S) ? S : J);
        ((z = Rt(X)), (ee = S ? !J.some((ne) => de(X, ne)) : z));
      } else
        S
          ? ((ee = (
              await Promise.all(
                J.map(async (X) => {
                  const ne = de(o, X);
                  return await Te(ne && ne._f ? { [X]: ne } : ne);
                }),
              )
            ).every(Boolean)),
            !(!ee && !s.isValid) && M())
          : (ee = z = await Te(o));
      return (x.state.next({ ...(!Vn(S) || ((g.isValid || w.isValid) && z !== s.isValid) ? {} : { name: S }), ...(t.resolver || !S ? { isValid: z } : {}), errors: s.errors }), _.shouldFocus && !ee && ui(o, Z, S ? J : h.mount), ee);
    },
    U = (S) => {
      const _ = { ...(u.mount ? c : a) };
      return ut(S) ? _ : Vn(S) ? de(_, S) : S.map((z) => de(_, z));
    },
    me = (S, _) => ({ invalid: !!de((_ || s).errors, S), isDirty: !!de((_ || s).dirtyFields, S), error: de((_ || s).errors, S), isValidating: !!de(s.validatingFields, S), isTouched: !!de((_ || s).touchedFields, S) }),
    ve = (S) => {
      (S && ci(S).forEach((_) => mt(s.errors, _)), x.state.next({ errors: S ? s.errors : {} }));
    },
    Ee = (S, _, z) => {
      const ee = (de(o, S, { _f: {} })._f || {}).ref,
        J = de(s.errors, S) || {},
        { ref: X, message: ne, type: Re, ...ze } = J;
      (Ke(s.errors, S, { ...ze, ..._, ref: ee }), x.state.next({ name: S, errors: s.errors, isValid: !1 }), z && z.shouldFocus && ee && ee.focus && ee.focus());
    },
    Ae = (S, _) => (Sn(S) ? x.state.subscribe({ next: (z) => S(Se(void 0, _), z) }) : Se(S, _, !0)),
    be = (S) =>
      x.state.subscribe({
        next: (_) => {
          oA(S.name, _.name, S.exact) && sA(_, S.formState || g, mo, S.reRenderRoot) && S.callback({ values: { ...c }, ...s, ..._ });
        },
      }).unsubscribe,
    Me = (S) => ((u.mount = !0), (w = { ...w, ...S.formState }), be({ ...S, formState: w })),
    Le = (S, _ = {}) => {
      for (const z of S ? ci(S) : h.mount) (h.mount.delete(z), h.array.delete(z), _.keepValue || (mt(o, z), mt(c, z)), !_.keepError && mt(s.errors, z), !_.keepDirty && mt(s.dirtyFields, z), !_.keepTouched && mt(s.touchedFields, z), !_.keepIsValidating && mt(s.validatingFields, z), !t.shouldUnregister && !_.keepDefaultValue && mt(a, z));
      (x.state.next({ values: Pt(c) }), x.state.next({ ...s, ...(_.keepDirty ? { isDirty: ye() } : {}) }), !_.keepIsValid && M());
    },
    tt = ({ disabled: S, name: _ }) => {
      ((_n(S) && u.mount) || S || h.disabled.has(_)) && (S ? h.disabled.add(_) : h.disabled.delete(_));
    },
    Jt = (S, _ = {}) => {
      let z = de(o, S);
      const ee = _n(_.disabled) || _n(t.disabled);
      return (
        Ke(o, S, { ...(z || {}), _f: { ...(z && z._f ? z._f : { ref: { name: S } }), name: S, mount: !0, ..._ } }),
        h.mount.add(S),
        z ? tt({ disabled: _n(_.disabled) ? _.disabled : t.disabled, name: S }) : q(S, !0, _.value),
        {
          ...(ee ? { disabled: _.disabled || t.disabled } : {}),
          ...(t.progressive ? { required: !!_.required, min: ti(_.min), max: ti(_.max), minLength: ti(_.minLength), maxLength: ti(_.maxLength), pattern: ti(_.pattern) } : {}),
          name: S,
          onChange: oe,
          onBlur: oe,
          ref: (J) => {
            if (J) {
              (Jt(S, _), (z = de(o, S)));
              const X = (ut(J.value) && J.querySelectorAll && J.querySelectorAll("input,select,textarea")[0]) || J,
                ne = Zj(X),
                Re = z._f.refs || [];
              if (ne ? Re.find((ze) => ze === X) : X === z._f.ref) return;
              (Ke(o, S, { _f: { ...z._f, ...(ne ? { refs: [...Re.filter(td), X, ...(Array.isArray(de(a, S)) ? [{}] : [])], ref: { type: X.type, name: S } } : { ref: X }) } }), q(S, !1, void 0, X));
            } else ((z = de(o, S, {})), z._f && (z._f.mount = !1), (t.shouldUnregister || _.shouldUnregister) && !(Gj(h.array, S) && u.action) && h.unMount.add(S));
          },
        }
      );
    },
    jn = () => t.shouldFocusError && ui(o, Z, h.mount),
    cs = (S) => {
      _n(S) &&
        (x.state.next({ disabled: S }),
        ui(
          o,
          (_, z) => {
            const ee = de(o, z);
            ee &&
              ((_.disabled = ee._f.disabled || S),
              Array.isArray(ee._f.refs) &&
                ee._f.refs.forEach((J) => {
                  J.disabled = ee._f.disabled || S;
                }));
          },
          0,
          !1,
        ));
    },
    us = (S, _) => async (z) => {
      let ee;
      z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
      let J = Pt(c);
      if ((x.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: X, values: ne } = await se();
        ((s.errors = X), (J = ne));
      } else await Te(o);
      if (h.disabled.size) for (const X of h.disabled) Ke(J, X, void 0);
      if ((mt(s.errors, "root"), Rt(s.errors))) {
        x.state.next({ errors: {} });
        try {
          await S(J, z);
        } catch (X) {
          ee = X;
        }
      } else (_ && (await _({ ...s.errors }, z)), jn(), setTimeout(jn));
      if ((x.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: Rt(s.errors) && !ee, submitCount: s.submitCount + 1, errors: s.errors }), ee)) throw ee;
    },
    Ri = (S, _ = {}) => {
      de(o, S) && (ut(_.defaultValue) ? V(S, Pt(de(a, S))) : (V(S, _.defaultValue), Ke(a, S, Pt(_.defaultValue))), _.keepTouched || mt(s.touchedFields, S), _.keepDirty || (mt(s.dirtyFields, S), (s.isDirty = _.defaultValue ? ye(S, Pt(de(a, S))) : ye())), _.keepError || (mt(s.errors, S), g.isValid && M()), x.state.next({ ...s }));
    },
    ho = (S, _ = {}) => {
      const z = S ? Pt(S) : a,
        ee = Pt(z),
        J = Rt(S),
        X = J ? a : ee;
      if ((_.keepDefaultValues || (a = z), !_.keepValues)) {
        if (_.keepDirtyValues) {
          const ne = new Set([...h.mount, ...Object.keys(ei(a, c))]);
          for (const Re of Array.from(ne)) de(s.dirtyFields, Re) ? Ke(X, Re, de(c, Re)) : V(Re, de(X, Re));
        } else {
          if (Bf && ut(S))
            for (const ne of h.mount) {
              const Re = de(o, ne);
              if (Re && Re._f) {
                const ze = Array.isArray(Re._f.refs) ? Re._f.refs[0] : Re._f.ref;
                if (Sl(ze)) {
                  const Ze = ze.closest("form");
                  if (Ze) {
                    Ze.reset();
                    break;
                  }
                }
              }
            }
          for (const ne of h.mount) V(ne, de(X, ne));
        }
        ((c = Pt(X)), x.array.next({ values: { ...X } }), x.state.next({ values: { ...X } }));
      }
      ((h = { mount: _.keepDirtyValues ? h.mount : new Set(), unMount: new Set(), array: new Set(), disabled: new Set(), watch: new Set(), watchAll: !1, focus: "" }), (u.mount = !g.isValid || !!_.keepIsValid || !!_.keepDirtyValues), (u.watch = !!t.shouldUnregister), x.state.next({ submitCount: _.keepSubmitCount ? s.submitCount : 0, isDirty: J ? !1 : _.keepDirty ? s.isDirty : !!(_.keepDefaultValues && !Nr(S, a)), isSubmitted: _.keepIsSubmitted ? s.isSubmitted : !1, dirtyFields: J ? {} : _.keepDirtyValues ? (_.keepDefaultValues && c ? ei(a, c) : s.dirtyFields) : _.keepDefaultValues && S ? ei(a, S) : _.keepDirty ? s.dirtyFields : {}, touchedFields: _.keepTouched ? s.touchedFields : {}, errors: _.keepErrors ? s.errors : {}, isSubmitSuccessful: _.keepIsSubmitSuccessful ? s.isSubmitSuccessful : !1, isSubmitting: !1 }));
    },
    ds = (S, _) => ho(Sn(S) ? S(c) : S, _),
    Mi = (S, _ = {}) => {
      const z = de(o, S),
        ee = z && z._f;
      if (ee) {
        const J = ee.refs ? ee.refs[0] : ee.ref;
        J.focus && (J.focus(), _.shouldSelect && Sn(J.select) && J.select());
      }
    },
    mo = (S) => {
      s = { ...s, ...S };
    },
    Un = {
      control: {
        register: Jt,
        unregister: Le,
        getFieldState: me,
        handleSubmit: us,
        setError: Ee,
        _subscribe: be,
        _runSchema: se,
        _getWatch: Se,
        _getDirty: ye,
        _setValid: M,
        _setFieldArray: O,
        _setDisabledField: tt,
        _setErrors: $,
        _getFieldArray: De,
        _reset: ho,
        _resetDefaultValues: () =>
          Sn(t.defaultValues) &&
          t.defaultValues().then((S) => {
            (ds(S, t.resetOptions), x.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ge,
        _disableForm: cs,
        _subjects: x,
        _proxyFormState: g,
        get _fields() {
          return o;
        },
        get _formValues() {
          return c;
        },
        get _state() {
          return u;
        },
        set _state(S) {
          u = S;
        },
        get _defaultValues() {
          return a;
        },
        get _names() {
          return h;
        },
        set _names(S) {
          h = S;
        },
        get _formState() {
          return s;
        },
        get _options() {
          return t;
        },
        set _options(S) {
          t = { ...t, ...S };
        },
      },
      subscribe: Me,
      trigger: A,
      register: Jt,
      handleSubmit: us,
      watch: Ae,
      setValue: V,
      getValues: U,
      reset: ds,
      resetField: Ri,
      clearErrors: ve,
      unregister: Le,
      setError: Ee,
      setFocus: Mi,
      getFieldState: me,
    };
  return { ...Un, formControl: Un };
}
function dA(e = {}) {
  const t = Ve.useRef(void 0),
    s = Ve.useRef(void 0),
    [o, a] = Ve.useState({ isDirty: !1, isValidating: !1, isLoading: Sn(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || !1, defaultValues: Sn(e.defaultValues) ? void 0 : e.defaultValues });
  t.current || ((t.current = { ...(e.formControl ? e.formControl : uA(e)), formState: o }), e.formControl && e.defaultValues && !Sn(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions));
  const c = t.current.control;
  return (
    (c._options = e),
    Ve.useLayoutEffect(() => c._subscribe({ formState: c._proxyFormState, callback: () => a({ ...c._formState }), reRenderRoot: !0 }), [c]),
    Ve.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]),
    Ve.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const u = c._getDirty();
        u !== o.isDirty && c._subjects.state.next({ isDirty: u });
      }
    }, [c, o.isDirty]),
    Ve.useEffect(() => {
      e.values && !Nr(e.values, s.current) ? (c._reset(e.values, c._options.resetOptions), (s.current = e.values), a((u) => ({ ...u }))) : c._resetDefaultValues();
    }, [e.values, c]),
    Ve.useEffect(() => {
      e.errors && !Rt(e.errors) && c._setErrors(e.errors);
    }, [e.errors, c]),
    Ve.useEffect(() => {
      (c._state.mount || (c._setValid(), (c._state.mount = !0)), c._state.watch && ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })), c._removeUnmounted());
    }),
    Ve.useEffect(() => {
      e.shouldUnregister && c._subjects.state.next({ values: c._getWatch() });
    }, [e.shouldUnregister, c]),
    (t.current.formState = Yj(o, c)),
    t.current
  );
}
const fA = "" + new URL("hero-image-Cjwn1l6c.png", import.meta.url).href,
  nd = "" + new URL("logo-chip-petcare-CHUQG_0h.svg", import.meta.url).href,
  My = "" + new URL("ssn-logo-BRSiW14b.svg", import.meta.url).href;
function hA(e, t) {
  const s = k.createContext(t),
    o = (c) => {
      const { children: u, ...h } = c,
        p = k.useMemo(() => h, Object.values(h));
      return f.jsx(s.Provider, { value: p, children: u });
    };
  o.displayName = e + "Provider";
  function a(c) {
    const u = k.useContext(s);
    if (u) return u;
    if (t !== void 0) return t;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, a];
}
function Fl(e, t = []) {
  let s = [];
  function o(c, u) {
    const h = k.createContext(u),
      p = s.length;
    s = [...s, u];
    const y = (w) => {
      var M;
      const { scope: x, children: N, ...j } = w,
        C = ((M = x == null ? void 0 : x[e]) == null ? void 0 : M[p]) || h,
        D = k.useMemo(() => j, Object.values(j));
      return f.jsx(C.Provider, { value: D, children: N });
    };
    y.displayName = c + "Provider";
    function g(w, x) {
      var C;
      const N = ((C = x == null ? void 0 : x[e]) == null ? void 0 : C[p]) || h,
        j = k.useContext(N);
      if (j) return j;
      if (u !== void 0) return u;
      throw new Error(`\`${w}\` must be used within \`${c}\``);
    }
    return [y, g];
  }
  const a = () => {
    const c = s.map((u) => k.createContext(u));
    return function (h) {
      const p = (h == null ? void 0 : h[e]) || c;
      return k.useMemo(() => ({ [`__scope${e}`]: { ...h, [e]: p } }), [h, p]);
    };
  };
  return ((a.scopeName = e), [o, mA(a, ...t)]);
}
function mA(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const s = () => {
    const o = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (c) {
      const u = o.reduce((h, { useScope: p, scopeName: y }) => {
        const w = p(c)[`__scope${y}`];
        return { ...h, ...w };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return ((s.scopeName = t.scopeName), s);
}
function Ly(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function zx(...e) {
  return (t) => {
    let s = !1;
    const o = e.map((a) => {
      const c = Ly(a, t);
      return (!s && typeof c == "function" && (s = !0), c);
    });
    if (s)
      return () => {
        for (let a = 0; a < o.length; a++) {
          const c = o[a];
          typeof c == "function" ? c() : Ly(e[a], null);
        }
      };
  };
}
function En(...e) {
  return k.useCallback(zx(...e), e);
}
var vi = k.forwardRef((e, t) => {
  const { children: s, ...o } = e,
    a = k.Children.toArray(s),
    c = a.find(gA);
  if (c) {
    const u = c.props.children,
      h = a.map((p) => (p === c ? (k.Children.count(u) > 1 ? k.Children.only(null) : k.isValidElement(u) ? u.props.children : null) : p));
    return f.jsx(Od, { ...o, ref: t, children: k.isValidElement(u) ? k.cloneElement(u, void 0, h) : null });
  }
  return f.jsx(Od, { ...o, ref: t, children: s });
});
vi.displayName = "Slot";
var Od = k.forwardRef((e, t) => {
  const { children: s, ...o } = e;
  if (k.isValidElement(s)) {
    const a = vA(s),
      c = yA(o, s.props);
    return (s.type !== k.Fragment && (c.ref = t ? zx(t, a) : a), k.cloneElement(s, c));
  }
  return k.Children.count(s) > 1 ? k.Children.only(null) : null;
});
Od.displayName = "SlotClone";
var pA = ({ children: e }) => f.jsx(f.Fragment, { children: e });
function gA(e) {
  return k.isValidElement(e) && e.type === pA;
}
function yA(e, t) {
  const s = { ...t };
  for (const o in t) {
    const a = e[o],
      c = t[o];
    /^on[A-Z]/.test(o)
      ? a && c
        ? (s[o] = (...h) => {
            (c(...h), a(...h));
          })
        : a && (s[o] = a)
      : o === "style"
        ? (s[o] = { ...a, ...c })
        : o === "className" && (s[o] = [a, c].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function vA(e) {
  var o, a;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
    s = t && "isReactWarning" in t && t.isReactWarning;
  return s ? e.ref : ((t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get), (s = t && "isReactWarning" in t && t.isReactWarning), s ? e.props.ref : e.props.ref || e.ref);
}
function wA(e) {
  const t = e + "CollectionProvider",
    [s, o] = Fl(t),
    [a, c] = s(t, { collectionRef: { current: null }, itemMap: new Map() }),
    u = (N) => {
      const { scope: j, children: C } = N,
        D = Ve.useRef(null),
        M = Ve.useRef(new Map()).current;
      return f.jsx(a, { scope: j, itemMap: M, collectionRef: D, children: C });
    };
  u.displayName = t;
  const h = e + "CollectionSlot",
    p = Ve.forwardRef((N, j) => {
      const { scope: C, children: D } = N,
        M = c(h, C),
        T = En(j, M.collectionRef);
      return f.jsx(vi, { ref: T, children: D });
    });
  p.displayName = h;
  const y = e + "CollectionItemSlot",
    g = "data-radix-collection-item",
    w = Ve.forwardRef((N, j) => {
      const { scope: C, children: D, ...M } = N,
        T = Ve.useRef(null),
        O = En(j, T),
        W = c(y, C);
      return (Ve.useEffect(() => (W.itemMap.set(T, { ref: T, ...M }), () => void W.itemMap.delete(T))), f.jsx(vi, { [g]: "", ref: O, children: D }));
    });
  w.displayName = y;
  function x(N) {
    const j = c(e + "CollectionConsumer", N);
    return Ve.useCallback(() => {
      const D = j.collectionRef.current;
      if (!D) return [];
      const M = Array.from(D.querySelectorAll(`[${g}]`));
      return Array.from(j.itemMap.values()).sort((W, $) => M.indexOf(W.ref.current) - M.indexOf($.ref.current));
    }, [j.collectionRef, j.itemMap]);
  }
  return [{ Provider: u, Slot: p, ItemSlot: w }, x, o];
}
function Fn(e, t, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), s === !1 || !a.defaultPrevented)) return t == null ? void 0 : t(a);
  };
}
function os(e) {
  const t = k.useRef(e);
  return (
    k.useEffect(() => {
      t.current = e;
    }),
    k.useMemo(
      () =>
        (...s) => {
          var o;
          return (o = t.current) == null ? void 0 : o.call(t, ...s);
        },
      [],
    )
  );
}
function Bl({ prop: e, defaultProp: t, onChange: s = () => {} }) {
  const [o, a] = xA({ defaultProp: t, onChange: s }),
    c = e !== void 0,
    u = c ? e : o,
    h = os(s),
    p = k.useCallback(
      (y) => {
        if (c) {
          const w = typeof y == "function" ? y(e) : y;
          w !== e && h(w);
        } else a(y);
      },
      [c, e, a, h],
    );
  return [u, p];
}
function xA({ defaultProp: e, onChange: t }) {
  const s = k.useState(e),
    [o] = s,
    a = k.useRef(o),
    c = os(t);
  return (
    k.useEffect(() => {
      a.current !== o && (c(o), (a.current = o));
    }, [o, a, c]),
    s
  );
}
var $x = Jy();
const bA = Zy($x);
var kA = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  Ot = kA.reduce((e, t) => {
    const s = k.forwardRef((o, a) => {
      const { asChild: c, ...u } = o,
        h = c ? vi : t;
      return (typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(h, { ...u, ref: a }));
    });
    return ((s.displayName = `Primitive.${t}`), { ...e, [t]: s });
  }, {});
function CA(e, t) {
  e && $x.flushSync(() => e.dispatchEvent(t));
}
var wi = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {};
function SA(e, t) {
  return k.useReducer((s, o) => t[s][o] ?? s, e);
}
var Di = (e) => {
  const { present: t, children: s } = e,
    o = EA(t),
    a = typeof s == "function" ? s({ present: o.isPresent }) : k.Children.only(s),
    c = En(o.ref, NA(a));
  return typeof s == "function" || o.isPresent ? k.cloneElement(a, { ref: c }) : null;
};
Di.displayName = "Presence";
function EA(e) {
  const [t, s] = k.useState(),
    o = k.useRef({}),
    a = k.useRef(e),
    c = k.useRef("none"),
    u = e ? "mounted" : "unmounted",
    [h, p] = SA(u, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return (
    k.useEffect(() => {
      const y = qa(o.current);
      c.current = h === "mounted" ? y : "none";
    }, [h]),
    wi(() => {
      const y = o.current,
        g = a.current;
      if (g !== e) {
        const x = c.current,
          N = qa(y);
        (e ? p("MOUNT") : N === "none" || (y == null ? void 0 : y.display) === "none" ? p("UNMOUNT") : p(g && x !== N ? "ANIMATION_OUT" : "UNMOUNT"), (a.current = e));
      }
    }, [e, p]),
    wi(() => {
      if (t) {
        let y;
        const g = t.ownerDocument.defaultView ?? window,
          w = (N) => {
            const C = qa(o.current).includes(N.animationName);
            if (N.target === t && C && (p("ANIMATION_END"), !a.current)) {
              const D = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (y = g.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = D);
                })));
            }
          },
          x = (N) => {
            N.target === t && (c.current = qa(o.current));
          };
        return (
          t.addEventListener("animationstart", x),
          t.addEventListener("animationcancel", w),
          t.addEventListener("animationend", w),
          () => {
            (g.clearTimeout(y), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", w), t.removeEventListener("animationend", w));
          }
        );
      } else p("ANIMATION_END");
    }, [t, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: k.useCallback((y) => {
        (y && (o.current = getComputedStyle(y)), s(y));
      }, []),
    }
  );
}
function qa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function NA(e) {
  var o, a;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
    s = t && "isReactWarning" in t && t.isReactWarning;
  return s ? e.ref : ((t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get), (s = t && "isReactWarning" in t && t.isReactWarning), s ? e.props.ref : e.props.ref || e.ref);
}
var PA = X2.useId || (() => {}),
  jA = 0;
function di(e) {
  const [t, s] = k.useState(PA());
  return (
    wi(() => {
      s((o) => o ?? String(jA++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
var Wf = "Collapsible",
  [AA, Ux] = Fl(Wf),
  [TA, Hf] = AA(Wf),
  Wx = k.forwardRef((e, t) => {
    const { __scopeCollapsible: s, open: o, defaultOpen: a, disabled: c, onOpenChange: u, ...h } = e,
      [p = !1, y] = Bl({ prop: o, defaultProp: a, onChange: u });
    return f.jsx(TA, { scope: s, disabled: c, contentId: di(), open: p, onOpenToggle: k.useCallback(() => y((g) => !g), [y]), children: f.jsx(Ot.div, { "data-state": Gf(p), "data-disabled": c ? "" : void 0, ...h, ref: t }) });
  });
Wx.displayName = Wf;
var Hx = "CollapsibleTrigger",
  Kx = k.forwardRef((e, t) => {
    const { __scopeCollapsible: s, ...o } = e,
      a = Hf(Hx, s);
    return f.jsx(Ot.button, { type: "button", "aria-controls": a.contentId, "aria-expanded": a.open || !1, "data-state": Gf(a.open), "data-disabled": a.disabled ? "" : void 0, disabled: a.disabled, ...o, ref: t, onClick: Fn(e.onClick, a.onOpenToggle) });
  });
Kx.displayName = Hx;
var Kf = "CollapsibleContent",
  Gx = k.forwardRef((e, t) => {
    const { forceMount: s, ...o } = e,
      a = Hf(Kf, e.__scopeCollapsible);
    return f.jsx(Di, { present: s || a.open, children: ({ present: c }) => f.jsx(DA, { ...o, ref: t, present: c }) });
  });
Gx.displayName = Kf;
var DA = k.forwardRef((e, t) => {
  const { __scopeCollapsible: s, present: o, children: a, ...c } = e,
    u = Hf(Kf, s),
    [h, p] = k.useState(o),
    y = k.useRef(null),
    g = En(t, y),
    w = k.useRef(0),
    x = w.current,
    N = k.useRef(0),
    j = N.current,
    C = u.open || h,
    D = k.useRef(C),
    M = k.useRef(void 0);
  return (
    k.useEffect(() => {
      const T = requestAnimationFrame(() => (D.current = !1));
      return () => cancelAnimationFrame(T);
    }, []),
    wi(() => {
      const T = y.current;
      if (T) {
        ((M.current = M.current || { transitionDuration: T.style.transitionDuration, animationName: T.style.animationName }), (T.style.transitionDuration = "0s"), (T.style.animationName = "none"));
        const O = T.getBoundingClientRect();
        ((w.current = O.height), (N.current = O.width), D.current || ((T.style.transitionDuration = M.current.transitionDuration), (T.style.animationName = M.current.animationName)), p(o));
      }
    }, [u.open, o]),
    f.jsx(Ot.div, { "data-state": Gf(u.open), "data-disabled": u.disabled ? "" : void 0, id: u.contentId, hidden: !C, ...c, ref: g, style: { "--radix-collapsible-content-height": x ? `${x}px` : void 0, "--radix-collapsible-content-width": j ? `${j}px` : void 0, ...e.style }, children: C && a })
  );
});
function Gf(e) {
  return e ? "open" : "closed";
}
var RA = Wx,
  MA = Kx,
  LA = Gx,
  _A = k.createContext(void 0);
function IA(e) {
  const t = k.useContext(_A);
  return e || t || "ltr";
}
var rr = "Accordion",
  VA = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [qf, OA, FA] = wA(rr),
  [zl] = Fl(rr, [FA, Ux]),
  Yf = Ux(),
  qx = Ve.forwardRef((e, t) => {
    const { type: s, ...o } = e,
      a = o,
      c = o;
    return f.jsx(qf.Provider, { scope: e.__scopeAccordion, children: s === "multiple" ? f.jsx(UA, { ...c, ref: t }) : f.jsx($A, { ...a, ref: t }) });
  });
qx.displayName = rr;
var [Yx, BA] = zl(rr),
  [Xx, zA] = zl(rr, { collapsible: !1 }),
  $A = Ve.forwardRef((e, t) => {
    const { value: s, defaultValue: o, onValueChange: a = () => {}, collapsible: c = !1, ...u } = e,
      [h, p] = Bl({ prop: s, defaultProp: o, onChange: a });
    return f.jsx(Yx, { scope: e.__scopeAccordion, value: h ? [h] : [], onItemOpen: p, onItemClose: Ve.useCallback(() => c && p(""), [c, p]), children: f.jsx(Xx, { scope: e.__scopeAccordion, collapsible: c, children: f.jsx(Qx, { ...u, ref: t }) }) });
  }),
  UA = Ve.forwardRef((e, t) => {
    const { value: s, defaultValue: o, onValueChange: a = () => {}, ...c } = e,
      [u = [], h] = Bl({ prop: s, defaultProp: o, onChange: a }),
      p = Ve.useCallback((g) => h((w = []) => [...w, g]), [h]),
      y = Ve.useCallback((g) => h((w = []) => w.filter((x) => x !== g)), [h]);
    return f.jsx(Yx, { scope: e.__scopeAccordion, value: u, onItemOpen: p, onItemClose: y, children: f.jsx(Xx, { scope: e.__scopeAccordion, collapsible: !0, children: f.jsx(Qx, { ...c, ref: t }) }) });
  }),
  [WA, $l] = zl(rr),
  Qx = Ve.forwardRef((e, t) => {
    const { __scopeAccordion: s, disabled: o, dir: a, orientation: c = "vertical", ...u } = e,
      h = Ve.useRef(null),
      p = En(h, t),
      y = OA(s),
      w = IA(a) === "ltr",
      x = Fn(e.onKeyDown, (N) => {
        var B;
        if (!VA.includes(N.key)) return;
        const j = N.target,
          C = y().filter((se) => {
            var Ce;
            return !((Ce = se.ref.current) != null && Ce.disabled);
          }),
          D = C.findIndex((se) => se.ref.current === j),
          M = C.length;
        if (D === -1) return;
        N.preventDefault();
        let T = D;
        const O = 0,
          W = M - 1,
          $ = () => {
            ((T = D + 1), T > W && (T = O));
          },
          q = () => {
            ((T = D - 1), T < O && (T = W));
          };
        switch (N.key) {
          case "Home":
            T = O;
            break;
          case "End":
            T = W;
            break;
          case "ArrowRight":
            c === "horizontal" && (w ? $() : q());
            break;
          case "ArrowDown":
            c === "vertical" && $();
            break;
          case "ArrowLeft":
            c === "horizontal" && (w ? q() : $());
            break;
          case "ArrowUp":
            c === "vertical" && q();
            break;
        }
        const G = T % M;
        (B = C[G].ref.current) == null || B.focus();
      });
    return f.jsx(WA, { scope: s, disabled: o, direction: a, orientation: c, children: f.jsx(qf.Slot, { scope: s, children: f.jsx(Ot.div, { ...u, "data-orientation": c, ref: p, onKeyDown: o ? void 0 : x }) }) });
  }),
  Pl = "AccordionItem",
  [HA, Xf] = zl(Pl),
  Zx = Ve.forwardRef((e, t) => {
    const { __scopeAccordion: s, value: o, ...a } = e,
      c = $l(Pl, s),
      u = BA(Pl, s),
      h = Yf(s),
      p = di(),
      y = (o && u.value.includes(o)) || !1,
      g = c.disabled || e.disabled;
    return f.jsx(HA, {
      scope: s,
      open: y,
      disabled: g,
      triggerId: p,
      children: f.jsx(RA, {
        "data-orientation": c.orientation,
        "data-state": s0(y),
        ...h,
        ...a,
        ref: t,
        disabled: g,
        open: y,
        onOpenChange: (w) => {
          w ? u.onItemOpen(o) : u.onItemClose(o);
        },
      }),
    });
  });
Zx.displayName = Pl;
var Jx = "AccordionHeader",
  e0 = Ve.forwardRef((e, t) => {
    const { __scopeAccordion: s, ...o } = e,
      a = $l(rr, s),
      c = Xf(Jx, s);
    return f.jsx(Ot.h3, { "data-orientation": a.orientation, "data-state": s0(c.open), "data-disabled": c.disabled ? "" : void 0, ...o, ref: t });
  });
e0.displayName = Jx;
var Fd = "AccordionTrigger",
  t0 = Ve.forwardRef((e, t) => {
    const { __scopeAccordion: s, ...o } = e,
      a = $l(rr, s),
      c = Xf(Fd, s),
      u = zA(Fd, s),
      h = Yf(s);
    return f.jsx(qf.ItemSlot, { scope: s, children: f.jsx(MA, { "aria-disabled": (c.open && !u.collapsible) || void 0, "data-orientation": a.orientation, id: c.triggerId, ...h, ...o, ref: t }) });
  });
t0.displayName = Fd;
var n0 = "AccordionContent",
  r0 = Ve.forwardRef((e, t) => {
    const { __scopeAccordion: s, ...o } = e,
      a = $l(rr, s),
      c = Xf(n0, s),
      u = Yf(s);
    return f.jsx(LA, { role: "region", "aria-labelledby": c.triggerId, "data-orientation": a.orientation, ...u, ...o, ref: t, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...e.style } });
  });
r0.displayName = n0;
function s0(e) {
  return e ? "open" : "closed";
}
var KA = qx,
  GA = Zx,
  qA = e0,
  YA = t0,
  XA = r0;
function o0(e) {
  var t,
    s,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) e[t] && (s = o0(e[t])) && (o && (o += " "), (o += s));
    } else for (s in e) e[s] && (o && (o += " "), (o += s));
  return o;
}
function QA() {
  for (var e, t, s = 0, o = "", a = arguments.length; s < a; s++) (e = arguments[s]) && (t = o0(e)) && (o && (o += " "), (o += t));
  return o;
}
const Qf = "-",
  ZA = (e) => {
    const t = eT(e),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (u) => {
        const h = u.split(Qf);
        return (h[0] === "" && h.length !== 1 && h.shift(), i0(h, t) || JA(u));
      },
      getConflictingClassGroupIds: (u, h) => {
        const p = s[u] || [];
        return h && o[u] ? [...p, ...o[u]] : p;
      },
    };
  },
  i0 = (e, t) => {
    var u;
    if (e.length === 0) return t.classGroupId;
    const s = e[0],
      o = t.nextPart.get(s),
      a = o ? i0(e.slice(1), o) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    const c = e.join(Qf);
    return (u = t.validators.find(({ validator: h }) => h(c))) == null ? void 0 : u.classGroupId;
  },
  _y = /^\[(.+)\]$/,
  JA = (e) => {
    if (_y.test(e)) {
      const t = _y.exec(e)[1],
        s = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  eT = (e) => {
    const { theme: t, classGroups: s } = e,
      o = { nextPart: new Map(), validators: [] };
    for (const a in s) Bd(s[a], o, a, t);
    return o;
  },
  Bd = (e, t, s, o) => {
    e.forEach((a) => {
      if (typeof a == "string") {
        const c = a === "" ? t : Iy(t, a);
        c.classGroupId = s;
        return;
      }
      if (typeof a == "function") {
        if (tT(a)) {
          Bd(a(o), t, s, o);
          return;
        }
        t.validators.push({ validator: a, classGroupId: s });
        return;
      }
      Object.entries(a).forEach(([c, u]) => {
        Bd(u, Iy(t, c), s, o);
      });
    });
  },
  Iy = (e, t) => {
    let s = e;
    return (
      t.split(Qf).forEach((o) => {
        (s.nextPart.has(o) || s.nextPart.set(o, { nextPart: new Map(), validators: [] }), (s = s.nextPart.get(o)));
      }),
      s
    );
  },
  tT = (e) => e.isThemeGetter,
  nT = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      s = new Map(),
      o = new Map();
    const a = (c, u) => {
      (s.set(c, u), t++, t > e && ((t = 0), (o = s), (s = new Map())));
    };
    return {
      get(c) {
        let u = s.get(c);
        if (u !== void 0) return u;
        if ((u = o.get(c)) !== void 0) return (a(c, u), u);
      },
      set(c, u) {
        s.has(c) ? s.set(c, u) : a(c, u);
      },
    };
  },
  zd = "!",
  $d = ":",
  rT = $d.length,
  sT = (e) => {
    const { prefix: t, experimentalParseClassName: s } = e;
    let o = (a) => {
      const c = [];
      let u = 0,
        h = 0,
        p = 0,
        y;
      for (let j = 0; j < a.length; j++) {
        let C = a[j];
        if (u === 0 && h === 0) {
          if (C === $d) {
            (c.push(a.slice(p, j)), (p = j + rT));
            continue;
          }
          if (C === "/") {
            y = j;
            continue;
          }
        }
        C === "[" ? u++ : C === "]" ? u-- : C === "(" ? h++ : C === ")" && h--;
      }
      const g = c.length === 0 ? a : a.substring(p),
        w = oT(g),
        x = w !== g,
        N = y && y > p ? y - p : void 0;
      return { modifiers: c, hasImportantModifier: x, baseClassName: w, maybePostfixModifierPosition: N };
    };
    if (t) {
      const a = t + $d,
        c = o;
      o = (u) => (u.startsWith(a) ? c(u.substring(a.length)) : { isExternal: !0, modifiers: [], hasImportantModifier: !1, baseClassName: u, maybePostfixModifierPosition: void 0 });
    }
    if (s) {
      const a = o;
      o = (c) => s({ className: c, parseClassName: a });
    }
    return o;
  },
  oT = (e) => (e.endsWith(zd) ? e.substring(0, e.length - 1) : e.startsWith(zd) ? e.substring(1) : e),
  iT = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const a = [];
      let c = [];
      return (
        o.forEach((u) => {
          u[0] === "[" || t[u] ? (a.push(...c.sort(), u), (c = [])) : c.push(u);
        }),
        a.push(...c.sort()),
        a
      );
    };
  },
  aT = (e) => ({ cache: nT(e.cacheSize), parseClassName: sT(e), sortModifiers: iT(e), ...ZA(e) }),
  lT = /\s+/,
  cT = (e, t) => {
    const { parseClassName: s, getClassGroupId: o, getConflictingClassGroupIds: a, sortModifiers: c } = t,
      u = [],
      h = e.trim().split(lT);
    let p = "";
    for (let y = h.length - 1; y >= 0; y -= 1) {
      const g = h[y],
        { isExternal: w, modifiers: x, hasImportantModifier: N, baseClassName: j, maybePostfixModifierPosition: C } = s(g);
      if (w) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let D = !!C,
        M = o(D ? j.substring(0, C) : j);
      if (!M) {
        if (!D) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((M = o(j)), !M)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        D = !1;
      }
      const T = c(x).join(":"),
        O = N ? T + zd : T,
        W = O + M;
      if (u.includes(W)) continue;
      u.push(W);
      const $ = a(M, D);
      for (let q = 0; q < $.length; ++q) {
        const G = $[q];
        u.push(O + G);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function uT() {
  let e = 0,
    t,
    s,
    o = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (s = a0(t)) && (o && (o += " "), (o += s));
  return o;
}
const a0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    s = "";
  for (let o = 0; o < e.length; o++) e[o] && (t = a0(e[o])) && (s && (s += " "), (s += t));
  return s;
};
function dT(e, ...t) {
  let s,
    o,
    a,
    c = u;
  function u(p) {
    const y = t.reduce((g, w) => w(g), e());
    return ((s = aT(y)), (o = s.cache.get), (a = s.cache.set), (c = h), h(p));
  }
  function h(p) {
    const y = o(p);
    if (y) return y;
    const g = cT(p, s);
    return (a(p, g), g);
  }
  return function () {
    return c(uT.apply(null, arguments));
  };
}
const ht = (e) => {
    const t = (s) => s[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  l0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  c0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  fT = /^\d+\/\d+$/,
  hT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  mT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  pT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  gT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  yT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $s = (e) => fT.test(e),
  Ne = (e) => !!e && !Number.isNaN(Number(e)),
  Cr = (e) => !!e && Number.isInteger(Number(e)),
  rd = (e) => e.endsWith("%") && Ne(e.slice(0, -1)),
  Jn = (e) => hT.test(e),
  vT = () => !0,
  wT = (e) => mT.test(e) && !pT.test(e),
  u0 = () => !1,
  xT = (e) => gT.test(e),
  bT = (e) => yT.test(e),
  kT = (e) => !le(e) && !ce(e),
  CT = (e) => uo(e, h0, u0),
  le = (e) => l0.test(e),
  Xr = (e) => uo(e, m0, wT),
  sd = (e) => uo(e, jT, Ne),
  Vy = (e) => uo(e, d0, u0),
  ST = (e) => uo(e, f0, bT),
  Ya = (e) => uo(e, p0, xT),
  ce = (e) => c0.test(e),
  ni = (e) => fo(e, m0),
  ET = (e) => fo(e, AT),
  Oy = (e) => fo(e, d0),
  NT = (e) => fo(e, h0),
  PT = (e) => fo(e, f0),
  Xa = (e) => fo(e, p0, !0),
  uo = (e, t, s) => {
    const o = l0.exec(e);
    return o ? (o[1] ? t(o[1]) : s(o[2])) : !1;
  },
  fo = (e, t, s = !1) => {
    const o = c0.exec(e);
    return o ? (o[1] ? t(o[1]) : s) : !1;
  },
  d0 = (e) => e === "position" || e === "percentage",
  f0 = (e) => e === "image" || e === "url",
  h0 = (e) => e === "length" || e === "size" || e === "bg-size",
  m0 = (e) => e === "length",
  jT = (e) => e === "number",
  AT = (e) => e === "family-name",
  p0 = (e) => e === "shadow",
  TT = () => {
    const e = ht("color"),
      t = ht("font"),
      s = ht("text"),
      o = ht("font-weight"),
      a = ht("tracking"),
      c = ht("leading"),
      u = ht("breakpoint"),
      h = ht("container"),
      p = ht("spacing"),
      y = ht("radius"),
      g = ht("shadow"),
      w = ht("inset-shadow"),
      x = ht("text-shadow"),
      N = ht("drop-shadow"),
      j = ht("blur"),
      C = ht("perspective"),
      D = ht("aspect"),
      M = ht("ease"),
      T = ht("animate"),
      O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      W = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      $ = () => [...W(), ce, le],
      q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", "contain", "none"],
      B = () => [ce, le, p],
      se = () => [$s, "full", "auto", ...B()],
      Ce = () => [Cr, "none", "subgrid", ce, le],
      Te = () => ["auto", { span: ["full", Cr, ce, le] }, Cr, ce, le],
      ge = () => [Cr, "auto", ce, le],
      ye = () => ["auto", "min", "max", "fr", ce, le],
      Se = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      De = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      Pe = () => ["auto", ...B()],
      he = () => [$s, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()],
      V = () => [e, ce, le],
      oe = () => [...W(), Oy, Vy, { position: [ce, le] }],
      Z = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      A = () => ["auto", "cover", "contain", NT, CT, { size: [ce, le] }],
      U = () => [rd, ni, Xr],
      me = () => ["", "none", "full", y, ce, le],
      ve = () => ["", Ne, ni, Xr],
      Ee = () => ["solid", "dashed", "dotted", "double"],
      Ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      be = () => [Ne, rd, Oy, Vy],
      Me = () => ["", "none", j, ce, le],
      Le = () => ["none", Ne, ce, le],
      tt = () => ["none", Ne, ce, le],
      Jt = () => [Ne, ce, le],
      jn = () => [$s, "full", ...B()];
    return {
      cacheSize: 500,
      theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Jn], breakpoint: [Jn], color: [vT], container: [Jn], "drop-shadow": [Jn], ease: ["in", "out", "in-out"], font: [kT], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Jn], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Jn], shadow: [Jn], spacing: ["px", Ne], text: [Jn], "text-shadow": [Jn], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", $s, le, ce, D] }],
        container: ["container"],
        columns: [{ columns: [Ne, le, ce, h] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: $() }],
        overflow: [{ overflow: q() }],
        "overflow-x": [{ "overflow-x": q() }],
        "overflow-y": [{ "overflow-y": q() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: se() }],
        "inset-x": [{ "inset-x": se() }],
        "inset-y": [{ "inset-y": se() }],
        start: [{ start: se() }],
        end: [{ end: se() }],
        top: [{ top: se() }],
        right: [{ right: se() }],
        bottom: [{ bottom: se() }],
        left: [{ left: se() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Cr, "auto", ce, le] }],
        basis: [{ basis: [$s, "full", "auto", h, ...B()] }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Ne, $s, "auto", "initial", "none", le] }],
        grow: [{ grow: ["", Ne, ce, le] }],
        shrink: [{ shrink: ["", Ne, ce, le] }],
        order: [{ order: [Cr, "first", "last", "none", ce, le] }],
        "grid-cols": [{ "grid-cols": Ce() }],
        "col-start-end": [{ col: Te() }],
        "col-start": [{ "col-start": ge() }],
        "col-end": [{ "col-end": ge() }],
        "grid-rows": [{ "grid-rows": Ce() }],
        "row-start-end": [{ row: Te() }],
        "row-start": [{ "row-start": ge() }],
        "row-end": [{ "row-end": ge() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ye() }],
        "auto-rows": [{ "auto-rows": ye() }],
        gap: [{ gap: B() }],
        "gap-x": [{ "gap-x": B() }],
        "gap-y": [{ "gap-y": B() }],
        "justify-content": [{ justify: [...Se(), "normal"] }],
        "justify-items": [{ "justify-items": [...De(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...De()] }],
        "align-content": [{ content: ["normal", ...Se()] }],
        "align-items": [{ items: [...De(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...De(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Se() }],
        "place-items": [{ "place-items": [...De(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...De()] }],
        p: [{ p: B() }],
        px: [{ px: B() }],
        py: [{ py: B() }],
        ps: [{ ps: B() }],
        pe: [{ pe: B() }],
        pt: [{ pt: B() }],
        pr: [{ pr: B() }],
        pb: [{ pb: B() }],
        pl: [{ pl: B() }],
        m: [{ m: Pe() }],
        mx: [{ mx: Pe() }],
        my: [{ my: Pe() }],
        ms: [{ ms: Pe() }],
        me: [{ me: Pe() }],
        mt: [{ mt: Pe() }],
        mr: [{ mr: Pe() }],
        mb: [{ mb: Pe() }],
        ml: [{ ml: Pe() }],
        "space-x": [{ "space-x": B() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": B() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: he() }],
        w: [{ w: [h, "screen", ...he()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...he()] }],
        "max-w": [{ "max-w": [h, "screen", "none", "prose", { screen: [u] }, ...he()] }],
        h: [{ h: ["screen", ...he()] }],
        "min-h": [{ "min-h": ["screen", "none", ...he()] }],
        "max-h": [{ "max-h": ["screen", ...he()] }],
        "font-size": [{ text: ["base", s, ni, Xr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, ce, sd] }],
        "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rd, le] }],
        "font-family": [{ font: [ET, le, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [a, ce, le] }],
        "line-clamp": [{ "line-clamp": [Ne, "none", ce, sd] }],
        leading: [{ leading: [c, ...B()] }],
        "list-image": [{ "list-image": ["none", ce, le] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ce, le] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "placeholder-color": [{ placeholder: V() }],
        "text-color": [{ text: V() }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...Ee(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: [Ne, "from-font", "auto", ce, Xr] }],
        "text-decoration-color": [{ decoration: V() }],
        "underline-offset": [{ "underline-offset": [Ne, "auto", ce, le] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: B() }],
        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce, le] }],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ce, le] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: oe() }],
        "bg-repeat": [{ bg: Z() }],
        "bg-size": [{ bg: A() }],
        "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Cr, ce, le], radial: ["", ce, le], conic: [Cr, ce, le] }, PT, ST] }],
        "bg-color": [{ bg: V() }],
        "gradient-from-pos": [{ from: U() }],
        "gradient-via-pos": [{ via: U() }],
        "gradient-to-pos": [{ to: U() }],
        "gradient-from": [{ from: V() }],
        "gradient-via": [{ via: V() }],
        "gradient-to": [{ to: V() }],
        rounded: [{ rounded: me() }],
        "rounded-s": [{ "rounded-s": me() }],
        "rounded-e": [{ "rounded-e": me() }],
        "rounded-t": [{ "rounded-t": me() }],
        "rounded-r": [{ "rounded-r": me() }],
        "rounded-b": [{ "rounded-b": me() }],
        "rounded-l": [{ "rounded-l": me() }],
        "rounded-ss": [{ "rounded-ss": me() }],
        "rounded-se": [{ "rounded-se": me() }],
        "rounded-ee": [{ "rounded-ee": me() }],
        "rounded-es": [{ "rounded-es": me() }],
        "rounded-tl": [{ "rounded-tl": me() }],
        "rounded-tr": [{ "rounded-tr": me() }],
        "rounded-br": [{ "rounded-br": me() }],
        "rounded-bl": [{ "rounded-bl": me() }],
        "border-w": [{ border: ve() }],
        "border-w-x": [{ "border-x": ve() }],
        "border-w-y": [{ "border-y": ve() }],
        "border-w-s": [{ "border-s": ve() }],
        "border-w-e": [{ "border-e": ve() }],
        "border-w-t": [{ "border-t": ve() }],
        "border-w-r": [{ "border-r": ve() }],
        "border-w-b": [{ "border-b": ve() }],
        "border-w-l": [{ "border-l": ve() }],
        "divide-x": [{ "divide-x": ve() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ve() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ee(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ee(), "hidden", "none"] }],
        "border-color": [{ border: V() }],
        "border-color-x": [{ "border-x": V() }],
        "border-color-y": [{ "border-y": V() }],
        "border-color-s": [{ "border-s": V() }],
        "border-color-e": [{ "border-e": V() }],
        "border-color-t": [{ "border-t": V() }],
        "border-color-r": [{ "border-r": V() }],
        "border-color-b": [{ "border-b": V() }],
        "border-color-l": [{ "border-l": V() }],
        "divide-color": [{ divide: V() }],
        "outline-style": [{ outline: [...Ee(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Ne, ce, le] }],
        "outline-w": [{ outline: ["", Ne, ni, Xr] }],
        "outline-color": [{ outline: V() }],
        shadow: [{ shadow: ["", "none", g, Xa, Ya] }],
        "shadow-color": [{ shadow: V() }],
        "inset-shadow": [{ "inset-shadow": ["none", w, Xa, Ya] }],
        "inset-shadow-color": [{ "inset-shadow": V() }],
        "ring-w": [{ ring: ve() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: V() }],
        "ring-offset-w": [{ "ring-offset": [Ne, Xr] }],
        "ring-offset-color": [{ "ring-offset": V() }],
        "inset-ring-w": [{ "inset-ring": ve() }],
        "inset-ring-color": [{ "inset-ring": V() }],
        "text-shadow": [{ "text-shadow": ["none", x, Xa, Ya] }],
        "text-shadow-color": [{ "text-shadow": V() }],
        opacity: [{ opacity: [Ne, ce, le] }],
        "mix-blend": [{ "mix-blend": [...Ae(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": Ae() }],
        "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"],
        "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
        "mask-image-linear-pos": [{ "mask-linear": [Ne] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": be() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": be() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": V() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": V() }],
        "mask-image-t-from-pos": [{ "mask-t-from": be() }],
        "mask-image-t-to-pos": [{ "mask-t-to": be() }],
        "mask-image-t-from-color": [{ "mask-t-from": V() }],
        "mask-image-t-to-color": [{ "mask-t-to": V() }],
        "mask-image-r-from-pos": [{ "mask-r-from": be() }],
        "mask-image-r-to-pos": [{ "mask-r-to": be() }],
        "mask-image-r-from-color": [{ "mask-r-from": V() }],
        "mask-image-r-to-color": [{ "mask-r-to": V() }],
        "mask-image-b-from-pos": [{ "mask-b-from": be() }],
        "mask-image-b-to-pos": [{ "mask-b-to": be() }],
        "mask-image-b-from-color": [{ "mask-b-from": V() }],
        "mask-image-b-to-color": [{ "mask-b-to": V() }],
        "mask-image-l-from-pos": [{ "mask-l-from": be() }],
        "mask-image-l-to-pos": [{ "mask-l-to": be() }],
        "mask-image-l-from-color": [{ "mask-l-from": V() }],
        "mask-image-l-to-color": [{ "mask-l-to": V() }],
        "mask-image-x-from-pos": [{ "mask-x-from": be() }],
        "mask-image-x-to-pos": [{ "mask-x-to": be() }],
        "mask-image-x-from-color": [{ "mask-x-from": V() }],
        "mask-image-x-to-color": [{ "mask-x-to": V() }],
        "mask-image-y-from-pos": [{ "mask-y-from": be() }],
        "mask-image-y-to-pos": [{ "mask-y-to": be() }],
        "mask-image-y-from-color": [{ "mask-y-from": V() }],
        "mask-image-y-to-color": [{ "mask-y-to": V() }],
        "mask-image-radial": [{ "mask-radial": [ce, le] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": be() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": be() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": V() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": V() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }],
        "mask-image-radial-pos": [{ "mask-radial-at": W() }],
        "mask-image-conic-pos": [{ "mask-conic": [Ne] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": be() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": be() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": V() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": V() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
        "mask-position": [{ mask: oe() }],
        "mask-repeat": [{ mask: Z() }],
        "mask-size": [{ mask: A() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ce, le] }],
        filter: [{ filter: ["", "none", ce, le] }],
        blur: [{ blur: Me() }],
        brightness: [{ brightness: [Ne, ce, le] }],
        contrast: [{ contrast: [Ne, ce, le] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", N, Xa, Ya] }],
        "drop-shadow-color": [{ "drop-shadow": V() }],
        grayscale: [{ grayscale: ["", Ne, ce, le] }],
        "hue-rotate": [{ "hue-rotate": [Ne, ce, le] }],
        invert: [{ invert: ["", Ne, ce, le] }],
        saturate: [{ saturate: [Ne, ce, le] }],
        sepia: [{ sepia: ["", Ne, ce, le] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ce, le] }],
        "backdrop-blur": [{ "backdrop-blur": Me() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Ne, ce, le] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Ne, ce, le] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ne, ce, le] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ne, ce, le] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Ne, ce, le] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Ne, ce, le] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Ne, ce, le] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Ne, ce, le] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": B() }],
        "border-spacing-x": [{ "border-spacing-x": B() }],
        "border-spacing-y": [{ "border-spacing-y": B() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ce, le] }],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Ne, "initial", ce, le] }],
        ease: [{ ease: ["linear", "initial", M, ce, le] }],
        delay: [{ delay: [Ne, ce, le] }],
        animate: [{ animate: ["none", T, ce, le] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [C, ce, le] }],
        "perspective-origin": [{ "perspective-origin": $() }],
        rotate: [{ rotate: Le() }],
        "rotate-x": [{ "rotate-x": Le() }],
        "rotate-y": [{ "rotate-y": Le() }],
        "rotate-z": [{ "rotate-z": Le() }],
        scale: [{ scale: tt() }],
        "scale-x": [{ "scale-x": tt() }],
        "scale-y": [{ "scale-y": tt() }],
        "scale-z": [{ "scale-z": tt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Jt() }],
        "skew-x": [{ "skew-x": Jt() }],
        "skew-y": [{ "skew-y": Jt() }],
        transform: [{ transform: [ce, le, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: $() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: jn() }],
        "translate-x": [{ "translate-x": jn() }],
        "translate-y": [{ "translate-y": jn() }],
        "translate-z": [{ "translate-z": jn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: V() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: V() }],
        "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }],
        cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce, le] }],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": B() }],
        "scroll-mx": [{ "scroll-mx": B() }],
        "scroll-my": [{ "scroll-my": B() }],
        "scroll-ms": [{ "scroll-ms": B() }],
        "scroll-me": [{ "scroll-me": B() }],
        "scroll-mt": [{ "scroll-mt": B() }],
        "scroll-mr": [{ "scroll-mr": B() }],
        "scroll-mb": [{ "scroll-mb": B() }],
        "scroll-ml": [{ "scroll-ml": B() }],
        "scroll-p": [{ "scroll-p": B() }],
        "scroll-px": [{ "scroll-px": B() }],
        "scroll-py": [{ "scroll-py": B() }],
        "scroll-ps": [{ "scroll-ps": B() }],
        "scroll-pe": [{ "scroll-pe": B() }],
        "scroll-pt": [{ "scroll-pt": B() }],
        "scroll-pr": [{ "scroll-pr": B() }],
        "scroll-pb": [{ "scroll-pb": B() }],
        "scroll-pl": [{ "scroll-pl": B() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", ce, le] }],
        fill: [{ fill: ["none", ...V()] }],
        "stroke-w": [{ stroke: [Ne, ni, Xr, sd] }],
        stroke: [{ stroke: ["none", ...V()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"],
    };
  },
  DT = dT(TT);
function $n(...e) {
  return DT(QA(e));
}
function Fy({ ...e }) {
  return f.jsx(KA, { "data-slot": "accordion", ...e });
}
function an({ className: e, ...t }) {
  return f.jsx(GA, { "data-slot": "accordion-item", className: $n("border-b last:border-b-0", e), ...t });
}
function ln({ className: e, children: t, ...s }) {
  return f.jsx(qA, { className: "flex", children: f.jsxs(YA, { "data-slot": "accordion-trigger", className: $n("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", e), ...s, children: [t, f.jsx(s1, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })] }) });
}
function cn({ className: e, children: t, ...s }) {
  return f.jsx(XA, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...s, children: f.jsx("div", { className: $n("pt-0 pb-4", e), children: t }) });
}
function RT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const s = os(e);
  k.useEffect(() => {
    const o = (a) => {
      a.key === "Escape" && s(a);
    };
    return (t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 }));
  }, [s, t]);
}
var MT = "DismissableLayer",
  Ud = "dismissableLayer.update",
  LT = "dismissableLayer.pointerDownOutside",
  _T = "dismissableLayer.focusOutside",
  By,
  g0 = k.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  y0 = k.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: s = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: c, onInteractOutside: u, onDismiss: h, ...p } = e,
      y = k.useContext(g0),
      [g, w] = k.useState(null),
      x = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
      [, N] = k.useState({}),
      j = En(t, (G) => w(G)),
      C = Array.from(y.layers),
      [D] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = C.indexOf(D),
      T = g ? C.indexOf(g) : -1,
      O = y.layersWithOutsidePointerEventsDisabled.size > 0,
      W = T >= M,
      $ = OT((G) => {
        const B = G.target,
          se = [...y.branches].some((Ce) => Ce.contains(B));
        !W || se || (a == null || a(G), u == null || u(G), G.defaultPrevented || h == null || h());
      }, x),
      q = FT((G) => {
        const B = G.target;
        [...y.branches].some((Ce) => Ce.contains(B)) || (c == null || c(G), u == null || u(G), G.defaultPrevented || h == null || h());
      }, x);
    return (
      RT((G) => {
        T === y.layers.size - 1 && (o == null || o(G), !G.defaultPrevented && h && (G.preventDefault(), h()));
      }, x),
      k.useEffect(() => {
        if (g)
          return (
            s && (y.layersWithOutsidePointerEventsDisabled.size === 0 && ((By = x.body.style.pointerEvents), (x.body.style.pointerEvents = "none")), y.layersWithOutsidePointerEventsDisabled.add(g)),
            y.layers.add(g),
            zy(),
            () => {
              s && y.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = By);
            }
          );
      }, [g, x, s, y]),
      k.useEffect(
        () => () => {
          g && (y.layers.delete(g), y.layersWithOutsidePointerEventsDisabled.delete(g), zy());
        },
        [g, y],
      ),
      k.useEffect(() => {
        const G = () => N({});
        return (document.addEventListener(Ud, G), () => document.removeEventListener(Ud, G));
      }, []),
      f.jsx(Ot.div, { ...p, ref: j, style: { pointerEvents: O ? (W ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: Fn(e.onFocusCapture, q.onFocusCapture), onBlurCapture: Fn(e.onBlurCapture, q.onBlurCapture), onPointerDownCapture: Fn(e.onPointerDownCapture, $.onPointerDownCapture) })
    );
  });
y0.displayName = MT;
var IT = "DismissableLayerBranch",
  VT = k.forwardRef((e, t) => {
    const s = k.useContext(g0),
      o = k.useRef(null),
      a = En(t, o);
    return (
      k.useEffect(() => {
        const c = o.current;
        if (c)
          return (
            s.branches.add(c),
            () => {
              s.branches.delete(c);
            }
          );
      }, [s.branches]),
      f.jsx(Ot.div, { ...e, ref: a })
    );
  });
VT.displayName = IT;
function OT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const s = os(e),
    o = k.useRef(!1),
    a = k.useRef(() => {});
  return (
    k.useEffect(() => {
      const c = (h) => {
          if (h.target && !o.current) {
            let p = function () {
              v0(LT, s, y, { discrete: !0 });
            };
            const y = { originalEvent: h };
            h.pointerType === "touch" ? (t.removeEventListener("click", a.current), (a.current = p), t.addEventListener("click", a.current, { once: !0 })) : p();
          } else t.removeEventListener("click", a.current);
          o.current = !1;
        },
        u = window.setTimeout(() => {
          t.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        (window.clearTimeout(u), t.removeEventListener("pointerdown", c), t.removeEventListener("click", a.current));
      };
    }, [t, s]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function FT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const s = os(e),
    o = k.useRef(!1);
  return (
    k.useEffect(() => {
      const a = (c) => {
        c.target && !o.current && v0(_T, s, { originalEvent: c }, { discrete: !1 });
      };
      return (t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a));
    }, [t, s]),
    { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
  );
}
function zy() {
  const e = new CustomEvent(Ud);
  document.dispatchEvent(e);
}
function v0(e, t, s, { discrete: o }) {
  const a = s.originalEvent.target,
    c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: s });
  (t && a.addEventListener(e, t, { once: !0 }), o ? CA(a, c) : a.dispatchEvent(c));
}
var od = "focusScope.autoFocusOnMount",
  id = "focusScope.autoFocusOnUnmount",
  $y = { bubbles: !1, cancelable: !0 },
  BT = "FocusScope",
  w0 = k.forwardRef((e, t) => {
    const { loop: s = !1, trapped: o = !1, onMountAutoFocus: a, onUnmountAutoFocus: c, ...u } = e,
      [h, p] = k.useState(null),
      y = os(a),
      g = os(c),
      w = k.useRef(null),
      x = En(t, (C) => p(C)),
      N = k.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (k.useEffect(() => {
      if (o) {
        let C = function (O) {
            if (N.paused || !h) return;
            const W = O.target;
            h.contains(W) ? (w.current = W) : Er(w.current, { select: !0 });
          },
          D = function (O) {
            if (N.paused || !h) return;
            const W = O.relatedTarget;
            W !== null && (h.contains(W) || Er(w.current, { select: !0 }));
          },
          M = function (O) {
            if (document.activeElement === document.body) for (const $ of O) $.removedNodes.length > 0 && Er(h);
          };
        (document.addEventListener("focusin", C), document.addEventListener("focusout", D));
        const T = new MutationObserver(M);
        return (
          h && T.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", C), document.removeEventListener("focusout", D), T.disconnect());
          }
        );
      }
    }, [o, h, N.paused]),
      k.useEffect(() => {
        if (h) {
          Wy.add(N);
          const C = document.activeElement;
          if (!h.contains(C)) {
            const M = new CustomEvent(od, $y);
            (h.addEventListener(od, y), h.dispatchEvent(M), M.defaultPrevented || (zT(KT(x0(h)), { select: !0 }), document.activeElement === C && Er(h)));
          }
          return () => {
            (h.removeEventListener(od, y),
              setTimeout(() => {
                const M = new CustomEvent(id, $y);
                (h.addEventListener(id, g), h.dispatchEvent(M), M.defaultPrevented || Er(C ?? document.body, { select: !0 }), h.removeEventListener(id, g), Wy.remove(N));
              }, 0));
          };
        }
      }, [h, y, g, N]));
    const j = k.useCallback(
      (C) => {
        if ((!s && !o) || N.paused) return;
        const D = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey,
          M = document.activeElement;
        if (D && M) {
          const T = C.currentTarget,
            [O, W] = $T(T);
          O && W ? (!C.shiftKey && M === W ? (C.preventDefault(), s && Er(O, { select: !0 })) : C.shiftKey && M === O && (C.preventDefault(), s && Er(W, { select: !0 }))) : M === T && C.preventDefault();
        }
      },
      [s, o, N.paused],
    );
    return f.jsx(Ot.div, { tabIndex: -1, ...u, ref: x, onKeyDown: j });
  });
w0.displayName = BT;
function zT(e, { select: t = !1 } = {}) {
  const s = document.activeElement;
  for (const o of e) if ((Er(o, { select: t }), document.activeElement !== s)) return;
}
function $T(e) {
  const t = x0(e),
    s = Uy(t, e),
    o = Uy(t.reverse(), e);
  return [s, o];
}
function x0(e) {
  const t = [],
    s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const a = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) t.push(s.currentNode);
  return t;
}
function Uy(e, t) {
  for (const s of e) if (!UT(s, { upTo: t })) return s;
}
function UT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function WT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Er(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const s = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== s && WT(e) && t && e.select());
  }
}
var Wy = HT();
function HT() {
  let e = [];
  return {
    add(t) {
      const s = e[0];
      (t !== s && (s == null || s.pause()), (e = Hy(e, t)), e.unshift(t));
    },
    remove(t) {
      var s;
      ((e = Hy(e, t)), (s = e[0]) == null || s.resume());
    },
  };
}
function Hy(e, t) {
  const s = [...e],
    o = s.indexOf(t);
  return (o !== -1 && s.splice(o, 1), s);
}
function KT(e) {
  return e.filter((t) => t.tagName !== "A");
}
var GT = "Portal",
  b0 = k.forwardRef((e, t) => {
    var h;
    const { container: s, ...o } = e,
      [a, c] = k.useState(!1);
    wi(() => c(!0), []);
    const u = s || (a && ((h = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : h.body));
    return u ? bA.createPortal(f.jsx(Ot.div, { ...o, ref: t }), u) : null;
  });
b0.displayName = GT;
var ad = 0;
function qT() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Ky()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Ky()),
      ad++,
      () => {
        (ad === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ad--);
      }
    );
  }, []);
}
function Ky() {
  const e = document.createElement("span");
  return (e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e);
}
var In = function () {
  return (
    (In =
      Object.assign ||
      function (t) {
        for (var s, o = 1, a = arguments.length; o < a; o++) {
          s = arguments[o];
          for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (t[c] = s[c]);
        }
        return t;
      }),
    In.apply(this, arguments)
  );
};
function k0(e, t) {
  var s = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (s[o[a]] = e[o[a]]);
  return s;
}
function YT(e, t, s) {
  if (s || arguments.length === 2) for (var o = 0, a = t.length, c; o < a; o++) (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), (c[o] = t[o]));
  return e.concat(c || Array.prototype.slice.call(t));
}
var il = "right-scroll-bar-position",
  al = "width-before-scroll-bar",
  XT = "with-scroll-bars-hidden",
  QT = "--removed-body-scroll-bar-size";
function ld(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function ZT(e, t) {
  var s = k.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return s.value;
        },
        set current(o) {
          var a = s.value;
          a !== o && ((s.value = o), s.callback(o, a));
        },
      },
    };
  })[0];
  return ((s.callback = t), s.facade);
}
var JT = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
  Gy = new WeakMap();
function e5(e, t) {
  var s = ZT(null, function (o) {
    return e.forEach(function (a) {
      return ld(a, o);
    });
  });
  return (
    JT(
      function () {
        var o = Gy.get(s);
        if (o) {
          var a = new Set(o),
            c = new Set(e),
            u = s.current;
          (a.forEach(function (h) {
            c.has(h) || ld(h, null);
          }),
            c.forEach(function (h) {
              a.has(h) || ld(h, u);
            }));
        }
        Gy.set(s, e);
      },
      [e],
    ),
    s
  );
}
function t5(e) {
  return e;
}
function n5(e, t) {
  t === void 0 && (t = t5);
  var s = [],
    o = !1,
    a = {
      read: function () {
        if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return s.length ? s[s.length - 1] : e;
      },
      useMedium: function (c) {
        var u = t(c, o);
        return (
          s.push(u),
          function () {
            s = s.filter(function (h) {
              return h !== u;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (o = !0; s.length; ) {
          var u = s;
          ((s = []), u.forEach(c));
        }
        s = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (c) {
        o = !0;
        var u = [];
        if (s.length) {
          var h = s;
          ((s = []), h.forEach(c), (u = s));
        }
        var p = function () {
            var g = u;
            ((u = []), g.forEach(c));
          },
          y = function () {
            return Promise.resolve().then(p);
          };
        (y(),
          (s = {
            push: function (g) {
              (u.push(g), y());
            },
            filter: function (g) {
              return ((u = u.filter(g)), s);
            },
          }));
      },
    };
  return a;
}
function r5(e) {
  e === void 0 && (e = {});
  var t = n5(null);
  return ((t.options = In({ async: !0, ssr: !1 }, e)), t);
}
var C0 = function (e) {
  var t = e.sideCar,
    s = k0(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return k.createElement(o, In({}, s));
};
C0.isSideCarExport = !0;
function s5(e, t) {
  return (e.useMedium(t), C0);
}
var S0 = r5(),
  cd = function () {},
  Ul = k.forwardRef(function (e, t) {
    var s = k.useRef(null),
      o = k.useState({ onScrollCapture: cd, onWheelCapture: cd, onTouchMoveCapture: cd }),
      a = o[0],
      c = o[1],
      u = e.forwardProps,
      h = e.children,
      p = e.className,
      y = e.removeScrollBar,
      g = e.enabled,
      w = e.shards,
      x = e.sideCar,
      N = e.noRelative,
      j = e.noIsolation,
      C = e.inert,
      D = e.allowPinchZoom,
      M = e.as,
      T = M === void 0 ? "div" : M,
      O = e.gapMode,
      W = k0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      $ = x,
      q = e5([s, t]),
      G = In(In({}, W), a);
    return k.createElement(k.Fragment, null, g && k.createElement($, { sideCar: S0, removeScrollBar: y, shards: w, noRelative: N, noIsolation: j, inert: C, setCallbacks: c, allowPinchZoom: !!D, lockRef: s, gapMode: O }), u ? k.cloneElement(k.Children.only(h), In(In({}, G), { ref: q })) : k.createElement(T, In({}, G, { className: p, ref: q }), h));
  });
Ul.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ul.classNames = { fullWidth: al, zeroRight: il };
var o5 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function i5() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = o5();
  return (t && e.setAttribute("nonce", t), e);
}
function a5(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function l5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var c5 = function () {
    var e = 0,
      t = null;
    return {
      add: function (s) {
        (e == 0 && (t = i5()) && (a5(t, s), l5(t)), e++);
      },
      remove: function () {
        (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  u5 = function () {
    var e = c5();
    return function (t, s) {
      k.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && s],
      );
    };
  },
  E0 = function () {
    var e = u5(),
      t = function (s) {
        var o = s.styles,
          a = s.dynamic;
        return (e(o, a), null);
      };
    return t;
  },
  d5 = { left: 0, top: 0, right: 0, gap: 0 },
  ud = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  f5 = function (e) {
    var t = window.getComputedStyle(document.body),
      s = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      a = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ud(s), ud(o), ud(a)];
  },
  h5 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return d5;
    var t = f5(e),
      s = document.documentElement.clientWidth,
      o = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, o - s + t[2] - t[0]) };
  },
  m5 = E0(),
  Js = "data-scroll-locked",
  p5 = function (e, t, s, o) {
    var a = e.left,
      c = e.top,
      u = e.right,
      h = e.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          XT,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Js,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  u,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            s === "padding" && "padding-right: ".concat(h, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          il,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          al,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(il, " .")
        .concat(
          il,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(al, " .")
        .concat(
          al,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Js,
          `] {
    `,
        )
        .concat(QT, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  qy = function () {
    var e = parseInt(document.body.getAttribute(Js) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  g5 = function () {
    k.useEffect(function () {
      return (
        document.body.setAttribute(Js, (qy() + 1).toString()),
        function () {
          var e = qy() - 1;
          e <= 0 ? document.body.removeAttribute(Js) : document.body.setAttribute(Js, e.toString());
        }
      );
    }, []);
  },
  y5 = function (e) {
    var t = e.noRelative,
      s = e.noImportant,
      o = e.gapMode,
      a = o === void 0 ? "margin" : o;
    g5();
    var c = k.useMemo(
      function () {
        return h5(a);
      },
      [a],
    );
    return k.createElement(m5, { styles: p5(c, !t, a, s ? "" : "!important") });
  },
  Wd = !1;
if (typeof window < "u")
  try {
    var Qa = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Wd = !0), !0);
      },
    });
    (window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa));
  } catch {
    Wd = !1;
  }
var Us = Wd ? { passive: !1 } : !1,
  v5 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  N0 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var s = window.getComputedStyle(e);
    return s[t] !== "hidden" && !(s.overflowY === s.overflowX && !v5(e) && s[t] === "visible");
  },
  w5 = function (e) {
    return N0(e, "overflowY");
  },
  x5 = function (e) {
    return N0(e, "overflowX");
  },
  Yy = function (e, t) {
    var s = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var a = P0(e, o);
      if (a) {
        var c = j0(e, o),
          u = c[1],
          h = c[2];
        if (u > h) return !0;
      }
      o = o.parentNode;
    } while (o && o !== s.body);
    return !1;
  },
  b5 = function (e) {
    var t = e.scrollTop,
      s = e.scrollHeight,
      o = e.clientHeight;
    return [t, s, o];
  },
  k5 = function (e) {
    var t = e.scrollLeft,
      s = e.scrollWidth,
      o = e.clientWidth;
    return [t, s, o];
  },
  P0 = function (e, t) {
    return e === "v" ? w5(t) : x5(t);
  },
  j0 = function (e, t) {
    return e === "v" ? b5(t) : k5(t);
  },
  C5 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  S5 = function (e, t, s, o, a) {
    var c = C5(e, window.getComputedStyle(t).direction),
      u = c * o,
      h = s.target,
      p = t.contains(h),
      y = !1,
      g = u > 0,
      w = 0,
      x = 0;
    do {
      if (!h) break;
      var N = j0(e, h),
        j = N[0],
        C = N[1],
        D = N[2],
        M = C - D - c * j;
      (j || M) && P0(e, h) && ((w += M), (x += j));
      var T = h.parentNode;
      h = T && T.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? T.host : T;
    } while ((!p && h !== document.body) || (p && (t.contains(h) || t === h)));
    return (((g && Math.abs(w) < 1) || (!g && Math.abs(x) < 1)) && (y = !0), y);
  },
  Za = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  Xy = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Qy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  E5 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  N5 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  P5 = 0,
  Ws = [];
function j5(e) {
  var t = k.useRef([]),
    s = k.useRef([0, 0]),
    o = k.useRef(),
    a = k.useState(P5++)[0],
    c = k.useState(E0)[0],
    u = k.useRef(e);
  (k.useEffect(
    function () {
      u.current = e;
    },
    [e],
  ),
    k.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var C = YT([e.lockRef.current], (e.shards || []).map(Qy), !0).filter(Boolean);
          return (
            C.forEach(function (D) {
              return D.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(a)),
                C.forEach(function (D) {
                  return D.classList.remove("allow-interactivity-".concat(a));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var h = k.useCallback(function (C, D) {
      if (("touches" in C && C.touches.length === 2) || (C.type === "wheel" && C.ctrlKey)) return !u.current.allowPinchZoom;
      var M = Za(C),
        T = s.current,
        O = "deltaX" in C ? C.deltaX : T[0] - M[0],
        W = "deltaY" in C ? C.deltaY : T[1] - M[1],
        $,
        q = C.target,
        G = Math.abs(O) > Math.abs(W) ? "h" : "v";
      if ("touches" in C && G === "h" && q.type === "range") return !1;
      var B = window.getSelection(),
        se = B && B.anchorNode,
        Ce = se ? se === q || se.contains(q) : !1;
      if (Ce) return !1;
      var Te = Yy(G, q);
      if (!Te) return !0;
      if ((Te ? ($ = G) : (($ = G === "v" ? "h" : "v"), (Te = Yy(G, q))), !Te)) return !1;
      if ((!o.current && "changedTouches" in C && (O || W) && (o.current = $), !$)) return !0;
      var ge = o.current || $;
      return S5(ge, D, C, ge === "h" ? O : W);
    }, []),
    p = k.useCallback(function (C) {
      var D = C;
      if (!(!Ws.length || Ws[Ws.length - 1] !== c)) {
        var M = "deltaY" in D ? Xy(D) : Za(D),
          T = t.current.filter(function ($) {
            return $.name === D.type && ($.target === D.target || D.target === $.shadowParent) && E5($.delta, M);
          })[0];
        if (T && T.should) {
          D.cancelable && D.preventDefault();
          return;
        }
        if (!T) {
          var O = (u.current.shards || [])
              .map(Qy)
              .filter(Boolean)
              .filter(function ($) {
                return $.contains(D.target);
              }),
            W = O.length > 0 ? h(D, O[0]) : !u.current.noIsolation;
          W && D.cancelable && D.preventDefault();
        }
      }
    }, []),
    y = k.useCallback(function (C, D, M, T) {
      var O = { name: C, delta: D, target: M, should: T, shadowParent: A5(M) };
      (t.current.push(O),
        setTimeout(function () {
          t.current = t.current.filter(function (W) {
            return W !== O;
          });
        }, 1));
    }, []),
    g = k.useCallback(function (C) {
      ((s.current = Za(C)), (o.current = void 0));
    }, []),
    w = k.useCallback(function (C) {
      y(C.type, Xy(C), C.target, h(C, e.lockRef.current));
    }, []),
    x = k.useCallback(function (C) {
      y(C.type, Za(C), C.target, h(C, e.lockRef.current));
    }, []);
  k.useEffect(function () {
    return (
      Ws.push(c),
      e.setCallbacks({ onScrollCapture: w, onWheelCapture: w, onTouchMoveCapture: x }),
      document.addEventListener("wheel", p, Us),
      document.addEventListener("touchmove", p, Us),
      document.addEventListener("touchstart", g, Us),
      function () {
        ((Ws = Ws.filter(function (C) {
          return C !== c;
        })),
          document.removeEventListener("wheel", p, Us),
          document.removeEventListener("touchmove", p, Us),
          document.removeEventListener("touchstart", g, Us));
      }
    );
  }, []);
  var N = e.removeScrollBar,
    j = e.inert;
  return k.createElement(k.Fragment, null, j ? k.createElement(c, { styles: N5(a) }) : null, N ? k.createElement(y5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null);
}
function A5(e) {
  for (var t = null; e !== null; ) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
const T5 = s5(S0, j5);
var A0 = k.forwardRef(function (e, t) {
  return k.createElement(Ul, In({}, e, { ref: t, sideCar: T5 }));
});
A0.classNames = Ul.classNames;
var D5 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Hs = new WeakMap(),
  Ja = new WeakMap(),
  el = {},
  dd = 0,
  T0 = function (e) {
    return e && (e.host || T0(e.parentNode));
  },
  R5 = function (e, t) {
    return t
      .map(function (s) {
        if (e.contains(s)) return s;
        var o = T0(s);
        return o && e.contains(o) ? o : (console.error("aria-hidden", s, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  M5 = function (e, t, s, o) {
    var a = R5(t, Array.isArray(e) ? e : [e]);
    el[s] || (el[s] = new WeakMap());
    var c = el[s],
      u = [],
      h = new Set(),
      p = new Set(a),
      y = function (w) {
        !w || h.has(w) || (h.add(w), y(w.parentNode));
      };
    a.forEach(y);
    var g = function (w) {
      !w ||
        p.has(w) ||
        Array.prototype.forEach.call(w.children, function (x) {
          if (h.has(x)) g(x);
          else
            try {
              var N = x.getAttribute(o),
                j = N !== null && N !== "false",
                C = (Hs.get(x) || 0) + 1,
                D = (c.get(x) || 0) + 1;
              (Hs.set(x, C), c.set(x, D), u.push(x), C === 1 && j && Ja.set(x, !0), D === 1 && x.setAttribute(s, "true"), j || x.setAttribute(o, "true"));
            } catch (M) {
              console.error("aria-hidden: cannot operate on ", x, M);
            }
        });
    };
    return (
      g(t),
      h.clear(),
      dd++,
      function () {
        (u.forEach(function (w) {
          var x = Hs.get(w) - 1,
            N = c.get(w) - 1;
          (Hs.set(w, x), c.set(w, N), x || (Ja.has(w) || w.removeAttribute(o), Ja.delete(w)), N || w.removeAttribute(s));
        }),
          dd--,
          dd || ((Hs = new WeakMap()), (Hs = new WeakMap()), (Ja = new WeakMap()), (el = {})));
      }
    );
  },
  L5 = function (e, t, s) {
    s === void 0 && (s = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      a = D5(e);
    return a
      ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), M5(o, a, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Zf = "Dialog",
  [D0] = Fl(Zf),
  [_5, Pn] = D0(Zf),
  R0 = (e) => {
    const { __scopeDialog: t, children: s, open: o, defaultOpen: a, onOpenChange: c, modal: u = !0 } = e,
      h = k.useRef(null),
      p = k.useRef(null),
      [y = !1, g] = Bl({ prop: o, defaultProp: a, onChange: c });
    return f.jsx(_5, { scope: t, triggerRef: h, contentRef: p, contentId: di(), titleId: di(), descriptionId: di(), open: y, onOpenChange: g, onOpenToggle: k.useCallback(() => g((w) => !w), [g]), modal: u, children: s });
  };
R0.displayName = Zf;
var M0 = "DialogTrigger",
  I5 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, ...o } = e,
      a = Pn(M0, s),
      c = En(t, a.triggerRef);
    return f.jsx(Ot.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": th(a.open), ...o, ref: c, onClick: Fn(e.onClick, a.onOpenToggle) });
  });
I5.displayName = M0;
var Jf = "DialogPortal",
  [V5, L0] = D0(Jf, { forceMount: void 0 }),
  _0 = (e) => {
    const { __scopeDialog: t, forceMount: s, children: o, container: a } = e,
      c = Pn(Jf, t);
    return f.jsx(V5, { scope: t, forceMount: s, children: k.Children.map(o, (u) => f.jsx(Di, { present: s || c.open, children: f.jsx(b0, { asChild: !0, container: a, children: u }) })) });
  };
_0.displayName = Jf;
var jl = "DialogOverlay",
  I0 = k.forwardRef((e, t) => {
    const s = L0(jl, e.__scopeDialog),
      { forceMount: o = s.forceMount, ...a } = e,
      c = Pn(jl, e.__scopeDialog);
    return c.modal ? f.jsx(Di, { present: o || c.open, children: f.jsx(O5, { ...a, ref: t }) }) : null;
  });
I0.displayName = jl;
var O5 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, ...o } = e,
      a = Pn(jl, s);
    return f.jsx(A0, { as: vi, allowPinchZoom: !0, shards: [a.contentRef], children: f.jsx(Ot.div, { "data-state": th(a.open), ...o, ref: t, style: { pointerEvents: "auto", ...o.style } }) });
  }),
  is = "DialogContent",
  V0 = k.forwardRef((e, t) => {
    const s = L0(is, e.__scopeDialog),
      { forceMount: o = s.forceMount, ...a } = e,
      c = Pn(is, e.__scopeDialog);
    return f.jsx(Di, { present: o || c.open, children: c.modal ? f.jsx(F5, { ...a, ref: t }) : f.jsx(B5, { ...a, ref: t }) });
  });
V0.displayName = is;
var F5 = k.forwardRef((e, t) => {
    const s = Pn(is, e.__scopeDialog),
      o = k.useRef(null),
      a = En(t, s.contentRef, o);
    return (
      k.useEffect(() => {
        const c = o.current;
        if (c) return L5(c);
      }, []),
      f.jsx(O0, {
        ...e,
        ref: a,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Fn(e.onCloseAutoFocus, (c) => {
          var u;
          (c.preventDefault(), (u = s.triggerRef.current) == null || u.focus());
        }),
        onPointerDownOutside: Fn(e.onPointerDownOutside, (c) => {
          const u = c.detail.originalEvent,
            h = u.button === 0 && u.ctrlKey === !0;
          (u.button === 2 || h) && c.preventDefault();
        }),
        onFocusOutside: Fn(e.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  B5 = k.forwardRef((e, t) => {
    const s = Pn(is, e.__scopeDialog),
      o = k.useRef(!1),
      a = k.useRef(!1);
    return f.jsx(O0, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        var u, h;
        ((u = e.onCloseAutoFocus) == null || u.call(e, c), c.defaultPrevented || (o.current || (h = s.triggerRef.current) == null || h.focus(), c.preventDefault()), (o.current = !1), (a.current = !1));
      },
      onInteractOutside: (c) => {
        var p, y;
        ((p = e.onInteractOutside) == null || p.call(e, c), c.defaultPrevented || ((o.current = !0), c.detail.originalEvent.type === "pointerdown" && (a.current = !0)));
        const u = c.target;
        (((y = s.triggerRef.current) == null ? void 0 : y.contains(u)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && a.current && c.preventDefault());
      },
    });
  }),
  O0 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: c, ...u } = e,
      h = Pn(is, s),
      p = k.useRef(null),
      y = En(t, p);
    return (qT(), f.jsxs(f.Fragment, { children: [f.jsx(w0, { asChild: !0, loop: !0, trapped: o, onMountAutoFocus: a, onUnmountAutoFocus: c, children: f.jsx(y0, { role: "dialog", id: h.contentId, "aria-describedby": h.descriptionId, "aria-labelledby": h.titleId, "data-state": th(h.open), ...u, ref: y, onDismiss: () => h.onOpenChange(!1) }) }), f.jsxs(f.Fragment, { children: [f.jsx(z5, { titleId: h.titleId }), f.jsx(U5, { contentRef: p, descriptionId: h.descriptionId })] })] }));
  }),
  eh = "DialogTitle",
  F0 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, ...o } = e,
      a = Pn(eh, s);
    return f.jsx(Ot.h2, { id: a.titleId, ...o, ref: t });
  });
F0.displayName = eh;
var B0 = "DialogDescription",
  z0 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, ...o } = e,
      a = Pn(B0, s);
    return f.jsx(Ot.p, { id: a.descriptionId, ...o, ref: t });
  });
z0.displayName = B0;
var $0 = "DialogClose",
  U0 = k.forwardRef((e, t) => {
    const { __scopeDialog: s, ...o } = e,
      a = Pn($0, s);
    return f.jsx(Ot.button, { type: "button", ...o, ref: t, onClick: Fn(e.onClick, () => a.onOpenChange(!1)) });
  });
U0.displayName = $0;
function th(e) {
  return e ? "open" : "closed";
}
var W0 = "DialogTitleWarning",
  [lD, H0] = hA(W0, { contentName: is, titleName: eh, docsSlug: "dialog" }),
  z5 = ({ titleId: e }) => {
    const t = H0(W0),
      s = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      k.useEffect(() => {
        e && (document.getElementById(e) || console.error(s));
      }, [s, e]),
      null
    );
  },
  $5 = "DialogDescriptionWarning",
  U5 = ({ contentRef: e, descriptionId: t }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${H0($5).contentName}}.`;
    return (
      k.useEffect(() => {
        var c;
        const a = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
        t && a && (document.getElementById(t) || console.warn(o));
      }, [o, e, t]),
      null
    );
  },
  W5 = R0,
  H5 = _0,
  K5 = I0,
  G5 = V0,
  q5 = F0,
  Y5 = z0,
  X5 = U0;
function Q5({ ...e }) {
  return f.jsx(W5, { "data-slot": "dialog", ...e });
}
function Z5({ ...e }) {
  return f.jsx(H5, { "data-slot": "dialog-portal", ...e });
}
function J5({ className: e, ...t }) {
  return f.jsx(K5, { "data-slot": "dialog-overlay", className: $n("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function eD({ className: e, children: t, ...s }) {
  return f.jsxs(Z5, { "data-slot": "dialog-portal", children: [f.jsx(J5, {}), f.jsxs(G5, { "data-slot": "dialog-content", className: $n("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", e), ...s, children: [t, f.jsxs(X5, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [f.jsx(tv, {}), f.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function tD({ className: e, ...t }) {
  return f.jsx("div", { "data-slot": "dialog-header", className: $n("flex flex-col gap-2 text-center sm:text-left", e), ...t });
}
function nD({ className: e, ...t }) {
  return f.jsx(q5, { "data-slot": "dialog-title", className: $n("text-lg leading-none font-semibold", e), ...t });
}
function rD({ className: e, ...t }) {
  return f.jsx(Y5, { "data-slot": "dialog-description", className: $n("text-muted-foreground text-sm", e), ...t });
}
const Zr = k.forwardRef(({ className: e, type: t, ...s }, o) => f.jsx("input", { type: t, className: $n("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e), ref: o, ...s }));
Zr.displayName = "Input";
var sD = "Label",
  K0 = k.forwardRef((e, t) =>
    f.jsx(Ot.label, {
      ...e,
      ref: t,
      onMouseDown: (s) => {
        var a;
        s.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, s), !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      },
    }),
  );
K0.displayName = sD;
var oD = K0;
function Ks({ className: e, ...t }) {
  return f.jsx(oD, { "data-slot": "label", className: $n("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e), ...t });
}
function iD() {
  const [e, t] = k.useState(!1),
    [s, o] = k.useState(0),
    [a, c] = k.useState(!1),
    [u, h] = k.useState(!1),
    [p, y] = k.useState(""),
    g = [
      { icon: $a, label: "Cobertura", value: "Responsabilidad Civil", description: "Una de las sumas más altas del mercado" },
      { icon: y1, label: "Telemedicina", value: "Ilimitada", description: "Resolvé dudas desde casa" },
      { icon: p1, label: "Prevención", value: "Atención veterinaria", description: "Consultas y tratamientos" },
      { icon: u1, label: "Medicamentos", value: "40% OFF", description: "Reintegros" },
      { icon: h1, label: "Higiene", value: "Baño y peluquería", description: "Bienestar de tu mascota" },
    ];
  (k.useEffect(() => {
    const q = setInterval(() => {
      o((G) => (G + 1) % g.length);
    }, 3e3);
    return () => clearInterval(q);
  }, []),
    k.useEffect(() => {
      const q = () => {
        c(window.scrollY > 50);
      };
      return (window.addEventListener("scroll", q), () => window.removeEventListener("scroll", q));
    }, []));
  const {
      register: w,
      handleSubmit: x,
      watch: N,
      formState: { errors: j, isSubmitting: C },
      reset: D,
    } = dA(),
    M = N("areaCode") || "",
    T = N("phoneNumber") || "",
    O = (q) => {
      (y(q), h(!0));
    },
    W = async (q) => {
      try {
        const se = await (await fetch("./contacto_gracias.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName: q.firstName, lastName: q.lastName, areaCode: q.areaCode, phoneNumber: q.phoneNumber, email: q.email, description: `Plan ${p}`, ramo: 8, hash: new URLSearchParams(window.location.search).get("hash") || "" }) })).json();
        if ((console.log("Response:", se), se.status === "error")) throw new Error(se.message || "Error en el servidor");
        (fi.fire({ title: "¡Solicitud Enviada!", text: `¡Gracias! Te contactaremos pronto sobre el plan ${p}`, icon: "success", confirmButtonColor: "#2F73E8", customClass: { container: "swal2-override" } }), h(!1), D());
      } catch (G) {
        (console.error("Error submitting form:", G), console.error("POSSIBLE CAUSE: Apache server might be down or not running on port 80. Check XAMPP."), fi.fire({ title: "Error", text: "Hubo un error al enviar la solicitud. Por favor verificá tu conexión o intenta nuevamente.", icon: "error", confirmButtonColor: "#2F73E8", customClass: { container: "swal2-override" } }));
      }
    },
    $ = g[s];
  return f.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      f.jsx("style", {
        children: `
        .swal2-container {
          z-index: 10000 !important;
          pointer-events: auto !important; 
        }
      `,
      }),
      f.jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${a ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`, children: f.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-6", children: [f.jsxs("div", { className: "flex items-center justify-between", children: [f.jsx("img", { src: nd, alt: "RUS PETCARE", className: "transition-all duration-300 h-13 md:h-14" }), f.jsxs("div", { className: "hidden md:flex items-center gap-6", children: [f.jsx("a", { href: "#planes", className: `text-xs transition-all font-bold uppercase tracking-wide ${a ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`, children: "Planes" }), f.jsx("a", { href: "#beneficios", className: `text-xs transition-all font-bold uppercase tracking-wide ${a ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`, children: "Beneficios" }), f.jsx("a", { href: "#como-funciona", className: `text-xs transition-all font-bold uppercase tracking-wide ${a ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`, children: "Cómo funciona" }), f.jsx("a", { href: "#faq", className: `text-xs transition-all font-bold uppercase tracking-wide ${a ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`, children: "FAQ" }), f.jsx("a", { href: "#ayuda", className: `text-xs transition-all font-bold uppercase tracking-wide ${a ? "text-gray-900 hover:text-[#2F73E8]" : "text-white hover:text-[#6AC9D9]"}`, children: "Ayuda" })] }), f.jsx("button", { className: `md:hidden transition-colors ${a ? "text-gray-700" : "text-white"}`, onClick: () => t(!e), children: e ? f.jsx(tv, { className: "w-5 h-5" }) : f.jsx(a1, { className: "w-5 h-5" }) })] }), e && f.jsx("div", { className: "md:hidden mt-4 py-4 px-4 bg-white rounded-lg shadow-xl", children: f.jsxs("div", { className: "flex flex-col gap-3", children: [f.jsx("a", { href: "#planes", className: "text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide", children: "Planes" }), f.jsx("a", { href: "#beneficios", className: "text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide", children: "Beneficios" }), f.jsx("a", { href: "#como-funciona", className: "text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide", children: "Cómo funciona" }), f.jsx("a", { href: "#faq", className: "text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide", children: "FAQ" }), f.jsx("a", { href: "#ayuda", className: "text-xs transition-all font-bold text-gray-900 hover:text-[#2F73E8] uppercase tracking-wide", children: "Ayuda" })] }) })] }) }),
      f.jsxs("section", { className: "relative min-h-[70vh] flex items-center overflow-hidden", children: [f.jsxs("div", { className: "absolute inset-0", children: [f.jsx("img", { src: fA, alt: "RUS PetCare - Cuidado integral de mascotas", className: "w-full h-full object-cover object-center" }), f.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#2F73E8]/95 via-[#2F73E8]/60 to-transparent" })] }), f.jsx("div", { className: "relative z-10 w-full px-4 lg:px-6 py-12", children: f.jsx("div", { className: "max-w-7xl mx-auto", children: f.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [f.jsxs("div", { className: "max-w-lg", children: [f.jsx("div", { className: "inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-2", children: f.jsx("span", { className: "text-white/90 text-xs font-medium", children: "🐾 Evolucionamos para cuidarlos" }) }), f.jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-none", children: "Salud Animal 🧡" }), f.jsx("p", { className: "text-base text-white/90 mb-6 max-w-md leading-snug", children: "Acompañamiento integral de su bienestar." }), f.jsxs("a", { href: "#planes", className: "bg-[#F29100] hover:bg-[#d97e00] text-white px-8 py-3.5 rounded-full text-base font-bold transition-all shadow-2xl hover:scale-105 inline-flex items-center gap-2", children: ["Ver planes", f.jsx(n1, { className: "w-5 h-5" })] })] }), f.jsxs("div", { className: "relative xl:block hidden h-[450px]", children: [f.jsxs("div", { className: "absolute top-12 right-8 bg-[#F29100] text-white rounded-2xl px-6 py-4 shadow-2xl transform hover:scale-105 transition-all", children: [f.jsx("div", { className: "text-xs font-medium mb-1 opacity-90", children: "Desde" }), f.jsxs("div", { className: "text-2xl font-bold", children: ["$7.000", f.jsx("span", { className: "text-base font-medium opacity-90", children: "/mes" })] }), f.jsx("div", { className: "mt-2 pt-2 border-t border-white/20", children: f.jsx("div", { className: "text-xs opacity-90", children: "Plan Simple" }) })] }), f.jsxs("div", { className: "absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl w-[280px]", children: [f.jsx("div", { className: "relative overflow-hidden h-40", children: f.jsx(VP, { mode: "wait", children: f.jsxs(Wj.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, className: "absolute inset-0 flex flex-col items-center text-center", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#6AC9D9]/20 flex items-center justify-center mb-4", children: f.jsx($.icon, { className: "w-6 h-6 text-[#26499D]" }) }), f.jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wider mb-1", children: $.label }), f.jsx("div", { className: "text-xl font-bold text-gray-900 mb-2", children: $.value }), f.jsx("div", { className: "text-sm text-gray-600 leading-relaxed", children: $.description })] }, s) }) }), f.jsx("div", { className: "flex gap-1.5 mt-4 justify-center", children: g.map((q, G) => f.jsx("div", { className: `h-1.5 rounded-full transition-all ${G === s ? "w-6 bg-[#26499D]" : "w-1.5 bg-gray-300"}` }, G)) })] }), f.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 left-0 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border-2 border-[#6AC9D9]/30", children: f.jsxs("div", { className: "flex items-center gap-2", children: [f.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#26499D] flex items-center justify-center", children: f.jsx(lt, { className: "w-4 h-4 text-white" }) }), f.jsxs("div", { children: [f.jsx("div", { className: "text-xs text-gray-600", children: "Coberturas hasta" }), f.jsx("div", { className: "text-base font-bold text-gray-900", children: "$100K" })] })] }) })] })] }) }) })] }),
      f.jsx("section", { id: "beneficios", className: "py-12 lg:py-16 px-4 lg:px-6 bg-gradient-to-b from-white to-gray-50", children: f.jsxs("div", { className: "max-w-6xl mx-auto", children: [f.jsxs("div", { className: "text-center mb-10", children: [f.jsx("div", { className: "inline-block px-4 py-1.5 bg-[#6AC9D9]/15 rounded-full mb-3", children: f.jsx("span", { className: "text-[#2F73E8] font-bold text-xs uppercase tracking-wider", children: "Un paso adelante en cuidado animal" }) }), f.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight", children: "¡Más que un seguro!" }), f.jsx("p", { className: "text-base text-gray-600 max-w-2xl mx-auto", children: "Sumamos prevención y acompañamiento a la protección tradicional." })] }), f.jsxs("div", { className: "grid md:grid-cols-4 gap-5 mb-12 max-w-4xl mx-auto", children: [f.jsxs("div", { className: "md:col-span-2 bg-white rounded-xl p-6 shadow-lg border-2 border-[#2F73E8]/20", children: [f.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [f.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center text-xl", children: "✨" }), f.jsx("div", { children: f.jsx("h3", { className: "text-lg font-bold text-gray-900", children: "Protección completa" }) })] }), f.jsx("p", { className: "text-sm text-gray-600", children: "Cobertura por accidentes, enfermedades y situaciones complejas cuando las necesites." })] }), f.jsxs("div", { className: "md:col-span-2 bg-gradient-to-br from-[#2F73E8] to-[#001489] rounded-xl p-6 shadow-xl", children: [f.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [f.jsx("div", { className: "w-10 h-10 rounded-lg bg-[#6AC9D9]/20 flex items-center justify-center text-xl", children: "🐶🐱" }), f.jsx("div", { children: f.jsx("h3", { className: "text-lg font-bold text-white", children: "Cuidado diario" }) })] }), f.jsx("p", { className: "text-sm text-white/90", children: "Guardería, traslados, chequeos, baño y peluquería, consultas para mantenerlos saludables siempre." })] })] }), f.jsxs("div", { className: "grid md:grid-cols-4 gap-3.5", children: [f.jsxs("div", { className: "bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl", children: "📹" }), f.jsx("h3", { className: "font-bold text-gray-900 mb-1.5 text-base", children: "Telemedicina ilimitada" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Consultá con veterinarios cuando lo necesites, sin límite." })] }), f.jsxs("div", { className: "bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl", children: "❤️" }), f.jsx("h3", { className: "font-bold text-gray-900 mb-1.5 text-base", children: "Prevención activa" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Vacunación, castración y desparacitación." })] }), f.jsxs("div", { className: "bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl", children: "🩺" }), f.jsx("h3", { className: "font-bold text-gray-900 mb-1.5 text-base", children: "Red de clínicas" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Atención en todo el país o con tu veterinario de confianza." })] }), f.jsxs("div", { className: "bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-11 h-11 rounded-lg bg-[#2F73E8]/10 flex items-center justify-center mb-4 text-2xl", children: "🛡️" }), f.jsx("h3", { className: "font-bold text-gray-900 mb-1.5 text-base", children: "Cobertura completa" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Consultas con especialistas e intervención quirúrgica." })] })] })] }) }),
      f.jsx("section", {
        id: "planes",
        className: "py-16 lg:py-20 px-4 lg:px-6 bg-white",
        children: f.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            f.jsxs("div", { className: "text-center mb-12", children: [f.jsx("div", { className: "inline-block px-4 py-1.5 bg-gray-100 rounded-full mb-4", children: f.jsx("span", { className: "text-gray-700 font-bold text-xs uppercase tracking-wider", children: "Cuatro opciones, una decisión simple" }) }), f.jsx("div", { className: "flex items-center justify-center gap-2 my-4", children: f.jsx("div", { children: f.jsxs("h2", { className: "text-2xl md:text-3xl text-gray-900", children: ["Elegí tu plan ", f.jsx("span", { className: "font-bold", children: "RUS PetCare" })] }) }) }), f.jsx("div", { className: "my-5", children: f.jsxs("p", { className: "text-base text-gray-600 max-w-2xl mx-auto", children: ["Cuatro niveles de cobertura para distintas necesidades.", f.jsx("br", {}), "Si tenés dudas escribinos por", " ", f.jsxs("a", { href: "https://wa.me/5491139869999", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-[#25D366] hover:text-[#1fa855] font-semibold transition-colors", children: [f.jsx(Gr, { className: "w-4 h-4" }), "WhatsApp"] })] }) })] }),
            f.jsxs("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start",
              children: [
                f.jsxs("div", { className: "bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col", children: [f.jsxs("div", { className: "mb-6", children: [f.jsxs("h3", { className: "text-lg font-bold text-gray-900 mb-1.5 leading-tight", children: ["RUS PETCARE", f.jsx("br", {}), "SIMPLE"] }), f.jsx("p", { className: "text-gray-600 text-sm", children: "Cobertura básica esencial" })] }), f.jsxs("div", { className: "mb-7", children: [f.jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Desde" }), f.jsxs("div", { className: "flex items-baseline gap-1.5", children: [f.jsx("span", { className: "text-3xl font-bold text-gray-900", children: "$7.000" }), f.jsx("span", { className: "text-base text-gray-500", children: "/mes" })] })] }), f.jsxs("div", { className: "space-y-3 mb-8 flex-grow", children: [f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx($a, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Responsabilidad Civil $5.000.000" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Videollamada online (telemedicina)" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Consulta en centro veterinario por enfermedad o accidente *" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Orientación Legal telefónica" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Baño y peluquería*" })] })] }), f.jsxs("div", { className: "space-y-2.5 mt-auto", children: [f.jsx("button", { onClick: () => O("SIMPLE"), className: "w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2", children: "Contratar ahora" }), f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20SIMPLE%20de%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105", children: [f.jsx(Gr, { className: "w-4 h-4" }), "Hablar por WhatsApp"] })] })] }),
                f.jsxs("div", { className: "bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col", children: [f.jsxs("div", { className: "mb-6", children: [f.jsxs("h3", { className: "text-lg font-bold text-gray-900 mb-1.5 leading-tight", children: ["RUS PETCARE", f.jsx("br", {}), "ESENCIAL"] }), f.jsx("p", { className: "text-gray-600 text-sm", children: "Primeros pasos en el cuidado" })] }), f.jsxs("div", { className: "mb-7", children: [f.jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Desde" }), f.jsxs("div", { className: "flex items-baseline gap-1.5", children: [f.jsx("span", { className: "text-3xl font-bold text-gray-900", children: "$15.000" }), f.jsx("span", { className: "text-base text-gray-500", children: "/mes" })] })] }), f.jsxs("div", { className: "space-y-3 mb-8 flex-grow", children: [f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-900 font-medium", children: "Todo lo del plan Simple" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Atención en centro veterinario, a domicilio y telefónico" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Análisis y estudios*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Descuento en medicamentos 40% Off" })] })] }), f.jsxs("div", { className: "space-y-2.5 mt-auto", children: [f.jsx("button", { onClick: () => O("ESENCIAL"), className: "w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2", children: "Contratar ahora" }), f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20ESENCIAL%20de%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105", children: [f.jsx(Gr, { className: "w-4 h-4" }), "Hablar por WhatsApp"] })] })] }),
                f.jsxs("div", { className: "bg-gradient-to-br from-[#26499D] to-[#001489] rounded-2xl p-7 relative lg:scale-105 shadow-2xl h-full flex flex-col", children: [f.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 z-20", children: f.jsx("div", { className: "bg-[#F29100] text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg", children: "Recomendado" }) }), f.jsxs("div", { className: "mb-6 relative z-10", children: [f.jsxs("h3", { className: "text-lg font-bold text-white mb-1.5 leading-tight", children: ["RUS PETCARE", f.jsx("br", {}), "INTEGRAL"] }), f.jsx("p", { className: "text-white/80 text-sm", children: "Cobertura completa para el día a día" })] }), f.jsxs("div", { className: "mb-7 relative z-10", children: [f.jsx("div", { className: "text-xs text-white/60 mb-1", children: "Desde" }), f.jsxs("div", { className: "flex items-baseline gap-1.5", children: [f.jsx("span", { className: "text-3xl font-bold text-white", children: "$25.000" }), f.jsx("span", { className: "text-base text-white/60", children: "/mes" })] })] }), f.jsxs("div", { className: "space-y-3 mb-8 relative z-10 flex-grow", children: [f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white text-sm font-medium", children: "Todo lo del Plan Esencial" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx($a, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white/90 text-sm", children: "Cobertura de Muerte accidental o sacrificio forzoso por accidente / por enfermedad no prevenible" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white/90 text-sm", children: "Vacunación*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white/90 text-sm", children: "Intervención quirúrgica e internación (post intervención)*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white/90 text-sm", children: "Cremación" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-white/90 text-sm", children: "Traslado por enfermedad o accidente (para el tutor y su mascota)*" })] })] }), f.jsxs("div", { className: "space-y-2.5 relative z-10 mt-auto", children: [f.jsx("button", { onClick: () => O("INTEGRAL"), className: "w-full bg-[#F29100] hover:bg-[#d97e00] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2", children: "Contratar ahora" }), f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20INTEGRAL%20de%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105", children: [f.jsx(Gr, { className: "w-4 h-4" }), "Hablar por WhatsApp"] })] })] }),
                f.jsxs("div", { className: "bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all h-full flex flex-col", children: [f.jsxs("div", { className: "mb-6", children: [f.jsxs("h3", { className: "text-lg font-bold text-gray-900 mb-1.5 leading-tight", children: ["RUS PETCARE", f.jsx("br", {}), "SUPERIOR"] }), f.jsx("p", { className: "text-gray-600 text-sm", children: "Máxima protección y tranquilidad" })] }), f.jsxs("div", { className: "mb-7", children: [f.jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Desde" }), f.jsxs("div", { className: "flex items-baseline gap-1.5", children: [f.jsx("span", { className: "text-3xl font-bold text-gray-900", children: "$35.000" }), f.jsx("span", { className: "text-base text-gray-500", children: "/mes" })] })] }), f.jsxs("div", { className: "space-y-3 mb-8 flex-grow", children: [f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-gray-900 text-sm font-medium", children: "Todo lo del Plan Esencial e Integral" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx($a, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Cobertura por Robo" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Guardería canina por enfermedad o intervención*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Castración*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Chequeo general*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Consultas con especialistas médicos y tratamientos exclusivos*" })] }), f.jsxs("div", { className: "flex items-start gap-2.5", children: [f.jsx(lt, { className: "w-4 h-4 text-[#6AC9D9] mt-0.5 flex-shrink-0" }), f.jsx("span", { className: "text-sm text-gray-700", children: "Desparasitación (antipulgas y garrapatas)" })] })] }), f.jsxs("div", { className: "space-y-2.5 mt-auto", children: [f.jsx("button", { onClick: () => O("SUPERIOR"), className: "w-full bg-[#26499D] hover:bg-[#1a3875] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md mb-2", children: "Contratar ahora" }), f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20me%20interesa%20el%20plan%20SUPERIOR%20de%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "w-full inline-flex items-center justify-center gap-2 bg-[#2F73E8] hover:bg-[#001489] text-white py-3 rounded-full text-sm font-semibold transition-all hover:scale-105", children: [f.jsx(Gr, { className: "w-4 h-4" }), "Hablar por WhatsApp"] })] })] }),
              ],
            }),
            f.jsx("div", { className: "mt-8 text-center max-w-4xl mx-auto", children: f.jsx("p", { className: "text-xs text-gray-500", children: "Algunas prestaciones tienen carencia (tiempo de espera) antes de poder usarse." }) }),
          ],
        }),
      }),
      f.jsx("section", { className: "py-16 lg:py-20 px-4 lg:px-6 bg-gray-50", children: f.jsxs("div", { className: "max-w-7xl mx-auto", children: [f.jsxs("div", { className: "text-center mb-12", children: [f.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3", children: "Beneficios con montos reales" }), f.jsx("p", { className: "text-base text-gray-600", children: "Todos nuestros planes cuentan con la cobertura de Responsabilidad Civil más alta del mercado." })] }), f.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [f.jsxs("div", { className: "bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5", children: f.jsx("span", { className: "text-3xl", children: "📹" }) }), f.jsx("div", { className: "mb-3", children: f.jsx("span", { className: "inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide", children: "Ilimitado" }) }), f.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Telemedicina" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-5", children: "Videollamadas ilimitadas con veterinarios. Resolvé dudas desde casa, cualquier día." })] }), f.jsxs("div", { className: "bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5", children: f.jsx("span", { className: "text-3xl", children: "🩺" }) }), f.jsx("div", { className: "mb-3", children: f.jsx("span", { className: "inline-block px-3 py-1.5 bg-[#F29100]/20 text-[#F29100] rounded-full text-xs font-bold uppercase tracking-wide", children: "Hasta $35.000*" }) }), f.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Atención veterinaria" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-5", children: "Consultas, tratamientos y procedimientos en clínicas de la red." })] }), f.jsxs("div", { className: "bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5", children: f.jsx("span", { className: "text-3xl", children: "🔬" }) }), f.jsx("div", { className: "mb-3", children: f.jsx("span", { className: "inline-block px-3 py-1.5 bg-[#F29100]/20 text-[#F29100] rounded-full text-xs font-bold uppercase tracking-wide", children: "Hasta $35.000*" }) }), f.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Análisis y estudios" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-5", children: "Laboratorio, rayos X, ecografías y estudios complementarios." })] }), f.jsxs("div", { className: "bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5", children: f.jsx("span", { className: "text-3xl", children: "💊" }) }), f.jsx("div", { className: "mb-3", children: f.jsx("span", { className: "inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide", children: "40% OFF" }) }), f.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Medicamentos" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-5", children: "Descuento del 40% en farmacias adheridas. Máximo anual cubierto." })] }), f.jsxs("div", { className: "bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [f.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#26499D]/10 flex items-center justify-center mb-5", children: f.jsx("span", { className: "text-3xl", children: "🛁" }) }), f.jsx("div", { className: "mb-3", children: f.jsx("span", { className: "inline-block px-3 py-1.5 bg-[#6AC9D9]/20 text-[#26499D] rounded-full text-xs font-bold uppercase tracking-wide", children: "Hasta $35.000*" }) }), f.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Baño y peluquería" })] }), f.jsxs("div", { className: "bg-gradient-to-br from-[#26499D] to-[#001489] rounded-2xl p-7 shadow-2xl flex flex-col justify-center text-center", children: [f.jsx("div", { className: "mb-4", children: f.jsx("span", { className: "text-5xl", children: "💰" }) }), f.jsx("h3", { className: "text-2xl font-bold text-white mb-3", children: "Inversión que se recupera" })] })] }), f.jsxs("div", { className: "flex flex-col items-center mt-10", children: [f.jsx("p", { className: "text-center text-gray-600 mb-6 font-medium", children: "Si tenés dudas o ganas de contratar" }), f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20tengo%20dudas%20sobre%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95", children: [f.jsx(Gr, { className: "w-6 h-6 fill-white/20" }), "Escribinos por WhatsApp"] })] })] }) }),
      f.jsx("section", { id: "como-funciona", className: "py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-b from-gray-50 to-white", children: f.jsxs("div", { className: "max-w-6xl mx-auto", children: [f.jsxs("div", { className: "text-center mb-12", children: [f.jsx("div", { className: "inline-block px-4 py-1.5 bg-[#2F73E8]/10 rounded-full mb-3", children: f.jsx("span", { className: "text-[#2F73E8] font-bold text-xs uppercase tracking-wider", children: "Paso a paso" }) }), f.jsx("div", { className: "flex justify-center", children: f.jsx("div", { className: "flex items-center justify-center gap-2 my-4", children: f.jsx("div", { children: f.jsxs("h2", { className: "text-xl xl:text-2xl md:text-3xl text-gray-900 flex items-center gap-2", children: ["¿Cómo usar ", f.jsx("span", { className: "font-bold", children: "RUS PetCare" }), "?"] }) }) }) }), f.jsx("div", { className: "mt-5", children: f.jsx("p", { className: "text-base text-gray-600 max-w-2xl mx-auto", children: "Desde que lo contratás hasta que usás los beneficios, todo es simple y rápido" }) })] }), f.jsx("div", { className: "hidden lg:block", children: f.jsxs("div", { className: "relative", children: [f.jsx("div", { className: "absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2F73E8] via-[#6AC9D9] to-[#F29100] opacity-30" }), f.jsxs("div", { className: "grid grid-cols-4 gap-8 relative z-10", children: [f.jsxs("div", { className: "text-center", children: [f.jsx("div", { className: "w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white", children: f.jsx("div", { className: "text-center", children: f.jsx("div", { className: "text-3xl font-bold text-white", children: "1" }) }) }), f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-2", children: "Contratás tu plan" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Elegís la cobertura que mejor se adapta a tus necesidades." })] }), f.jsxs("div", { className: "text-center", children: [f.jsx("div", { className: "w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white", children: f.jsx("div", { className: "text-center", children: f.jsx("div", { className: "text-3xl font-bold text-white", children: "2" }) }) }), f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-2", children: "Cuando necesitás usarlo, te comunicás con nosotros" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Llamás al 0800-444-1441 (opción 2) y un asesor te indica cómo usar tu plan y las opciones disponibles." })] }), f.jsxs("div", { className: "text-center", children: [f.jsx("div", { className: "w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-lg border-2 border-white", children: f.jsx("div", { className: "text-center", children: f.jsx("div", { className: "text-3xl font-bold text-white", children: "3" }) }) }), f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-2", children: "Elegís cómo usar los beneficios" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Con profesionales de nuestra red o con tu veterinario habitual a través de reintegro." })] }), f.jsxs("div", { className: "text-center", children: [f.jsx("div", { className: "w-[80px] h-[80px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#F29100] to-[#d97e00] flex items-center justify-center shadow-lg border-2 border-white", children: f.jsx("div", { className: "text-center", children: f.jsx("div", { className: "text-3xl font-bold text-white", children: "4" }) }) }), f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-2", children: "Si elegiste a tu veterinario, te reintegramos" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Cargá las facturas desde la app RUS Móvil y recibí el reintegro directamente en tu cuenta." })] })] })] }) }), f.jsxs("div", { className: "lg:hidden space-y-5", children: [f.jsxs("div", { className: "flex gap-4", children: [f.jsx("div", { className: "flex-shrink-0", children: f.jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md", children: f.jsx("div", { className: "text-xl font-bold text-white", children: "1" }) }) }), f.jsxs("div", { className: "flex-1 pt-2", children: [f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-1.5", children: "Contratás tu plan" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Elegís la cobertura que mejor se adapta a tus necesidades." })] })] }), f.jsxs("div", { className: "flex gap-4", children: [f.jsx("div", { className: "flex-shrink-0", children: f.jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md", children: f.jsx("div", { className: "text-xl font-bold text-white", children: "2" }) }) }), f.jsxs("div", { className: "flex-1 pt-2", children: [f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-1.5", children: "Cuando necesitás usarlo, te comunicás con nosotros" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Llamás al 0800-444-1441 (opción 2) y un asesor te indica cómo usar tu plan y las opciones disponibles." })] })] }), f.jsxs("div", { className: "flex gap-4", children: [f.jsx("div", { className: "flex-shrink-0", children: f.jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F73E8] to-[#001489] flex items-center justify-center shadow-md", children: f.jsx("div", { className: "text-xl font-bold text-white", children: "3" }) }) }), f.jsxs("div", { className: "flex-1 pt-2", children: [f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-1.5", children: "Elegís cómo usar los beneficios" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Con profesionales de nuestra red o con tu veterinario habitual a través de reintegro." })] })] }), f.jsxs("div", { className: "flex gap-4", children: [f.jsx("div", { className: "flex-shrink-0", children: f.jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-to-br from-[#F29100] to-[#d97e00] flex items-center justify-center shadow-md", children: f.jsx("div", { className: "text-xl font-bold text-white", children: "4" }) }) }), f.jsxs("div", { className: "flex-1 pt-2", children: [f.jsx("h3", { className: "text-base font-bold text-gray-900 mb-1.5", children: "Si elegiste a tu veterinario, te reintegramos" }), f.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Cargá las facturas desde la app RUS Móvil y recibí el reintegro directamente en tu cuenta." })] })] })] })] }) }),
      f.jsx("section", { id: "faq", className: "py-16 lg:py-20 px-4 lg:px-6 bg-gray-50", children: f.jsxs("div", { className: "max-w-7xl mx-auto", children: [f.jsxs("div", { className: "text-center mb-12", children: [f.jsx("div", { className: "inline-block px-4 py-1.5 bg-[#26499D]/10 rounded-full mb-3", children: f.jsx("span", { className: "text-[#26499D] font-bold text-xs uppercase tracking-wider", children: "Respondemos tus dudas" }) }), f.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight", children: "Preguntas frecuentes" }), f.jsxs("p", { className: "text-base text-gray-600", children: ["Todo lo que necesitás saber sobre ", f.jsx("span", { className: "font-bold", children: "RUS PetCare" })] })] }), f.jsxs("div", { className: "grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto", children: [f.jsx("div", { className: "space-y-3", children: f.jsxs(Fy, { type: "single", collapsible: !0, className: "space-y-3", children: [f.jsxs(an, { value: "item-1", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Qué mascotas puedo asegurar?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["Se puede asegurar ", f.jsx("strong", { children: "perros o gatos" }), " de compañía y/o vigilancia exclusivamente."] })] }), f.jsxs(an, { value: "item-2", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Qué edad debe tener mi mascota para contratar el seguro?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["Debe tener entre ", f.jsx("strong", { children: "3 meses y 8 años" }), " inclusive al momento de la contratación. La cobertura puede mantenerse hasta los 12 años."] })] }), f.jsxs(an, { value: "item-3", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Puedo ir a mi veterinaria de confianza?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["Sí. El plan contempla ", f.jsx("strong", { children: "libre elección veterinaria" }), ". Podés atender a tu mascota con el profesional que elijas y luego solicitar el reintegro según los límites de cobertura de tu plan. Además, contamos con una ", f.jsx("strong", { children: "red de clínicas veterinarias adheridas" }), ", disponible para cuando no cuentes con un profesional de confianza o te encuentres de viaje."] })] }), f.jsxs(an, { value: "item-4", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Cómo solicito una asistencia veterinaria?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["Para solicitar una ", f.jsx("strong", { children: "asistencia veterinaria" }), ", debés comunicarte ", f.jsx("strong", { children: "previamente" }), " con la central de asistencia llamando al ", f.jsx("strong", { children: "0800-444-1441" }), " (opción 2). Desde allí te indicarán cómo continuar según tu ubicación y el tipo de prestación."] })] }), f.jsxs(an, { value: "item-5", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Cómo funciona el reintegro?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: [f.jsx("strong", { children: "Si la asistencia se realiza bajo modalidad de reintegro, el proceso es muy simple:" }), " Una vez realizada la consulta o el tratamiento, deberás subir la factura y el informe médico a través de nuestra app o web. La documentación será evaluada dentro de las ", f.jsx("strong", { children: "72 horas hábiles" }), ", y el reintegro se efectuará según las condiciones y límites de tu plan."] })] }), f.jsxs(an, { value: "item-6", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Se puede asegurar una mascota sin raza?" }) }), f.jsx(cn, { className: "text-gray-600 leading-relaxed pb-5", children: "Sí, en RUS podrás asegurar a mascotas mestizas, es decir que no pertenecen a ninguna raza en particular." })] })] }) }), f.jsx("div", { className: "space-y-3", children: f.jsxs(Fy, { type: "single", collapsible: !0, className: "space-y-3", children: [f.jsxs(an, { value: "item-7", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Cuántas mascotas puedo asegurar por póliza?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["Podés asegurar ", f.jsx("strong", { children: "todas las mascotas que tengas en tu hogar" }), ". Para cada una, se deberá contratar ", f.jsx("strong", { children: "una póliza individual" }), ", lo que permite adaptar la cobertura a las necesidades de cada mascota."] })] }), f.jsxs(an, { value: "item-8", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Dónde tiene validez la cobertura?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["La cobertura es válida ", f.jsx("strong", { children: "en todo el país" }), ", siempre dentro de la República Argentina."] })] }), f.jsxs(an, { value: "item-9", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Necesito la libreta sanitaria?" }) }), f.jsx(cn, { className: "text-gray-600 leading-relaxed pb-5", children: "Sí, es importante que tu mascota tenga la libreta sanitaria al día al momento de contratar el seguro." })] }), f.jsxs(an, { value: "item-10", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Cuál es la vigencia de la póliza?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["La vigencia es ", f.jsx("strong", { children: "semestral" }), ", y su renovación es automática."] })] }), f.jsxs(an, { value: "item-11", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Se pueden asegurar mascotas consideradas potencialmente peligrosas?" }) }), f.jsx(cn, { className: "text-gray-600 leading-relaxed pb-5", children: "Sí, siempre que se cumplan las medidas de seguridad exigidas en póliza." })] }), f.jsxs(an, { value: "item-12", className: "bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all", children: [f.jsx(ln, { className: "text-left hover:no-underline py-5", children: f.jsx("span", { className: "font-bold text-gray-900", children: "¿Cómo denunciar un siniestro?" }) }), f.jsxs(cn, { className: "text-gray-600 leading-relaxed pb-5", children: ["La denuncia del siniestro puede realizarse de manera simple comunicándote con ", f.jsx("strong", { children: "Atención al Cliente de RUS al 0800-888-7787" }), ", dentro de las 72 horas hábiles de conocido el siniestro."] })] })] }) })] }), f.jsxs("div", { id: "ayuda", className: "mt-8 py-16 px-4 lg:px-6 bg-[#26499D] rounded-xl p-6 shadow-sm max-w-6xl mx-auto text-center text-white", children: [f.jsx("h3", { className: "font-bold text-white mb-2", children: "¿Tenés otra consulta?" }), f.jsx("p", { className: "text-sm text-white mb-4", children: "Nuestro equipo está disponible para ayudarte" }), f.jsx("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: f.jsxs("a", { href: "https://wa.me/5491139869999?text=Hola,%20tengo%20una%20consulta%20sobre%20RUS%20PetCare", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fa855] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105", children: [f.jsx(Gr, { className: "w-4 h-4" }), "WhatsApp"] }) })] })] }) }),
      f.jsxs("footer", { className: "bg-[#2F73E8] py-14 px-4 relative overflow-hidden", children: [f.jsx("div", { className: "absolute inset-0 opacity-5", children: f.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-[#2F73E8] rounded-full blur-3xl" }) }), f.jsx("div", { className: "max-w-7xl mx-auto relative z-10", children: f.jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-10", children: [f.jsxs("div", { className: "md:col-span-2", children: [f.jsx("img", { src: nd, alt: "RUS PETCARE", className: "h-13 lg:h-14 mb-4" }), f.jsx("p", { className: "text-sm text-white leading-relaxed mb-4", children: "Acompañando el bienestar de tu mascota, todos los días." })] }), f.jsxs("div", { children: [f.jsx("h4", { className: "text-white text-sm font-semibold mb-3", children: "Producto" }), f.jsxs("ul", { className: "space-y-2 text-sm text-white/90", children: [f.jsx("li", { children: f.jsx("a", { href: "#planes", className: "hover:text-white transition-colors", children: "Planes" }) }), f.jsx("li", { children: f.jsx("a", { href: "#beneficios", className: "hover:text-white transition-colors", children: "Beneficios" }) }), f.jsx("li", { children: f.jsx("a", { href: "#como-funciona", className: "hover:text-white transition-colors", children: "Cómo funciona" }) }), f.jsx("li", { children: f.jsx("a", { href: "#faq", className: "hover:text-white transition-colors", children: "FAQ" }) }), f.jsx("li", { children: f.jsx("a", { href: "#ayuda", className: "hover:text-white transition-colors", children: "Ayuda" }) })] })] }), f.jsxs("div", { children: [f.jsx("h4", { className: "text-white text-sm font-semibold mb-3", children: "Empresa" }), f.jsxs("ul", { className: "space-y-2 text-sm text-white/90", children: [f.jsx("li", { children: f.jsx("a", { href: "https://www.rus.seg.ar/nosotros", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors", children: "Nosotros" }) }), f.jsx("li", { children: f.jsx("a", { href: "https://www.rus.seg.ar/contacto", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors", children: "Contacto" }) })] })] })] }) })] }),
      f.jsx("section", { className: "bg-white py-8 pt-14 px-4", children: f.jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [f.jsxs("div", { className: "hidden lg:block", children: [f.jsxs("div", { className: "flex justify-center gap-80 items-start pb-6 border-b border-gray-200", children: [f.jsxs("div", { className: "text-center px-5", children: [f.jsx("h4", { className: "text-sm font-semibold text-gray-800 mb-1", children: "N° de inscripción SSN" }), f.jsx("p", { className: "text-base text-gray-600", children: "0360" })] }), f.jsxs("div", { className: "text-center flex flex-col items-center px-5", children: [f.jsx("a", { href: "https://www.argentina.gob.ar/ssn", target: "_blank", rel: "noopener noreferrer", className: "text-[#0066A8] hover:underline text-sm mb-3", children: "www.argentina.gob.ar/ssn" }), f.jsx("img", { src: My, alt: "SSN - Superintendencia de Seguros de la Nación", className: "h-10" })] })] }), f.jsxs("div", { className: "grid grid-cols-2 gap-12 pt-6", children: [f.jsxs("div", { className: "text-sm text-gray-600 leading-relaxed", children: [f.jsxs("p", { className: "mb-4", children: ["La entidad aseguradora dispone de un ", f.jsx("strong", { className: "text-gray-800", children: "Servicio de Atención al Asegurado" }), " que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes."] }), f.jsxs("p", { children: ["En caso de reclamo ante la entidad aseguradora no resuelto o desestimado, podrá denunciarlo a través de", " ", f.jsx("a", { href: "https://www.argentina.gob.ar/ssn", target: "_blank", rel: "noopener noreferrer", className: "text-[#0066A8] hover:underline", children: "www.argentina.gob.ar/ssn" }), "."] })] }), f.jsxs("div", { className: "text-sm text-gray-700 space-y-3", children: [f.jsxs("div", { children: [f.jsxs("p", { children: [f.jsx("strong", { children: "RESPONSABLE:" }), " Frontoni, Diego Alejandro"] }), f.jsx("p", { className: "text-gray-600", children: "Tel.: 0800 888 9787 - Opción: 1" })] }), f.jsxs("div", { children: [f.jsxs("p", { children: [f.jsx("strong", { children: "SUPLENTE:" }), " Manzur, Luisina"] }), f.jsx("p", { className: "text-gray-600", children: "Tel.: 0800 888 9787 - Opción: 2" })] }), f.jsx("div", { children: f.jsxs("p", { children: [f.jsx("strong", { children: "EMAIL:" }), " ", f.jsx("a", { href: "mailto:saarus@riouruguay.com.ar", className: "text-[#0066A8] hover:underline", children: "saarus@riouruguay.com.ar" })] }) })] })] })] }), f.jsxs("div", { className: "lg:hidden space-y-6", children: [f.jsxs("div", { className: "flex flex-col justify-center gap-4 text-center pb-4 border-b border-gray-200", children: [f.jsxs("div", { children: [f.jsx("h4", { className: "text-xs font-semibold text-gray-800 mb-1", children: "N° de inscripción SSN" }), f.jsx("p", { className: "text-sm text-gray-600", children: "0360" })] }), f.jsxs("div", { className: "text-center pb-4 border-b border-gray-200", children: [f.jsx("a", { href: "https://www.argentina.gob.ar/ssn", target: "_blank", rel: "noopener noreferrer", className: "text-[#0066A8] hover:underline text-sm block mb-3", children: "www.argentina.gob.ar/ssn" }), f.jsx("img", { src: My, alt: "SSN - Superintendencia de Seguros de la Nación", className: "h-12 mx-auto" })] }), f.jsxs("div", { className: "text-xs text-gray-600 leading-relaxed pb-4 border-b border-gray-200", children: [f.jsxs("p", { className: "mb-3", children: ["La entidad aseguradora dispone de un ", f.jsx("strong", { className: "text-gray-800", children: "Servicio de Atención al Asegurado" }), " que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes."] }), f.jsxs("p", { children: ["En caso de reclamo ante la entidad aseguradora no resuelto o desestimado, podrá denunciarlo a través de", " ", f.jsx("a", { href: "https://www.argentina.gob.ar/ssn", target: "_blank", rel: "noopener noreferrer", className: "text-[#0066A8] hover:underline", children: "www.argentina.gob.ar/ssn" }), "."] })] })] }), f.jsxs("div", { className: "text-xs text-gray-700 space-y-3 pb-4 border-b border-gray-200", children: [f.jsxs("div", { children: [f.jsxs("p", { children: [f.jsx("strong", { children: "RESPONSABLE:" }), " Frontoni, Diego Alejandro"] }), f.jsx("p", { className: "text-gray-600", children: "Tel.: 0800 888 9787 - Opción: 1" })] }), f.jsxs("div", { children: [f.jsxs("p", { children: [f.jsx("strong", { children: "SUPLENTE:" }), " Manzur, Luisina"] }), f.jsx("p", { className: "text-gray-600", children: "Tel.: 0800 888 9787 - Opción: 2" })] }), f.jsx("div", { children: f.jsxs("p", { children: [f.jsx("strong", { children: "EMAIL:" }), " ", f.jsx("a", { href: "mailto:saarus@riouruguay.com.ar", className: "text-[#0066A8] hover:underline", children: "saarus@riouruguay.com.ar" })] }) })] })] }), f.jsx("div", { className: "text-center pt-4 mt-4 border-t border-gray-200", children: f.jsx("p", { className: "text-xs text-gray-500", children: "© Copyright 2018 Río Uruguay Cooperativa de Seguros Limitada. Congreso de Tucumán 21. Concepción del Uruguay, Entre Ríos, Argentina." }) })] }) }),
      f.jsx(Q5, {
        open: u,
        onOpenChange: h,
        children: f.jsxs(eD, {
          className: "sm:max-w-[500px]",
          children: [
            f.jsxs(tD, { children: [f.jsxs(nD, { className: "text-2xl font-bold text-gray-900", children: ["Contratar Plan ", p] }), f.jsx(rD, { className: "text-gray-600", children: "Completá tus datos y nos contactaremos a la brevedad para finalizar tu contratación." })] }),
            f.jsxs("form", {
              onSubmit: x(W),
              className: "space-y-5 mt-4",
              children: [
                f.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [f.jsxs("div", { className: "space-y-2", children: [f.jsx(Ks, { htmlFor: "firstName", className: "text-gray-900", children: "Nombre" }), f.jsx(Zr, { id: "firstName", placeholder: "Juan", ...w("firstName", { required: "El nombre es requerido", minLength: { value: 2, message: "Mínimo 2 caracteres" } }), className: j.firstName ? "border-red-500" : "" }), j.firstName && f.jsx("p", { className: "text-red-500 text-xs", children: j.firstName.message })] }), f.jsxs("div", { className: "space-y-2", children: [f.jsx(Ks, { htmlFor: "lastName", className: "text-gray-900", children: "Apellido" }), f.jsx(Zr, { id: "lastName", placeholder: "Pérez", ...w("lastName", { required: "El apellido es requerido", minLength: { value: 2, message: "Mínimo 2 caracteres" } }), className: j.lastName ? "border-red-500" : "" }), j.lastName && f.jsx("p", { className: "text-red-500 text-xs", children: j.lastName.message })] })] }),
                f.jsxs("div", {
                  className: "grid grid-cols-3 gap-3",
                  children: [
                    f.jsxs("div", {
                      className: "space-y-2 col-span-1",
                      children: [
                        f.jsxs("div", { className: "flex justify-between items-center mb-1", children: [f.jsx(Ks, { htmlFor: "areaCode", className: "text-gray-900", children: "Cód. Área" }), f.jsxs("span", { className: `text-xs font-medium ${M.length === 2 ? "text-green-600" : "text-red-500"}`, children: [M.length, " de 2"] })] }),
                        f.jsx(Zr, {
                          id: "areaCode",
                          placeholder: "11",
                          type: "text",
                          maxLength: 2,
                          inputMode: "numeric",
                          ...w("areaCode", {
                            required: "Req.",
                            minLength: { value: 2, message: "2 dígitos" },
                            maxLength: { value: 2, message: "2 dígitos" },
                            pattern: { value: /^[0-9]+$/, message: "Solo números" },
                            onChange: (q) => {
                              const G = q.target.value.replace(/\D/g, "");
                              q.target.value = G.slice(0, 2);
                            },
                          }),
                          className: j.areaCode ? "border-red-500" : "",
                        }),
                        j.areaCode && f.jsx("p", { className: "text-red-500 text-xs", children: j.areaCode.message }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "space-y-2 col-span-2",
                      children: [
                        f.jsxs("div", { className: "flex justify-between items-center mb-1", children: [f.jsx(Ks, { htmlFor: "phoneNumber", className: "text-gray-900", children: "Teléfono" }), f.jsxs("span", { className: `text-xs font-medium ${T.length === 8 ? "text-green-600" : "text-red-500"}`, children: [T.length, " de 8"] })] }),
                        f.jsx(Zr, {
                          id: "phoneNumber",
                          placeholder: "12345678",
                          type: "text",
                          maxLength: 8,
                          inputMode: "numeric",
                          ...w("phoneNumber", {
                            required: "Requerido",
                            minLength: { value: 8, message: "8 dígitos" },
                            maxLength: { value: 8, message: "8 dígitos" },
                            pattern: { value: /^[0-9]+$/, message: "Solo números" },
                            onChange: (q) => {
                              const G = q.target.value.replace(/\D/g, "");
                              q.target.value = G.slice(0, 8);
                            },
                          }),
                          className: j.phoneNumber ? "border-red-500" : "",
                        }),
                        j.phoneNumber && f.jsx("p", { className: "text-red-500 text-xs", children: j.phoneNumber.message }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", { className: "space-y-2", children: [f.jsx(Ks, { htmlFor: "email", className: "text-gray-900", children: "Email" }), f.jsx(Zr, { id: "email", type: "email", placeholder: "tu@email.com", ...w("email", { required: "El email es requerido", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido" } }), className: j.email ? "border-red-500" : "" }), j.email && f.jsx("p", { className: "text-red-500 text-xs", children: j.email.message })] }),
                f.jsxs("div", { className: "space-y-2", children: [f.jsx(Ks, { htmlFor: "plan", className: "text-gray-900", children: "Plan seleccionado" }), f.jsx(Zr, { id: "plan", type: "text", value: p, readOnly: !0, className: "bg-gray-50 cursor-not-allowed" })] }),
                f.jsxs("div", { className: "flex gap-3 pt-4", children: [f.jsx("button", { type: "button", onClick: () => h(!1), disabled: C, className: `flex-1 px-4 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-semibold transition-colors ${C ? "bg-gray-100 cursor-not-allowed opacity-50" : "hover:bg-gray-50"}`, children: "Cancelar" }), f.jsx("button", { type: "submit", disabled: C, className: `flex-1 px-4 py-3 text-white rounded-full font-semibold transition-colors ${C ? "bg-gray-400 cursor-not-allowed" : "bg-[#2F73E8] hover:bg-[#001489]"}`, children: C ? "Contratando..." : "Contratar" })] }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
Y2.createRoot(document.getElementById("root")).render(f.jsx(iD, {}));
