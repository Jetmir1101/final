

let currentImage = 0;
const images = ["running.png", "weights.png", "deadlift.png"];
const texts = [
  "Train and get big with us",
  "Build strength and confidence",
  "Join our fitness revolution"
];

const slideshowImage = document.getElementById("slideshowImage");
const slideshowText = document.getElementById("slideshowText");

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  slideshowImage.src = images[currentImage];
  slideshowText.textContent = texts[currentImage];
}, 4000);


function initMap() {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = ""; // Clear previous content (if any)

  const gymLocation = { lat: 40.68, lng: -74.0 };
  const map = new google.maps.Map(mapContainer, {
    zoom: 14,
    center: gymLocation,
  });

  new google.maps.Marker({ position: gymLocation, map });
}


if (document.getElementById("map")) {
  window.initMap = function () {
    const gymLocation = { lat: 40.68, lng: -74.0 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: gymLocation,
    });
    new google.maps.Marker({ position: gymLocation, map });
  };
}



const form = document.getElementById("membershipForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const age = parseInt(form.elements["age"].value, 10);

    if (name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (isNaN(age) || age < 16) {
      alert("You must be at least 16 years old to join.");
      return;
    }

    alert("Membership successfully submitted!");
    form.reset();
  });
}


const products = [
  { name: "Protein Bar", price: "$5", image: bar.png },
  { name: "Whey Protein", price: "$25", image: "pro.png" },
  { name: "Gym Gloves", price: "$15", image: "gloves.png" },
  { name: "band", price: "$10", image: "band.png" },
  { name: "Shirts", price: "$12", image: "shirt.png" },
  { name: "Pre-Workout", price: "$20", image: "pre.png" },
  { name: "Gym Mat", price: "$8", image: "mat.png" },
  { name: "Water Bottle", price: "$6", image: "bottle.png" },
];


const limitedProducts = products.slice(0, 8);

const productList = document.getElementById("productList");
productList.innerHTML = ""; // Clear previous content, if any


for (let i = 0; i < limitedProducts.length; i += 4) {
  const row = document.createElement("div");
  row.className = "product-row";

  const rowProducts = limitedProducts.slice(i, i + 4);
  rowProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    row.appendChild(div);
  });

  productList.appendChild(row);
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("map")) {
    initMap();
  }
});
