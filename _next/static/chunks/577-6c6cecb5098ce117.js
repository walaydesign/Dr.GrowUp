(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    1251: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => o });
      var u = n(5155),
        r = n(2115),
        a = n(2833),
        i = n(9480);
      function o(e) {
        let { children: t, features: n, strict: o = !1 } = e,
          [, s] = (0, r.useState)(!l(n)),
          c = (0, r.useRef)(void 0);
        if (!l(n)) {
          let { renderer: e, ...t } = n;
          ((c.current = e), (0, i.Y)(t));
        }
        return (
          (0, r.useEffect)(() => {
            l(n) &&
              n().then((e) => {
                let { renderer: t, ...n } = e;
                ((0, i.Y)(n), (c.current = t), s(!0));
              });
          }, []),
          (0, u.jsx)(a.Y.Provider, {
            value: { renderer: c.current, strict: o },
            children: t,
          })
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    4356: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => a });
      var u = n(4060);
      let r = (0, n(1212).C)(),
        a = (0, u.I)(r);
    },
    4668: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = n(2115),
        r = n(4749),
        a = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(u),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, u = arguments.length; n < u; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function o(e, t) {
        var n = {};
        for (var u in e)
          Object.prototype.hasOwnProperty.call(e, u) &&
            0 > t.indexOf(u) &&
            (n[u] = e[u]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (u = Object.getOwnPropertySymbols(e); r < u.length; r++)
            0 > t.indexOf(u[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, u[r]) &&
              (n[u[r]] = e[u[r]]);
        }
        return n;
      }
      function l(e) {
        var t = e || s(),
          n = u.useState(t),
          r = n[0],
          a = n[1];
        return (
          u.useEffect(
            function () {
              if ("undefined" != typeof window && "matchMedia" in window) {
                var t = function () {
                    a(e || s());
                  },
                  n = window.matchMedia(
                    "screen and (resolution: ".concat(r, "dppx)"),
                  );
                return (
                  n.hasOwnProperty("addEventListener")
                    ? n.addEventListener("change", t)
                    : n.addListener(t),
                  function () {
                    n.hasOwnProperty("removeEventListener")
                      ? n.removeEventListener("change", t)
                      : n.removeListener(t);
                  }
                );
              }
            },
            [r, e],
          ),
          r
        );
      }
      function s() {
        return Math.min(
          Math.max(
            1,
            "undefined" != typeof window &&
              "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1,
          ),
          3,
        );
      }
      var c = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        f = globalThis.ResizeObserver || c,
        d = void 0 !== globalThis.ResizeObserver,
        v = !d,
        h = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function p(e) {
        return Object.assign({}, h, e);
      }
      function b(e) {
        var t,
          n,
          r,
          a,
          i,
          o,
          s,
          c = e.riveLoaded,
          h = void 0 !== c && c,
          b = e.canvasElem,
          g = e.containerRef,
          y = e.options,
          w = e.onCanvasHasResized,
          m = e.artboardBounds,
          C = p(void 0 === y ? {} : y),
          R = u.useState({ height: 0, width: 0 }),
          E = R[0],
          O = E.height,
          P = E.width,
          x = R[1],
          k = u.useState({ height: 0, width: 0 }),
          V = k[0],
          M = V.height,
          j = V.width,
          T = k[1],
          S = u.useState(!0),
          D = S[0],
          I = S[1],
          L = C.fitCanvasToArtboardHeight,
          _ = C.shouldResizeCanvasToContainer,
          z = C.useDevicePixelRatio,
          H = C.customDevicePixelRatio,
          N =
            (void 0 === (t = _) && (t = !0),
            (r = (n = u.useState({ width: 0, height: 0 }))[0]),
            (a = n[1]),
            u.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  a({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  v && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (s = u.useRef(
              new f(
                ((i = function (e) {
                  d &&
                    a({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (o = 0),
                function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  (clearTimeout(o),
                    (o = window.setTimeout(function () {
                      return i.apply(e, t);
                    }, 0)));
                }),
              ),
            )),
            u.useEffect(
              function () {
                var e = s.current;
                if (t) {
                  var n = g.current;
                  return (
                    g.current && d && e.observe(g.current),
                    function () {
                      (e.disconnect(), n && d && e.unobserve(n));
                    }
                  );
                }
                e.disconnect();
              },
              [g, s],
            ),
            r),
          F = l(H),
          A = null != m ? m : {},
          B = A.maxX,
          W = A.maxY,
          Y = u.useCallback(
            function () {
              var e,
                t,
                n,
                u,
                r =
                  null !==
                    (t =
                      null === (e = g.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                a =
                  null !==
                    (u =
                      null === (n = g.current) || void 0 === n
                        ? void 0
                        : n.clientHeight) && void 0 !== u
                    ? u
                    : 0;
              return L && m
                ? { width: r, height: r * (m.maxY / m.maxX) }
                : { width: r, height: a };
            },
            [g, L, B, W],
          );
        (u.useEffect(
          function () {
            if (_ && g.current && h) {
              var e = Y(),
                t = e.width,
                n = e.height,
                u = !1;
              if (b) {
                var r = t !== P || n !== O;
                if (
                  (C.fitCanvasToArtboardHeight &&
                    r &&
                    ((g.current.style.height = n + "px"), (u = !0)),
                  C.useDevicePixelRatio)
                ) {
                  if (r || t * F !== j || n * F !== M) {
                    var a = F * t,
                      i = F * n;
                    ((b.width = a),
                      (b.height = i),
                      (b.style.width = t + "px"),
                      (b.style.height = n + "px"),
                      T({ width: a, height: i }),
                      (u = !0));
                  }
                } else
                  r &&
                    ((b.width = t),
                    (b.height = n),
                    T({ width: t, height: n }),
                    (u = !0));
                x({ width: t, height: n });
              }
              (w && (D || u) && w && w(), D && I(!1));
            }
          },
          [b, g, N, F, Y, D, I, M, j, O, P, w, _, L, z, h],
        ),
          u.useEffect(
            function () {
              T({ width: 0, height: 0 });
            },
            [b],
          ));
      }
      var g,
        y = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        w = globalThis.IntersectionObserver || y,
        m = (function () {
          function e() {
            var e = this;
            ((this.elementsMap = new Map()),
              (this.onObserved = function (t) {
                t.forEach(function (t) {
                  var n = e.elementsMap.get(t.target);
                  n && n(t);
                });
              }),
              (this.observer = new w(this.onObserved)));
          }
          return (
            (e.prototype.registerCallback = function (e, t) {
              (this.observer.observe(e), this.elementsMap.set(e, t));
            }),
            (e.prototype.removeCallback = function (e) {
              (this.observer.unobserve(e), this.elementsMap.delete(e));
            }),
            e
          );
        })(),
        C = function () {
          return (g || (g = new m()), g);
        };
      function R(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          u = e.className,
          r = void 0 === u ? "" : u,
          l = e.style,
          s = e.children,
          c = o(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          f = i({ width: "100%", height: "100%" }, l);
        return a.default.createElement(
          "div",
          i({ ref: t, className: r }, !r && { style: f }),
          a.default.createElement(
            "canvas",
            i(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              c,
            ),
            s,
          ),
        );
      }
      function E(e, t) {
        void 0 === t && (t = {});
        var n = u.useState(null),
          o = n[0],
          s = n[1],
          c = u.useRef(null),
          f = u.useState(null),
          d = f[0],
          v = f[1],
          h = !!e,
          g = p(t),
          y = l(),
          w = u.useCallback(
            function () {
              if (d) {
                if (d.layout && d.layout.fit === r.Fit.Layout && o) {
                  var e = y * d.layout.layoutScaleFactor;
                  ((d.devicePixelRatioUsed = y),
                    (d.artboardWidth = (null == o ? void 0 : o.width) / e),
                    (d.artboardHeight = (null == o ? void 0 : o.height) / e));
                }
                (d.startRendering(), d.resizeToCanvas());
              }
            },
            [d, y],
          );
        b({
          riveLoaded: !!d,
          canvasElem: o,
          containerRef: c,
          options: g,
          onCanvasHasResized: w,
          artboardBounds: null == d ? void 0 : d.bounds,
        });
        var m = u.useCallback(function (e) {
          (null === e && o && ((o.height = 0), (o.width = 0)), s(e));
        }, []);
        u.useEffect(
          function () {
            if (o && e) {
              var t,
                n = null != d;
              if (null == d) {
                var u = g.useOffscreenRenderer;
                (t = new r.Rive(
                  i(i({ useOffscreenRenderer: u }, e), { canvas: o }),
                )).on(r.EventType.Load, function () {
                  ((n = !0), o ? v(t) : t.cleanup());
                });
              }
              return function () {
                n || null == t || t.cleanup();
              };
            }
          },
          [o, h, d],
        );
        var E = u.useCallback(function (e) {
            c.current = e;
          }, []),
          O = {
            observe: u.useCallback(function (e, t) {
              C().registerCallback(e, t);
            }, []),
            unobserve: u.useCallback(function (e) {
              C().removeCallback(e);
            }, []),
          },
          P = O.observe,
          x = O.unobserve;
        (u.useEffect(
          function () {
            var e,
              t = !1,
              n = function () {
                if (o && t) {
                  var e = o.getBoundingClientRect();
                  e.width > 0 &&
                    e.height > 0 &&
                    e.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    e.bottom > 0 &&
                    e.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    e.right > 0 &&
                    (null == d || d.startRendering(), (t = !1));
                }
              };
            return (
              o &&
                !1 !== g.shouldUseIntersectionObserver &&
                P(o, function (u) {
                  (u.isIntersecting
                    ? d && d.startRendering()
                    : d && d.stopRendering(),
                    (t = !u.isIntersecting),
                    clearTimeout(e),
                    u.isIntersecting ||
                      0 !== u.boundingClientRect.width ||
                      (e = setTimeout(n, 10)));
                }),
              function () {
                o && x(o);
              }
            );
          },
          [P, x, d, o, g.shouldUseIntersectionObserver],
        ),
          u.useEffect(
            function () {
              return function () {
                d && (d.cleanup(), v(null));
              };
            },
            [d, o],
          ));
        var k = null == e ? void 0 : e.animations;
        u.useEffect(
          function () {
            d &&
              k &&
              (d.isPlaying
                ? (d.stop(d.animationNames), d.play(k))
                : d.isPaused && (d.stop(d.animationNames), d.pause(k)));
          },
          [k, d],
        );
        var V = u.useCallback(
          function (e) {
            return a.default.createElement(
              R,
              i({ setContainerRef: E, setCanvasRef: m }, e),
            );
          },
          [m, E],
        );
        return {
          canvas: o,
          container: c.current,
          setCanvasRef: m,
          setContainerRef: E,
          rive: d,
          RiveComponent: V,
        };
      }
      function O(e, t, n) {
        var r = u.useState(null),
          a = r[0],
          o = r[1],
          l = u.useState(n.defaultValue),
          s = l[0],
          c = l[1],
          f = u.useState(null),
          d = f[0],
          v = f[1],
          h = u.useRef(null),
          p = u.useRef(e),
          b = u.useRef(n);
        u.useEffect(
          function () {
            b.current = n;
          },
          [n],
        );
        var g = u.useCallback(function () {
          var e = h.current,
            t = p.current,
            n = b.current;
          if (!e || !t)
            return (o(null), c(n.defaultValue), v(null), function () {});
          var u = n.getProperty(e, t);
          if (u) {
            (o(u),
              c(n.getValue(u)),
              n.getExtendedData && v(n.getExtendedData(u)));
            var r = function () {
              (c(n.getValue(u)),
                n.getExtendedData && v(n.getExtendedData(u)),
                n.onPropertyEvent && n.onPropertyEvent());
            };
            return (
              u.on(r),
              function () {
                u.off(r);
              }
            );
          }
          return function () {};
        }, []);
        u.useEffect(
          function () {
            return ((h.current = t), (p.current = e), g());
          },
          [t, e, g],
        );
        var y = u.useCallback(
            function (e) {
              if (a && h.current === t)
                try {
                  return (
                    e(a),
                    void (
                      b.current.getExtendedData &&
                      v(b.current.getExtendedData(a))
                    )
                  );
                } catch (e) {}
              if (h.current)
                try {
                  var n = b.current.getProperty(h.current, p.current);
                  n &&
                    (o(n),
                    e(n),
                    b.current.getExtendedData &&
                      v(b.current.getExtendedData(n)));
                } catch (e) {}
            },
            [a, t],
          ),
          w = u.useMemo(
            function () {
              return b.current.buildPropertyOperations(y);
            },
            [y],
          ),
          m = i({ value: s }, w);
        return (n.getExtendedData && (m.extendedData = d), m);
      }
      ((t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          u = e.animations,
          r = e.stateMachines,
          l = e.layout,
          s = e.useOffscreenRenderer,
          c = e.shouldDisableRiveListeners,
          f = e.shouldResizeCanvasToContainer,
          d = e.automaticallyHandleEvents,
          v = e.children,
          h = o(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          p = E(
            {
              src: t,
              artboard: n,
              animations: u,
              layout: l,
              stateMachines: r,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== c && c,
              automaticallyHandleEvents: void 0 !== d && d,
            },
            {
              useOffscreenRenderer: void 0 === s || s,
              shouldResizeCanvasToContainer: void 0 === f || f,
            },
          ).RiveComponent;
        return a.default.createElement(p, i({}, h), v);
      }),
        (t.useResizeCanvas = b),
        (t.useRive = E),
        (t.useRiveFile = function (e) {
          var t = this,
            n = u.useState(null),
            a = n[0],
            i = n[1],
            o = u.useState("idle"),
            l = o[0],
            s = o[1];
          return (
            u.useEffect(
              function () {
                var n,
                  u,
                  a,
                  o = null;
                return (
                  (n = void 0),
                  (u = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        u,
                        r,
                        a,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: o(0), throw: o(1), return: o(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function o(a) {
                        return function (o) {
                          var l = [a, o];
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; i; )
                            try {
                              if (
                                ((n = 1),
                                u &&
                                  (r =
                                    2 & l[0]
                                      ? u.return
                                      : l[0]
                                        ? u.throw ||
                                          ((r = u.return) && r.call(u), 0)
                                        : u.next) &&
                                  !(r = r.call(u, l[1])).done)
                              )
                                return r;
                              switch (
                                ((u = 0), r && (l = [2 & l[0], r.value]), l[0])
                              ) {
                                case 0:
                                case 1:
                                  r = l;
                                  break;
                                case 4:
                                  return (i.label++, { value: l[1], done: !1 });
                                case 5:
                                  (i.label++, (u = l[1]), (l = [0]));
                                  continue;
                                case 7:
                                  ((l = i.ops.pop()), i.trys.pop());
                                  continue;
                                default:
                                  if (
                                    !(r =
                                      (r = i.trys).length > 0 &&
                                      r[r.length - 1]) &&
                                    (6 === l[0] || 2 === l[0])
                                  ) {
                                    i = 0;
                                    continue;
                                  }
                                  if (
                                    3 === l[0] &&
                                    (!r || (l[1] > r[0] && l[1] < r[3]))
                                  ) {
                                    i.label = l[1];
                                    break;
                                  }
                                  if (6 === l[0] && i.label < r[1]) {
                                    ((i.label = r[1]), (r = l));
                                    break;
                                  }
                                  if (r && i.label < r[2]) {
                                    ((i.label = r[2]), i.ops.push(l));
                                    break;
                                  }
                                  (r[2] && i.ops.pop(), i.trys.pop());
                                  continue;
                              }
                              l = t.call(e, i);
                            } catch (e) {
                              ((l = [6, e]), (u = 0));
                            } finally {
                              n = r = 0;
                            }
                          if (5 & l[0]) throw l[1];
                          return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (t) {
                      try {
                        (s("loading"),
                          (o = new r.RiveFile(e)).init(),
                          o.on(r.EventType.Load, function () {
                            (null == o || o.getInstance(), i(o), s("success"));
                          }),
                          o.on(r.EventType.LoadError, function () {
                            s("failed");
                          }),
                          i(o));
                      } catch (e) {
                        (console.error(e), s("failed"));
                      }
                      return [2];
                    });
                  }),
                  new (u || (u = Promise))(function (e, r) {
                    function i(e) {
                      try {
                        l(a.next(e));
                      } catch (e) {
                        r(e);
                      }
                    }
                    function o(e) {
                      try {
                        l(a.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    }
                    function l(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value) instanceof u
                            ? n
                            : new u(function (e) {
                                e(n);
                              })
                          ).then(i, o);
                    }
                    l((a = a.apply(t, n || [])).next());
                  }),
                  function () {
                    null == o || o.cleanup();
                  }
                );
              },
              [e.src, e.buffer],
            ),
            { riveFile: a, status: l }
          );
        }),
        (t.useStateMachineInput = function (e, t, n, a) {
          var i = u.useState(null),
            o = i[0],
            l = i[1];
          return (
            u.useEffect(
              function () {
                function u() {
                  if (((e && t && n) || l(null), e && t && n)) {
                    var u = e.stateMachineInputs(t);
                    if (u) {
                      var r = u.find(function (e) {
                        return e.name === n;
                      });
                      (void 0 !== a && r && (r.value = a), l(r || null));
                    }
                  } else l(null);
                }
                (u(),
                  e &&
                    e.on(r.EventType.Load, function () {
                      u();
                    }));
              },
              [e],
            ),
            o
          );
        }),
        (t.useViewModel = function (e, t) {
          var n = null != t ? t : {},
            a = n.name,
            i = n.useDefault,
            o = u.useState(null),
            l = o[0],
            s = o[1];
          return (
            u.useEffect(
              function () {
                function t() {
                  var t;
                  if (e) {
                    var n = null;
                    s(
                      null != a
                        ? (null === (t = e.viewModelByName) || void 0 === t
                            ? void 0
                            : t.call(e, a)) || null
                        : e.defaultViewModel() || null,
                    );
                  } else s(null);
                }
                return (
                  t(),
                  e && e.on(r.EventType.Load, t),
                  function () {
                    e && e.off(r.EventType.Load, t);
                  }
                );
              },
              [e, a, void 0 !== i && i],
            ),
            l
          );
        }),
        (t.useViewModelInstance = function (e, t) {
          var n = null != t ? t : {},
            r = n.name,
            a = n.useDefault,
            i = void 0 !== a && a,
            o = n.useNew,
            l = void 0 !== o && o,
            s = n.rive,
            c = u.useState(null),
            f = c[0],
            d = c[1];
          return (
            u.useEffect(
              function () {
                var t, n, u;
                if (e) {
                  var a = null;
                  (d(
                    (a =
                      null != r
                        ? e.instanceByName(r) || null
                        : i
                          ? (null === (t = e.defaultInstance) || void 0 === t
                              ? void 0
                              : t.call(e)) || null
                          : l
                            ? (null === (n = e.instance) || void 0 === n
                                ? void 0
                                : n.call(e)) || null
                            : (null === (u = e.defaultInstance) || void 0 === u
                                ? void 0
                                : u.call(e)) || null),
                  ),
                    s &&
                      a &&
                      s.viewModelInstance !== a &&
                      s.bindViewModelInstance(a));
                } else d(null);
              },
              [e, r, i, l, s],
            ),
            f
          );
        }),
        (t.useViewModelInstanceBoolean = function (e, t) {
          var n = O(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.boolean(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceColor = function (e, t) {
          var n = O(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.color(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
                setRgb: function (t, n, u) {
                  e(function (e) {
                    e.rgb(t, n, u);
                  });
                },
                setRgba: function (t, n, u, r) {
                  e(function (e) {
                    e.rgba(t, n, u, r);
                  });
                },
                setAlpha: function (t) {
                  e(function (e) {
                    e.alpha(t);
                  });
                },
                setOpacity: function (t) {
                  e(function (e) {
                    e.opacity(t);
                  });
                },
              };
            }, []),
          });
          return {
            value: n.value,
            setValue: n.setValue,
            setRgb: n.setRgb,
            setRgba: n.setRgba,
            setAlpha: n.setAlpha,
            setOpacity: n.setOpacity,
          };
        }),
        (t.useViewModelInstanceEnum = function (e, t) {
          var n = O(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.enum(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: u.useCallback(function (e) {
              return e.values;
            }, []),
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return {
            value: n.value,
            values: n.extendedData || [],
            setValue: n.setValue,
          };
        }),
        (t.useViewModelInstanceNumber = function (e, t) {
          var n = O(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.number(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceString = function (e, t) {
          var n = O(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.string(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceTrigger = function (e, t, n) {
          var r = (null != n ? n : {}).onTrigger;
          return {
            trigger: O(e, t, {
              getProperty: u.useCallback(function (e, t) {
                return e.trigger(t);
              }, []),
              getValue: u.useCallback(function () {}, []),
              defaultValue: null,
              onPropertyEvent: r,
              buildPropertyOperations: u.useCallback(function (e) {
                return {
                  trigger: function () {
                    e(function (e) {
                      e.trigger();
                    });
                  },
                };
              }, []),
            }).trigger,
          };
        }),
        Object.keys(r).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            });
        }));
    },
    5028: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => r.a });
      var u = n(6645),
        r = n.n(u);
    },
    6645: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let u = n(8229)._(n(7357));
      function r(e, t) {
        var n;
        let r = {};
        "function" == typeof e && (r.loader = e);
        let a = { ...r, ...t };
        return (0, u.default)({
          ...a,
          modules: null == (n = a.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7357: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let u = n(5155),
        r = n(2115),
        a = n(2146);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      n(255);
      let o = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...o, ...e },
            n = (0, r.lazy)(() => t.loader().then(i)),
            l = t.loading;
          function s(e) {
            let i = l
                ? (0, u.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              o = !t.ssr || !!t.loading,
              s = o ? r.Suspense : r.Fragment,
              c = t.ssr
                ? (0, u.jsxs)(u.Fragment, {
                    children: [null, (0, u.jsx)(n, { ...e })],
                  })
                : (0, u.jsx)(a.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, u.jsx)(n, { ...e }),
                  });
            return (0, u.jsx)(s, {
              ...(o ? { fallback: i } : {}),
              children: c,
            });
          }
          return ((s.displayName = "LoadableComponent"), s);
        };
    },
    8126: (e, t) => {
      "use strict";
      function n() {
        return null;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
  },
]);
