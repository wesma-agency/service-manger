const costConstants = Vue.createApp({
	data() {
		return {
			costConstants: {
				mainConts: [
					{
						idCost: "onlineStore",

						nameTitle: "Интернет-магазин (уник)",

						arrField: [
							{
								nameField: "Главная страница (6 экранов)",
								analyticsField: "6",
								prototypingField: "15",
								designField: "29",
								frontEndField: "25",
								backEndField: "33",
							},

							{
								nameField: "Главная",
								analyticsField: "6",
								prototypingField: "125",
								designField: "29",
								frontEndField: "225",
								backEndField: "33",
							},
						],
					},

					{
						idCost: "corporateWebsite",

						nameTitle: "Корпоративный сайт (уник)",

						arrField: [
							{
								nameField: "Главная страница (6 экранов)",
								analyticsField: "6",
								prototypingField: "15",
								designField: "29",
								frontEndField: "25",
								backEndField: "33",
							},

							{
								nameField: "Главная",
								analyticsField: "6",
								prototypingField: "125",
								designField: "29",
								frontEndField: "225",
								backEndField: "33",
							},
						],
					},

					{
						idCost: "landingPage",

						nameTitle: "Лендинг",

						arrField: [
							{
								nameField: "Главная страница (6 экранов)",
								analyticsField: "6",
								prototypingField: "15",
								designField: "29",
								frontEndField: "25",
								backEndField: "33",
							},

							{
								nameField: "Главная",
								analyticsField: "6",
								prototypingField: "125",
								designField: "29",
								frontEndField: "225",
								backEndField: "33",
							},
						],
					},

					{
						idCost: "websiteTemplate",

						nameTitle: "Сайт на шаблоне",

						arrField: [
							{
								nameField: "Главная страница (6 экранов)",
								analyticsField: "6",
								prototypingField: "15",
								designField: "29",
								frontEndField: "25",
								backEndField: "33",
							},

							{
								nameField: "Главная",
								analyticsField: "6",
								prototypingField: "125",
								designField: "29",
								frontEndField: "225",
								backEndField: "33",
							},
						],
					},
				],
			},
		};
	},
});

costConstants.mount(".cost-constants");
