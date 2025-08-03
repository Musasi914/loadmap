export interface SkillCategory {
  title: string;
  priority: "high" | "medium" | "low";
  skills: string[];
}

export interface Goal {
  text: string;
}

export interface Phase {
  title: string;
  duration: string;
  skillCategories: SkillCategory[];
  goals: Goal[];
}

export const phases: Phase[] = [
  {
    title: "🏗️ Phase 1: 技術基盤の強化",
    duration: "9-11月",
    skillCategories: [
      {
        title: "🎯 最優先技術",
        priority: "high",
        skills: ["React Three Fiber完全習得", "GLSL Shader深掘り", "Three.js最適化技術", "TypeScript高度な型定義"],
      },
      {
        title: "🔧 開発効率化",
        priority: "medium",
        skills: ["Vite/Webpack設定", "ESLint/Prettier設定", "Git/GitHub Actions", "Docker基礎"],
      },
    ],
    goals: [
      { text: "Three.jsを使った印象的な3Dポートフォリオサイト完成" },
      { text: "Shader作品を3-5個制作してGitHubに公開" },
      { text: "技術ブログ開設（週1記事投稿開始）" },
    ],
  },
  {
    title: "🎨 Phase 2: ポートフォリオ構築",
    duration: "10-12月",
    skillCategories: [
      {
        title: "🖼️ 作品制作",
        priority: "high",
        skills: ["企業サイト風インタラクティブデモ", "WebGL実験的アート作品", "レスポンシブ3Dポートフォリオ", "パフォーマンス最適化事例"],
      },
      {
        title: "🌐 Web標準・SEO",
        priority: "medium",
        skills: ["Core Web Vitals最適化", "SSR/SSG with Next.js", "PWA実装", "アクセシビリティ監査"],
      },
    ],
    goals: [
      { text: "個人ブランディング用Webサイト完成" },
      { text: "GitHub Star獲得プロジェクト1つ以上" },
      { text: "技術記事のはてブ・Qiita投稿で認知度向上" },
    ],
  },
  {
    title: "💼 Phase 3: 初期実績構築",
    duration: "11-2月",
    skillCategories: [
      {
        title: "💰 収益化開始",
        priority: "high",
        skills: ["クラウドワークス小規模案件", "知人・友人からの紹介案件", "技術コンテンツ販売", "オンライン講座作成"],
      },
      {
        title: "🤝 ビジネススキル",
        priority: "medium",
        skills: ["提案書・見積書作成", "クライアント要件定義", "プロジェクト管理手法", "契約・請求業務"],
      },
    ],
    goals: [{ text: "月収20-30万円達成" }, { text: "リピーター客を2-3社獲得" }, { text: "個人開業届提出・青色申告準備" }],
  },
  {
    title: "🚀 Phase 4: 専門性の確立",
    duration: "来年2-8月",
    skillCategories: [
      {
        title: "🎯 差別化技術",
        priority: "high",
        skills: ["WebXR/AR開発", "AI × 3D連携技術", "リアルタイム通信実装", "WebAssembly活用"],
      },
      {
        title: "📈 事業拡大",
        priority: "medium",
        skills: ["高単価案件獲得戦略", "パートナー企業開拓", "技術顧問・コンサル業", "チーム体制構築検討"],
      },
    ],
    goals: [{ text: "月収50-80万円達成" }, { text: "業界内での認知度確立" }, { text: "登壇・執筆などの対外活動開始" }],
  },
  {
    title: "🏆 Phase 5: 安定経営フェーズ",
    duration: "来年9月以降",
    skillCategories: [
      {
        title: "💡 事業多角化",
        priority: "high",
        skills: ["プロダクト開発・販売", "サブスクリプション事業", "技術書執筆・出版", "オンラインスクール運営"],
      },
      {
        title: "🌟 将来展望",
        priority: "low",
        skills: ["法人化検討", "海外クライアント開拓", "技術投資・M&A", "次世代技術への適応"],
      },
    ],
    goals: [{ text: "月収100万円以上の安定化" }, { text: "業界リーダーとしての地位確立" }, { text: "持続可能な事業モデル構築" }],
  },
];
