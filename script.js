let cart = JSON.parse(localStorage.getItem("rr_cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  initStore();
  renderProducts();
  updateCartUI();
});

function initStore() {
  const cfg = getStoreConfig();
  document.getElementById("announcement").innerText = cfg.announcementText;
  document.getElementById("storeName").innerText = cfg.storeName;
  document.getElementById("heroTitle").innerText = cfg.heroTitle;
  document.getElementById("heroSubtitle").innerText = cfg.heroSubtitle;
  document.getElementById("heroImg").src = cfg.heroImage;
}

function renderProducts() {
  const products = getStoreProducts();
  const grid = document.getElementById("productsGrid");
  
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-price">
          ${p.salePrice ? `${p.salePrice} MAD <span class="old-price">${p.price} MAD</span>` : `${p.price} MAD`}
        </div>
        <button onclick="addToCart('${p.id}')" class="btn btn-add">أضف إلى السلة</button>
      </div>
    </div>
  `).join("");
}

function addToCart(productId) {
  const products = getStoreProducts();
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  toggleCart(true);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function saveCart() {
  localStorage.setItem("rr_cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").innerText = count;

  const itemsContainer = document.getElementById("cartItems");
  if (cart.length === 0) {
    itemsContainer.innerHTML = "<p>السلة فارغة حالياً.</p>";
  } else {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>${item.qty} x ${item.salePrice || item.price} MAD</p>
          <button onclick="removeFromCart('${item.id}')" style="color:red; background:none; border:none; cursor:pointer;">حذف</button>
        </div>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + ((item.salePrice || item.price) * item.qty), 0);
  document.getElementById("cartTotal").innerText = total.toFixed(2) + " MAD";
}

function toggleCart(open) {
  const drawer = document.getElementById("cartDrawer");
  if (open) drawer.classList.add("open");
  else drawer.classList.remove("open");
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("سلتك فارغة!");
    return;
  }

  const cfg = getStoreConfig();
  let message = `مرحباً ${cfg.storeName}، أرغب في طلب المنتجات التالية:\n\n`;
  
  cart.forEach(item => {
    message += `• ${item.name} (الكمية: ${item.qty}) - ${(item.salePrice || item.price) * item.qty} MAD\n`;
  });

  const total = cart.reduce((sum, item) => sum + ((item.salePrice || item.price) * item.qty), 0);
  message += `\n*المجموع الكلي:* ${total.toFixed(2)} MAD`;

  const url = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
