const filters = {
	data() {
		return {
            arrfilters: null
		};
	},

	methods: {
	},

    mounted() {
        setTimeout(() => {
            this.arrfilters = [
                {
                    nameFilter: "Менеджер",
                    arrFilter: ["Липская Марина", "Мельникова Инна", "Селейкович Марина"]
                },
    
                {
                    nameFilter: "Год",
                    arrFilter: ["2020", "2021", "2022"]
                },
    
                {
                    nameFilter: "CMS",
                    arrFilter: ["Bitrix", "Webasyst", "ModX"]
                },
    
                {
                    nameFilter: "Активный",
                    arrFilter: ["Активный", "Завершенный"]
                }
            ]
        }, 500)
    },

    template: `
        <filter-item v-for="(item, index) in arrfilters" :key="index" :objfilter="item"></filter-item>
    `,

    components: {
        "filter-item": {
            props: ["objfilter"],
        
            data() {
                return {
                    showList: false,
                    dataFilter: this.objfilter
                };
            },
        
            methods: {
                toggleList() {
                    this.showList = !this.showList;
                },
        
                dropdown(e) {
                    let el = this.$el;
                    let target = e.target;
                    if (el !== target && !el.contains(target)){
                      this.showList = false;
                    }
                },
                
                handlerFilter(el) {
                    this.dataFilter.nameFilter = el;
                }
            },
        
            created() { 
                document.addEventListener('click', this.dropdown)
            },
        
            destroyed() {
                document.removeEventListener('click', this.dropdown)
            }, 
        
            template: `
                <div class="all-projects__item-filter filter-project" :class="{ active: showList }">
                    <div class="filter-project__name" v-on:click="toggleList"><span>{{dataFilter.nameFilter}}</span></div>
        
                    <transition name="fade">
                        <div class="filter-project__list" v-if="showList">
                            <div class="filter-project__list-item" v-for="el in dataFilter.arrFilter" v-on:click="handlerFilter(el)"> {{el}} </div>
                        </div>
                    </transition>
                </div>
            `
        }
    }
};
