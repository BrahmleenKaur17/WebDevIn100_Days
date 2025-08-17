const testimonials = [
  {
    name: "Cherise G",
    photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
  },
  {
    name: "Rosetta Q",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
  },
  {
    name: "Constantine V",
    photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
  }
];

const imgEl = document.getElementById("user-img");
const textEl = document.getElementById("text");
const usernameEl = document.getElementById("username");
const dotsContainer = document.getElementById("dots");

let idx = 0;
let autoSlide;

// Create dots dynamically
testimonials.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    idx = i;
    updateTestimonial();
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  // Fade animation
  textEl.classList.remove("fade-in");
  usernameEl.classList.remove("fade-in");
  setTimeout(() => {
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    textEl.classList.add("fade-in");
    usernameEl.classList.add("fade-in");

    updateDots();
  }, 100);
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
  });
}

function nextTestimonial() {
  idx = (idx + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

// Buttons
document.getElementById("next").addEventListener("click", () => {
  nextTestimonial();
  resetAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  prevTestimonial();
  resetAutoSlide();
});

// Auto slide every 8s
function startAutoSlide() {
  autoSlide = setInterval(nextTestimonial, 8000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Init
updateTestimonial();
startAutoSlide();
