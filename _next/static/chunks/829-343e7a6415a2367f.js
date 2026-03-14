"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [829],
  {
    10: (t, e, i) => {
      i.d(e, { V: () => h, f: () => m });
      var n = i(4272);
      let s =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var r = i(614),
        a = i(1557);
      let o = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          r = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.y.test(t)
                  ? (s.color.push(a), r.push(l), i.push(n.y.parse(t)))
                  : t.startsWith("var(")
                    ? (s.var.push(a), r.push("var"), i.push(t))
                    : (s.number.push(a), r.push(o), i.push(parseFloat(t))),
                ++a,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: s, types: r };
      }
      function d(t) {
        return h(t).values;
      }
      function p(t) {
        let { split: e, types: i } = h(t),
          s = e.length;
        return (t) => {
          let r = "";
          for (let u = 0; u < s; u++)
            if (((r += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === o
                ? (r += (0, a.a)(t[u]))
                : e === l
                  ? (r += n.y.transform(t[u]))
                  : (r += t[u]);
            }
          return r;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        m = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(r.S)?.length || 0) + (t.match(s)?.length || 0) > 0
            );
          },
          parse: d,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = d(t);
            return p(t)(e.map(c));
          },
        };
    },
    98: (t, e, i) => {
      i.d(e, { OQ: () => h });
      var n = i(5626),
        s = i(2923),
        r = i(4261),
        a = i(9515);
      let o = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          ((this.version = "__VERSION__"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = r.k.now();
              (this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change?.notify(this.current),
                e && this.events.renderRequest?.notify(this.current));
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = r.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = o(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  a.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        get() {
          return (l.current && l.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              ((this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    280: (t, e, i) => {
      i.d(e, { E4: () => o, Hr: () => d, W9: () => h });
      var n = i(4160),
        s = i(18),
        r = i(7887),
        a = i(4158);
      let o = (t) => t === r.ai || t === a.px,
        l = new Set(["x", "y", "z"]),
        u = s.U.filter((t) => !l.has(t));
      function h(t) {
        let e = [];
        return (
          u.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, n.r)(e, "x"),
        y: (t, { transform: e }) => (0, n.r)(e, "y"),
      };
      ((d.translateX = d.x), (d.translateY = d.y));
    },
    614: (t, e, i) => {
      i.d(e, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    1277: (t, e, i) => {
      i.d(e, { J: () => to });
      var n = i(2115),
        s = i(18),
        r = i(4160),
        a = i(8606),
        o = i(3757),
        l = i(8109),
        u = i(7887),
        h = i(4158);
      let d = (t) => (e) => e.test(t),
        p = [
          u.ai,
          h.px,
          h.KN,
          h.uj,
          h.vw,
          h.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        c = (t) => p.find(d(t));
      var m = i(4542);
      let f = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        v = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var y = i(7322);
      let g = (t) => /^0[^.\s]+$/u.test(t);
      var b = i(10),
        w = i(614);
      let T = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function S(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(w.S) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = +!!T.has(e);
        return (n !== i && (r *= 100), e + "(" + r + s + ")");
      }
      let V = /\b([a-z-]*)\(.*?\)/gu,
        A = {
          ...b.f,
          getAnimatableNone: (t) => {
            let e = t.match(V);
            return e ? e.map(S).join(" ") : t;
          },
        };
      var x = i(4272);
      let M = {
          ...i(2403).W,
          color: x.y,
          backgroundColor: x.y,
          outlineColor: x.y,
          fill: x.y,
          stroke: x.y,
          borderColor: x.y,
          borderTopColor: x.y,
          borderRightColor: x.y,
          borderBottomColor: x.y,
          borderLeftColor: x.y,
          filter: A,
          WebkitFilter: A,
        },
        k = (t) => M[t];
      function C(t, e) {
        let i = k(t);
        return (
          i !== A && (i = b.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let F = new Set(["auto", "none", "0"]);
      var P = i(280);
      class E extends y.h {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, a.p)(n))) {
              let s = (function t(e, i, n = 1) {
                (0, m.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [s, r] = (function (t) {
                  let e = v.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${i ?? n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return f(t) ? parseFloat(t) : t;
                }
                return (0, a.p)(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              (void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !l.$.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            r = c(n),
            o = c(s);
          if (r !== o)
            if ((0, P.E4)(r) && (0, P.E4)(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] ||
              ("number" == typeof (n = t[e])
                ? 0 === n
                : null === n || "none" === n || "0" === n || g(n))) &&
              i.push(e);
          }
          if (i.length) {
            let n,
              s = 0;
            for (; s < t.length && !n; ) {
              let e = t[s];
              ("string" == typeof e &&
                !F.has(e) &&
                (0, b.V)(e).values.length &&
                (n = t[s]),
                s++);
            }
            if (n && e) for (let s of i) t[s] = C(e, n);
          }
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = P.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            r = i[s];
          ((i[s] = P.Hr[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== r &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      var O = i(4570),
        I = i(4261),
        D = i(9515),
        N = i(98);
      let q = [...p, x.y, b.f],
        B = (t) => q.find(d(t));
      var $ = i(5626),
        R = i(6642),
        X = i(1786),
        L = i(8972);
      let W = { current: null },
        K = { current: !1 },
        j = new WeakMap();
      var G = i(9253),
        U = i(2735);
      let Y = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class _ {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = y.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = I.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                D.Gt.render(this.render, !1, !0));
            }));
          let { latestValues: o, renderState: l } = r;
          ((this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = (0, G.e)(e)),
            (this.isVariantNode = (0, G.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== o[t] && (0, O.S)(e) && e.set(o[t], !1);
          }
        }
        mount(t) {
          if (
            ((this.current = t),
            j.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            !K.current && ((K.current = !0), L.B))
          )
            if (window.matchMedia) {
              let t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => (W.current = t.matches);
              (t.addListener(e), e());
            } else W.current = !1;
          ((this.shouldReduceMotion =
            "never" !== this.reducedMotionConfig &&
            ("always" === this.reducedMotionConfig || W.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (this.projection = void 0),
          (0, D.WG)(this.notifyUpdate),
          (0, D.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = s.f.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              ((this.latestValues[t] = e),
                this.props.onUpdate && D.Gt.preRender(this.notifyUpdate),
                n &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0));
            }),
            a = e.on("renderRequest", this.scheduleRender);
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (r(), a(), i && i(), e.owner && e.stop());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in R.B) {
            let e = R.B[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, X.ge)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < Y.length; e++) {
            let i = Y[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if ((0, O.S)(s)) t.addValue(n, s);
              else if ((0, O.S)(r)) t.addValue(n, (0, N.OQ)(s, { owner: t }));
              else if (r !== s)
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, N.OQ)(void 0 !== e ? e : s, { owner: t }));
                }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
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
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, N.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (f(i) || g(i))
                ? (i = parseFloat(i))
                : !B(i) && b.f.test(e) && (i = C(t, e)),
              this.setBaseTarget(t, (0, O.S)(i) ? i.get() : i)),
            (0, O.S)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = (0, U.a)(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, O.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new $.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class H extends _ {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = E));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, O.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var z = i(7684);
      function Q(t, { style: e, vars: i }, n, s) {
        for (let r in (Object.assign(t.style, e, s && s.getProjectionStyles(n)),
        i))
          t.style.setProperty(r, i[r]);
      }
      var Z = i(8609);
      class J extends H {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = Q));
        }
        readValueFromInstance(t, e) {
          if (s.f.has(e)) return (0, r.I)(t, e);
          {
            let i = window.getComputedStyle(t),
              n = ((0, a.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, o.m)(t, e);
        }
        build(t, e, i) {
          (0, z.O)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, Z.x)(t, e, i);
        }
      }
      var tt = i(8450),
        te = i(2076);
      let ti = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      var tn = i(3095),
        ts = i(4527);
      class tr extends H {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = X.ge));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (s.f.has(e)) {
            let t = k(e);
            return (t && t.default) || 0;
          }
          return ((e = ti.has(e) ? e : (0, tt.I)(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, ts.x)(t, e, i);
        }
        build(t, e, i) {
          (0, te.B)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          for (let i in (Q(t, e, void 0, n), e.attrs))
            t.setAttribute(ti.has(i) ? i : (0, tt.I)(i), e.attrs[i]);
        }
        mount(t) {
          ((this.isSVGTag = (0, tn.n)(t.tagName)), super.mount(t));
        }
      }
      var ta = i(175);
      let to = (t, e) =>
        (0, ta.Q)(t)
          ? new tr(e)
          : new J(e, { allowProjection: t !== n.Fragment });
    },
    1335: (t, e, i) => {
      i.d(e, { u: () => s });
      var n = i(9064);
      let s = {
        test: (0, i(5920).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            s = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (s = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (s = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (s += s)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    1442: (t, e, i) => {
      i.d(e, { k: () => n });
      function n(t, e, i, s = { passive: !0 }) {
        return (t.addEventListener(e, i, s), () => t.removeEventListener(e, i));
      }
    },
    1557: (t, e, i) => {
      i.d(e, { a: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    1586: (t, e, i) => {
      i.d(e, { F: () => r, e: () => s });
      var n = i(2960);
      function s(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let r = (t) => (e) => (0, n.M)(e) && t(e, s(e));
    },
    1765: (t, e, i) => {
      i.d(e, { V: () => n });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    1786: (t, e, i) => {
      i.d(e, { ge: () => a, xU: () => s });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        s = () => ({ x: n(), y: n() }),
        r = () => ({ min: 0, max: 0 }),
        a = () => ({ x: r(), y: r() });
    },
    2290: (t, e, i) => {
      i.d(e, { X: () => n });
      class n {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
    },
    2662: (t, e, i) => {
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function s({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function r(t) {
        return (
          s(t) ||
          a(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function a(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, { HD: () => r, vF: () => a, vk: () => s });
    },
    2912: (t, e, i) => {
      i.d(e, { n: () => P });
      var n = i(9515),
        s = i(6017);
      function r(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function a(t) {
        return !("touch" === t.pointerType || (0, s.D)());
      }
      var o = i(1586),
        l = i(2290);
      function u(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = s["onHover" + i];
        r && n.Gt.postRender(() => r(e, (0, o.e)(e)));
      }
      class h extends l.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, o] = r(t, i),
                l = (t) => {
                  if (!a(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let r = (t) => {
                    a(t) && (n(t), i.removeEventListener("pointerleave", r));
                  };
                  i.addEventListener("pointerleave", r, s);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", l, s);
                }),
                o
              );
            })(
              t,
              (t, e) => (
                u(this.node, e, "Start"),
                (t) => u(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      var d = i(3191),
        p = i(1442);
      class c extends l.X {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, d.F)(
            (0, p.k)(this.node.current, "focus", () => this.onFocus()),
            (0, p.k)(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      let m = (t, e) => !!e && (t === e || m(t, e.parentElement));
      var f = i(2960);
      let v = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        y = new WeakSet();
      function g(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function b(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let w = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = g(() => {
          if (y.has(i)) return;
          b(i, "down");
          let t = g(() => {
            b(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => b(i, "cancel"), e));
        });
        (i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e,
          ));
      };
      function T(t) {
        return (0, f.M)(t) && !(0, s.D)();
      }
      function S(t, e, i) {
        let { props: s } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          s.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = s["onTap" + ("End" === i ? "" : i)];
        r && n.Gt.postRender(() => r(e, (0, o.e)(e)));
      }
      class V extends l.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, a] = r(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!T(t) || y.has(n)) return;
                  y.add(n);
                  let r = e(n, t),
                    a = (t, e) => {
                      (window.removeEventListener("pointerup", o),
                        window.removeEventListener("pointercancel", l),
                        T(t) &&
                          y.has(n) &&
                          (y.delete(n),
                          "function" == typeof r && r(t, { success: e })));
                    },
                    o = (t) => {
                      a(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          m(n, t.target),
                      );
                    },
                    l = (t) => {
                      a(t, !1);
                    };
                  (window.addEventListener("pointerup", o, s),
                    window.addEventListener("pointercancel", l, s));
                };
              return (
                n.forEach((t) => {
                  if (
                    ((i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      s,
                    ),
                    t instanceof HTMLElement)
                  )
                    (t.addEventListener("focus", (t) => w(t, s)),
                      !v.has(t.tagName) &&
                        -1 === t.tabIndex &&
                        !t.hasAttribute("tabindex") &&
                        (t.tabIndex = 0));
                }),
                a
              );
            })(
              t,
              (t, e) => (
                S(this.node, e, "Start"),
                (t, { success: e }) => S(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let A = new WeakMap(),
        x = new WeakMap(),
        M = (t) => {
          let e = A.get(t.target);
          e && e(t);
        },
        k = (t) => {
          t.forEach(M);
        },
        C = { some: 0, all: 1 };
      class F extends l.X {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: s } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : C[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              x.has(i) || x.set(i, {});
              let n = x.get(i),
                s = JSON.stringify(e);
              return (
                n[s] || (n[s] = new IntersectionObserver(k, { root: t, ...e })),
                n[s]
              );
            })(e);
            return (
              A.set(t, i),
              n.observe(t),
              () => {
                (A.delete(t), n.unobserve(t));
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), s && !e && this.hasEnteredView)
            )
              return;
            (e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              r = e ? i : n;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let P = {
        inView: { Feature: F },
        tap: { Feature: V },
        focus: { Feature: c },
        hover: { Feature: h },
      };
    },
    2923: (t, e, i) => {
      i.d(e, { f: () => n });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    2960: (t, e, i) => {
      i.d(e, { M: () => n });
      let n = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    3191: (t, e, i) => {
      i.d(e, { F: () => s });
      let n = (t, e) => (i) => e(t(i)),
        s = (...t) => t.reduce(n);
    },
    3210: (t, e, i) => {
      i.d(e, { k: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    3704: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = { layout: 0, mainThread: 0, waapi: 0 };
    },
    3757: (t, e, i) => {
      i.d(e, { L: () => a, m: () => r });
      var n = i(8588),
        s = i(6147);
      function r(t, e) {
        return (0, n.FY)((0, n.bS)(t.getBoundingClientRect(), e));
      }
      function a(t, e, i) {
        let n = r(t, i),
          { scroll: a } = e;
        return (
          a && ((0, s.Ql)(n.x, a.offset.x), (0, s.Ql)(n.y, a.offset.y)),
          n
        );
      }
    },
    4160: (t, e, i) => {
      i.d(e, { I: () => p, r: () => d });
      let n = (t) => (180 * t) / Math.PI,
        s = (t) => a(n(Math.atan2(t[1], t[0]))),
        r = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: s,
          rotateZ: s,
          skewX: (t) => n(Math.atan(t[1])),
          skewY: (t) => n(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        a = (t) => ((t %= 360) < 0 && (t += 360), t),
        o = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        l = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        u = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: o,
          scaleY: l,
          scale: (t) => (o(t) + l(t)) / 2,
          rotateX: (t) => a(n(Math.atan2(t[6], t[5]))),
          rotateY: (t) => a(n(Math.atan2(-t[2], t[0]))),
          rotateZ: s,
          rotate: s,
          skewX: (t) => n(Math.atan(t[4])),
          skewY: (t) => n(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function h(t) {
        return +!!t.includes("scale");
      }
      function d(t, e) {
        let i, n;
        if (!t || "none" === t) return h(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) ((i = u), (n = s));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = r), (n = e));
        }
        if (!n) return h(e);
        let a = i[e],
          o = n[1].split(",").map(c);
        return "function" == typeof a ? a(o) : o[a];
      }
      let p = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return d(i, e);
      };
      function c(t) {
        return parseFloat(t.trim());
      }
    },
    4180: (t, e, i) => {
      i.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    4261: (t, e, i) => {
      let n;
      i.d(e, { k: () => o });
      var s = i(3387),
        r = i(9515);
      function a() {
        n = void 0;
      }
      let o = {
        now: () => (
          void 0 === n &&
            o.set(
              r.uv.isProcessing || s.W.useManualTiming
                ? r.uv.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(a));
        },
      };
    },
    4272: (t, e, i) => {
      i.d(e, { y: () => a });
      var n = i(1335),
        s = i(8476),
        r = i(9064);
      let a = {
        test: (t) => r.B.test(t) || n.u.test(t) || s.V.test(t),
        parse: (t) =>
          r.B.test(t)
            ? r.B.parse(t)
            : s.V.test(t)
              ? s.V.parse(t)
              : n.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
              ? r.B.transform(t)
              : s.V.transform(t),
      };
    },
    4542: (t, e, i) => {
      i.d(e, { $: () => n, V: () => s });
      let n = () => {},
        s = () => {};
    },
    5626: (t, e, i) => {
      i.d(e, { v: () => s });
      var n = i(6668);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.Kq)(this.subscriptions, t),
            () => (0, n.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    5818: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    5920: (t, e, i) => {
      i.d(e, { $: () => r, q: () => a });
      var n = i(614);
      let s =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        r = (t, e) => (i) =>
          !!(
            ("string" == typeof i && s.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        a = (t, e, i) => (s) => {
          if ("string" != typeof s) return s;
          let [r, a, o, l] = s.match(n.S);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    6017: (t, e, i) => {
      i.d(e, { D: () => s, I: () => n });
      let n = { x: !1, y: !1 };
      function s() {
        return n.x || n.y;
      }
    },
    6147: (t, e, i) => {
      i.d(e, {
        OU: () => u,
        Ql: () => h,
        Ww: () => p,
        hq: () => r,
        o4: () => l,
      });
      var n = i(3210),
        s = i(2662);
      function r(t, e, i) {
        return i + e * (t - i);
      }
      function a(t, e, i, n, s) {
        return (void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e);
      }
      function o(t, e = 0, i = 1, n, s) {
        ((t.min = a(t.min, e, i, n, s)), (t.max = a(t.max, e, i, n, s)));
      }
      function l(t, { x: e, y: i }) {
        (o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, i.translate, i.scale, i.originPoint));
      }
      function u(t, e, i, n = !1) {
        let r,
          a,
          o = i.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (r = i[u]).projectionDelta;
            let { visualElement: o } = r.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (n &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                p(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              n && (0, s.HD)(r.latestValues) && p(t, r.latestValues));
          }
          (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
        }
      }
      function h(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function d(t, e, i, s, r = 0.5) {
        let a = (0, n.k)(t.min, t.max, r);
        o(t, e, i, a, s);
      }
      function p(t, e) {
        (d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
    },
    6333: (t, e, i) => {
      i.d(e, { g: () => r });
      var n = i(3387),
        s = i(4570);
      function r(t, e) {
        let i = t.getValue("willChange");
        if ((0, s.S)(i) && i.add) return i.add(e);
        if (!i && n.W.WillChange) {
          let i = new n.W.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
    },
    6666: (t, e, i) => {
      i.d(e, { W: () => F });
      var n = i(6340),
        s = i(2735);
      function r(t, e, i) {
        let n = t.getProps();
        return (0, s.a)(n, e, void 0 !== i ? i : n.custom, t);
      }
      var a = i(8777),
        o = i(9515),
        l = i(8109),
        u = i(98);
      let h = (t) => Array.isArray(t);
      var d = i(6333),
        p = i(6926),
        c = i(9703);
      function m(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        let {
          transition: f = t.getDefaultTransition(),
          transitionEnd: v,
          ...y
        } = e;
        n && (f = n);
        let g = [],
          b = s && t.animationState && t.animationState.getState()[s];
        for (let e in y) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            s = y[e];
          if (
            void 0 === s ||
            (b &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(b, e))
          )
            continue;
          let r = { delay: i, ...(0, a.r)(f || {}, e) },
            u = n.get();
          if (
            void 0 !== u &&
            !n.isAnimating &&
            !Array.isArray(s) &&
            s === u &&
            !r.velocity
          )
            continue;
          let h = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, p.P)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, o.Gt);
              null !== t && ((r.startTime = t), (h = !0));
            }
          }
          ((0, d.g)(t, e),
            n.start(
              (0, c.f)(
                e,
                n,
                s,
                t.shouldReduceMotion && l.$.has(e) ? { type: !1 } : r,
                t,
                h,
              ),
            ));
          let m = n.animation;
          m && g.push(m);
        }
        return (
          v &&
            Promise.all(g).then(() => {
              o.Gt.update(() => {
                v &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...s
                    } = r(t, e) || {};
                    for (let e in (s = { ...s, ...i })) {
                      var a;
                      let i = h((a = s[e])) ? a[a.length - 1] || 0 : a;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, u.OQ)(i));
                    }
                  })(t, v);
              });
            }),
          g
        );
      }
      function f(t, e, i = {}) {
        let n = r(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let a = n ? () => Promise.all(m(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (t, e, i = 0, n = 0, s = 1, r) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * n,
                      l = 1 === s ? (t = 0) => t * n : (t = 0) => o - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(v)
                        .forEach((t, n) => {
                          (t.notify("AnimationStart", e),
                            a.push(
                              f(t, e, { ...r, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            ));
                        }),
                      Promise.all(a)
                    );
                  })(t, e, r + n, a, o, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([a(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [a, o] : [o, a];
          return t().then(() => e());
        }
      }
      function v(t, e) {
        return t.sortNodePosition(e);
      }
      function y(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var g = i(5305),
        b = i(8312);
      let w = b._.length,
        T = [...b.U].reverse(),
        S = b.U.length;
      function V(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function A() {
        return {
          animate: V(!0),
          whileInView: V(),
          whileHover: V(),
          whileTap: V(),
          whileDrag: V(),
          whileFocus: V(),
          exit: V(),
        };
      }
      var x = i(2290);
      class M extends x.X {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => f(t, e, i)));
                          else if ("string" == typeof e) n = f(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? r(t, e, i.custom) : e;
                            n = Promise.all(m(t, s, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = A(),
                  s = !0,
                  a = (e) => (i, n) => {
                    let s = r(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < w; t++) {
                          let n = b._[t],
                            s = e.props[n];
                          ((0, g.w)(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    d = [],
                    p = new Set(),
                    c = {},
                    m = 1 / 0;
                  for (let e = 0; e < S; e++) {
                    var f, v;
                    let r = T[e],
                      b = i[r],
                      w = void 0 !== l[r] ? l[r] : u[r],
                      S = (0, g.w)(w),
                      V = r === o ? b.isActive : null;
                    !1 === V && (m = e);
                    let A = w === u[r] && w !== l[r] && S;
                    if (
                      (A && s && t.manuallyAnimateOnMount && (A = !1),
                      (b.protectedKeys = { ...c }),
                      (!b.isActive && null === V) ||
                        (!w && !b.prevProp) ||
                        (0, n.N)(w) ||
                        "boolean" == typeof w)
                    )
                      continue;
                    let x =
                        ((f = b.prevProp),
                        "string" == typeof (v = w)
                          ? v !== f
                          : !!Array.isArray(v) && !y(v, f)),
                      M =
                        x || (r === o && b.isActive && !A && S) || (e > m && S),
                      k = !1,
                      C = Array.isArray(w) ? w : [w],
                      F = C.reduce(a(r), {});
                    !1 === V && (F = {});
                    let { prevResolvedValues: P = {} } = b,
                      E = { ...P, ...F },
                      O = (e) => {
                        ((M = !0),
                          p.has(e) && ((k = !0), p.delete(e)),
                          (b.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = F[t],
                        i = P[t];
                      if (c.hasOwnProperty(t)) continue;
                      let n = !1;
                      (h(e) && h(i) ? y(e, i) : e === i)
                        ? void 0 !== e && p.has(t)
                          ? O(t)
                          : (b.protectedKeys[t] = !0)
                        : null != e
                          ? O(t)
                          : p.add(t);
                    }
                    ((b.prevProp = w),
                      (b.prevResolvedValues = F),
                      b.isActive && (c = { ...c, ...F }),
                      s && t.blockInitialAnimation && (M = !1));
                    let I = !(A && x) || k;
                    M &&
                      I &&
                      d.push(
                        ...C.map((t) => ({
                          animation: t,
                          options: { type: r },
                        })),
                      );
                  }
                  if (p.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let i = r(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (p.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      (s && (s.liveStyle = !0), (e[i] = n ?? null));
                    }),
                      d.push({ animation: e }));
                  }
                  let V = !!d.length;
                  return (
                    s &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (V = !1),
                    (s = !1),
                    V ? e(d) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n),
                    ),
                      (i[e].isActive = n));
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    ((i = A()), (s = !0));
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, n.N)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let k = 0;
      class C extends x.X {
        constructor() {
          (super(...arguments), (this.id = k++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      let F = { animation: { Feature: M }, exit: { Feature: C } };
    },
    6668: (t, e, i) => {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => s, Kq: () => n });
    },
    6926: (t, e, i) => {
      i.d(e, { P: () => s });
      var n = i(1788);
      function s(t) {
        return t.props[n.n];
      }
    },
    7215: (t, e, i) => {
      i.d(e, { X: () => s, f: () => n });
      let n = (t) => 1e3 * t,
        s = (t) => t / 1e3;
    },
    7322: (t, e, i) => {
      i.d(e, { h: () => p, q: () => d });
      var n = i(280),
        s = i(9515);
      let r = new Set(),
        a = !1,
        o = !1,
        l = !1;
      function u() {
        if (o) {
          let t = Array.from(r).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (0, n.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((o = !1), (a = !1), r.forEach((t) => t.complete(l)), r.clear());
      }
      function h() {
        r.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (o = !0));
        });
      }
      function d() {
        ((l = !0), h(), u(), (l = !1));
      }
      class p {
        constructor(t, e, i, n, s, r = !1) {
          ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r));
        }
        scheduleResolve() {
          ((this.isScheduled = !0),
            this.isAsync
              ? (r.add(this),
                a || ((a = !0), s.Gt.read(h), s.Gt.resolveKeyframes(u)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let s = n?.get(),
              r = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (i && e) {
              let n = i.readValue(e, r);
              null != n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]));
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            r.delete(this));
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), r.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    7712: (t, e, i) => {
      i.d(e, { po: () => r, tn: () => o, yT: () => a });
      var n = i(1765),
        s = i(4180);
      let r = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, s.G)(r),
        o = (0, n.V)(r);
    },
    8109: (t, e, i) => {
      i.d(e, { $: () => n });
      let n = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...i(18).U,
      ]);
    },
    8476: (t, e, i) => {
      i.d(e, { V: () => o });
      var n = i(7887),
        s = i(4158),
        r = i(1557),
        a = i(5920);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          s.KN.transform((0, r.a)(e)) +
          ", " +
          s.KN.transform((0, r.a)(i)) +
          ", " +
          (0, r.a)(n.X4.transform(a)) +
          ")",
      };
    },
    8588: (t, e, i) => {
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function s({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function r(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, { FY: () => n, bS: () => r, pA: () => s });
    },
    8777: (t, e, i) => {
      i.d(e, { r: () => n });
      function n(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
    },
    9064: (t, e, i) => {
      i.d(e, { B: () => u });
      var n = i(1297),
        s = i(7887),
        r = i(1557),
        a = i(5920);
      let o = (t) => (0, n.q)(0, 255, t),
        l = { ...s.ai, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, r.a)(s.X4.transform(n)) +
            ")",
        };
    },
    9515: (t, e, i) => {
      i.d(e, { Gt: () => s, PP: () => o, WG: () => r, uv: () => a });
      var n = i(9827);
      let {
        schedule: s,
        cancel: r,
        state: a,
        steps: o,
      } = (0, i(8437).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0,
      );
    },
    9703: (t, e, i) => {
      i.d(e, { f: () => tW });
      var n = i(8777),
        s = i(9515),
        r = i(3387),
        a = i(9827),
        o = i(4261),
        l = i(3191),
        u = i(1297),
        h = i(7215),
        d = i(3704),
        p = i(4542),
        c = i(8606),
        m = i(4272),
        f = i(10),
        v = i(1335),
        y = i(8476);
      function g(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var b = i(9064);
      function w(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      var T = i(3210);
      let S = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        V = [v.u, b.B, y.V],
        A = (t) => V.find((e) => e.test(t));
      function x(t) {
        let e = A(t);
        if (
          ((0, p.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === y.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let s = 0,
                r = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - n;
                ((s = g(o, n, t + 1 / 3)),
                  (r = g(o, n, t)),
                  (a = g(o, n, t - 1 / 3)));
              } else s = r = a = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let M = (t, e) => {
          let i = x(t),
            n = x(e);
          if (!i || !n) return w(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = S(i.red, n.red, t)),
            (s.green = S(i.green, n.green, t)),
            (s.blue = S(i.blue, n.blue, t)),
            (s.alpha = (0, T.k)(i.alpha, n.alpha, t)),
            b.B.transform(s)
          );
        },
        k = new Set(["none", "hidden"]);
      function C(t, e) {
        return (i) => (0, T.k)(t, e, i);
      }
      function F(t) {
        return "number" == typeof t
          ? C
          : "string" == typeof t
            ? (0, c.p)(t)
              ? w
              : m.y.test(t)
                ? M
                : O
            : Array.isArray(t)
              ? P
              : "object" == typeof t
                ? m.y.test(t)
                  ? M
                  : E
                : w;
      }
      function P(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => F(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function E(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = F(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let O = (t, e) => {
        let i = f.f.createTransformer(e),
          n = (0, f.V)(t),
          s = (0, f.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (k.has(t) && !s.values.length) || (k.has(e) && !n.values.length)
            ? (function (t, e) {
                return k.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, l.F)(
                P(
                  (function (t, e) {
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let r = e.types[s],
                        a = t.indexes[r][n[r]],
                        o = t.values[a] ?? 0;
                      ((i[s] = o), n[r]++);
                    }
                    return i;
                  })(n, s),
                  s.values,
                ),
                i,
              )
          : ((0, p.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            w(t, e));
      };
      function I(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, T.k)(t, e, i)
          : F(t)(t, e);
      }
      let D = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => s.Gt.update(e, !0),
            stop: () => (0, s.WG)(e),
            now: () => (s.uv.isProcessing ? s.uv.timestamp : o.k.now()),
          };
        },
        N = (t, e, i = 10) => {
          let n = "",
            s = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < s; e++) n += t(e / (s - 1)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function q(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) ((e += 50), (i = t.next(e)));
        return e >= 2e4 ? 1 / 0 : e;
      }
      var B = i(2923);
      function $(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, B.f)(i - t(n), e - n);
      }
      let R = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function X(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let L = ["duration", "bounce"],
        W = ["stiffness", "damping", "mass"];
      function K(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function j(t = R.visualDuration, e = R.bounce) {
        let i,
          n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: s, restDelta: r } = n,
          a = n.keyframes[0],
          o = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: d,
            damping: c,
            mass: m,
            duration: f,
            velocity: v,
            isResolvedFromDuration: y,
          } = (function (t) {
            let e = {
              velocity: R.velocity,
              stiffness: R.stiffness,
              damping: R.damping,
              mass: R.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!K(t, W) && K(t, L))
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  s = 2 * (0, u.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: R.mass, stiffness: n, damping: s };
              } else {
                let i = (function ({
                  duration: t = R.duration,
                  bounce: e = R.bounce,
                  velocity: i = R.velocity,
                  mass: n = R.mass,
                }) {
                  let s, r;
                  (0, p.$)(
                    t <= (0, h.f)(R.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let a = 1 - e;
                  ((a = (0, u.q)(R.minDamping, R.maxDamping, a)),
                    (t = (0, u.q)(R.minDuration, R.maxDuration, (0, h.X)(t))),
                    a < 1
                      ? ((s = (e) => {
                          let n = e * a,
                            s = n * t;
                          return 0.001 - ((n - i) / X(e, a)) * Math.exp(-s);
                        }),
                        (r = (e) => {
                          let n = e * a * t,
                            r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-n),
                            l = X(Math.pow(e, 2), a);
                          return (
                            ((n * i + i - r) *
                              o *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (r = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let o = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(s, r, 5 / t);
                  if (((t = (0, h.f)(t)), isNaN(o)))
                    return {
                      stiffness: R.stiffness,
                      damping: R.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(o, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: R.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...n, velocity: -(0, h.X)(n.velocity || 0) }),
          g = v || 0,
          b = c / (2 * Math.sqrt(d * m)),
          w = o - a,
          T = (0, h.X)(Math.sqrt(d / m)),
          S = 5 > Math.abs(w);
        if (
          (s || (s = S ? R.restSpeed.granular : R.restSpeed.default),
          r || (r = S ? R.restDelta.granular : R.restDelta.default),
          b < 1)
        ) {
          let t = X(T, b);
          i = (e) =>
            o -
            Math.exp(-b * T * e) *
              (((g + b * T * w) / t) * Math.sin(t * e) + w * Math.cos(t * e));
        } else if (1 === b)
          i = (t) => o - Math.exp(-T * t) * (w + (g + T * w) * t);
        else {
          let t = T * Math.sqrt(b * b - 1);
          i = (e) => {
            let i = Math.exp(-b * T * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((g + b * T * w) * Math.sinh(n) + t * w * Math.cosh(n))) / t
            );
          };
        }
        let V = {
          calculatedDuration: (y && f) || null,
          next: (t) => {
            let e = i(t);
            if (y) l.done = t >= f;
            else {
              let n = 0 === t ? g : 0;
              b < 1 && (n = 0 === t ? (0, h.f)(g) : $(i, t, e));
              let a = Math.abs(o - e) <= r;
              l.done = Math.abs(n) <= s && a;
            }
            return ((l.value = l.done ? o : e), l);
          },
          toString: () => {
            let t = Math.min(q(V), 2e4),
              e = N((e) => V.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return V;
      }
      function G({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d,
          p,
          c = t[0],
          m = { done: !1, value: c },
          f = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === o
              ? l
              : void 0 === l
                ? o
                : Math.abs(o - t) < Math.abs(l - t)
                  ? o
                  : l,
          y = i * e,
          g = c + y,
          b = void 0 === a ? g : a(g);
        b !== g && (y = b - c);
        let w = (t) => -y * Math.exp(-t / n),
          T = (t) => b + w(t),
          S = (t) => {
            let e = w(t),
              i = T(t);
            ((m.done = Math.abs(e) <= u), (m.value = m.done ? b : i));
          },
          V = (t) => {
            f(m.value) &&
              ((d = t),
              (p = j({
                keyframes: [m.value, v(m.value)],
                velocity: $(T, t, m.value),
                damping: s,
                stiffness: r,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          V(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== d || ((e = !0), S(t), V(t)),
              void 0 !== d && t >= d)
                ? p.next(t - d)
                : (e || S(t), m);
            },
          }
        );
      }
      j.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            s = Math.min(q(n), 2e4);
          return {
            type: "keyframes",
            ease: (t) => n.next(s * t).value / e,
            duration: (0, h.X)(s),
          };
        })(t, 100, j);
        return (
          (t.ease = e.ease),
          (t.duration = (0, h.f)(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let U = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function Y(t, e, i, n) {
        if (t === e && i === n) return a.l;
        let s = (e) =>
          (function (t, e, i, n, s) {
            let r,
              a,
              o = 0;
            do (r = U((a = e + (i - e) / 2), n, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(r) > 1e-7 && ++o < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : U(s(t), e, n));
      }
      let _ = Y(0.42, 0, 1, 1),
        H = Y(0, 0, 0.58, 1),
        z = Y(0.42, 0, 0.58, 1),
        Q = (t) => Array.isArray(t) && "number" != typeof t[0];
      var Z = i(1765),
        J = i(4180);
      let tt = Y(0.33, 1.53, 0.69, 0.99),
        te = (0, J.G)(tt),
        ti = (0, Z.V)(te),
        tn = (t) =>
          (t *= 2) < 1 ? 0.5 * te(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var ts = i(7712);
      let tr = (t) => Array.isArray(t) && "number" == typeof t[0],
        ta = {
          linear: a.l,
          easeIn: _,
          easeInOut: z,
          easeOut: H,
          circIn: ts.po,
          circInOut: ts.tn,
          circOut: ts.yT,
          backIn: te,
          backInOut: ti,
          backOut: tt,
          anticipate: tn,
        },
        to = (t) => "string" == typeof t,
        tl = (t) => {
          if (tr(t)) {
            (0, p.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, n, s] = t;
            return Y(e, i, n, s);
          }
          return to(t)
            ? ((0, p.V)(void 0 !== ta[t], `Invalid easing type '${t}'`), ta[t])
            : t;
        };
      var tu = i(5818);
      function th({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let s = Q(n) ? n.map(tl) : tl(n),
          o = { done: !1, value: e[0] },
          h = (function (t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
            let o = t.length;
            if (
              ((0, p.V)(
                o === e.length,
                "Both input and output ranges must be the same length",
              ),
              1 === o)
            )
              return () => e[0];
            if (2 === o && e[0] === e[1]) return () => e[1];
            let h = t[0] === t[1];
            t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let d = (function (t, e, i) {
                let n = [],
                  s = i || r.W.mix || I,
                  o = t.length - 1;
                for (let i = 0; i < o; i++) {
                  let r = s(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || a.l : e;
                    r = (0, l.F)(t, r);
                  }
                  n.push(r);
                }
                return n;
              })(e, n, s),
              c = d.length,
              m = (i) => {
                if (h && i < t[0]) return e[0];
                let n = 0;
                if (c > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let s = (0, tu.q)(t[n], t[n + 1], i);
                return d[n](s);
              };
            return i ? (e) => m((0, u.q)(t[0], t[o - 1], e)) : m;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let s = (0, tu.q)(0, e, n);
                        t.push((0, T.k)(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || z).splice(0, e.length - 1),
            },
          );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = h(e)), (o.done = e >= t), o),
        };
      }
      let td = (t) => null !== t;
      function tp(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
        let r = t.filter(td),
          a = s < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return a && void 0 !== n ? n : r[a];
      }
      let tc = { decay: G, inertia: G, tween: th, keyframes: th, spring: j };
      function tm(t) {
        "string" == typeof t.type && (t.type = tc[t.type]);
      }
      class tf {
        constructor() {
          ((this.count = 0), this.updateFinished());
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          (this.count++,
            (this._finished = new Promise((t) => {
              this.resolve = t;
            })));
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let tv = (t) => t / 100;
      class ty extends tf {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              if (
                (t && t.updatedAt !== o.k.now() && this.tick(o.k.now()),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            }),
            d.q.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause());
        }
        initAnimation() {
          let { options: t } = this;
          tm(t);
          let {
              type: e = th,
              repeat: i = 0,
              repeatDelay: n = 0,
              repeatType: s,
              velocity: r = 0,
            } = t,
            { keyframes: a } = t,
            o = e || th;
          o !== th &&
            "number" != typeof a[0] &&
            ((this.mixKeyframes = (0, l.F)(tv, I(a[0], a[1]))), (a = [0, 100]));
          let u = o({ ...t, keyframes: a });
          ("mirror" === s &&
            (this.mirroredGenerator = o({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -r,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = q(u)));
          let { calculatedDuration: h } = u;
          ((this.calculatedDuration = h),
            (this.resolvedDuration = h + n),
            (this.totalDuration = this.resolvedDuration * (i + 1) - n),
            (this.generator = u));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: s,
            mirroredGenerator: r,
            resolvedDuration: a,
            calculatedDuration: o,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: h,
            repeat: d,
            repeatType: p,
            repeatDelay: c,
            type: m,
            onUpdate: f,
            finalKeyframe: v,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            g = this.playbackSpeed >= 0 ? y < 0 : y > n;
          ((this.currentTime = Math.max(y, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n));
          let b = this.currentTime,
            w = i;
          if (d) {
            let t = Math.min(this.currentTime, n) / a,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), c && (i -= c / a))
                  : "mirror" === p && (w = r)),
              (b = (0, u.q)(0, 1, i) * a));
          }
          let T = g ? { done: !1, value: h[0] } : w.next(b);
          s && (T.value = s(T.value));
          let { done: S } = T;
          g ||
            null === o ||
            (S =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let V =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            V && m !== G && (T.value = tp(h, this.options, v, this.speed)),
            f && f(T.value),
            V && this.finish(),
            T
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, h.X)(this.calculatedDuration);
        }
        get time() {
          return (0, h.X)(this.currentTime);
        }
        set time(t) {
          ((t = (0, h.f)(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(o.k.now());
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t),
            e && (this.time = (0, h.X)(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = D, onPlay: e, startTime: i } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))), e && e());
          let n = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = n))
            : null !== this.holdTime
              ? (this.startTime = n - this.holdTime)
              : this.startTime || (this.startTime = i ?? n),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(o.k.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.teardown(), (this.state = "finished"));
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown());
        }
        teardown() {
          (this.notifyFinished(),
            (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            d.q.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            t.observe(this)
          );
        }
      }
      var tg = i(7322);
      let tb = (t) => t.startsWith("--");
      function tw(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let tT = tw(() => void 0 !== window.ScrollTimeline);
      var tS = i(4744);
      let tV = {},
        tA = (function (t, e) {
          let i = tw(t);
          return () => tV[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tx = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tM = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tx([0, 0.65, 0.55, 1]),
          circOut: tx([0.55, 0, 1, 0.45]),
          backIn: tx([0.31, 0.01, 0.66, -0.59]),
          backOut: tx([0.33, 1.53, 0.69, 0.99]),
        };
      function tk(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class tC extends tf {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: s,
            allowFlatten: r = !1,
            finalKeyframe: a,
            onComplete: o,
          } = t;
          ((this.isPseudoElement = !!s),
            (this.allowFlatten = r),
            (this.options = t),
            (0, p.V)(
              "string" != typeof t.type,
              'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?',
            ));
          let l = (function ({ type: t, ...e }) {
            return tk(t) && tA()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: a = "loop",
              ease: o = "easeOut",
              times: l,
            } = {},
            u,
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let p = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? tA()
                    ? N(e, i)
                    : "ease-out"
                  : tr(e)
                    ? tx(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || tM.easeOut)
                      : tM[e];
            })(o, s);
            (Array.isArray(p) && (h.easing = p), tS.Q.value && d.q.waapi++);
            let c = {
              delay: n,
              duration: s,
              easing: Array.isArray(p) ? "linear" : p,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            };
            u && (c.pseudoElement = u);
            let m = t.animate(h, c);
            return (
              tS.Q.value &&
                m.finished.finally(() => {
                  d.q.waapi--;
                }),
              m
            );
          })(e, i, n, l, s)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !s)) {
                let t = tp(n, this.options, a, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, i) {
                      tb(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
                    })(e, i, t),
                  this.animation.cancel());
              }
              (o?.(), this.notifyFinished());
            }),
            (this.animation.oncancel = () => this.notifyFinished()));
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" === t ||
            "finished" === t ||
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          let t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, h.X)(Number(t));
        }
        get time() {
          return (0, h.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          ((this.finishedTime = null),
            (this.animation.currentTime = (0, h.f)(t)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && tT())
            ? ((this.animation.timeline = t), a.l)
            : e(this);
        }
      }
      let tF = { anticipate: tn, backInOut: ti, circInOut: ts.tn };
      class tP extends tC {
        constructor(t) {
          (!(function (t) {
            "string" == typeof t.ease && t.ease in tF && (t.ease = tF[t.ease]);
          })(t),
            tm(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: s,
            ...r
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let a = new ty({ ...r, autoplay: !1 }),
            o = (0, h.f)(this.finishedTime ?? this.time);
          (e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10),
            a.stop());
        }
      }
      let tE = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (f.f.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        tO = new Set(["opacity", "clipPath", "filter", "transform"]),
        tI = tw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class tD extends tf {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: r = "loop",
          keyframes: a,
          name: l,
          motionValue: u,
          element: h,
          ...d
        }) {
          (super(),
            (this.stop = () => {
              this._animation
                ? (this._animation.stop(), this.stopTimeline?.())
                : this.keyframeResolver?.cancel();
            }),
            (this.createdAt = o.k.now()));
          let p = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: r,
              name: l,
              motionValue: u,
              element: h,
              ...d,
            },
            c = h?.KeyframeResolver || tg.h;
          ((this.keyframeResolver = new c(
            a,
            (t, e, i) => this.onKeyframesResolved(t, e, p, !i),
            l,
            u,
            h,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: s,
            type: l,
            velocity: u,
            delay: h,
            isHandoff: d,
            onUpdate: c,
          } = i;
          ((this.resolvedAt = o.k.now()),
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                a = tE(s, e),
                o = tE(r, e);
              return (
                (0, p.$)(
                  a === o,
                  `You are trying to animate ${e} from "${s}" to "${r}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${r} via the \`style\` property.`,
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || tk(i)) && n))
              );
            })(t, s, l, u) &&
              ((r.W.instantAnimations || !h) && c?.(tp(t, i, e)),
              (t[0] = t[t.length - 1]),
              (i.duration = 0),
              (i.repeat = 0)));
          let m = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            f =
              !d &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: s,
                  damping: r,
                  type: a,
                } = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                  return !1;
                let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
                return (
                  tI() &&
                  i &&
                  tO.has(i) &&
                  ("transform" !== i || !l) &&
                  !o &&
                  !n &&
                  "mirror" !== s &&
                  0 !== r &&
                  "inertia" !== a
                );
              })(m)
                ? new tP({ ...m, element: m.motionValue.owner.current })
                : new ty(m);
          (f.finished.then(() => this.notifyFinished()).catch(a.l),
            this.pendingTimeline &&
              ((this.stopTimeline = f.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = f));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (this._animation || (0, tg.q)(), this._animation);
        }
        get duration() {
          return this.animation.duration;
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
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
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
          this.animation.cancel();
        }
      }
      let tN = (t) => null !== t;
      var tq = i(18);
      let tB = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t$ = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tR = { type: "keyframes", duration: 0.8 },
        tX = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tL = (t, { keyframes: e }) =>
          e.length > 2
            ? tR
            : tq.f.has(t)
              ? t.startsWith("scale")
                ? t$(e[1])
                : tB
              : tX,
        tW =
          (t, e, i, a = {}, o, l) =>
          (u) => {
            let d = (0, n.r)(a, t) || {},
              p = d.delay || a.delay || 0,
              { elapsed: c = 0 } = a;
            c -= (0, h.f)(p);
            let m = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...d,
              delay: -c,
              onUpdate: (t) => {
                (e.set(t), d.onUpdate && d.onUpdate(t));
              },
              onComplete: () => {
                (u(), d.onComplete && d.onComplete());
              },
              name: t,
              motionValue: e,
              element: l ? void 0 : o,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: s,
              repeat: r,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(d) && Object.assign(m, tL(t, m)),
              m.duration && (m.duration = (0, h.f)(m.duration)),
              m.repeatDelay && (m.repeatDelay = (0, h.f)(m.repeatDelay)),
              void 0 !== m.from && (m.keyframes[0] = m.from));
            let f = !1;
            if (
              ((!1 !== m.type && (0 !== m.duration || m.repeatDelay)) ||
                ((m.duration = 0), 0 !== m.delay || (f = !0)),
              (r.W.instantAnimations || r.W.skipAnimations) &&
                ((f = !0), (m.duration = 0), (m.delay = 0)),
              (m.allowFlatten = !d.type && !d.ease),
              f && !l && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let s = t.filter(tN),
                  r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                return s[r];
              })(m.keyframes, d);
              if (void 0 !== t) {
                s.Gt.update(() => {
                  (m.onUpdate(t), m.onComplete());
                });
                return;
              }
            }
            return new tD(m);
          };
    },
    9827: (t, e, i) => {
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
  },
]);
