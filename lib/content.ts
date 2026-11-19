// SK Events: copy for both languages. Facts that the client should confirm are marked CONFIRM.
export type Lang = "en" | "ar";

export const WA_NUMBER = "971564734640";
export const PHONE_DISPLAY = "+971 56 473 4640";
export const EMAIL = "skeventsshj@gmail.com";
export const IG_URL = "https://www.instagram.com/skevents1/";
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

type Img = { src: string; alt: string; ratio: string };
const img = (n: string, alt: string, ratio = "aspect-[4/5]"): Img => ({ src: `/images/sk-${n}.jpg`, alt, ratio });

export const HERO_IMAGE = { src: "/images/sk-01.jpg", alt: "White arched wedding stage with chandeliers and hydrangeas" };
export const ABOUT_IMAGES = [
  { src: "/images/sk-01.jpg", alt: "Arched wedding stage decor" },
  { src: "/images/events/rixos-new-year.jpg", alt: "LED screen stage at a New Year party in Dubai" },
];

export const EVENT_IMAGES = [
  "/images/events/mehtab-virk.jpg",
  "/images/events/talk-show.jpg",
  "/images/events/rixos-new-year.jpg",
  "/images/events/boston-scientific.jpg",
  "/images/events/ora-club.jpg",
  "/images/events/meydan-vip.jpg",
  "/images/events/meraki-fashion.jpg",
  "/images/events/russian-ballet.jpg",
  "/images/events/live-concert.jpg",
];

// bg is each logo's own background colour so the tiles look clean
export const CLIENTS = [
  { name: "AASA CP Holding Company", file: "aasa", w: 423, h: 174, bg: "#ffffff" },
  { name: "Be Unique", file: "be-unique", w: 400, h: 240, bg: "#000000" },
  { name: "Digital Fashion Leading", file: "digital-fashion-leading", w: 272, h: 280, bg: "#000000" },
  { name: "Dubai International Airport", file: "dubai-airport", w: 334, h: 176, bg: "#f7d62c" },
  { name: "Emirates Short Film Festival", file: "emirates-short-film-festival", w: 204, h: 180, bg: "#000000" },
  { name: "Expo 2020 Dubai", file: "expo-2020", w: 309, h: 231, bg: "#ffffff" },
  { name: "Holly Dreams Productions", file: "holly-dreams", w: 308, h: 248, bg: "#010101" },
  { name: "Meydan Freezone", file: "meydan-freezone", w: 520, h: 236, bg: "#000000" },
  { name: "Miss Cosmos Queen", file: "miss-cosmos-queen", w: 264, h: 300, bg: "#000002" },
  { name: "Novotel Hotels & Resorts", file: "novotel", w: 407, h: 180, bg: "#ffffff" },
  { name: "TEPA Tamil Entrepreneurs", file: "tepa", w: 292, h: 294, bg: "#ffffff" },
  { name: "VIBE Creations Media LLC", file: "vibe-creations", w: 423, h: 231, bg: "#ffffff" },
];

export const GALLERY: Img[] = [
  img("01", "Arched white wedding stage with chandeliers and white hydrangeas"),
  img("11", "Groom in a black and gold bisht seated beneath a chandelier", "aspect-square"),
  img("02", "Bride in a silk robe beside her gown by the window", "aspect-[3/4]"),
  img("04", "Bride holding a white peony bouquet"),
  img("14", "Groom seated with his ghutra drawn across his face", "aspect-[3/4]"),
  img("09", "Perfume, invitation card and pearl heels", "aspect-square"),
];

// Icon names used by the services cards (drawn in Site.tsx)
export const SERVICE_ICONS = ["gem", "camera", "building", "star", "film", "screen"] as const;

