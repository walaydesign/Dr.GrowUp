(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    73: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => c });
      var s = i(5155),
        a = i(192),
        l = i(6766),
        n = i(4356),
        r = i(7141),
        o = i(6874),
        d = i.n(o);
      function c() {
        return (0, s.jsx)("section", {
          className:
            "bg-[#74beff] pt-10 pb-20 md:pt-[60px] md:pb-[100px] lg:pt-20 lg:pb-30",
          "data-theme": "dark",
          children: (0, s.jsx)("div", {
            className: "container mx-auto px-10",
            children: (0, s.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center gap-y-[10px] md:flex-row md:gap-x-[38.4px] lg:gap-x-[10vw]",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(l.default, {
                      src: "/images/recommendation/recommendation-book.png",
                      alt: "recommendation book",
                      width: 386,
                      height: 468.5,
                      className:
                        "animate-float mx-auto w-[280px] [--duration:2s] md:w-[320px] lg:w-[334px]",
                    }),
                    (0, s.jsx)("div", {
                      className: "pl-8",
                      children: (0, s.jsx)(l.default, {
                        src: "/images/recommendation/recommendation-shadow.svg",
                        alt: "book shadow image",
                        width: 258,
                        height: 78,
                        className: "mx-auto w-[223px]",
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  children: (0, s.jsxs)("div", {
                    className: "max-w-[432px]",
                    children: [
                      (0, s.jsx)("h2", {
                        className:
                          "mb-[6px] flex h-[61px] items-center md:mb-2 md:h-[73px] lg:mb-[10px] lg:h-[85px]",
                        children: (0, s.jsx)(n.m.span, {
                          className:
                            "font-impact text-[50px] leading-none font-normal tracking-[0.06em] text-white md:text-[60px] lg:text-[70px]",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0, amount: 0.3 },
                          variants: r.e.heading,
                          children: "Top Picks",
                        }),
                      }),
                      (0, s.jsx)(n.m.h3, {
                        className:
                          "font-noto mb-[14px] text-[24px] leading-[180%] font-medium tracking-[0.28em] text-black md:mb-[18px] lg:mb-[26px] lg:text-[26px]",
                        variants: r.e.subheading,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.3 },
                        children: "身高體重剛剛好",
                      }),
                      (0, s.jsxs)(n.m.div, {
                        variants: r.e.tagline,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.3 },
                        children: [
                          (0, s.jsx)("h4", {
                            className: (0, a.cn)(
                              "font-noto mx-auto mb-[26px] max-w-[694px] text-[15px] leading-[200%] tracking-[0.08em] text-black lg:mb-[30px] lg:text-[16px]",
                            ),
                            children:
                              "本書陪你破解成長焦慮，掌握孩子身高、骨齡、發育指標等成長關鍵。書內提供清楚實用的觀念與解答，幫助爸媽安心陪伴，走出專屬於孩子的成長路線。",
                          }),
                          (0, s.jsx)(d(), {
                            href: "/blog/shop",
                            children: (0, s.jsx)("button", {
                              className:
                                "h-[49px] w-[164px] transform cursor-pointer rounded-[84px] border-[3px] border-white bg-[#FFCB2E] font-semibold transition-all duration-200 hover:scale-110 hover:bg-[#FFDA2B] lg:h-[53px] lg:w-[180px]",
                              children: (0, s.jsx)("span", {
                                className:
                                  "font-noto text-[14px] leading-[160%] font-semibold tracking-[0.16em] lg:text-[16px]",
                                children: "馬上購買",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    192: (e, t, i) => {
      "use strict";
      i.d(t, { Yq: () => l, cn: () => n });
      var s = i(2596),
        a = i(9688);
      let l = (e) => {
        let t = new Date(e);
        return ""
          .concat(t.getFullYear(), "/")
          .concat(String(t.getMonth() + 1).padStart(2, "0"), "/")
          .concat(String(t.getDate()).padStart(2, "0"));
      };
      function n() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return (0, a.QP)((0, s.$)(t));
      }
    },
    436: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => m });
      var s = i(5155),
        a = i(6766),
        l = i(192);
      function n(e) {
        let {
          className: t,
          reverse: i = !1,
          pauseOnHover: a = !1,
          children: n,
          vertical: r = !1,
          repeat: o = 4,
          ...d
        } = e;
        return (0, s.jsx)("div", {
          ...d,
          className: (0, l.cn)(
            "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
            { "flex-row": !r, "flex-col": r },
            t,
          ),
          children: Array(o)
            .fill(0)
            .map((e, t) =>
              (0, s.jsx)(
                "div",
                {
                  className: (0, l.cn)(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    {
                      "animate-marquee flex-row": !r,
                      "animate-marquee-vertical flex-col": r,
                      "group-hover:[animation-play-state:paused]": a,
                      "[animation-direction:reverse]": i,
                    },
                  ),
                  children: n,
                },
                t,
              ),
            ),
        });
      }
      var r = i(4894);
      let o = [
          {
            src: "/images/features/features-image-1.jpg",
            alt: "feature image 1",
            width: 600,
            height: 600,
            className: "w-[210px] md:w-[300px] lg:w-[360px]",
          },
          {
            src: "/images/features/features-image-2.jpg",
            alt: "feature image 2",
            width: 1280,
            height: 720,
            className: "lg:w-[462px] md:w-[384px] w-[270px]",
          },
          {
            src: "/images/features/features-image-3.jpg",
            alt: "feature image 3",
            width: 1040,
            height: 1040,
            className: "w-[210px] md:w-[300px] lg:w-[360px]",
          },
          {
            src: "/images/features/features-image-4.jpg",
            alt: "feature image 4",
            width: 1280,
            height: 720,
            className: "lg:w-[462px] md:w-[384px] w-[270px]",
          },
        ],
        d = [
          {
            src: "/images/features/features-image-5.jpg",
            alt: "feature image 5",
            width: 720,
            height: 720,
            className: "w-[210px] md:w-[300px] lg:w-[360px]",
          },
          {
            src: "/images/features/features-image-8.jpg",
            alt: "feature image 8",
            width: 924,
            height: 520,
            className: "w-[270px] md:w-[384px] lg:w-[462px]",
          },
          {
            src: "/images/features/features-image-7.jpg",
            alt: "feature image 7",
            width: 924,
            height: 520,
            className: "w-[270px] md:w-[384px] lg:w-[462px]",
          },
          {
            src: "/images/features/features-image-6.jpg",
            alt: "feature image 6",
            width: 924,
            height: 520,
            className: "w-[270px] md:w-[384px] lg:w-[462px]",
          },
        ],
        c = [...o, ...d];
      function m() {
        return (0, s.jsxs)(r.default, {
          heading: "Featured",
          subheading: "媒體對談",
          tagline:
            "從 Podcast、廣播電台到電視節目，我曾受邀在《未來 Family》、《親子天下》、《飛碟電台》、《愛+好醫生》等媒體中聊過孩子成長的大小議題。期待未來能分享更多觀點，若你剛剛好在找節目來賓，也歡迎聯繫我！",
          children: [
            (0, s.jsx)("div", {
              className: "mb-0 hidden md:block",
              children: (0, s.jsx)(n, {
                className: "[--duration:80s]",
                children: c.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "flex items-center px-7 md:px-10 lg:px-[50px]",
                      children: (0, s.jsx)(a.default, {
                        src: e.src,
                        alt: e.alt,
                        width: e.width,
                        height: e.height,
                        className: e.className,
                      }),
                    },
                    e.alt,
                  ),
                ),
              }),
            }),
            (0, s.jsx)("div", {
              className: "mb-4 block md:hidden",
              children: (0, s.jsx)(n, {
                className: "[--duration:40s]",
                children: o.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "flex items-center px-7 md:px-10 lg:px-[50px]",
                      children: (0, s.jsx)(a.default, {
                        src: e.src,
                        alt: e.alt,
                        width: e.width,
                        height: e.height,
                        className: e.className,
                      }),
                    },
                    e.alt,
                  ),
                ),
              }),
            }),
            (0, s.jsx)("div", {
              className: "block md:hidden",
              children: (0, s.jsx)(n, {
                className: "[--duration:40s]",
                children: d.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "flex items-center px-7 md:px-10 lg:px-[50px]",
                      children: (0, s.jsx)(a.default, {
                        src: e.src,
                        alt: e.alt,
                        width: e.width,
                        height: e.height,
                        className: e.className,
                      }),
                    },
                    e.alt,
                  ),
                ),
              }),
            }),
          ],
        });
      }
    },
    1058: (e, t, i) => {
      (Promise.resolve().then(i.t.bind(i, 6874, 23)),
        Promise.resolve().then(i.t.bind(i, 3063, 23)),
        Promise.resolve().then(i.bind(i, 2146)),
        Promise.resolve().then(i.bind(i, 255)),
        Promise.resolve().then(i.bind(i, 4894)),
        Promise.resolve().then(i.bind(i, 5565)),
        Promise.resolve().then(i.bind(i, 4381)),
        Promise.resolve().then(i.bind(i, 8722)),
        Promise.resolve().then(i.bind(i, 5659)),
        Promise.resolve().then(i.bind(i, 4021)),
        Promise.resolve().then(i.bind(i, 436)),
        Promise.resolve().then(i.bind(i, 73)),
        Promise.resolve().then(i.bind(i, 7804)),
        Promise.resolve().then(i.bind(i, 1343)));
    },
    1343: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => n });
      var s = i(5155),
        a = i(1251);
      let l = async () =>
        (await Promise.all([i.e(829), i.e(34)]).then(i.bind(i, 8034))).default;
      function n(e) {
        let { children: t } = e;
        return (0, s.jsx)(a.F, { features: l, strict: !0, children: t });
      }
    },
    4021: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => d });
      var s = i(5155),
        a = i(6766),
        l = i(5963),
        n = i(4356),
        r = i(7141);
      let o = [
        "愛群兒童成長診所副院長",
        "馬偕兒童醫院｜兒童成長特約醫師",
        "馬偕兒童醫院｜兒童內分泌總醫師",
        "台灣兒科醫學會｜學術教育講師",
        "《親子天下》《國語日報》專欄醫師",
        "高雄醫學大學醫學系畢業",
      ];
      function d() {
        return (0, s.jsxs)("section", {
          className:
            "relative overflow-hidden bg-white pt-20 pb-[140px] md:pt-[100px] md:pb-[220px] lg:pt-30 lg:pb-[210px]",
          "data-theme": "light",
          children: [
            (0, s.jsxs)("div", {
              className:
                "mb-11 grid grid-cols-1 gap-y-[60px] md:mb-0 md:grid-cols-[308fr_422fr] md:items-center md:gap-x-[38px] lg:mb-[90px] lg:grid-cols-2 lg:items-start lg:gap-x-[5.9vw]",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "order-2 justify-self-start md:order-1 lg:justify-self-end",
                  children: (0, s.jsx)("div", {
                    className:
                      "mr-0 pl-6 text-nowrap md:pl-[50px] lg:w-[34vw] lg:pl-0",
                    children: (0, s.jsxs)("div", {
                      className: "lg:ml-[58px] lg:w-[300px]",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "mb-[10px] flex h-[54px] items-center lg:h-[61px]",
                          children: (0, s.jsx)(n.m.span, {
                            className:
                              "font-impact inline-block text-[44px] leading-none font-normal tracking-[0.06em] text-[#74BEFF] lg:text-[50px]",
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: { once: !0, amount: 0.3 },
                            variants: r.e.heading,
                            children: "Concern",
                          }),
                        }),
                        (0, s.jsx)(n.m.p, {
                          className:
                            "font-noto mb-[30px] text-left text-[26px] leading-[180%] font-medium tracking-[0.28em] text-black lg:text-3xl",
                          variants: r.e.subheading,
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0, amount: 0.3 },
                          children: "成長，大有學問",
                        }),
                        (0, s.jsxs)(n.m.p, {
                          className:
                            "font-noto text-left text-[16px] leading-[260%] tracking-[0.08em] text-black lg:text-[17px]",
                          variants: r.e.tagline,
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0, amount: 0.3 },
                          children: [
                            "每個爸媽，都希望寶貝健康長大",
                            (0, s.jsx)("br", {}),
                            " 但，陪孩子成長的路上",
                            (0, s.jsx)("br", {}),
                            "總有做不完的功課：骨齡",
                            (0, s.jsx)("br", {}),
                            "生長板、生長激素、生長曲線......",
                            (0, s.jsx)("br", {}),
                            " 一個又一個陌生的名詞 ",
                            (0, s.jsx)("br", {}),
                            "讓人越看越困惑",
                            (0, s.jsx)("br", {}),
                            " 其實，你可以不用獨自面對",
                            (0, s.jsx)("br", {}),
                            " 這些，都是兒童內分泌科醫師的專業",
                            (0, s.jsx)("br", {}),
                            " 幫助孩子用剛好的步調，安心地長大",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "order-1 justify-self-end md:order-2 lg:justify-self-start",
                  children: (0, s.jsx)(l.A, {
                    desktop: {
                      src: "/images/introduction/introduction-banner-desktop.webp",
                      width: 684,
                      height: 500,
                    },
                    tablet: {
                      src: "/images/introduction/introduction-banner-tablet.webp",
                      width: 530,
                      height: 342,
                    },
                    mobile: {
                      src: "/images/introduction/introduction-banner-mobile.webp",
                      width: 331,
                      height: 234,
                    },
                    className:
                      "h-auto object-contain md:w-[547px] lg:w-[800px]",
                    alt: "introduction banner",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "mb-15 grid grid-cols-1 gap-x-[5.9vw] gap-y-[44px] md:mb-0 md:grid-cols-2 md:items-center lg:items-start",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "justify-self-center md:justify-self-end md:pl-[50px] lg:pl-0",
                  children: (0, s.jsx)(a.default, {
                    src: "/images/introduction/introduction-snowmen.png",
                    alt: "introduction snowmen image",
                    width: 490,
                    height: 372,
                    className:
                      "h-auto w-[275px] object-contain md:w-auto lg:w-[34vw]",
                    loading: "lazy",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "max-w-[366px] pl-6 md:pl-0 lg:ml-[7.6vw]",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "mb-[10px] flex h-[54px] items-center lg:h-[61px]",
                      children: (0, s.jsx)(n.m.span, {
                        className:
                          "font-impact inline-block text-[44px] leading-none font-normal tracking-[0.06em] text-[#74BEFF] lg:text-[50px]",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.3 },
                        variants: r.e.heading,
                        children: "Guidance",
                      }),
                    }),
                    (0, s.jsx)(n.m.p, {
                      className:
                        "font-noto mb-[30px] text-left text-[26px] leading-[180%] font-medium tracking-[0.28em] text-black lg:text-3xl",
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, amount: 0.3 },
                      variants: r.e.subheading,
                      children: "剛好，才是最好",
                    }),
                    (0, s.jsxs)(n.m.p, {
                      className:
                        "font-noto text-left text-[16px] leading-[260%] tracking-[0.08em] text-black lg:text-[17px]",
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, amount: 0.3 },
                      variants: r.e.tagline,
                      children: [
                        "我是",
                        (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "黃世綱醫師，",
                        }),
                        (0, s.jsx)("br", {}),
                        " 你可以叫我",
                        (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "「剛剛好醫師」",
                        }),
                        (0, s.jsx)("br", {}),
                        "我是台灣少數專注於兒童成長領域",
                        (0, s.jsx)("br", {}),
                        "陪孩子健康長大的兒童內分泌科醫師",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("br", {}),
                        " 透過內分泌檢驗與骨齡分析 ",
                        (0, s.jsx)("br", {}),
                        "精準了解孩子的身高與發育狀況",
                        (0, s.jsx)("br", {}),
                        " 解答爸媽對兒童成長的疑惑與焦慮",
                        (0, s.jsx)("br", {}),
                        " 並制定完整的追蹤計畫與改善方案",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "relative bottom-6 grid grid-cols-1 items-center gap-x-[5.9vw] md:grid-cols-2",
              children: (0, s.jsx)("div", {
                className: "lg:justify-self-end",
                children: (0, s.jsx)("div", {
                  className: "pl-6 md:w-auto md:pl-[50px] lg:w-[34vw] lg:pl-0",
                  children: (0, s.jsx)("ul", {
                    className: "mx-auto space-y-[7px] lg:w-[323px]",
                    children: o.map((e, t) =>
                      (0, s.jsxs)(
                        n.m.li,
                        {
                          className: "flex items-center gap-x-2",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0, amount: 0.3 },
                          variants: r.e.tagline,
                          children: [
                            (0, s.jsx)(a.default, {
                              src: "/images/icon/list-indicator.svg",
                              alt: "list indicator",
                              width: 16,
                              height: 17,
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "font-noto text-[15px] leading-[220%] tracking-[0.08em] text-black lg:text-[16px]",
                              children: e,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              }),
            }),
            (0, s.jsxs)("div", {
              className: "absolute right-0 bottom-0 left-0",
              children: [
                (0, s.jsx)(a.default, {
                  src: "/images/introduction/introduction-fence.svg",
                  alt: "introduction fence image",
                  width: 1440,
                  height: 70,
                  className: "absolute bottom-0 block w-full object-cover",
                }),
                (0, s.jsx)(a.default, {
                  src: "/images/introduction/introduction-children.png",
                  alt: "introduction children image",
                  width: 786,
                  height: 379,
                  className:
                    "absolute right-0 bottom-0 w-[432px] md:w-[618px] lg:right-[80px] lg:w-[738px]",
                }),
              ],
            }),
          ],
        });
      }
    },
    4381: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => m });
      var s = i(5155),
        a = i(6766),
        l = i(6874),
        n = i.n(l),
        r = i(192),
        o = i(4356),
        d = i(7141);
      function c(e) {
        let {
          card_image: t,
          category: i,
          title: l,
          meta_description: o,
          author: d,
          updated_at: c,
          seo_slug: m,
          showBorderBottom: x = !1,
          showPaddingTop: h = !1,
          ...p
        } = e;
        return (0, s.jsxs)("div", {
          className: "flex flex-col",
          ...p,
          children: [
            (0, s.jsxs)("div", {
              className: (0, r.cn)(
                "flex flex-col items-center gap-x-10 gap-y-5 pb-[70px] md:flex-row md:pb-[30px]",
                h && "md:pt-[30px]",
              ),
              children: [
                (0, s.jsx)(n(), {
                  href: "/blog/".concat(m),
                  children: (0, s.jsx)("div", {
                    className:
                      "relative aspect-[310/200] h-[200px] w-full flex-shrink-0 overflow-hidden rounded-2xl bg-transparent md:h-[148px] md:w-[230px]",
                    children: (0, s.jsx)(a.default, {
                      src: t || "/images/articles/articles-placeholder.svg",
                      alt: l,
                      width: 310,
                      height: 200,
                      className:
                        "h-[200px] w-[310px] rounded-[16px] object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05] md:h-[148px] md:w-[230px]",
                      priority: !1,
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "font-noto mb-[6px] text-[15px] leading-[160%] tracking-[0.08em] text-[#626262]",
                      children: i,
                    }),
                    (0, s.jsx)("h3", {
                      className:
                        "font-noto mb-[6px] text-[22px] leading-[160%] font-medium tracking-[0.12em]",
                      children: l,
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "font-noto mb-3 line-clamp-3 text-[14px] leading-[200%] font-normal tracking-[0.08em]",
                      children: o,
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "font-noto flex items-center text-[13px] leading-[160%] tracking-[0.08em] text-[#9C9C9C]",
                      children: [
                        (0, s.jsx)("span", { children: d }),
                        (0, s.jsx)("span", {
                          className: "mx-1",
                          children: "•",
                        }),
                        (0, s.jsx)("span", { children: (0, r.Yq)(c) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            x &&
              (0, s.jsx)("div", {
                className: "md:border-b md:border-[#E3E3E3]",
              }),
          ],
        });
      }
      let m = (e) => {
        let { mustRead: t } = e;
        return (0, s.jsx)("section", {
          "data-theme": "light",
          className:
            "bg-[#fafafa] pt-10 pb-20 md:pt-[60px] md:pb-[100px] lg:pt-20 lg:pb-30",
          children: (0, s.jsx)("div", {
            className: "container mx-auto max-w-[1280px] px-10",
            children: (0, s.jsxs)("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:gap-x-[12vw]",
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-15 md:mb-[70px] lg:mb-0",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "mb-[6px] flex h-[61px] items-center justify-center md:mb-2 md:h-[73px] lg:mb-[10px] lg:h-[85px] lg:justify-start",
                      children: (0, s.jsx)(o.m.span, {
                        className:
                          "font-impact text-[50px] leading-none font-normal tracking-[0.06em] text-[#74BEFF] md:text-[60px] lg:text-[70px]",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.3 },
                        variants: d.e.heading,
                        children: "Articles",
                      }),
                    }),
                    (0, s.jsx)(o.m.h3, {
                      className:
                        "font-noto text-center text-[24px] leading-[180%] font-medium tracking-[0.28em] text-black lg:mb-[105px] lg:text-left lg:text-[26px]",
                      variants: d.e.subheading,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, amount: 0.3 },
                      children: "兒童成長專欄",
                    }),
                    (0, s.jsx)(a.default, {
                      src: "/images/articles/articles-bear-widget.png",
                      alt: "articles title",
                      width: 310,
                      height: 327.5,
                      className: "ml-auto hidden lg:block",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  children:
                    (null == t ? void 0 : t.length) === 0
                      ? (0, s.jsx)("p", {
                          className:
                            "flex h-full flex-col items-center justify-center text-center text-[16px] text-[#9C9C9C]",
                          children: "暫無文章，敬請期待！",
                        })
                      : (0, s.jsx)(s.Fragment, {
                          children: t.map((e, i) =>
                            (0, s.jsx)(
                              c,
                              {
                                ...e,
                                showBorderBottom: i !== t.length - 1,
                                showPaddingTop: 0 !== i,
                              },
                              i,
                            ),
                          ),
                        }),
                }),
              ],
            }),
          }),
        });
      };
    },
    4894: (e, t, i) => {
      "use strict";
      (i.r(t), i.d(t, { default: () => d }));
      var s = i(5155),
        a = i(4356),
        l = i(192),
        n = i(2115),
        r = i(7141);
      let o = (e) =>
        "string" == typeof e || (0, n.isValidElement)(e) ? { text: e } : e;
      function d(e) {
        let {
            heading: t,
            subheading: i,
            tagline: n,
            container: d,
            children: c,
            className: m,
            textWrapperClassName: x = "",
            theme: h = "light",
            ...p
          } = e,
          g = o(t),
          b = o(i),
          u = n ? o(n) : void 0;
        return (0, s.jsx)("section", {
          className: (0, l.cn)(
            "relative overflow-hidden bg-white pt-10 pb-20 md:pt-[60px] md:pb-[100px] lg:pt-20 lg:pb-30",
            m,
          ),
          "data-theme": h,
          ...p,
          children: (0, s.jsxs)("div", {
            className: (0, l.cn)("mx-auto", d),
            children: [
              (0, s.jsxs)("div", {
                className: (0, l.cn)(
                  "mx-auto mb-[60px] flex max-w-[90%] flex-col items-center md:mb-[70px] md:max-w-[584px] lg:mb-20 lg:max-w-full",
                  x,
                ),
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "mb-[6px] flex h-[61px] items-center md:mb-2 md:h-[73px] lg:mb-[10px] lg:h-[85px]",
                    children: (0, s.jsx)(a.m.span, {
                      className: (0, l.cn)(
                        "font-impact inline-block text-[50px] leading-[100%] font-normal tracking-[0.06em] text-[#74BEFF] md:text-6xl lg:text-[70px]",
                        g.className,
                      ),
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, amount: 0.3 },
                      variants: r.e.heading,
                      children: g.text,
                    }),
                  }),
                  (0, s.jsx)(a.m.h3, {
                    className: (0, l.cn)(
                      "font-noto text-2xl leading-[180%] font-medium tracking-[0.28em] text-black md:text-[26px] lg:text-3xl",
                      u && "mb-[22px] md:mb-[26px] lg:mb-[30px]",
                      b.className,
                    ),
                    variants: r.e.subheading,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, amount: 0.3 },
                    children: b.text,
                  }),
                  u &&
                    (0, s.jsx)(a.m.h4, {
                      className: (0, l.cn)(
                        "font-noto mx-auto max-w-[694px] text-[15px] leading-[200%] tracking-[0.08em] text-black lg:text-[16px]",
                        u.className,
                      ),
                      variants: r.e.tagline,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0, amount: 0.3 },
                      children: u.text,
                    }),
                ],
              }),
              c,
            ],
          }),
        });
      }
    },
    5565: (e, t, i) => {
      "use strict";
      i.d(t, { Album: () => x });
      var s = i(5155),
        a = i(2115),
        l = i(6766),
        n = i(192),
        r = i(760),
        o = i(4356);
      let d = (e) => {
          let { className: t, variant: i } = e;
          return (0, s.jsxs)("svg", {
            width: 48,
            height: 48,
            viewBox: "0 0 48 48",
            fill: "solid" === i ? "#74BEFF" : "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
              (0, s.jsx)("path", {
                d: "M24 47C11.2975 47 1 36.7025 1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47Z",
                stroke: "outline" === i ? "#74BEFF" : "white",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M34.3288 24H13.5559L21.9073 32.8122",
                stroke: "outline" === i ? "#74BEFF" : "white",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M13.5559 24.0002L21.9073 15.188",
                stroke: "outline" === i ? "#74BEFF" : "white",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        c = (e) => {
          let { className: t, variant: i = "outline" } = e;
          return (0, s.jsxs)("svg", {
            width: 42,
            height: 42,
            viewBox: "0 0 42 42",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            style: {
              ...("outline" === i && {
                border: "2px solid #74BEFF",
                borderRadius: "50%",
              }),
            },
            children: [
              (0, s.jsx)("path", {
                d: "M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z",
                fill: "solid" === i ? "#74BEFF" : "white",
              }),
              (0, s.jsx)("path", {
                d: "M11.5698 21H30.5364L22.9112 29.0459",
                fill: "solid" === i ? "#74BEFF" : "white",
              }),
              (0, s.jsx)("path", {
                d: "M11.5698 21H30.5364L22.9112 29.0459",
                stroke: "solid" === i ? "white" : "#74BEFF",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M30.5363 21L22.9111 12.9541",
                stroke: "solid" === i ? "white" : "#74BEFF",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        m = (e) => {
          let { direction: t, onClick: i } = e,
            [l, n] = (0, a.useState)(!1);
          return (0, s.jsx)("button", {
            onClick: i,
            "aria-label": "right" === t ? "Next" : "Previous",
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            children: (0, s.jsx)("right" === t ? c : d, {
              className: "size-10 cursor-pointer lg:size-12",
              variant: l ? "solid" : "outline",
            }),
          });
        },
        x = (e) => {
          let { photos: t = [], defaultPhotoId: i } = e,
            [d, c] = (0, a.useState)(() => {
              if (i) {
                let e = t.findIndex((e) => e.id === i);
                return e >= 0 ? e : 0;
              }
              return 0;
            }),
            x = t[d],
            h = (e) => {
              c(e);
            };
          return 0 === t.length
            ? null
            : (0, s.jsxs)("div", {
                className: "inline-block",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "relative mx-auto mb-10 h-[calc(90vw*425/340)] w-[90vw] md:h-[420px] md:w-[672px] lg:mb-[50px] lg:h-[500px] lg:w-[800px]",
                    children: (0, s.jsx)(r.N, {
                      initial: !1,
                      children: (0, s.jsx)(
                        o.m.div,
                        {
                          variants: {
                            enter: { opacity: 0 },
                            center: { opacity: 1 },
                            exit: { opacity: 0 },
                          },
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          transition: {
                            opacity: { duration: 0.5, ease: "easeInOut" },
                          },
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: (0, s.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              (0, s.jsx)(l.default, {
                                src: x.src.desktop,
                                alt: x.alt || x.label,
                                fill: !0,
                                className:
                                  "hidden object-cover md:block lg:object-contain",
                                style: {
                                  boxShadow:
                                    "0px 20px 24px 0px rgba(20, 20, 20, 0.14)",
                                },
                              }),
                              (0, s.jsx)(l.default, {
                                src: x.src.mobile,
                                alt: x.alt || x.label,
                                fill: !0,
                                className:
                                  "block object-cover md:hidden lg:object-contain",
                                style: {
                                  boxShadow:
                                    "0px 20px 24px 0px rgba(20, 20, 20, 0.14)",
                                },
                              }),
                            ],
                          }),
                        },
                        x.id,
                      ),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mx-auto flex w-4/5 items-center justify-evenly px-4 md:w-3/5 lg:w-4/5",
                    children: [
                      (0, s.jsx)(m, {
                        direction: "left",
                        onClick: () => {
                          c((e) => (0 === e ? t.length - 1 : e - 1));
                        },
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "flex items-center justify-between gap-x-4 lg:gap-x-[22px]",
                        children: t.map((e, t) =>
                          (0, s.jsx)(
                            "button",
                            {
                              onClick: () => h(t),
                              className: (0, n.cn)(
                                "font-noto size-[10px] cursor-pointer rounded-full text-[16px] leading-[160%] tracking-[0.16em] text-[#626262] transition-colors lg:size-auto lg:rounded-none lg:bg-transparent",
                                t === d
                                  ? "bg-[#9C9C9C] font-semibold"
                                  : "bg-[#ebebeb] font-normal",
                              ),
                              "aria-label": "Go to ".concat(e.label),
                              children: (0, s.jsx)("span", {
                                className: "hidden lg:inline-block",
                                children: e.label,
                              }),
                            },
                            e.id,
                          ),
                        ),
                      }),
                      (0, s.jsx)(m, {
                        direction: "right",
                        onClick: () => {
                          c((e) => (e === t.length - 1 ? 0 : e + 1));
                        },
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    5659: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => l });
      var s = i(5155),
        a = i(4668);
      function l() {
        let { RiveComponent: e } = (0, a.useRive)({
          src: "/animations/bear-banner-desktop.riv",
          stateMachines: "State Machine 2",
          artboard: "A 2",
          autoplay: !0,
          isTouchScrollEnabled: !0,
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", { className: "h-[194px] md:h-[167px] lg:h-0" }),
            (0, s.jsx)("div", {
              className:
                "absolute -right-[260px] -bottom-[120px] z-0 aspect-[1920/868] w-[850px] md:-right-[300px] md:-bottom-[140px] md:w-[1000px] lg:right-[calc(0.2*100vw-596.17px)] lg:-bottom-[170px] lg:mr-0 lg:w-[1200px]",
              children: (0, s.jsx)(e, {}),
            }),
          ],
        });
      }
    },
    5963: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => r });
      var s = i(5155),
        a = i(8126),
        l = i.n(a),
        n = i(6766);
      function r(e) {
        let {
            className: t,
            alt: i = "Banner image",
            fill: a = !1,
            priority: r = !1,
            sizes: o = "100vw",
            breakpoints: d = [390, 744, 1024],
            quality: c = 75,
            desktop: m,
            tablet: x,
            mobile: h,
            style: p = { objectFit: "cover" },
            ...g
          } = e,
          [b, u, v] = d,
          { src: w, width: f, height: j } = m,
          { src: N, width: k, height: y } = x,
          { src: F, width: I, height: C } = h,
          E = { rel: "preload", as: "image", imageSizes: o },
          B = {
            alt: i,
            fill: a,
            priority: r,
            sizes: o,
            style: p,
            quality: c,
            ...g,
          },
          {
            props: { srcSet: L },
          } = (0, n.getImageProps)({ ...B, width: f, height: j, src: w }),
          {
            props: { srcSet: P },
          } = (0, n.getImageProps)({ ...B, width: k, height: y, src: N }),
          {
            props: { srcSet: S, ...M },
          } = (0, n.getImageProps)({ ...B, width: I, height: C, src: F }),
          V = "(min-width: ".concat(v, "px)"),
          z = "(min-width: ".concat(u, "px)"),
          A = "(min-width: ".concat(b, "px)");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            r &&
              (0, s.jsxs)(l(), {
                children: [
                  (0, s.jsx)("link", {
                    ...E,
                    media: V,
                    href: w,
                    imageSrcSet: L,
                  }),
                  (0, s.jsx)("link", {
                    ...E,
                    media: z,
                    href: N,
                    imageSrcSet: P,
                  }),
                  (0, s.jsx)("link", {
                    ...E,
                    media: A,
                    href: F,
                    imageSrcSet: S,
                  }),
                ],
              }),
            (0, s.jsxs)("picture", {
              children: [
                (0, s.jsx)("source", { media: V, srcSet: L }),
                (0, s.jsx)("source", { media: z, srcSet: P }),
                (0, s.jsx)("source", { media: A, srcSet: S }),
                (0, s.jsx)("img", { ...M, alt: i, className: t }),
              ],
            }),
          ],
        });
      }
    },
    7141: (e, t, i) => {
      "use strict";
      i.d(t, { e: () => s });
      let s = {
        heading: {
          hidden: { opacity: 0 },
          visible: {
            y: [-50, 0, 0],
            opacity: [0, 1, 1],
            clipPath: [
              "polygon(100% 0, 100% 100%, 0 100%, 0 80%)",
              "polygon(100% 0, 100% 100%, 0 100%, 0 15%)",
              "polygon(100% 0, 100% 100%, 0 100%, 0 0%)",
            ],
            transition: { duration: 0.8, ease: "linear", times: [0.2, 0.8, 1] },
          },
        },
        subheading: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
          },
        },
        tagline: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
          },
        },
      };
    },
    7804: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => p });
      var s = i(5155),
        a = i(5963),
        l = i(192),
        n = i(4894),
        r = i(2115);
      let o = (0, i(5453).v)((e) => ({
          isModalOpen: !1,
          setIsModalOpen: (t) => e({ isModalOpen: t }),
          itemId: "",
          setItemId: (t) => e({ itemId: t }),
          chartDataId: "nowData",
          setChartDataId: (t) => e({ chartDataId: t }),
        })),
        d = (e) => {
          let { isOpen: t, onClose: i, children: a, className: l = "" } = e,
            [n, o] = (0, r.useState)(!1),
            [d, c] = (0, r.useState)(!1),
            m = (0, r.useRef)(null),
            x = (0, r.useRef)(null);
          ((0, r.useEffect)(
            () => (
              t
                ? (c(!0), requestAnimationFrame(() => o(!0)))
                : (o(!1),
                  (x.current = setTimeout(() => {
                    c(!1);
                  }, 300))),
              () => {
                x.current && clearTimeout(x.current);
              }
            ),
            [t],
          ),
            (0, r.useEffect)(
              () => (
                (document.body.style.overflow = t ? "hidden" : "unset"),
                () => {
                  document.body.style.overflow = "unset";
                }
              ),
              [t],
            ));
          let h = () => {
            (o(!1), i());
          };
          return (0, s.jsx)(s.Fragment, {
            children:
              (d || t) &&
              (0, s.jsx)("div", {
                className:
                  "fixed inset-0 z-50 transition-opacity duration-300 ease-in-out "
                    .concat(
                      n
                        ? "bg-[#000000]/30 backdrop-blur-[5px]"
                        : "bg-[#000000]/0 backdrop-blur-[0px]",
                      " ",
                    )
                    .concat(d ? "visible" : "invisible"),
                children: (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 flex flex-col transition-opacity duration-300 ease-in-out ".concat(
                      n
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-full scale-90 opacity-0",
                    ),
                  style: { transformOrigin: "center bottom" },
                  children: (0, s.jsx)("div", {
                    ref: m,
                    className: "h-full w-full overflow-y-auto ".concat(l),
                    style: { overflowY: "auto" },
                    onClick: (e) => {
                      e.target === e.currentTarget && h();
                    },
                    children: (0, s.jsxs)("div", {
                      className:
                        "relative mx-auto my-[40px] w-full max-w-[390px] rounded-[40px] bg-white md:my-[40px] md:max-w-[700px] lg:my-[40px] lg:max-w-[900px] ".concat(
                          l,
                        ),
                      children: [
                        (0, s.jsx)("button", {
                          onClick: h,
                          className:
                            "absolute top-[20px] right-[20px] z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#74BEFF]",
                          children: (0, s.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            children: [
                              (0, s.jsx)("path", {
                                d: "M1.22192 1L16.7783 16.5563",
                                stroke: "white",
                                strokeWidth: "1.2",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("path", {
                                d: "M1.22192 17L16.7783 1.44365",
                                stroke: "white",
                                strokeWidth: "1.2",
                                strokeLinecap: "round",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "relative",
                          children: a,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
          });
        },
        c = [
          {
            id: "height",
            title: "身高困擾",
            src: "/images/service/service-modal-height.png",
            width: 360,
            height: 233,
            description:
              "\n      孩子總是比同年齡的同伴矮一截？成長速度似乎也慢了些？身為家長，我們不一定希望孩子「高人一等」，但一定都希望他能夠長到屬於自己的理想高度，健康、自信地長大。當你開始擔心孩子的身高，也就意味著，你需要一位專家，帶你從高處「看清全局」。從醫學的角度出發，我將陪你一同掌握影響孩子成長的每一個關鍵因素，幫助找出真正的原因，不再只是猜測或焦慮。\n\n      從打好營養的地基、調整生活習慣，到必要時適度的醫療介入，我會陪著你，一步一步穩固孩子的成長基礎，清除阻礙，讓孩子不錯過任何一分可以成長的機會。\n\n      長高，就只有那麼一次機會，每個孩子，都值得擁有最完整的成長旅程。讓我們一起努力，幫助孩子發揮屬於他們的最佳潛能，在成年的人生起點之前，站得更高，看得更遠。\n    ",
          },
          {
            id: "development",
            title: "發育問題",
            src: "/images/service/service-modal-development.png",
            width: 360,
            height: 271,
            description:
              "\n    你有注意到嗎？現在的孩子，發育得越來越早，成長的速度也越來越快。許多五、六年級的小朋友，看起來就像個小大人！但小心了！小時候長得快，不一定是真正的高，可能只是提前用掉了成長的潛力。\n\n    成長，其實是一場持續倒數的馬拉松，而不是短跑衝刺。發育過早、速度過快的孩子，容易出現「贏在起跑點，輸在終點前」的遺憾。女孩若太早月經來潮，不只身高受限，也可能因為年紀尚小而產生心理壓力；男孩則可能一開始長得高，但生長期縮短，最終成人身高反而受影響。\n\n    更重要的是，符合「性早熟」定義的孩子，背後還可能潛藏其他健康問題，不可輕忽。如果你發現孩子發育得比同齡孩子快，別猶豫，讓專業的成長配速教練──兒童內分泌科醫師，幫孩子重新掌握成長的節奏。\n    ",
          },
          {
            id: "planning",
            title: "藥物規劃",
            src: "/images/service/service-modal-planning.png",
            width: 360,
            height: 103,
            description:
              "\n      藥物介入，從來不是孩子成長的唯一答案，而是幫助特定孩子達到理想高度的最後助力。生長激素，真的能幫孩子衝高？發育抑制針，可以爭取更多成長的時間？但更重要的問題是──這些療法，真的適合你的孩子嗎？ 單靠打針、吃藥，就能達到你心中期待的成果嗎？\n\n      成長，從來不是工廠組裝的過程。生長激素療程，或發育抑制療程，都需要經驗豐富的兒童內分泌科專家，根據孩子個別條件，細緻調整每一個步驟。\n\n      這是一段需要智慧與耐心設計的旅程，不只是追求數字的成長，更要兼顧藥效、副作用，以及孩子的心理感受與家庭的期待。\n\n      藥物治療的確需要投入相當的資源與心力，過程中或許不至於艱辛，卻也絕非輕鬆。如果真的要踏上這段旅程，你值得擁有一位最值得信賴、最懂得陪伴的成長專家，讓我們一起，用最好的方法，為孩子爭取最好的未來。\n    ",
          },
          {
            id: "myth",
            title: "破解迷思",
            src: "/images/service/service-modal-myth.png",
            width: 360,
            height: 316.5,
            description:
              "\n    你也聽過這些說法嗎？\n\n    「小時候矮沒關係，長大自然會抽高。」\n    「想長高要多補鈣。」\n    「雞肉有生長激素，吃了會性早熟。」\n    「一定要跳繩才會長高。」\n    「豆漿喝多了會提早發育。」\n    「小時候胖一點沒關係，長大就會瘦。」\n    「時間到了就要找中醫轉骨。」\n    「網路上的長高粉、長高藥好像很有效，要不要買來試試？」\n\n    面對這些說法，有些聽起來好嚇人，有些又讓人焦慮萬分。關於孩子長高的路上，每個人都說得頭頭是道──但別忘了，每個人自己也只「長高」過一次而已！\n\n    在充滿各種意見的環境裡，我們就像在霧裡看花，很難真正摸清孩子成長的全貌。這時候，你需要的，不是更多碎片化的資訊，而是來自真正以醫學為基礎的專業引導。讓專業兒童成長專家，陪你撥開迷霧，趨吉避凶，不被似是而非的說法困住，幫助孩子抓住關鍵成長黃金期，勇敢朝著自己的高度前進！\n    ",
          },
          {
            id: "growth",
            title: "成長進度",
            src: "/images/service/service-modal-growth.png",
            width: 360,
            height: 271,
            description:
              "\n    「孩子還剩多少時間可以長高？」「現在長高的速度夠快嗎？」這兩個關鍵，決定了孩子成年後的最終身高。\n\n    如果能及早知道答案，該有多好？我想，這是每一位父母心中最深的期待。\n\n    骨齡，正是幫助我們了解孩子成長進度的秘密地圖。透過正確解讀骨齡，我們可以看見孩子還有多少「成長時間」，也能評估目前的長高速度是否理想。不過，隨著大家越來越關注骨齡，問題也來了──照了骨齡，接下來該怎麼看？骨齡比實際年齡大，意味著什麼？聽說有孩子因為骨齡偏大而打抑制針，我的孩子需要嗎？\n\n    骨齡，就像是成長的進度條。若是解讀錯誤，反而會讓家長徒增焦慮，錯失最佳輔助時機。\n\n    因此，孩子需要的是一位能夠精準解讀骨齡的專家，好好幫孩子規劃成長進度，陪孩子一起按步就班前進，制定年度具體的「長高計畫」，讓孩子在每一段成長時光中，安心茁壯，勇敢向上。\n    ",
          },
        ];
      var m = i(6766);
      let x = (e) => {
          let { isOpen: t, onClose: i, className: a = "" } = e,
            { itemId: l, setItemId: n, setIsModalOpen: x } = o(),
            h = (0, r.useMemo)(() => c.find((e) => e.id === l) || null, [l]);
          return (
            (0, r.useEffect)(
              () => () => {
                (n(""), x(!1));
              },
              [n, x],
            ),
            (0, s.jsx)(d, {
              isOpen: t,
              onClose: i,
              className: a,
              children:
                h &&
                (0, s.jsxs)("div", {
                  className:
                    "mx-auto px-[23px] pt-[60px] pb-[80px] md:px-[60px] md:pb-[100px] lg:px-[100px] lg:pt-[80px] lg:pb-[120px]",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "section-title mb-15 md:mb-[70px] lg:mb-20",
                      children: h.title,
                    }),
                    (0, s.jsx)(m.default, {
                      src: h.src,
                      alt: h.title,
                      width: h.width,
                      height: h.height,
                      className:
                        "mx-auto mb-15 h-auto w-[280px] md:mb-[70px] md:w-[320px] lg:mb-20 lg:w-[360px]",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "section-description mx-auto max-w-[486px] whitespace-pre-line lg:max-w-[694px]",
                      children: h.description,
                    }),
                  ],
                }),
            })
          );
        },
        h = (e) => {
          let {
              baseImages: t,
              hoverImages: i,
              alt: n,
              className: r,
              itemId: d,
            } = e,
            { setIsModalOpen: c, setItemId: m } = o();
          return (0, s.jsxs)("div", {
            className: (0, l.cn)(
              "group ease relative cursor-pointer rounded-[20px] shadow-[0px_20px_30px_0px_rgba(20,20,20,0.1)] transition-transform duration-300 hover:scale-[1.02]",
              r,
            ),
            onClick: () => {
              (m(d), c(!0));
            },
            children: [
              (0, s.jsx)(a.A, {
                desktop: t.desktop,
                tablet: t.tablet,
                mobile: t.mobile,
                alt: n,
                className:
                  "ease h-auto w-full object-cover opacity-100 group-hover:opacity-0 group-active:opacity-0",
              }),
              (0, s.jsx)(a.A, {
                desktop: i.desktop,
                tablet: i.tablet,
                mobile: i.mobile,
                alt: n,
                className:
                  "ease absolute inset-0 z-10 size-full rounded-[20px] object-cover opacity-0 group-hover:opacity-100 group-active:opacity-100",
              }),
            ],
          });
        };
      function p() {
        let { isModalOpen: e, setIsModalOpen: t } = o();
        return (0, s.jsxs)(n.default, {
          heading: { text: "Services", className: "text-white" },
          subheading: "常見診療項目",
          className: "bg-[#74BEFF]",
          theme: "dark",
          children: [
            (0, s.jsxs)("div", {
              className:
                "mx-auto grid max-w-[1120px] grid-cols-6 gap-5 px-5 md:px-[50px] lg:px-0",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "order-2 col-span-6 md:col-span-3 lg:order-1 lg:col-span-3",
                  children: (0, s.jsx)(h, {
                    baseImages: {
                      desktop: {
                        src: "/images/service/service-height-desktop.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-height-tablet.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-height-mobile.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    hoverImages: {
                      desktop: {
                        src: "/images/service/service-height-desktop--hover.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-height-tablet--hover.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-height-mobile--hover.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    alt: "身高困擾",
                    itemId: "height",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-span-6 lg:col-span-3",
                  children: (0, s.jsx)(h, {
                    baseImages: {
                      desktop: {
                        src: "/images/service/service-planning-desktop.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-planning-tablet.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-planning-mobile.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    hoverImages: {
                      desktop: {
                        src: "/images/service/service-planning-desktop--hover.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-planning-tablet--hover.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-planning-mobile--hover.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    alt: "藥物規劃",
                    itemId: "planning",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "order-3 col-span-6 md:col-span-3 lg:col-span-2",
                  children: (0, s.jsx)(h, {
                    baseImages: {
                      desktop: {
                        src: "/images/service/service-development-desktop.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-development-tablet.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-development-mobile.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    hoverImages: {
                      desktop: {
                        src: "/images/service/service-development-desktop--hover.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-development-tablet--hover.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-development-mobile--hover.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    alt: "發育問題",
                    itemId: "development",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "order-4 col-span-6 md:col-span-3 lg:col-span-2",
                  children: (0, s.jsx)(h, {
                    baseImages: {
                      desktop: {
                        src: "/images/service/service-myth-desktop.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-myth-tablet.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-myth-mobile.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    hoverImages: {
                      desktop: {
                        src: "/images/service/service-myth-desktop--hover.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-myth-tablet--hover.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-myth-mobile--hover.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    alt: "破解迷思",
                    itemId: "myth",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "order-5 col-span-6 md:col-span-3 lg:col-span-2",
                  children: (0, s.jsx)(h, {
                    baseImages: {
                      desktop: {
                        src: "/images/service/service-growth-desktop.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-growth-tablet.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-growth-mobile.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    hoverImages: {
                      desktop: {
                        src: "/images/service/service-growth-desktop--hover.png",
                        width: 550,
                        height: 380,
                      },
                      tablet: {
                        src: "/images/service/service-growth-tablet--hover.png",
                        width: 324,
                        height: 340,
                      },
                      mobile: {
                        src: "/images/service/service-growth-mobile--hover.png",
                        width: 350,
                        height: 260,
                      },
                    },
                    alt: "成長進度",
                    itemId: "growth",
                  }),
                }),
              ],
            }),
            (0, s.jsx)(x, {
              isOpen: e,
              onClose: () => {
                t(!1);
              },
            }),
          ],
        });
      }
    },
    8722: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => b });
      var s = i(5155),
        a = i(6766);
      let l = () =>
        (0, s.jsxs)("svg", {
          width: 30,
          height: 46,
          viewBox: "0 0 247 390",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          },
          children: [
            (0, s.jsx)("style", {
              children:
                "\n        @keyframes scroll {\n          0% { transform: translateY(0); }\n          30% { transform: translateY(100px); }\n        }\n        #wheel {\n          animation: scroll ease 2s infinite;\n        }\n      ",
            }),
            (0, s.jsx)("path", {
              id: "mouse",
              d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
              style: {
                fill: "#74beff",
                stroke: "#ffffff",
                strokeWidth: "15px",
              },
            }),
            (0, s.jsx)("path", {
              id: "wheel",
              d: "M123.359,79.775l0,72.843",
              style: { fill: "none", stroke: "#ffffff", strokeWidth: "20px" },
            }),
          ],
        });
      var n = i(6874),
        r = i.n(n),
        o = i(4356),
        d = i(5028),
        c = i(2115);
      let m = c.useLayoutEffect,
        x = (0, d.default)(
          () =>
            i
              .e(645)
              .then(i.bind(i, 7645))
              .then((e) => e.BannerBearLarge),
          { loadableGenerated: { webpack: () => [7645] }, ssr: !1 },
        ),
        h = (0, d.default)(
          () =>
            i
              .e(918)
              .then(i.bind(i, 1918))
              .then((e) => e.BannerBearMobile),
          { loadableGenerated: { webpack: () => [1918] }, ssr: !1 },
        );
      function p() {
        let e = (function (e) {
          let { defaultValue: t = !1, initializeWithValue: i = !0 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            s = (e) => window.matchMedia(e).matches,
            [a, l] = (0, c.useState)(() => (i ? s(e) : t));
          function n() {
            l(s(e));
          }
          return (
            m(() => {
              let t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                () => {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                }
              );
            }, [e]),
            a
          );
        })("(min-width: 768px)");
        return (0, s.jsx)("div", {
          className:
            "relative bottom-[80px] z-0 ml-6 aspect-[393/393] w-full max-w-[393px] overflow-hidden md:bottom-[40px] md:ml-[100px] md:aspect-[689/663] md:max-w-[597px] lg:bottom-0 lg:mt-[117px] lg:ml-0 lg:max-w-[689px]",
          children: e ? (0, s.jsx)(x, {}) : (0, s.jsx)(h, {}),
        });
      }
      let g = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return {
            initial: { opacity: 0 },
            viewport: { once: !0, amount: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5, ease: "easeIn", delay: e },
          };
        },
        b = () =>
          (0, s.jsxs)("section", {
            id: "banner",
            className:
              "min-h-screen-without-header relative flex flex-col items-center justify-center overflow-hidden pt-[74px] pb-[34px] text-center md:pt-[99px] md:pb-10 lg:pt-0 lg:pb-0",
            "data-theme": "dark",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "absolute inset-0 -z-10 overflow-hidden bg-[#3C98FF]",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-0 left-6 hidden h-auto w-[62.8vw] lg:block",
                    children: (0, s.jsx)(a.default, {
                      src: "/images/banner-bg-text.svg",
                      alt: "Banner Widget Text",
                      width: 904,
                      height: 158,
                      className: "h-auto w-full",
                      fetchPriority: "high",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-0 right-0 h-full w-[50px] bg-gradient-to-b from-transparent to-transparent",
                    children: (0, s.jsx)(a.default, {
                      src: "/images/banner-bg-ruler.svg",
                      alt: "",
                      width: 50,
                      height: 780,
                      priority: !0,
                      fetchPriority: "high",
                      loading: "eager",
                      className: "h-full w-full object-cover",
                      sizes: "50px",
                      style: { objectFit: "cover", objectPosition: "center" },
                      onLoad: (e) => {
                        e.currentTarget.style.opacity = "1";
                      },
                      onError: (e) => {
                        e.currentTarget.style.display = "none";
                        let t = e.currentTarget.parentElement;
                        t &&
                          (t.style.background =
                            "linear-gradient(to bottom, rgba(60, 152, 255, 0.8), rgba(60, 152, 255, 0.9))");
                      },
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[30px] flex flex-col gap-x-[6vw] md:mb-0 lg:flex-row",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "relative z-10 pl-6 md:pl-[8.3vw] lg:mt-[154px] lg:pl-[10vw]",
                        children: [
                          (0, s.jsx)(o.m.div, {
                            ...g(0),
                            className:
                              "mb-4 h-[132px] w-[271px] md:mb-7 md:h-[190px] md:w-[389px] lg:mb-[30px] lg:h-[218px] lg:w-[445px]",
                            children: (0, s.jsx)(a.default, {
                              src: "/images/banner-text.png",
                              alt: "剛剛好醫師 - 兒童內分泌科專業",
                              width: 890,
                              height: 436,
                              className: "object-cover",
                              priority: !0,
                              loading: "eager",
                              fetchPriority: "high",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "max-w-[420px]",
                            children: (0, s.jsxs)(o.m.div, {
                              ...g(0.5),
                              className:
                                "font-noto text-left text-[15px] leading-[220%] font-normal tracking-[0.08em] text-white md:text-[16px] lg:text-[17px]",
                              children: [
                                "身高體重剛剛好，才是最好。",
                                (0, s.jsx)("br", {}),
                                "兒童內分泌科醫師和你一起陪伴孩子，",
                                (0, s.jsx)("br", {}),
                                (0, s.jsxs)("p", {
                                  className: "mb-[11px] flex gap-x-1 md:mb-0",
                                  children: [
                                    (0, s.jsx)("span", {
                                      children: "順利長高，健康長大。",
                                    }),
                                    (0, s.jsx)(r(), {
                                      href: "/blog/booking",
                                      className: "hidden md:inline-block",
                                      children: (0, s.jsx)("button", {
                                        className:
                                          "font-noto inline-block h-[44px] w-[140px] transform cursor-pointer rounded-[46px] bg-[#FFCB2E] text-[13px] leading-[160%] font-semibold tracking-[0.16em] whitespace-nowrap text-black transition-all hover:scale-110 hover:bg-[#FFDA2B] lg:h-[49px] lg:w-[164px] lg:text-[14px]",
                                        "aria-label": "booking",
                                        type: "button",
                                        children: "立即預約",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(r(), {
                                  href: "/blog/booking",
                                  className: "inline-block md:hidden",
                                  children: (0, s.jsx)("button", {
                                    className:
                                      "font-noto inline-block h-[44px] w-[140px] transform cursor-pointer rounded-[46px] bg-[#FFCB2E] text-[13px] leading-[160%] font-semibold tracking-[0.16em] whitespace-nowrap text-black transition-all hover:scale-110 hover:bg-[#FFDA2B] lg:h-[49px] lg:w-[164px] lg:text-[14px]",
                                    "aria-label": "booking",
                                    type: "button",
                                    children: "立即預約",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)(p, {}),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "absolute bottom-[34px] flex w-full items-end justify-center gap-x-[48px] md:bottom-[40px] md:left-[30px] md:justify-start lg:bottom-[50px] lg:left-[60px]",
                    children: [
                      (0, s.jsx)(a.default, {
                        src: "/images/banner-doctor-info.png",
                        alt: "黃世綱醫師 - 兒童內分泌科專業醫師",
                        width: 268,
                        height: 120,
                        className:
                          "h-[97px] w-[216px] lg:hidden lg:h-[120px] lg:w-[268px] xl:block",
                        priority: !0,
                        loading: "eager",
                        fetchPriority: "high",
                        sizes: "(max-width: 1024px) 216px, 268px",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "static bottom-0 left-1/2 -translate-x-1/2 md:absolute lg:inline-block",
                        children: (0, s.jsxs)("button", {
                          onClick: () => {
                            window.scrollBy({
                              top: window.innerHeight,
                              behavior: "smooth",
                            });
                          },
                          className:
                            "transition-opacity hover:opacity-80 focus:outline-none",
                          "aria-label": "Scroll down",
                          type: "button",
                          children: [
                            (0, s.jsx)(l, {}),
                            (0, s.jsx)("p", {
                              className:
                                "font-sarabun mt-[3px] text-[12px] leading-[140%] font-[300] tracking-[0.04em] text-white italic",
                              children: "Scroll",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [685, 874, 930, 560, 577, 441, 684, 358], () => t(1058)),
      (_N_E = e.O()));
  },
]);
