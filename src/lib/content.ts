/**
 * Bilingual content for the portfolio.
 * Source: https://jobinja.ir/user/heydarihadi (Hadi Heydari — Product Designer)
 *
 * All textual information from the profile is preserved verbatim in Persian
 * and mirrored in English. Projects not present on the public profile
 * (Mafia Master, Forums Design System) are authored to match the brief while
 * staying consistent with the designer's real experience & skill set.
 */

export type Bi = { fa: string; en: string };

export type ProjectSize = "large" | "small";

export type ToolCategory =
  | "design"
  | "research"
  | "prototyping"
  | "dev"
  | "management";

export type Tool = {
  name: string;
  category: ToolCategory;
};

export type GalleryImage = {
  src: string;
  alt: Bi;
  span: "wide" | "tall" | "square";
  /**
   * Natural aspect ratio (width / height) of the source image.
   * Used to reserve space for the loading skeleton so the grid
   * doesn't shift when images finish loading.
   * Examples: 0.462 for 1080×2340 portrait, 1.75 for 16:9 landscape, 1 for square.
   */
  aspectRatio?: number;
};

export type Project = {
  id: string;
  title: Bi;
  role: Bi;
  year: Bi; // fa = Jalali (شمسی), en = Gregorian (میلادی)
  size: ProjectSize;
  cover: string;
  accent: string; // tailwind gradient classes for the card glow
  tagline: Bi;
  overview: Bi;
  roleDescription: Bi;
  responsibilities: Bi[];
  tools: Tool[];
  gallery: GalleryImage[];
  link?: { label: Bi; href: string };
};

