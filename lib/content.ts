// Contact details come from the SK Events Facebook page: confirm with the client before launch.
export type Lang = "en" | "ar";

export const WA_NUMBER = "971564734640";
export const PHONE_DISPLAY = "+971 56 473 4640";
export const EMAIL = "skeventsshj@gmail.com";
export const IG_URL = "https://www.instagram.com/skevents1";
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

type Img = { src: string; alt: string; ratio: string };
const img = (n: string, alt: string, ratio = "aspect-[4/5]"): Img => ({ src: `/images/sk-${n}.jpg`, alt, ratio });

// One image per service card, same order as services.items (8 cards).
export const SERVICE_IMAGES = [
  "/images/sk-04.jpg",         // wedding and nikah
  "/images/events/meydan.jpg", // event photography and video
  "/images/events/gala.jpg",   // corporate and commercial media
  "/images/sk-09.jpg",         // creative photoshoots
  "/images/sk-08.jpg",         // post-production
  "/images/sk-01.jpg",         // event planning and decor
  "/images/events/rixos.jpg",  // LED screens and live streaming
  "/images/events/talkshow.jpg", // studio and talk show production
];

// One photo per event card, same order as events.items (10 cards).
export const EVENT_IMAGES = ["gala", "rixos", "ballet", "expo", "meraki", "mehtab", "talkshow", "meydan", "ora", "concert"].map(
  (n) => `/images/events/${n}.jpg`,
);

export const ABOUT_IMAGE = "/images/about.jpg";

// Logo for each name in clients.names, same order. null = no logo supplied, shown as text.
export const CLIENT_LOGOS: (string | null)[] = [
  "/images/clients/meydan-freezone.png",
  "/images/clients/dubai-airport.png",
  "/images/clients/novotel.png",
  null, // Sharjah Golf & Shooting Club: no logo on the client's slide
  "/images/clients/aasa.png",
  "/images/clients/emirates-short-film-festival.png",
  "/images/clients/be-unique.png",
  "/images/clients/vibe-creations.png",
  "/images/clients/digital-fashion-leading.png",
  "/images/clients/tepa.png",
  "/images/clients/miss-cosmos-queen.png",
  "/images/clients/expo-2020.png",
  "/images/clients/holly-dreams.png",
];

export const GALLERY: Img[] = [
  img("01", "Arched white wedding stage with chandeliers and white hydrangeas"),
  img("11", "Groom in a black and gold bisht seated beneath a chandelier", "aspect-square"),
  img("02", "Bride in a silk robe beside her gown by the window", "aspect-[3/4]"),
  img("16", "Yellow and orange haldi backdrop with a marigold garland", "aspect-square"),
  img("03", "Strapless satin gown and veil on a panelled wall", "aspect-[3/4]"),
  img("13", "Groom holding a mabkhara with rising incense smoke"),
  img("07", "Ring box, perfume, invitation and white ranunculus on a windowsill", "aspect-square"),
  img("04", "Bride holding a white peony bouquet"),
  img("06", "Beaded lace gown on a mannequin in a dark room", "aspect-square"),
  img("14", "Groom seated with his ghutra drawn across his face", "aspect-[3/4]"),
  img("09", "Perfume, invitation card and pearl heels", "aspect-square"),
  img("10", "Bride holding a perfume bottle in a beaded gown"),
  img("08", "Ring exchange, backlit, hands almost touching", "aspect-square"),
  img("05", "Hands resting on a bridal robe hanging from a named hanger", "aspect-[3/4]"),
  img("17", "Detail of a bisht sleeve with gold trim and tassels", "aspect-square"),
  img("15", "Couple in silhouette, a kiss on the forehead"),
];

