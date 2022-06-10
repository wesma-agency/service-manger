const allProjects = Vue.createApp({
	data() {
		return {

		};
	},

    methods: {
        toggleSetting(e) {
            let container = e.target.closest(".setting");

            if (container) {
                container.classList.toggle("show");
            }
        },

        dropdown(e) {
            let arrEl = document.querySelectorAll(".setting.show");
            let target = e.target;
            if (!target.closest(".setting")) {
                if (arrEl.length > 0) {
                    arrEl.forEach(el => el.classList.remove("show"));
                }
            }
        },

        projectEnd() {
            console.log("projectEnd...");
        },

        projectCopy() {
            console.log("projectCopy...");
        },

        projectRefer() {
            console.log("projectRefer...");
        },

        projectDelete() {
            console.log("projectDelete...");
        },

        projectEnable() {
            console.log("projectEnable...");
        }
        
	},

    created() { 
        document.addEventListener('click', this.dropdown)
    },

    destroyed() {
        document.removeEventListener('click', this.dropdown)
    }, 
    
    components: {
        "filters-projects": filters,
    },

});

allProjects.mount(".all-projects");