// ---------------------------------------------------------------------------
// PROJECTS — Apple Bento Grid (2 rows: 3 large + 2 small)
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  // 1 — DUTAR DASHBOARD (Large)
  {
    id: "dutar-dashboard",
    title: { fa: "داشبورد دوتر", en: "Dutar Dashboard" },
    role: { fa: "طراح محصول", en: "Product Designer" },
    year: { fa: "۱۴۰۱ – ۱۴۰۴", en: "2022 – 2025" },
    size: "large",
    cover: "/images/Dotaar Dashboard/9-Total Sales.webp",
    accent: "from-amber-200/60 to-rose-200/40 dark:from-amber-500/10 dark:to-rose-500/5",
    tagline: {
      fa: "پنل مدیریت اختصاصی برای رستوران‌ها و کافه‌ها",
      en: "A dedicated management panel for restaurants & cafes",
    },
    overview: {
      fa: "داشبورد دوتر، مرکز فرماندهی پلتفرم دوتر است؛ جایی که مدیران رستوران و کافه تمام عملیات روزانه‌شان را از یک نقطه مدیریت می‌کنند. از مدیریت سفارش‌ها (پیش‌سفارش، حضوری/بیرون‌بر، رزرو میز) تا ناحیه‌بندی ارسال، تنظیم ساعات کاری، تخفیف‌ها و دسته‌بندی محصولات. این سامانه سفارشی، برای کسب‌وکارهای متوسط و بزرگ طراحی شده تا عملیات روزانه را ساده‌تر کند.",
      en: "Dutar Dashboard is the command center of the Dutar platform, where restaurant and cafe managers run their entire daily operation from a single place. From order management (pre-order, dine-in/takeout, table reservation) to delivery zoning, working hours, discounts, and product categorization. This custom system is designed for medium and large businesses to simplify everyday operations.",
    },
    roleDescription: {
      fa: "به‌عنوان هم‌بنیان‌گذار و طراح محصول، از مرحله ایده‌پردازی تا طراحی تجربه و رابط کاربری و تعریف جزئیات عملکرد را شخصاً بر عهده داشتم و در تعامل با همکار فنی، پیاده‌سازی محصول را پیش بردیم.",
      en: "As co-founder and product designer, I personally owned everything from ideation to UX/UI design and defining functional details, driving implementation together with the technical co-founder.",
    },
    responsibilities: [
      {
        fa: "تحقیق بر روی کاربران و تحلیل رقبا برای کشف نیازها، تعریف MVP و اولویت‌بندی ویژگی‌ها.",
        en: "User research and competitor analysis to uncover needs, define the MVP, and prioritize features.",
      },
      {
        fa: "طراحی یوزر فلوها، وایرفریم‌ها و سیستم طراحی (شامل کامپوننت لایبرری، دیزاین گاید و توکن‌های رنگ).",
        en: "Designed user flows, wireframes, and the full design system (component library, design guide, color tokens).",
      },
      {
        fa: "آزمایش نسخه‌های آنلاین و محلی برای ایجاد تجربه کاربری یکپارچه.",
        en: "Tested online and local builds to deliver a seamless user experience.",
      },
      {
        fa: "تعریف ویژگی‌های اصلی مانند مدیریت سفارش، ناحیه‌بندی ارسال، تنظیم ساعات کاری، تخفیف‌ها و دسته‌بندی محصولات.",
        en: "Defined core features such as order management, delivery zoning, working hours, discounts, and product categorization.",
      },
    ],
    tools: [
      { name: "Figma", category: "design" },
      { name: "FigJam", category: "research" },
      { name: "Notion", category: "management" },
      { name: "Maze", category: "research" },
      { name: "ProtoPie", category: "prototyping" },
      { name: "Design Tokens", category: "design" },
    ],
    gallery: [
      {
        src: "/images/Dotaar Dashboard/1-Login & Register.webp",
        alt: { fa: "ورود و ثبت‌نام", en: "Login & Register" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/2-Business Information.webp",
        alt: { fa: "اطلاعات کسب‌وکار", en: "Business Information" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/3-Ordering.webp",
        alt: { fa: "سفارش‌گیری", en: "Ordering" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/4-Operational Hours.webp",
        alt: { fa: "ساعات کاری", en: "Operational Hours" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/5-Categories.webp",
        alt: { fa: "دسته‌بندی‌ها", en: "Categories" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/6-Delivery Zone.webp",
        alt: { fa: "ناحیه ارسال", en: "Delivery Zone" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/7-Business Status.webp",
        alt: { fa: "وضعیت کسب‌وکار", en: "Business Status" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/8-Incoming Orders.webp",
        alt: { fa: "سفارشات ورودی", en: "Incoming Orders" },
        span: "tall",
        aspectRatio: 0.562,
      },
      {
        src: "/images/Dotaar Dashboard/9-Total Sales.webp",
        alt: { fa: "مجموع فروش", en: "Total Sales" },
        span: "tall",
        aspectRatio: 0.562,
      },
    ],
  },

  // 2 — DUTAR SHOP (Large)
  {
    id: "dutar-shop",
    title: { fa: "فروشگاه دوتر", en: "Dutar Shop" },
    role: { fa: "طراح محصول", en: "Product Designer" },
    year: { fa: "۱۴۰۱ – ۱۴۰۴", en: "2022 – 2025" },
    size: "large",
    cover: "/images/Dotaar Store/1-Products.webp",
    accent: "from-emerald-200/60 to-teal-200/40 dark:from-emerald-500/10 dark:to-teal-500/5",
    tagline: {
      fa: "تجربه سفارش‌گیری آنلاین برای مشتریان",
      en: "The online ordering experience for customers",
    },
    overview: {
      fa: "فروشگاه دوتر، سمت مشتری پلتفرم دوتر است؛ رابطی روان برای مرور منو، افزودن به سبد، پیش‌سفارش، انتخاب حضوری یا بیرون‌بر و رزرو میز. انگیزه این پروژه از تجربه کار در رستوران نشأت گرفت، جایی که شناخت عمیقی از فرایند سفارش‌گیری، ارسال و مدیریت پیدا کردم. هدف، تجربه‌ای ساده و مطمئن برای کاربر نهایی بود.",
      en: "Dutar Shop is the customer-facing side of the Dutar platform — a smooth interface for browsing the menu, adding to cart, pre-ordering, choosing dine-in or takeout, and reserving a table. The motivation came from hands-on experience working in a restaurant, where I gained deep insight into the ordering, delivery, and management process. The goal was a simple, trustworthy experience for the end user.",
    },
    roleDescription: {
      fa: "در نقش طراح محصول، تجربه کامل کاربر از اولین لمس تا تکمیل سفارش را طراحی کردم؛ با تمرکز بر ساده‌سازی مسیر خرید و کاهش اصطکاک در هر گام.",
      en: "As product designer, I designed the full user journey from first touch to order completion — focusing on simplifying the purchase path and reducing friction at every step.",
    },
    responsibilities: [
      {
        fa: "طراحی مسیر خرید (یوزر فلو) برای پیش‌سفارش، حضوری/بیرون‌بر و رزرو میز.",
        en: "Designed the purchase flow for pre-order, dine-in/takeout, and table reservation.",
      },
      {
        fa: "طراحی کامپوننت‌های واکنش‌گرا و سازگار با موبایل برای منو و سبد خرید.",
        en: "Designed responsive, mobile-first components for the menu and cart.",
      },
      {
        fa: "تست‌های کاربردی محلی و آنلاین برای بهبود نرخ تبدیل.",
        en: "Ran local and online usability tests to improve conversion.",
      },
      {
        fa: "هم‌راستاسازی طراحی با سیستم طراحی یکپارچه دوتر.",
        en: "Aligned all design with Dutar's unified design system.",
      },
    ],
    tools: [
      { name: "Figma", category: "design" },
      { name: "FigJam", category: "research" },
      { name: "ProtoPie", category: "prototyping" },
      { name: "Maze", category: "research" },
      { name: "Notion", category: "management" },
      { name: "Copywriting", category: "design" },
    ],
    gallery: [
      {
        src: "/images/Dotaar Store/1-Products.webp",
        alt: { fa: "فهرست محصولات", en: "Products list" },
        span: "wide",
        aspectRatio: 1.75,
      },
      {
        src: "/images/Dotaar Store/2-Product Details.webp",
        alt: { fa: "جزئیات محصول", en: "Product details" },
        span: "square",
        aspectRatio: 1.0,
      },
    ],
  },

  // 3 — MAFIA MASTER (Large)
  {
    id: "mafia-master",
    title: { fa: "مافیا مستر", en: "Mafia Master" },
    role: { fa: "Vibe Coding", en: "Vibe Coding" },
    year: { fa: "۱۴۰۴", en: "2025" },
    size: "large",
    cover: "/images/Mafia Master/mafia-1.jpg",
    accent: "from-rose-200/60 to-orange-200/40 dark:from-rose-500/10 dark:to-orange-500/5",
    tagline: {
      fa: "بازی اجتماعی مافیا با تجربه‌ای سینمایی",
      en: "The social Mafia game with a cinematic experience",
    },
    overview: {
      fa: "مافیا مستر، بازآفرینی مدرن بازی کلاسیک مافیا است؛ جایی که نقش‌ها، شب‌ها و رای‌گیری‌ها در رابطی تاریک و احساسی روایت می‌شوند. این پروژه با رویکرد «وایب کدینگ» ساخته شد؛ هم‌افزایی میان طراحی محصول، سرعت تکرار و ابزارهای مبتنی بر هوش مصنوعی برای تبدیل ایده به محصول قابل‌عرضه.",
      en: "Mafia Master is a modern reimagining of the classic Mafia game, where roles, nights, and voting unfold in a dark, atmospheric interface. It was built with a “vibe coding” approach — a synthesis of product design, fast iteration, and AI-assisted tooling to turn an idea into a shippable product.",
    },
    roleDescription: {
      fa: "در نقش وایب کدینگ، طراحی محصول و هدایت ابزارهای توسعه هوش‌مند را بر عهده داشتم؛ از طراحی رابط و تعریف قواعد بازی تا ساخت محصول نهایی با تکرارهای سریع.",
      en: "In the vibe-coding role, I owned product design and the orchestration of AI-assisted development tools — from interface design and game-rule definition to shipping the final product through rapid iterations.",
    },
    responsibilities: [
      {
        fa: "طراحی تجربه و رابط کاربری با حال‌وهوای سینمایی و تاریک.",
        en: "Designed the UX/UI with a cinematic, dark aesthetic.",
      },
      {
        fa: "تعریف قواعد بازی و جریان‌های کاربری برای نقش‌ها، شب و رای‌گیری.",
        en: "Defined game rules and user flows for roles, night, and voting phases.",
      },
      {
        fa: "ساخت سریع نمونه‌های اولیه قابل‌تعامل با ابزارهای مبتنی بر هوش مصنوعی.",
        en: "Built fast, interactive prototypes with AI-assisted tooling.",
      },
      {
        fa: "تکرار و بهبود مستمر بر اساس بازخورد بازیکنان.",
        en: "Iterated continuously based on player feedback.",
      },
    ],
    tools: [
      { name: "Figma", category: "design" },
      { name: "Cursor", category: "dev" },
      { name: "v0", category: "dev" },
      { name: "Next.js", category: "dev" },
      { name: "TypeScript", category: "dev" },
      { name: "Tailwind CSS", category: "design" },
    ],
    gallery: [
      {
        src: "/images/Mafia Master/mafia-1.jpg",
        alt: { fa: "پوستر بازی مافیا مستر", en: "Mafia Master game poster" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-2.jpg",
        alt: { fa: "حالت‌های بازی", en: "Game mode selection" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-3.jpg",
        alt: { fa: "توضیح نقش‌های بازی", en: "Game roles explanation" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-4.jpg",
        alt: { fa: "تاریخچه بازی‌ها", en: "Game history logs" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-5.jpg",
        alt: { fa: "مدیریت شرکت‌کنندگان", en: "Manage participants" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-6.jpg",
        alt: { fa: "شروع دور جدید بازی", en: "Start new game round" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-7.jpg",
        alt: { fa: "تنظیمات تایمر فازهای بازی", en: "Phase timer settings" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-8.jpg",
        alt: { fa: "تأیید انتخاب نقش", en: "Role selection confirm" },
        span: "tall",
        aspectRatio: 0.462,
      },
      {
        src: "/images/Mafia Master/mafia-9.jpg",
        alt: { fa: "جشن پیروزی در بازی", en: "Game victory celebration" },
        span: "tall",
        aspectRatio: 0.462,
      },
    ],
  },

  // FORUMS DESIGN SYSTEM removed from portfolio listing as requested

  // 4 — DEV SOLUTIONS (Small)
  {
    id: "dev-solutions",
    title: { fa: "دِو سولوشن", en: "Dev Solutions" },
    role: { fa: "طراح رابط و تجربه کاربری", en: "UI/UX Designer" },
    year: { fa: "۱۴۰۲ – ۱۴۰۳", en: "2023 – 2024" },
    size: "small",
    cover: "/images/Dev Solutions/1-DS Index.webp",
    accent: "from-stone-200/60 to-neutral-200/40 dark:from-stone-500/10 dark:to-neutral-500/5",
    tagline: {
      fa: "وب‌سایت و پنل مدیریت آژانس طراحی",
      en: "Agency website & management panel",
    },
    overview: {
      fa: "به‌عنوان هم‌بنیان‌گذار و طراح تجربه و رابط کاربری در آژانس «دِو سولوشن»، نقش کلیدی در تأسیس و هدایت این مجموعه خدمات طراحی سایت و مدیریت شبکه‌های اجتماعی ایفا کردم. این پروژه که پیش از راه‌اندازی نهایی سامانه «دوتر» آغاز شد، سکوی پرتابی برای ورود به چالش‌های پیشرفته‌تر طراحی محصول بود.",
      en: "As co-founder and UX/UI designer at the “Dev Solutions” agency, I played a key role in founding and leading this web-design and social-media-management service. Starting before Dutar's final launch, it was a launchpad into more advanced product-design challenges.",
    },
    roleDescription: {
      fa: "هدایت پروژه‌های طراحی وب برای مشتریان آژانس، با تمرکز بر طراحی رابط‌هایی کاربرمحور، ساده و اثربخش.",
      en: "Led web-design projects for agency clients, focusing on user-friendly, simple, and effective interfaces.",
    },
    responsibilities: [
      {
        fa: "طراحی تجربه و رابط کاربری وب‌سایت اصلی دِو سولوشن، از جمله صفحات ارسال درخواست همکاری و وبلاگ آموزشی.",
        en: "Designed the UX/UI of the main Dev Solutions website, including collaboration-request pages and an educational blog.",
      },
      {
        fa: "طراحی پنل مدیریت اختصاصی برای مشاهده و پردازش پیام‌های دریافتی کاربران.",
        en: "Designed a dedicated admin panel for viewing and processing incoming user messages.",
      },
      {
        fa: "انجام تحقیقات کاربر و تحلیل رقبا برای تعریف ویژگی‌های کلیدی.",
        en: "Conducted user research and competitor analysis to define key features.",
      },
    ],
    tools: [
      { name: "Figma", category: "design" },
      { name: "Photoshop", category: "design" },
      { name: "Illustrator", category: "design" },
      { name: "Notion", category: "management" },
    ],
    gallery: [
      {
        src: "/images/Dev Solutions/1-DS Index.webp",
        alt: { fa: "نمای اصلی دِو سولوشن", en: "Dev Solutions index" },
        span: "wide",
        aspectRatio: 1.75,
      },
      {
        src: "/images/Dev Solutions/2-Request.webp",
        alt: { fa: "فرم درخواست همکاری", en: "Collaboration request" },
        span: "square",
        aspectRatio: 1.0,
      },
      {
        src: "/images/Dev Solutions/3-Blog page.webp",
        alt: { fa: "صفحه بلاگ آموزشی", en: "Blog page" },
        span: "square",
        aspectRatio: 1.0,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE / RESUME
// ---------------------------------------------------------------------------

export type Experience = {
  id: string;
  role: Bi;
  company: Bi;
  period: Bi;
  start: string; // ISO-ish for ordering
  current?: boolean;
  summary: Bi;
  responsibilities: Bi[];
  goal?: Bi;
};

export const experiences: Experience[] = [
  {
    id: "dutar",
    role: { fa: "طراح محصول", en: "Product Designer" },
    company: { fa: "دوتر", en: "Dutar" },
    period: { fa: "شهریور ۱۴۰۱ – خرداد ۱۴۰۴", en: "Sep 2022 – Jun 2025" },
    start: "2022-09",
    current: false,
    summary: {
      fa: "به‌عنوان هم‌بنیان‌گذار و طراح محصول دوتر، از مرحله ایده‌پردازی تا طراحی تجربه و رابط کاربری و تعریف جزئیات عملکرد را شخصاً بر عهده داشتم و در تعامل با همکار فنی، پیاده‌سازی محصول را پیش بردیم. دوتر پلتفرم آنلاین اشتراکی برای سفارش‌گیری و مدیریت داخلی رستوران‌ و کافه‌ها است؛ که خدمات اختصاصی برای هر فروشگاه ارائه می‌دهد و نیازهای اساسی آنها را پوشش می‌دهد. انگیزه پروژه از تجربه‌ی کار در رستوران نشأت گرفت، جایی که شناخت عمیقی از فرایند سفارش‌گیری، ارسال و مدیریت پیدا کردم.",
      en: "As co-founder and product designer of Dutar, I personally owned everything from ideation to UX/UI design and defining functional details, driving implementation with the technical co-founder. Dutar is an online subscription platform for ordering and internal management of restaurants and cafes, offering dedicated services for each venue and covering their essential needs. The project's motivation grew from hands-on experience working in a restaurant, where I gained deep insight into the ordering, delivery, and management process.",
    },
    responsibilities: [
      {
        fa: "تحقیق بر روی کاربران و تحلیل رقبا برای کشف نیازها، تعریف MVP و اولویت‌بندی ویژگی‌ها.",
        en: "User research and competitor analysis to discover needs, define the MVP, and prioritize features.",
      },
      {
        fa: "طراحی یوزر فلوها، وایرفریم‌ها و سیستم طراحی (شامل کامپوننت لایبرری، دیزاین گاید و توکن‌های رنگ).",
        en: "Designed user flows, wireframes, and the design system (component library, design guide, color tokens).",
      },
      {
        fa: "آزمایش نسخه‌های آنلاین و محلی برای ایجاد تجربه کاربری یکپارچه.",
        en: "Tested online and local versions to create a seamless user experience.",
      },
      {
        fa: "تعریف ویژگی‌های اصلی مانند مدیریت سفارش (پیش‌سفارش، حضوری/بیرون‌بر، رزرو میز)، ناحیه‌بندی ارسال، تنظیم ساعات کاری، تخفیف‌ها و دسته‌بندی محصولات، و برخی موارد دیگر.",
        en: "Defined core features such as order management (pre-order, dine-in/takeout, table reservation), delivery zoning, working hours, discounts, and product categorization, among others.",
      },
    ],
    goal: {
      fa: "ایجاد سیستمی سفارشی و کارآمد برای کسب‌وکارهای متوسط و بزرگ، که عملیات روزانه را ساده‌تر کند. این پروژه مهارت‌های من در طراحی محصول را تقویت کرد و مستقیماً از تجربیات عملی‌ام بهره برد.",
      en: "Create a customized, efficient system for medium and large businesses that simplifies daily operations. This project strengthened my product-design skills and drew directly on my hands-on experience.",
    },
  },
  {
    id: "dev-solutions",
    role: { fa: "طراح رابط و تجربه کاربری (UI/UX)", en: "UI/UX Designer" },
    company: { fa: "دِو سولوشن", en: "Dev Solutions" },
    period: { fa: "آذر ۱۴۰۲ – مرداد ۱۴۰۳", en: "Dec 2023 – Aug 2024" },
    start: "2023-12",
    current: false,
    summary: {
      fa: "به‌عنوان هم‌بنیان‌گذار و طراح تجربه و رابط کاربری در آژانس «دِو سولوشن» (Dev Solutions)، نقش کلیدی در تأسیس و هدایت این مجموعه خدمات طراحی سایت و مدیریت شبکه‌های اجتماعی ایفا کردم. این پروژه که پیش از راه‌اندازی نهایی سامانه «دوتر» آغاز شد، سکوی پرتابی برای ورود به چالش‌های پیشرفته‌تر طراحی محصول بود. کار در دِو سولوشن به من دیدی عملی درباره‌ی ساخت نمونه‌های اولیه، سنجش نیاز بازار، و طراحی محصول قابل عرضه داد.",
      en: "As co-founder and UX/UI designer at the “Dev Solutions” agency, I played a key role in founding and leading this web-design and social-media-management service. Starting before Dutar's final launch, it was a launchpad into more advanced product-design challenges. Working at Dev Solutions gave me a practical view of building prototypes, measuring market needs, and designing marketable products.",
    },
    responsibilities: [
      {
        fa: "طراحی تجربه و رابط کاربری وب‌سایت اصلی دِو سولوشن، از جمله صفحات ارسال درخواست همکاری، وبلاگ آموزشی، و یک پنل مدیریت اختصاصی برای مشاهده و پردازش پیام‌های دریافتی کاربران.",
        en: "Designed the UX/UI of the main Dev Solutions website, including collaboration-request pages, an educational blog, and a dedicated admin panel for viewing and processing incoming user messages.",
      },
      {
        fa: "هدایت پروژه‌های طراحی وب برای مشتریان آژانس، با تمرکز بر طراحی رابط‌هایی کاربرمحور، ساده و اثربخش.",
        en: "Led web-design projects for agency clients, focusing on user-friendly, simple, and effective interfaces.",
      },
      {
        fa: "انجام تحقیقات کاربر و تحلیل رقبا برای تعریف ویژگی‌های کلیدی و ایجاد جریان‌های کاربری یکپارچه و هدفمند.",
        en: "Conducted user research and competitor analysis to define key features and create integrated, purposeful user flows.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// EDUCATION & LANGUAGES
// ---------------------------------------------------------------------------

export type Education = {
  id: string;
  degree: Bi;
  school: Bi;
  period: Bi;
};

export const education: Education[] = [
  {
    id: "graphic",
    degree: { fa: "دیپلم گرافیک رایانه‌ای", en: "Computer Graphics (Diploma)" },
    school: { fa: "نواب صفویی", en: "Navab Safavi" },
    period: { fa: "۱۳۸۹ – ۱۴۰۱", en: "2010 – 2022" },
  },
];

export type LanguageSkill = {
  name: Bi;
  level: Bi;
  percent: number;
};

export const languages: LanguageSkill[] = [
  {
    name: { fa: "انگلیسی", en: "English" },
    level: { fa: "مبتدی", en: "Beginner" },
    percent: 25,
  },
  {
    name: { fa: "فارسی", en: "Persian" },
    level: { fa: "زبان مادری", en: "Native" },
    percent: 100,
  },
];

// ---------------------------------------------------------------------------
// SKILLS (from profile + design tools)
// ---------------------------------------------------------------------------

export type SkillGroup = {
  id: string;
  label: Bi;
  /** A short one-line description of what this category's skills mean. */
  description: Bi;
  items: Bi[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "design",
    label: { fa: "طراحی", en: "Design" },
    description: {
      fa: "ساخت رابط و تجربه‌ی بصری محصول",
      en: "Crafting the product's visual and interaction layer",
    },
    items: [
      { fa: "سیستم طراحی", en: "Design Systems" },
      { fa: "وایرفریمینگ", en: "Wireframing" },
      { fa: "نمونه‌سازی", en: "Prototyping" },
      { fa: "رابط و تجربه کاربری", en: "UI / UX" },
      { fa: "کپی‌رایتینگ", en: "Copywriting" },
    ],
  },
  {
    id: "process",
    label: { fa: "فرایند", en: "Process" },
    description: {
      fa: "روش‌های کشف نیاز و تعریف راه‌حل",
      en: "Methods to discover needs and define solutions",
    },
    items: [
      { fa: "حل مسئله", en: "Problem-Solving" },
      { fa: "یوزر فلو", en: "User Flow" },
      { fa: "تحقیق کاربر", en: "User Research" },
      { fa: "تحلیل رقبا", en: "Competitor Analysis" },
      { fa: "تعریف MVP", en: "MVP Definition" },
    ],
  },
  {
    id: "tools",
    label: { fa: "ابزارها", en: "Tools" },
    description: {
      fa: "نرم‌افزارهایی که روزانه با آن‌ها کار می‌کنم",
      en: "Software I work with daily",
    },
    items: [
      { fa: "فیگما", en: "Figma" },
      { fa: "فیگ‌جم", en: "FigJam" },
      { fa: "پروتویی", en: "ProtoPie" },
      { fa: "نوشن", en: "Notion" },
      { fa: "فتوشاپ", en: "Photoshop" },
      { fa: "ایلاستریتور", en: "Illustrator" },
    ],
  },
];

// Personal info from the profile
export const profile = {
  name: { fa: "هادی حیدری", en: "Hadi Heydari" },
  role: { fa: "طراح محصول", en: "Product Designer" },
  birthYear: { fa: "۱۳۸۲", en: "2003" },
  gender: { fa: "مرد", en: "Male" },
  maritalStatus: { fa: "مجرد", en: "Single" },
  province: { fa: "خراسان رضوی", en: "Khorasan Razavi" },
  about: {
    fa: "علاقه‌مند به حل مسئله و ساخت راه‌حل‌های نوآورانه‌ام؛ تجربه‌ی کارآفرینی به من مسئولیت‌پذیری و تاب‌آوری آموخت، و باور دارم مسیر رشد از یادگیری مستمر، پذیرش بازخورد و اصلاح آگاهانه شکل می‌گیرد.",
    en: "I'm passionate about problem-solving and building innovative solutions; my entrepreneurial experience taught me responsibility and resilience, and I believe growth is shaped through continuous learning, embracing feedback, and conscious improvement.",
  },
  // Contact via Jobinja (email/phone are private — routed through Jobinja)
  jobinjaUrl: "https://jobinja.ir/user/heydarihadi",
  resumeCode: "FK-8442866",
  updatedAt: { fa: "۱۴۰۵/۰۲/۰۶", en: "2026-05-27" },
};

// Stats for hero
export const heroStats = [
  { value: "۴", valueEn: "4", label: { fa: "سال تجربه", en: "yrs experience" } },
  { value: "۵+", valueEn: "5+", label: { fa: "پروژه", en: "projects" } },
];
