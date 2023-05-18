import { createTheme as ht } from "baseui";
import * as O from "react";
import Wr from "react";
const Jn = ht(
  {},
  {
    colors: {
      primary: "#000",
      accent: "#fff",
      accent50: "#fff"
    }
  }
);
var Xe = { exports: {} }, ae = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ve, Fr;
function Vr() {
  if (Fr)
    return Ve;
  Fr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var d = {}, s = 0; s < 10; s++)
        d["_" + String.fromCharCode(s)] = s;
      var g = Object.getOwnPropertyNames(d).map(function(y) {
        return d[y];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        b[y] = y;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ve = o() ? Object.assign : function(i, d) {
    for (var s, g = n(i), b, y = 1; y < arguments.length; y++) {
      s = Object(arguments[y]);
      for (var S in s)
        r.call(s, S) && (g[S] = s[S]);
      if (e) {
        b = e(s);
        for (var m = 0; m < b.length; m++)
          t.call(s, b[m]) && (g[b[m]] = s[b[m]]);
      }
    }
    return g;
  }, Ve;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function St() {
  if (wr)
    return ae;
  wr = 1, Vr();
  var e = Wr, r = 60103;
  if (ae.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), ae.Fragment = t("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(s, g, b) {
    var y, S = {}, m = null, _ = null;
    b !== void 0 && (m = "" + b), g.key !== void 0 && (m = "" + g.key), g.ref !== void 0 && (_ = g.ref);
    for (y in g)
      o.call(g, y) && !i.hasOwnProperty(y) && (S[y] = g[y]);
    if (s && s.defaultProps)
      for (y in g = s.defaultProps, g)
        S[y] === void 0 && (S[y] = g[y]);
    return { $$typeof: r, type: s, key: m, ref: _, props: S, _owner: n.current };
  }
  return ae.jsx = d, ae.jsxs = d, ae;
}
var Ye = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function Et() {
  return xr || (xr = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = Wr, t = Vr(), n = 60103, o = 60106;
      e.Fragment = 60107;
      var i = 60108, d = 60114, s = 60109, g = 60110, b = 60112, y = 60113, S = 60120, m = 60115, _ = 60116, T = 60121, H = 60122, I = 60117, B = 60129, j = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var h = Symbol.for;
        n = h("react.element"), o = h("react.portal"), e.Fragment = h("react.fragment"), i = h("react.strict_mode"), d = h("react.profiler"), s = h("react.provider"), g = h("react.context"), b = h("react.forward_ref"), y = h("react.suspense"), S = h("react.suspense_list"), m = h("react.memo"), _ = h("react.lazy"), T = h("react.block"), H = h("react.server.block"), I = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), B = h("react.debug_trace_mode"), h("react.offscreen"), j = h("react.legacy_hidden");
      }
      var $ = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
      function Y(a) {
        if (a === null || typeof a != "object")
          return null;
        var c = $ && a[$] || a[f];
        return typeof c == "function" ? c : null;
      }
      var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function N(a) {
        {
          for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
            u[v - 1] = arguments[v];
          ke("error", a, u);
        }
      }
      function ke(a, c, u) {
        {
          var v = M.ReactDebugCurrentFrame, C = v.getStackAddendum();
          C !== "" && (c += "%s", u = u.concat([C]));
          var R = u.map(function(w) {
            return "" + w;
          });
          R.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, R);
        }
      }
      var Ae = !1;
      function De(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === e.Fragment || a === d || a === B || a === i || a === y || a === S || a === j || Ae || typeof a == "object" && a !== null && (a.$$typeof === _ || a.$$typeof === m || a.$$typeof === s || a.$$typeof === g || a.$$typeof === b || a.$$typeof === I || a.$$typeof === T || a[0] === H));
      }
      function Be(a, c, u) {
        var v = c.displayName || c.name || "";
        return a.displayName || (v !== "" ? u + "(" + v + ")" : u);
      }
      function Se(a) {
        return a.displayName || "Context";
      }
      function W(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && N("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case d:
            return "Profiler";
          case i:
            return "StrictMode";
          case y:
            return "Suspense";
          case S:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case g:
              var c = a;
              return Se(c) + ".Consumer";
            case s:
              var u = a;
              return Se(u._context) + ".Provider";
            case b:
              return Be(a, a.render, "ForwardRef");
            case m:
              return W(a.type);
            case T:
              return W(a._render);
            case _: {
              var v = a, C = v._payload, R = v._init;
              try {
                return W(R(C));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var G = 0, Ee, Oe, ue, Fe, de, we, xe;
      function Pe() {
      }
      Pe.__reactDisabledLog = !0;
      function je() {
        {
          if (G === 0) {
            Ee = console.log, Oe = console.info, ue = console.warn, Fe = console.error, de = console.group, we = console.groupCollapsed, xe = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: Pe,
              writable: !0
            };
            Object.defineProperties(console, {
              info: a,
              log: a,
              warn: a,
              error: a,
              group: a,
              groupCollapsed: a,
              groupEnd: a
            });
          }
          G++;
        }
      }
      function Le() {
        {
          if (G--, G === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, a, {
                value: Ee
              }),
              info: t({}, a, {
                value: Oe
              }),
              warn: t({}, a, {
                value: ue
              }),
              error: t({}, a, {
                value: Fe
              }),
              group: t({}, a, {
                value: de
              }),
              groupCollapsed: t({}, a, {
                value: we
              }),
              groupEnd: t({}, a, {
                value: xe
              })
            });
          }
          G < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fe = M.ReactCurrentDispatcher, ge;
      function J(a, c, u) {
        {
          if (ge === void 0)
            try {
              throw Error();
            } catch (C) {
              var v = C.stack.trim().match(/\n( *(at )?)/);
              ge = v && v[1] || "";
            }
          return `
` + ge + a;
        }
      }
      var pe = !1, Z;
      {
        var Ne = typeof WeakMap == "function" ? WeakMap : Map;
        Z = new Ne();
      }
      function p(a, c) {
        if (!a || pe)
          return "";
        {
          var u = Z.get(a);
          if (u !== void 0)
            return u;
        }
        var v;
        pe = !0;
        var C = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var R;
        R = fe.current, fe.current = null, je();
        try {
          if (c) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (q) {
                v = q;
              }
              Reflect.construct(a, [], w);
            } else {
              try {
                w.call();
              } catch (q) {
                v = q;
              }
              a.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              v = q;
            }
            a();
          }
        } catch (q) {
          if (q && v && typeof q.stack == "string") {
            for (var F = q.stack.split(`
`), z = v.stack.split(`
`), k = F.length - 1, A = z.length - 1; k >= 1 && A >= 0 && F[k] !== z[A]; )
              A--;
            for (; k >= 1 && A >= 0; k--, A--)
              if (F[k] !== z[A]) {
                if (k !== 1 || A !== 1)
                  do
                    if (k--, A--, A < 0 || F[k] !== z[A]) {
                      var U = `
` + F[k].replace(" at new ", " at ");
                      return typeof a == "function" && Z.set(a, U), U;
                    }
                  while (k >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          pe = !1, fe.current = R, Le(), Error.prepareStackTrace = C;
        }
        var ne = a ? a.displayName || a.name : "", Or = ne ? J(ne) : "";
        return typeof a == "function" && Z.set(a, Or), Or;
      }
      function ee(a, c, u) {
        return p(a, !1);
      }
      function re(a) {
        var c = a.prototype;
        return !!(c && c.isReactComponent);
      }
      function Q(a, c, u) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return p(a, re(a));
        if (typeof a == "string")
          return J(a);
        switch (a) {
          case y:
            return J("Suspense");
          case S:
            return J("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case b:
              return ee(a.render);
            case m:
              return Q(a.type, c, u);
            case T:
              return ee(a._render);
            case _: {
              var v = a, C = v._payload, R = v._init;
              try {
                return Q(R(C), c, u);
              } catch {
              }
            }
          }
        return "";
      }
      var fr = {}, gr = M.ReactDebugCurrentFrame;
      function Te(a) {
        if (a) {
          var c = a._owner, u = Q(a.type, a._source, c ? c.type : null);
          gr.setExtraStackFrame(u);
        } else
          gr.setExtraStackFrame(null);
      }
      function tt(a, c, u, v, C) {
        {
          var R = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var w in a)
            if (R(a, w)) {
              var F = void 0;
              try {
                if (typeof a[w] != "function") {
                  var z = Error((v || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw z.name = "Invariant Violation", z;
                }
                F = a[w](c, w, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                F = k;
              }
              F && !(F instanceof Error) && (Te(C), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, w, typeof F), Te(null)), F instanceof Error && !(F.message in fr) && (fr[F.message] = !0, Te(C), N("Failed %s type: %s", u, F.message), Te(null));
            }
        }
      }
      var me = M.ReactCurrentOwner, He = Object.prototype.hasOwnProperty, nt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, pr, mr, Ie;
      Ie = {};
      function at(a) {
        if (He.call(a, "ref")) {
          var c = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function ot(a) {
        if (He.call(a, "key")) {
          var c = Object.getOwnPropertyDescriptor(a, "key").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function it(a, c) {
        if (typeof a.ref == "string" && me.current && c && me.current.stateNode !== c) {
          var u = W(me.current.type);
          Ie[u] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(me.current.type), a.ref), Ie[u] = !0);
        }
      }
      function lt(a, c) {
        {
          var u = function() {
            pr || (pr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function ct(a, c) {
        {
          var u = function() {
            mr || (mr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var st = function(a, c, u, v, C, R, w) {
        var F = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: a,
          key: c,
          ref: u,
          props: w,
          // Record the component responsible for creating this element.
          _owner: R
        };
        return F._store = {}, Object.defineProperty(F._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(F, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.defineProperty(F, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
      };
      function ut(a, c, u, v, C) {
        {
          var R, w = {}, F = null, z = null;
          u !== void 0 && (F = "" + u), ot(c) && (F = "" + c.key), at(c) && (z = c.ref, it(c, C));
          for (R in c)
            He.call(c, R) && !nt.hasOwnProperty(R) && (w[R] = c[R]);
          if (a && a.defaultProps) {
            var k = a.defaultProps;
            for (R in k)
              w[R] === void 0 && (w[R] = k[R]);
          }
          if (F || z) {
            var A = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            F && lt(w, A), z && ct(w, A);
          }
          return st(a, F, z, C, v, me.current, w);
        }
      }
      var ze = M.ReactCurrentOwner, yr = M.ReactDebugCurrentFrame;
      function te(a) {
        if (a) {
          var c = a._owner, u = Q(a.type, a._source, c ? c.type : null);
          yr.setExtraStackFrame(u);
        } else
          yr.setExtraStackFrame(null);
      }
      var Me;
      Me = !1;
      function We(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      function vr() {
        {
          if (ze.current) {
            var a = W(ze.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function dt(a) {
        {
          if (a !== void 0) {
            var c = a.fileName.replace(/^.*[\\\/]/, ""), u = a.lineNumber;
            return `

Check your code at ` + c + ":" + u + ".";
          }
          return "";
        }
      }
      var br = {};
      function ft(a) {
        {
          var c = vr();
          if (!c) {
            var u = typeof a == "string" ? a : a.displayName || a.name;
            u && (c = `

Check the top-level render call using <` + u + ">.");
          }
          return c;
        }
      }
      function hr(a, c) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var u = ft(c);
          if (br[u])
            return;
          br[u] = !0;
          var v = "";
          a && a._owner && a._owner !== ze.current && (v = " It was passed a child from " + W(a._owner.type) + "."), te(a), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), te(null);
        }
      }
      function Sr(a, c) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var u = 0; u < a.length; u++) {
              var v = a[u];
              We(v) && hr(v, c);
            }
          else if (We(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var C = Y(a);
            if (typeof C == "function" && C !== a.entries)
              for (var R = C.call(a), w; !(w = R.next()).done; )
                We(w.value) && hr(w.value, c);
          }
        }
      }
      function gt(a) {
        {
          var c = a.type;
          if (c == null || typeof c == "string")
            return;
          var u;
          if (typeof c == "function")
            u = c.propTypes;
          else if (typeof c == "object" && (c.$$typeof === b || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          c.$$typeof === m))
            u = c.propTypes;
          else
            return;
          if (u) {
            var v = W(c);
            tt(u, a.props, "prop", v, a);
          } else if (c.PropTypes !== void 0 && !Me) {
            Me = !0;
            var C = W(c);
            N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
          }
          typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function pt(a) {
        {
          for (var c = Object.keys(a.props), u = 0; u < c.length; u++) {
            var v = c[u];
            if (v !== "children" && v !== "key") {
              te(a), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), te(null);
              break;
            }
          }
          a.ref !== null && (te(a), N("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
        }
      }
      function Er(a, c, u, v, C, R) {
        {
          var w = De(a);
          if (!w) {
            var F = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var z = dt(C);
            z ? F += z : F += vr();
            var k;
            a === null ? k = "null" : Array.isArray(a) ? k = "array" : a !== void 0 && a.$$typeof === n ? (k = "<" + (W(a.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : k = typeof a, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, F);
          }
          var A = ut(a, c, u, C, R);
          if (A == null)
            return A;
          if (w) {
            var U = c.children;
            if (U !== void 0)
              if (v)
                if (Array.isArray(U)) {
                  for (var ne = 0; ne < U.length; ne++)
                    Sr(U[ne], a);
                  Object.freeze && Object.freeze(U);
                } else
                  N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Sr(U, a);
          }
          return a === e.Fragment ? pt(A) : gt(A), A;
        }
      }
      function mt(a, c, u) {
        return Er(a, c, u, !0);
      }
      function yt(a, c, u) {
        return Er(a, c, u, !1);
      }
      var vt = yt, bt = mt;
      e.jsx = vt, e.jsxs = bt;
    }();
  }(Ye)), Ye;
}
process.env.NODE_ENV === "production" ? Xe.exports = St() : Xe.exports = Et();
var Ot = Xe.exports, Ft = {
  white: "#FFFFFF",
  gray50: "#F6F6F6",
  gray100: "#EEEEEE",
  gray200: "#E2E2E2",
  gray300: "#CBCBCB",
  gray400: "#AFAFAF",
  gray500: "#6B6B6B",
  gray600: "#545454",
  gray700: "#333333",
  gray800: "#1F1F1F",
  gray900: "#141414",
  black: "#000000",
  platinum50: "#F4FAFB",
  platinum100: "#EBF5F7",
  platinum200: "#CCDFE5",
  platinum300: "#A1BDCA",
  platinum400: "#8EA3AD",
  platinum500: "#6C7C83",
  platinum600: "#556268",
  platinum700: "#394145",
  platinum800: "#142328",
  red50: "#FFEFED",
  red100: "#FED7D2",
  red200: "#F1998E",
  red300: "#E85C4A",
  red400: "#E11900",
  red500: "#AB1300",
  red600: "#870F00",
  red700: "#5A0A00",
  orange50: "#FFF3EF",
  orange100: "#FFE1D6",
  orange200: "#FABDA5",
  orange300: "#FA9269",
  orange400: "#FF6937",
  orange500: "#C14F29",
  orange600: "#9A3F21",
  orange700: "#672A16",
  yellow50: "#FFFAF0",
  yellow100: "#FFF2D9",
  yellow200: "#FFE3AC",
  yellow300: "#FFCF70",
  yellow400: "#FFC043",
  yellow500: "#BC8B2C",
  yellow600: "#996F00",
  yellow700: "#674D1B",
  lime50: "#F2F7ED",
  lime100: "#E0ECD2",
  lime200: "#BCD69D",
  lime300: "#8BB956",
  lime400: "#67A421",
  lime500: "#4E7C19",
  lime600: "#3D6213",
  lime700: "#29410d",
  green50: "#E6F2ED",
  green100: "#ADDEC9",
  green200: "#66D19E",
  green300: "#06C167",
  green400: "#048848",
  green500: "#03703C",
  green600: "#03582F",
  green700: "#10462D",
  teal50: "#EDF5F7",
  teal100: "#D2E8EC",
  teal200: "#9DCDD6",
  teal300: "#56A9B9",
  teal400: "#218EA4",
  teal500: "#196B7C",
  teal600: "#135562",
  teal700: "#0D3841",
  blue50: "#EFF3FE",
  blue100: "#D4E2FC",
  blue200: "#A0BFF8",
  blue300: "#5B91F5",
  blue400: "#276EF1",
  blue500: "#1E54B7",
  blue600: "#174291",
  blue700: "#102C60",
  cobalt50: "#EBEDFA",
  cobalt100: "#D2D7F0",
  cobalt200: "#949CE3",
  cobalt300: "#535FCF",
  cobalt400: "#0E1FC1",
  cobalt500: "#0A1899",
  cobalt600: "#081270",
  cobalt700: "#050C4D",
  purple50: "#F3F1F9",
  purple100: "#E3DDF2",
  purple200: "#C1B4E2",
  purple300: "#957FCE",
  purple400: "#7356BF",
  purple500: "#574191",
  purple600: "#453473",
  purple700: "#2E224C",
  magenta50: "#F9F1F7",
  magenta100: "#F2DDEB",
  magenta200: "#E2B4D3",
  magenta300: "#CE7EB3",
  magenta400: "#BF569C",
  magenta500: "#914176",
  magenta600: "#72335D",
  magenta700: "#4C223E",
  brown50: "#F6F0EA",
  brown100: "#EBE0DB",
  brown200: "#D2BBB0",
  brown300: "#B18977",
  brown400: "#99644C",
  brown500: "#744C3A",
  brown600: "#5C3C2E",
  brown700: "#3D281E"
};
const l = Ft;
var wt = {
  // Primary Palette
  primaryA: l.black,
  primaryB: l.white,
  primary: l.black,
  primary50: l.gray50,
  primary100: l.gray100,
  primary200: l.gray200,
  primary300: l.gray300,
  primary400: l.gray400,
  primary500: l.gray500,
  primary600: l.gray600,
  primary700: l.gray700,
  // Accent Palette
  accent: l.blue400,
  accent50: l.blue50,
  accent100: l.blue100,
  accent200: l.blue200,
  accent300: l.blue300,
  accent400: l.blue400,
  accent500: l.blue500,
  accent600: l.blue600,
  accent700: l.blue700,
  // Negative Palette
  negative: l.red400,
  negative50: l.red50,
  negative100: l.red100,
  negative200: l.red200,
  negative300: l.red300,
  negative400: l.red400,
  negative500: l.red500,
  negative600: l.red600,
  negative700: l.red700,
  // Warning Palette
  warning: l.yellow400,
  warning50: l.yellow50,
  warning100: l.yellow100,
  warning200: l.yellow200,
  warning300: l.yellow300,
  warning400: l.yellow400,
  warning500: l.yellow500,
  warning600: l.yellow600,
  warning700: l.yellow700,
  // Positive Palette
  positive: l.green500,
  positive50: l.green50,
  positive100: l.green100,
  positive200: l.green200,
  positive300: l.green300,
  positive400: l.green400,
  positive500: l.green500,
  positive600: l.green600,
  positive700: l.green700,
  // Monochrome Palette
  white: l.white,
  black: l.black,
  mono100: l.white,
  mono200: l.gray50,
  mono300: l.gray100,
  mono400: l.gray200,
  mono500: l.gray300,
  mono600: l.gray400,
  mono700: l.gray500,
  mono800: l.gray600,
  mono900: l.gray700,
  mono1000: l.black,
  // Rating Palette,
  ratingInactiveFill: l.gray100,
  ratingStroke: l.gray300
};
const ar = wt;
function ye() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "1", t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, function(o, i, d, s) {
    return i + i + d + d + s + s;
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? "rgba(".concat(parseInt(n[1], 16), ", ").concat(parseInt(n[2], 16), ", ").concat(parseInt(n[3], 16), ", ").concat(r, ")") : null;
}
function Pr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Tr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Pr(Object(t), !0).forEach(function(n) {
      xt(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function xt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
const Pt = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ar, r = {
    // Background
    backgroundPrimary: e.primaryB,
    backgroundSecondary: l.gray50,
    backgroundTertiary: l.gray100,
    backgroundInversePrimary: e.primaryA,
    backgroundInverseSecondary: l.gray800,
    // Content
    contentPrimary: e.primaryA,
    contentSecondary: l.gray600,
    contentTertiary: l.gray500,
    contentInversePrimary: e.primaryB,
    contentInverseSecondary: l.gray300,
    contentInverseTertiary: l.gray400,
    // Border
    borderOpaque: l.gray200,
    borderTransparent: ye(e.primaryA, "0.08"),
    borderSelected: e.primaryA,
    borderInverseOpaque: l.gray700,
    borderInverseTransparent: ye(e.primaryB, "0.2"),
    borderInverseSelected: e.primaryB
  }, t = {
    // Backgrounds
    backgroundStateDisabled: l.gray50,
    backgroundOverlayDark: ye(l.black, "0.3"),
    backgroundOverlayLight: ye(l.black, "0.08"),
    backgroundOverlayArt: ye(l.black, "0.00"),
    backgroundAccent: e.accent,
    backgroundNegative: e.negative,
    backgroundWarning: e.warning,
    backgroundPositive: l.green400,
    backgroundLightAccent: l.blue50,
    backgroundLightNegative: l.red50,
    backgroundLightWarning: l.yellow50,
    backgroundLightPositive: l.green50,
    backgroundAlwaysDark: l.black,
    backgroundAlwaysLight: l.white,
    // Content
    contentStateDisabled: l.gray400,
    contentAccent: e.accent,
    contentOnColor: l.white,
    contentOnColorInverse: l.black,
    contentNegative: e.negative,
    contentWarning: l.yellow600,
    contentPositive: l.green400,
    // Border
    borderStateDisabled: l.gray50,
    borderAccent: l.blue400,
    borderAccentLight: l.blue200,
    borderNegative: l.red200,
    borderWarning: l.yellow200,
    borderPositive: l.green200,
    // Programs
    safety: l.blue400,
    eatsGreen400: l.green400,
    freightBlue400: l.cobalt400,
    jumpRed400: l.red400,
    rewardsTier1: l.blue400,
    rewardsTier2: l.yellow400,
    rewardsTier3: l.platinum400,
    rewardsTier4: l.black,
    membership: l.yellow600
  };
  return Tr(Tr({}, r), t);
};
var oe = "rgba(0, 0, 0, 0.08)";
const Tt = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ar;
  return {
    bannerActionLowInfo: e.accent100,
    bannerActionLowNegative: e.negative100,
    bannerActionLowPositive: e.positive100,
    bannerActionLowWarning: e.warning200,
    bannerActionHighInfo: e.accent500,
    bannerActionHighNegative: e.negative500,
    bannerActionHighPositive: e.positive500,
    bannerActionHighWarning: e.warning200,
    // Buttons
    buttonPrimaryFill: e.primary,
    buttonPrimaryText: e.white,
    buttonPrimaryHover: e.primary700,
    buttonPrimaryActive: e.primary600,
    buttonPrimarySelectedFill: e.primary600,
    buttonPrimarySelectedText: e.white,
    buttonPrimarySpinnerForeground: e.accent,
    buttonPrimarySpinnerBackground: e.primaryB,
    buttonSecondaryFill: e.primary100,
    buttonSecondaryText: e.primary,
    buttonSecondaryHover: e.primary200,
    buttonSecondaryActive: e.primary300,
    buttonSecondarySelectedFill: e.primary300,
    buttonSecondarySelectedText: e.primary,
    buttonSecondarySpinnerForeground: e.accent,
    buttonSecondarySpinnerBackground: e.primaryB,
    buttonTertiaryFill: "transparent",
    buttonTertiaryText: e.primary,
    buttonTertiaryHover: e.primary50,
    buttonTertiaryActive: e.primary100,
    buttonTertiarySelectedFill: e.primary100,
    buttonTertiarySelectedText: e.primary,
    buttonTertiaryDisabledActiveFill: e.primary50,
    buttonTertiaryDisabledActiveText: e.mono600,
    buttonTertiarySpinnerForeground: e.accent,
    buttonTertiarySpinnerBackground: e.primary100,
    buttonDisabledFill: e.mono200,
    buttonDisabledText: e.mono600,
    buttonDisabledActiveFill: e.mono700,
    buttonDisabledActiveText: e.mono100,
    buttonDisabledSpinnerForeground: e.mono600,
    buttonDisabledSpinnerBackground: e.mono400,
    // Breadcrumbs
    breadcrumbsText: e.black,
    breadcrumbsSeparatorFill: e.mono700,
    // Datepicker
    calendarBackground: e.mono100,
    calendarForeground: e.mono1000,
    calendarForegroundDisabled: e.mono500,
    calendarHeaderBackground: e.white,
    calendarHeaderForeground: e.primary,
    calendarHeaderBackgroundActive: e.primary700,
    calendarHeaderForegroundDisabled: e.primary500,
    calendarDayForegroundPseudoSelected: e.mono1000,
    calendarDayBackgroundPseudoSelectedHighlighted: e.primary200,
    calendarDayForegroundPseudoSelectedHighlighted: e.mono1000,
    calendarDayBackgroundSelected: e.primary,
    calendarDayForegroundSelected: e.white,
    calendarDayBackgroundSelectedHighlighted: e.primary,
    calendarDayForegroundSelectedHighlighted: e.white,
    // Combobox
    comboboxListItemFocus: e.mono200,
    comboboxListItemHover: e.mono300,
    // FileUploader
    fileUploaderBackgroundColor: e.mono200,
    fileUploaderBackgroundColorActive: e.primary50,
    fileUploaderBorderColorActive: e.primary,
    fileUploaderBorderColorDefault: e.mono500,
    fileUploaderMessageColor: e.mono800,
    // Links
    linkText: e.primary,
    linkVisited: e.primary700,
    linkHover: e.primary600,
    linkActive: e.primary500,
    // List
    listHeaderFill: e.white,
    listBodyFill: e.white,
    // ProgressSteps
    progressStepsCompletedText: e.white,
    progressStepsCompletedFill: e.primary,
    progressStepsActiveText: e.white,
    progressStepsActiveFill: e.primary,
    // Toggle
    toggleFill: e.white,
    toggleFillChecked: e.primary,
    toggleFillDisabled: e.mono600,
    toggleTrackFill: e.mono400,
    toggleTrackFillDisabled: e.mono300,
    // Tick
    tickFill: e.mono100,
    tickFillHover: e.mono200,
    tickFillActive: e.mono300,
    tickFillSelected: e.primary,
    tickFillSelectedHover: e.primary700,
    tickFillSelectedHoverActive: e.primary600,
    tickFillError: e.negative50,
    tickFillErrorHover: e.negative100,
    tickFillErrorHoverActive: e.negative200,
    tickFillErrorSelected: e.negative400,
    tickFillErrorSelectedHover: e.negative500,
    tickFillErrorSelectedHoverActive: e.negative600,
    tickFillDisabled: e.mono600,
    tickBorder: e.mono700,
    tickBorderError: e.negative400,
    tickMarkFill: e.white,
    tickMarkFillError: e.white,
    tickMarkFillDisabled: e.mono100,
    // Slider/Toggle
    sliderTrackFill: "transparent",
    sliderHandleFill: e.primaryA,
    sliderHandleFillDisabled: e.primary400,
    sliderHandleInnerFill: e.primaryA,
    sliderTrackFillHover: e.mono500,
    sliderTrackFillActive: e.mono600,
    sliderTrackFillDisabled: e.mono300,
    sliderHandleInnerFillDisabled: e.mono400,
    sliderHandleInnerFillSelectedHover: e.primary,
    sliderHandleInnerFillSelectedActive: e.primary500,
    // Inputs
    inputBorder: e.mono300,
    inputFill: e.mono300,
    inputFillError: e.negative50,
    inputFillDisabled: e.mono200,
    inputFillActive: e.mono200,
    inputFillPositive: e.positive50,
    inputTextDisabled: e.mono600,
    inputBorderError: e.negative200,
    inputBorderPositive: e.positive200,
    inputEnhancerFill: e.mono300,
    inputEnhancerFillDisabled: e.mono300,
    inputEnhancerTextDisabled: e.mono600,
    inputPlaceholder: e.mono700,
    inputPlaceholderDisabled: e.mono600,
    // Menu
    menuFill: e.mono100,
    menuFillHover: e.mono200,
    menuFontDefault: e.mono800,
    menuFontDisabled: e.mono500,
    menuFontHighlighted: e.mono1000,
    menuFontSelected: e.mono1000,
    // Modal
    modalCloseColor: e.mono1000,
    modalCloseColorHover: e.mono800,
    modalCloseColorFocus: e.mono800,
    // Tab
    tabBarFill: e.mono200,
    tabColor: e.mono800,
    // Notification
    notificationInfoBackground: e.accent50,
    notificationInfoText: e.primaryA,
    notificationPositiveBackground: e.positive50,
    notificationPositiveText: e.primaryA,
    notificationWarningBackground: e.warning50,
    notificationWarningText: e.primaryA,
    notificationNegativeBackground: e.negative50,
    notificationNegativeText: e.primaryA,
    // Tag
    // Custom ramps
    tagFontDisabledRampUnit: "100",
    tagSolidFontRampUnit: "0",
    tagSolidRampUnit: "400",
    tagOutlinedFontRampUnit: "400",
    tagOutlinedRampUnit: "200",
    // Deprecated
    tagSolidHoverRampUnit: "50",
    tagSolidActiveRampUnit: "100",
    tagSolidDisabledRampUnit: "50",
    tagSolidFontHoverRampUnit: "500",
    tagLightRampUnit: "50",
    tagLightHoverRampUnit: "100",
    tagLightActiveRampUnit: "100",
    tagLightFontRampUnit: "500",
    tagLightFontHoverRampUnit: "500",
    tagOutlinedHoverRampUnit: "50",
    tagOutlinedActiveRampUnit: "0",
    tagOutlinedFontHoverRampUnit: "400",
    // Neutral
    tagNeutralFontDisabled: e.mono600,
    tagNeutralOutlinedDisabled: e.mono400,
    tagNeutralSolidFont: e.white,
    tagNeutralSolidBackground: e.black,
    tagNeutralOutlinedBackground: e.mono600,
    tagNeutralOutlinedFont: e.black,
    // Deprecated
    tagNeutralSolidHover: e.mono300,
    tagNeutralSolidActive: e.mono400,
    tagNeutralSolidDisabled: e.mono200,
    tagNeutralSolidFontHover: e.mono900,
    tagNeutralLightBackground: e.mono300,
    tagNeutralLightHover: e.mono300,
    tagNeutralLightActive: e.mono400,
    tagNeutralLightDisabled: e.mono200,
    tagNeutralLightFont: e.mono900,
    tagNeutralLightFontHover: e.mono900,
    tagNeutralOutlinedActive: e.mono900,
    tagNeutralOutlinedFontHover: e.mono800,
    tagNeutralOutlinedHover: oe,
    // Primary
    tagPrimaryFontDisabled: e.primary400,
    tagPrimaryOutlinedDisabled: e.primary200,
    tagPrimarySolidFont: e.white,
    tagPrimarySolidBackground: e.primary,
    tagPrimaryOutlinedFontHover: e.primary,
    tagPrimaryOutlinedFont: e.primary,
    // Deprecated
    tagPrimarySolidHover: e.primary100,
    tagPrimarySolidActive: e.primary200,
    tagPrimarySolidDisabled: e.primary50,
    tagPrimarySolidFontHover: e.primary700,
    tagPrimaryLightBackground: e.primary50,
    tagPrimaryLightHover: e.primary100,
    tagPrimaryLightActive: e.primary100,
    tagPrimaryLightDisabled: e.primary50,
    tagPrimaryLightFont: e.primary500,
    tagPrimaryLightFontHover: e.primary500,
    tagPrimaryOutlinedActive: e.primary600,
    tagPrimaryOutlinedHover: oe,
    tagPrimaryOutlinedBackground: e.primary400,
    // Accent
    tagAccentFontDisabled: e.accent200,
    tagAccentOutlinedDisabled: e.accent200,
    tagAccentSolidFont: e.white,
    tagAccentSolidBackground: e.accent400,
    tagAccentOutlinedBackground: e.accent200,
    tagAccentOutlinedFont: e.accent400,
    // Deprecated
    tagAccentSolidHover: e.accent50,
    tagAccentSolidActive: e.accent100,
    tagAccentSolidDisabled: e.accent50,
    tagAccentSolidFontHover: e.accent500,
    tagAccentLightBackground: e.accent50,
    tagAccentLightHover: e.accent100,
    tagAccentLightActive: e.accent100,
    tagAccentLightDisabled: e.accent50,
    tagAccentLightFont: e.accent500,
    tagAccentLightFontHover: e.accent500,
    tagAccentOutlinedActive: e.accent600,
    tagAccentOutlinedFontHover: e.accent400,
    tagAccentOutlinedHover: oe,
    // Positive
    tagPositiveFontDisabled: e.positive200,
    tagPositiveOutlinedDisabled: e.positive200,
    tagPositiveSolidFont: e.white,
    tagPositiveSolidBackground: e.positive400,
    tagPositiveOutlinedBackground: e.positive200,
    tagPositiveOutlinedFont: e.positive400,
    // Deprecated
    tagPositiveSolidHover: e.positive50,
    tagPositiveSolidActive: e.positive100,
    tagPositiveSolidDisabled: e.positive50,
    tagPositiveSolidFontHover: e.positive500,
    tagPositiveLightBackground: e.positive50,
    tagPositiveLightHover: e.positive100,
    tagPositiveLightActive: e.positive100,
    tagPositiveLightDisabled: e.positive50,
    tagPositiveLightFont: e.positive500,
    tagPositiveLightFontHover: e.positive500,
    tagPositiveOutlinedActive: e.positive600,
    tagPositiveOutlinedFontHover: e.positive400,
    tagPositiveOutlinedHover: oe,
    // Warning
    tagWarningFontDisabled: e.warning300,
    tagWarningOutlinedDisabled: e.warning300,
    tagWarningSolidFont: e.warning700,
    tagWarningSolidBackground: e.warning400,
    tagWarningOutlinedBackground: e.warning300,
    tagWarningOutlinedFont: e.warning600,
    // Deprecated
    tagWarningSolidHover: e.warning50,
    tagWarningSolidActive: e.warning100,
    tagWarningSolidDisabled: e.warning50,
    tagWarningSolidFontHover: e.warning500,
    tagWarningLightBackground: e.warning50,
    tagWarningLightHover: e.warning100,
    tagWarningLightActive: e.warning100,
    tagWarningLightDisabled: e.warning50,
    tagWarningLightFont: e.warning500,
    tagWarningLightFontHover: e.warning500,
    tagWarningOutlinedActive: e.warning600,
    tagWarningOutlinedFontHover: e.warning600,
    tagWarningOutlinedHover: oe,
    // Negative
    tagNegativeFontDisabled: e.negative200,
    tagNegativeOutlinedDisabled: e.negative200,
    tagNegativeSolidFont: e.white,
    tagNegativeSolidBackground: e.negative400,
    tagNegativeOutlinedBackground: e.negative200,
    tagNegativeOutlinedFont: e.negative400,
    // Deprecated
    tagNegativeSolidHover: e.negative50,
    tagNegativeSolidActive: e.negative100,
    tagNegativeSolidDisabled: e.negative50,
    tagNegativeSolidFontHover: e.negative500,
    tagNegativeLightBackground: e.negative50,
    tagNegativeLightHover: e.negative100,
    tagNegativeLightActive: e.negative100,
    tagNegativeLightDisabled: e.negative50,
    tagNegativeLightFont: e.negative500,
    tagNegativeLightFontHover: e.negative500,
    tagNegativeOutlinedActive: e.negative600,
    tagNegativeOutlinedFontHover: e.negative400,
    tagNegativeOutlinedHover: oe,
    // Table
    tableHeadBackgroundColor: e.mono100,
    tableBackground: e.mono100,
    tableStripedBackground: e.mono200,
    tableFilter: e.mono600,
    tableFilterHeading: e.mono700,
    tableFilterBackground: e.mono100,
    tableFilterFooterBackground: e.mono200,
    // Toast
    toastText: e.white,
    toastPrimaryText: e.white,
    toastInfoBackground: e.accent400,
    toastInfoText: e.white,
    toastPositiveBackground: e.positive400,
    toastPositiveText: e.white,
    toastWarningBackground: e.warning400,
    toastWarningText: e.black,
    toastNegativeBackground: e.negative400,
    toastNegativeText: e.white,
    // Spinner
    spinnerTrackFill: e.mono900,
    // Progress bar
    progressbarTrackFill: e.mono900,
    // Tooltip
    tooltipBackground: e.mono900,
    tooltipText: e.mono100
  };
};
var _t = {
  border100: {
    borderColor: "hsla(0, 0%, 0%, 0.04)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  border200: {
    borderColor: "hsla(0, 0%, 0%, 0.08)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  border300: {
    borderColor: "hsla(0, 0%, 0%, 0.12)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  border400: {
    borderColor: "hsla(0, 0%, 0%, 0.16)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  border500: {
    borderColor: "hsla(0, 0%, 0%, 0.2)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  border600: {
    borderColor: "hsla(0, 0%, 0%, 0.24)",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  radius100: "2px",
  radius200: "4px",
  radius300: "8px",
  radius400: "12px",
  radius500: "16px",
  /** Datepicker (Range), Progress Bar, Slider, Tag */
  useRoundedCorners: !0,
  /** Button, ButtonGroup */
  buttonBorderRadiusMini: "4px",
  buttonBorderRadius: "8px",
  /** Checkbox */
  checkboxBorderRadius: "0px",
  /** Input, Select, Textarea */
  inputBorderRadiusMini: "4px",
  inputBorderRadius: "8px",
  /** Popover, Menu, Tooltip */
  popoverBorderRadius: "8px",
  /** Card, Datepicker, Modal, Toast, Notification */
  surfaceBorderRadius: "0px",
  /** Tag */
  tagBorderRadius: "24px"
};
const Ct = _t;
var Rt = {
  shadow400: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
  shadow500: "0 2px 8px hsla(0, 0%, 0%, 0.16)",
  shadow600: "0 4px 16px hsla(0, 0%, 0%, 0.16)",
  shadow700: "0 8px 24px hsla(0, 0%, 0%, 0.16)",
  overlay0: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0)",
  overlay100: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)",
  overlay200: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)",
  overlay300: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)",
  overlay400: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)",
  overlay500: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)",
  overlay600: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)",
  shallowAbove: "0px -4px 16px rgba(0, 0, 0, 0.12)",
  shallowBelow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
  deepAbove: "0px -16px 48px rgba(0, 0, 0, 0.22)",
  deepBelow: "0px 16px 48px rgba(0, 0, 0, 0.22)"
};
const $t = Rt;
function _r(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function E(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? _r(Object(t), !0).forEach(function(n) {
      kt(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _r(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function kt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var At = {
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
}, L = '"Lucida Console", Monaco, monospace';
const Dt = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : At, r = {
    fontFamily: e.primaryFontFamily,
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "20px"
  }, t = {
    fontFamily: e.primaryFontFamily,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px"
  }, n = {
    fontFamily: e.primaryFontFamily,
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "20px"
  }, o = {
    fontFamily: e.primaryFontFamily,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px"
  }, i = {
    fontFamily: e.primaryFontFamily,
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "24px"
  }, d = {
    fontFamily: e.primaryFontFamily,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px"
  }, s = {
    fontFamily: e.primaryFontFamily,
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: "28px"
  }, g = {
    fontFamily: e.primaryFontFamily,
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px"
  }, b = {
    fontFamily: e.primaryFontFamily,
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px"
  }, y = {
    fontFamily: e.primaryFontFamily,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px"
  }, S = {
    fontFamily: e.primaryFontFamily,
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "36px"
  }, m = {
    fontFamily: e.primaryFontFamily,
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px"
  }, _ = {
    fontFamily: e.primaryFontFamily,
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "44px"
  }, T = {
    fontFamily: e.primaryFontFamily,
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "52px"
  }, H = {
    fontFamily: e.primaryFontFamily,
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "44px"
  }, I = {
    fontFamily: e.primaryFontFamily,
    fontSize: "44px",
    fontWeight: 700,
    lineHeight: "52px"
  }, B = {
    fontFamily: e.primaryFontFamily,
    fontSize: "52px",
    fontWeight: 700,
    lineHeight: "64px"
  }, j = {
    fontFamily: e.primaryFontFamily,
    fontSize: "96px",
    fontWeight: 700,
    lineHeight: "112px"
  };
  return {
    font100: r,
    font150: t,
    font200: n,
    font250: o,
    font300: i,
    font350: d,
    font400: s,
    font450: g,
    font550: b,
    font650: y,
    font750: S,
    font850: m,
    font950: _,
    font1050: T,
    font1150: H,
    font1250: I,
    font1350: B,
    font1450: j,
    ParagraphXSmall: r,
    ParagraphSmall: n,
    ParagraphMedium: i,
    ParagraphLarge: s,
    LabelXSmall: t,
    LabelSmall: o,
    LabelMedium: d,
    LabelLarge: g,
    HeadingXSmall: b,
    HeadingSmall: y,
    HeadingMedium: S,
    HeadingLarge: m,
    HeadingXLarge: _,
    HeadingXXLarge: T,
    DisplayXSmall: H,
    DisplaySmall: I,
    DisplayMedium: B,
    DisplayLarge: j,
    MonoParagraphXSmall: E(E({}, r), {}, {
      fontFamily: L
    }),
    MonoParagraphSmall: E(E({}, n), {}, {
      fontFamily: L
    }),
    MonoParagraphMedium: E(E({}, i), {}, {
      fontFamily: L
    }),
    MonoParagraphLarge: E(E({}, s), {}, {
      fontFamily: L
    }),
    MonoLabelXSmall: E(E({}, t), {}, {
      fontFamily: L
    }),
    MonoLabelSmall: E(E({}, o), {}, {
      fontFamily: L
    }),
    MonoLabelMedium: E(E({}, d), {}, {
      fontFamily: L
    }),
    MonoLabelLarge: E(E({}, g), {}, {
      fontFamily: L
    }),
    MonoHeadingXSmall: E(E({}, b), {}, {
      fontFamily: L
    }),
    MonoHeadingSmall: E(E({}, y), {}, {
      fontFamily: L
    }),
    MonoHeadingMedium: E(E({}, S), {}, {
      fontFamily: L
    }),
    MonoHeadingLarge: E(E({}, m), {}, {
      fontFamily: L
    }),
    MonoHeadingXLarge: E(E({}, _), {}, {
      fontFamily: L
    }),
    MonoHeadingXXLarge: E(E({}, T), {}, {
      fontFamily: L
    }),
    MonoDisplayXSmall: E(E({}, H), {}, {
      fontFamily: L
    }),
    MonoDisplaySmall: E(E({}, I), {}, {
      fontFamily: L
    }),
    MonoDisplayMedium: E(E({}, B), {}, {
      fontFamily: L
    }),
    MonoDisplayLarge: E(E({}, j), {}, {
      fontFamily: L
    })
  };
};
var Bt = {
  timing100: "100ms",
  timing200: "200ms",
  timing300: "300ms",
  timing400: "400ms",
  timing500: "500ms",
  timing600: "600ms",
  timing700: "700ms",
  timing800: "800ms",
  timing900: "900ms",
  timing1000: "1000ms",
  easeInCurve: "cubic-bezier(.8, .2, .6, 1)",
  easeOutCurve: "cubic-bezier(.2, .8, .4, 1)",
  easeInOutCurve: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeInQuinticCurve: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  easeOutQuinticCurve: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOutQuinticCurve: "cubic-bezier(0.86, 0, 0.07, 1)",
  linearCurve: "cubic-bezier(0, 0, 1, 1)"
};
const jt = Bt;
var Lt = {
  small: 320,
  medium: 600,
  large: 1136
};
const _e = Lt;
var Nt = {
  columns: [4, 8, 12],
  gutters: [16, 36, 36],
  margins: [16, 36, 64],
  gaps: 0,
  unit: "px",
  maxWidth: 1280
};
const Ht = Nt;
var Ue = function(r) {
  return "@media screen and (min-width: ".concat(r, "px)");
}, It = {
  small: Ue(_e.small),
  medium: Ue(_e.medium),
  large: Ue(_e.large)
};
const zt = It;
var Mt = {
  scale0: "2px",
  scale100: "4px",
  scale200: "6px",
  scale300: "8px",
  scale400: "10px",
  scale500: "12px",
  scale550: "14px",
  scale600: "16px",
  scale650: "18px",
  scale700: "20px",
  scale750: "22px",
  scale800: "24px",
  scale850: "28px",
  scale900: "32px",
  scale950: "36px",
  scale1000: "40px",
  scale1200: "48px",
  scale1400: "56px",
  scale1600: "64px",
  scale2400: "96px",
  scale3200: "128px",
  scale4800: "192px"
};
const Wt = Mt;
function Cr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function qe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Cr(Object(t), !0).forEach(function(n) {
      Vt(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Vt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Yt = {
  name: "light-theme",
  colors: qe(qe(qe({}, ar), Tt()), Pt()),
  animation: jt,
  breakpoints: _e,
  borders: Ct,
  direction: "auto",
  grid: Ht,
  lighting: $t,
  mediaQuery: zt,
  sizing: Wt,
  typography: Dt(),
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2e3
  }
}, Ut = /* @__PURE__ */ O.createContext(Yt);
function qt(e, r) {
  const t = Yr(e, r);
  return r.renderStyle(t);
}
function Kt() {
  return {};
}
function Yr(e, r) {
  for (const t in e) {
    const n = e[t];
    if (t === "animationName" && typeof n != "string") {
      e.animationName = r.renderKeyframes(n);
      continue;
    }
    if (t === "fontFamily" && typeof n != "string")
      if (Array.isArray(n)) {
        let o = "";
        for (const i of n)
          typeof i == "object" ? o += `${r.renderFontFace(i)},` : typeof i == "string" && (o += `${i},`);
        e.fontFamily = o.slice(0, -1);
        continue;
      } else {
        if (n === void 0)
          continue;
        e.fontFamily = r.renderFontFace(n);
        continue;
      }
    typeof n == "object" && n !== null && Yr(n, r);
  }
  return e;
}
function Xt(e, r) {
  const {
    stack: t,
    stacktrace: n,
    message: o
  } = new Error("stacktrace source");
  e.debug = {
    stackInfo: {
      stack: t,
      stacktrace: n,
      message: o
    },
    stackIndex: r
  };
}
const Gt = () => {
  const e = {}, r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = (o) => {
    const i = {};
    if (typeof o != "string")
      return i;
    if (t.has(o)) {
      i.styles = t.get(o);
      const d = o.split(" ");
      if (d.length) {
        const s = {};
        d.forEach((g) => {
          s[g] = e[g];
        }), i.classes = s;
      }
      if (r.has(o)) {
        const s = r.get(o);
        i.extends = s;
      }
      return i;
    }
  };
  window.__STYLETRON_DEVTOOLS__ = {
    atomicMap: e,
    extensionsMap: r,
    stylesMap: t,
    getStyles: n
  };
};
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ge.apply(this, arguments);
}
const Ur = {
  renderStyle: () => "",
  renderKeyframes: () => "",
  renderFontFace: () => ""
}, or = /* @__PURE__ */ O.createContext(Ur), qr = /* @__PURE__ */ O.createContext(!1), Kr = /* @__PURE__ */ O.createContext(void 0);
class Qt extends O.Component {
  constructor(r) {
    super(r), this.state = {
      hydrating: !!r.debugAfterHydration
    };
  }
  componentDidMount() {
    this.state.hydrating === !0 && this.setState({
      hydrating: !1
    });
  }
  render() {
    return /* @__PURE__ */ O.createElement(or.Provider, {
      value: this.props.value
    }, /* @__PURE__ */ O.createElement(Kr.Provider, {
      value: this.props.debug
    }, /* @__PURE__ */ O.createElement(qr.Provider, {
      value: this.state.hydrating
    }, this.props.children)));
  }
}
process.env.NODE_ENV !== "production" || or.Provider;
process.env.NODE_ENV !== "production" && !window.__STYLETRON_DEVTOOLS__ && Gt();
function Jt(e) {
  process.env.NODE_ENV !== "test" && e === Ur && // eslint-disable-next-line no-console
  console.warn(process.env.NODE_ENV !== "production" ? `
Styletron has been switched to a no-op (test) mode.

A Styletron styled component was rendered, but no Styletron engine instance was provided in React context.

Did you forget to provide a Styletron engine instance to React context via using the Styletron provider component?

Note: Providers and Consumers must come from the exact same React.createContext call to work.
If your app has multiple instances of the "styletron-react" package in your node_module tree,
your Provider may be coming from a different React.createContext call, which means the styled components
will not recieve the provided engine instance. This scenario can arise, for example, when using "npm link".
` : "Styletron Provider is not set up. Defaulting to no-op.");
}
function Zt({
  getInitialStyle: e,
  driver: r,
  wrapper: t
}) {
  function n(o, i) {
    process.env.NODE_ENV !== "production" && o.__STYLETRON__ && (console.warn("It appears you are passing a styled component into `styled`."), console.warn("For composition with existing styled components, use `withStyle` or `withTransform` instead."));
    const d = {
      reducers: [],
      base: o,
      driver: r,
      getInitialStyle: e,
      wrapper: t
    };
    return process.env.NODE_ENV !== "production" && Xt(d, 2), an(en(d, i));
  }
  return n;
}
function en(e, r) {
  return typeof r == "function" ? tn(e, r) : rn(e, r);
}
function rn(e, r) {
  return nn(e, Xr(r));
}
function tn(e, r) {
  return Gr(e, (t, n) => Qr(t, r(n)));
}
function Xr(e) {
  return {
    reducer: (r) => Qr(r, e),
    assignmentCommutative: !0,
    factory: Xr,
    style: e
  };
}
function nn(e, r) {
  if (e.reducers.length === 0) {
    const t = r.reducer(e.getInitialStyle()), n = {
      reducers: e.reducers,
      base: e.base,
      driver: e.driver,
      wrapper: e.wrapper,
      getInitialStyle: () => t
    };
    return process.env.NODE_ENV !== "production" && (n.debug = e.debug), n;
  } else {
    const t = e.reducers[0];
    if (t.assignmentCommutative === !0 && r.assignmentCommutative === !0) {
      const n = r.reducer(t.style), o = {
        getInitialStyle: e.getInitialStyle,
        base: e.base,
        driver: e.driver,
        wrapper: e.wrapper,
        reducers: [t.factory(n)].concat(e.reducers.slice(1))
      };
      return process.env.NODE_ENV !== "production" && (o.debug = e.debug), o;
    }
    return Gr(e, r.reducer);
  }
}
function Gr(e, r) {
  const t = {
    getInitialStyle: e.getInitialStyle,
    base: e.base,
    driver: e.driver,
    wrapper: e.wrapper,
    // @ts-ignore
    reducers: [{
      assignmentCommutative: !1,
      reducer: r
    }].concat(e.reducers)
  };
  return process.env.NODE_ENV !== "production" && (t.debug = e.debug), t;
}
function an(e) {
  const {
    reducers: r,
    base: t,
    driver: n,
    wrapper: o,
    getInitialStyle: i,
    ext: d
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var s, g;
    e.debug && (s = e.debug.stackInfo, g = e.debug.stackIndex);
  }
  if (process.env.NODE_ENV !== "production")
    var b;
  const S = o(/* @__PURE__ */ O.forwardRef((m, _) => {
    const T = O.useContext(or), H = O.useContext(Kr), I = O.useContext(qr);
    Jt(T);
    const B = ln(m);
    let j = on(i, r, m);
    m.$style && (typeof m.$style == "function" ? j = Qe(j, m.$style(m)) : j = Qe(j, m.$style));
    const h = n(j, T), $ = m.$as ? m.$as : t;
    if (B.className = m.className ? `${m.className} ${h}` : h, process.env.NODE_ENV !== "production" && H && !I) {
      b || (b = H.debug({
        stackInfo: s,
        stackIndex: g
      }));
      const f = `${b} ${B.className}`;
      B.className = f;
    }
    return process.env.NODE_ENV !== "production" && window.__STYLETRON_DEVTOOLS__ && (window.__STYLETRON_DEVTOOLS__.stylesMap.set(B.className, j), d && window.__STYLETRON_DEVTOOLS__.extensionsMap.set(B.className, {
      base: d.base,
      displayName: d.name,
      initialStyles: d.getInitialStyle({}, m),
      styleOverrides: typeof d.with == "function" ? d.with(m) : d.with
    })), m.$ref && console.warn("The prop `$ref` has been deprecated. Use `ref` instead. Refs are now forwarded with React.forwardRef."), /* @__PURE__ */ O.createElement($, Ge({}, B, {
      ref: _ || m.$ref
    }));
  }));
  if (S.__STYLETRON__ = {
    base: t,
    reducers: r,
    driver: n,
    wrapper: o,
    getInitialStyle: i
  }, process.env.NODE_ENV !== "production") {
    let m;
    typeof t == "string" ? m = t : t.displayName ? m = t.displayName : t.name ? m = t.name : m = "Unknown", S.displayName = `Styled(${m})`;
  }
  return S;
}
function on(e, r, t) {
  let n = e(), o = r.length;
  for (; o--; ) {
    const i = r[o].reducer;
    n = i(n, t);
  }
  return n;
}
function Rr(e) {
  return typeof e == "object" && e !== null;
}
function ln(e) {
  const r = {};
  for (const t in e)
    t[0] !== "$" && (r[t] = e[t]);
  return r;
}
function Qe(e, r) {
  const t = Je({}, e);
  for (const n in r) {
    const o = r[n];
    Rr(o) && Rr(e[n]) ? t[n] = Qe(e[n], o) : t[n] = o;
  }
  return t;
}
function Qr(e, r) {
  return Je(Je({}, e), r);
}
function Je(e, r) {
  for (const t in r)
    e[t] = r[t];
  return e;
}
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ze.apply(this, arguments);
}
var cn = function(r) {
  return /* @__PURE__ */ O.forwardRef(function(t, n) {
    return /* @__PURE__ */ O.createElement(Ut.Consumer, null, function(o) {
      return /* @__PURE__ */ O.createElement(r, Ze({
        ref: n
      }, t, {
        $theme: o
      }));
    });
  });
};
function sn() {
  return Zt({
    wrapper: cn,
    getInitialStyle: Kt,
    driver: qt
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  });
}
var he = sn(), V = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
}, K = {
  default: "default",
  pill: "pill",
  round: "round",
  circle: "circle",
  square: "square"
}, D = {
  mini: "mini",
  default: "default",
  compact: "compact",
  large: "large"
};
function $r(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ie(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? $r(Object(t), !0).forEach(function(n) {
      ir(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $r(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function ir(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var lr = he("button", function(e) {
  var r = e.$theme, t = e.$size, n = e.$colors, o = e.$kind, i = e.$shape, d = e.$isLoading, s = e.$isSelected, g = e.$disabled, b = e.$isFocusVisible;
  return ie(ie(ie(ie(ie({
    display: "inline-flex",
    // need to maintain button width while showing loading spinner
    flexDirection: d ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: "none",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "none",
    outline: "none",
    boxShadow: b ? "inset 0 0 0 3px ".concat(r.colors.accent) : "none",
    textDecoration: "none",
    WebkitAppearance: "none",
    transitionProperty: "background",
    transitionDuration: r.animation.timing200,
    transitionTimingFunction: r.animation.linearCurve,
    cursor: "pointer",
    ":disabled": ie({
      cursor: "not-allowed"
    }, gn({
      $theme: r,
      $kind: o,
      $disabled: g,
      $isSelected: s
    })),
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  }, fn({
    $theme: r,
    $size: t
  })), dn({
    $theme: r,
    $size: t,
    $shape: i
  })), pn({
    $theme: r,
    $size: t,
    $shape: i
  })), mn({
    $theme: r,
    $colors: n,
    $kind: o,
    $isLoading: d,
    $isSelected: s,
    $disabled: g
  })), yn({
    $shape: i,
    $size: t
  }));
});
lr.displayName = "BaseButton";
lr.displayName = "BaseButton";
var cr = he("div", function(e) {
  var r = e.$theme, t = r.direction === "rtl" ? "marginRight" : "marginLeft";
  return ir({
    display: "flex"
  }, t, r.sizing.scale500);
});
cr.displayName = "EndEnhancer";
cr.displayName = "EndEnhancer";
var sr = he("div", function(e) {
  var r = e.$theme, t = r.direction === "rtl" ? "marginLeft" : "marginRight";
  return ir({
    display: "flex"
  }, t, r.sizing.scale500);
});
sr.displayName = "StartEnhancer";
sr.displayName = "StartEnhancer";
var ur = he("div", function(e) {
  var r = e.$theme, t = e.$size, n = "3px";
  return (t === D.mini || t === D.compact) && (n = r.sizing.scale0), t === D.large && (n = r.sizing.scale100), {
    lineHeight: 0,
    position: "static",
    marginBottom: n,
    marginTop: n
  };
});
ur.displayName = "LoadingSpinnerContainer";
ur.displayName = "LoadingSpinnerContainer";
var dr = he("span", function(e) {
  var r = e.$theme, t = e.$kind, n = e.$disabled, o = e.$size, i = un({
    $theme: r,
    $kind: t,
    $disabled: n
  }), d = i.foreground, s = i.background, g = r.sizing.scale550;
  return (o === D.mini || o === D.compact) && (g = r.sizing.scale500), o === D.large && (g = r.sizing.scale600), {
    height: g,
    width: g,
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderLeftStyle: "solid",
    borderTopStyle: "solid",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftWidth: r.sizing.scale0,
    borderTopWidth: r.sizing.scale0,
    borderRightWidth: r.sizing.scale0,
    borderBottomWidth: r.sizing.scale0,
    borderTopColor: d,
    borderLeftColor: s,
    borderBottomColor: s,
    borderRightColor: s,
    boxSizing: "border-box",
    display: "inline-block",
    animationDuration: r.animation.timing700,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationName: {
      to: {
        transform: "rotate(360deg)"
      },
      from: {
        transform: "rotate(0deg)"
      }
    }
  };
});
dr.displayName = "LoadingSpinner";
dr.displayName = "LoadingSpinner";
function un(e) {
  var r = e.$theme, t = e.$kind, n = e.$disabled;
  if (n)
    return {
      foreground: r.colors.buttonDisabledSpinnerForeground,
      background: r.colors.buttonDisabledSpinnerBackground
    };
  switch (t) {
    case V.secondary:
      return {
        foreground: r.colors.buttonSecondarySpinnerForeground,
        background: r.colors.buttonSecondarySpinnerBackground
      };
    case V.tertiary:
      return {
        foreground: r.colors.buttonTertiarySpinnerForeground,
        background: r.colors.buttonTertiarySpinnerBackground
      };
    case V.primary:
    default:
      return {
        foreground: r.colors.buttonPrimarySpinnerForeground,
        background: r.colors.buttonPrimarySpinnerBackground
      };
  }
}
function dn(e) {
  var r = e.$theme, t = e.$size, n = e.$shape, o = r.borders.buttonBorderRadius;
  return n === K.pill ? t === D.compact ? o = "30px" : t === D.large ? o = "42px" : o = "38px" : n === K.circle || n === K.round ? o = "50%" : t === D.mini && (o = r.borders.buttonBorderRadiusMini), {
    borderTopRightRadius: o,
    borderBottomRightRadius: o,
    borderTopLeftRadius: o,
    borderBottomLeftRadius: o
  };
}
function fn(e) {
  var r = e.$theme, t = e.$size;
  switch (t) {
    case D.mini:
      return r.typography.font150;
    case D.compact:
      return r.typography.font250;
    case D.large:
      return r.typography.font450;
    default:
      return r.typography.font350;
  }
}
function gn(e) {
  var r = e.$theme, t = e.$kind, n = e.$isSelected, o = e.$disabled;
  if (o && n) {
    if (t === V.primary || t === V.secondary)
      return {
        color: r.colors.buttonDisabledActiveText,
        backgroundColor: r.colors.buttonDisabledActiveFill
      };
    if (t === V.tertiary)
      return {
        backgroundColor: r.colors.buttonTertiaryDisabledActiveFill,
        color: r.colors.buttonTertiaryDisabledActiveText
      };
  }
  return {
    backgroundColor: t === V.tertiary ? "transparent" : r.colors.buttonDisabledFill,
    color: r.colors.buttonDisabledText
  };
}
function pn(e) {
  var r = e.$theme, t = e.$size, n = e.$shape, o = n === K.square || n === K.circle || n === K.round;
  switch (t) {
    case D.mini:
      return {
        paddingTop: r.sizing.scale200,
        paddingBottom: r.sizing.scale200,
        paddingLeft: o ? r.sizing.scale200 : r.sizing.scale300,
        paddingRight: o ? r.sizing.scale200 : r.sizing.scale300
      };
    case D.compact:
      return {
        paddingTop: r.sizing.scale400,
        paddingBottom: r.sizing.scale400,
        paddingLeft: o ? r.sizing.scale400 : r.sizing.scale500,
        paddingRight: o ? r.sizing.scale400 : r.sizing.scale500
      };
    case D.large:
      return {
        paddingTop: r.sizing.scale600,
        paddingBottom: r.sizing.scale600,
        paddingLeft: o ? r.sizing.scale600 : r.sizing.scale700,
        paddingRight: o ? r.sizing.scale600 : r.sizing.scale700
      };
    default:
      return {
        paddingTop: r.sizing.scale550,
        paddingBottom: r.sizing.scale550,
        paddingLeft: o ? r.sizing.scale550 : r.sizing.scale600,
        paddingRight: o ? r.sizing.scale550 : r.sizing.scale600
      };
  }
}
function mn(e) {
  var r = e.$theme, t = e.$colors, n = e.$isLoading, o = e.$isSelected, i = e.$kind, d = e.$disabled;
  if (t)
    return {
      color: t.color,
      backgroundColor: t.backgroundColor,
      ":hover": {
        boxShadow: "inset 999px 999px 0px rgba(0, 0, 0, 0.04)"
      },
      ":active": {
        boxShadow: "inset 999px 999px 0px rgba(0, 0, 0, 0.08)"
      }
    };
  if (d)
    return Object.freeze({});
  switch (i) {
    case V.primary:
      return o ? {
        color: r.colors.buttonPrimarySelectedText,
        backgroundColor: r.colors.buttonPrimarySelectedFill
      } : {
        color: r.colors.buttonPrimaryText,
        backgroundColor: r.colors.buttonPrimaryFill,
        ":hover": {
          backgroundColor: n ? r.colors.buttonPrimaryActive : r.colors.buttonPrimaryHover
        },
        ":active": {
          backgroundColor: r.colors.buttonPrimaryActive
        }
      };
    case V.secondary:
      return o ? {
        color: r.colors.buttonPrimaryText,
        backgroundColor: r.colors.buttonPrimaryFill
      } : {
        color: r.colors.buttonSecondaryText,
        backgroundColor: r.colors.buttonSecondaryFill,
        ":hover": {
          backgroundColor: n ? r.colors.buttonSecondaryActive : r.colors.buttonSecondaryHover
        },
        ":active": {
          backgroundColor: r.colors.buttonSecondaryActive
        }
      };
    case V.tertiary:
      return o ? {
        color: r.colors.buttonTertiarySelectedText,
        backgroundColor: r.colors.buttonTertiarySelectedFill
      } : {
        color: r.colors.buttonTertiaryText,
        backgroundColor: r.colors.buttonTertiaryFill,
        ":hover": {
          backgroundColor: n ? r.colors.buttonTertiaryActive : r.colors.buttonTertiaryHover
        },
        ":active": {
          backgroundColor: r.colors.buttonTertiaryActive
        }
      };
    default:
      return Object.freeze({});
  }
}
function yn(e) {
  var r = e.$shape, t = e.$size;
  if (r === K.circle || r === K.square) {
    var n, o;
    switch (t) {
      case D.mini:
        n = "28px", o = "28px";
        break;
      case D.compact:
        n = "36px", o = "36px";
        break;
      case D.large:
        n = "56px", o = "56px";
        break;
      case D.default:
      default:
        n = "48px", o = "48px";
        break;
    }
    return {
      height: n,
      width: o,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    };
  } else
    return {};
}
function Jr(e) {
  var r = e.colors, t = e.disabled, n = e.isLoading, o = e.isSelected, i = e.kind, d = e.shape, s = e.size;
  return {
    $colors: r,
    $disabled: t,
    $isLoading: n,
    $isSelected: o,
    $kind: i,
    $shape: d,
    $size: s
  };
}
var er = { exports: {} }, x = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function vn() {
  if (kr)
    return x;
  kr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, H = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function h(f) {
    if (typeof f == "object" && f !== null) {
      var Y = f.$$typeof;
      switch (Y) {
        case r:
          switch (f = f.type, f) {
            case g:
            case b:
            case n:
            case i:
            case o:
            case S:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case y:
                case T:
                case _:
                case d:
                  return f;
                default:
                  return Y;
              }
          }
        case t:
          return Y;
      }
    }
  }
  function $(f) {
    return h(f) === b;
  }
  return x.AsyncMode = g, x.ConcurrentMode = b, x.ContextConsumer = s, x.ContextProvider = d, x.Element = r, x.ForwardRef = y, x.Fragment = n, x.Lazy = T, x.Memo = _, x.Portal = t, x.Profiler = i, x.StrictMode = o, x.Suspense = S, x.isAsyncMode = function(f) {
    return $(f) || h(f) === g;
  }, x.isConcurrentMode = $, x.isContextConsumer = function(f) {
    return h(f) === s;
  }, x.isContextProvider = function(f) {
    return h(f) === d;
  }, x.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, x.isForwardRef = function(f) {
    return h(f) === y;
  }, x.isFragment = function(f) {
    return h(f) === n;
  }, x.isLazy = function(f) {
    return h(f) === T;
  }, x.isMemo = function(f) {
    return h(f) === _;
  }, x.isPortal = function(f) {
    return h(f) === t;
  }, x.isProfiler = function(f) {
    return h(f) === i;
  }, x.isStrictMode = function(f) {
    return h(f) === o;
  }, x.isSuspense = function(f) {
    return h(f) === S;
  }, x.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === b || f === i || f === o || f === S || f === m || typeof f == "object" && f !== null && (f.$$typeof === T || f.$$typeof === _ || f.$$typeof === d || f.$$typeof === s || f.$$typeof === y || f.$$typeof === I || f.$$typeof === B || f.$$typeof === j || f.$$typeof === H);
  }, x.typeOf = h, x;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function bn() {
  return Ar || (Ar = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, H = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function h(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === b || p === i || p === o || p === S || p === m || typeof p == "object" && p !== null && (p.$$typeof === T || p.$$typeof === _ || p.$$typeof === d || p.$$typeof === s || p.$$typeof === y || p.$$typeof === I || p.$$typeof === B || p.$$typeof === j || p.$$typeof === H);
    }
    function $(p) {
      if (typeof p == "object" && p !== null) {
        var ee = p.$$typeof;
        switch (ee) {
          case r:
            var re = p.type;
            switch (re) {
              case g:
              case b:
              case n:
              case i:
              case o:
              case S:
                return re;
              default:
                var Q = re && re.$$typeof;
                switch (Q) {
                  case s:
                  case y:
                  case T:
                  case _:
                  case d:
                    return Q;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var f = g, Y = b, M = s, N = d, ke = r, Ae = y, De = n, Be = T, Se = _, W = t, G = i, Ee = o, Oe = S, ue = !1;
    function Fe(p) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), de(p) || $(p) === g;
    }
    function de(p) {
      return $(p) === b;
    }
    function we(p) {
      return $(p) === s;
    }
    function xe(p) {
      return $(p) === d;
    }
    function Pe(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function je(p) {
      return $(p) === y;
    }
    function Le(p) {
      return $(p) === n;
    }
    function fe(p) {
      return $(p) === T;
    }
    function ge(p) {
      return $(p) === _;
    }
    function J(p) {
      return $(p) === t;
    }
    function pe(p) {
      return $(p) === i;
    }
    function Z(p) {
      return $(p) === o;
    }
    function Ne(p) {
      return $(p) === S;
    }
    P.AsyncMode = f, P.ConcurrentMode = Y, P.ContextConsumer = M, P.ContextProvider = N, P.Element = ke, P.ForwardRef = Ae, P.Fragment = De, P.Lazy = Be, P.Memo = Se, P.Portal = W, P.Profiler = G, P.StrictMode = Ee, P.Suspense = Oe, P.isAsyncMode = Fe, P.isConcurrentMode = de, P.isContextConsumer = we, P.isContextProvider = xe, P.isElement = Pe, P.isForwardRef = je, P.isFragment = Le, P.isLazy = fe, P.isMemo = ge, P.isPortal = J, P.isProfiler = pe, P.isStrictMode = Z, P.isSuspense = Ne, P.isValidElementType = h, P.typeOf = $;
  }()), P;
}
process.env.NODE_ENV === "production" ? er.exports = vn() : er.exports = bn();
var Zr = er.exports;
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, rr.apply(this, arguments);
}
function Dr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Dr(Object(t), !0).forEach(function(n) {
      hn(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function hn(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function se(e) {
  "@babel/helpers - typeof";
  return se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, se(e);
}
function Sn(e) {
  return Zr.isValidElementType(e) ? e : e && se(e) === "object" ? e.component : e;
}
function Br(e) {
  return e && se(e) === "object" ? se(e.props) === "object" ? Ce(Ce({}, e.props), {}, {
    $style: e.style
  }) : {
    $style: e.style
  } : {};
}
function be(e, r) {
  var t = Sn(e) || r;
  if (e && se(e) === "object" && typeof e.props == "function") {
    process.env.NODE_ENV !== "production" && console.warn("baseui:Overrides Props as a function will be removed in the next major version. Override the whole component instead. See https://baseweb.design/guides/understanding-overrides/#override-the-entire-subcomponent");
    var n = /* @__PURE__ */ O.forwardRef(function(i, d) {
      var s = e.props(i), g = Br(Ce(Ce({}, e), {}, {
        props: s
      }));
      return /* @__PURE__ */ O.createElement(t, rr({
        ref: d
      }, g));
    });
    return n.displayName = t.displayName, [n, {}];
  }
  var o = Br(e);
  return [t, o];
}
var En = ["Enhancer"];
function Re() {
  return Re = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Re.apply(this, arguments);
}
function jr(e, r) {
  return xn(e) || wn(e, r) || Fn(e, r) || On();
}
function On() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fn(e, r) {
  if (e) {
    if (typeof e == "string")
      return Lr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Lr(e, r);
  }
}
function Lr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function wn(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], o = !0, i = !1, d, s;
    try {
      for (t = t.call(e); !(o = (d = t.next()).done) && (n.push(d.value), !(r && n.length === r)); o = !0)
        ;
    } catch (g) {
      i = !0, s = g;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function xn(e) {
  if (Array.isArray(e))
    return e;
}
function Pn(e, r) {
  if (e == null)
    return {};
  var t = Tn(e, r), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Tn(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Nr(e) {
  var r = e.Enhancer, t = Pn(e, En);
  return typeof r == "string" ? r : Zr.isValidElementType(r) ? /* @__PURE__ */ O.createElement(r, t) : r;
}
function Hr(e) {
  var r = e.children, t = e.overrides, n = t === void 0 ? {} : t, o = e.startEnhancer, i = e.endEnhancer, d = be(n.StartEnhancer, sr), s = jr(d, 2), g = s[0], b = s[1], y = be(n.EndEnhancer, cr), S = jr(y, 2), m = S[0], _ = S[1], T = Jr(e);
  return /* @__PURE__ */ O.createElement(O.Fragment, null, o != null && /* @__PURE__ */ O.createElement(g, Re({}, T, b), /* @__PURE__ */ O.createElement(Nr, {
    Enhancer: o
  })), r, i != null && /* @__PURE__ */ O.createElement(m, Re({}, T, _), /* @__PURE__ */ O.createElement(Nr, {
    Enhancer: i
  })));
}
var _n = {
  disabled: !1,
  isLoading: !1,
  isSelected: !1,
  kind: V.primary,
  overrides: {},
  shape: K.default,
  size: D.default
}, Cn = !0, Rn = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function $n(e) {
  var r = e.type, t = e.tagName;
  return !!(t === "INPUT" && Rn[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function kn(e) {
  try {
    return e.target.matches(":focus-visible");
  } catch {
  }
  return Cn || $n(e.target);
}
var An = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function(r, t) {
    return function(n) {
      typeof r.onFocus == "function" && r.onFocus(n), t(n);
    };
  }
), Dn = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function(r, t) {
    return function(n) {
      typeof r.onBlur == "function" && r.onBlur(n), t(n);
    };
  }
);
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, tr(e);
}
var Bn = ["overrides", "size", "kind", "shape", "isLoading", "isSelected", "startEnhancer", "endEnhancer", "children", "forwardedRef", "colors"];
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ce.apply(this, arguments);
}
function Ir(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function le(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ir(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ir(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ke(e, r) {
  return Hn(e) || Nn(e, r) || Ln(e, r) || jn();
}
function jn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ln(e, r) {
  if (e) {
    if (typeof e == "string")
      return zr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return zr(e, r);
  }
}
function zr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Nn(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], o = !0, i = !1, d, s;
    try {
      for (t = t.call(e); !(o = (d = t.next()).done) && (n.push(d.value), !(r && n.length === r)); o = !0)
        ;
    } catch (g) {
      i = !0, s = g;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function Hn(e) {
  if (Array.isArray(e))
    return e;
}
function In(e, r) {
  if (e == null)
    return {};
  var t = zn(e, r), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function zn(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Mn(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Mr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Wn(e, r, t) {
  return r && Mr(e.prototype, r), t && Mr(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Vn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), r && nr(e, r);
}
function nr(e, r) {
  return nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, nr(e, r);
}
function Yn(e) {
  var r = qn();
  return function() {
    var n = $e(e), o;
    if (r) {
      var i = $e(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Un(this, o);
  };
}
function Un(e, r) {
  if (r && (tr(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ve(e);
}
function ve(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $e(e) {
  return $e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, $e(e);
}
function X(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var et = /* @__PURE__ */ function(e) {
  Vn(t, e);
  var r = Yn(t);
  function t() {
    var n;
    Mn(this, t);
    for (var o = arguments.length, i = new Array(o), d = 0; d < o; d++)
      i[d] = arguments[d];
    return n = r.call.apply(r, [this].concat(i)), X(ve(n), "state", {
      isFocusVisible: !1
    }), X(ve(n), "internalOnClick", function() {
      for (var s = n.props, g = s.isLoading, b = s.onClick, y = arguments.length, S = new Array(y), m = 0; m < y; m++)
        S[m] = arguments[m];
      if (g) {
        S[0].preventDefault();
        return;
      }
      b && b.apply(void 0, S);
    }), X(ve(n), "handleFocus", function(s) {
      kn(s) && n.setState({
        isFocusVisible: !0
      });
    }), X(ve(n), "handleBlur", function(s) {
      n.state.isFocusVisible !== !1 && n.setState({
        isFocusVisible: !1
      });
    }), n;
  }
  return Wn(t, [{
    key: "render",
    value: function() {
      var o, i = this.props, d = i.overrides, s = d === void 0 ? {} : d;
      i.size, i.kind, i.shape;
      var g = i.isLoading;
      i.isSelected, i.startEnhancer, i.endEnhancer, i.children;
      var b = i.forwardedRef;
      i.colors;
      var y = In(i, Bn), S = be(
        // adding both (1) BaseButton and (2) Root
        // (1) because it's a Button under the hood
        // (2) because we want consistency with the rest of the components
        s.BaseButton || s.Root,
        lr
      ), m = Ke(S, 2), _ = m[0], T = m[1], H = be(s.LoadingSpinner, dr), I = Ke(H, 2), B = I[0], j = I[1], h = be(s.LoadingSpinnerContainer, ur), $ = Ke(h, 2), f = $[0], Y = $[1], M = le(le({}, Jr(this.props)), {}, {
        $isFocusVisible: this.state.isFocusVisible
      });
      return /* @__PURE__ */ O.createElement(_, ce({
        ref: b,
        "data-baseweb": "button"
      }, g ? (o = {}, X(o, "aria-label", "loading ".concat(typeof this.props.children == "string" ? this.props.children : "")), X(o, "aria-busy", "true"), o) : {}, M, y, T, {
        // Applies last to override passed in onClick
        onClick: this.internalOnClick,
        onFocus: An(le(le({}, y), T), this.handleFocus),
        onBlur: Dn(le(le({}, y), T), this.handleBlur)
      }), g ? /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("div", {
        style: {
          opacity: 0,
          display: "flex",
          height: "0px"
        }
      }, /* @__PURE__ */ O.createElement(Hr, this.props)), /* @__PURE__ */ O.createElement(f, ce({}, M, Y), /* @__PURE__ */ O.createElement(B, ce({}, M, j)))) : /* @__PURE__ */ O.createElement(Hr, this.props));
    }
  }]), t;
}(O.Component);
X(et, "defaultProps", _n);
var rt = /* @__PURE__ */ O.forwardRef(function(e, r) {
  return /* @__PURE__ */ O.createElement(et, ce({
    forwardedRef: r
  }, e));
});
rt.displayName = "Button";
const Kn = rt, Xn = {
  BaseButton: {
    style: ({ $theme: e }) => ({
      backgroundColor: e.colors.dark100,
      ":hover": {
        backgroundColor: e.colors.positive400
      }
    })
  }
}, Zn = (e) => /* @__PURE__ */ Ot.jsx(
  Kn,
  {
    overrides: Xn,
    ...e,
    children: "Button"
  }
);
export {
  Zn as Button,
  Jn as theme
};