const en = {
  brand: "SK Events",
  tag: "Photography and video production",
  nav: { about: "About", services: "Services", events: "Events", work: "Work", contact: "Contact" },
  hero: {
    title: "Wedding photography and video in Sharjah",
    sub: "SK Events covers weddings, haldi and engagement days, and shoots product photography for brands. We work from Sharjah and Punjab, Pakistan.",
    cta: "Message us on WhatsApp",
    secondary: "See the work",
    waText: "Hello SK Events, I’d like to ask about your event, photography and video services.",
  },
  band: ["Weddings and Nikah", "Events", "Corporate media", "Photoshoots", "Post-production", "LED screens"],
  about: {
    title: "One team for the event and the film of it",
    p1: "SK Events is a media production and event company. We shoot photography and video, produce events, and supply the screens and sound that make a room feel finished.",
    p2: "Our work ranges from private weddings to concerts and corporate evenings. Pre-production, filming and editing all happen in-house, so what we promise at the first meeting is what you see in the final video.",
    points: [
      ["In-house team", "From pre-production to post, everything is handled by our own team."],
      ["Professional kit", "Sony A7 IV, Canon 5D and 80D, a DJI drone, gimbals, cinema lighting kits and monopods."],
      ["Creative direction", "We don’t just record your event. We build a story around it."],
      ["Fast turnaround", "Colour grading, sound mixing and export in every format you need."],
      ["Studio or venue", "We shoot in our custom-built studio or at your location."],
    ],
  },
  services: {
    title: "What we do",
    items: [
      { title: "Weddings and Nikah", text: "Photography and film for the getting-ready, the ceremony and the portraits, from nikah to reception." },
      { title: "Event photography and videography", text: "Cultural events, corporate functions and private parties, with full video coverage." },
      { title: "Corporate and commercial media", text: "Brand shoots, adverts, product launches and company events." },
      { title: "Creative photoshoots", text: "Fashion, portrait and product photography built around your concept." },
      { title: "Post-production", text: "Editing, colour grading, sound design and visual effects." },
      { title: "Event planning and decor", text: "Stage, styling and table setups managed from start to finish." },
      { title: "LED screens and live streaming", text: "SMD screens, multi-camera filming and live streams for concerts and big nights." },
      { title: "Studio and talk show production", text: "Lighting, sound, multi-camera recording and set design in our own studio." },
    ],
  },
  events: {
    title: "Recent events",
    intro: "A selection of the events we have covered or produced.",
    items: [
      { title: "Boston Scientific annual corporate gala", meta: "2025", text: "Stage and venue setup, keynote recording, branding displays, staff portraits and group photos, and a corporate highlight video." },
      { title: "New Year party, Rixos Dubai", meta: "2024", text: "LED screen installation and camera coverage for the New Year party, with every panel and camera angle planned from setup to show." },
      { title: "Authentic Russian Ballet, Dance Fest", meta: "2024", text: "Full coverage of a cultural performance with international artists: stage filming, interviews, rehearsals and post-performance highlights, edited with cinematic scoring." },
      { title: "Indian Pavilion launch, Dubai Expo Center", meta: "2022–2024", text: "Selected to cover the launch: traditional performances, speeches by dignitaries and the unveiling. Multi-camera coverage, drone shots and live-action editing, used for documentation, media and archives." },
      { title: "MERAKI fashion show, season 2", meta: "Dubai, 2023", text: "Every segment from ramp walks to backstage, delivered as highlight reels, teaser clips and fashion montages." },
      { title: "Mehtab Virk live in Dubai", meta: "2022", text: "Media and production team for a live concert and turban-styling competition: stage visuals, audience shots, behind the scenes, full filming and promo reels." },
      { title: "Talk show, Emirates Short Film Festival", meta: "2021", text: "An in-house talk show on the making of films, recorded in our studio setup with lighting rigs, sound engineering, multi-camera recording and a set designed for the theme." },
      { title: "Better Together, Meydan Freezone", meta: "VIP party", text: "Multi-angle video, candid and group photography and branded visuals for social media and internal use." },
      { title: "Ora Club Dubai", meta: "Dubai", text: "We organised the event and captured its highlights, with a table setup for the client and every detail managed from start to finish." },
      { title: "Arijit Singh live concert", meta: "UAE", text: "SMD (LED) screens, photography, video production and a live stream of the full concert." },
    ],
  },
  clients: {
    title: "Trusted by",
    names: ["Meydan Freezone", "Dubai International Airport", "Novotel Hotel & Resort", "Sharjah Golf & Shooting Club", "AASA CP Holding Company", "Emirates Short Film Festival", "Be Unique Group", "VIBE Creations Media", "Digital Fashion Leading", "TEPA Tamil Entrepreneurs", "Miss Cosmos Queen", "Expo 2020 Dubai", "Holly Dreams Productions"],
  },
  work: { title: "Wedding photography", close: "Close", prev: "Previous", next: "Next", open: "Open photo" },
  partner: {
    title: "Work with us",
    text: "We take on one-off events, long-term vendor partnerships and contract work for:",
    list: ["Wedding and event planners", "Fashion show organisers", "Cultural councils", "Corporate PR and marketing teams", "Government and institutions", "Hotels, venues and real estate developers"],
    close: "Let us bring your next event to life with professionalism, creativity and cinematic mastery.",
  },
  contact: {
    title: "Ask about your date",
    intro: "Tell us what you need and when. We reply on WhatsApp.",
    name: "Name", phone: "Phone or WhatsApp", service: "What do you need", date: "Date", place: "City or venue", message: "Anything else",
    services: [
      { value: "wedding", label: "Wedding or Nikah photography and video" },
      { value: "video", label: "Event or corporate coverage" },
      { value: "product", label: "Photoshoot or product photography" },
      { value: "other", label: "Event planning, LED screens or other" },
    ],
    submit: "Send enquiry", sending: "Sending",
    done: "Enquiry received. We’ll reply on WhatsApp.",
    error: "Couldn’t send. Check your phone number, or message us on WhatsApp.",
    areas: "Sharjah, United Arab Emirates and Punjab, Pakistan",
  },
};
type Copy = typeof en;

