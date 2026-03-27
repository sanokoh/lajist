// Nav scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
function toggleMenu() {
	document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry, i) => {
		if (entry.isIntersecting) {
			setTimeout(() => entry.target.classList.add('visible'), i * 60);
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
