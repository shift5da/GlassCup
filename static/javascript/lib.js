function FastClick(e) {
  "use strict";
  var t, n = this;
  if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
  this.onClick = function() {
    return FastClick.prototype.onClick.apply(n, arguments)
  }, this.onMouse = function() {
    return FastClick.prototype.onMouse.apply(n, arguments)
  }, this.onTouchStart = function() {
    return FastClick.prototype.onTouchStart.apply(n, arguments)
  }, this.onTouchMove = function() {
    return FastClick.prototype.onTouchMove.apply(n, arguments)
  }, this.onTouchEnd = function() {
    return FastClick.prototype.onTouchEnd.apply(n, arguments)
  }, this.onTouchCancel = function() {
    return FastClick.prototype.onTouchCancel.apply(n, arguments)
  }, FastClick.notNeeded(e) || (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
    var r = Node.prototype.removeEventListener;
    "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
  }, e.addEventListener = function(t, n, i) {
    var r = Node.prototype.addEventListener;
    "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(e) {
      e.propagationStopped || n(e)
    }), i) : r.call(e, t, n, i)
  }), "function" == typeof e.onclick && (t = e.onclick, e.addEventListener("click", function(e) {
    t(e)
  }, !1), e.onclick = null))
}
if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
      var t = "length" in e && e.length,
        n = J.type(e);
      return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
      if (J.isFunction(t)) return J.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType) return J.grep(e, function(e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (ae.test(t)) return J.filter(t, e, n);
        t = J.filter(t, e)
      }
      return J.grep(e, function(e) {
        return U.call(t, e) >= 0 !== n
      })
    }

    function r(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function o(e) {
      var t = he[e] = {};
      return J.each(e.match(fe) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function s() {
      Q.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
      Object.defineProperty(this.cache = {}, 0, {
        get: function() {
          return {}
        }
      }), this.expando = J.expando + a.uid++
    }

    function l(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(ye, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Te.test(n) ? J.parseJSON(n) : n)
          } catch (r) {}
          be.set(e, t, n)
        } else n = void 0;
      return n
    }

    function c() {
      return !0
    }

    function u() {
      return !1
    }

    function d() {
      try {
        return Q.activeElement
      } catch (e) {}
    }

    function p(e, t) {
      return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
      var t = Oe.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
      for (var n = 0, i = e.length; n < i; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
      var n, i, r, o, s, a, l, c;
      if (1 === t.nodeType) {
        if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), c = o.events)) {
          delete s.handle, s.events = {};
          for (r in c)
            for (n = 0, i = c[r].length; n < i; n++) J.event.add(t, r, c[r][n])
        }
        be.hasData(e) && (a = be.access(e), l = J.extend({}, a), be.set(t, l))
      }
    }

    function v(e, t) {
      var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }

    function b(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(t, n) {
      var i, r = J(n.createElement(t)).appendTo(n.body),
        o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
      return r.detach(), o
    }

    function y(e) {
      var t = Q,
        n = Xe[e];
      return n || (n = T(e, t), "none" !== n && n || (Ve = (Ve || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = T(e, t), Ve.detach()), Xe[e] = n), n
    }

    function S(e, t, n) {
      var i, r, o, s, a = e.style;
      return n = n || je(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), We.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function w(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function P(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = ze.length; r--;)
        if (t = ze[r] + n, t in e) return t;
      return i
    }

    function C(e, t, n) {
      var i = $e.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function A(e, t, n, i, r) {
      for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += J.css(e, n + we[o], !0, r)), i ? ("content" === n && (s -= J.css(e, "padding" + we[o], !0, r)), "margin" !== n && (s -= J.css(e, "border" + we[o] + "Width", !0, r))) : (s += J.css(e, "padding" + we[o], !0, r), "padding" !== n && (s += J.css(e, "border" + we[o] + "Width", !0, r)));
      return s
    }

    function x(e, t, n) {
      var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = je(e),
        s = "border-box" === J.css(e, "boxSizing", !1, o);
      if (r <= 0 || null == r) {
        if (r = S(e, t, o), (r < 0 || null == r) && (r = e.style[t]), We.test(r)) return r;
        i = s && (K.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
      }
      return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function E(e, t) {
      for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (o[s] = ve.access(i, "olddisplay", y(i.nodeName)))) : (r = Pe(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
      for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
      return e
    }

    function M(e, t, n, i, r) {
      return new M.prototype.init(e, t, n, i, r)
    }

    function k() {
      return setTimeout(function() {
        Ke = void 0
      }), Ke = J.now()
    }

    function I(e, t) {
      var n, i = 0,
        r = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) n = we[i], r["margin" + n] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
    }

    function G(e, t, n) {
      for (var i, r = (nt[t] || []).concat(nt["*"]), o = 0, s = r.length; o < s; o++)
        if (i = r[o].call(n, t, e)) return i
    }

    function H(e, t, n) {
      var i, r, o, s, a, l, c, u, d = this,
        p = {},
        f = e.style,
        h = e.nodeType && Pe(e),
        g = ve.get(e, "fxshow");
      n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, d.always(function() {
        d.always(function() {
          a.unqueued--, J.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || y(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
      }));
      for (i in t)
        if (r = t[i], Ze.exec(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[i]) continue;
            h = !0
          }
          p[i] = g && g[i] || J.style(e, i)
        } else c = void 0;
      if (J.isEmptyObject(p)) "inline" === ("none" === c ? y(e.nodeName) : c) && (f.display = c);
      else {
        g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? J(e).show() : d.done(function() {
          J(e).hide()
        }), d.done(function() {
          var t;
          ve.remove(e, "fxshow");
          for (t in p) J.style(e, t, p[t])
        });
        for (i in p) s = G(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function D(e, t) {
      var n, i, r, o, s;
      for (n in e)
        if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = J.cssHooks[i], s && "expand" in s) {
          o = s.expand(o), delete e[i];
          for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function B(e, t, n) {
      var i, r, o = 0,
        s = tt.length,
        a = J.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (r) return !1;
          for (var t = Ke || k(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
          return a.notifyWith(e, [c, o, n]), o < 1 && l ? n : (a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: J.extend({}, t),
          opts: J.extend(!0, {
            specialEasing: {}
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ke || k(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function(t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) c.tweens[n].run(1);
            return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
      for (D(u, c.opts.specialEasing); o < s; o++)
        if (i = tt[o].call(c, e, u, c.opts)) return i;
      return J.map(u, G, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function N(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, r = 0,
          o = t.toLowerCase().match(fe) || [];
        if (J.isFunction(n))
          for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function O(e, t, n, i) {
      function r(a) {
        var l;
        return o[a] = !0, J.each(e[a] || [], function(e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
        }), l
      }
      var o = {},
        s = e === Tt;
      return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function L(e, t) {
      var n, i, r = J.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && J.extend(!0, e, i), e
    }

    function R(e, t, n) {
      for (var i, r, o, s, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in a)
          if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break
          }
      if (l[0] in n) o = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            o = r;
            break
          }
          s || (s = r)
        }
        o = o || s
      }
      if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function V(e, t, n, i) {
      var r, o, s, a, l, c = {},
        u = e.dataTypes.slice();
      if (u[1])
        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
      for (o = u.shift(); o;)
        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
        if (s = c[l + " " + o] || c["* " + o], !s)
          for (r in c)
            if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
              s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
              break
            }
        if (s !== !0)
          if (s && e["throws"]) t = s(t);
          else try {
            t = s(t)
          } catch (d) {
            return {
              state: "parsererror",
              error: s ? d : "No conversion from " + l + " to " + o
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function X(e, t, n, i) {
      var r;
      if (J.isArray(t)) J.each(t, function(t, r) {
        n || Ct.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
      });
      else if (n || "object" !== J.type(t)) i(e, t);
      else
        for (r in t) X(e + "[" + r + "]", t[r], n, i)
    }

    function F(e) {
      return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
      j = W.slice,
      Y = W.concat,
      $ = W.push,
      U = W.indexOf,
      q = {},
      _ = q.toString,
      z = q.hasOwnProperty,
      K = {},
      Q = e.document,
      Z = "2.1.4",
      J = function(e, t) {
        return new J.fn.init(e, t)
      },
      ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      te = /^-ms-/,
      ne = /-([\da-z])/gi,
      ie = function(e, t) {
        return t.toUpperCase()
      };
    J.fn = J.prototype = {
      jquery: Z,
      constructor: J,
      selector: "",
      length: 0,
      toArray: function() {
        return j.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : j.call(this)
      },
      pushStack: function(e) {
        var t = J.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
        return J.each(this, e, t)
      },
      map: function(e) {
        return this.pushStack(J.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(j.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: $,
      sort: W.sort,
      splice: W.splice
    }, J.extend = J.fn.extend = function() {
      var e, t, n, i, r, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = s[t], i = e[t], s !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      return s
    }, J.extend({
      expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === J.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
      },
      isPlainObject: function(e) {
        return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !z.call(e.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[_.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(te, "ms-").replace(ne, ie)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, i) {
        var r, o = 0,
          s = e.length,
          a = n(e);
        if (i) {
          if (a)
            for (; o < s && (r = t.apply(e[o], i), r !== !1); o++);
          else
            for (o in e)
              if (r = t.apply(e[o], i), r === !1) break
        } else if (a)
          for (; o < s && (r = t.call(e[o], o, e[o]), r !== !1); o++);
        else
          for (o in e)
            if (r = t.call(e[o], o, e[o]), r === !1) break; return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ee, "")
      },
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : $.call(i, e)), i
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : U.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return e.length = r, e
      },
      grep: function(e, t, n) {
        for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
        return r
      },
      map: function(e, t, i) {
        var r, o = 0,
          s = e.length,
          a = n(e),
          l = [];
        if (a)
          for (; o < s; o++) r = t(e[o], o, i), null != r && l.push(r);
        else
          for (o in e) r = t(e[o], o, i), null != r && l.push(r);
        return Y.apply([], l)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e)) return i = j.call(arguments, 2), r = function() {
          return e.apply(t || this, i.concat(j.call(arguments)))
        }, r.guid = e.guid = e.guid || J.guid++, r
      },
      now: Date.now,
      support: K
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      q["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function(e) {
      function t(e, t, n, i) {
        var r, o, s, a, l, c, d, f, h, g;
        if ((t ? t.ownerDocument || t : X) !== H && G(t), t = t || H, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
        if (!i && B) {
          if (11 !== a && (r = be.exec(e)))
            if (s = r[1]) {
              if (9 === a) {
                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                if (o.id === s) return n.push(o), n
              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
            } else {
              if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
              if ((s = r[3]) && S.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
            }
          if (S.qsa && (!N || !N.test(e))) {
            if (f = d = V, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
              for (c = A(e), (d = t.getAttribute("id")) ? f = d.replace(ye, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
              h = Te.test(e) && u(t.parentNode) || t, g = c.join(",")
            }
            if (g) try {
              return Z.apply(n, h.querySelectorAll(g)), n
            } catch (m) {} finally {
              d || t.removeAttribute("id")
            }
          }
        }
        return E(e.replace(le, "$1"), t, n, i)
      }

      function n() {
        function e(n, i) {
          return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
        }
        var t = [];
        return e
      }

      function i(e) {
        return e[V] = !0, e
      }

      function r(e) {
        var t = H.createElement("div");
        try {
          return !!e(t)
        } catch (n) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function o(e, t) {
        for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
      }

      function s(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function a(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function l(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function c(e) {
        return i(function(t) {
          return t = +t, i(function(n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
          })
        })
      }

      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }

      function d() {}

      function p(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function f(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          o = W++;
        return t.first ? function(t, n, o) {
          for (; t = t[i];)
            if (1 === t.nodeType || r) return e(t, n, o)
        } : function(t, n, s) {
          var a, l, c = [F, o];
          if (s) {
            for (; t = t[i];)
              if ((1 === t.nodeType || r) && e(t, n, s)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || r) {
                if (l = t[V] || (t[V] = {}), (a = l[i]) && a[0] === F && a[1] === o) return c[2] = a[2];
                if (l[i] = c, c[2] = e(t, n, s)) return !0
              }
        }
      }

      function h(e) {
        return e.length > 1 ? function(t, n, i) {
          for (var r = e.length; r--;)
            if (!e[r](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function g(e, n, i) {
        for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
        return i
      }

      function m(e, t, n, i, r) {
        for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
        return s
      }

      function v(e, t, n, r, o, s) {
        return r && !r[V] && (r = v(r)), o && !o[V] && (o = v(o, s)), i(function(i, s, a, l) {
          var c, u, d, p = [],
            f = [],
            h = s.length,
            v = i || g(t || "*", a.nodeType ? [a] : a, []),
            b = !e || !i && t ? v : m(v, p, e, a, l),
            T = n ? o || (i ? e : h || r) ? [] : s : b;
          if (n && n(b, T, a, l), r)
            for (c = m(T, f), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (T[f[u]] = !(b[f[u]] = d));
          if (i) {
            if (o || e) {
              if (o) {
                for (c = [], u = T.length; u--;)(d = T[u]) && c.push(b[u] = d);
                o(null, T = [], c, l)
              }
              for (u = T.length; u--;)(d = T[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
            }
          } else T = m(T === s ? T.splice(h, T.length) : T), o ? o(null, s, T, l) : Z.apply(s, T)
        })
      }

      function b(e) {
        for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = f(function(e) {
            return e === t
          }, s, !0), c = f(function(e) {
            return ee(t, e) > -1
          }, s, !0), u = [function(e, n, i) {
            var r = !o && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
            return t = null, r
          }]; a < r; a++)
          if (n = w.relative[e[a].type]) u = [f(h(u), n)];
          else {
            if (n = w.filter[e[a].type].apply(null, e[a].matches), n[V]) {
              for (i = ++a; i < r && !w.relative[e[i].type]; i++);
              return v(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({
                value: " " === e[a - 2].type ? "*" : ""
              })).replace(le, "$1"), n, a < i && b(e.slice(a, i)), i < r && b(e = e.slice(i)), i < r && p(e))
            }
            u.push(n)
          }
        return h(u)
      }

      function T(e, n) {
        var r = n.length > 0,
          o = e.length > 0,
          s = function(i, s, a, l, c) {
            var u, d, p, f = 0,
              h = "0",
              g = i && [],
              v = [],
              b = M,
              T = i || o && w.find.TAG("*", c),
              y = F += null == b ? 1 : Math.random() || .1,
              S = T.length;
            for (c && (M = s !== H && s); h !== S && null != (u = T[h]); h++) {
              if (o && u) {
                for (d = 0; p = e[d++];)
                  if (p(u, s, a)) {
                    l.push(u);
                    break
                  }
                c && (F = y)
              }
              r && ((u = !p && u) && f--, i && g.push(u))
            }
            if (f += h, r && h !== f) {
              for (d = 0; p = n[d++];) p(g, v, s, a);
              if (i) {
                if (f > 0)
                  for (; h--;) g[h] || v[h] || (v[h] = K.call(l));
                v = m(v)
              }
              Z.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
            }
            return c && (F = y, M = b), g
          };
        return r ? i(s) : s
      }
      var y, S, w, P, C, A, x, E, M, k, I, G, H, D, B, N, O, L, R, V = "sizzle" + 1 * new Date,
        X = e.document,
        F = 0,
        W = 0,
        j = n(),
        Y = n(),
        $ = n(),
        U = function(e, t) {
          return e === t && (I = !0), 0
        },
        q = 1 << 31,
        _ = {}.hasOwnProperty,
        z = [],
        K = z.pop,
        Q = z.push,
        Z = z.push,
        J = z.slice,
        ee = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = ie.replace("w", "w#"),
        oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
        se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        ae = new RegExp(ne + "+", "g"),
        le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        ce = new RegExp("^" + ne + "*," + ne + "*"),
        ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        pe = new RegExp(se),
        fe = new RegExp("^" + re + "$"),
        he = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + se),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Te = /[+~]/,
        ye = /'|\\/g,
        Se = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        we = function(e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        Pe = function() {
          G()
        };
      try {
        Z.apply(z = J.call(X.childNodes), X.childNodes), z[X.childNodes.length].nodeType
      } catch (Ce) {
        Z = {
          apply: z.length ? function(e, t) {
            Q.apply(e, J.call(t))
          } : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }
      S = t.support = {}, C = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, G = t.setDocument = function(e) {
        var t, n, i = e ? e.ownerDocument || e : X;
        return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, D = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Pe, !1) : n.attachEvent && n.attachEvent("onunload", Pe)), B = !C(i), S.attributes = r(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), S.getElementsByTagName = r(function(e) {
          return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
        }), S.getElementsByClassName = ve.test(i.getElementsByClassName), S.getById = r(function(e) {
          return D.appendChild(e).id = V, !i.getElementsByName || !i.getElementsByName(V).length
        }), S.getById ? (w.find.ID = function(e, t) {
          if ("undefined" != typeof t.getElementById && B) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : []
          }
        }, w.filter.ID = function(e) {
          var t = e.replace(Se, we);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete w.find.ID, w.filter.ID = function(e) {
          var t = e.replace(Se, we);
          return function(e) {
            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), w.find.TAG = S.getElementsByTagName ? function(e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : S.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, i = [],
            r = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, w.find.CLASS = S.getElementsByClassName && function(e, t) {
          if (B) return t.getElementsByClassName(e)
        }, O = [], N = [], (S.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
          D.appendChild(e).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + V + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + V + "+*").length || N.push(".#.+[+~]")
        }), r(function(e) {
          var t = i.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
        })), (S.matchesSelector = ve.test(L = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
          S.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), O.push("!=", se)
        }), N = N.length && new RegExp(N.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(D.compareDocumentPosition), R = t || ve.test(D.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, U = t ? function(e, t) {
          if (e === t) return I = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !S.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === X && R(X, e) ? -1 : t === i || t.ownerDocument === X && R(X, t) ? 1 : k ? ee(k, e) - ee(k, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return I = !0, 0;
          var n, r = 0,
            o = e.parentNode,
            a = t.parentNode,
            l = [e],
            c = [t];
          if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : k ? ee(k, e) - ee(k, t) : 0;
          if (o === a) return s(e, t);
          for (n = e; n = n.parentNode;) l.unshift(n);
          for (n = t; n = n.parentNode;) c.unshift(n);
          for (; l[r] === c[r];) r++;
          return r ? s(l[r], c[r]) : l[r] === X ? -1 : c[r] === X ? 1 : 0
        }, i) : H
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== H && G(e), n = n.replace(de, "='$1']"), S.matchesSelector && B && (!O || !O.test(n)) && (!N || !N.test(n))) try {
          var i = L.call(e, n);
          if (i || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (r) {}
        return t(n, H, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== H && G(e), R(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== H && G(e);
        var n = w.attrHandle[t.toLowerCase()],
          i = n && _.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !B) : void 0;
        return void 0 !== i ? i : S.attributes || !B ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          i = 0,
          r = 0;
        if (I = !S.detectDuplicates, k = !S.sortStable && e.slice(0), e.sort(U), I) {
          for (; t = e[r++];) t === e[r] && (i = n.push(r));
          for (; i--;) e.splice(n[i], 1)
        }
        return k = null, e
      }, P = t.getText = function(e) {
        var t, n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else
          for (; t = e[i++];) n += P(t);
        return n
      }, w = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: he,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(Se, we), e[3] = (e[3] || e[4] || e[5] || "").replace(Se, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(Se, we).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = j[e + " "];
            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && j(e, function(e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, i) {
            return function(r) {
              var o = t.attr(r, e);
              return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(t, n, l) {
              var c, u, d, p, f, h, g = o !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                b = !l && !a;
              if (m) {
                if (o) {
                  for (; g;) {
                    for (d = t; d = d[g];)
                      if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                    h = g = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? m.firstChild : m.lastChild], s && b) {
                  for (u = m[V] || (m[V] = {}), c = u[e] || [], f = c[0] === F && c[1], p = c[0] === F && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop();)
                    if (1 === d.nodeType && ++p && d === t) {
                      u[e] = [F, f, p];
                      break
                    }
                } else if (b && (c = (t[V] || (t[V] = {}))[e]) && c[0] === F) p = c[1];
                else
                  for (;
                    (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (b && ((d[V] || (d[V] = {}))[e] = [F, p]), d !== t)););
                return p -= r, p === i || p % i === 0 && p / i >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return o[V] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
              for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
            }) : function(e) {
              return o(e, 0, r)
            }) : o
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              r = x(e.replace(le, "$1"));
            return r[V] ? i(function(e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
            }) : function(e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
            }
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: i(function(e) {
            return e = e.replace(Se, we),
              function(t) {
                return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
              }
          }),
          lang: i(function(e) {
            return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Se, we).toLowerCase(),
              function(t) {
                var n;
                do
                  if (n = B ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === D
          },
          focus: function(e) {
            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !w.pseudos.empty(e)
          },
          header: function(e) {
            return me.test(e.nodeName)
          },
          input: function(e) {
            return ge.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: c(function() {
            return [0]
          }),
          last: c(function(e, t) {
            return [t - 1]
          }),
          eq: c(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: c(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: c(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: c(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e
          }),
          gt: c(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }, w.pseudos.nth = w.pseudos.eq;
      for (y in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[y] = a(y);
      for (y in {
          submit: !0,
          reset: !0
        }) w.pseudos[y] = l(y);
      return d.prototype = w.filters = w.pseudos, w.setFilters = new d, A = t.tokenize = function(e, n) {
        var i, r, o, s, a, l, c, u = Y[e + " "];
        if (u) return n ? 0 : u.slice(0);
        for (a = e, l = [], c = w.preFilter; a;) {
          i && !(r = ce.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
            value: i,
            type: r[0].replace(le, " ")
          }), a = a.slice(i.length));
          for (s in w.filter) !(r = he[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
            value: i,
            type: s,
            matches: r
          }), a = a.slice(i.length));
          if (!i) break
        }
        return n ? a.length : a ? t.error(e) : Y(e, l).slice(0)
      }, x = t.compile = function(e, t) {
        var n, i = [],
          r = [],
          o = $[e + " "];
        if (!o) {
          for (t || (t = A(e)), n = t.length; n--;) o = b(t[n]), o[V] ? i.push(o) : r.push(o);
          o = $(e, T(r, i)), o.selector = e
        }
        return o
      }, E = t.select = function(e, t, n, i) {
        var r, o, s, a, l, c = "function" == typeof e && e,
          d = !i && A(e = c.selector || e);
        if (n = n || [], 1 === d.length) {
          if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === t.nodeType && B && w.relative[o[1].type]) {
            if (t = (w.find.ID(s.matches[0].replace(Se, we), t) || [])[0], !t) return n;
            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
            if ((l = w.find[a]) && (i = l(s.matches[0].replace(Se, we), Te.test(o[0].type) && u(t.parentNode) || t))) {
              if (o.splice(r, 1), e = i.length && p(o), !e) return Z.apply(n, i), n;
              break
            }
        }
        return (c || x(e, d))(i, t, !B, n, Te.test(e) && u(t.parentNode) || t), n
      }, S.sortStable = V.split("").sort(U).join("") === V, S.detectDuplicates = !!I, G(), S.sortDetached = r(function(e) {
        return 1 & e.compareDocumentPosition(H.createElement("div"))
      }), r(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), S.attributes && r(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), r(function(e) {
        return null == e.getAttribute("disabled")
      }) || o(te, function(e, t, n) {
        var i;
        if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), t
    }(e);
    J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
    var oe = J.expr.match.needsContext,
      se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ae = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, J.fn.extend({
      find: function(e) {
        var t, n = this.length,
          i = [],
          r = this;
        if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
          for (t = 0; t < n; t++)
            if (J.contains(r[t], this)) return !0
        }));
        for (t = 0; t < n; t++) J.find(e, r[t], i);
        return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(i(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(i(this, e || [], !0))
      },
      is: function(e) {
        return !!i(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
      }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ue = J.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
          if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
          if (n[1]) {
            if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), se.test(n[1]) && J.isPlainObject(t))
              for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
          }
          return i = Q.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
      };
    ue.prototype = J.fn, le = J(Q);
    var de = /^(?:parents|prev(?:Until|All))/,
      pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    J.extend({
      dir: function(e, t, n) {
        for (var i = [], r = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (r && J(e).is(n)) break;
            i.push(e)
          }
        return i
      },
      sibling: function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }
    }), J.fn.extend({
      has: function(e) {
        var t = J(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (J.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, i = 0, r = this.length, o = [], s = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
              o.push(n);
              break
            }
        return this.pushStack(o.length > 1 ? J.unique(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? U.call(J(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), J.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return J.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return J.dir(e, "parentNode", n)
      },
      next: function(e) {
        return r(e, "nextSibling")
      },
      prev: function(e) {
        return r(e, "previousSibling")
      },
      nextAll: function(e) {
        return J.dir(e, "nextSibling")
      },
      prevAll: function(e) {
        return J.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return J.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return J.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
        return J.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return J.sibling(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || J.merge([], e.childNodes)
      }
    }, function(e, t) {
      J.fn[e] = function(n, i) {
        var r = J.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (pe[e] || J.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
      }
    });
    var fe = /\S+/g,
      he = {};
    J.Callbacks = function(e) {
      e = "string" == typeof e ? he[e] || o(e) : J.extend({}, e);
      var t, n, i, r, s, a, l = [],
        c = !e.once && [],
        u = function(o) {
          for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && a < s; a++)
            if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
              t = !1;
              break
            }
          i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
        },
        d = {
          add: function() {
            if (l) {
              var n = l.length;
              ! function o(t) {
                J.each(t, function(t, n) {
                  var i = J.type(n);
                  "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                })
              }(arguments), i ? s = l.length : t && (r = n, u(t))
            }
            return this
          },
          remove: function() {
            return l && J.each(arguments, function(e, t) {
              for (var n;
                (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (n <= s && s--, n <= a && a--)
            }), this
          },
          has: function(e) {
            return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
          },
          empty: function() {
            return l = [], s = 0, this
          },
          disable: function() {
            return l = c = t = void 0, this
          },
          disabled: function() {
            return !l
          },
          lock: function() {
            return c = void 0, t || d.disable(), this
          },
          locked: function() {
            return !c
          },
          fireWith: function(e, t) {
            return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
          },
          fire: function() {
            return d.fireWith(this, arguments), this
          },
          fired: function() {
            return !!n
          }
        };
      return d
    }, J.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", J.Callbacks("once memory"), "resolved"],
            ["reject", "fail", J.Callbacks("once memory"), "rejected"],
            ["notify", "progress", J.Callbacks("memory")]
          ],
          n = "pending",
          i = {
            state: function() {
              return n
            },
            always: function() {
              return r.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return J.Deferred(function(n) {
                J.each(t, function(t, o) {
                  var s = J.isFunction(e[t]) && e[t];
                  r[o[1]](function() {
                    var e = s && s.apply(this, arguments);
                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? J.extend(e, i) : i
            }
          },
          r = {};
        return i.pipe = i.then, J.each(t, function(e, o) {
          var s = o[2],
            a = o[3];
          i[o[1]] = s.add, a && s.add(function() {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
            return r[o[0] + "With"](this === r ? i : this, arguments), this
          }, r[o[0] + "With"] = s.fireWith
        }), i.promise(r), e && e.call(r, r), r
      },
      when: function(e) {
        var t, n, i, r = 0,
          o = j.call(arguments),
          s = o.length,
          a = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
          l = 1 === a ? e : J.Deferred(),
          c = function(e, n, i) {
            return function(r) {
              n[e] = this, i[e] = arguments.length > 1 ? j.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
        return a || l.resolveWith(i, o), l.promise()
      }
    });
    var ge;
    J.fn.ready = function(e) {
      return J.ready.promise().done(e), this
    }, J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? J.readyWait++ : J.ready(!0)
      },
      ready: function(e) {
        (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (ge.resolveWith(Q, [J]), J.fn.triggerHandler && (J(Q).triggerHandler("ready"), J(Q).off("ready"))))
      }
    }), J.ready.promise = function(t) {
      return ge || (ge = J.Deferred(), "complete" === Q.readyState ? setTimeout(J.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, J.ready.promise();
    var me = J.access = function(e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === J.type(n)) {
        r = !0;
        for (a in n) J.access(e, t, a, n[a], !0, o, s)
      } else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
          return c.call(J(e), n)
        })), t))
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    };
    J.acceptData = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
      key: function(e) {
        if (!a.accepts(e)) return 0;
        var t = {},
          n = e[this.expando];
        if (!n) {
          n = a.uid++;
          try {
            t[this.expando] = {
              value: n
            }, Object.defineProperties(e, t)
          } catch (i) {
            t[this.expando] = n, J.extend(e, t)
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n
      },
      set: function(e, t, n) {
        var i, r = this.key(e),
          o = this.cache[r];
        if ("string" == typeof t) o[t] = n;
        else if (J.isEmptyObject(o)) J.extend(this.cache[r], t);
        else
          for (i in t) o[i] = t[i];
        return o
      },
      get: function(e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t]
      },
      access: function(e, t, n) {
        var i;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, i, r, o = this.key(e),
          s = this.cache[o];
        if (void 0 === t) this.cache[o] = {};
        else {
          J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
          for (; n--;) delete s[i[n]]
        }
      },
      hasData: function(e) {
        return !J.isEmptyObject(this.cache[e[this.expando]] || {})
      },
      discard: function(e) {
        e[this.expando] && delete this.cache[e[this.expando]]
      }
    };
    var ve = new a,
      be = new a,
      Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ye = /([A-Z])/g;
    J.extend({
      hasData: function(e) {
        return be.hasData(e) || ve.hasData(e)
      },
      data: function(e, t, n) {
        return be.access(e, t, n)
      },
      removeData: function(e, t) {
        be.remove(e, t)
      },
      _data: function(e, t, n) {
        return ve.access(e, t, n)
      },
      _removeData: function(e, t) {
        ve.remove(e, t)
      }
    }), J.fn.extend({
      data: function(e, t) {
        var n, i, r, o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (r = be.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
            ve.set(o, "hasDataAttrs", !0)
          }
          return r
        }
        return "object" == typeof e ? this.each(function() {
          be.set(this, e)
        }) : me(this, function(t) {
          var n, i = J.camelCase(e);
          if (o && void 0 === t) {
            if (n = be.get(o, e), void 0 !== n) return n;
            if (n = be.get(o, i), void 0 !== n) return n;
            if (n = l(o, i, void 0), void 0 !== n) return n
          } else this.each(function() {
            var n = be.get(this, i);
            be.set(this, i, t), e.indexOf("-") !== -1 && void 0 !== n && be.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          be.remove(this, e)
        })
      }
    }), J.extend({
      queue: function(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = J.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = J._queueHooks(e, t),
          s = function() {
            J.dequeue(e, t)
          };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return ve.get(e, n) || ve.access(e, n, {
          empty: J.Callbacks("once memory").add(function() {
            ve.remove(e, [t + "queue", n])
          })
        })
      }
    }), J.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = J.queue(this, e, t);
          J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          J.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, i = 1,
          r = J.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --i || r.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(t)
      }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      we = ["Top", "Right", "Bottom", "Left"],
      Pe = function(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
      },
      Ce = /^(?:checkbox|radio)$/i;
    ! function() {
      var e = Q.createDocumentFragment(),
        t = e.appendChild(Q.createElement("div")),
        n = Q.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ae = "undefined";
    K.focusinBubbles = "onfocusin" in e;
    var xe = /^key/,
      Ee = /^(?:mouse|pointer|contextmenu)|click/,
      Me = /^(?:focusinfocus|focusoutblur)$/,
      ke = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
      global: {},
      add: function(e, t, n, i, r) {
        var o, s, a, l, c, u, d, p, f, h, g, m = ve.get(e);
        if (m)
          for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
              return typeof J !== Ae && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(fe) || [""], c = t.length; c--;) a = ke.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (d = J.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = J.event.special[f] || {}, u = J.extend({
            type: f,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && J.expr.match.needsContext.test(r),
            namespace: h.join(".")
          }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[f] = !0)
      },
      remove: function(e, t, n, i, r) {
        var o, s, a, l, c, u, d, p, f, h, g, m = ve.hasData(e) && ve.get(e);
        if (m && (l = m.events)) {
          for (t = (t || "").match(fe) || [""], c = t.length; c--;)
            if (a = ke.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
              for (d = J.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
              s && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || J.removeEvent(e, f, m.handle), delete l[f])
            } else
              for (f in l) J.event.remove(e, f + t[c], n, i, !0);
          J.isEmptyObject(l) && (delete m.handle, ve.remove(e, "events"))
        }
      },
      trigger: function(t, n, i, r) {
        var o, s, a, l, c, u, d, p = [i || Q],
          f = z.call(t, "type") ? t.type : t,
          h = z.call(t, "namespace") ? t.namespace.split(".") : [];
        if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !Me.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[J.expando] ? t : new J.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
          if (!r && !d.noBubble && !J.isWindow(i)) {
            for (l = d.delegateType || f, Me.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
            a === (i.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || e)
          }
          for (o = 0;
            (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
          return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[f]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, a && (i[c] = a)), t.result
        }
      },
      dispatch: function(e) {
        e = J.event.fix(e);
        var t, n, i, r, o, s = [],
          a = j.call(arguments),
          l = (ve.get(this, "events") || {})[e.type] || [],
          c = J.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
          for (s = J.event.handlers.call(this, e, l), t = 0;
            (r = s[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, i, r, o, s = [],
          a = t.delegateCount,
          l = e.target;
        if (a && l.nodeType && (!e.button || "click" !== e.type))
          for (; l !== this; l = l.parentNode || this)
            if (l.disabled !== !0 || "click" !== e.type) {
              for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
              i.length && s.push({
                elem: l,
                handlers: i
              })
            }
        return a < t.length && s.push({
          elem: this,
          handlers: t.slice(a)
        }), s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, i, r, o = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[J.expando]) return e;
        var t, n, i, r = e.type,
          o = e,
          s = this.fixHooks[r];
        for (s || (this.fixHooks[r] = s = Ee.test(r) ? this.mouseHooks : xe.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
        return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== d() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === d() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && J.nodeName(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return J.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function(e, t, n, i) {
        var r = J.extend(new J.Event, n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
      }
    }, J.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function(e, t) {
      return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, J.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      J.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = this,
            r = e.relatedTarget,
            o = e.handleObj;
          return r && (r === i || J.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), K.focusinBubbles || J.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        J.event.simulate(t, e.target, J.event.fix(e), !0)
      };
      J.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this,
            r = ve.access(i, t);
          r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            r = ve.access(i, t) - 1;
          r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
        }
      }
    }), J.fn.extend({
      on: function(e, t, n, i, r) {
        var o, s;
        if ("object" == typeof e) {
          "string" != typeof t && (n = n || t, t = void 0);
          for (s in e) this.on(s, t, n, e[s], r);
          return this
        }
        if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
        else if (!i) return this;
        return 1 === r && (o = i, i = function(e) {
          return J().off(e), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
          J.event.add(this, e, i, n, t)
        })
      },
      one: function(e, t, n, i) {
        return this.on(e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this
        }
        return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
          J.event.remove(this, e, n, t)
        })
      },
      trigger: function(e, t) {
        return this.each(function() {
          J.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return J.event.trigger(e, t, n, !0)
      }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ge = /<([\w:]+)/,
      He = /<|&#?\w+;/,
      De = /<(?:script|style|link)/i,
      Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^$|\/(?:java|ecma)script/i,
      Oe = /^true\/(.*)/,
      Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, J.extend({
      clone: function(e, t, n) {
        var i, r, o, s, a = e.cloneNode(!0),
          l = J.contains(e.ownerDocument, e);
        if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
          for (s = v(a), o = v(e), i = 0, r = o.length; i < r; i++) b(o[i], s[i]);
        if (t)
          if (n)
            for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) m(o[i], s[i]);
          else m(e, a);
        return s = v(a, "script"), s.length > 0 && g(s, !l && v(e, "script")), a
      },
      buildFragment: function(e, t, n, i) {
        for (var r, o, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
          if (r = e[p], r || 0 === r)
            if ("object" === J.type(r)) J.merge(d, r.nodeType ? [r] : r);
            else if (He.test(r)) {
          for (o = o || u.appendChild(t.createElement("div")), s = (Ge.exec(r) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + r.replace(Ie, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
          J.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
        } else d.push(t.createTextNode(r));
        for (u.textContent = "", p = 0; r = d[p++];)
          if ((!i || J.inArray(r, i) === -1) && (l = J.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), n))
            for (c = 0; r = o[c++];) Ne.test(r.type || "") && n.push(r);
        return u
      },
      cleanData: function(e) {
        for (var t, n, i, r, o = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
          if (J.acceptData(n) && (r = n[ve.expando], r && (t = ve.cache[r]))) {
            if (t.events)
              for (i in t.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
            ve.cache[r] && delete ve.cache[r]
          }
          delete be.cache[n[be.expando]]
        }
      }
    }), J.fn.extend({
      text: function(e) {
        return me(this, function(e) {
          return void 0 === e ? J.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = p(this, e);
            t.appendChild(e)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = p(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      remove: function(e, t) {
        for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
        return this
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return J.clone(this, e, t)
        })
      },
      html: function(e) {
        return me(this, function(e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !De.test(e) && !Re[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = e.replace(Ie, "<$1></$2>");
            try {
              for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
              t = 0
            } catch (r) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = arguments[0];
        return this.domManip(arguments, function(t) {
          e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
        }), e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
        return this.remove(e, !0)
      },
      domManip: function(e, t) {
        e = Y.apply([], e);
        var n, i, r, o, s, a, l = 0,
          c = this.length,
          u = this,
          d = c - 1,
          p = e[0],
          g = J.isFunction(p);
        if (g || c > 1 && "string" == typeof p && !K.checkClone && Be.test(p)) return this.each(function(n) {
          var i = u.eq(n);
          g && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
        });
        if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
          for (r = J.map(v(n, "script"), f), o = r.length; l < c; l++) s = n, l !== d && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), t.call(this[l], s, l);
          if (o)
            for (a = r[r.length - 1].ownerDocument, J.map(r, h), l = 0; l < o; l++) s = r[l], Ne.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Le, "")))
        }
        return this
      }
    }), J.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      J.fn[e] = function(e) {
        for (var n, i = [], r = J(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), J(r[s])[t](n), $.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var Ve, Xe = {},
      Fe = /^margin/,
      We = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
      je = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
      };
    ! function() {
      function t() {
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
        var t = e.getComputedStyle(s, null);
        n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
      }
      var n, i, r = Q.documentElement,
        o = Q.createElement("div"),
        s = Q.createElement("div");
      s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && J.extend(K, {
        pixelPosition: function() {
          return t(), n
        },
        boxSizingReliable: function() {
          return null == i && t(), i
        },
        reliableMarginRight: function() {
          var t, n = s.appendChild(Q.createElement("div"));
          return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), t
        }
      }))
    }(), J.swap = function(e, t, n, i) {
      var r, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      r = n.apply(e, i || []);
      for (o in t) e.style[o] = s[o];
      return r
    };
    var Ye = /^(none|table(?!-c[ea]).+)/,
      $e = new RegExp("^(" + Se + ")(.*)$", "i"),
      Ue = new RegExp("^([+-])=(" + Se + ")", "i"),
      qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      _e = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      ze = ["Webkit", "O", "Moz", "ms"];
    J.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = S(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r, o, s, a = J.camelCase(t),
            l = e.style;
          return t = J.cssProps[a] || (J.cssProps[a] = P(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0)
        }
      },
      css: function(e, t, n, i) {
        var r, o, s, a = J.camelCase(t);
        return t = J.cssProps[a] || (J.cssProps[a] = P(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in _e && (r = _e[t]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
      }
    }), J.each(["height", "width"], function(e, t) {
      J.cssHooks[t] = {
        get: function(e, n, i) {
          if (n) return Ye.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, qe, function() {
            return x(e, t, i)
          }) : x(e, t, i)
        },
        set: function(e, n, i) {
          var r = i && je(e);
          return C(e, n, i ? A(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
        }
      }
    }), J.cssHooks.marginRight = w(K.reliableMarginRight, function(e, t) {
      if (t) return J.swap(e, {
        display: "inline-block"
      }, S, [e, "marginRight"])
    }), J.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      J.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + we[i] + t] = o[i] || o[i - 2] || o[0];
          return r
        }
      }, Fe.test(e) || (J.cssHooks[e + t].set = C)
    }), J.fn.extend({
      css: function(e, t) {
        return me(this, function(e, t, n) {
          var i, r, o = {},
            s = 0;
          if (J.isArray(t)) {
            for (i = je(e), r = t.length; s < r; s++) o[t[s]] = J.css(e, t[s], !1, i);
            return o
          }
          return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return E(this, !0)
      },
      hide: function() {
        return E(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Pe(this) ? J(this).show() : J(this).hide()
        })
      }
    }), J.Tween = M, M.prototype = {
      constructor: M,
      init: function(e, t, n, i, r, o) {
        this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = M.propHooks[this.prop];
        return e && e.get ? e.get(this) : M.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = M.propHooks[this.prop];
        return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
      }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
        },
        set: function(e) {
          J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, J.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    }, J.fx = M.prototype.init, J.fx.step = {};
    var Ke, Qe, Ze = /^(?:toggle|show|hide)$/,
      Je = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
      et = /queueHooks$/,
      tt = [H],
      nt = {
        "*": [function(e, t) {
          var n = this.createTween(e, t),
            i = n.cur(),
            r = Je.exec(t),
            o = r && r[3] || (J.cssNumber[e] ? "" : "px"),
            s = (J.cssNumber[e] || "px" !== o && +i) && Je.exec(J.css(n.elem, e)),
            a = 1,
            l = 20;
          if (s && s[3] !== o) {
            o = o || s[3], r = r || [], s = +i || 1;
            do a = a || ".5", s /= a, J.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
          }
          return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
        }]
      };
    J.Animation = J.extend(B, {
        tweener: function(e, t) {
          J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
          for (var n, i = 0, r = e.length; i < r; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
        },
        prefilter: function(e, t) {
          t ? tt.unshift(e) : tt.push(e)
        }
      }), J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
          complete: n || !n && t || J.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
      }, J.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(Pe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function(e, t, n, i) {
          var r = J.isEmptyObject(e),
            o = J.speed(t, n, i),
            s = function() {
              var t = B(this, J.extend({}, e), o);
              (r || ve.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
          var i = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = J.timers,
              s = ve.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else
              for (r in s) s[r] && s[r].stop && et.test(r) && i(s[r]);
            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
            !t && n || J.dequeue(this, e)
          })
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, n = ve.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = J.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, J.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          })
        }
      }), J.each(["toggle", "show", "hide"], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
        }
      }), J.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        J.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i)
        }
      }), J.timers = [], J.fx.tick = function() {
        var e, t = 0,
          n = J.timers;
        for (Ke = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || J.fx.stop(), Ke = void 0
      }, J.fx.timer = function(e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
      }, J.fx.interval = 13, J.fx.start = function() {
        Qe || (Qe = setInterval(J.fx.tick, J.fx.interval))
      }, J.fx.stop = function() {
        clearInterval(Qe), Qe = null
      }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, J.fn.delay = function(e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
          var i = setTimeout(t, e);
          n.stop = function() {
            clearTimeout(i)
          }
        })
      },
      function() {
        var e = Q.createElement("input"),
          t = Q.createElement("select"),
          n = t.appendChild(Q.createElement("option"));
        e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
      }();
    var it, rt, ot = J.expr.attrHandle;
    J.fn.extend({
      attr: function(e, t) {
        return me(this, J.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          J.removeAttr(this, e)
        })
      }
    }), J.extend({
      attr: function(e, t, n) {
        var i, r, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ae ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
      },
      removeAttr: function(e, t) {
        var n, i, r = 0,
          o = t && t.match(fe);
        if (o && 1 === e.nodeType)
          for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!K.radioValue && "radio" === t && J.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }
    }), rt = {
      set: function(e, t, n) {
        return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ot[t] || J.find.attr;
      ot[t] = function(e, t, i) {
        var r, o;
        return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
      }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
      prop: function(e, t) {
        return me(this, J.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[J.propFix[e] || e]
        })
      }
    }), J.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(e, t, n) {
        var i, r, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
          }
        }
      }
    }), K.optSelected || (J.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      J.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    J.fn.extend({
      addClass: function(e) {
        var t, n, i, r, o, s, a = "string" == typeof e && e,
          l = 0,
          c = this.length;
        if (J.isFunction(e)) return this.each(function(t) {
          J(this).addClass(e.call(this, t, this.className))
        });
        if (a)
          for (t = (e || "").match(fe) || []; l < c; l++)
            if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
              for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              s = J.trim(i), n.className !== s && (n.className = s)
            }
        return this
      },
      removeClass: function(e) {
        var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
          l = 0,
          c = this.length;
        if (J.isFunction(e)) return this.each(function(t) {
          J(this).removeClass(e.call(this, t, this.className))
        });
        if (a)
          for (t = (e || "").match(fe) || []; l < c; l++)
            if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
              for (o = 0; r = t[o++];)
                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
              s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
            }
        return this
      },
      toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function(n) {
          J(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function() {
          if ("string" === n)
            for (var t, i = 0, r = J(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else n !== Ae && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
        })
      },
      hasClass: function(e) {
        for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
          if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
        return !1
      }
    });
    var lt = /\r/g;
    J.fn.extend({
      val: function(e) {
        var t, n, i, r = this[0]; {
          if (arguments.length) return i = J.isFunction(e), this.each(function(n) {
            var r;
            1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
              return null == e ? "" : e + ""
            })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
          });
          if (r) return t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
        }
      }
    }), J.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = J.find.attr(e, "value");
            return null != t ? t : J.trim(J.text(e))
          }
        },
        select: {
          get: function(e) {
            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
              if (n = i[l], (n.selected || l === r) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                if (t = J(n).val(), o) return t;
                s.push(t)
              }
            return s
          },
          set: function(e, t) {
            for (var n, i, r = e.options, o = J.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), J.each(["radio", "checkbox"], function() {
      J.valHooks[this] = {
        set: function(e, t) {
          if (J.isArray(t)) return e.checked = J.inArray(J(e).val(), t) >= 0
        }
      }, K.checkOn || (J.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      J.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), J.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    });
    var ct = J.now(),
      ut = /\?/;
    J.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, J.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        n = new DOMParser, t = n.parseFromString(e, "text/xml")
      } catch (i) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
      pt = /([?&])_=[^&]*/,
      ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      gt = /^(?:GET|HEAD)$/,
      mt = /^\/\//,
      vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      bt = {},
      Tt = {},
      yt = "*/".concat("*"),
      St = e.location.href,
      wt = vt.exec(St.toLowerCase()) || [];
    J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: St,
        type: "GET",
        isLocal: ht.test(wt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": yt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": J.parseJSON,
          "text xml": J.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? L(L(e, J.ajaxSettings), t) : L(J.ajaxSettings, e)
      },
      ajaxPrefilter: N(bt),
      ajaxTransport: N(Tt),
      ajax: function(e, t) {
        function n(e, t, n, s) {
          var l, u, v, b, y, w = t;
          2 !== T && (T = 2, a && clearTimeout(a), i = void 0, o = s || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (b = R(d, S, n)), b = V(d, b, S, l), l ? (d.ifModified && (y = S.getResponseHeader("Last-Modified"), y && (J.lastModified[r] = y), y = S.getResponseHeader("etag"), y && (J.etag[r] = y)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, u = b.data, v = b.error, l = !v)) : (v = w, !e && w || (w = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || w) + "", l ? h.resolveWith(p, [u, w, S]) : h.rejectWith(p, [S, w, v]), S.statusCode(m), m = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [S, d, l ? u : v]), g.fireWith(p, [S, w]), c && (f.trigger("ajaxComplete", [S, d]), --J.active || J.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, r, o, s, a, l, c, u, d = J.ajaxSetup({}, t),
          p = d.context || d,
          f = d.context && (p.nodeType || p.jquery) ? J(p) : J.event,
          h = J.Deferred(),
          g = J.Callbacks("once memory"),
          m = d.statusCode || {},
          v = {},
          b = {},
          T = 0,
          y = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === T) {
                if (!s)
                  for (s = {}; t = ft.exec(o);) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === T ? o : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return T || (e = b[n] = b[n] || e, v[e] = t), this
            },
            overrideMimeType: function(e) {
              return T || (d.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (T < 2)
                  for (t in e) m[t] = [m[t], e[t]];
                else S.always(e[S.status]);
              return this
            },
            abort: function(e) {
              var t = e || y;
              return i && i.abort(t), n(0, t), this
            }
          };
        if (h.promise(S).complete = g.add, S.success = S.done, S.error = S.fail, d.url = ((e || d.url || St) + "").replace(dt, "").replace(mt, wt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), O(bt, d, t, S), 2 === T) return S;
        c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ut.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pt.test(r) ? r.replace(pt, "$1_=" + ct++) : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)), d.ifModified && (J.lastModified[r] && S.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && S.setRequestHeader("If-None-Match", J.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers) S.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(p, S, d) === !1 || 2 === T)) return S.abort();
        y = "abort";
        for (u in {
            success: 1,
            error: 1,
            complete: 1
          }) S[u](d[u]);
        if (i = O(Tt, d, t, S)) {
          S.readyState = 1, c && f.trigger("ajaxSend", [S, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
            S.abort("timeout")
          }, d.timeout));
          try {
            T = 1, i.send(v, n)
          } catch (w) {
            if (!(T < 2)) throw w;
            n(-1, w)
          }
        } else n(-1, "No Transport");
        return S
      },
      getJSON: function(e, t, n) {
        return J.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return J.get(e, void 0, t, "script")
      }
    }), J.each(["get", "post"], function(e, t) {
      J[t] = function(e, n, i, r) {
        return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
          url: e,
          type: t,
          dataType: r,
          data: n,
          success: i
        })
      }
    }), J._evalUrl = function(e) {
      return J.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, J.fn.extend({
      wrapAll: function(e) {
        var t;
        return J.isFunction(e) ? this.each(function(t) {
          J(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(e) {
        return J.isFunction(e) ? this.each(function(t) {
          J(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = J(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = J.isFunction(e);
        return this.each(function(n) {
          J(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
        }).end()
      }
    }), J.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function(e) {
      return !J.expr.filters.hidden(e)
    };
    var Pt = /%20/g,
      Ct = /\[\]$/,
      At = /\r?\n/g,
      xt = /^(?:submit|button|image|reset|file)$/i,
      Et = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
      var n, i = [],
        r = function(e, t) {
          t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
        r(this.name, this.value)
      });
      else
        for (n in e) X(n, e[n], t, r);
      return i.join("&").replace(Pt, "+")
    }, J.fn.extend({
      serialize: function() {
        return J.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = J.prop(this, "elements");
          return e ? J.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !J(this).is(":disabled") && Et.test(this.nodeName) && !xt.test(e) && (this.checked || !Ce.test(e))
        }).map(function(e, t) {
          var n = J(this).val();
          return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(At, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(At, "\r\n")
          }
        }).get()
      }
    }), J.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest
      } catch (e) {}
    };
    var Mt = 0,
      kt = {},
      It = {
        0: 200,
        1223: 204
      },
      Gt = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
      for (var e in kt) kt[e]()
    }), K.cors = !!Gt && "withCredentials" in Gt, K.ajax = Gt = !!Gt, J.ajaxTransport(function(e) {
      var t;
      if (K.cors || Gt && !e.crossDomain) return {
        send: function(n, i) {
          var r, o = e.xhr(),
            s = ++Mt;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (r in e.xhrFields) o[r] = e.xhrFields[r];
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (r in n) o.setRequestHeader(r, n[r]);
          t = function(e) {
            return function() {
              t && (delete kt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(It[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                text: o.responseText
              } : void 0, o.getAllResponseHeaders()))
            }
          }, o.onload = t(), o.onerror = t("error"), t = kt[s] = t("abort");
          try {
            o.send(e.hasContent && e.data || null)
          } catch (a) {
            if (t) throw a
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), J.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(e) {
          return J.globalEval(e), e
        }
      }
    }), J.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, r) {
            t = J("<script>").prop({
              async: !0,
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
            }), Q.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var Ht = [],
      Dt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Ht.pop() || J.expando + "_" + ct++;
        return this[e] = !0, e
      }
    }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
      var r, o, s, a = t.jsonp !== !1 && (Dt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Dt, "$1" + r) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
        return s || J.error(r + " was not called"), s[0]
      }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
        s = arguments
      }, i.always(function() {
        e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
      }), "script"
    }), J.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || Q;
      var i = se.exec(e),
        r = !n && [];
      return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
    };
    var Bt = J.fn.load;
    J.fn.load = function(e, t, n) {
      if ("string" != typeof e && Bt) return Bt.apply(this, arguments);
      var i, r, o, s = this,
        a = e.indexOf(" ");
      return a >= 0 && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && J.ajax({
        url: e,
        type: r,
        dataType: "html",
        data: t
      }).done(function(e) {
        o = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
      }).complete(n && function(e, t) {
        s.each(n, o || [e.responseText, t, e])
      }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      J.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), J.expr.filters.animated = function(e) {
      return J.grep(J.timers, function(t) {
        return e === t.elem
      }).length
    };
    var Nt = e.document.documentElement;
    J.offset = {
      setOffset: function(e, t, n) {
        var i, r, o, s, a, l, c, u = J.css(e, "position"),
          d = J(e),
          p = {};
        "static" === u && (e.style.position = "relative"), a = d.offset(), o = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
      }
    }, J.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          J.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          },
          o = i && i.ownerDocument;
        if (o) return t = o.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Ae && (r = i.getBoundingClientRect()), n = F(o), {
          top: r.top + n.pageYOffset - t.clientTop,
          left: r.left + n.pageXOffset - t.clientLeft
        }) : r
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            i = {
              top: 0,
              left: 0
            };
          return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - J.css(n, "marginTop", !0),
            left: t.left - i.left - J.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent || Nt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
          return e || Nt
        })
      }
    }), J.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(t, n) {
      var i = "pageYOffset" === n;
      J.fn[t] = function(r) {
        return me(this, function(t, r, o) {
          var s = F(t);
          return void 0 === o ? s ? s[n] : t[r] : void(s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
        }, t, r, arguments.length, null)
      }
    }), J.each(["top", "left"], function(e, t) {
      J.cssHooks[t] = w(K.pixelPosition, function(e, n) {
        if (n) return n = S(e, t), We.test(n) ? J(e).position()[t] + "px" : n
      })
    }), J.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      J.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        J.fn[i] = function(i, r) {
          var o = arguments.length && (n || "boolean" != typeof i),
            s = n || (i === !0 || r === !0 ? "margin" : "border");
          return me(this, function(t, n, i) {
            var r;
            return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
          }, t, o ? i : void 0, o, null)
        }
      })
    }), J.fn.size = function() {
      return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return J
    });
    var Ot = e.jQuery,
      Lt = e.$;
    return J.noConflict = function(t) {
      return e.$ === J && (e.$ = Lt), t && e.jQuery === J && (e.jQuery = Ot), J
    }, typeof t === Ae && (e.jQuery = e.$ = J), J
  }), function(e) {
    function t(e) {
      var t = e.length,
        i = n.type(e);
      return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
      var n = function(e, t) {
        return new n.fn.init(e, t)
      };
      n.isWindow = function(e) {
        return null != e && e == e.window
      }, n.type = function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[s.call(e)] || "object" : typeof e
      }, n.isArray = Array.isArray || function(e) {
        return "array" === n.type(e)
      }, n.isPlainObject = function(e) {
        var t;
        if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
        try {
          if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (i) {
          return !1
        }
        for (t in e);
        return void 0 === t || o.call(e, t)
      }, n.each = function(e, n, i) {
        var r, o = 0,
          s = e.length,
          a = t(e);
        if (i) {
          if (a)
            for (; o < s && (r = n.apply(e[o], i), r !== !1); o++);
          else
            for (o in e)
              if (r = n.apply(e[o], i), r === !1) break
        } else if (a)
          for (; o < s && (r = n.call(e[o], o, e[o]), r !== !1); o++);
        else
          for (o in e)
            if (r = n.call(e[o], o, e[o]), r === !1) break; return e
      }, n.data = function(e, t, r) {
        if (void 0 === r) {
          var o = e[n.expando],
            s = o && i[o];
          if (void 0 === t) return s;
          if (s && t in s) return s[t]
        } else if (void 0 !== t) {
          var o = e[n.expando] || (e[n.expando] = ++n.uuid);
          return i[o] = i[o] || {}, i[o][t] = r, r
        }
      }, n.removeData = function(e, t) {
        var r = e[n.expando],
          o = r && i[r];
        o && n.each(t, function(e, t) {
          delete o[t]
        })
      }, n.extend = function() {
        var e, t, i, r, o, s, a = arguments[0] || {},
          l = 1,
          c = arguments.length,
          u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== n.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++)
          if (null != (o = arguments[l]))
            for (r in o) e = a[r], i = o[r], a !== i && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, s = e && n.isArray(e) ? e : []) : s = e && n.isPlainObject(e) ? e : {}, a[r] = n.extend(u, s, i)) : void 0 !== i && (a[r] = i));
        return a
      }, n.queue = function(e, i, r) {
        function o(e, n) {
          var i = n || [];
          return null != e && (t(Object(e)) ? ! function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n !== n)
              for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
          }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
        }
        if (e) {
          i = (i || "fx") + "queue";
          var s = n.data(e, i);
          return r ? (!s || n.isArray(r) ? s = n.data(e, i, o(r)) : s.push(r), s) : s || []
        }
      }, n.dequeue = function(e, t) {
        n.each(e.nodeType ? [e] : e, function(e, i) {
          t = t || "fx";
          var r = n.queue(i, t),
            o = r.shift();
          "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function() {
            n.dequeue(i, t)
          }))
        })
      }, n.fn = n.prototype = {
        init: function(e) {
          if (e.nodeType) return this[0] = e, this;
          throw new Error("Not a DOM node.")
        },
        offset: function() {
          var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function() {
          function e() {
            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
            return e || document
          }
          var t = this[0],
            e = e.apply(t),
            i = this.offset(),
            r = /^(?:body|html)$/i.test(e.nodeName) ? {
              top: 0,
              left: 0
            } : n(e).offset();
          return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
            top: i.top - r.top,
            left: i.left - r.left
          }
        }
      };
      var i = {};
      n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
      for (var r = {}, o = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) r["[object " + a[l] + "]"] = a[l].toLowerCase();
      n.fn.init.prototype = n.fn, e.Velocity = {
        Utilities: n
      }
    }
  }(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
  }(function() {
    return function(e, t, n, i) {
      function r(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
          var r = e[t];
          r && i.push(r)
        }
        return i
      }

      function o(e) {
        return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
      }

      function s(e) {
        var t = p.data(e, "velocity");
        return null === t ? i : t
      }

      function a(e) {
        return function(t) {
          return Math.round(t * e) * (1 / e)
        }
      }

      function l(e, n, i, r) {
        function o(e, t) {
          return 1 - 3 * t + 3 * e
        }

        function s(e, t) {
          return 3 * t - 6 * e
        }

        function a(e) {
          return 3 * e
        }

        function l(e, t, n) {
          return ((o(t, n) * e + s(t, n)) * e + a(t)) * e
        }

        function c(e, t, n) {
          return 3 * o(t, n) * e * e + 2 * s(t, n) * e + a(t)
        }

        function u(t, n) {
          for (var r = 0; r < g; ++r) {
            var o = c(n, e, i);
            if (0 === o) return n;
            var s = l(n, e, i) - t;
            n -= s / o
          }
          return n
        }

        function d() {
          for (var t = 0; t < T; ++t) P[t] = l(t * y, e, i)
        }

        function p(t, n, r) {
          var o, s, a = 0;
          do s = n + (r - n) / 2, o = l(s, e, i) - t, o > 0 ? r = s : n = s; while (Math.abs(o) > v && ++a < b);
          return s
        }

        function f(t) {
          for (var n = 0, r = 1, o = T - 1; r != o && P[r] <= t; ++r) n += y;
          --r;
          var s = (t - P[r]) / (P[r + 1] - P[r]),
            a = n + s * y,
            l = c(a, e, i);
          return l >= m ? u(t, a) : 0 == l ? a : p(t, n, n + y)
        }

        function h() {
          C = !0, e == n && i == r || d()
        }
        var g = 4,
          m = .001,
          v = 1e-7,
          b = 10,
          T = 11,
          y = 1 / (T - 1),
          S = "Float32Array" in t;
        if (4 !== arguments.length) return !1;
        for (var w = 0; w < 4; ++w)
          if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
        e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
        var P = S ? new Float32Array(T) : new Array(T),
          C = !1,
          A = function(t) {
            return C || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), n, r)
          };
        A.getControlPoints = function() {
          return [{
            x: e,
            y: n
          }, {
            x: i,
            y: r
          }]
        };
        var x = "generateBezier(" + [e, n, i, r] + ")";
        return A.toString = function() {
          return x
        }, A
      }

      function c(e, t) {
        var n = e;
        return g.isString(e) ? T.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? a.apply(null, e) : g.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!g.isArray(e) || 4 !== e.length) && l.apply(null, e), n === !1 && (n = T.Easings[T.defaults.easing] ? T.defaults.easing : b), n
      }

      function u(e) {
        if (e) {
          var t = (new Date).getTime(),
            n = T.State.calls.length;
          n > 1e4 && (T.State.calls = r(T.State.calls));
          for (var o = 0; o < n; o++)
            if (T.State.calls[o]) {
              var a = T.State.calls[o],
                l = a[0],
                c = a[2],
                f = a[3],
                h = !!f,
                m = null;
              f || (f = T.State.calls[o][3] = t - 16);
              for (var v = Math.min((t - f) / c.duration, 1), b = 0, y = l.length; b < y; b++) {
                var w = l[b],
                  C = w.element;
                if (s(C)) {
                  var A = !1;
                  if (c.display !== i && null !== c.display && "none" !== c.display) {
                    if ("flex" === c.display) {
                      var x = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                      p.each(x, function(e, t) {
                        S.setPropertyValue(C, "display", t)
                      })
                    }
                    S.setPropertyValue(C, "display", c.display)
                  }
                  c.visibility !== i && "hidden" !== c.visibility && S.setPropertyValue(C, "visibility", c.visibility);
                  for (var E in w)
                    if ("element" !== E) {
                      var M, k = w[E],
                        I = g.isString(k.easing) ? T.Easings[k.easing] : k.easing;
                      if (1 === v) M = k.endValue;
                      else {
                        var G = k.endValue - k.startValue;
                        if (M = k.startValue + G * I(v, c, G), !h && M === k.currentValue) continue
                      }
                      if (k.currentValue = M, "tween" === E) m = M;
                      else {
                        if (S.Hooks.registered[E]) {
                          var H = S.Hooks.getRoot(E),
                            D = s(C).rootPropertyValueCache[H];
                          D && (k.rootPropertyValue = D)
                        }
                        var B = S.setPropertyValue(C, E, k.currentValue + (0 === parseFloat(M) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                        S.Hooks.registered[E] && (S.Normalizations.registered[H] ? s(C).rootPropertyValueCache[H] = S.Normalizations.registered[H]("extract", null, B[1]) : s(C).rootPropertyValueCache[H] = B[1]), "transform" === B[0] && (A = !0)
                      }
                    }
                  c.mobileHA && s(C).transformCache.translate3d === i && (s(C).transformCache.translate3d = "(0px, 0px, 0px)", A = !0), A && S.flushTransformCache(C)
                }
              }
              c.display !== i && "none" !== c.display && (T.State.calls[o][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (T.State.calls[o][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], v, Math.max(0, f + c.duration - t), f, m), 1 === v && d(o)
            }
        }
        T.State.isTicking && P(u)
      }

      function d(e, t) {
        if (!T.State.calls[e]) return !1;
        for (var n = T.State.calls[e][0], r = T.State.calls[e][1], o = T.State.calls[e][2], a = T.State.calls[e][4], l = !1, c = 0, u = n.length; c < u; c++) {
          var d = n[c].element;
          if (t || o.loop || ("none" === o.display && S.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (p.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && s(d)) {
            s(d).isAnimating = !1, s(d).rootPropertyValueCache = {};
            var f = !1;
            p.each(S.Lists.transforms3D, function(e, t) {
              var n = /^scale/.test(t) ? 1 : 0,
                r = s(d).transformCache[t];
              s(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (f = !0, delete s(d).transformCache[t])
            }), o.mobileHA && (f = !0, delete s(d).transformCache.translate3d), f && S.flushTransformCache(d), S.Values.removeClass(d, "velocity-animating")
          }
          if (!t && o.complete && !o.loop && c === u - 1) try {
            o.complete.call(r, r)
          } catch (h) {
            setTimeout(function() {
              throw h
            }, 1)
          }
          a && o.loop !== !0 && a(r), s(d) && o.loop === !0 && !t && (p.each(s(d).tweensContainer, function(e, t) {
            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
          }), T(d, "reverse", {
            loop: !0,
            delay: o.delay
          })), o.queue !== !1 && p.dequeue(d, o.queue)
        }
        T.State.calls[e] = !1;
        for (var g = 0, m = T.State.calls.length; g < m; g++)
          if (T.State.calls[g] !== !1) {
            l = !0;
            break
          }
        l === !1 && (T.State.isTicking = !1, delete T.State.calls, T.State.calls = [])
      }
      var p, f = function() {
          if (n.documentMode) return n.documentMode;
          for (var e = 7; e > 4; e--) {
            var t = n.createElement("div");
            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
          }
          return i
        }(),
        h = function() {
          var e = 0;
          return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
            var n, i = (new Date).getTime();
            return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
              t(i + n)
            }, n)
          }
        }(),
        g = {
          isString: function(e) {
            return "string" == typeof e
          },
          isArray: Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          isFunction: function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
          },
          isNode: function(e) {
            return e && e.nodeType
          },
          isNodeList: function(e) {
            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
          },
          isWrapped: function(e) {
            return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
          },
          isSVG: function(e) {
            return t.SVGElement && e instanceof t.SVGElement
          },
          isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
          }
        },
        m = !1;
      if (e.fn && e.fn.jquery ? (p = e, m = !0) : p = t.Velocity.Utilities, f <= 8 && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (f <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
      var v = 400,
        b = "swing",
        T = {
          State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: t.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            prefixElement: n.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
          },
          CSS: {},
          Utilities: p,
          Redirects: {},
          Easings: {},
          Promise: t.Promise,
          defaults: {
            queue: "",
            duration: v,
            easing: b,
            begin: i,
            complete: i,
            progress: i,
            display: i,
            visibility: i,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
          },
          init: function(e) {
            p.data(e, "velocity", {
              isSVG: g.isSVG(e),
              isAnimating: !1,
              computedStyle: null,
              tweensContainer: null,
              rootPropertyValueCache: {},
              transformCache: {}
            })
          },
          hook: null,
          mock: !1,
          version: {
            major: 1,
            minor: 2,
            patch: 2
          },
          debug: !1
        };
      t.pageYOffset !== i ? (T.State.scrollAnchor = t, T.State.scrollPropertyLeft = "pageXOffset", T.State.scrollPropertyTop = "pageYOffset") : (T.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, T.State.scrollPropertyLeft = "scrollLeft", T.State.scrollPropertyTop = "scrollTop");
      var y = function() {
        function e(e) {
          return -e.tension * e.x - e.friction * e.v
        }

        function t(t, n, i) {
          var r = {
            x: t.x + i.dx * n,
            v: t.v + i.dv * n,
            tension: t.tension,
            friction: t.friction
          };
          return {
            dx: r.v,
            dv: e(r)
          }
        }

        function n(n, i) {
          var r = {
              dx: n.v,
              dv: e(n)
            },
            o = t(n, .5 * i, r),
            s = t(n, .5 * i, o),
            a = t(n, i, s),
            l = 1 / 6 * (r.dx + 2 * (o.dx + s.dx) + a.dx),
            c = 1 / 6 * (r.dv + 2 * (o.dv + s.dv) + a.dv);
          return n.x = n.x + l * i, n.v = n.v + c * i, n
        }
        return function i(e, t, r) {
          var o, s, a, l = {
              x: -1,
              v: 0,
              tension: null,
              friction: null
            },
            c = [0],
            u = 0,
            d = 1e-4,
            p = .016;
          for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, o = null !== r, o ? (u = i(e, t), s = u / r * p) : s = p;;)
            if (a = n(a || l, s), c.push(1 + a.x), u += 16, !(Math.abs(a.x) > d && Math.abs(a.v) > d)) break;
          return o ? function(e) {
            return c[e * (c.length - 1) | 0]
          } : u
        }
      }();
      T.Easings = {
        linear: function(e) {
          return e
        },
        swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        spring: function(e) {
          return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
        }
      }, p.each([
        ["ease", [.25, .1, .25, 1]],
        ["ease-in", [.42, 0, 1, 1]],
        ["ease-out", [0, 0, .58, 1]],
        ["ease-in-out", [.42, 0, .58, 1]],
        ["easeInSine", [.47, 0, .745, .715]],
        ["easeOutSine", [.39, .575, .565, 1]],
        ["easeInOutSine", [.445, .05, .55, .95]],
        ["easeInQuad", [.55, .085, .68, .53]],
        ["easeOutQuad", [.25, .46, .45, .94]],
        ["easeInOutQuad", [.455, .03, .515, .955]],
        ["easeInCubic", [.55, .055, .675, .19]],
        ["easeOutCubic", [.215, .61, .355, 1]],
        ["easeInOutCubic", [.645, .045, .355, 1]],
        ["easeInQuart", [.895, .03, .685, .22]],
        ["easeOutQuart", [.165, .84, .44, 1]],
        ["easeInOutQuart", [.77, 0, .175, 1]],
        ["easeInQuint", [.755, .05, .855, .06]],
        ["easeOutQuint", [.23, 1, .32, 1]],
        ["easeInOutQuint", [.86, 0, .07, 1]],
        ["easeInExpo", [.95, .05, .795, .035]],
        ["easeOutExpo", [.19, 1, .22, 1]],
        ["easeInOutExpo", [1, 0, 0, 1]],
        ["easeInCirc", [.6, .04, .98, .335]],
        ["easeOutCirc", [.075, .82, .165, 1]],
        ["easeInOutCirc", [.785, .135, .15, .86]]
      ], function(e, t) {
        T.Easings[t[0]] = l.apply(null, t[1])
      });
      var S = T.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function() {
            for (var e = 0; e < S.Lists.colors.length; e++) {
              var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
              S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t]
            }
            var n, i, r;
            if (f)
              for (n in S.Hooks.templates) {
                i = S.Hooks.templates[n], r = i[0].split(" ");
                var o = i[1].match(S.RegEx.valueSplit);
                "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), S.Hooks.templates[n] = [r.join(" "), o.join(" ")])
              }
            for (n in S.Hooks.templates) {
              i = S.Hooks.templates[n], r = i[0].split(" ");
              for (var e in r) {
                var s = n + r[e],
                  a = e;
                S.Hooks.registered[s] = [n, a]
              }
            }
          },
          getRoot: function(e) {
            var t = S.Hooks.registered[e];
            return t ? t[0] : e
          },
          cleanRootPropertyValue: function(e, t) {
            return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t
          },
          extractValue: function(e, t) {
            var n = S.Hooks.registered[e];
            if (n) {
              var i = n[0],
                r = n[1];
              return t = S.Hooks.cleanRootPropertyValue(i, t), t.toString().match(S.RegEx.valueSplit)[r]
            }
            return t
          },
          injectValue: function(e, t, n) {
            var i = S.Hooks.registered[e];
            if (i) {
              var r, o, s = i[0],
                a = i[1];
              return n = S.Hooks.cleanRootPropertyValue(s, n), r = n.toString().match(S.RegEx.valueSplit), r[a] = t, o = r.join(" ")
            }
            return n
          }
        },
        Normalizations: {
          registered: {
            clip: function(e, t, n) {
              switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var i;
                  return S.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(S.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                case "inject":
                  return "rect(" + n + ")"
              }
            },
            blur: function(e, t, n) {
              switch (e) {
                case "name":
                  return T.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var i = parseFloat(n);
                  if (!i && 0 !== i) {
                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    i = r ? r[1] : 0
                  }
                  return i;
                case "inject":
                  return parseFloat(n) ? "blur(" + n + ")" : "none"
              }
            },
            opacity: function(e, t, n) {
              if (f <= 8) switch (e) {
                case "name":
                  return "filter";
                case "extract":
                  var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                  return n = i ? i[1] / 100 : 1;
                case "inject":
                  return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
              } else switch (e) {
                case "name":
                  return "opacity";
                case "extract":
                  return n;
                case "inject":
                  return n
              }
            }
          },
          register: function() {
            f <= 9 || T.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
            for (var e = 0; e < S.Lists.transformsBase.length; e++) ! function() {
              var t = S.Lists.transformsBase[e];
              S.Normalizations.registered[t] = function(e, n, r) {
                switch (e) {
                  case "name":
                    return "transform";
                  case "extract":
                    return s(n) === i || s(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : s(n).transformCache[t].replace(/[()]/g, "");
                  case "inject":
                    var o = !1;
                    switch (t.substr(0, t.length - 1)) {
                      case "translate":
                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                        break;
                      case "scal":
                      case "scale":
                        T.State.isAndroid && s(n).transformCache[t] === i && r < 1 && (r = 1), o = !/(\d)$/i.test(r);
                        break;
                      case "skew":
                        o = !/(deg|\d)$/i.test(r);
                        break;
                      case "rotate":
                        o = !/(deg|\d)$/i.test(r)
                    }
                    return o || (s(n).transformCache[t] = "(" + r + ")"), s(n).transformCache[t]
                }
              }
            }();
            for (var e = 0; e < S.Lists.colors.length; e++) ! function() {
              var t = S.Lists.colors[e];
              S.Normalizations.registered[t] = function(e, n, r) {
                switch (e) {
                  case "name":
                    return t;
                  case "extract":
                    var o;
                    if (S.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                    else {
                      var s, a = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(r) ? s = a[r] !== i ? a[r] : a.black : S.RegEx.isHex.test(r) ? s = "rgb(" + S.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (s = a.black), o = (s || r).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                    }
                    return f <= 8 || 3 !== o.split(" ").length || (o += " 1"), o;
                  case "inject":
                    return f <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                }
              }
            }()
          }
        },
        Names: {
          camelCase: function(e) {
            return e.replace(/-(\w)/g, function(e, t) {
              return t.toUpperCase()
            })
          },
          SVGAttribute: function(e) {
            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (f || T.State.isAndroid && !T.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
          },
          prefixCheck: function(e) {
            if (T.State.prefixMatches[e]) return [T.State.prefixMatches[e], !0];
            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; n < i; n++) {
              var r;
              if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                  return e.toUpperCase()
                }), g.isString(T.State.prefixElement.style[r])) return T.State.prefixMatches[e] = r, [r, !0]
            }
            return [e, !1]
          }
        },
        Values: {
          hexToRgb: function(e) {
            var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            return e = e.replace(n, function(e, t, n, i) {
              return t + t + n + n + i + i
            }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
          },
          isCSSNullValue: function(e) {
            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
          },
          getUnitType: function(e) {
            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          },
          getDisplayType: function(e) {
            var t = e && e.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          },
          addClass: function(e, t) {
            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
          },
          removeClass: function(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
          }
        },
        getPropertyValue: function(e, n, r, o) {
          function a(e, n) {
            function r() {
              c && S.setPropertyValue(e, "display", "none")
            }
            var l = 0;
            if (f <= 8) l = p.css(e, n);
            else {
              var c = !1;
              if (/^(width|height)$/.test(n) && 0 === S.getPropertyValue(e, "display") && (c = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
                if ("height" === n && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var u = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
                  return r(), u
                }
                if ("width" === n && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var d = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
                  return r(), d
                }
              }
              var h;
              h = s(e) === i ? t.getComputedStyle(e, null) : s(e).computedStyle ? s(e).computedStyle : s(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === f && "filter" === n ? h.getPropertyValue(n) : h[n], "" !== l && null !== l || (l = e.style[n]), r()
            }
            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
              var g = a(e, "position");
              ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = p(e).position()[n] + "px")
            }
            return l
          }
          var l;
          if (S.Hooks.registered[n]) {
            var c = n,
              u = S.Hooks.getRoot(c);
            r === i && (r = S.getPropertyValue(e, S.Names.prefixCheck(u)[0])), S.Normalizations.registered[u] && (r = S.Normalizations.registered[u]("extract", e, r)), l = S.Hooks.extractValue(c, r)
          } else if (S.Normalizations.registered[n]) {
            var d, h;
            d = S.Normalizations.registered[n]("name", e), "transform" !== d && (h = a(e, S.Names.prefixCheck(d)[0]), S.Values.isCSSNullValue(h) && S.Hooks.templates[n] && (h = S.Hooks.templates[n][1])), l = S.Normalizations.registered[n]("extract", e, h)
          }
          if (!/^[\d-]/.test(l))
            if (s(e) && s(e).isSVG && S.Names.SVGAttribute(n))
              if (/^(height|width)$/i.test(n)) try {
                l = e.getBBox()[n]
              } catch (g) {
                l = 0
              } else l = e.getAttribute(n);
              else l = a(e, S.Names.prefixCheck(n)[0]);
          return S.Values.isCSSNullValue(l) && (l = 0), T.debug >= 2 && console.log("Get " + n + ": " + l), l
        },
        setPropertyValue: function(e, n, i, r, o) {
          var a = n;
          if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
          else if (S.Normalizations.registered[n] && "transform" === S.Normalizations.registered[n]("name", e)) S.Normalizations.registered[n]("inject", e, i), a = "transform", i = s(e).transformCache[n];
          else {
            if (S.Hooks.registered[n]) {
              var l = n,
                c = S.Hooks.getRoot(n);
              r = r || S.getPropertyValue(e, c), i = S.Hooks.injectValue(l, i, r), n = c
            }
            if (S.Normalizations.registered[n] && (i = S.Normalizations.registered[n]("inject", e, i), n = S.Normalizations.registered[n]("name", e)), a = S.Names.prefixCheck(n)[0], f <= 8) try {
              e.style[a] = i
            } catch (u) {
              T.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
            } else s(e) && s(e).isSVG && S.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[a] = i;
            T.debug >= 2 && console.log("Set " + n + " (" + a + "): " + i)
          }
          return [a, i]
        },
        flushTransformCache: function(e) {
          function t(t) {
            return parseFloat(S.getPropertyValue(e, t))
          }
          var n = "";
          if ((f || T.State.isAndroid && !T.State.isChrome) && s(e).isSVG) {
            var i = {
              translate: [t("translateX"), t("translateY")],
              skewX: [t("skewX")],
              skewY: [t("skewY")],
              scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
              rotate: [t("rotateZ"), 0, 0]
            };
            p.each(s(e).transformCache, function(e) {
              /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
            })
          } else {
            var r, o;
            p.each(s(e).transformCache, function(t) {
              return r = s(e).transformCache[t], "transformPerspective" === t ? (o = r, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
            }), o && (n = "perspective" + o + " " + n)
          }
          S.setPropertyValue(e, "transform", n)
        }
      };
      S.Hooks.register(), S.Normalizations.register(), T.hook = function(e, t, n) {
        var r = i;
        return e = o(e), p.each(e, function(e, o) {
          if (s(o) === i && T.init(o), n === i) r === i && (r = T.CSS.getPropertyValue(o, t));
          else {
            var a = T.CSS.setPropertyValue(o, t, n);
            "transform" === a[0] && T.CSS.flushTransformCache(o), r = a
          }
        }), r
      };
      var w = function() {
        function e() {
          return a ? E.promise || null : l
        }

        function r() {
          function e(e) {
            function d(e, t) {
              var n = i,
                r = i,
                s = i;
              return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : c(e[1], a.duration), e[2] !== i && (s = e[2]))) : n = e, t || (r = r || a.easing), g.isFunction(n) && (n = n.call(o, C, P)), g.isFunction(s) && (s = s.call(o, C, P)), [n || 0, r, s]
            }

            function f(e, t) {
              var n, i;
              return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                return n = e, ""
              }), n || (n = S.Values.getUnitType(e)), [i, n]
            }

            function v() {
              var e = {
                  myParent: o.parentNode || n.body,
                  position: S.getPropertyValue(o, "position"),
                  fontSize: S.getPropertyValue(o, "fontSize")
                },
                i = e.position === B.lastPosition && e.myParent === B.lastParent,
                r = e.fontSize === B.lastFontSize;
              B.lastParent = e.myParent, B.lastPosition = e.position, B.lastFontSize = e.fontSize;
              var a = 100,
                l = {};
              if (r && i) l.emToPx = B.lastEmToPx, l.percentToPxWidth = B.lastPercentToPxWidth, l.percentToPxHeight = B.lastPercentToPxHeight;
              else {
                var c = s(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                T.init(c), e.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                  T.CSS.setPropertyValue(c, t, "hidden")
                }), T.CSS.setPropertyValue(c, "position", e.position), T.CSS.setPropertyValue(c, "fontSize", e.fontSize), T.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                  T.CSS.setPropertyValue(c, t, a + "%")
                }), T.CSS.setPropertyValue(c, "paddingLeft", a + "em"), l.percentToPxWidth = B.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(c, "width", null, !0)) || 1) / a, l.percentToPxHeight = B.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(c, "height", null, !0)) || 1) / a, l.emToPx = B.lastEmToPx = (parseFloat(S.getPropertyValue(c, "paddingLeft")) || 1) / a, e.myParent.removeChild(c)
              }
              return null === B.remToPx && (B.remToPx = parseFloat(S.getPropertyValue(n.body, "fontSize")) || 16), null === B.vwToPx && (B.vwToPx = parseFloat(t.innerWidth) / 100, B.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = B.remToPx, l.vwToPx = B.vwToPx, l.vhToPx = B.vhToPx, T.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
            }
            if (a.begin && 0 === C) try {
              a.begin.call(h, h)
            } catch (y) {
              setTimeout(function() {
                throw y
              }, 1)
            }
            if ("scroll" === M) {
              var w, A, x, k = /^x$/i.test(a.axis) ? "Left" : "Top",
                I = parseFloat(a.offset) || 0;
              a.container ? g.isWrapped(a.container) || g.isNode(a.container) ? (a.container = a.container[0] || a.container, w = a.container["scroll" + k], x = w + p(o).position()[k.toLowerCase()] + I) : a.container = null : (w = T.State.scrollAnchor[T.State["scrollProperty" + k]], A = T.State.scrollAnchor[T.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], x = p(o).offset()[k.toLowerCase()] + I), l = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: w,
                  currentValue: w,
                  endValue: x,
                  unitType: "",
                  easing: a.easing,
                  scrollData: {
                    container: a.container,
                    direction: k,
                    alternateValue: A
                  }
                },
                element: o
              }, T.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
            } else if ("reverse" === M) {
              if (!s(o).tweensContainer) return void p.dequeue(o, a.queue);
              "none" === s(o).opts.display && (s(o).opts.display = "auto"), "hidden" === s(o).opts.visibility && (s(o).opts.visibility = "visible"), s(o).opts.loop = !1, s(o).opts.begin = null, s(o).opts.complete = null, b.easing || delete a.easing, b.duration || delete a.duration, a = p.extend({}, s(o).opts, a);
              var G = p.extend(!0, {}, s(o).tweensContainer);
              for (var H in G)
                if ("element" !== H) {
                  var D = G[H].startValue;
                  G[H].startValue = G[H].currentValue = G[H].endValue, G[H].endValue = D, g.isEmptyObject(b) || (G[H].easing = a.easing), T.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(G[H]), o)
                }
              l = G
            } else if ("start" === M) {
              var G;
              s(o).tweensContainer && s(o).isAnimating === !0 && (G = s(o).tweensContainer), p.each(m, function(e, t) {
                if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                  var n = d(t, !0),
                    r = n[0],
                    o = n[1],
                    s = n[2];
                  if (S.RegEx.isHex.test(r)) {
                    for (var a = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(r), c = s ? S.Values.hexToRgb(s) : i, u = 0; u < a.length; u++) {
                      var p = [l[u]];
                      o && p.push(o), c !== i && p.push(c[u]), m[e + a[u]] = p
                    }
                    delete m[e]
                  }
                }
              });
              for (var O in m) {
                var L = d(m[O]),
                  R = L[0],
                  V = L[1],
                  X = L[2];
                O = S.Names.camelCase(O);
                var F = S.Hooks.getRoot(O),
                  W = !1;
                if (s(o).isSVG || "tween" === F || S.Names.prefixCheck(F)[1] !== !1 || S.Normalizations.registered[F] !== i) {
                  (a.display !== i && null !== a.display && "none" !== a.display || a.visibility !== i && "hidden" !== a.visibility) && /opacity|filter/.test(O) && !X && 0 !== R && (X = 0), a._cacheValues && G && G[O] ? (X === i && (X = G[O].endValue + G[O].unitType), W = s(o).rootPropertyValueCache[F]) : S.Hooks.registered[O] ? X === i ? (W = S.getPropertyValue(o, F), X = S.getPropertyValue(o, O, W)) : W = S.Hooks.templates[F][1] : X === i && (X = S.getPropertyValue(o, O));
                  var j, Y, $, U = !1;
                  if (j = f(O, X), X = j[0], $ = j[1], j = f(O, R), R = j[0].replace(/^([+-\/*])=/, function(e, t) {
                      return U = t, ""
                    }), Y = j[1], X = parseFloat(X) || 0, R = parseFloat(R) || 0, "%" === Y && (/^(fontSize|lineHeight)$/.test(O) ? (R /= 100, Y = "em") : /^scale/.test(O) ? (R /= 100, Y = "") : /(Red|Green|Blue)$/i.test(O) && (R = R / 100 * 255, Y = "")), /[\/*]/.test(U)) Y = $;
                  else if ($ !== Y && 0 !== X)
                    if (0 === R) Y = $;
                    else {
                      r = r || v();
                      var q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                      switch ($) {
                        case "%":
                          X *= "x" === q ? r.percentToPxWidth : r.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          X *= r[$ + "ToPx"]
                      }
                      switch (Y) {
                        case "%":
                          X *= 1 / ("x" === q ? r.percentToPxWidth : r.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          X *= 1 / r[Y + "ToPx"]
                      }
                    }
                  switch (U) {
                    case "+":
                      R = X + R;
                      break;
                    case "-":
                      R = X - R;
                      break;
                    case "*":
                      R = X * R;
                      break;
                    case "/":
                      R = X / R
                  }
                  l[O] = {
                    rootPropertyValue: W,
                    startValue: X,
                    currentValue: X,
                    endValue: R,
                    unitType: Y,
                    easing: V
                  }, T.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o)
                } else T.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
              }
              l.element = o
            }
            l.element && (S.Values.addClass(o, "velocity-animating"), N.push(l), "" === a.queue && (s(o).tweensContainer = l, s(o).opts = a), s(o).isAnimating = !0, C === P - 1 ? (T.State.calls.push([N, h, a, null, E.resolver]), T.State.isTicking === !1 && (T.State.isTicking = !0, u())) : C++)
          }
          var r, o = this,
            a = p.extend({}, T.defaults, b),
            l = {};
          switch (s(o) === i && T.init(o), parseFloat(a.delay) && a.queue !== !1 && p.queue(o, a.queue, function(e) {
            T.velocityQueueEntryFlag = !0, s(o).delayTimer = {
              setTimeout: setTimeout(e, parseFloat(a.delay)),
              next: e
            }
          }), a.duration.toString().toLowerCase()) {
            case "fast":
              a.duration = 200;
              break;
            case "normal":
              a.duration = v;
              break;
            case "slow":
              a.duration = 600;
              break;
            default:
              a.duration = parseFloat(a.duration) || 1
          }
          T.mock !== !1 && (T.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(T.mock) || 1, a.delay *= parseFloat(T.mock) || 1)), a.easing = c(a.easing, a.duration), a.begin && !g.isFunction(a.begin) && (a.begin = null), a.progress && !g.isFunction(a.progress) && (a.progress = null), a.complete && !g.isFunction(a.complete) && (a.complete = null), a.display !== i && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = T.CSS.Values.getDisplayType(o))), a.visibility !== i && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && T.State.isMobile && !T.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : p.queue(o, a.queue, function(t, n) {
            return n === !0 ? (E.promise && E.resolver(h), !0) : (T.velocityQueueEntryFlag = !0, void e(t))
          }), "" !== a.queue && "fx" !== a.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o)
        }
        var a, l, f, h, m, b, y = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
        if (g.isWrapped(this) ? (a = !1, f = 0, h = this, l = this) : (a = !0, f = 1, h = y ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
          y ? (m = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (m = arguments[f], b = arguments[f + 1]);
          var P = h.length,
            C = 0;
          if (!/^(stop|finish|finishAll)$/i.test(m) && !p.isPlainObject(b)) {
            var A = f + 1;
            b = {};
            for (var x = A; x < arguments.length; x++) g.isArray(arguments[x]) || !/^(fast|normal|slow)$/i.test(arguments[x]) && !/^\d/.test(arguments[x]) ? g.isString(arguments[x]) || g.isArray(arguments[x]) ? b.easing = arguments[x] : g.isFunction(arguments[x]) && (b.complete = arguments[x]) : b.duration = arguments[x]
          }
          var E = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          a && T.Promise && (E.promise = new T.Promise(function(e, t) {
            E.resolver = e, E.rejecter = t
          }));
          var M;
          switch (m) {
            case "scroll":
              M = "scroll";
              break;
            case "reverse":
              M = "reverse";
              break;
            case "finish":
            case "finishAll":
            case "stop":
              p.each(h, function(e, t) {
                s(t) && s(t).delayTimer && (clearTimeout(s(t).delayTimer.setTimeout), s(t).delayTimer.next && s(t).delayTimer.next(), delete s(t).delayTimer), "finishAll" !== m || b !== !0 && !g.isString(b) || (p.each(p.queue(t, g.isString(b) ? b : ""), function(e, t) {
                  g.isFunction(t) && t()
                }), p.queue(t, g.isString(b) ? b : "", []))
              });
              var k = [];
              return p.each(T.State.calls, function(e, t) {
                t && p.each(t[1], function(n, r) {
                  var o = b === i ? "" : b;
                  return o !== !0 && t[2].queue !== o && (b !== i || t[2].queue !== !1) || void p.each(h, function(n, i) {
                    i === r && ((b === !0 || g.isString(b)) && (p.each(p.queue(i, g.isString(b) ? b : ""), function(e, t) {
                      g.isFunction(t) && t(null, !0)
                    }), p.queue(i, g.isString(b) ? b : "", [])), "stop" === m ? (s(i) && s(i).tweensContainer && o !== !1 && p.each(s(i).tweensContainer, function(e, t) {
                      t.endValue = t.currentValue
                    }), k.push(e)) : "finish" !== m && "finishAll" !== m || (t[2].duration = 1))
                  })
                })
              }), "stop" === m && (p.each(k, function(e, t) {
                d(t, !0)
              }), E.promise && E.resolver(h)), e();
            default:
              if (!p.isPlainObject(m) || g.isEmptyObject(m)) {
                if (g.isString(m) && T.Redirects[m]) {
                  var I = p.extend({}, b),
                    G = I.duration,
                    H = I.delay || 0;
                  return I.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function(e, t) {
                    parseFloat(I.stagger) ? I.delay = H + parseFloat(I.stagger) * e : g.isFunction(I.stagger) && (I.delay = H + I.stagger.call(t, e, P)), I.drag && (I.duration = parseFloat(G) || (/^(callout|transition)/.test(m) ? 1e3 : v), I.duration = Math.max(I.duration * (I.backwards ? 1 - e / P : (e + 1) / P), .75 * I.duration, 200)), T.Redirects[m].call(t, t, I || {}, e, P, h, E.promise ? E : i)
                  }), e()
                }
                var D = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return E.promise ? E.rejecter(new Error(D)) : console.log(D), e()
              }
              M = "start"
          }
          var B = {
              lastParent: null,
              lastPosition: null,
              lastFontSize: null,
              lastPercentToPxWidth: null,
              lastPercentToPxHeight: null,
              lastEmToPx: null,
              remToPx: null,
              vwToPx: null,
              vhToPx: null
            },
            N = [];
          p.each(h, function(e, t) {
            g.isNode(t) && r.call(t)
          });
          var O, I = p.extend({}, T.defaults, b);
          if (I.loop = parseInt(I.loop), O = 2 * I.loop - 1, I.loop)
            for (var L = 0; L < O; L++) {
              var R = {
                delay: I.delay,
                progress: I.progress
              };
              L === O - 1 && (R.display = I.display, R.visibility = I.visibility, R.complete = I.complete), w(h, "reverse", R)
            }
          return e()
        }
      };
      T = p.extend(w, T), T.animate = w;
      var P = t.requestAnimationFrame || h;
      return T.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
        n.hidden ? (P = function(e) {
          return setTimeout(function() {
            e(!0)
          }, 16)
        }, u()) : P = t.requestAnimationFrame || h
      }), e.Velocity = T, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = T.defaults), p.each(["Down", "Up"], function(e, t) {
        T.Redirects["slide" + t] = function(e, n, r, o, s, a) {
          var l = p.extend({}, n),
            c = l.begin,
            u = l.complete,
            d = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            f = {};
          l.display === i && (l.display = "Down" === t ? "inline" === T.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
            c && c.call(s, s);
            for (var n in d) {
              f[n] = e.style[n];
              var i = T.CSS.getPropertyValue(e, n);
              d[n] = "Down" === t ? [i, 0] : [0, i]
            }
            f.overflow = e.style.overflow, e.style.overflow = "hidden"
          }, l.complete = function() {
            for (var t in f) e.style[t] = f[t];
            u && u.call(s, s), a && a.resolver(s)
          }, T(e, d, l)
        }
      }), p.each(["In", "Out"], function(e, t) {
        T.Redirects["fade" + t] = function(e, n, r, o, s, a) {
          var l = p.extend({}, n),
            c = {
              opacity: "In" === t ? 1 : 0
            },
            u = l.complete;
          r !== o - 1 ? l.complete = l.begin = null : l.complete = function() {
            u && u.call(s, s), a && a.resolver(s)
          }, l.display === i && (l.display = "In" === t ? "auto" : "none"), T(this, c, l)
        }
      }), T
    }(window.jQuery || window.Zepto || window, window, document)
  }), function(e) {
    "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
  }(function() {
    return function(e, t, n, i) {
      function r(e, t) {
        var n = [];
        return !(!e || !t) && (s.each([e, t], function(e, t) {
          var i = [];
          s.each(t, function(e, t) {
            for (; t.toString().length < 5;) t = "0" + t;
            i.push(t)
          }), n.push(i.join(""))
        }), parseFloat(n[0]) > parseFloat(n[1]))
      }
      if (!e.Velocity || !e.Velocity.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
      var o = e.Velocity,
        s = o.Utilities,
        a = o.version,
        l = {
          major: 1,
          minor: 1,
          patch: 0
        };
      if (r(l, a)) {
        var c = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
        throw alert(c), new Error(c)
      }
      o.RegisterEffect = o.RegisterUI = function(e, t) {
        function n(e, t, n, i) {
          var r, a = 0;
          s.each(e.nodeType ? [e] : e, function(e, t) {
            i && (n += e * i), r = t.parentNode, s.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(e, n) {
              a += parseFloat(o.CSS.getPropertyValue(t, n))
            })
          }), o.animate(r, {
            height: ("In" === t ? "+" : "-") + "=" + a
          }, {
            queue: !1,
            easing: "ease-in-out",
            duration: n * ("In" === t ? .6 : 1)
          })
        }
        return o.Redirects[e] = function(r, a, l, c, u, d) {
          function p() {
            a.display !== i && "none" !== a.display || !/Out$/.test(e) || s.each(u.nodeType ? [u] : u, function(e, t) {
              o.CSS.setPropertyValue(t, "display", "none")
            }), a.complete && a.complete.call(u, u), d && d.resolver(u || r)
          }
          var f = l === c - 1;
          "function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(u, u) : t.defaultDuration = parseFloat(t.defaultDuration);
          for (var h = 0; h < t.calls.length; h++) {
            var g = t.calls[h],
              m = g[0],
              v = a.duration || t.defaultDuration || 1e3,
              b = g[1],
              T = g[2] || {},
              y = {};
            if (y.duration = v * (b || 1), y.queue = a.queue || "", y.easing = T.easing || "ease", y.delay = parseFloat(T.delay) || 0, y._cacheValues = T._cacheValues || !0, 0 === h) {
              if (y.delay += parseFloat(a.delay) || 0, 0 === l && (y.begin = function() {
                  a.begin && a.begin.call(u, u);
                  var t = e.match(/(In|Out)$/);
                  t && "In" === t[0] && m.opacity !== i && s.each(u.nodeType ? [u] : u, function(e, t) {
                    o.CSS.setPropertyValue(t, "opacity", 0)
                  }), a.animateParentHeight && t && n(u, t[0], v + y.delay, a.stagger)
                }), null !== a.display)
                if (a.display !== i && "none" !== a.display) y.display = a.display;
                else if (/In$/.test(e)) {
                var S = o.CSS.Values.getDisplayType(r);
                y.display = "inline" === S ? "inline-block" : S
              }
              a.visibility && "hidden" !== a.visibility && (y.visibility = a.visibility)
            }
            h === t.calls.length - 1 && (y.complete = function() {
              if (t.reset) {
                for (var e in t.reset) {
                  var n = t.reset[e];
                  o.CSS.Hooks.registered[e] !== i || "string" != typeof n && "number" != typeof n || (t.reset[e] = [t.reset[e], t.reset[e]])
                }
                var s = {
                  duration: 0,
                  queue: !1
                };
                f && (s.complete = p), o.animate(r, t.reset, s)
              } else f && p()
            }, "hidden" === a.visibility && (y.visibility = a.visibility)), o.animate(r, m, y)
          }
        }, o
      }, o.RegisterEffect.packagedEffects = {
        "callout.bounce": {
          defaultDuration: 550,
          calls: [
            [{
              translateY: -30
            }, .25],
            [{
              translateY: 0
            }, .125],
            [{
              translateY: -15
            }, .125],
            [{
              translateY: 0
            }, .25]
          ]
        },
        "callout.shake": {
          defaultDuration: 800,
          calls: [
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 0
            }, .125]
          ]
        },
        "callout.flash": {
          defaultDuration: 1100,
          calls: [
            [{
              opacity: [0, "easeInOutQuad", 1]
            }, .25],
            [{
              opacity: [1, "easeInOutQuad"]
            }, .25],
            [{
              opacity: [0, "easeInOutQuad"]
            }, .25],
            [{
              opacity: [1, "easeInOutQuad"]
            }, .25]
          ]
        },
        "callout.pulse": {
          defaultDuration: 825,
          calls: [
            [{
              scaleX: 1.1,
              scaleY: 1.1
            }, .5, {
              easing: "easeInExpo"
            }],
            [{
              scaleX: 1,
              scaleY: 1
            }, .5]
          ]
        },
        "callout.swing": {
          defaultDuration: 950,
          calls: [
            [{
              rotateZ: 15
            }, .2],
            [{
              rotateZ: -10
            }, .2],
            [{
              rotateZ: 5
            }, .2],
            [{
              rotateZ: -5
            }, .2],
            [{
              rotateZ: 0
            }, .2]
          ]
        },
        "callout.tada": {
          defaultDuration: 1e3,
          calls: [
            [{
              scaleX: .9,
              scaleY: .9,
              rotateZ: -3
            }, .1],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              rotateZ: 3
            }, .1],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              rotateZ: -3
            }, .1],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            [{
              scaleX: 1,
              scaleY: 1,
              rotateZ: 0
            }, .2]
          ]
        },
        "transition.fadeIn": {
          defaultDuration: 500,
          calls: [
            [{
              opacity: [1, 0]
            }]
          ]
        },
        "transition.fadeOut": {
          defaultDuration: 500,
          calls: [
            [{
              opacity: [0, 1]
            }]
          ]
        },
        "transition.flipXIn": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              rotateY: [0, -55]
            }]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipXOut": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              rotateY: 55
            }]
          ],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipYIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              rotateX: [0, -45]
            }]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipYOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              rotateX: 25
            }]
          ],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.flipBounceXIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [.725, 0],
              transformPerspective: [400, 400],
              rotateY: [-10, 90]
            }, .5],
            [{
              opacity: .8,
              rotateY: 10
            }, .25],
            [{
              opacity: 1,
              rotateY: 0
            }, .25]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceXOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [.9, 1],
              transformPerspective: [400, 400],
              rotateY: -10
            }, .5],
            [{
              opacity: 0,
              rotateY: 90
            }, .5]
          ],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipBounceYIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [.725, 0],
              transformPerspective: [400, 400],
              rotateX: [-10, 90]
            }, .5],
            [{
              opacity: .8,
              rotateX: 10
            }, .25],
            [{
              opacity: 1,
              rotateX: 0
            }, .25]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceYOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [.9, 1],
              transformPerspective: [400, 400],
              rotateX: -15
            }, .5],
            [{
              opacity: 0,
              rotateX: 90
            }, .5]
          ],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.swoopIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["100%", "50%"],
              transformOriginY: ["100%", "100%"],
              scaleX: [1, 0],
              scaleY: [1, 0],
              translateX: [0, -700],
              translateZ: 0
            }]
          ],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.swoopOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "100%"],
              transformOriginY: ["100%", "100%"],
              scaleX: 0,
              scaleY: 0,
              translateX: -700,
              translateZ: 0
            }]
          ],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%",
            scaleX: 1,
            scaleY: 1,
            translateX: 0
          }
        },
        "transition.whirlIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, 0],
              scaleY: [1, 0],
              rotateY: [0, 160]
            }, 1, {
              easing: "easeInOutSine"
            }]
          ]
        },
        "transition.whirlOut": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [0, "easeInOutQuint", 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: 0,
              scaleY: 0,
              rotateY: 160
            }, 1, {
              easing: "swing"
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1,
            rotateY: 0
          }
        },
        "transition.shrinkIn": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, 1.5],
              scaleY: [1, 1.5],
              translateZ: 0
            }]
          ]
        },
        "transition.shrinkOut": {
          defaultDuration: 600,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: 1.3,
              scaleY: 1.3,
              translateZ: 0
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.expandIn": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, .625],
              scaleY: [1, .625],
              translateZ: 0
            }]
          ]
        },
        "transition.expandOut": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: .5,
              scaleY: .5,
              translateZ: 0
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              scaleX: [1.05, .3],
              scaleY: [1.05, .3]
            }, .4],
            [{
              scaleX: .9,
              scaleY: .9,
              translateZ: 0
            }, .2],
            [{
              scaleX: 1,
              scaleY: 1
            }, .5]
          ]
        },
        "transition.bounceOut": {
          defaultDuration: 800,
          calls: [
            [{
              scaleX: .95,
              scaleY: .95
            }, .35],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              translateZ: 0
            }, .35],
            [{
              opacity: [0, 1],
              scaleX: .3,
              scaleY: .3
            }, .3]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceUpIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [-30, 1e3]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateY: 10
            }, .2],
            [{
              translateY: 0
            }, .2]
          ]
        },
        "transition.bounceUpOut": {
          defaultDuration: 1e3,
          calls: [
            [{
              translateY: 20
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateY: -1e3
            }, .8]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceDownIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [30, -1e3]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateY: -10
            }, .2],
            [{
              translateY: 0
            }, .2]
          ]
        },
        "transition.bounceDownOut": {
          defaultDuration: 1e3,
          calls: [
            [{
              translateY: -20
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateY: 1e3
            }, .8]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceLeftIn": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [30, -1250]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateX: -10
            }, .2],
            [{
              translateX: 0
            }, .2]
          ]
        },
        "transition.bounceLeftOut": {
          defaultDuration: 750,
          calls: [
            [{
              translateX: 30
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateX: -1250
            }, .8]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.bounceRightIn": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [-30, 1250]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateX: 10
            }, .2],
            [{
              translateX: 0
            }, .2]
          ]
        },
        "transition.bounceRightOut": {
          defaultDuration: 750,
          calls: [
            [{
              translateX: -30
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateX: 1250
            }, .8]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, 20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideUpOut": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [0, 1],
              translateY: -20,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, -20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideDownOut": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [0, 1],
              translateY: 20,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftIn": {
          defaultDuration: 1e3,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, -20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideLeftOut": {
          defaultDuration: 1050,
          calls: [
            [{
              opacity: [0, 1],
              translateX: -20,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightIn": {
          defaultDuration: 1e3,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, 20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideRightOut": {
          defaultDuration: 1050,
          calls: [
            [{
              opacity: [0, 1],
              translateX: 20,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpBigIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, 75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideUpBigOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              translateY: -75,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownBigIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, -75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideDownBigOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              translateY: 75,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftBigIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, -75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideLeftBigOut": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [0, 1],
              translateX: -75,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightBigIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, 75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideRightBigOut": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [0, 1],
              translateX: 75,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.perspectiveUpIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: ["100%", "100%"],
              rotateX: [0, -180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveUpOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: ["100%", "100%"],
              rotateX: -180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveDownIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateX: [0, 180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveDownOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateX: 180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveLeftIn": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [2e3, 2e3],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateY: [0, -180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveLeftOut": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [2e3, 2e3],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateY: -180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        },
        "transition.perspectiveRightIn": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [2e3, 2e3],
              transformOriginX: ["100%", "100%"],
              transformOriginY: [0, 0],
              rotateY: [0, 180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveRightOut": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [2e3, 2e3],
              transformOriginX: ["100%", "100%"],
              transformOriginY: [0, 0],
              rotateY: 180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        }
      };
      for (var u in o.RegisterEffect.packagedEffects) o.RegisterEffect(u, o.RegisterEffect.packagedEffects[u]);
      o.RunSequence = function(e) {
        var t = s.extend(!0, [], e);
        t.length > 1 && (s.each(t.reverse(), function(e, n) {
          var i = t[e + 1];
          if (i) {
            var r = n.o || n.options,
              a = i.o || i.options,
              l = r && r.sequenceQueue === !1 ? "begin" : "complete",
              c = a && a[l],
              u = {};
            u[l] = function() {
              var e = i.e || i.elements,
                t = e.nodeType ? [e] : e;
              c && c.call(t, t), o(n)
            }, i.o ? i.o = s.extend({}, a, u) : i.options = s.extend({}, a, u)
          }
        }), t.reverse()), o(t[0])
      }
    }(window.jQuery || window.Zepto || window, window, document)
  }), function(e, t) {
    e(function() {
      "use strict";

      function e(e, t) {
        return null != e && null != t && e.toLowerCase() === t.toLowerCase()
      }

      function n(e, t) {
        var n, i, r = e.length;
        if (!r || !t) return !1;
        for (n = t.toLowerCase(), i = 0; i < r; ++i)
          if (n === e[i].toLowerCase()) return !0;
        return !1
      }

      function i(e) {
        for (var t in e) a.call(e, t) && (e[t] = new RegExp(e[t], "i"))
      }

      function r(e, t) {
        this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
      }
      var o = {};
      o.mobileDetectRules = {
        phones: {
          iPhone: "\\biPhone\\b|\\biPod\\b",
          BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
          HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
          Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
          Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
          Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
          Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
          LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
          Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
          Asus: "Asus.*Galaxy|PadFone.*Mobile",
          NokiaLumia: "Lumia [0-9]{3,4}",
          Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
          Palm: "PalmSource|Palm",
          Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
          Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
          Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
          Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
          iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
          SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
          Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
          Alcatel: "Alcatel",
          Nintendo: "Nintendo 3DS",
          Amoi: "Amoi",
          INQ: "INQ",
          GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        tablets: {
          iPad: "iPad|iPad.*Mobile",
          NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
          SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
          Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
          SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
          HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
          AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA",
          BlackBerryTablet: "PlayBook|RIM Tablet",
          HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
          MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
          NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
          AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20",
          ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
          LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
          FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
          PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
          LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
          DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
          YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
          MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
          ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
          IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
          IRUTablet: "M702pro",
          MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
          EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
          AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
          ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
          AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
          NokiaLumiaTablet: "Lumia 2520",
          SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
          PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
          CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
          CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
          MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
          MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
          SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
          RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
          FlyTablet: "IQ310|Fly Vision",
          bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
          HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
          NecTablet: "\\bN-06D|\\bN-08D",
          PantechTablet: "Pantech.*P4100",
          BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
          VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
          ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
          PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
          NabiTablet: "Android.*\\bNabi",
          KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
          DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
          TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
          PlaystationTablet: "Playstation.*(Portable|Vita)",
          TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
          PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
          AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
          DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
          GalapadTablet: "Android.*\\bG1\\b",
          MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
          KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
          AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
          PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
          YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
          ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
          GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
          PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
          OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
          HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
          DPSTablet: "DPS Dream 9|DPS Dual 7",
          VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
          CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
          MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
          ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
          GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
          ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
          VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
          ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
          StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
          VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
          EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
          RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
          iMobileTablet: "i-mobile i-note",
          TolinoTablet: "tolino tab [0-9.]+|tolino shine",
          AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
          AMPETablet: "Android.* A78 ",
          SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
          TecnoTablet: "TECNO P9",
          JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
          iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
          FX2Tablet: "FX2 PAD7|FX2 PAD10",
          XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
          ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
          OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
          CaptivaTablet: "CAPTIVA PAD",
          IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
          TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
          OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
          JaytechTablet: "TPC-PA762",
          BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
          DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
          EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
          LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
          AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
          MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
          CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
          WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
          MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
          NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
          NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
          LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
          UbislateTablet: "UbiSlate[\\s]?7C",
          PocketBookTablet: "Pocketbook",
          KocasoTablet: "\\b(TB-1207)\\b",
          Hudl: "Hudl HT7S3|Hudl 2",
          TelstraTablet: "T-Hub2",
          GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
        },
        oss: {
          AndroidOS: "Android",
          BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
          PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
          SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
          WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
          WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
          iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
          MeeGoOS: "MeeGo",
          MaemoOS: "Maemo",
          JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
          webOS: "webOS|hpwOS",
          badaOS: "\\bBada\\b",
          BREWOS: "BREW"
        },
        uas: {
          Vivaldi: "Vivaldi",
          Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
          Dolfin: "\\bDolfin\\b",
          Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
          Skyfire: "Skyfire",
          Edge: "Mobile Safari/[.0-9]* Edge",
          IE: "IEMobile|MSIEMobile",
          Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
          Bolt: "bolt",
          TeaShark: "teashark",
          Blazer: "Blazer",
          Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
          Tizen: "Tizen",
          UCBrowser: "UC.*Browser|UCWEB",
          baiduboxapp: "baiduboxapp",
          baidubrowser: "baidubrowser",
          DiigoBrowser: "DiigoBrowser",
          Puffin: "Puffin",
          Mercury: "\\bMercury\\b",
          ObigoBrowser: "Obigo",
          NetFront: "NF-Browser",
          GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
          PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
        },
        props: {
          Mobile: "Mobile/[VER]",
          Build: "Build/[VER]",
          Version: "Version/[VER]",
          VendorID: "VendorID/[VER]",
          iPad: "iPad.*CPU[a-z ]+[VER]",
          iPhone: "iPhone.*CPU[a-z ]+[VER]",
          iPod: "iPod.*CPU[a-z ]+[VER]",
          Kindle: "Kindle/[VER]",
          Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
          Coast: ["Coast/[VER]"],
          Dolfin: "Dolfin/[VER]",
          Firefox: "Firefox/[VER]",
          Fennec: "Fennec/[VER]",
          Edge: "Edge/[VER]",
          IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
          NetFront: "NetFront/[VER]",
          NokiaBrowser: "NokiaBrowser/[VER]",
          Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
          "Opera Mini": "Opera Mini/[VER]",
          "Opera Mobi": "Version/[VER]",
          "UC Browser": "UC Browser[VER]",
          MQQBrowser: "MQQBrowser/[VER]",
          MicroMessenger: "MicroMessenger/[VER]",
          baiduboxapp: "baiduboxapp/[VER]",
          baidubrowser: "baidubrowser/[VER]",
          Iron: "Iron/[VER]",
          Safari: ["Version/[VER]", "Safari/[VER]"],
          Skyfire: "Skyfire/[VER]",
          Tizen: "Tizen/[VER]",
          Webkit: "webkit[ /][VER]",
          PaleMoon: "PaleMoon/[VER]",
          Gecko: "Gecko/[VER]",
          Trident: "Trident/[VER]",
          Presto: "Presto/[VER]",
          Goanna: "Goanna/[VER]",
          iOS: " \\bi?OS\\b [VER][ ;]{1}",
          Android: "Android [VER]",
          BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
          BREW: "BREW [VER]",
          Java: "Java/[VER]",
          "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
          "Windows Phone": "Windows Phone [VER]",
          "Windows CE": "Windows CE/[VER]",
          "Windows NT": "Windows NT [VER]",
          Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
          webOS: ["webOS/[VER]", "hpwOS/[VER];"]
        },
        utils: {
          Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
          MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
          DesktopMode: "WPDesktop",
          TV: "SonyDTV|HbbTV",
          WebKit: "(webkit)[ /]([\\w.]+)",
          Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
          Watch: "SM-V700"
        }
      }, o.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
      };
      var s, a = Object.prototype.hasOwnProperty;
      return o.FALLBACK_PHONE = "UnknownPhone", o.FALLBACK_TABLET = "UnknownTablet", o.FALLBACK_MOBILE = "UnknownMobile", s = "isArray" in Array ? Array.isArray : function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        function() {
          var e, t, n, r, l, c, u = o.mobileDetectRules;
          for (e in u.props)
            if (a.call(u.props, e)) {
              for (t = u.props[e], s(t) || (t = [t]), l = t.length, r = 0; r < l; ++r) n = t[r], c = n.indexOf("[VER]"), c >= 0 && (n = n.substring(0, c) + "([\\w._\\+]+)" + n.substring(c + 5)), t[r] = new RegExp(n, "i");
              u.props[e] = t
            }
          i(u.oss), i(u.phones), i(u.tablets), i(u.uas), i(u.utils), u.oss0 = {
            WindowsPhoneOS: u.oss.WindowsPhoneOS,
            WindowsMobileOS: u.oss.WindowsMobileOS
          }
        }(), o.findMatch = function(e, t) {
          for (var n in e)
            if (a.call(e, n) && e[n].test(t)) return n;
          return null
        }, o.findMatches = function(e, t) {
          var n = [];
          for (var i in e) a.call(e, i) && e[i].test(t) && n.push(i);
          return n
        }, o.getVersionStr = function(e, t) {
          var n, i, r, s, l = o.mobileDetectRules.props;
          if (a.call(l, e))
            for (n = l[e], r = n.length, i = 0; i < r; ++i)
              if (s = n[i].exec(t), null !== s) return s[1];
          return null
        }, o.getVersion = function(e, t) {
          var n = o.getVersionStr(e, t);
          return n ? o.prepareVersionNo(n) : NaN
        }, o.prepareVersionNo = function(e) {
          var t;
          return t = e.split(/[a-z._ \/\-]/i), 1 === t.length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
        }, o.isMobileFallback = function(e) {
          return o.detectMobileBrowsers.fullPattern.test(e) || o.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
        }, o.isTabletFallback = function(e) {
          return o.detectMobileBrowsers.tabletPattern.test(e)
        }, o.prepareDetectionCache = function(e, n, i) {
          if (e.mobile === t) {
            var s, a, l;
            return (a = o.findMatch(o.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = a, void(e.phone = null)) : (s = o.findMatch(o.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = s, void(e.tablet = null)) : void(o.isMobileFallback(n) ? (l = r.isPhoneSized(i), l === t ? (e.mobile = o.FALLBACK_MOBILE, e.tablet = e.phone = null) : l ? (e.mobile = e.phone = o.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = o.FALLBACK_TABLET, e.phone = null)) : o.isTabletFallback(n) ? (e.mobile = e.tablet = o.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
          }
        }, o.mobileGrade = function(e) {
          var t = null !== e.mobile();
          return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2, "C")
        }, o.detectOS = function(e) {
          return o.findMatch(o.mobileDetectRules.oss0, e) || o.findMatch(o.mobileDetectRules.oss, e)
        }, o.getDeviceSmallerSide = function() {
          return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }, r.prototype = {
          constructor: r,
          mobile: function() {
            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
          },
          phone: function() {
            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
          },
          tablet: function() {
            return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
          },
          userAgent: function() {
            return this._cache.userAgent === t && (this._cache.userAgent = o.findMatch(o.mobileDetectRules.uas, this.ua)), this._cache.userAgent
          },
          userAgents: function() {
            return this._cache.userAgents === t && (this._cache.userAgents = o.findMatches(o.mobileDetectRules.uas, this.ua)), this._cache.userAgents
          },
          os: function() {
            return this._cache.os === t && (this._cache.os = o.detectOS(this.ua)), this._cache.os
          },
          version: function(e) {
            return o.getVersion(e, this.ua)
          },
          versionStr: function(e) {
            return o.getVersionStr(e, this.ua)
          },
          is: function(t) {
            return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(o.findMatches(o.mobileDetectRules.utils, this.ua), t)
          },
          match: function(e) {
            return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
          },
          isPhoneSized: function(e) {
            return r.isPhoneSized(e || this.maxPhoneWidth)
          },
          mobileGrade: function() {
            return this._cache.grade === t && (this._cache.grade = o.mobileGrade(this)), this._cache.grade
          }
        }, "undefined" != typeof window && window.screen ? r.isPhoneSized = function(e) {
          return e < 0 ? t : o.getDeviceSmallerSide() <= e
        } : r.isPhoneSized = function() {}, r._impl = o, r.version = "1.3.3 2016-07-31", r
    })
  }(function(e) {
    if ("undefined" != typeof module && module.exports) return function(e) {
      module.exports = e()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(e) {
      window.MobileDetect = e()
    };
    throw new Error("unknown environment")
  }()), ! function e(t, n, i) {
    function r(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(s, !0);
          if (o) return o(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var u = n[s] = {
          exports: {}
        };
        t[s][0].call(u.exports, function(e) {
          var n = t[s][1][e];
          return r(n ? n : e)
        }, u, u.exports, e, t, n, i)
      }
      return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
    return r
  }({
    1: [function(e, t, n) {
      "use strict";

      function i(e) {
        e.fn.perfectScrollbar = function(e) {
          return this.each(function() {
            if ("object" == typeof e || "undefined" == typeof e) {
              var t = e;
              o.get(this) || r.initialize(this, t)
            } else {
              var n = e;
              "update" === n ? r.update(this) : "destroy" === n && r.destroy(this)
            }
          })
        }
      }
      var r = e("../main"),
        o = e("../plugin/instances");
      if ("function" == typeof define && define.amd) define(["jquery"], i);
      else {
        var s = window.jQuery ? window.jQuery : window.$;
        "undefined" != typeof s && i(s)
      }
      t.exports = i
    }, {
      "../main": 7,
      "../plugin/instances": 18
    }],
    2: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        var n = e.className.split(" ");
        n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
      }

      function r(e, t) {
        var n = e.className.split(" "),
          i = n.indexOf(t);
        i >= 0 && n.splice(i, 1), e.className = n.join(" ")
      }
      n.add = function(e, t) {
        e.classList ? e.classList.add(t) : i(e, t)
      }, n.remove = function(e, t) {
        e.classList ? e.classList.remove(t) : r(e, t)
      }, n.list = function(e) {
        return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
      }
    }, {}],
    3: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        return window.getComputedStyle(e)[t]
      }

      function r(e, t, n) {
        return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
      }

      function o(e, t) {
        for (var n in t) {
          var i = t[n];
          "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
        }
        return e
      }
      var s = {};
      s.e = function(e, t) {
        var n = document.createElement(e);
        return n.className = t, n
      }, s.appendTo = function(e, t) {
        return t.appendChild(e), e
      }, s.css = function(e, t, n) {
        return "object" == typeof t ? o(e, t) : "undefined" == typeof n ? i(e, t) : r(e, t, n)
      }, s.matches = function(e, t) {
        return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
      }, s.remove = function(e) {
        "undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
      }, s.queryChildren = function(e, t) {
        return Array.prototype.filter.call(e.childNodes, function(e) {
          return s.matches(e, t)
        })
      }, t.exports = s
    }, {}],
    4: [function(e, t, n) {
      "use strict";
      var i = function(e) {
        this.element = e, this.events = {}
      };
      i.prototype.bind = function(e, t) {
        "undefined" == typeof this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
      }, i.prototype.unbind = function(e, t) {
        var n = "undefined" != typeof t;
        this.events[e] = this.events[e].filter(function(i) {
          return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
        }, this)
      }, i.prototype.unbindAll = function() {
        for (var e in this.events) this.unbind(e)
      };
      var r = function() {
        this.eventElements = []
      };
      r.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
          return t.element === e
        })[0];
        return "undefined" == typeof t && (t = new i(e), this.eventElements.push(t)), t
      }, r.prototype.bind = function(e, t, n) {
        this.eventElement(e).bind(t, n)
      }, r.prototype.unbind = function(e, t, n) {
        this.eventElement(e).unbind(t, n)
      }, r.prototype.unbindAll = function() {
        for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
      }, r.prototype.once = function(e, t, n) {
        var i = this.eventElement(e),
          r = function(e) {
            i.unbind(t, r), n(e)
          };
        i.bind(t, r)
      }, t.exports = r
    }, {}],
    5: [function(e, t, n) {
      "use strict";
      t.exports = function() {
        function e() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
      }()
    }, {}],
    6: [function(e, t, n) {
      "use strict";
      var i = e("./class"),
        r = e("./dom"),
        o = n.toInt = function(e) {
          return parseInt(e, 10) || 0
        },
        s = n.clone = function(e) {
          if (null === e) return null;
          if (e.constructor === Array) return e.map(s);
          if ("object" == typeof e) {
            var t = {};
            for (var n in e) t[n] = s(e[n]);
            return t
          }
          return e
        };
      n.extend = function(e, t) {
        var n = s(e);
        for (var i in t) n[i] = s(t[i]);
        return n
      }, n.isEditable = function(e) {
        return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
      }, n.removePsClasses = function(e) {
        for (var t = i.list(e), n = 0; n < t.length; n++) {
          var r = t[n];
          0 === r.indexOf("ps-") && i.remove(e, r)
        }
      }, n.outerWidth = function(e) {
        return o(r.css(e, "width")) + o(r.css(e, "paddingLeft")) + o(r.css(e, "paddingRight")) + o(r.css(e, "borderLeftWidth")) + o(r.css(e, "borderRightWidth"))
      }, n.startScrolling = function(e, t) {
        i.add(e, "ps-in-scrolling"), "undefined" != typeof t ? i.add(e, "ps-" + t) : (i.add(e, "ps-x"), i.add(e, "ps-y"))
      }, n.stopScrolling = function(e, t) {
        i.remove(e, "ps-in-scrolling"), "undefined" != typeof t ? i.remove(e, "ps-" + t) : (i.remove(e, "ps-x"), i.remove(e, "ps-y"))
      }, n.env = {
        isWebKit: "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        supportsIePointer: null !== window.navigator.msMaxTouchPoints
      }
    }, {
      "./class": 2,
      "./dom": 3
    }],
    7: [function(e, t, n) {
      "use strict";
      var i = e("./plugin/destroy"),
        r = e("./plugin/initialize"),
        o = e("./plugin/update");
      t.exports = {
        initialize: r,
        update: o,
        destroy: i
      }
    }, {
      "./plugin/destroy": 9,
      "./plugin/initialize": 17,
      "./plugin/update": 21
    }],
    8: [function(e, t, n) {
      "use strict";
      t.exports = {
        handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        stopPropagationOnClick: !0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipePropagation: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !1,
        wheelSpeed: 1,
        theme: "default"
      }
    }, {}],
    9: [function(e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/dom"),
        o = e("./instances");
      t.exports = function(e) {
        var t = o.get(e);
        t && (t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), r.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18
    }],
    10: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        function n(e) {
          return e.getBoundingClientRect()
        }
        var i = function(e) {
          e.stopPropagation()
        };
        t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function(i) {
          var o = r.toInt(t.scrollbarYHeight / 2),
            l = t.railYRatio * (i.pageY - window.pageYOffset - n(t.scrollbarYRail).top - o),
            c = t.railYRatio * (t.railYHeight - t.scrollbarYHeight),
            u = l / c;
          0 > u ? u = 0 : u > 1 && (u = 1), a(e, "top", (t.contentHeight - t.containerHeight) * u), s(e), i.stopPropagation()
        }), t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function(i) {
          var o = r.toInt(t.scrollbarXWidth / 2),
            l = t.railXRatio * (i.pageX - window.pageXOffset - n(t.scrollbarXRail).left - o),
            c = t.railXRatio * (t.railXWidth - t.scrollbarXWidth),
            u = l / c;
          0 > u ? u = 0 : u > 1 && (u = 1), a(e, "left", (t.contentWidth - t.containerWidth) * u - t.negativeScrollAdjustment), s(e), i.stopPropagation()
        })
      }
      var r = e("../../lib/helper"),
        o = e("../instances"),
        s = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        var t = o.get(e);
        i(e, t)
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    11: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n) {
          var r = i + n * t.railXRatio,
            s = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
          0 > r ? t.scrollbarXLeft = 0 : r > s ? t.scrollbarXLeft = s : t.scrollbarXLeft = r;
          var a = o.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
          c(e, "left", a)
        }
        var i = null,
          r = null,
          a = function(t) {
            n(t.pageX - r), l(e), t.stopPropagation(), t.preventDefault()
          },
          u = function() {
            o.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarX, "mousedown", function(n) {
          r = n.pageX, i = o.toInt(s.css(t.scrollbarX, "left")) * t.railXRatio, o.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
      }

      function r(e, t) {
        function n(n) {
          var r = i + n * t.railYRatio,
            s = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
          0 > r ? t.scrollbarYTop = 0 : r > s ? t.scrollbarYTop = s : t.scrollbarYTop = r;
          var a = o.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
          c(e, "top", a)
        }
        var i = null,
          r = null,
          a = function(t) {
            n(t.pageY - r), l(e), t.stopPropagation(), t.preventDefault()
          },
          u = function() {
            o.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarY, "mousedown", function(n) {
          r = n.pageY, i = o.toInt(s.css(t.scrollbarY, "top")) * t.railYRatio, o.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
      }
      var o = e("../../lib/helper"),
        s = e("../../lib/dom"),
        a = e("../instances"),
        l = e("../update-geometry"),
        c = e("../update-scroll");
      t.exports = function(e) {
        var t = a.get(e);
        i(e, t), r(e, t)
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    12: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n, i) {
          var r = e.scrollTop;
          if (0 === n) {
            if (!t.scrollbarYActive) return !1;
            if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && 0 > i) return !t.settings.wheelPropagation
          }
          var o = e.scrollLeft;
          if (0 === i) {
            if (!t.scrollbarXActive) return !1;
            if (0 === o && 0 > n || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
          }
          return !0
        }
        var i = !1;
        t.event.bind(e, "mouseenter", function() {
          i = !0
        }), t.event.bind(e, "mouseleave", function() {
          i = !1
        });
        var s = !1;
        t.event.bind(t.ownerDocument, "keydown", function(c) {
          if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
            var u = o.matches(t.scrollbarX, ":focus") || o.matches(t.scrollbarY, ":focus");
            if (i || u) {
              var d = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
              if (d) {
                if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                else
                  for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                if (r.isEditable(d)) return
              }
              var p = 0,
                f = 0;
              switch (c.which) {
                case 37:
                  p = -30;
                  break;
                case 38:
                  f = 30;
                  break;
                case 39:
                  p = 30;
                  break;
                case 40:
                  f = -30;
                  break;
                case 33:
                  f = 90;
                  break;
                case 32:
                  f = c.shiftKey ? 90 : -90;
                  break;
                case 34:
                  f = -90;
                  break;
                case 35:
                  f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                  break;
                case 36:
                  f = c.ctrlKey ? e.scrollTop : t.containerHeight;
                  break;
                default:
                  return
              }
              l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + p), a(e), s = n(p, f), s && c.preventDefault()
            }
          }
        })
      }
      var r = e("../../lib/helper"),
        o = e("../../lib/dom"),
        s = e("../instances"),
        a = e("../update-geometry"),
        l = e("../update-scroll");
      t.exports = function(e) {
        var t = s.get(e);
        i(e, t)
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    13: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n, i) {
          var r = e.scrollTop;
          if (0 === n) {
            if (!t.scrollbarYActive) return !1;
            if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && 0 > i) return !t.settings.wheelPropagation
          }
          var o = e.scrollLeft;
          if (0 === i) {
            if (!t.scrollbarXActive) return !1;
            if (0 === o && 0 > n || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
          }
          return !0
        }

        function i(e) {
          var t = e.deltaX,
            n = -1 * e.deltaY;
          return "undefined" != typeof t && "undefined" != typeof n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), [t, n]
        }

        function r(t, n) {
          var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
          if (i) {
            if ("TEXTAREA" !== i.tagName && !window.getComputedStyle(i).overflow.match(/(scroll|auto)/)) return !1;
            var r = i.scrollHeight - i.clientHeight;
            if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && 0 > n)) return !0;
            var o = i.scrollLeft - i.clientWidth;
            if (o > 0 && !(0 === i.scrollLeft && 0 > t || i.scrollLeft === o && t > 0)) return !0
          }
          return !1
        }

        function a(a) {
          var c = i(a),
            u = c[0],
            d = c[1];
          r(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? s(e, "top", e.scrollTop - d * t.settings.wheelSpeed) : s(e, "top", e.scrollTop + u * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? s(e, "left", e.scrollLeft + u * t.settings.wheelSpeed) : s(e, "left", e.scrollLeft - d * t.settings.wheelSpeed), l = !0) : (s(e, "top", e.scrollTop - d * t.settings.wheelSpeed), s(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)), o(e), l = l || n(u, d), l && (a.stopPropagation(), a.preventDefault()))
        }
        var l = !1;
        "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", a) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", a)
      }
      var r = e("../instances"),
        o = e("../update-geometry"),
        s = e("../update-scroll");
      t.exports = function(e) {
        var t = r.get(e);
        i(e, t)
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    14: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        t.event.bind(e, "scroll", function() {
          o(e)
        })
      }
      var r = e("../instances"),
        o = e("../update-geometry");
      t.exports = function(e) {
        var t = r.get(e);
        i(e, t)
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19
    }],
    15: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        function n() {
          var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
          return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
        }

        function i() {
          c || (c = setInterval(function() {
            return o.get(e) ? (a(e, "top", e.scrollTop + u.top), a(e, "left", e.scrollLeft + u.left), void s(e)) : void clearInterval(c)
          }, 50))
        }

        function l() {
          c && (clearInterval(c), c = null), r.stopScrolling(e)
        }
        var c = null,
          u = {
            top: 0,
            left: 0
          },
          d = !1;
        t.event.bind(t.ownerDocument, "selectionchange", function() {
          e.contains(n()) ? d = !0 : (d = !1, l())
        }), t.event.bind(window, "mouseup", function() {
          d && (d = !1, l())
        }), t.event.bind(window, "mousemove", function(t) {
          if (d) {
            var n = {
                x: t.pageX,
                y: t.pageY
              },
              o = {
                left: e.offsetLeft,
                right: e.offsetLeft + e.offsetWidth,
                top: e.offsetTop,
                bottom: e.offsetTop + e.offsetHeight
              };
            n.x < o.left + 3 ? (u.left = -5, r.startScrolling(e, "x")) : n.x > o.right - 3 ? (u.left = 5, r.startScrolling(e, "x")) : u.left = 0, n.y < o.top + 3 ? (o.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, r.startScrolling(e, "y")) : n.y > o.bottom - 3 ? (n.y - o.bottom + 3 < 5 ? u.top = 5 : u.top = 20, r.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
          }
        })
      }
      var r = e("../../lib/helper"),
        o = e("../instances"),
        s = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        var t = o.get(e);
        i(e, t)
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    16: [function(e, t, n) {
      "use strict";

      function i(e, t, n, i) {
        function r(n, i) {
          var r = e.scrollTop,
            o = e.scrollLeft,
            s = Math.abs(n),
            a = Math.abs(i);
          if (a > s) {
            if (0 > i && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r) return !t.settings.swipePropagation
          } else if (s > a && (0 > n && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o)) return !t.settings.swipePropagation;
          return !0
        }

        function l(t, n) {
          a(e, "top", e.scrollTop - n), a(e, "left", e.scrollLeft - t), s(e)
        }

        function c() {
          y = !0
        }

        function u() {
          y = !1
        }

        function d(e) {
          return e.targetTouches ? e.targetTouches[0] : e
        }

        function p(e) {
          return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
        }

        function f(e) {
          if (p(e)) {
            S = !0;
            var t = d(e);
            m.pageX = t.pageX, m.pageY = t.pageY, v = (new Date).getTime(), null !== T && clearInterval(T), e.stopPropagation()
          }
        }

        function h(e) {
          if (!S && t.settings.swipePropagation && f(e), !y && S && p(e)) {
            var n = d(e),
              i = {
                pageX: n.pageX,
                pageY: n.pageY
              },
              o = i.pageX - m.pageX,
              s = i.pageY - m.pageY;
            l(o, s), m = i;
            var a = (new Date).getTime(),
              c = a - v;
            c > 0 && (b.x = o / c, b.y = s / c, v = a), r(o, s) && (e.stopPropagation(), e.preventDefault())
          }
        }

        function g() {
          !y && S && (S = !1, clearInterval(T), T = setInterval(function() {
            return o.get(e) ? Math.abs(b.x) < .01 && Math.abs(b.y) < .01 ? void clearInterval(T) : (l(30 * b.x, 30 * b.y), b.x *= .8, void(b.y *= .8)) : void clearInterval(T)
          }, 10))
        }
        var m = {},
          v = 0,
          b = {},
          T = null,
          y = !1,
          S = !1;
        n && (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", g)), i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", g)))
      }
      var r = e("../../lib/helper"),
        o = e("../instances"),
        s = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        if (r.env.supportsTouch || r.env.supportsIePointer) {
          var t = o.get(e);
          i(e, t, r.env.supportsTouch, r.env.supportsIePointer)
        }
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    17: [function(e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/class"),
        o = e("./instances"),
        s = e("./update-geometry"),
        a = {
          "click-rail": e("./handler/click-rail"),
          "drag-scrollbar": e("./handler/drag-scrollbar"),
          keyboard: e("./handler/keyboard"),
          wheel: e("./handler/mouse-wheel"),
          touch: e("./handler/touch"),
          selection: e("./handler/selection")
        },
        l = e("./handler/native-scroll");
      t.exports = function(e, t) {
        t = "object" == typeof t ? t : {}, r.add(e, "ps-container");
        var n = o.add(e);
        n.settings = i.extend(n.settings, t), r.add(e, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(t) {
          a[t](e)
        }), l(e), s(e)
      }
    }, {
      "../lib/class": 2,
      "../lib/helper": 6,
      "./handler/click-rail": 10,
      "./handler/drag-scrollbar": 11,
      "./handler/keyboard": 12,
      "./handler/mouse-wheel": 13,
      "./handler/native-scroll": 14,
      "./handler/selection": 15,
      "./handler/touch": 16,
      "./instances": 18,
      "./update-geometry": 19
    }],
    18: [function(e, t, n) {
      "use strict";

      function i(e) {
        function t() {
          l.add(e, "ps-focus")
        }

        function n() {
          l.remove(e, "ps-focus")
        }
        var i = this;
        i.settings = a.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(e, "direction"), i.isNegativeScroll = function() {
          var t = e.scrollLeft,
            n = null;
          return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
        }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new d, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), e), i.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = a.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : a.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = a.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = a.toInt(u.css(i.scrollbarXRail, "marginLeft")) + a.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), e), i.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = a.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : a.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? a.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = a.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = a.toInt(u.css(i.scrollbarYRail, "marginTop")) + a.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
      }

      function r(e) {
        return e.getAttribute("data-ps-id")
      }

      function o(e, t) {
        e.setAttribute("data-ps-id", t)
      }

      function s(e) {
        e.removeAttribute("data-ps-id")
      }
      var a = e("../lib/helper"),
        l = e("../lib/class"),
        c = e("./default-setting"),
        u = e("../lib/dom"),
        d = e("../lib/event-manager"),
        p = e("../lib/guid"),
        f = {};
      n.add = function(e) {
        var t = p();
        return o(e, t), f[t] = new i(e), f[t]
      }, n.remove = function(e) {
        delete f[r(e)], s(e)
      }, n.get = function(e) {
        return f[r(e)]
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/event-manager": 4,
      "../lib/guid": 5,
      "../lib/helper": 6,
      "./default-setting": 8
    }],
    19: [function(e, t, n) {
      "use strict";

      function i(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
      }

      function r(e, t) {
        var n = {
          width: t.railXWidth
        };
        t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, n);
        var i = {
          top: e.scrollTop,
          height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, i),
          a.css(t.scrollbarX, {
            left: t.scrollbarXLeft,
            width: t.scrollbarXWidth - t.railBorderXWidth
          }), a.css(t.scrollbarY, {
            top: t.scrollbarYTop,
            height: t.scrollbarYHeight - t.railBorderYWidth
          })
      }
      var o = e("../lib/helper"),
        s = e("../lib/class"),
        a = e("../lib/dom"),
        l = e("./instances"),
        c = e("./update-scroll");
      t.exports = function(e) {
        var t = l.get(e);
        t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
        var n;
        e.contains(t.scrollbarXRail) || (n = a.queryChildren(e, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (n = a.queryChildren(e, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, o.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = o.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, o.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = o.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), r(e, t), t.scrollbarXActive ? s.add(e, "ps-active-x") : (s.remove(e, "ps-active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? s.add(e, "ps-active-y") : (s.remove(e, "ps-active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-scroll": 20
    }],
    20: [function(e, t, n) {
      "use strict";
      var i, r, o = e("./instances"),
        s = document.createEvent("Event"),
        a = document.createEvent("Event"),
        l = document.createEvent("Event"),
        c = document.createEvent("Event"),
        u = document.createEvent("Event"),
        d = document.createEvent("Event"),
        p = document.createEvent("Event"),
        f = document.createEvent("Event"),
        h = document.createEvent("Event"),
        g = document.createEvent("Event");
      s.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), l.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), g.initEvent("ps-y-reach-end", !0, !0), t.exports = function(e, t, n) {
        if ("undefined" == typeof e) throw "You must provide an element to the update-scroll function";
        if ("undefined" == typeof t) throw "You must provide an axis to the update-scroll function";
        if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
        "top" === t && 0 >= n && (e.scrollTop = n = 0, e.dispatchEvent(h)), "left" === t && 0 >= n && (e.scrollLeft = n = 0, e.dispatchEvent(p));
        var m = o.get(e);
        "top" === t && n >= m.contentHeight - m.containerHeight && (n = m.contentHeight - m.containerHeight, n - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(g)), "left" === t && n >= m.contentWidth - m.containerWidth && (n = m.contentWidth - m.containerWidth, n - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(f)), i || (i = e.scrollTop), r || (r = e.scrollLeft), "top" === t && i > n && e.dispatchEvent(s), "top" === t && n > i && e.dispatchEvent(a), "left" === t && r > n && e.dispatchEvent(l), "left" === t && n > r && e.dispatchEvent(c), "top" === t && (e.scrollTop = i = n, e.dispatchEvent(u)), "left" === t && (e.scrollLeft = r = n, e.dispatchEvent(d))
      }
    }, {
      "./instances": 18
    }],
    21: [function(e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/dom"),
        o = e("./instances"),
        s = e("./update-geometry"),
        a = e("./update-scroll");
      t.exports = function(e) {
        var t = o.get(e);
        t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")), r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), s(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), r.css(t.scrollbarXRail, "display", ""), r.css(t.scrollbarYRail, "display", ""))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-geometry": 19,
      "./update-scroll": 20
    }]
  }, {}, [1]), function(e, t, n, i) {
    var r = e.fn.peity = function(t, n) {
        return l && this.each(function() {
          var i = e(this),
            s = i.data("_peity");
          s ? (t && (s.type = t), e.extend(s.opts, n)) : (s = new o(i, t, e.extend({}, r.defaults[t], i.data("peity"), n)), i.change(function() {
            s.draw()
          }).data("_peity", s)), s.draw()
        }), this
      },
      o = function(e, t, n) {
        this.$el = e, this.type = t, this.opts = n
      },
      s = o.prototype,
      a = s.svgElement = function(n, i) {
        return e(t.createElementNS("http://www.w3.org/2000/svg", n)).attr(i)
      },
      l = "createElementNS" in t && a("svg", {})[0].createSVGRect;
    s.draw = function() {
      var e = this.opts;
      r.graphers[this.type].call(this, e), e.after && e.after.call(this, e)
    }, s.fill = function() {
      var t = this.opts.fill;
      return e.isFunction(t) ? t : function(e, n) {
        return t[n % t.length]
      }
    }, s.prepare = function(e, t) {
      return this.$svg || this.$el.hide().after(this.$svg = a("svg", {
        "class": "peity"
      })), this.$svg.empty().data("peity", this).attr({
        height: t,
        width: e
      })
    }, s.values = function() {
      return e.map(this.$el.text().split(this.opts.delimiter), function(e) {
        return parseFloat(e)
      })
    }, r.defaults = {}, r.graphers = {}, r.register = function(e, t, n) {
      this.defaults[e] = t, this.graphers[e] = n
    }, r.register("pie", {
      fill: ["#ff9900", "#fff4dd", "#ffc66e"],
      radius: 8
    }, function(t) {
      if (!t.delimiter) {
        var i = this.$el.text().match(/[^0-9\.]/);
        t.delimiter = i ? i[0] : ","
      }
      var r = e.map(this.values(), function(e) {
        return e > 0 ? e : 0
      });
      if ("/" == t.delimiter) {
        var o = r[0],
          s = r[1];
        r = [o, n.max(0, s - o)]
      }
      for (var l = 0, c = r.length, u = 0; l < c; l++) u += r[l];
      u || (c = 2, u = 1, r = [0, 1]);
      var d = 2 * t.radius,
        p = this.prepare(t.width || d, t.height || d),
        f = p.width(),
        h = p.height(),
        g = f / 2,
        m = h / 2,
        v = n.min(g, m),
        b = t.innerRadius;
      "donut" != this.type || b || (b = .5 * v);
      var T = n.PI,
        y = this.fill(),
        S = this.scale = function(e, t) {
          var i = e / u * T * 2 - T / 2;
          return [t * n.cos(i) + g, t * n.sin(i) + m]
        },
        w = 0;
      for (l = 0; l < c; l++) {
        var P, C = r[l],
          A = C / u;
        if (0 != A) {
          if (1 == A)
            if (b) {
              var x = g - .01,
                E = m - v,
                M = m - b;
              P = a("path", {
                d: ["M", g, E, "A", v, v, 0, 1, 1, x, E, "L", x, M, "A", b, b, 0, 1, 0, g, M].join(" ")
              })
            } else P = a("circle", {
              cx: g,
              cy: m,
              r: v
            });
          else {
            var k = w + C,
              I = ["M"].concat(S(w, v), "A", v, v, 0, A > .5 ? 1 : 0, 1, S(k, v), "L");
            b ? I = I.concat(S(k, b), "A", b, b, 0, A > .5 ? 1 : 0, 0, S(w, b)) : I.push(g, m), w += C, P = a("path", {
              d: I.join(" ")
            })
          }
          P.attr("fill", y.call(this, C, l, r)), p.append(P)
        }
      }
    }), r.register("donut", e.extend(!0, {}, r.defaults.pie), function(e) {
      r.graphers.pie.call(this, e)
    }), r.register("line", {
      delimiter: ",",
      fill: "#c6d9fd",
      height: 16,
      min: 0,
      stroke: "#4d89f9",
      strokeWidth: 1,
      width: 32
    }, function(e) {
      var t = this.values();
      1 == t.length && t.push(t[0]);
      for (var r = n.max.apply(n, e.max == i ? t : t.concat(e.max)), o = n.min.apply(n, e.min == i ? t : t.concat(e.min)), s = this.prepare(e.width, e.height), l = e.strokeWidth, c = s.width(), u = s.height() - l, d = r - o, p = this.x = function(e) {
          return e * (c / (t.length - 1))
        }, f = this.y = function(e) {
          var t = u;
          return d && (t -= (e - o) / d * u), t + l / 2
        }, h = f(n.max(o, 0)), g = [0, h], m = 0; m < t.length; m++) g.push(p(m), f(t[m]));
      g.push(c, h), e.fill && s.append(a("polygon", {
        fill: e.fill,
        points: g.join(" ")
      })), l && s.append(a("polyline", {
        fill: "none",
        points: g.slice(2, g.length - 2).join(" "),
        stroke: e.stroke,
        "stroke-width": l,
        "stroke-linecap": "square"
      }))
    }), r.register("bar", {
      delimiter: ",",
      fill: ["#4D89F9"],
      height: 16,
      min: 0,
      padding: .1,
      width: 32
    }, function(e) {
      for (var t = this.values(), r = n.max.apply(n, e.max == i ? t : t.concat(e.max)), o = n.min.apply(n, e.min == i ? t : t.concat(e.min)), s = this.prepare(e.width, e.height), l = s.width(), c = s.height(), u = r - o, d = e.padding, p = this.fill(), f = this.x = function(e) {
          return e * l / t.length
        }, h = this.y = function(e) {
          return c - (u ? (e - o) / u * c : 1)
        }, g = 0; g < t.length; g++) {
        var m, v = f(g + d),
          b = f(g + 1 - d) - v,
          T = t[g],
          y = h(T),
          S = y,
          w = y;
        u ? T < 0 ? S = h(n.min(r, 0)) : w = h(n.max(o, 0)) : m = 1, m = w - S, 0 == m && (m = 1, r > 0 && u && S--), s.append(a("rect", {
          fill: p.call(this, T, g, t),
          x: v,
          y: S,
          width: b,
          height: m
        }))
      }
    })
  }(jQuery, document, Math), function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
  }("undefined" != typeof window ? window : this, function() {
    "use strict";

    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
      if (e && t) {
        var n = this._events = this._events || {},
          i = n[e] = n[e] || [];
        return i.indexOf(t) == -1 && i.push(t), this
      }
    }, t.once = function(e, t) {
      if (e && t) {
        this.on(e, t);
        var n = this._onceEvents = this._onceEvents || {},
          i = n[e] = n[e] || {};
        return i[t] = !0, this
      }
    }, t.off = function(e, t) {
      var n = this._events && this._events[e];
      if (n && n.length) {
        var i = n.indexOf(t);
        return i != -1 && n.splice(i, 1), this
      }
    }, t.emitEvent = function(e, t) {
      var n = this._events && this._events[e];
      if (n && n.length) {
        var i = 0,
          r = n[i];
        t = t || [];
        for (var o = this._onceEvents && this._onceEvents[e]; r;) {
          var s = o && o[r];
          s && (this.off(e, r), delete o[r]), r.apply(this, t), i += s ? 0 : 1, r = n[i]
        }
        return this
      }
    }, e
  }), function() {
    function e(t, n, i) {
      var r = e.resolve(t);
      if (null == r) {
        i = i || t, n = n || "root";
        var o = new Error('Failed to require "' + i + '" from "' + n + '"');
        throw o.path = i, o.parent = n, o.require = !0, o
      }
      var s = e.modules[r];
      if (!s._resolving && !s.exports) {
        var a = {};
        a.exports = {}, a.client = a.component = !0, s._resolving = !0, s.call(this, a.exports, e.relative(r), a), delete s._resolving, s.exports = a.exports
      }
      return s.exports
    }
    e.modules = {}, e.aliases = {}, e.resolve = function(t) {
      "/" === t.charAt(0) && (t = t.slice(1));
      for (var n = [t, t + ".js", t + ".json", t + "/index.js", t + "/index.json"], i = 0; i < n.length; i++) {
        var t = n[i];
        if (e.modules.hasOwnProperty(t)) return t;
        if (e.aliases.hasOwnProperty(t)) return e.aliases[t]
      }
    }, e.normalize = function(e, t) {
      var n = [];
      if ("." != t.charAt(0)) return t;
      e = e.split("/"), t = t.split("/");
      for (var i = 0; i < t.length; ++i) ".." == t[i] ? e.pop() : "." != t[i] && "" != t[i] && n.push(t[i]);
      return e.concat(n).join("/")
    }, e.register = function(t, n) {
      e.modules[t] = n
    }, e.alias = function(t, n) {
      if (!e.modules.hasOwnProperty(t)) throw new Error('Failed to alias "' + t + '", it does not exist');
      e.aliases[n] = t
    }, e.relative = function(t) {
      function n(e, t) {
        for (var n = e.length; n--;)
          if (e[n] === t) return n;
        return -1
      }

      function i(n) {
        var r = i.resolve(n);
        return e(r, t, n)
      }
      var r = e.normalize(t, "..");
      return i.resolve = function(i) {
        var o = i.charAt(0);
        if ("/" == o) return i.slice(1);
        if ("." == o) return e.normalize(r, i);
        var s = t.split("/"),
          a = n(s, "deps") + 1;
        return a || (a = 0), i = s.slice(0, a + 1).join("/") + "/deps/" + i
      }, i.exists = function(t) {
        return e.modules.hasOwnProperty(i.resolve(t))
      }, i
    }, e.register("transitionize/transitionize.js", function(e, t, n) {
      function i(e, t) {
        return this instanceof i ? (this.element = e, this.props = t || {}, void this.init()) : new i(e, t)
      }
      n.exports = i, i.prototype.isSafari = function() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
      }, i.prototype.init = function() {
        var e = [];
        for (var t in this.props) e.push(t + " " + this.props[t]);
        this.element.style.transition = e.join(", "), this.isSafari() && (this.element.style.webkitTransition = e.join(", "))
      }
    }), e.alias("transitionize/transitionize.js", "transitionize/index.js"), "object" == typeof exports ? module.exports = e("transitionize") : "function" == typeof define && define.amd ? define(function() {
      return e("transitionize")
    }) : this.Transitionize = e("transitionize")
  }(), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;
      case "input":
        if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
        break;
      case "label":
      case "video":
        return !0
    }
    return /\bneedsclick\b/.test(e.className)
  }, FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !this.deviceIsAndroid;
      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className)
    }
  }, FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var n, i;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
  }, FastClick.prototype.determineEventType = function(e) {
    "use strict";
    return this.deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
  }, FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    this.deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
  }, FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, n;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
      n = e;
      do {
        if (n.scrollHeight > n.offsetHeight) {
          t = n, e.fastClickScrollParent = n;
          break
        }
        n = n.parentElement
      } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
  }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
  }, FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n, i;
    if (e.targetTouches.length > 1) return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], this.deviceIsIOS) {
      if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
      if (!this.deviceIsIOS4) {
        if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
      }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
  }, FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0],
      n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
  }, FastClick.prototype.onTouchMove = function(e) {
    "use strict";
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
  }, FastClick.prototype.findControl = function(e) {
    "use strict";
    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
  }, FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, n, i, r, o, s = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], s = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || s, s.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = s.tagName.toLowerCase(), "label" === i) {
      if (t = this.findControl(s)) {
        if (this.focus(s), this.deviceIsAndroid) return !1;
        s = t
      }
    } else if (this.needsFocus(s)) return e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(s), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
    return !(!this.deviceIsIOS || this.deviceIsIOS4 || (r = s.fastClickScrollParent, !r || r.fastClickLastScrollTop === r.scrollTop)) || (this.needsClick(s) || (e.preventDefault(), this.sendClick(s, e)), !1)
  }, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
  }, FastClick.prototype.onMouse = function(e) {
    "use strict";
    return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
  }, FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
  }, FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
  }, FastClick.notNeeded = function(e) {
    "use strict";
    var t, n;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
      if (!FastClick.prototype.deviceIsAndroid) return !0;
      if (t = document.querySelector("meta[name=viewport]")) {
        if (t.content.indexOf("user-scalable=no") !== -1) return !0;
        if (n > 31 && window.innerWidth <= window.screen.width) return !0
      }
    }
    return "none" === e.style.msTouchAction
  }, FastClick.attach = function(e) {
    "use strict";
    return new FastClick(e)
  }, "undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick
  }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
  "use strict";
  var t = e.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(e) {
  "use strict";

  function t() {
    var e = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var n in t)
      if (void 0 !== e.style[n]) return {
        end: t[n]
      };
    return !1
  }
  e.fn.emulateTransitionEnd = function(t) {
    var n = !1,
      i = this;
    e(this).one("bsTransitionEnd", function() {
      n = !0
    });
    var r = function() {
      n || e(i).trigger(e.support.transition.end)
    };
    return setTimeout(r, t), this
  }, e(function() {
    e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        r = n.data("bs.alert");
      r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
    })
  }
  var n = '[data-dismiss="alert"]',
    i = function(t) {
      e(t).on("click", n, this.close)
    };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
    function n() {
      s.detach().trigger("closed.bs.alert").remove()
    }
    var r = e(this),
      o = r.attr("data-target");
    o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
    var s = e("#" === o ? [] : o);
    t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  };
  var r = e.fn.alert;
  e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
    return e.fn.alert = r, this
  }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.button"),
        o = "object" == typeof t && t;
      r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
    })
  }
  var n = function(t, i) {
    this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
  };
  n.VERSION = "3.3.7", n.DEFAULTS = {
    loadingText: "loading..."
  }, n.prototype.setState = function(t) {
    var n = "disabled",
      i = this.$element,
      r = i.is("input") ? "val" : "html",
      o = i.data();
    t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function() {
      i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
    }, this), 0)
  }, n.prototype.toggle = function() {
    var e = !0,
      t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var i = e.fn.button;
  e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
    return e.fn.button = i, this
  }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = e(n.target).closest(".btn");
    t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.carousel"),
        o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
        s = "string" == typeof t ? t : o.slide;
      r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
    })
  }
  var n = function(t, n) {
    this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, n.prototype.keydown = function(e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
      switch (e.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      e.preventDefault()
    }
  }, n.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
  }, n.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
  }, n.prototype.getItemForDirection = function(e, t) {
    var n = this.getItemIndex(t),
      i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
    if (i && !this.options.wrap) return t;
    var r = "prev" == e ? -1 : 1,
      o = (n + r) % this.$items.length;
    return this.$items.eq(o)
  }, n.prototype.to = function(e) {
    var t = this,
      n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      t.to(e)
    }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
  }, n.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, n.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, n.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, n.prototype.slide = function(t, i) {
    var r = this.$element.find(".item.active"),
      o = i || this.getItemForDirection(t, r),
      s = this.interval,
      a = "next" == t ? "left" : "right",
      l = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var c = o[0],
      u = e.Event("slide.bs.carousel", {
        relatedTarget: c,
        direction: a
      });
    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
      if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var d = e(this.$indicators.children()[this.getItemIndex(o)]);
        d && d.addClass("active")
      }
      var p = e.Event("slid.bs.carousel", {
        relatedTarget: c,
        direction: a
      });
      return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
        o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(p)
        }, 0)
      }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
    }
  };
  var i = e.fn.carousel;
  e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
    return e.fn.carousel = i, this
  };
  var r = function(n) {
    var i, r = e(this),
      o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (o.hasClass("carousel")) {
      var s = e.extend({}, o.data(), r.data()),
        a = r.attr("data-slide-to");
      a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
    }
  };
  e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
      var n = e(this);
      t.call(n, n.data())
    })
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return e(i)
  }

  function n(t) {
    return this.each(function() {
      var n = e(this),
        r = n.data("bs.collapse"),
        o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
      !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
    })
  }
  var i = function(t, n) {
    this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
  }, i.prototype.dimension = function() {
    var e = this.$element.hasClass("width");
    return e ? "width" : "height"
  }, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
        var o = e.Event("show.bs.collapse");
        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
          r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
          var s = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var a = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!e.support.transition) return a.call(this);
          var l = e.camelCase(["scroll", s].join("-"));
          this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
        }
      }
    }
  }, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = e.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var n = this.dimension();
        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var r = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
      }
    }
  }, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, i.prototype.getParent = function() {
    return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
      var r = e(i);
      this.addAriaAndCollapsedClass(t(r), r)
    }, this)).end()
  }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var r = e.fn.collapse;
  e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
    return e.fn.collapse = r, this
  }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var r = e(this);
    r.attr("data-target") || i.preventDefault();
    var o = t(r),
      s = o.data("bs.collapse"),
      a = s ? "toggle" : r.data();
    n.call(o, a)
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    var n = t.attr("data-target");
    n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && e(n);
    return i && i.length ? i : t.parent()
  }

  function n(n) {
    n && 3 === n.which || (e(r).remove(), e(o).each(function() {
      var i = e(this),
        r = t(i),
        o = {
          relatedTarget: this
        };
      r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
    }))
  }

  function i(t) {
    return this.each(function() {
      var n = e(this),
        i = n.data("bs.dropdown");
      i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
    })
  }
  var r = ".dropdown-backdrop",
    o = '[data-toggle="dropdown"]',
    s = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
    };
  s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
    var r = e(this);
    if (!r.is(".disabled, :disabled")) {
      var o = t(r),
        s = o.hasClass("open");
      if (n(), !s) {
        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
        var a = {
          relatedTarget: this
        };
        if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
        r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
      }
      return !1
    }
  }, s.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
      var i = e(this);
      if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
        var r = t(i),
          s = r.hasClass("open");
        if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
        var a = " li:not(.disabled):visible a",
          l = r.find(".dropdown-menu" + a);
        if (l.length) {
          var c = l.index(n.target);
          38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
        }
      }
    }
  };
  var a = e.fn.dropdown;
  e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = a, this
  }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
  }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(e) {
  "use strict";

  function t(t, i) {
    return this.each(function() {
      var r = e(this),
        o = r.data("bs.modal"),
        s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
      o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
    })
  }
  var n = function(t, n) {
    this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
      }, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, n.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
  }, n.prototype.show = function(t) {
    var i = this,
      r = e.Event("show.bs.modal", {
        relatedTarget: t
      });
    this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      i.$element.one("mouseup.dismiss.bs.modal", function(t) {
        e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var r = e.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
      var o = e.Event("shown.bs.modal", {
        relatedTarget: t
      });
      r ? i.$dialog.one("bsTransitionEnd", function() {
        i.$element.trigger("focus").trigger(o)
      }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
    }))
  }, n.prototype.hide = function(t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }, n.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
      document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
  }, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
      27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, n.prototype.resize = function() {
    this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
  }, n.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
      e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
  }, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, n.prototype.backdrop = function(t) {
    var i = this,
      r = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var o = e.support.transition && r;
      if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var s = function() {
        i.removeBackdrop(), t && t()
      };
      e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
    } else t && t()
  }, n.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, n.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
  }, n.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, n.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
      var t = document.documentElement.getBoundingClientRect();
      e = t.right - Math.abs(t.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
  }, n.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
  }, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, n.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
  };
  var i = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
    return e.fn.modal = i, this
  }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = e(this),
      r = i.attr("href"),
      o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
      s = o.data("bs.modal") ? "toggle" : e.extend({
        remote: !/#/.test(r) && r
      }, o.data(), i.data());
    i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
      e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
        i.is(":visible") && i.trigger("focus")
      })
    }), t.call(o, s, this)
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.tooltip"),
        o = "object" == typeof t && t;
      !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
    })
  }
  var n = function(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, n.prototype.init = function(t, n, i) {
    if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
      var s = r[o];
      if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
      else if ("manual" != s) {
        var a = "hover" == s ? "mouseenter" : "focusin",
          l = "hover" == s ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.getOptions = function(t) {
    return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, n.prototype.getDelegateOptions = function() {
    var t = {},
      n = this.getDefaults();
    return this._options && e.each(this._options, function(e, i) {
      n[e] != i && (t[e] = i)
    }), t
  }, n.prototype.enter = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
      "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show())
  }, n.prototype.isInStateTrue = function() {
    for (var e in this.inState)
      if (this.inState[e]) return !0;
    return !1
  }, n.prototype.leave = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
      "out" == n.hoverState && n.hide()
    }, n.options.delay.hide)) : n.hide()
  }, n.prototype.show = function() {
    var t = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !i) return;
      var r = this,
        o = this.tip(),
        s = this.getUID(this.type);
      this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
      var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        c = l.test(a);
      c && (a = a.replace(l, "") || "top"), o.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var u = this.getPosition(),
        d = o[0].offsetWidth,
        p = o[0].offsetHeight;
      if (c) {
        var f = a,
          h = this.getPosition(this.$viewport);
        a = "bottom" == a && u.bottom + p > h.bottom ? "top" : "top" == a && u.top - p < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a, o.removeClass(f).addClass(a)
      }
      var g = this.getCalculatedOffset(a, u, d, p);
      this.applyPlacement(g, a);
      var m = function() {
        var e = r.hoverState;
        r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
      };
      e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
    }
  }, n.prototype.applyPlacement = function(t, n) {
    var i = this.tip(),
      r = i[0].offsetWidth,
      o = i[0].offsetHeight,
      s = parseInt(i.css("margin-top"), 10),
      a = parseInt(i.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
      using: function(e) {
        i.css({
          top: Math.round(e.top),
          left: Math.round(e.left)
        })
      }
    }, t), 0), i.addClass("in");
    var l = i[0].offsetWidth,
      c = i[0].offsetHeight;
    "top" == n && c != o && (t.top = t.top + o - c);
    var u = this.getViewportAdjustedDelta(n, t, l, c);
    u.left ? t.left += u.left : t.top += u.top;
    var d = /top|bottom/.test(n),
      p = d ? 2 * u.left - r + l : 2 * u.top - o + c,
      f = d ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(p, i[0][f], d)
  }, n.prototype.replaceArrow = function(e, t, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
  }, n.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
  }, n.prototype.hide = function(t) {
    function i() {
      "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
    }
    var r = this,
      o = e(this.$tip),
      s = e.Event("hide.bs." + this.type);
    if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
  }, n.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
  }, n.prototype.hasContent = function() {
    return this.getTitle()
  }, n.prototype.getPosition = function(t) {
    t = t || this.$element;
    var n = t[0],
      i = "BODY" == n.tagName,
      r = n.getBoundingClientRect();
    null == r.width && (r = e.extend({}, r, {
      width: r.right - r.left,
      height: r.bottom - r.top
    }));
    var o = window.SVGElement && n instanceof window.SVGElement,
      s = i ? {
        top: 0,
        left: 0
      } : o ? null : t.offset(),
      a = {
        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      l = i ? {
        width: e(window).width(),
        height: e(window).height()
      } : null;
    return e.extend({}, r, a, l, s)
  }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
    return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - n / 2
    } : "top" == e ? {
      top: t.top - i,
      left: t.left + t.width / 2 - n / 2
    } : "left" == e ? {
      top: t.top + t.height / 2 - i / 2,
      left: t.left - n
    } : {
      top: t.top + t.height / 2 - i / 2,
      left: t.left + t.width
    }
  }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
    var r = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return r;
    var o = this.options.viewport && this.options.viewport.padding || 0,
      s = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
      var a = t.top - o - s.scroll,
        l = t.top + o - s.scroll + i;
      a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
    } else {
      var c = t.left - o,
        u = t.left + o + n;
      c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
    }
    return r
  }, n.prototype.getTitle = function() {
    var e, t = this.$element,
      n = this.options;
    return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
  }, n.prototype.getUID = function(e) {
    do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
    return e
  }, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, n.prototype.enable = function() {
    this.enabled = !0
  }, n.prototype.disable = function() {
    this.enabled = !1
  }, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, n.prototype.toggle = function(t) {
    var n = this;
    t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
  }, n.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
  };
  var i = e.fn.tooltip;
  e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = i, this
  }
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.popover"),
        o = "object" == typeof t && t;
      !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
    })
  }
  var n = function(e, t) {
    this.init("popover", e, t)
  };
  if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
  n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle(),
      n = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
  }, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, n.prototype.getContent = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var i = e.fn.popover;
  e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
    return e.fn.popover = i, this
  }
}(jQuery), + function(e) {
  "use strict";

  function t(n, i) {
    this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
  }

  function n(n) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.scrollspy"),
        o = "object" == typeof n && n;
      r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
    })
  }
  t.VERSION = "3.3.7", t.DEFAULTS = {
    offset: 10
  }, t.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, t.prototype.refresh = function() {
    var t = this,
      n = "offset",
      i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var t = e(this),
        r = t.data("target") || t.attr("href"),
        o = /^#./.test(r) && e(r);
      return o && o.length && o.is(":visible") && [
        [o[n]().top + i, r]
      ] || null
    }).sort(function(e, t) {
      return e[0] - t[0]
    }).each(function() {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, t.prototype.process = function() {
    var e, t = this.$scrollElement.scrollTop() + this.options.offset,
      n = this.getScrollHeight(),
      i = this.options.offset + n - this.$scrollElement.height(),
      r = this.offsets,
      o = this.targets,
      s = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = o[o.length - 1]) && this.activate(e);
    if (s && t < r[0]) return this.activeTarget = null, this.clear();
    for (e = r.length; e--;) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
  }, t.prototype.activate = function(t) {
    this.activeTarget = t, this.clear();
    var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      i = e(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
  }, t.prototype.clear = function() {
    e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var i = e.fn.scrollspy;
  e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = i, this
  }, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
      var t = e(this);
      n.call(t, t.data())
    })
  })
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.tab");
      r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
    })
  }
  var n = function(t) {
    this.element = e(t)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var t = this.element,
      n = t.closest("ul:not(.dropdown-menu)"),
      i = t.data("target");
    if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var r = n.find(".active:last a"),
        o = e.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        s = e.Event("show.bs.tab", {
          relatedTarget: r[0]
        });
      if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
        var a = e(i);
        this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
          r.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: r[0]
          })
        })
      }
    }
  }, n.prototype.activate = function(t, i, r) {
    function o() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
    }
    var s = i.find("> .active"),
      a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
    s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
  };
  var i = e.fn.tab;
  e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
    return e.fn.tab = i, this
  };
  var r = function(n) {
    n.preventDefault(), t.call(e(this), "show")
  };
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        r = i.data("bs.affix"),
        o = "object" == typeof t && t;
      r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
    })
  }
  var n = function(t, i) {
    this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
  }, n.prototype.getState = function(e, t, n, i) {
    var r = this.$target.scrollTop(),
      o = this.$element.offset(),
      s = this.$target.height();
    if (null != n && "top" == this.affixed) return r < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
    var a = null == this.affixed,
      l = a ? r : o.top,
      c = a ? s : t;
    return null != n && r <= n ? "top" : null != i && l + c >= e - i && "bottom"
  }, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
      t = this.$element.offset();
    return this.pinnedOffset = t.top - e
  }, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
  }, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        i = this.options.offset,
        r = i.top,
        o = i.bottom,
        s = Math.max(e(document).height(), e(document.body).height());
      "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
      var a = this.getState(s, t, r, o);
      if (this.affixed != a) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (a ? "-" + a : ""),
          c = e.Event(l + ".bs.affix");
        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == a && this.$element.offset({
        top: s - t - o
      })
    }
  };
  var i = e.fn.affix;
  e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
    return e.fn.affix = i, this
  }, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var n = e(this),
        i = n.data();
      i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
    })
  })
}(jQuery),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
    return t(e, n)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
  "use strict";

  function n(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  }

  function i(e) {
    var t = [];
    if (Array.isArray(e)) t = e;
    else if ("number" == typeof e.length)
      for (var n = 0; n < e.length; n++) t.push(e[n]);
    else t.push(e);
    return t
  }

  function r(e, t, o) {
    return this instanceof r ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = n({}, this.options), "function" == typeof t ? o = t : n(this.options, t), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
      this.check()
    }.bind(this))) : new r(e, t, o)
  }

  function o(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }
  var a = e.jQuery,
    l = e.console;
  r.prototype = Object.create(t.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, r.prototype.addElementImages = function(e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && c[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var r = n[i];
        this.addImage(r)
      }
      if ("string" == typeof this.options.background) {
        var o = e.querySelectorAll(this.options.background);
        for (i = 0; i < o.length; i++) {
          var s = o[i];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var c = {
    1: !0,
    9: !0,
    11: !0
  };
  return r.prototype.addElementBackgroundImages = function(e) {
    var t = getComputedStyle(e);
    if (t)
      for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
        var r = i && i[2];
        r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
      }
  }, r.prototype.addImage = function(e) {
    var t = new o(e);
    this.images.push(t)
  }, r.prototype.addBackground = function(e, t) {
    var n = new s(e, t);
    this.images.push(n)
  }, r.prototype.check = function() {
    function e(e, n, i) {
      setTimeout(function() {
        t.progress(e, n, i)
      })
    }
    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
      t.once("progress", e), t.check()
    }) : void this.complete()
  }, r.prototype.progress = function(e, t, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, e, t)
  }, r.prototype.complete = function() {
    var e = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, o.prototype = Object.create(t.prototype), o.prototype.check = function() {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, o.prototype.getIsImageComplete = function() {
    return this.img.complete && void 0 !== this.img.naturalWidth
  }, o.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, o.prototype.handleEvent = function(e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, o.prototype.onload = function() {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, o.prototype.onerror = function() {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, o.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(o.prototype), s.prototype.check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, r.makeJQueryPlugin = function(t) {
    t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(e, t) {
      var n = new r(this, e, t);
      return n.jqDeferred.promise(a(this))
    })
  }, r.makeJQueryPlugin(), r
}),
function() {
  function e(t) {
    var n = e.modules[t];
    if (!n) throw new Error('failed to require "' + t + '"');
    return "exports" in n || "function" != typeof n.definition || (n.client = n.component = !0, n.definition.call(this, n.exports = {}, n), delete n.definition), n.exports
  }
  e.loader = "component", e.helper = {}, e.helper.semVerSort = function(e, t) {
    for (var n = e.version.split("."), i = t.version.split("."), r = 0; r < n.length; ++r) {
      var o = parseInt(n[r], 10),
        s = parseInt(i[r], 10);
      if (o !== s) return o > s ? 1 : -1;
      var a = n[r].substr(("" + o).length),
        l = i[r].substr(("" + s).length);
      if ("" === a && "" !== l) return 1;
      if ("" !== a && "" === l) return -1;
      if ("" !== a && "" !== l) return a > l ? 1 : -1
    }
    return 0
  }, e.latest = function(t, n) {
    function i(e) {
      throw new Error('failed to find latest module of "' + e + '"')
    }
    var r = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,
      o = /(.*)~(.*)/;
    o.test(t) || i(t);
    for (var s = Object.keys(e.modules), a = [], l = [], c = 0; c < s.length; c++) {
      var u = s[c];
      if (new RegExp(t + "@").test(u)) {
        var d = u.substr(t.length + 1),
          p = r.exec(u);
        null != p ? a.push({
          version: d,
          name: u
        }) : l.push({
          version: d,
          name: u
        })
      }
    }
    if (0 === a.concat(l).length && i(t), a.length > 0) {
      var f = a.sort(e.helper.semVerSort).pop().name;
      return n === !0 ? f : e(f)
    }
    var f = l.sort(function(e, t) {
      return e.name > t.name
    })[0].name;
    return n === !0 ? f : e(f)
  }, e.modules = {}, e.register = function(t, n) {
    e.modules[t] = {
      definition: n
    }
  }, e.define = function(t, n) {
    e.modules[t] = {
      exports: n
    }
  }, e.register("abpetkov~transitionize@0.0.3", function(e, t) {
    function n(e, t) {
      return this instanceof n ? (this.element = e, this.props = t || {}, void this.init()) : new n(e, t)
    }
    t.exports = n, n.prototype.isSafari = function() {
      return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
    }, n.prototype.init = function() {
      var e = [];
      for (var t in this.props) e.push(t + " " + this.props[t]);
      this.element.style.transition = e.join(", "), this.isSafari() && (this.element.style.webkitTransition = e.join(", "))
    }
  }), e.register("ftlabs~fastclick@v0.6.11", function(e, t) {
    function n(e) {
      "use strict";
      var t, i = this;
      if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
      this.onClick = function() {
        return n.prototype.onClick.apply(i, arguments)
      }, this.onMouse = function() {
        return n.prototype.onMouse.apply(i, arguments)
      }, this.onTouchStart = function() {
        return n.prototype.onTouchStart.apply(i, arguments)
      }, this.onTouchMove = function() {
        return n.prototype.onTouchMove.apply(i, arguments)
      }, this.onTouchEnd = function() {
        return n.prototype.onTouchEnd.apply(i, arguments)
      }, this.onTouchCancel = function() {
        return n.prototype.onTouchCancel.apply(i, arguments)
      }, n.notNeeded(e) || (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
        var r = Node.prototype.removeEventListener;
        "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
      }, e.addEventListener = function(t, n, i) {
        var r = Node.prototype.addEventListener;
        "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(e) {
          e.propagationStopped || n(e)
        }), i) : r.call(e, t, n, i)
      }), "function" == typeof e.onclick && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e)
      }, !1), e.onclick = null))
    }
    n.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, n.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), n.prototype.deviceIsIOS4 = n.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), n.prototype.deviceIsIOSWithBadTarget = n.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), n.prototype.needsClick = function(e) {
      "use strict";
      switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
          if (e.disabled) return !0;
          break;
        case "input":
          if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
          break;
        case "label":
        case "video":
          return !0
      }
      return /\bneedsclick\b/.test(e.className)
    }, n.prototype.needsFocus = function(e) {
      "use strict";
      switch (e.nodeName.toLowerCase()) {
        case "textarea":
          return !0;
        case "select":
          return !this.deviceIsAndroid;
        case "input":
          switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
              return !1
          }
          return !e.disabled && !e.readOnly;
        default:
          return /\bneedsfocus\b/.test(e.className)
      }
    }, n.prototype.sendClick = function(e, t) {
      "use strict";
      var n, i;
      document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, n.prototype.determineEventType = function(e) {
      "use strict";
      return this.deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, n.prototype.focus = function(e) {
      "use strict";
      var t;
      this.deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, n.prototype.updateScrollParent = function(e) {
      "use strict";
      var t, n;
      if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
        n = e;
        do {
          if (n.scrollHeight > n.offsetHeight) {
            t = n, e.fastClickScrollParent = n;
            break
          }
          n = n.parentElement
        } while (n)
      }
      t && (t.fastClickLastScrollTop = t.scrollTop)
    }, n.prototype.getTargetElementFromEventTarget = function(e) {
      "use strict";
      return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, n.prototype.onTouchStart = function(e) {
      "use strict";
      var t, n, i;
      if (e.targetTouches.length > 1) return !0;
      if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], this.deviceIsIOS) {
        if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
          if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
          this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
        }
      }
      return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
    }, n.prototype.touchHasMoved = function(e) {
      "use strict";
      var t = e.changedTouches[0],
        n = this.touchBoundary;
      return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, n.prototype.onTouchMove = function(e) {
      "use strict";
      return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, n.prototype.findControl = function(e) {
      "use strict";
      return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, n.prototype.onTouchEnd = function(e) {
      "use strict";
      var t, n, i, r, o, s = this.targetElement;
      if (!this.trackingClick) return !0;
      if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
      if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], s = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || s, s.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = s.tagName.toLowerCase(), "label" === i) {
        if (t = this.findControl(s)) {
          if (this.focus(s), this.deviceIsAndroid) return !1;
          s = t
        }
      } else if (this.needsFocus(s)) return e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(s), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
      return !(!this.deviceIsIOS || this.deviceIsIOS4 || (r = s.fastClickScrollParent, !r || r.fastClickLastScrollTop === r.scrollTop)) || (this.needsClick(s) || (e.preventDefault(), this.sendClick(s, e)), !1)
    }, n.prototype.onTouchCancel = function() {
      "use strict";
      this.trackingClick = !1, this.targetElement = null
    }, n.prototype.onMouse = function(e) {
      "use strict";
      return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, n.prototype.onClick = function(e) {
      "use strict";
      var t;
      return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, n.prototype.destroy = function() {
      "use strict";
      var e = this.layer;
      this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, n.notNeeded = function(e) {
      "use strict";
      var t, i;
      if ("undefined" == typeof window.ontouchstart) return !0;
      if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!n.prototype.deviceIsAndroid) return !0;
        if (t = document.querySelector("meta[name=viewport]")) {
          if (t.content.indexOf("user-scalable=no") !== -1) return !0;
          if (i > 31 && window.innerWidth <= window.screen.width) return !0
        }
      }
      return "none" === e.style.msTouchAction
    }, n.attach = function(e) {
      "use strict";
      return new n(e)
    }, "undefined" != typeof define && define.amd ? define(function() {
      "use strict";
      return n
    }) : "undefined" != typeof t && t.exports ? (t.exports = n.attach, t.exports.FastClick = n) : window.FastClick = n
  }), e.register("component~indexof@0.0.3", function(e, t) {
    t.exports = function(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var n = 0; n < e.length; ++n)
        if (e[n] === t) return n;
      return -1
    }
  }), e.register("component~classes@1.2.1", function(t, n) {
    function i(e) {
      if (!e) throw new Error("A DOM element reference is required");
      this.el = e, this.list = e.classList
    }
    var r = e("component~indexof@0.0.3"),
      o = /\s+/,
      s = Object.prototype.toString;
    n.exports = function(e) {
      return new i(e)
    }, i.prototype.add = function(e) {
      if (this.list) return this.list.add(e), this;
      var t = this.array(),
        n = r(t, e);
      return ~n || t.push(e), this.el.className = t.join(" "), this
    }, i.prototype.remove = function(e) {
      if ("[object RegExp]" == s.call(e)) return this.removeMatching(e);
      if (this.list) return this.list.remove(e), this;
      var t = this.array(),
        n = r(t, e);
      return ~n && t.splice(n, 1), this.el.className = t.join(" "), this
    }, i.prototype.removeMatching = function(e) {
      for (var t = this.array(), n = 0; n < t.length; n++) e.test(t[n]) && this.remove(t[n]);
      return this
    }, i.prototype.toggle = function(e, t) {
      return this.list ? ("undefined" != typeof t ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e), this) : ("undefined" != typeof t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this)
    }, i.prototype.array = function() {
      var e = this.el.className.replace(/^\s+|\s+$/g, ""),
        t = e.split(o);
      return "" === t[0] && t.shift(), t
    }, i.prototype.has = i.prototype.contains = function(e) {
      return this.list ? this.list.contains(e) : !!~r(this.array(), e)
    }
  }), e.register("component~event@0.1.4", function(e, t) {
    var n = window.addEventListener ? "addEventListener" : "attachEvent",
      i = window.removeEventListener ? "removeEventListener" : "detachEvent",
      r = "addEventListener" !== n ? "on" : "";
    e.bind = function(e, t, i, o) {
      return e[n](r + t, i, o || !1), i
    }, e.unbind = function(e, t, n, o) {
      return e[i](r + t, n, o || !1), n
    }
  }), e.register("component~query@0.0.3", function(e, t) {
    function n(e, t) {
      return t.querySelector(e)
    }
    e = t.exports = function(e, t) {
      return t = t || document, n(e, t)
    }, e.all = function(e, t) {
      return t = t || document, t.querySelectorAll(e)
    }, e.engine = function(t) {
      if (!t.one) throw new Error(".one callback required");
      if (!t.all) throw new Error(".all callback required");
      return n = t.one, e.all = t.all, e
    }
  }), e.register("component~matches-selector@0.1.5", function(t, n) {
    function i(e, t) {
      if (!e || 1 !== e.nodeType) return !1;
      if (s) return s.call(e, t);
      for (var n = r.all(t, e.parentNode), i = 0; i < n.length; ++i)
        if (n[i] == e) return !0;
      return !1
    }
    var r = e("component~query@0.0.3"),
      o = Element.prototype,
      s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
    n.exports = i
  }), e.register("component~closest@0.1.4", function(t, n) {
    var i = e("component~matches-selector@0.1.5");
    n.exports = function(e, t, n, r) {
      for (e = n ? {
          parentNode: e
        } : e, r = r || document;
        (e = e.parentNode) && e !== document;) {
        if (i(e, t)) return e;
        if (e === r) return
      }
    }
  }), e.register("component~delegate@0.2.3", function(t, n) {
    var i = e("component~closest@0.1.4"),
      r = e("component~event@0.1.4");
    t.bind = function(e, t, n, o, s) {
      return r.bind(e, n, function(n) {
        var r = n.target || n.srcElement;
        n.delegateTarget = i(r, t, !0, e), n.delegateTarget && o.call(e, n)
      }, s)
    }, t.unbind = function(e, t, n, i) {
      r.unbind(e, t, n, i)
    }
  }), e.register("component~events@1.0.9", function(t, n) {
    function i(e, t) {
      if (!(this instanceof i)) return new i(e, t);
      if (!e) throw new Error("element required");
      if (!t) throw new Error("object required");
      this.el = e, this.obj = t, this._events = {}
    }

    function r(e) {
      var t = e.split(/ +/);
      return {
        name: t.shift(),
        selector: t.join(" ")
      }
    }
    var o = e("component~event@0.1.4"),
      s = e("component~delegate@0.2.3");
    n.exports = i, i.prototype.sub = function(e, t, n) {
      this._events[e] = this._events[e] || {}, this._events[e][t] = n
    }, i.prototype.bind = function(e, t) {
      function n() {
        var e = [].slice.call(arguments).concat(u);
        l[t].apply(l, e)
      }
      var i = r(e),
        a = this.el,
        l = this.obj,
        c = i.name,
        t = t || "on" + c,
        u = [].slice.call(arguments, 2);
      return i.selector ? n = s.bind(a, i.selector, c, n) : o.bind(a, c, n), this.sub(c, t, n), n
    }, i.prototype.unbind = function(e, t) {
      if (0 == arguments.length) return this.unbindAll();
      if (1 == arguments.length) return this.unbindAllOf(e);
      var n = this._events[e];
      if (n) {
        var i = n[t];
        i && o.unbind(this.el, e, i)
      }
    }, i.prototype.unbindAll = function() {
      for (var e in this._events) this.unbindAllOf(e)
    }, i.prototype.unbindAllOf = function(e) {
      var t = this._events[e];
      if (t)
        for (var n in t) this.unbind(e, n)
    }
  }), e.register("switchery", function(t, n) {
    function i(e, t) {
      if (!(this instanceof i)) return new i(e, t);
      this.element = e, this.options = t || {};
      for (var n in l) null == this.options[n] && (this.options[n] = l[n]);
      null != this.element && "checkbox" == this.element.type && this.init(), this.isDisabled() === !0 && this.disable()
    }
    var r = e("abpetkov~transitionize@0.0.3"),
      o = e("ftlabs~fastclick@v0.6.11"),
      s = e("component~classes@1.2.1"),
      a = e("component~events@1.0.9");
    n.exports = i;
    var l = {
      color: "#64bd63",
      secondaryColor: "#dfdfdf",
      jackColor: "#fff",
      jackSecondaryColor: null,
      className: "switchery",
      disabled: !1,
      disabledOpacity: .5,
      speed: "0.4s",
      size: "default"
    };
    i.prototype.hide = function() {
      this.element.style.display = "none"
    }, i.prototype.show = function() {
      var e = this.create();
      this.insertAfter(this.element, e)
    }, i.prototype.create = function() {
      return this.switcher = document.createElement("span"), this.jack = document.createElement("small"), this.switcher.appendChild(this.jack), this.switcher.className = this.options.className, this.events = a(this.switcher, this), this.switcher
    }, i.prototype.insertAfter = function(e, t) {
      e.parentNode.insertBefore(t, e.nextSibling)
    }, i.prototype.setPosition = function(e) {
      var t = this.isChecked(),
        n = this.switcher,
        i = this.jack;
      e && t ? t = !1 : e && !t && (t = !0), t === !0 ? (this.element.checked = !0, window.getComputedStyle ? i.style.left = parseInt(window.getComputedStyle(n).width) - parseInt(window.getComputedStyle(i).width) + "px" : i.style.left = parseInt(n.currentStyle.width) - parseInt(i.currentStyle.width) + "px", this.options.color && this.colorize(), this.setSpeed()) : (i.style.left = 0, this.element.checked = !1, this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor, this.switcher.style.borderColor = this.options.secondaryColor, this.switcher.style.backgroundColor = this.options.secondaryColor !== l.secondaryColor ? this.options.secondaryColor : "#fff", this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor, this.setSpeed())
    }, i.prototype.setSpeed = function() {
      var e = {},
        t = {
          "background-color": this.options.speed,
          left: this.options.speed.replace(/[a-z]/, "") / 2 + "s"
        };
      e = this.isChecked() ? {
        border: this.options.speed,
        "box-shadow": this.options.speed,
        "background-color": 3 * this.options.speed.replace(/[a-z]/, "") + "s"
      } : {
        border: this.options.speed,
        "box-shadow": this.options.speed
      }, r(this.switcher, e), r(this.jack, t)
    }, i.prototype.setSize = function() {
      var e = "switchery-small",
        t = "switchery-default",
        n = "switchery-large";
      switch (this.options.size) {
        case "small":
          s(this.switcher).add(e);
          break;
        case "large":
          s(this.switcher).add(n);
          break;
        default:
          s(this.switcher).add(t)
      }
    }, i.prototype.colorize = function() {
      var e = this.switcher.offsetHeight / 2;
      this.switcher.style.backgroundColor = this.options.color, this.switcher.style.borderColor = this.options.color, this.switcher.style.boxShadow = "inset 0 0 0 " + e + "px " + this.options.color, this.jack.style.backgroundColor = this.options.jackColor
    }, i.prototype.handleOnchange = function(e) {
      if (document.dispatchEvent) {
        var t = document.createEvent("HTMLEvents");
        t.initEvent("change", !0, !0), this.element.dispatchEvent(t)
      } else this.element.fireEvent("onchange")
    }, i.prototype.handleChange = function() {
      var e = this,
        t = this.element;
      t.addEventListener ? t.addEventListener("change", function() {
        e.setPosition()
      }) : t.attachEvent("onchange", function() {
        e.setPosition()
      })
    }, i.prototype.handleClick = function() {
      var e = this.switcher;
      o(e), this.events.bind("click", "bindClick")
    }, i.prototype.bindClick = function() {
      var e = this.element.parentNode.tagName.toLowerCase(),
        t = "label" !== e;
      this.setPosition(t), this.handleOnchange(this.element.checked)
    }, i.prototype.markAsSwitched = function() {
      this.element.setAttribute("data-switchery", !0)
    }, i.prototype.markedAsSwitched = function() {
      return this.element.getAttribute("data-switchery")
    }, i.prototype.init = function() {
      this.hide(), this.show(), this.setSize(), this.setPosition(), this.markAsSwitched(), this.handleChange(), this.handleClick()
    }, i.prototype.isChecked = function() {
      return this.element.checked
    }, i.prototype.isDisabled = function() {
      return this.options.disabled || this.element.disabled || this.element.readOnly
    }, i.prototype.destroy = function() {
      this.events.unbind()
    }, i.prototype.enable = function() {
      this.options.disabled && (this.options.disabled = !1), this.element.disabled && (this.element.disabled = !1), this.element.readOnly && (this.element.readOnly = !1), this.switcher.style.opacity = 1, this.events.bind("click", "bindClick")
    }, i.prototype.disable = function() {
      this.options.disabled || (this.options.disabled = !0), this.element.disabled || (this.element.disabled = !0), this.element.readOnly || (this.element.readOnly = !0), this.switcher.style.opacity = this.options.disabledOpacity, this.destroy()
    }
  }), "object" == typeof exports ? module.exports = e("switchery") : "function" == typeof define && define.amd ? define("Switchery", [], function() {
    return e("switchery")
  }) : (this || window).Switchery = e("switchery")
}();