const en = {
  brand: "SK EVENTS",
  brandSub: "UAE • Est. 2012",
  nav: { home: "Home", about: "Our Legacy", services: "Services", portfolio: "Portfolio", clients: "Clients", leadership: "Leadership", contact: "Contact" },
  cta: "Book Consultation",
  hero: {
    badge: "Established in 2012 • Serving All Over UAE",
    title1: "Crafting Iconic Events &",
    title2: "Timeless Photography",
    sub: "From grand royal weddings and high-profile corporate galas in Dubai and Sharjah to cinematic visual storytelling, SK Events turns your vision into unforgettable reality.",
    plan: "Plan Your Event",
    explore: "Explore @skevents1",
    waText: "Hello SK Events, I’d like to ask about your event and photography services.",
    // CONFIRM: these figures come from the draft page and are not backed by the company profile.
    stats: [
      { value: "14+", label: "Years in UAE (Since 2012)" },
      { value: "1,200+", label: "Luxury Events Executed" },
      { value: "7", label: "Emirates Covered" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  },
  about: {
    kicker: "Who We Are",
    title: "Setting the Benchmark for Excellence in the UAE",
    p1a: "Established in ", p1b: "2012", p1c: ", ", p1d: "SK EVENTS", p1e: " has grown into one of the UAE’s most trusted names in bespoke event management and luxury photography.",
    p2a: "Led under the visionary leadership of CEO ", p2b: "Sunny Janjowa", p2c: " and Managing Director ", p2d: "Kafeel Saeed Azhar", p2e: ", we blend Arabian hospitality with international production standards.",
    p3: "We are a media production and events company specialising in photography and videography. We bring creativity, professionalism and technical skill to every project, and our goal is to capture the moments that matter to our clients.",
    badgeTitle: "Trusted Since 2012",
    badgeSub: "Dubai • Abu Dhabi • Sharjah • All UAE",
    whyKicker: "Why SK Events",
    why: [
      { title: "Fully in-house media team", text: "From pre-production to post, our own team handles everything." },
      { title: "Professional equipment", text: "Sony A7 IV, Canon 5D and 80D, a DJI drone, gimbals and cinematic lighting kits." },
      { title: "Creative direction", text: "We don’t just record your event. We build a story around it." },
      { title: "Editing excellence", text: "Fast turnaround with colour grading, sound mixing and export in multiple formats." },
      { title: "On-site and studio coverage", text: "At our studio or your venue, with the same energy and precision." },
    ],
  },
  services: {
    kicker: "Our Expertise",
    title: "Premier Services Across UAE",
    items: [
      { title: "Luxury Weddings & Nikah", text: "Bespoke floral stages, royal entrances, destination weddings across 5-star UAE venues." },
      { title: "Photography & Cinematography", text: "Editorial wedding photography, same-day event edits, aerial drone videography." },
      { title: "Corporate & Gala Events", text: "Product launches, award ceremonies, exhibitions and VIP gala dinners." },
      { title: "Creative Photoshoots", text: "Fashion, portrait and product photography shaped around each client." },
      { title: "Post-Production & Editing", text: "Colour grading, sound design and visual effects for the final film." },
      { title: "LED Screens & Live Streaming", text: "SMD LED screens, live camera feeds and streaming for concerts and events." },
    ],
  },
  portfolio: {
    kicker: "Visual Gallery",
    title: "Captured Moments",
    follow: "Follow @skevents1",
    items: [
      { cat: "Concert • 2022", title: "Mehtab Virk Live in Dubai", text: "Stage visuals, audience shots, behind the scenes and full concert filming." },
      { cat: "Talk Show • 2021", title: "Filmmakers Talk Show", text: "Recorded for the Emirates Short Film Festival with multi-camera and studio sound." },
      { cat: "New Year • 2024", title: "Rixos Hotel Dubai", text: "LED screen installation and camera coverage for the New Year party." },
      { cat: "Corporate Gala • 2025", title: "Boston Scientific Annual Gala", text: "Event setup, keynotes, staff portraits and a corporate highlight video." },
      { cat: "Nightlife", title: "Ora Club Dubai", text: "Organised and captured, with a luxury table setup and every detail managed." },
      { cat: "VIP Event", title: "“Better Together”, Meydan Freezone", text: "Multi-angle video, candid and group photography and branded visuals." },
      { cat: "Fashion Show • 2023", title: "MERAKI Fashion Show, Season 2", text: "The runway, backstage, highlight reels and teaser clips." },
      { cat: "Cultural Festival • 2024", title: "Authentic Russian Ballet", text: "Stage filming, interviews, rehearsals and post-show highlights." },
      { cat: "Live Concert", title: "SMD LED Screens & Live Stream", text: "Photography, video production and live streaming for a concert in the UAE." },
    ],
  },
  work: { kicker: "Weddings & Portraits", title: "Wedding and Portrait Gallery", close: "Close", prev: "Previous", next: "Next", open: "Open photo" },
  clients: { kicker: "Trusted By", title: "Clients We’ve Worked With" },
  collab: {
    kicker: "Partnerships",
    title: "Let’s Work Together",
    intro: "We are open to partnerships, long-term vendor work and contract jobs with:",
    items: [
      "Wedding and event planners",
      "Fashion show organisers",
      "Cultural councils",
      "Corporate PR and marketing teams",
      "Government and institutional bodies",
      "Hotels, venues and real estate developers",
    ],
  },
  leadership: {
    kicker: "Executive Leadership • Est. 2012",
    title: "The Visionaries Behind SK EVENTS",
    people: [
      { initials: "SJ", role: "Chief Executive Officer (CEO)", name: "Sunny Janjowa", text: "Leading creative direction, luxury event architecture and client partnerships across the UAE since 2012." },
      { initials: "KSA", role: "Managing Director (MD)", name: "Kafeel Saeed Azhar", text: "Spearheading strategic operations, corporate event execution and media production quality across the Emirates." },
    ],
  },
  contact: {
    kicker: "Get In Touch",
    title: "Let’s Plan Your Next Event",
    intro: "Reach out directly to our team for wedding planning, corporate events or photography bookings in the UAE.",
    labels: { ceo: "CEO", md: "Managing Director", hq: "Headquarters", phone: "Phone / WhatsApp", email: "Email", ig: "Instagram" },
    hq: "Dubai & Sharjah, UAE (Est. 2012)",
    whatsapp: "Message us on WhatsApp",
    name: "Your Name *", namePh: "Enter full name",
    phone: "Phone / WhatsApp (UAE) *",
    service: "Service Required",
    services: [
      { value: "wedding", label: "Wedding & Nikah Management" },
      { value: "video", label: "Photography & Cinematography" },
      { value: "product", label: "Creative or Product Photoshoot" },
      { value: "other", label: "Event Planning, Corporate Event or Gala" },
    ],
    emirate: "Emirate / Location",
    emirates: [
      { value: "Dubai", label: "Dubai" },
      { value: "Sharjah", label: "Sharjah" },
      { value: "Abu Dhabi", label: "Abu Dhabi" },
      { value: "Ajman / RAK / Fujairah", label: "Ajman / RAK / Fujairah" },
    ],
    date: "Event Date", message: "Event Details", messagePh: "Tell us about your event...",
    submit: "Send Inquiry to SK Events", sending: "Sending",
    done: "Inquiry received. We’ll reply on WhatsApp.",
    error: "Couldn’t send. Check your phone number, or message us on WhatsApp.",
  },
  footer: { line: "Established 2012 • Premier Event Management & Photography in UAE", ceo: "CEO", md: "MD" },
};
type Copy = typeof en;

const ar: Copy = {
  brand: "SK EVENTS",
  brandSub: "الإمارات • منذ 2012",
  nav: { home: "الرئيسية", about: "مسيرتنا", services: "الخدمات", portfolio: "الأعمال", clients: "العملاء", leadership: "القيادة", contact: "تواصل" },
  cta: "احجزوا استشارة",
  hero: {
    badge: "تأسست عام 2012 • نخدم جميع أنحاء الإمارات",
    title1: "نصنع فعاليات لا تُنسى",
    title2: "وتصويراً خالداً",
    sub: "من حفلات الزفاف الملكية وفعاليات الشركات الكبرى في دبي والشارقة إلى السرد البصري السينمائي، تحوّل SK Events رؤيتكم إلى واقع لا يُنسى.",
    plan: "خططوا لفعاليتكم",
    explore: "تابعوا @skevents1",
    waText: "مرحباً SK Events، أودّ الاستفسار عن خدمات الفعاليات والتصوير.",
    stats: [
      { value: "14+", label: "سنة في الإمارات (منذ 2012)" },
      { value: "1,200+", label: "فعالية فاخرة نُفّذت" },
      { value: "7", label: "إمارات نغطيها" },
      { value: "100%", label: "رضا العملاء" },
    ],
  },
  about: {
    kicker: "من نحن",
    title: "نضع معيار التميز في الإمارات",
    p1a: "تأسست ", p1b: "SK EVENTS", p1c: " عام ", p1d: "2012", p1e: "، وأصبحت من أكثر الأسماء ثقة في الإمارات في تنظيم الفعاليات الخاصة والتصوير الفاخر.",
    p2a: "بقيادة الرئيس التنفيذي ", p2b: "Sunny Janjowa", p2c: " والمدير العام ", p2d: "Kafeel Saeed Azhar", p2e: "، نمزج بين الضيافة العربية ومعايير الإنتاج العالمية.",
    p3: "نحن شركة إنتاج إعلامي وتنظيم فعاليات متخصصة في التصوير الفوتوغرافي والفيديو. نضع الإبداع والاحترافية والخبرة التقنية في كل مشروع، وهدفنا توثيق اللحظات التي تهمّ عملاءنا.",
    badgeTitle: "موثوقون منذ 2012",
    badgeSub: "دبي • أبوظبي • الشارقة • كل الإمارات",
    whyKicker: "لماذا SK Events",
    why: [
      { title: "فريق إعلامي متكامل", text: "من التحضير إلى المونتاج، يتولى فريقنا كل شيء بنفسه." },
      { title: "معدات احترافية", text: "Sony A7 IV وCanon 5D و80D وطائرة DJI ومثبتات حركة ومعدات إضاءة سينمائية." },
      { title: "رؤية إبداعية", text: "لا نكتفي بتسجيل مناسبتكم، بل نصنع حولها قصة." },
      { title: "مونتاج متقن", text: "تسليم سريع مع تصحيح الألوان ومزج الصوت والتصدير بصيغ متعددة." },
      { title: "تغطية في الموقع وفي الاستوديو", text: "في الاستوديو أو في مكان مناسبتكم، بالحماس والدقة نفسيهما." },
    ],
  },
  services: {
    kicker: "خبرتنا",
    title: "خدمات متميزة في أنحاء الإمارات",
    items: [
      { title: "الأعراس الفاخرة والنكاح", text: "منصات زهور مصممة خصيصاً، وإطلالات ملكية، وحفلات زفاف في أفخم قاعات الإمارات." },
      { title: "التصوير والسينماتوغرافي", text: "تصوير أعراس بأسلوب مجلات، ومونتاج في اليوم نفسه، وتصوير جوي بالطائرة المسيّرة." },
      { title: "فعاليات الشركات والحفلات الكبرى", text: "إطلاق المنتجات وحفلات الجوائز والمعارض وعشاءات كبار الضيوف." },
      { title: "جلسات تصوير إبداعية", text: "تصوير أزياء وبورتريه ومنتجات بما يناسب كل عميل." },
      { title: "المونتاج وما بعد الإنتاج", text: "تصحيح الألوان وتصميم الصوت والمؤثرات البصرية للفيلم النهائي." },
      { title: "شاشات LED والبث المباشر", text: "شاشات SMD LED ولقطات حية وبث مباشر للحفلات والمناسبات." },
    ],
  },
  portfolio: {
    kicker: "المعرض المرئي",
    title: "لحظات موثّقة",
    follow: "تابعوا @skevents1",
    items: [
      { cat: "حفل غنائي • 2022", title: "مهتاب فيرك مباشرة في دبي", text: "لقطات المسرح والجمهور والكواليس وتصوير الحفل كاملاً." },
      { cat: "برنامج حواري • 2021", title: "برنامج حواري عن صنّاع الأفلام", text: "سُجّل لمهرجان الإمارات للأفلام القصيرة بعدة كاميرات وصوت استوديو." },
      { cat: "رأس السنة • 2024", title: "فندق ريكسوس دبي", text: "تركيب شاشات LED وتغطية بالكاميرات لحفل رأس السنة." },
      { cat: "حفل شركة • 2025", title: "الحفل السنوي لبوسطن ساينتيفيك", text: "تجهيز الفعالية والكلمات الرئيسية وصور الموظفين وفيديو ملخص." },
      { cat: "حياة ليلية", title: "أورا كلوب دبي", text: "نظّمنا الحدث ووثّقناه، مع تجهيز فاخر للطاولات وإدارة كل التفاصيل." },
      { cat: "فعالية VIP", title: "«Better Together»، ميدان فري زون", text: "فيديو متعدد الزوايا وتصوير عفوي وجماعي ومواد مرئية للعلامة." },
      { cat: "عرض أزياء • 2023", title: "عرض أزياء MERAKI، الموسم الثاني", text: "عرض الأزياء والكواليس ومقاطع ملخصة وإعلانية." },
      { cat: "مهرجان ثقافي • 2024", title: "مهرجان الباليه الروسي", text: "تصوير المسرح والمقابلات والبروفات وأبرز لحظات العرض." },
      { cat: "حفل موسيقي", title: "شاشات SMD LED وبث مباشر", text: "تصوير فوتوغرافي وفيديو وبث مباشر لحفل في الإمارات." },
    ],
  },
  work: { kicker: "أعراس وبورتريه", title: "معرض الأعراس والبورتريه", close: "إغلاق", prev: "السابق", next: "التالي", open: "فتح الصورة" },
  clients: { kicker: "يثقون بنا", title: "عملاء عملنا معهم" },
  collab: {
    kicker: "شراكات",
    title: "لنعمل معاً",
    intro: "نرحّب بالشراكات والتعاون طويل الأمد والعقود مع:",
    items: [
      "منسّقو الأعراس والفعاليات",
      "منظمو عروض الأزياء",
      "المجالس الثقافية",
      "أقسام العلاقات العامة والتسويق في الشركات",
      "الجهات الحكومية والمؤسسية",
      "الفنادق وقاعات المناسبات والمطوّرون العقاريون",
    ],
  },
  leadership: {
    kicker: "القيادة التنفيذية • منذ 2012",
    title: "أصحاب الرؤية وراء SK EVENTS",
    people: [
      { initials: "SJ", role: "الرئيس التنفيذي (CEO)", name: "Sunny Janjowa", text: "يقود الرؤية الإبداعية وتصميم الفعاليات الفاخرة وشراكات العملاء في الإمارات منذ 2012." },
      { initials: "KSA", role: "المدير العام (MD)", name: "Kafeel Saeed Azhar", text: "يقود العمليات الاستراتيجية وتنفيذ فعاليات الشركات وجودة الإنتاج الإعلامي في أنحاء الإمارات." },
    ],
  },
  contact: {
    kicker: "تواصلوا معنا",
    title: "لنخطط لفعاليتكم القادمة",
    intro: "تواصلوا مباشرة مع فريقنا لتنظيم الأعراس وفعاليات الشركات وحجوزات التصوير في الإمارات.",
    labels: { ceo: "الرئيس التنفيذي", md: "المدير العام", hq: "المقر", phone: "الهاتف / واتساب", email: "البريد الإلكتروني", ig: "إنستغرام" },
    hq: "دبي والشارقة، الإمارات (منذ 2012)",
    whatsapp: "راسلونا على واتساب",
    name: "الاسم *", namePh: "أدخلوا الاسم الكامل",
    phone: "رقم الهاتف / واتساب (الإمارات) *",
    service: "الخدمة المطلوبة",
    services: [
      { value: "wedding", label: "تنظيم الأعراس والنكاح" },
      { value: "video", label: "التصوير والسينماتوغرافي" },
      { value: "product", label: "جلسة تصوير إبداعية أو منتجات" },
      { value: "other", label: "تنظيم فعالية أو فعالية شركة أو حفل كبير" },
    ],
    emirate: "الإمارة / الموقع",
    emirates: [
      { value: "Dubai", label: "دبي" },
      { value: "Sharjah", label: "الشارقة" },
      { value: "Abu Dhabi", label: "أبوظبي" },
      { value: "Ajman / RAK / Fujairah", label: "عجمان / رأس الخيمة / الفجيرة" },
    ],
    date: "تاريخ الفعالية", message: "تفاصيل الفعالية", messagePh: "أخبرونا عن فعاليتكم...",
    submit: "إرسال الاستفسار إلى SK Events", sending: "جارٍ الإرسال",
    done: "وصل استفساركم، وسنردّ عليكم عبر واتساب.",
    error: "تعذّر الإرسال. تحقّقوا من رقم الهاتف أو راسلونا عبر واتساب.",
  },
  footer: { line: "تأسست 2012 • إدارة فعاليات وتصوير متميز في الإمارات", ceo: "الرئيس التنفيذي", md: "المدير العام" },
};

export const content: Record<Lang, Copy> = { en, ar };
