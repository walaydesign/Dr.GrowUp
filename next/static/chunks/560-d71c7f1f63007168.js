"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [560],
  {
    18: (e, t, n) => {
      n.d(t, { U: () => r, f: () => o });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        o = new Set(r);
    },
    175: (e, t, n) => {
      n.d(t, { Q: () => o });
      let r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function o(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (r.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    255: (e, t, n) => {
      function r(e) {
        let { moduleIds: t } = e;
        return null;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(5155),
        n(7650),
        n(5744),
        n(589));
    },
    637: (e, t, n) => {
      n.d(t, { $: () => a, H: () => o });
      var r = n(8606);
      let o = {};
      function a(e) {
        for (let t in e)
          ((o[t] = e[t]), (0, r.j)(t) && (o[t].isCSSVariable = !0));
      }
    },
    760: (e, t, n) => {
      n.d(t, { N: () => v });
      var r = n(5155),
        o = n(2115),
        a = n(869),
        i = n(2885),
        s = n(7494),
        l = n(845),
        u = n(1508);
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              n = (e instanceof HTMLElement && e.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            ((r.height = t.offsetHeight || 0),
              (r.width = t.offsetWidth || 0),
              (r.top = t.offsetTop),
              (r.left = t.offsetLeft),
              (r.right = n - r.width - r.left));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function f(e) {
        let { children: t, isPresent: n, anchorX: a } = e,
          i = (0, o.useId)(),
          s = (0, o.useRef)(null),
          l = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: f } = (0, o.useContext)(u.Q);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: o, right: u } = l.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let c = document.createElement("style");
            return (
              f && (c.nonce = f),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === a ? "left: ".concat(o) : "right: ".concat(u),
                      "px !important;\n            top: ",
                    )
                    .concat(r, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [n]),
          (0, r.jsx)(c, {
            isPresent: n,
            childRef: s,
            sizeRef: l,
            children: o.cloneElement(t, { ref: s }),
          })
        );
      }
      let d = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: a,
            onExitComplete: s,
            custom: u,
            presenceAffectsLayout: c,
            mode: d,
            anchorX: m,
          } = e,
          h = (0, i.M)(p),
          g = (0, o.useId)(),
          v = !0,
          y = (0, o.useMemo)(
            () => (
              (v = !1),
              {
                id: g,
                initial: n,
                isPresent: a,
                custom: u,
                onExitComplete: (e) => {
                  for (let t of (h.set(e, !0), h.values())) if (!t) return;
                  s && s();
                },
                register: (e) => (h.set(e, !1), () => h.delete(e)),
              }
            ),
            [a, h, s],
          );
        return (
          c && v && (y = { ...y }),
          (0, o.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [a]),
          o.useEffect(() => {
            a || h.size || !s || s();
          }, [a]),
          "popLayout" === d &&
            (t = (0, r.jsx)(f, { isPresent: a, anchorX: m, children: t })),
          (0, r.jsx)(l.t.Provider, { value: y, children: t })
        );
      };
      function p() {
        return new Map();
      }
      var m = n(2082);
      let h = (e) => e.key || "";
      function g(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let v = (e) => {
        let {
            children: t,
            custom: n,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: c = !0,
            mode: f = "sync",
            propagate: p = !1,
            anchorX: v = "left",
          } = e,
          [y, x] = (0, m.xQ)(p),
          w = (0, o.useMemo)(() => g(t), [t]),
          b = p && !y ? [] : w.map(h),
          S = (0, o.useRef)(!0),
          j = (0, o.useRef)(w),
          P = (0, i.M)(() => new Map()),
          [C, E] = (0, o.useState)(w),
          [M, O] = (0, o.useState)(w);
        (0, s.E)(() => {
          ((S.current = !1), (j.current = w));
          for (let e = 0; e < M.length; e++) {
            let t = h(M[e]);
            b.includes(t) ? P.delete(t) : !0 !== P.get(t) && P.set(t, !1);
          }
        }, [M, b.length, b.join("-")]);
        let k = [];
        if (w !== C) {
          let e = [...w];
          for (let t = 0; t < M.length; t++) {
            let n = M[t],
              r = h(n);
            b.includes(r) || (e.splice(t, 0, n), k.push(n));
          }
          return ("wait" === f && k.length && (e = k), O(g(e)), E(w), null);
        }
        let { forceRender: R } = (0, o.useContext)(a.L);
        return (0, r.jsx)(r.Fragment, {
          children: M.map((e) => {
            let t = h(e),
              o = (!p || !!y) && (w === M || b.includes(t));
            return (0, r.jsx)(
              d,
              {
                isPresent: o,
                initial: (!S.current || !!l) && void 0,
                custom: n,
                presenceAffectsLayout: c,
                mode: f,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!P.has(t)) return;
                      P.set(t, !0);
                      let e = !0;
                      (P.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == R || R(),
                          O(j.current),
                          p && (null == x || x()),
                          u && u()));
                    },
                anchorX: v,
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    797: (e, t, n) => {
      n.d(t, { N: () => r });
      let r = (0, n(2115).createContext)({});
    },
    845: (e, t, n) => {
      n.d(t, { t: () => r });
      let r = (0, n(2115).createContext)(null);
    },
    869: (e, t, n) => {
      n.d(t, { L: () => r });
      let r = (0, n(2115).createContext)({});
    },
    1212: (e, t, n) => {
      n.d(t, { C: () => H });
      var r = n(5155),
        o = n(2115),
        a = n(869),
        i = n(2833),
        s = n(1508);
      let l = (0, o.createContext)({});
      var u = n(9253),
        c = n(5305);
      function f(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var d = n(8972),
        p = n(6642),
        m = n(9480);
      let h = Symbol.for("motionComponentSymbol");
      var g = n(3991),
        v = n(7123),
        y = n(1788),
        x = n(845),
        w = n(797),
        b = n(7494),
        S = n(3055),
        j = n(4570),
        P = n(7684);
      let C = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function E(e, t, n) {
        for (let r in t) (0, j.S)(t[r]) || (0, S.z)(r, n) || (e[r] = t[r]);
      }
      let M = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function O(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          M.has(e)
        );
      }
      let k = (e) => !O(e);
      try {
        !(function (e) {
          e && (k = (t) => (t.startsWith("on") ? !O(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      var R = n(175),
        W = n(2076);
      let L = () => ({ ...C(), attrs: {} });
      var T = n(3095),
        I = n(6340),
        A = n(2735),
        B = n(2885),
        X = n(5902);
      let _ = (e) => (t, n) => {
          let r = (0, o.useContext)(l),
            a = (0, o.useContext)(x.t),
            i = () =>
              (function (
                { scrapeMotionValuesFromProps: e, createRenderState: t },
                n,
                r,
                o,
              ) {
                return {
                  latestValues: (function (e, t, n, r) {
                    let o = {},
                      a = r(e, {});
                    for (let e in a) o[e] = (0, X.u)(a[e]);
                    let { initial: i, animate: s } = e,
                      l = (0, u.e)(e),
                      c = (0, u.O)(e);
                    t &&
                      c &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === i && (i = t.initial),
                      void 0 === s && (s = t.animate));
                    let f = !!n && !1 === n.initial,
                      d = (f = f || !1 === i) ? s : i;
                    if (d && "boolean" != typeof d && !(0, I.N)(d)) {
                      let t = Array.isArray(d) ? d : [d];
                      for (let n = 0; n < t.length; n++) {
                        let r = (0, A.a)(e, t[n]);
                        if (r) {
                          let { transitionEnd: e, transition: t, ...n } = r;
                          for (let e in n) {
                            let t = n[e];
                            if (Array.isArray(t)) {
                              let e = f ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (o[e] = t);
                          }
                          for (let t in e) o[t] = e[t];
                        }
                      }
                    }
                    return o;
                  })(n, r, o, e),
                  renderState: t(),
                };
              })(e, t, r, a);
          return n ? i() : (0, B.M)(i);
        },
        V = {
          useVisualState: _({
            scrapeMotionValuesFromProps: n(8609).x,
            createRenderState: C,
          }),
        },
        Y = {
          useVisualState: _({
            scrapeMotionValuesFromProps: n(4527).x,
            createRenderState: L,
          }),
        };
      function H(e, t) {
        return function (
          n,
          { forwardMotionProps: S } = { forwardMotionProps: !1 },
        ) {
          return (function (e) {
            var t, n;
            let {
              preloadedFeatures: S,
              createVisualElement: j,
              useRender: P,
              useVisualState: C,
              Component: E,
            } = e;
            function M(e, t) {
              var n, m, h;
              let S,
                M = {
                  ...(0, o.useContext)(s.Q),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      n = (0, o.useContext)(a.L).id;
                    return n && void 0 !== t ? n + "-" + t : t;
                  })(e),
                },
                { isStatic: O } = M,
                k = (function (e) {
                  let { initial: t, animate: n } = (function (e, t) {
                    if ((0, u.e)(e)) {
                      let { initial: t, animate: n } = e;
                      return {
                        initial: !1 === t || (0, c.w)(t) ? t : void 0,
                        animate: (0, c.w)(n) ? n : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, o.useContext)(l));
                  return (0, o.useMemo)(
                    () => ({ initial: t, animate: n }),
                    [f(t), f(n)],
                  );
                })(e),
                R = C(e, O);
              if (!O && d.B) {
                ((m = 0), (h = 0), (0, o.useContext)(i.Y).strict);
                let e = (function (e) {
                  let { drag: t, layout: n } = p.B;
                  if (!t && !n) return {};
                  let r = { ...t, ...n };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == n ? void 0 : n.isEnabled(e))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(M);
                ((S = e.MeasureLayout),
                  (k.visualElement = (function (e, t, n, r, a) {
                    let { visualElement: u } = (0, o.useContext)(l),
                      c = (0, o.useContext)(i.Y),
                      f = (0, o.useContext)(x.t),
                      d = (0, o.useContext)(s.Q).reducedMotion,
                      p = (0, o.useRef)(null);
                    ((r = r || c.renderer),
                      !p.current &&
                        r &&
                        (p.current = r(e, {
                          visualState: t,
                          parent: u,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: d,
                        })));
                    let m = p.current,
                      h = (0, o.useContext)(w.N);
                    m &&
                      !m.projection &&
                      a &&
                      ("html" === m.type || "svg" === m.type) &&
                      (function (e, t, n, r) {
                        let {
                          layoutId: o,
                          layout: a,
                          drag: i,
                          dragConstraints: s,
                          layoutScroll: l,
                          layoutRoot: u,
                          layoutCrossfade: c,
                        } = t;
                        ((e.projection = new n(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent),
                        )),
                          e.projection.setOptions({
                            layoutId: o,
                            layout: a,
                            alwaysMeasureLayout: !!i || (s && (0, g.X)(s)),
                            visualElement: e,
                            animationType: "string" == typeof a ? a : "both",
                            initialPromotionConfig: r,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: u,
                          }));
                      })(p.current, n, a, h);
                    let S = (0, o.useRef)(!1);
                    (0, o.useInsertionEffect)(() => {
                      m && S.current && m.update(n, f);
                    });
                    let j = n[y.n],
                      P = (0, o.useRef)(
                        !!j &&
                          !window.MotionHandoffIsComplete?.(j) &&
                          window.MotionHasOptimisedAnimation?.(j),
                      );
                    return (
                      (0, b.E)(() => {
                        m &&
                          ((S.current = !0),
                          (window.MotionIsMounted = !0),
                          m.updateFeatures(),
                          v.k.render(m.render),
                          P.current &&
                            m.animationState &&
                            m.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        m &&
                          (!P.current &&
                            m.animationState &&
                            m.animationState.animateChanges(),
                          P.current &&
                            (queueMicrotask(() => {
                              window.MotionHandoffMarkAsComplete?.(j);
                            }),
                            (P.current = !1)));
                      }),
                      m
                    );
                  })(E, R, M, j, e.ProjectionNode)));
              }
              return (0, r.jsxs)(l.Provider, {
                value: k,
                children: [
                  S && k.visualElement
                    ? (0, r.jsx)(S, { visualElement: k.visualElement, ...M })
                    : null,
                  P(
                    E,
                    e,
                    ((n = k.visualElement),
                    (0, o.useCallback)(
                      (e) => {
                        (e && R.onMount && R.onMount(e),
                          n && (e ? n.mount(e) : n.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : (0, g.X)(t) && (t.current = e)));
                      },
                      [n],
                    )),
                    R,
                    O,
                    k.visualElement,
                  ),
                ],
              });
            }
            (S && (0, m.Y)(S),
              (M.displayName = "motion.".concat(
                "string" == typeof E
                  ? E
                  : "create(".concat(
                      null !==
                        (n =
                          null !== (t = E.displayName) && void 0 !== t
                            ? t
                            : E.name) && void 0 !== n
                        ? n
                        : "",
                      ")",
                    ),
              )));
            let O = (0, o.forwardRef)(M);
            return ((O[h] = E), O);
          })({
            ...((0, R.Q)(n) ? Y : V),
            preloadedFeatures: e,
            useRender: (function (e = !1) {
              return (t, n, r, { latestValues: a }, i) => {
                let s = (
                    (0, R.Q)(t)
                      ? function (e, t, n, r) {
                          let a = (0, o.useMemo)(() => {
                            let n = L();
                            return (
                              (0, W.B)(n, t, (0, T.n)(r), e.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            (E(t, e.style, e),
                              (a.style = { ...t, ...a.style }));
                          }
                          return a;
                        }
                      : function (e, t) {
                          let n = {},
                            r = (function (e, t) {
                              let n = e.style || {},
                                r = {};
                              return (
                                E(r, n, e),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, o.useMemo)(() => {
                                      let n = C();
                                      return (
                                        (0, P.O)(n, t, e),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [t]);
                                  })(e, t),
                                ),
                                r
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((n.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = r),
                            n
                          );
                        }
                  )(n, a, i, t),
                  l = (function (e, t, n) {
                    let r = {};
                    for (let o in e)
                      ("values" !== o || "object" != typeof e.values) &&
                        (k(o) ||
                          (!0 === n && O(o)) ||
                          (!t && !O(o)) ||
                          (e.draggable && o.startsWith("onDrag"))) &&
                        (r[o] = e[o]);
                    return r;
                  })(n, "string" == typeof t, e),
                  u = t !== o.Fragment ? { ...l, ...s, ref: r } : {},
                  { children: c } = n,
                  f = (0, o.useMemo)(() => ((0, j.S)(c) ? c.get() : c), [c]);
                return (0, o.createElement)(t, { ...u, children: f });
              };
            })(S),
            createVisualElement: t,
            Component: n,
          });
        };
      }
    },
    1297: (e, t, n) => {
      n.d(t, { q: () => r });
      let r = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    1508: (e, t, n) => {
      n.d(t, { Q: () => r });
      let r = (0, n(2115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    1788: (e, t, n) => {
      n.d(t, { n: () => r });
      let r = "data-" + (0, n(8450).I)("framerAppearId");
    },
    2076: (e, t, n) => {
      n.d(t, { B: () => s });
      var r = n(7684),
        o = n(4158);
      let a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        i = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function s(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: s,
          pathLength: l,
          pathSpacing: u = 1,
          pathOffset: c = 0,
          ...f
        },
        d,
        p,
      ) {
        if (((0, r.O)(e, f, p), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        ((e.attrs = e.style), (e.style = {}));
        let { attrs: m, style: h } = e;
        (m.transform && ((h.transform = m.transform), delete m.transform),
          (h.transform || m.transformOrigin) &&
            ((h.transformOrigin = m.transformOrigin ?? "50% 50%"),
            delete m.transformOrigin),
          h.transform && ((h.transformBox = "fill-box"), delete m.transformBox),
          void 0 !== t && (m.x = t),
          void 0 !== n && (m.y = n),
          void 0 !== s && (m.scale = s),
          void 0 !== l &&
            (function (e, t, n = 1, r = 0, s = !0) {
              e.pathLength = 1;
              let l = s ? a : i;
              e[l.offset] = o.px.transform(-r);
              let u = o.px.transform(t),
                c = o.px.transform(n);
              e[l.array] = `${u} ${c}`;
            })(m, l, u, c, !1));
      }
    },
    2082: (e, t, n) => {
      n.d(t, { xQ: () => a });
      var r = n(2115),
        o = n(845);
      function a(e = !0) {
        let t = (0, r.useContext)(o.t);
        if (null === t) return [!0, null];
        let { isPresent: n, onExitComplete: i, register: s } = t,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (e) return s(l);
        }, [e]);
        let u = (0, r.useCallback)(() => e && i && i(l), [l, i, e]);
        return !n && i ? [!1, u] : [!0];
      }
    },
    2146: (e, t, n) => {
      function r(e) {
        let { reason: t, children: n } = e;
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(5262));
    },
    2403: (e, t, n) => {
      n.d(t, { W: () => s });
      var r = n(7887);
      let o = { ...r.ai, transform: Math.round };
      var a = n(4158);
      let i = {
          rotate: a.uj,
          rotateX: a.uj,
          rotateY: a.uj,
          rotateZ: a.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: a.uj,
          skewX: a.uj,
          skewY: a.uj,
          distance: a.px,
          translateX: a.px,
          translateY: a.px,
          translateZ: a.px,
          x: a.px,
          y: a.px,
          z: a.px,
          perspective: a.px,
          transformPerspective: a.px,
          opacity: r.X4,
          originX: a.gQ,
          originY: a.gQ,
          originZ: a.px,
        },
        s = {
          borderWidth: a.px,
          borderTopWidth: a.px,
          borderRightWidth: a.px,
          borderBottomWidth: a.px,
          borderLeftWidth: a.px,
          borderRadius: a.px,
          radius: a.px,
          borderTopLeftRadius: a.px,
          borderTopRightRadius: a.px,
          borderBottomRightRadius: a.px,
          borderBottomLeftRadius: a.px,
          width: a.px,
          maxWidth: a.px,
          height: a.px,
          maxHeight: a.px,
          top: a.px,
          right: a.px,
          bottom: a.px,
          left: a.px,
          padding: a.px,
          paddingTop: a.px,
          paddingRight: a.px,
          paddingBottom: a.px,
          paddingLeft: a.px,
          margin: a.px,
          marginTop: a.px,
          marginRight: a.px,
          marginBottom: a.px,
          marginLeft: a.px,
          backgroundPositionX: a.px,
          backgroundPositionY: a.px,
          ...i,
          zIndex: o,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: o,
        };
    },
    2735: (e, t, n) => {
      function r(e) {
        let t = [{}, {}];
        return (
          e?.values.forEach((e, n) => {
            ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
          }),
          t
        );
      }
      function o(e, t, n, o) {
        if ("function" == typeof t) {
          let [a, i] = r(o);
          t = t(void 0 !== n ? n : e.custom, a, i);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [a, i] = r(o);
          t = t(void 0 !== n ? n : e.custom, a, i);
        }
        return t;
      }
      n.d(t, { a: () => o });
    },
    2833: (e, t, n) => {
      n.d(t, { Y: () => r });
      let r = (0, n(2115).createContext)({ strict: !1 });
    },
    2885: (e, t, n) => {
      n.d(t, { M: () => o });
      var r = n(2115);
      function o(e) {
        let t = (0, r.useRef)(null);
        return (null === t.current && (t.current = e()), t.current);
      }
    },
    3055: (e, t, n) => {
      n.d(t, { z: () => a });
      var r = n(18),
        o = n(637);
      function a(e, { layout: t, layoutId: n }) {
        return (
          r.f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!o.H[e] || "opacity" === e))
        );
      }
    },
    3095: (e, t, n) => {
      n.d(t, { n: () => r });
      let r = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    3387: (e, t, n) => {
      n.d(t, { W: () => r });
      let r = {};
    },
    3991: (e, t, n) => {
      n.d(t, { X: () => r });
      function r(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
    },
    4054: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          bindSnapshot: function () {
            return i;
          },
          createAsyncLocalStorage: function () {
            return a;
          },
          createSnapshot: function () {
            return s;
          },
        }));
      let n = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 },
      );
      class r {
        disable() {
          throw n;
        }
        getStore() {}
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
        static bind(e) {
          return e;
        }
      }
      let o = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function a() {
        return o ? new o() : new r();
      }
      function i(e) {
        return o ? o.bind(e) : r.bind(e);
      }
      function s() {
        return o
          ? o.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    4060: (e, t, n) => {
      n.d(t, { I: () => r });
      function r(e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (n, r) =>
            "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
        });
      }
    },
    4158: (e, t, n) => {
      n.d(t, {
        KN: () => a,
        gQ: () => u,
        px: () => i,
        uj: () => o,
        vh: () => s,
        vw: () => l,
      });
      let r = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        o = r("deg"),
        a = r("%"),
        i = r("px"),
        s = r("vh"),
        l = r("vw"),
        u = {
          ...a,
          parse: (e) => a.parse(e) / 100,
          transform: (e) => a.transform(100 * e),
        };
    },
    4527: (e, t, n) => {
      n.d(t, { x: () => i });
      var r = n(18),
        o = n(4570),
        a = n(8609);
      function i(e, t, n) {
        let i = (0, a.x)(e, t, n);
        for (let n in e)
          ((0, o.S)(e[n]) || (0, o.S)(t[n])) &&
            (i[
              -1 !== r.U.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return i;
      }
    },
    4570: (e, t, n) => {
      n.d(t, { S: () => r });
      let r = (e) => !!(e && e.getVelocity);
    },
    4744: (e, t, n) => {
      n.d(t, { Q: () => r });
      let r = { value: null, addProjectionMetrics: null };
    },
    5305: (e, t, n) => {
      n.d(t, { w: () => r });
      function r(e) {
        return "string" == typeof e || Array.isArray(e);
      }
    },
    5453: (e, t, n) => {
      n.d(t, { v: () => l });
      var r = n(2115);
      let o = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                ((t = (null != r ? r : "object" != typeof o || null === o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e)));
              }
            },
            o = () => t,
            a = {
              setState: r,
              getState: o,
              getInitialState: () => i,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            i = (t = e(r, o, a));
          return a;
        },
        a = (e) => (e ? o(e) : o),
        i = (e) => e,
        s = (e) => {
          let t = a(e),
            n = (e) =>
              (function (e, t = i) {
                let n = r.useSyncExternalStore(
                  e.subscribe,
                  () => t(e.getState()),
                  () => t(e.getInitialState()),
                );
                return (r.useDebugValue(n), n);
              })(t, e);
          return (Object.assign(n, t), n);
        },
        l = (e) => (e ? s(e) : s);
    },
    5744: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        }));
      let r = n(7828);
    },
    5902: (e, t, n) => {
      n.d(t, { u: () => o });
      var r = n(4570);
      function o(e) {
        return (0, r.S)(e) ? e.get() : e;
      }
    },
    6340: (e, t, n) => {
      n.d(t, { N: () => r });
      function r(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
    },
    6642: (e, t, n) => {
      n.d(t, { B: () => o });
      let r = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        o = {};
      for (let e in r) o[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
    },
    7123: (e, t, n) => {
      n.d(t, { k: () => r });
      let { schedule: r } = (0, n(8437).I)(queueMicrotask, !1);
    },
    7494: (e, t, n) => {
      n.d(t, { E: () => o });
      var r = n(2115);
      let o = n(8972).B ? r.useLayoutEffect : r.useEffect;
    },
    7684: (e, t, n) => {
      n.d(t, { O: () => u });
      var r = n(18),
        o = n(8606);
      let a = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var i = n(2403);
      let s = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        l = r.U.length;
      function u(e, t, n) {
        let { style: u, vars: c, transformOrigin: f } = e,
          d = !1,
          p = !1;
        for (let e in t) {
          let n = t[e];
          if (r.f.has(e)) {
            d = !0;
            continue;
          }
          if ((0, o.j)(e)) {
            c[e] = n;
            continue;
          }
          {
            let t = a(n, i.W[e]);
            e.startsWith("origin") ? ((p = !0), (f[e] = t)) : (u[e] = t);
          }
        }
        if (
          (!t.transform &&
            (d || n
              ? (u.transform = (function (e, t, n) {
                  let o = "",
                    u = !0;
                  for (let c = 0; c < l; c++) {
                    let l = r.U[c],
                      f = e[l];
                    if (void 0 === f) continue;
                    let d = !0;
                    if (
                      !(d =
                        "number" == typeof f
                          ? f === +!!l.startsWith("scale")
                          : 0 === parseFloat(f)) ||
                      n
                    ) {
                      let e = a(f, i.W[l]);
                      if (!d) {
                        u = !1;
                        let t = s[l] || l;
                        o += `${t}(${e}) `;
                      }
                      n && (t[l] = e);
                    }
                  }
                  return (
                    (o = o.trim()),
                    n ? (o = n(t, u ? "" : o)) : u && (o = "none"),
                    o
                  );
                })(t, e.transform, n))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = f;
          u.transformOrigin = `${e} ${t} ${n}`;
        }
      }
    },
    7828: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = (0, n(4054).createAsyncLocalStorage)();
    },
    7887: (e, t, n) => {
      n.d(t, { X4: () => a, ai: () => o, hs: () => i });
      var r = n(1297);
      let o = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        a = { ...o, transform: (e) => (0, r.q)(0, 1, e) },
        i = { ...o, default: 1 };
    },
    8312: (e, t, n) => {
      n.d(t, { U: () => r, _: () => o });
      let r = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        o = ["initial", ...r];
    },
    8437: (e, t, n) => {
      n.d(t, { I: () => i });
      var r = n(3387);
      let o = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var a = n(4744);
      function i(e, t) {
        let n = !1,
          i = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (n = !0),
          u = o.reduce(
            (e, n) => (
              (e[n] = (function (e, t) {
                let n = new Set(),
                  r = new Set(),
                  o = !1,
                  i = !1,
                  s = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function c(t) {
                  (s.has(t) && (f.schedule(t), e()), u++, t(l));
                }
                let f = {
                  schedule: (e, t = !1, a = !1) => {
                    let i = a && o ? n : r;
                    return (t && s.add(e), i.has(e) || i.add(e), e);
                  },
                  cancel: (e) => {
                    (r.delete(e), s.delete(e));
                  },
                  process: (e) => {
                    if (((l = e), o)) {
                      i = !0;
                      return;
                    }
                    ((o = !0),
                      ([n, r] = [r, n]),
                      n.forEach(c),
                      t && a.Q.value && a.Q.value.frameloop[t].push(u),
                      (u = 0),
                      n.clear(),
                      (o = !1),
                      i && ((i = !1), f.process(e)));
                  },
                };
                return f;
              })(l, t ? n : void 0)),
              e
            ),
            {},
          ),
          {
            setup: c,
            read: f,
            resolveKeyframes: d,
            preUpdate: p,
            update: m,
            preRender: h,
            render: g,
            postRender: v,
          } = u,
          y = () => {
            let o = r.W.useManualTiming ? s.timestamp : performance.now();
            ((n = !1),
              r.W.useManualTiming ||
                (s.delta = i
                  ? 1e3 / 60
                  : Math.max(Math.min(o - s.timestamp, 40), 1)),
              (s.timestamp = o),
              (s.isProcessing = !0),
              c.process(s),
              f.process(s),
              d.process(s),
              p.process(s),
              m.process(s),
              h.process(s),
              g.process(s),
              v.process(s),
              (s.isProcessing = !1),
              n && t && ((i = !1), e(y)));
          },
          x = () => {
            ((n = !0), (i = !0), s.isProcessing || e(y));
          };
        return {
          schedule: o.reduce((e, t) => {
            let r = u[t];
            return (
              (e[t] = (e, t = !1, o = !1) => (n || x(), r.schedule(e, t, o))),
              e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < o.length; t++) u[o[t]].cancel(e);
          },
          state: s,
          steps: u,
        };
      }
    },
    8450: (e, t, n) => {
      n.d(t, { I: () => r });
      let r = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    8606: (e, t, n) => {
      n.d(t, { j: () => o, p: () => i });
      let r = (e) => (t) => "string" == typeof t && t.startsWith(e),
        o = r("--"),
        a = r("var(--"),
        i = (e) => !!a(e) && s.test(e.split("/*")[0].trim()),
        s =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    8609: (e, t, n) => {
      n.d(t, { x: () => a });
      var r = n(3055),
        o = n(4570);
      function a(e, t, n) {
        let { style: a } = e,
          i = {};
        for (let s in a)
          ((0, o.S)(a[s]) ||
            (t.style && (0, o.S)(t.style[s])) ||
            (0, r.z)(s, e) ||
            n?.getValue(s)?.liveStyle !== void 0) &&
            (i[s] = a[s]);
        return i;
      }
    },
    8972: (e, t, n) => {
      n.d(t, { B: () => r });
      let r = "undefined" != typeof window;
    },
    9253: (e, t, n) => {
      n.d(t, { O: () => s, e: () => i });
      var r = n(6340),
        o = n(5305),
        a = n(8312);
      function i(e) {
        return (0, r.N)(e.animate) || a._.some((t) => (0, o.w)(e[t]));
      }
      function s(e) {
        return !!(i(e) || e.variants);
      }
    },
    9480: (e, t, n) => {
      n.d(t, { Y: () => o });
      var r = n(6642);
      function o(e) {
        for (let t in e) r.B[t] = { ...r.B[t], ...e[t] };
      }
    },
  },
]);
