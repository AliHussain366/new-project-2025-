// Countdown Timer JavaScript
function updateCountdown() {
    const now = new Date();
    const newYear = new Date("January 1, 2024 00:00:00");
    const remainingTime = newYear - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
function watchVideo() {
    window.open("https://www.example.com/video-url", "_blank"); // Replace with your video URL
}
// Fireworks Animation JavaScript
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fireworks = [];

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];
        const particleCount = window.innerWidth < 768 ? 20 : 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }

    update() {
        this.particles.forEach(particle => particle.update());
    }

    draw() {
        this.particles.forEach(particle => particle.draw());
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.particles[0].opacity <= 0) fireworks.splice(index, 1);
    });
    requestAnimationFrame(animateFireworks);
}

canvas.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push(new Firework(x, y, color));
});

animateFireworks();

// 3D Globe with Three.js
const globeContainer = document.getElementById('threejs-globe');
const globeScene = new THREE.Scene();
const globeCamera = new THREE.PerspectiveCamera(75, globeContainer.clientWidth / globeContainer.clientHeight, 0.1, 1000);
const globeRenderer = new THREE.WebGLRenderer();
globeRenderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
globeContainer.appendChild(globeRenderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const sphere = new THREE.Mesh(geometry, material);
globeScene.add(sphere);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
globeScene.add(light);

globeCamera.position.z = 10;

function animateGlobe() {
    requestAnimationFrame(animateGlobe);
    sphere.rotation.y += 0.01;
    globeRenderer.render(globeScene, globeCamera);
}

animateGlobe();

// Watch Video Function
function watchVideo() {
    const videoUrl = "https://www.example.com/video-url";  // Replace with your video URL
    window.open(videoUrl, "_blank");
}
// Countdown Timer
function updateCountdown() {
    const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime(); // Set your target date

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown ends
    if (distance < 0) {
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
// Smooth Scroll to an element on the page
document.querySelector('.btn').addEventListener('click', function() {
    const element = document.querySelector('.countdown'); // Element to scroll to
    element.scrollIntoView({ behavior: 'smooth' });
});
// Set the date we're counting down to
const countdownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy New Year 2024!";
  }
}, 1000);
