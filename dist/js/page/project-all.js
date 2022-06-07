const allProjects = Vue.createApp({
	data() {
		return {

		};
	},
    
    components: {
        "filters-one": filters
    },

});

allProjects.mount(".all-projects");