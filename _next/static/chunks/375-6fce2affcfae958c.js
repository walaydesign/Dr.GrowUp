(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [375],
  {
    1828: (t, e, i) => {
      "use strict";
      i.d(e, { Analytics: () => u });
      var s = i(2115),
        o = i(9509),
        n = () => {
          window.va ||
            (window.va = function () {
              for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function r() {
        return "undefined" != typeof window;
      }
      function a() {
        try {
          0;
        } catch (t) {}
        return "production";
      }
      function l() {
        return (r() ? window.vam : a()) || "production";
      }
      function h() {
        return "development" === l();
      }
      function u(t) {
        return (
          (0, s.useEffect)(() => {
            var e;
            t.beforeSend &&
              (null == (e = window.va) ||
                e.call(window, "beforeSend", t.beforeSend));
          }, [t.beforeSend]),
          (0, s.useEffect)(() => {
            var e;
            !(function () {
              var t;
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!r()) return;
              ((function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === t) {
                  window.vam = a();
                  return;
                }
                window.vam = t;
              })(e.mode),
                n(),
                e.beforeSend &&
                  (null == (t = window.va) ||
                    t.call(window, "beforeSend", e.beforeSend)));
              let i = e.scriptSrc
                ? e.scriptSrc
                : h()
                  ? "https://va.vercel-scripts.com/v1/script.debug.js"
                  : e.basePath
                    ? "".concat(e.basePath, "/insights/script.js")
                    : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(i, '"]')))
                return;
              let s = document.createElement("script");
              ((s.src = i),
                (s.defer = !0),
                (s.dataset.sdkn =
                  "@vercel/analytics" +
                  (e.framework ? "/".concat(e.framework) : "")),
                (s.dataset.sdkv = "1.5.0"),
                e.disableAutoTrack && (s.dataset.disableAutoTrack = "1"),
                e.endpoint
                  ? (s.dataset.endpoint = e.endpoint)
                  : e.basePath &&
                    (s.dataset.endpoint = "".concat(e.basePath, "/insights")),
                e.dsn && (s.dataset.dsn = e.dsn),
                (s.onerror = () => {
                  let t = h()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(i, ". ")
                      .concat(t),
                  );
                }),
                h() && !1 === e.debug && (s.dataset.debug = "false"),
                document.head.appendChild(s));
            })({
              framework: t.framework || "react",
              basePath:
                null !== (e = t.basePath) && void 0 !== e
                  ? e
                  : (function () {
                      if (void 0 !== o && void 0 !== o.env)
                        return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== t.route && { disableAutoTrack: !0 }),
              ...t,
            });
          }, []),
          (0, s.useEffect)(() => {
            t.route &&
              t.path &&
              (function (t) {
                var e;
                let { route: i, path: s } = t;
                null == (e = window.va) ||
                  e.call(window, "pageview", { route: i, path: s });
              })({ route: t.route, path: t.path });
          }, [t.route, t.path]),
          null
        );
      }
    },
    3586: (t, e, i) => {
      "use strict";
      i.d(e, { P: () => eP });
      var s = i(4060),
        o = i(6666),
        n = i(2290),
        r = i(9827),
        a = i(6017),
        l = i(4158),
        h = i(9515),
        u = i(3210),
        c = i(4542),
        d = i(9703),
        p = i(1442),
        m = i(1586);
      function g(t, e, i, s) {
        return (0, p.k)(t, e, (0, m.F)(i), s);
      }
      var f = i(8588);
      function v(t) {
        return t.max - t.min;
      }
      function y(t, e, i, s = 0.5) {
        ((t.origin = s),
          (t.originPoint = (0, u.k)(e.min, e.max, t.origin)),
          (t.scale = v(i) / v(e)),
          (t.translate = (0, u.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function x(t, e, i, s) {
        (y(t.x, e.x, i.x, s ? s.originX : void 0),
          y(t.y, e.y, i.y, s ? s.originY : void 0));
      }
      function P(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + v(e)));
      }
      function T(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + v(e)));
      }
      function D(t, e, i) {
        (T(t.x, e.x, i.x), T(t.y, e.y, i.y));
      }
      var S = i(1786);
      function A(t) {
        return [t("x"), t("y")];
      }
      var E = i(3757);
      let w = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var R = i(3991),
        k = i(6333),
        j = i(2960),
        L = i(3191),
        b = i(7215);
      let B = (t, e) => Math.abs(t - e);
      class V {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: o = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = U(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(B(t.x, e.x) ** 2 + B(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: o } = h.uv;
              this.history.push({ ...s, timestamp: o });
              let { onStart: n, onMove: r } = this.handlers;
              (e ||
                (n && n(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                r && r(this.lastMoveEvent, t));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = M(e, this.transformPagePoint)),
                h.Gt.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: o,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && o && o(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let n = U(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : M(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, n), s && s(t, n));
            }),
            !(0, j.M)(t))
          )
            return;
          ((this.dragSnapToOrigin = o),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window));
          let n = M((0, m.e)(t), this.transformPagePoint),
            { point: r } = n,
            { timestamp: a } = h.uv;
          this.history = [{ ...r, timestamp: a }];
          let { onSessionStart: l } = e;
          (l && l(t, U(n, this.history)),
            (this.removeListeners = (0, L.F)(
              g(this.contextWindow, "pointermove", this.handlePointerMove),
              g(this.contextWindow, "pointerup", this.handlePointerUp),
              g(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            (0, h.WG)(this.updatePoint));
        }
      }
      function M(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function C(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function U({ point: t }, e) {
        return {
          point: t,
          delta: C(t, F(e)),
          offset: C(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              o = F(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(o.timestamp - s.timestamp > (0, b.f)(0.1)));
            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let n = (0, b.X)(o.timestamp - s.timestamp);
            if (0 === n) return { x: 0, y: 0 };
            let r = { x: (o.x - s.x) / n, y: (o.y - s.y) / n };
            return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
          })(e, 0.1),
        };
      }
      function F(t) {
        return t[t.length - 1];
      }
      var O = i(5818),
        I = i(1297);
      function N(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function W(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]),
          { min: i, max: s }
        );
      }
      function G(t, e, i) {
        return { min: $(t, e), max: $(t, i) };
      }
      function $(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let H = new WeakMap();
      class _ {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, S.ge)()),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new V(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                (i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, m.e)(t).point));
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: o,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (function (t) {
                    if ("x" === t || "y" === t)
                      if (a.I[t]) return null;
                      else
                        return (
                          (a.I[t] = !0),
                          () => {
                            a.I[t] = !1;
                          }
                        );
                    return a.I.x || a.I.y
                      ? null
                      : ((a.I.x = a.I.y = !0),
                        () => {
                          a.I.x = a.I.y = !1;
                        });
                  })(i)),
                  !this.openDragLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  A((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (l.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = v(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  o && h.Gt.postRender(() => o(t, e)),
                  (0, k.g)(this.visualElement, "transform"));
                let { animationState: n } = this.visualElement;
                n && n.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: o,
                  onDrag: n,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: r } = e;
                if (s && null === this.currentDirection) {
                  ((this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(r)),
                    null !== this.currentDirection &&
                      o &&
                      o(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", e.point, r),
                  this.updateAxis("y", e.point, r),
                  this.visualElement.render(),
                  n && n(t, e));
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                A(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: w(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && h.Gt.postRender(() => o(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !q(t, s, this.currentDirection)) return;
          let o = this.getAxisMotionValue(t),
            n = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (n = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, u.k)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, u.k)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(n, this.constraints[t], this.elastic[t])),
            o.set(n));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            s = this.constraints;
          (t && (0, R.X)(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: s, right: o },
                ) {
                  return { x: N(t.x, i, o), y: N(t.y, e, s) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: G(t, "left", "right"), y: G(t, "top", "bottom") }
              );
            })(e)),
            s !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              A((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, R.X)(e)) return !1;
          let s = e.current;
          (0, c.V)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let n = (0, E.L)(
              s,
              o.root,
              this.visualElement.getTransformPagePoint(),
            ),
            r = { x: W((t = o.layout.layoutBox).x, n.x), y: W(t.y, n.y) };
          if (i) {
            let t = i((0, f.pA)(r));
            ((this.hasMutatedConstraints = !!t), t && (r = (0, f.FY)(t)));
          }
          return r;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: o,
              dragSnapToOrigin: n,
              onDragTransitionEnd: r,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            A((r) => {
              if (!q(r, e, this.currentDirection)) return;
              let l = (a && a[r]) || {};
              n && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[r] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l,
              };
              return this.startAxisValueAnimation(r, h);
            }),
          ).then(r);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, k.g)(this.visualElement, t),
            i.start((0, d.f)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          A((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          A((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          A((e) => {
            let { drag: i } = this.getProps();
            if (!q(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: n } = s.layout.layoutBox[e];
              o.set(t[e] - (0, u.k)(i, n, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, R.X)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          A((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = v(t),
                  o = v(e);
                return (
                  o > s
                    ? (i = (0, O.q)(e.min, e.max - s, t.min))
                    : s > o && (i = (0, O.q)(t.min, t.max - o, e.min)),
                  (0, I.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = o
            ? o({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            A((e) => {
              if (!q(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: o, max: n } = this.constraints[e];
              i.set((0, u.k)(o, n, s[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          H.set(this.visualElement, this);
          let t = g(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              (0, R.X)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            h.Gt.read(e));
          let o = (0, p.k)(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            n = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (A((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (o(), t(), s(), n && n());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: n = 0.35,
              dragMomentum: r = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: n,
            dragMomentum: r,
          };
        }
      }
      function q(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class z extends n.X {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = r.l),
            (this.removeListeners = r.l),
            (this.controls = new _(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || r.l));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let X = (t) => (e, i) => {
        t && h.Gt.postRender(() => t(e, i));
      };
      class Q extends n.X {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = r.l));
        }
        onPointerDown(t) {
          this.session = new V(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: w(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: X(t),
            onStart: X(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, s && h.Gt.postRender(() => s(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = g(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      var Y = i(5155),
        K = i(7123),
        Z = i(2115),
        J = i(2082),
        tt = i(869),
        te = i(797);
      let ti = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ts(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let to = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!l.px.test(t)) return t;
            else t = parseFloat(t);
          let i = ts(t, e.target.x),
            s = ts(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var tn = i(10),
        tr = i(637);
      class ta extends Z.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: o } = t;
          ((0, tr.$)(th),
            o &&
              (e.group && e.group.add(o),
              i && i.register && s && i.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ti.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: o,
            } = this.props,
            n = i.projection;
          return (
            n &&
              ((n.isPresent = o),
              s || t.layoutDependency !== e || void 0 === e || t.isPresent !== o
                ? n.willUpdate()
                : this.safeToRemove(),
              t.isPresent === o ||
                (o
                  ? n.promote()
                  : n.relegate() ||
                    h.Gt.postRender(() => {
                      let t = n.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            K.k.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tl(t) {
        let [e, i] = (0, J.xQ)(),
          s = (0, Z.useContext)(tt.L);
        return (0, Y.jsx)(ta, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, Z.useContext)(te.N),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let th = {
        borderRadius: {
          ...to,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: to,
        borderTopRightRadius: to,
        borderBottomLeftRadius: to,
        borderBottomRightRadius: to,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = tn.f.parse(t);
            if (s.length > 5) return t;
            let o = tn.f.createTransformer(t),
              n = +("number" != typeof s[0]),
              r = i.x.scale * e.x,
              a = i.y.scale * e.y;
            ((s[0 + n] /= r), (s[1 + n] /= a));
            let l = (0, u.k)(r, a, 0.5);
            return (
              "number" == typeof s[2 + n] && (s[2 + n] /= l),
              "number" == typeof s[3 + n] && (s[3 + n] /= l),
              o(s)
            );
          },
        },
      };
      var tu = i(4744),
        tc = i(8777),
        td = i(4261),
        tp = i(3704),
        tm = i(5626),
        tg = i(98),
        tf = i(4570),
        tv = i(6926),
        ty = i(6668);
      let tx = (t, e) => t.depth - e.depth;
      class tP {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, ty.Kq)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, ty.Ai)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(tx),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      var tT = i(5902),
        tD = i(7712);
      let tS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tA = tS.length,
        tE = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tw = (t) => "number" == typeof t || l.px.test(t);
      function tR(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tk = tL(0, 0.5, tD.yT),
        tj = tL(0.5, 0.95, r.l);
      function tL(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, O.q)(t, e, s)));
      }
      function tb(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function tB(t, e) {
        (tb(t.x, e.x), tb(t.y, e.y));
      }
      function tV(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      var tM = i(6147);
      function tC(t, e, i, s, o) {
        return (
          (t -= e),
          (t = (0, tM.hq)(t, 1 / i, s)),
          void 0 !== o && (t = (0, tM.hq)(t, 1 / o, s)),
          t
        );
      }
      function tU(t, e, [i, s, o], n, r) {
        !(function (t, e = 0, i = 1, s = 0.5, o, n = t, r = t) {
          if (
            (l.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, u.k)(r.min, r.max, e / 100) - r.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, u.k)(n.min, n.max, s);
          (t === n && (a -= e),
            (t.min = tC(t.min, e, i, a, o)),
            (t.max = tC(t.max, e, i, a, o)));
        })(t, e[i], e[s], e[o], e.scale, n, r);
      }
      let tF = ["x", "scaleX", "originX"],
        tO = ["y", "scaleY", "originY"];
      function tI(t, e, i, s) {
        (tU(t.x, e, tF, i ? i.x : void 0, s ? s.x : void 0),
          tU(t.y, e, tO, i ? i.y : void 0, s ? s.y : void 0));
      }
      function tN(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tW(t) {
        return tN(t.x) && tN(t.y);
      }
      function tG(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function t$(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tH(t, e) {
        return t$(t.x, e.x) && t$(t.y, e.y);
      }
      function t_(t) {
        return v(t.x) / v(t.y);
      }
      function tq(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class tz {
        constructor() {
          this.members = [];
        }
        add(t) {
          ((0, ty.Kq)(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            ((0, ty.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            (e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete());
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
      var tX = i(2662);
      let tQ = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        tY = ["", "X", "Y", "Z"],
        tK = { visibility: "hidden" },
        tZ = 0;
      function tJ(t, e, i, s) {
        let { latestValues: o } = e;
        o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function t0({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: o,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = tZ++),
              (this.animationId = 0),
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
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  tu.Q.value &&
                    (tQ.nodes =
                      tQ.calculatedTargetDeltas =
                      tQ.calculatedProjections =
                        0),
                  this.nodes.forEach(t2),
                  this.nodes.forEach(et),
                  this.nodes.forEach(ee),
                  this.nodes.forEach(t9),
                  tu.Q.addProjectionMetrics && tu.Q.addProjectionMetrics(tQ));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tP());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tm.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            ((this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e));
            let { layoutId: s, layout: o, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (o || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                ((this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = td.k.now(),
                      s = ({ timestamp: o }) => {
                        let n = o - i;
                        n >= 250 && ((0, h.WG)(s), t(n - e));
                      };
                    return (h.Gt.setup(s, !0), () => (0, h.WG)(s));
                  })(s, 250)),
                  ti.hasAnimatedSinceResize &&
                    ((ti.hasAnimatedSinceResize = !1), this.nodes.forEach(t4)));
              });
            }
            (s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                n &&
                (s || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let o =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        ea,
                      {
                        onLayoutAnimationStart: r,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      l = !this.targetLayout || !tH(this.targetLayout, s),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h));
                      let e = {
                        ...(0, tc.r)(o, "layout"),
                        onPlay: r,
                        onComplete: a,
                      };
                      ((n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e));
                    } else
                      (e || t4(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = s;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, h.WG)(this.updateProjection));
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
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ei),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = (0, tv.P)(i);
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      h.Gt,
                      !(t || i),
                    );
                  }
                  let { parent: o } = e;
                  o && !o.hasCheckedOptimisedAppear && t(o);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t6));
              return;
            }
            (this.isUpdating || this.nodes.forEach(t7),
              (this.isUpdating = !1),
              this.nodes.forEach(t8),
              this.nodes.forEach(t1),
              this.nodes.forEach(t5),
              this.clearAllSnapshots());
            let t = td.k.now();
            ((h.uv.delta = (0, I.q)(0, 1e3 / 60, t - h.uv.timestamp)),
              (h.uv.timestamp = t),
              (h.uv.isProcessing = !0),
              h.PP.update.process(h.uv),
              h.PP.preRender.process(h.uv),
              h.PP.render.process(h.uv),
              (h.uv.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), K.k.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(t3), this.sharedNodes.forEach(es));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              h.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            h.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                v(this.snapshot.measuredBox.x) ||
                v(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, S.ge)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!o) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tW(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              n = s !== this.prevTransformTemplateValue;
            t &&
              (e || (0, tX.HD)(this.latestValues) || n) &&
              (o(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              eu((e = s).x),
              eu(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, S.ge)();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(ed))) {
              let { scroll: t } = this.root;
              t && ((0, tM.Ql)(e.x, t.offset.x), (0, tM.Ql)(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = (0, S.ge)();
            if ((tB(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: o, options: n } = s;
              s !== this.root &&
                o &&
                n.layoutScroll &&
                (o.wasRoot && tB(e, t),
                (0, tM.Ql)(e.x, o.offset.x),
                (0, tM.Ql)(e.y, o.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = (0, S.ge)();
            tB(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              (!e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, tM.Ww)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, tX.HD)(s.latestValues) && (0, tM.Ww)(i, s.latestValues));
            }
            return (
              (0, tX.HD)(this.latestValues) && (0, tM.Ww)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, S.ge)();
            tB(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, tX.HD)(i.latestValues)) continue;
              (0, tX.vk)(i.latestValues) && i.updateSnapshot();
              let s = (0, S.ge)();
              (tB(s, i.measurePageBox()),
                tI(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s,
                ));
            }
            return (
              (0, tX.HD)(this.latestValues) && tI(e, this.latestValues),
              e
            );
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== h.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: s, layoutId: o } = this.options;
            if (this.layout && (s || o)) {
              if (
                ((this.resolvedRelativeTargetAt = h.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, S.ge)()),
                    (this.relativeTargetOrigin = (0, S.ge)()),
                    D(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    tB(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = (0, S.ge)()),
                    (this.targetWithTransforms = (0, S.ge)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var n, r, a;
                  (this.forceRelativeParentToResolveTarget(),
                    (n = this.target),
                    (r = this.relativeTarget),
                    (a = this.relativeParent.target),
                    P(n.x, r.x, a.x),
                    P(n.y, r.y, a.y));
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox,
                          ))
                        : tB(this.target, this.layout.layoutBox),
                      (0, tM.o4)(this.target, this.targetDelta))
                    : tB(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, S.ge)()),
                      (this.relativeTargetOrigin = (0, S.ge)()),
                      D(this.relativeTargetOrigin, this.target, t.target),
                      tB(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tu.Q.value && tQ.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                (0, tX.vk)(this.parent.latestValues) ||
                (0, tX.vF)(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === h.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: s, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || o))
            )
              return;
            tB(this.layoutCorrected, this.layout.layoutBox);
            let n = this.treeScale.x,
              r = this.treeScale.y;
            ((0, tM.OU)(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = (0, S.ge)())));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (tV(this.prevProjectionDelta.x, this.projectionDelta.x),
                tV(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              x(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              ),
              (this.treeScale.x === n &&
                this.treeScale.y === r &&
                tq(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tq(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              tu.Q.value && tQ.calculatedProjections++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = (0, S.xU)()),
              (this.projectionDelta = (0, S.xU)()),
              (this.projectionDeltaWithTransform = (0, S.xU)()));
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              s = this.snapshot,
              o = s ? s.latestValues : {},
              n = { ...this.latestValues },
              r = (0, S.xU)();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let a = (0, S.ge)(),
              h =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(er)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (eo(r.x, t.x, s),
                  eo(r.y, t.y, s),
                  this.setTargetDelta(r),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var c, m, g, f, v, y;
                  if (
                    (D(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                    (g = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (v = a),
                    (y = s),
                    en(g.x, f.x, v.x, y),
                    en(g.y, f.y, v.y, y),
                    i &&
                      ((c = this.relativeTarget),
                      (m = i),
                      tG(c.x, m.x) && tG(c.y, m.y)))
                  )
                    this.isProjectionDirty = !1;
                  (i || (i = (0, S.ge)()), tB(i, this.relativeTarget));
                }
                (h &&
                  ((this.animationValues = n),
                  (function (t, e, i, s, o, n) {
                    o
                      ? ((t.opacity = (0, u.k)(0, i.opacity ?? 1, tk(s))),
                        (t.opacityExit = (0, u.k)(e.opacity ?? 1, 0, tj(s))))
                      : n &&
                        (t.opacity = (0, u.k)(
                          e.opacity ?? 1,
                          i.opacity ?? 1,
                          s,
                        ));
                    for (let o = 0; o < tA; o++) {
                      let n = `border${tS[o]}Radius`,
                        r = tR(e, n),
                        a = tR(i, n);
                      (void 0 !== r || void 0 !== a) &&
                        (r || (r = 0),
                        a || (a = 0),
                        0 === r || 0 === a || tw(r) === tw(a)
                          ? ((t[n] = Math.max((0, u.k)(tE(r), tE(a), s), 0)),
                            (l.KN.test(a) || l.KN.test(r)) && (t[n] += "%"))
                          : (t[n] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, u.k)(e.rotate || 0, i.rotate || 0, s));
                  })(n, o, this.latestValues, s, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s));
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, h.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = h.Gt.update(() => {
                ((ti.hasAnimatedSinceResize = !0),
                  tp.q.layout++,
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, tf.S)(0) ? 0 : (0, tg.OQ)(t);
                    return (s.start((0, d.f)("", s, 1e3, i)), s.animation);
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onStop: () => {
                      tp.q.layout--;
                    },
                    onComplete: () => {
                      (tp.q.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation());
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: o,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                ec(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox,
                )
              ) {
                i = this.target || (0, S.ge)();
                let e = v(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let s = v(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + s));
              }
              (tB(e, i),
                (0, tM.Ww)(e, o),
                x(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new tz()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            (s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && tJ("z", t, s, this.animationValues);
            for (let e = 0; e < tY.length; e++)
              (tJ(`rotate${tY[e]}`, t, s, this.animationValues),
                tJ(`skew${tY[e]}`, t, s, this.animationValues));
            for (let e in (t.render(), s))
              (t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]));
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tK;
            let e = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (e.opacity = ""),
                (e.pointerEvents = (0, tT.u)(t?.pointerEvents) || ""),
                (e.transform = i ? i(this.latestValues, "") : "none"),
                e
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = (0, tT.u)(t?.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, tX.HD)(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            (this.applyTransformsToTarget(),
              (e.transform = (function (t, e, i) {
                let s = "",
                  o = t.x.translate / e.x,
                  n = t.y.translate / e.y,
                  r = i?.z || 0;
                if (
                  ((o || n || r) &&
                    (s = `translate3d(${o}px, ${n}px, ${r}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: o,
                    rotateY: n,
                    skewX: r,
                    skewY: a,
                  } = i;
                  (t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    o && (s += `rotateX(${o}deg) `),
                    n && (s += `rotateY(${n}deg) `),
                    r && (s += `skewX(${r}deg) `),
                    a && (s += `skewY(${a}deg) `));
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              i && (e.transform = i(o, e.transform)));
            let { x: n, y: r } = this.projectionDelta;
            for (let t in ((e.transformOrigin = `${100 * n.origin}% ${100 * r.origin}% 0`),
            s.animationValues
              ? (e.opacity =
                  s === this
                    ? (o.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (e.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            tr.H)) {
              if (void 0 === o[t]) continue;
              let { correct: i, applyTo: n, isCSSVariable: r } = tr.H[t],
                a = "none" === e.transform ? o[t] : i(o[t], s);
              if (n) {
                let t = n.length;
                for (let i = 0; i < t; i++) e[n[i]] = a;
              } else
                r
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (e[t] = a);
            }
            return (
              this.options.layoutId &&
                (e.pointerEvents =
                  s === this ? (0, tT.u)(t?.pointerEvents) || "" : "none"),
              e
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(t6),
              this.root.sharedNodes.clear());
          }
        };
      }
      function t1(t) {
        t.updateLayout();
      }
      function t5(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: s } = t.layout,
            { animationType: o } = t.options,
            n = e.source !== t.layout.source;
          "size" === o
            ? A((t) => {
                let s = n ? e.measuredBox[t] : e.layoutBox[t],
                  o = v(s);
                ((s.min = i[t].min), (s.max = s.min + o));
              })
            : ec(o, e.layoutBox, i) &&
              A((s) => {
                let o = n ? e.measuredBox[s] : e.layoutBox[s],
                  r = v(i[s]);
                ((o.max = o.min + r),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + r)));
              });
          let r = (0, S.xU)();
          x(r, i, e.layoutBox);
          let a = (0, S.xU)();
          n
            ? x(a, t.applyTransform(s, !0), e.measuredBox)
            : x(a, i, e.layoutBox);
          let l = !tW(r),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: o, layout: n } = s;
              if (o && n) {
                let r = (0, S.ge)();
                D(r, e.layoutBox, o.layoutBox);
                let a = (0, S.ge)();
                (D(a, i, n.layoutBox),
                  tH(r, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = r),
                    (t.relativeParent = s)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t2(t) {
        (tu.Q.value && tQ.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty)));
      }
      function t9(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function t3(t) {
        t.clearSnapshot();
      }
      function t6(t) {
        t.clearMeasurements();
      }
      function t7(t) {
        t.isLayoutDirty = !1;
      }
      function t8(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function t4(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function et(t) {
        t.resolveTargetDelta();
      }
      function ee(t) {
        t.calcProjection();
      }
      function ei(t) {
        t.resetSkewAndRotation();
      }
      function es(t) {
        t.removeLeadSnapshot();
      }
      function eo(t, e, i) {
        ((t.translate = (0, u.k)(e.translate, 0, i)),
          (t.scale = (0, u.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function en(t, e, i, s) {
        ((t.min = (0, u.k)(e.min, i.min, s)),
          (t.max = (0, u.k)(e.max, i.max, s)));
      }
      function er(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ea = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        el = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eh = el("applewebkit/") && !el("chrome/") ? Math.round : r.l;
      function eu(t) {
        ((t.min = eh(t.min)), (t.max = eh(t.max)));
      }
      function ec(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(t_(e) - t_(i))))
        );
      }
      function ed(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let ep = t0({
          attachResizeListener: (t, e) => (0, p.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        em = { current: void 0 },
        eg = t0({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!em.current) {
              let t = new ep({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (em.current = t));
            }
            return em.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var ef = i(2912),
        ev = i(1212),
        ey = i(1277);
      let ex = (0, ev.C)(
          {
            ...o.W,
            ...ef.n,
            pan: { Feature: Q },
            drag: { Feature: z, ProjectionNode: eg, MeasureLayout: tl },
            layout: { ProjectionNode: eg, MeasureLayout: tl },
          },
          ey.J,
        ),
        eP = (0, s.I)(ex);
    },
    4433: (t) => {
      t.exports = {
        style: {
          fontFamily: "'Noto Sans TC', 'Noto Sans TC Fallback'",
          fontStyle: "normal",
        },
        className: "__className_019d91",
        variable: "__variable_019d91",
      };
    },
    5695: (t, e, i) => {
      "use strict";
      var s = i(8999);
      (i.o(s, "usePathname") &&
        i.d(e, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        i.o(s, "useRouter") &&
          i.d(e, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        i.o(s, "useSearchParams") &&
          i.d(e, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          }));
    },
    9237: (t) => {
      t.exports = {
        style: {
          fontFamily: "'Poppins', 'Poppins Fallback'",
          fontStyle: "normal",
        },
        className: "__className_cc80f9",
        variable: "__variable_cc80f9",
      };
    },
  },
]);
