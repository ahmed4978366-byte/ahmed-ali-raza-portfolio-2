// 1. Live EST Clock Update
function updateLiveTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeStr = now.toLocaleTimeString('en-US', options);
    const el = document.getElementById('live-time');
    if (el) el.textContent = timeStr + ' EST';
}
setInterval(updateLiveTime, 1000);
updateLiveTime();

// 2. Typewriter Effect for Hero Roles
const roles = ["UI/UX Designer", "Web Developer", "App Developer", "Graphic Designer", "Photographer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeEffect() {
    if (!typewriterEl) return;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        charIndex--;
        typewriterEl.textContent = currentRole.substring(0, charIndex);
    } else {
        charIndex++;
        typewriterEl.textContent = currentRole.substring(0, charIndex);
    }

    let typeSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1800; // Pause when string completes
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// 3. Mobile Navigation Drawer Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 4. Dynamic Portfolio Projects Data
const portfolioData = {
    web: {
        title: "Web Development",
        badge: "01 / FULL STACK",
        desc: "Modern responsive web applications engineered for seamless performance, speed, and clean code principles.",
        projects: [
            { title: "Expense Tracker Dashboard", tag: "Finance App", desc: "Personal finance tracker with realtime income/expense graphs, budget management, and dark aesthetic UI.", img: "https://placehold.co/600x400/1e293b/38bdf8?text=Expense+Tracker+Web" },
            { title: "SaaS Analytics Portal", tag: "Dashboard", desc: "Complex analytics platform featuring interactive charts, automated reporting, and role-based access.", img: "https://placehold.co/600x400/1e293b/818cf8?text=Analytics+Portal" },
            { title: "E-Commerce Experience", tag: "Web Store", desc: "High conversion online store platform built with ultra-fast search, cart management, and payment gateway.", img: "https://placehold.co/600x400/1e293b/34d399?text=E-Commerce+Store" }
        ]
    },
    app: {
        title: "App Development",
        badge: "02 / MOBILE APPS",
        desc: "Native and cross-platform mobile apps for iOS & Android built with slick micro-interactions and smooth UX.",
        projects: [
            { title: "Brick Breaker Mobile Game", tag: "Arcade Game", desc: "Retro arcade brick breaker game featuring pixel art visuals, sound effects, and smooth touch controls.", img: "https://placehold.co/600x400/1e293b/c084fc?text=Brick+Breaker+App" },
            { title: "Dice Roller & Strategy", tag: "Utility App", desc: "3D dice rolling application with custom sound effects, haptic feedback, and custom game board logic.", img: "https://placehold.co/600x400/1e293b/f43f5e?text=Dice+Roller+App" },
            { title: "Fitness Tracker Mobile", tag: "Health & Fitness", desc: "Daily workout logging app synchronized with step counters, heart rate monitoring, and streak tracking.", img: "https://placehold.co/600x400/1e293b/fbbf24?text=Fitness+Tracker+App" }
        ]
    },
    uiux: {
        title: "UI/UX Design",
        badge: "03 / INTERFACE DESIGN",
        desc: "User-centered wireframes, component design systems, dynamic prototypes, and aesthetic user interfaces.",
        projects: [
            { title: "Neumorphic Banking System", tag: "Fintech UI", desc: "Next-gen banking application design system complete with accessible contrast ratios and seamless navigation.", img: "https://placehold.co/600x400/1e293b/fbbf24?text=Banking+UI+Design" },
            { title: "Smart Home Control Hub", tag: "IoT Design", desc: "Intuitive dashboard interface designed for tablet & mobile to control smart home appliances in real-time.", img: "https://placehold.co/600x400/1e293b/38bdf8?text=Smart+Home+UI" }
        ]
    },
    graphic: {
        title: "Graphic & Media Design",
        badge: "04 / VISUAL IDENTITY",
        desc: "Brand identity packages, vector illustrations, promotional posters, and media creative artwork.",
        projects: [
            { title: "Cyberpunk Brand Identity", tag: "Branding", desc: "Complete visual branding suite including vector logos, color typography guidelines, and social banners.", img: "https://placehold.co/600x400/1e293b/34d399?text=Cyberpunk+Branding" },
            { title: "3D Motion Graphics Posters", tag: "Digital Art", desc: "Experimental poster collection utilizing 3D render composition, bold typography, and gradient masks.", img: "https://placehold.co/600x400/1e293b/a855f7?text=3D+Art+Posters" }
        ]
    }
};

// Open Category Door Modal Function
function openDoorCategory(catKey) {
    const data = portfolioData[catKey];
    if (!data) return;

    document.getElementById('modal-category-title').textContent = data.title;
    document.getElementById('modal-category-badge').textContent = data.badge;
    document.getElementById('modal-category-desc').textContent = data.desc;

    const grid = document.getElementById('modal-projects-grid');
    grid.innerHTML = '';

    data.projects.forEach(p => {
        const cardHtml = `
            <div class="bg-cardBg border border-cardBorder rounded-2xl overflow-hidden hover:border-blue-500/40 transition group">
                <div class="aspect-video bg-gray-900 relative overflow-hidden">
                    <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">${p.tag}</span>
                </div>
                <div class="p-6 space-y-3">
                    <h4 class="text-lg font-bold font-heading text-white">${p.title}</h4>
                    <p class="text-gray-400 text-xs leading-relaxed">${p.desc}</p>
                    <div class="pt-2 flex items-center justify-between">
                        <a href="https://wa.me/03075857370" target="_blank" class="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                            <span>Inquire via WhatsApp</span>
                            <i class="fa-solid fa-chevron-right text-[10px]"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeDoorModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 5. Timeline Filter Functionality
function setTimelineYear(year) {
    const btns = document.querySelectorAll('.timeline-year-btn');
    btns.forEach(btn => {
        if (btn.getAttribute('data-year') === year) {
            btn.classList.add('bg-blue-600', 'text-white');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('text-gray-400');
        }
    });

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        if (year === 'all' || item.getAttribute('data-year') === year) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}