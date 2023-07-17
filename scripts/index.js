(function() {
	let nav = {
		nav: document.querySelector('nav'),
		navToggle: document.querySelector('nav .toggle'),

		initialize() {
			this.navToggle.addEventListener('click', () => this.navToggleClick());
		},

		navToggleClick() {
			this.nav.classList.toggle('active');
		},
	};

	nav.initialize();
})();
