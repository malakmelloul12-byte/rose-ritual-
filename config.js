// ==========================================
// ROSE & RITUAL - CONFIG & DEFAULT PRODUCTS
// ==========================================

const DEFAULT_CONFIG = {
  storeName: "Rose & Ritual",
  tagline: "Aesthetic Skincare & Self-Care",
  currency: "MAD",
  whatsappNumber: "212600000000",
  announcementText: "توصيل مجاني لجميع الطلبات فوق 399 درهم | كود الخصم: ROSE20",
  heroTitle: "طقوسك اليومية للعناية بالبشرة",
  heroSubtitle: "اكتشفي تشكيلة منتجات طبيعية وراقية لإبراز نضارة بشرتك وشبابها كل يوم.",
  heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
};

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "سيروم النضارة والشباب - Radiance Serum",
    category: "Serums",
    price: 249.00,
    salePrice: 199.00,
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    description: "سيروم مركز بفيتامين C وحمض الهيالورونيك لإغناء البشرة وإعطائها إشراقة فورية.",
    isBestSeller: true
  },
  {
    id: "p2",
    name: "كريم الترطيب الفائق - Hydrating Day Cream",
    category: "Moisturizers",
    price: 219.00,
    salePrice: null,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1608248597262-838d41e750e2?auto=format&fit=crop&w=600&q=80",
    description: "كريم يمنح بشرتك ترطيباً عميقاً يدوم طوال اليوم بمكونات طبيعية وخفيفة.",
    isBestSeller: true
  },
  {
    id: "p3",
    name: "مقشر لطيف للوجه - Gentle Exfoliating Scrub",
    category: "Cleansers",
    price: 189.00,
    salePrice: 159.00,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "ينظف المسام بلطف ويزيل الشوائب والخلايا الميتة دون التسبب في أي جفاف.",
    isBestSeller: true
  },
  {
    id: "p4",
    name: "قناع الترميم الليلي - Night Repair Mask",
    category: "Masks",
    price: 199.00,
    salePrice: null,
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1567928254714-239634d26214?auto=format&fit=crop&w=600&q=80",
    description: "قناع مغذي يعمل أثناء النوم على تجديد خلايا البشرة واستعادة مرونتها.",
    isBestSeller: true
  }
];

function getStoreConfig() {
  const saved = localStorage.getItem("rr_store_config");
  return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
}

function getStoreProducts() {
  const saved = localStorage.getItem("rr_store_products");
  return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
}
