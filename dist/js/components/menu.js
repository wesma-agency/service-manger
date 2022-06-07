const sideMenu = Vue.createApp({
	data() {
		return {
		};
	},

	methods: {
        onExit() {
            console.log(2);
        },

        toggleList(e) {
            let container = e.target.closest(".side-menu__item");
            let subMenu = container? container.querySelector(".side-menu__submenu") : null;

            if (container) {
                container.classList.toggle("show");
                subMenu? _slideToggle(subMenu, 300) : null;
            }
        }
	},
});

sideMenu.mount(".side-menu");
