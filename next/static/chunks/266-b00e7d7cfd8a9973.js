"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [266],
  {
    192: (t, e, a) => {
      a.d(e, { Yq: () => n, cn: () => i });
      var r = a(2596),
        o = a(9688);
      let n = (t) => {
        let e = new Date(t);
        return ""
          .concat(e.getFullYear(), "/")
          .concat(String(e.getMonth() + 1).padStart(2, "0"), "/")
          .concat(String(e.getDate()).padStart(2, "0"));
      };
      function i() {
        for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
          e[a] = arguments[a];
        return (0, o.QP)((0, r.$)(e));
      }
    },
    8323: (t, e, a) => {
      a.d(e, { Kd: () => d, g6: () => s, Cz: () => c });
      let r = [
        {
          id: "1",
          name: "政策與倡議",
          slug: "policy-and-advocacy",
          description: "關注教育、醫療、社會福利等公共福祉政策與改革措施",
          sort_order: "6",
          created_at: "2025-04-13 11:48:29",
          updated_at: "2025-04-13 11:48:29",
        },
        {
          id: "2",
          name: "生活與實踐",
          slug: "life-and-practice",
          description: "永續消費與綠色生活（如減塑、節能、省水）",
          sort_order: "5",
          created_at: "2025-04-13 11:50:02",
          updated_at: "2025-04-13 11:50:02",
        },
        {
          id: "6",
          name: "企業轉型與淨零",
          slug: "business-transformation-and-net-zero",
          description: "創新解決方案、循環經濟等，推動企業實現環保與利潤雙贏。",
          sort_order: "4",
          created_at: "2025-04-13 11:55:00",
          updated_at: "2025-04-13 11:56:59",
        },
        {
          id: "4",
          name: "科技與解方",
          slug: "technology-and-solutions",
          description: "應用於各行各業的智能化解決方案。",
          sort_order: "3",
          created_at: "2025-04-13 11:52:40",
          updated_at: "2025-04-13 11:57:09",
        },
        {
          id: "5",
          name: "數據與圖解",
          slug: "data-and-visualization",
          description: "如何將數據轉換為商業洞察，並利用視覺化工具來輔助決策。",
          sort_order: "2",
          created_at: "2025-04-13 11:53:24",
          updated_at: "2025-04-13 11:53:24",
        },
        {
          id: "7",
          name: "觀點與故事",
          slug: "perspectives-and-stories",
          description:
            "探索社會問題、文化趨勢、全球視野等話題，提供不同視角的觀點。",
          sort_order: "1",
          created_at: "2025-04-13 11:58:06",
          updated_at: "2025-04-13 11:58:12",
        },
      ];
      var o = a(9509);
      let n =
          o.env.NEXT_PUBLIC_API_URL ||
          "https://drgrowupdashboard.futual.co/api/v1",
        i = "true" === o.env.USE_MOCK_DATA,
        d = async () => {
          if (i)
            return await new Promise((t) => {
              setTimeout(() => {
                t(r);
              }, 100);
            });
          let t = await fetch("".concat(n, "/categories"), {
            next: { revalidate: 3600 },
          });
          if (!t.ok) throw Error("Failed to fetch blog categories");
          let { data: e } = await t.json();
          return e;
        },
        s = async (t) => {
          let { page: e, limit: a } = t,
            r = t.sort_by || "views",
            o = t.category_id || void 0,
            i = new URLSearchParams();
          (i.append("page", e.toString()),
            i.append("limit", a.toString()),
            i.append("sort_by", r),
            o && i.append("category_id", o));
          let d = await fetch("".concat(n, "/articles?").concat(i.toString()), {
            next: { revalidate: 3600 },
          });
          if (!d.ok) throw Error("Failed to fetch blog posts");
          let { data: s } = await d.json();
          return s;
        },
        c = async (t) => {
          let { keyword: e, page: a, limit: r, sort_by: o } = t;
          if (!e) throw Error("Keyword is required for search");
          let i = new URLSearchParams();
          (i.append("q", e),
            o && i.append("sort_by", o),
            i.append("page", a.toString()),
            i.append("limit", r.toString()));
          let d = await fetch(
            "".concat(n, "/articles/search?").concat(i.toString()),
            { next: { revalidate: 3600 } },
          );
          if (!d.ok) throw Error("Failed to fetch blog posts");
          let { data: s } = await d.json();
          return s;
        };
    },
  },
]);