const ar: Copy = {
  brand: "SK Events",
  tag: "تصوير وإنتاج فيديو",
  nav: { about: "من نحن", services: "الخدمات", events: "الفعاليات", work: "الأعمال", contact: "تواصل" },
  hero: {
    title: "تصوير أعراس وفيديو في الشارقة",
    sub: "نغطي الأعراس وحفلات الحنّاء والخطوبة، ونصوّر المنتجات للعلامات التجارية. نعمل من الشارقة ومن البنجاب في باكستان.",
    cta: "راسلونا على واتساب",
    secondary: "شاهدوا أعمالنا",
    waText: "مرحباً SK Events، أودّ الاستفسار عن خدمات تنظيم الفعاليات والتصوير والفيديو.",
  },
  band: ["الأعراس والنكاح", "الفعاليات", "إنتاج الشركات", "جلسات التصوير", "ما بعد الإنتاج", "شاشات LED"],
  about: {
    title: "فريق واحد للفعالية وللفيلم الذي يوثّقها",
    p1: "SK Events شركة إنتاج إعلامي وتنظيم فعاليات. نصوّر الصور والفيديو وننظّم الفعاليات ونوفّر الشاشات والصوت التي تكمل المشهد.",
    p2: "تمتد أعمالنا من الأعراس الخاصة إلى الحفلات الموسيقية وأمسيات الشركات. التحضير والتصوير والمونتاج كلها داخل الفريق، فما نعدكم به في أول لقاء هو ما تشاهدونه في الفيديو النهائي.",
    points: [
      ["فريق متكامل", "من التحضير حتى ما بعد الإنتاج، يتولى فريقنا كل شيء."],
      ["معدات احترافية", "Sony A7 IV وCanon 5D و80D وطائرة DJI ومثبّتات وإضاءة سينمائية وحوامل أحادية."],
      ["رؤية إبداعية", "لا نكتفي بتسجيل فعاليتكم، بل نبني حولها قصة."],
      ["تسليم سريع", "تصحيح الألوان ومعالجة الصوت والتصدير بكل الصيغ التي تحتاجونها."],
      ["استوديو أو موقعكم", "نصوّر في استوديونا المجهّز أو في مكان مناسبتكم."],
    ],
  },
  services: {
    title: "ماذا نقدّم",
    items: [
      { title: "الأعراس وعقد النكاح", text: "تصوير وفيديو للتجهّز والمراسم والبورتريه، من عقد النكاح حتى حفل الاستقبال." },
      { title: "تصوير وفيديو الفعاليات", text: "المناسبات الثقافية وفعاليات الشركات والحفلات الخاصة مع تغطية فيديو كاملة." },
      { title: "إنتاج إعلامي للشركات", text: "تصوير العلامات التجارية والإعلانات وإطلاق المنتجات وفعاليات الشركات." },
      { title: "جلسات تصوير إبداعية", text: "تصوير الأزياء والبورتريه والمنتجات وفق فكرتكم." },
      { title: "ما بعد الإنتاج", text: "مونتاج وتصحيح ألوان وتصميم صوت ومؤثرات بصرية." },
      { title: "تنظيم الفعاليات والديكور", text: "المسرح والتنسيق وتجهيز الطاولات من البداية حتى النهاية." },
      { title: "شاشات LED والبث المباشر", text: "شاشات SMD وتصوير بعدة كاميرات وبث مباشر للحفلات والأمسيات الكبيرة." },
      { title: "إنتاج الاستوديو والبرامج الحوارية", text: "إضاءة وصوت وتسجيل بعدة كاميرات وتصميم ديكور في استوديونا الخاص." },
    ],
  },
  events: {
    title: "فعاليات حديثة",
    intro: "مختارات من الفعاليات التي غطّيناها أو أنتجناها.",
    items: [
      { title: "حفل بوسطن ساينتفيك السنوي للشركة", meta: "2025", text: "تجهيز المسرح والقاعة وتسجيل الكلمات الرئيسية وعرض الهوية البصرية وصور الموظفين والصور الجماعية وفيديو ملخّص للشركة." },
      { title: "حفل رأس السنة في ريكسوس دبي", meta: "2024", text: "تركيب شاشات LED وتغطية بالكاميرات لحفل رأس السنة، مع تخطيط كل شاشة وزاوية تصوير من التجهيز حتى العرض." },
      { title: "الباليه الروسي الأصيل، مهرجان الرقص", meta: "2024", text: "تغطية كاملة لعرض ثقافي بمشاركة فنانين دوليين: تصوير المسرح والمقابلات والبروفات ولقطات ما بعد العرض، بمونتاج وموسيقى سينمائية." },
      { title: "افتتاح الجناح الهندي، مركز إكسبو دبي", meta: "2022–2024", text: "اختيرنا لتغطية الافتتاح: عروض تراثية وكلمات لشخصيات رسمية وكشف الجناح. تصوير بعدة كاميرات ولقطات بطائرة مسيّرة ومونتاج مباشر، استُخدمت للتوثيق والإعلام والأرشيف." },
      { title: "عرض أزياء MERAKI، الموسم الثاني", meta: "دبي، 2023", text: "كل الفقرات من منصة العرض إلى الكواليس، بمقاطع ملخّصة ومقاطع تشويقية ومونتاجات أزياء." },
      { title: "حفل مهتاب فيرك في دبي", meta: "2022", text: "فريق الإنتاج والإعلام لحفل موسيقي حي ومسابقة تصفيف العمائم: لقطات المسرح والجمهور والكواليس وتصوير كامل ومقاطع ترويجية." },
      { title: "برنامج حواري، مهرجان الإمارات للأفلام القصيرة", meta: "2021", text: "برنامج حواري عن صناعة الأفلام سُجّل في استوديونا بإضاءة وهندسة صوت وتسجيل بعدة كاميرات وديكور مصمّم للموضوع." },
      { title: "Better Together، ميدان فري زون", meta: "حفل VIP", text: "فيديو بزوايا متعددة وصور عفوية وجماعية ومحتوى مرئي لوسائل التواصل والاستخدام الداخلي." },
      { title: "نادي أورا دبي", meta: "دبي", text: "نظّمنا الفعالية ووثّقنا أبرز لحظاتها، مع تجهيز طاولة للعميل وإدارة كل التفاصيل من البداية حتى النهاية." },
      { title: "حفل أريجيت سينغ الموسيقي", meta: "الإمارات", text: "شاشات SMD (LED) وتصوير وإنتاج فيديو وبث مباشر للحفل كاملاً." },
    ],
  },
  clients: {
    title: "يثق بنا",
    names: ["ميدان فري زون", "مطار دبي الدولي", "فندق ومنتجع نوفوتيل", "نادي الشارقة للغولف والرماية", "AASA CP Holding", "مهرجان الإمارات للأفلام القصيرة", "Be Unique Group", "VIBE Creations Media", "Digital Fashion Leading", "TEPA رواد الأعمال التاميل", "Miss Cosmos Queen", "إكسبو 2020 دبي", "Holly Dreams Productions"],
  },
  work: { title: "تصوير الأعراس", close: "إغلاق", prev: "السابق", next: "التالي", open: "فتح الصورة" },
  partner: {
    title: "اعملوا معنا",
    text: "نقبل الفعاليات المنفردة وشراكات الموردين طويلة الأمد والعقود مع:",
    list: ["منظّمي الأعراس والفعاليات", "منظّمي عروض الأزياء", "المجالس الثقافية", "فرق العلاقات العامة والتسويق", "الجهات الحكومية والمؤسسات", "الفنادق والقاعات والمطوّرين العقاريين"],
    close: "دعونا نحيي فعاليتكم القادمة باحترافية وإبداع ولمسة سينمائية.",
  },
  contact: {
    title: "اسألوا عن موعدكم",
    intro: "أخبرونا بما تحتاجون ومتى، وسنردّ عليكم عبر واتساب.",
    name: "الاسم", phone: "رقم الهاتف أو واتساب", service: "ما الذي تحتاجونه", date: "التاريخ", place: "المدينة أو المكان", message: "ملاحظات أخرى",
    services: [
      { value: "wedding", label: "تصوير وفيديو الأعراس والنكاح" },
      { value: "video", label: "تغطية فعاليات أو شركات" },
      { value: "product", label: "جلسة تصوير أو تصوير منتجات" },
      { value: "other", label: "تنظيم فعاليات أو شاشات LED أو غير ذلك" },
    ],
    submit: "إرسال الاستفسار", sending: "جارٍ الإرسال",
    done: "وصل استفساركم، وسنردّ عليكم عبر واتساب.",
    error: "تعذّر الإرسال. تحقّقوا من رقم الهاتف أو راسلونا عبر واتساب.",
    areas: "الشارقة، الإمارات العربية المتحدة، والبنجاب، باكستان",
  },
};

export const content: Record<Lang, Copy> = { en, ar };