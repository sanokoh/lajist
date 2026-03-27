// Nav scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
function toggleMenu() {
	document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
	const scrollTop = window.scrollY;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
	progressBar.style.width = progress + '%';
}, { passive: true });

// Hero video parallax
const heroVideo = document.querySelector('.hero-video-wrap');
if (heroVideo) {
	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		if (scrollY < window.innerHeight) {
			heroVideo.style.transform = `translateY(${scrollY * 0.3}px)`;
		}
	}, { passive: true });
}

// Scroll reveal with stagger per group
const revealObserver = new IntersectionObserver((entries) => {
	const groups = new Map();

	entries.forEach(entry => {
		if (!entry.isIntersecting) return;

		// Group by parent section for stagger
		const parent = entry.target.closest('section') || entry.target.parentElement;
		if (!groups.has(parent)) groups.set(parent, []);
		groups.get(parent).push(entry.target);
	});

	groups.forEach(targets => {
		targets.forEach((el, i) => {
			setTimeout(() => el.classList.add('visible'), i * 120);
			revealObserver.unobserve(el);
		});
	});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
