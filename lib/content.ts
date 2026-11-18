// Contact details come from the SK Events Facebook page. Copy for both languages lives below.
export type Lang = "en" | "ar";

export const WA_NUMBER = "971564734640";
export const PHONE_DISPLAY = "+971 56 473 4640";
export const EMAIL = "skeventsshj@gmail.com";
export const IG_URL = "https://www.instagram.com/skevents1";
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

type Img = { src: string; alt: string; ratio: string };
const img = (n: string, alt: string, ratio = "aspect-[4/5]"): Img => ({ src: `/images/sk-${n}.jpg`, alt, ratio });

// Three arches in the hero. The tall one in the middle echoes the arched stage photo.
export const HERO: Img[] = [
  img("11", "Groom in a black and gold bisht seated beneath a chandelier", "aspect-[3/4]"),
  img("01", "White arched wedding stage with chandeliers and hydrangeas", "aspect-[3/4.7]"),
  img("02", "Bride in a silk robe beside her wedding gown", "aspect-[3/4]"),
];

// One thumbnail per service row: wedding, video, product, events
export const SERVICE_IMAGES = ["/images/sk-04.jpg", "/images/sk-08.jpg", "/images/sk-09.jpg", "/images/sk-16.jpg"];

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
  nav: { services: "Services", work: "Work", contact: "Contact" },
  hero: {
    title: "Wedding photography and video in Sharjah",
    sub: "SK Events covers weddings, haldi and engagement days, and shoots product photography for brands. We work from Sharjah and Punjab, Pakistan.",
    cta: "Message us on WhatsApp",
    secondary: "See the work",
    waText: "Hello SK Events, I’d like to ask about your photography and video services.",
  },
  services: {
    title: "What we shoot",
    items: [
      { title: "Wedding photography", text: "The getting-ready, the ceremony and the portraits, in natural light." },
      { title: "Video production", text: "Wedding films, event coverage and short videos for brands." },
      { title: "Product photography", text: "Clean, detailed product and flat-lay images for shops and labels." },
      { title: "Events and celebrations", text: "Haldi, mehndi, engagements and family occasions." },
    ],
  },
  work: { title: "Recent work", close: "Close", prev: "Previous", next: "Next", open: "Open photo" },
  contact: {
    title: "Ask about your date",
    intro: "Tell us what you need and when. We reply on WhatsApp.",
    name: "Name", phone: "Phone or WhatsApp", service: "What do you need", date: "Date", place: "City or venue", message: "Anything else",
    services: [
      { value: "wedding", label: "Wedding photography" },
      { value: "video", label: "Video production" },
      { value: "product", label: "Product photography" },
      { value: "other", label: "Something else" },
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
  nav: { services: "الخدمات", work: "الأعمال", contact: "تواصل" },
  hero: {
    title: "تصوير أعراس وفيديو في الشارقة",
    sub: "نغطي الأعراس وحفلات الحنّاء والخطوبة، ونصوّر المنتجات للعلامات التجارية. نعمل من الشارقة ومن البنجاب في باكستان.",
    cta: "راسلونا على واتساب",
    secondary: "شاهدوا أعمالنا",
    waText: "مرحباً SK Events، أودّ الاستفسار عن خدمات التصوير والفيديو.",
  },
  services: {
    title: "ماذا نصوّر",
    items: [
      { title: "تصوير الأعراس", text: "التجهّز والمراسم والبورتريه بإضاءة طبيعية." },
      { title: "إنتاج الفيديو", text: "أفلام الأعراس وتغطية المناسبات وفيديوهات قصيرة للعلامات التجارية." },
      { title: "تصوير المنتجات", text: "صور نظيفة ومفصّلة للمنتجات للمتاجر والعلامات." },
      { title: "المناسبات والاحتفالات", text: "الحنّاء والمهندي والخطوبة والمناسبات العائلية." },
    ],
  },
  work: { title: "أحدث الأعمال", close: "إغلاق", prev: "السابق", next: "التالي", open: "فتح الصورة" },
  contact: {
    title: "اسألوا عن موعدكم",
    intro: "أخبرونا بما تحتاجون ومتى، وسنردّ عليكم عبر واتساب.",
    name: "الاسم", phone: "رقم الهاتف أو واتساب", service: "ما الذي تحتاجونه", date: "التاريخ", place: "المدينة أو المكان", message: "ملاحظات أخرى",
    services: [
      { value: "wedding", label: "تصوير الأعراس" },
      { value: "video", label: "إنتاج الفيديو" },
      { value: "product", label: "تصوير المنتجات" },
      { value: "other", label: "شيء آخر" },
    ],
    submit: "إرسال الاستفسار", sending: "جارٍ الإرسال",
    done: "وصل استفساركم، وسنردّ عليكم عبر واتساب.",
    error: "تعذّر الإرسال. تحقّقوا من رقم الهاتف أو راسلونا عبر واتساب.",
    areas: "الشارقة، الإمارات العربية المتحدة، والبنجاب، باكستان",
  },
};

export const content: Record<Lang, Copy> = { en, ar };
