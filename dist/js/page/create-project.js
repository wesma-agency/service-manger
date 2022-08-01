const globalParam = {
	props: {
		objfield: Object,
	},

	emits: ["eventChangeField"],

	data() {
		return {
			isEdits: false,
			newValue: {},
		};
	},

	computed: {
		propStageActive: {
			get() {
				if (Object.keys(this.objfield.stageParam).length) {
					for (let key in this.objfield.stageParam) {
						if (this.objfield.stageParam[key].isActive === true) {
							return {
								profitability: this.objfield.projectProp.resultField.profitability.valueField,
								profitabilityStage: this.objfield.stageParam[key].stageProp.resultField.profitability.valueField,
								nameStage: this.objfield.stageParam[key].nameStage,
								factClock: this.objfield.stageParam[key].stageProp.infoFild["fact-clock"].valueField,
								hoursLaid: this.objfield.stageParam[key].stageProp.infoFild["hours-laid"].valueField,
								paidСlient: this.objfield.stageParam[key].stageProp.calcField["paid-client"].valueField,
								taxation: this.objfield.stageParam[key].stageProp.calcField["taxation"].valueField,
							};
						}
					}
				} else {
					return {
						profitability: this.objfield.projectProp.resultField.profitability.valueField,
						profitabilityStage: 0,
						nameStage: 0,
						factClock: 0,
						hoursLaid: 0,
						paidСlient: 0,
						taxation: 0,
					};
				}
			},
		},
	},

	methods: {
		editsField(event, obj) {
			this.newValue[obj.nameField] = {
				valueField: event.target.value,
			};
		},

		handlerEdits(save) {
			this.isEdits = !this.isEdits;

			if (save === true) {
				this.$emit("eventChangeField", this.newValue);
			} else {
				for (let key in this.newValue) {
					delete this.newValue[key];
				}
			}
		},
	},

	template: `
        <div class="global-param__card card-global">
            <div class="card-global__title title-h3">Глобальные параметры</div>

            <div class="card-global__list">

			<template v-for="(item, name, i) in objfield.globalParam.infoFild" :key="i">
				<div class="field-item card-global__item field-item" :class="[item.linkField? '--link': '', isEdits? '--isEdits': '']">
					<div class="field-item__group-name">
						<div class="field-item__name">{{ item.nameField }}</div>

						<div class="field-item__hint hint" v-if="item.hintField">
							<div class="hint__icon">?</div>
							<div class="hint__popup">{{ item.hintField }}</div>
						</div>
					</div>
					<div class="field-item__wrap-text">
						<div v-if="!isEdits" class="field-item__text">{{ item.valueField }}</div>
						<input v-if="isEdits" class="field-item__text" type="text" :value="item.valueField" v-on:change="editsField($event, {nameField: name})">
					</div>
				</div>
			</template>

                <div class="card-global__item info-global">

                    <div class="info-global__row">
                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Рентабельность общая:</div>
                                <div class="info-global__option-value"><span
                                        class="--green"><b>{{propStageActive.profitability}}%</b></span>
                                </div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Этап:</div>
                                <div class="info-global__option-value">{{ propStageActive.nameStage }}</div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">План / факт этапа: </div>
                                <div class="info-global__option-value">{{ propStageActive.hoursLaid }} / <span
                                        class="--green">{{ propStageActive.factClock }}</span> ч</div>
                            </div>
                        </div>


                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Рентабельность этапа:</div>
                                <div class="info-global__option-value"><span class="--green"> <b>{{propStageActive.profitabilityStage}}%</b>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Бюджет:</div>
                                <div class="info-global__option-value">1 300 000 руб.</div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Оплачено / затрачено внеш.:</div>
                                <div class="info-global__option-value">{{propStageActive.paidСlient}} / {{propStageActive.taxation}} руб.</div>
                            </div>
                        </div>

                    </div>

                </div>

                </div>

            <div class="card-global__group-btn">
                <div class="card-global__btn main-btn" v-if="!isEdits" v-on:click="handlerEdits(false)">Редактирвоать</div>

                <div class="card-global__btn main-btn" v-if="isEdits" v-on:click="handlerEdits(true)">Применить</div>
                <div class="card-global__btn main-btn --gray" v-if="isEdits" v-on:click="handlerEdits(false)">Отменить</div>
            </div>
        </div>
    `,
};

const compUser = {
	props: {
		objuser: Object,
	},

	emits: ["eventChangeField", "eventChangeUserName", "eventDeleteUser", "eventSelectItemEventHandler"],

	data() {
		return {
			userList: [],
		};
	},

	methods: {
		deleteUserName() {
			let objUser = {
				idUser: this.objuser.idUser,
				sortPositionUser: this.objuser.sortPositionUser,
				userName: "",
			};
			this.$emit("eventChangeUserName", objUser);
		},

		changeUserName(e) {
			let objUser = {
				idUser: this.objuser.idUser,
				sortPositionUser: this.objuser.sortPositionUser,
				userName: e.target.value,
			};
			this.$emit("eventChangeUserName", objUser);
		},

		editsField(event, obj) {
			let objUser = {
				nameField: obj.nameField,
				valueField: +(+event.target.value).toFixed(2),
				idUser: this.objuser.idUser,
				sortPositionUser: this.objuser.sortPositionUser,
			};
			this.$emit("eventChangeField", objUser);
		},

		selectItemEventHandler(event) {
			let objUser = {
				idUser: event.idUser,
				sortPositionUser: this.objuser.sortPositionUser,
				infoFild: event.infoFild,
			};

			this.$emit("eventSelectItemEventHandler", objUser);
		},

		itemProjectionFunction(item) {
			return item.infoFild.nameUser.valueField;
		},
	},

	created() {
		for (let key in this.$root.$data.itemProject.userList) {
			this.userList.push(this.$root.$data.itemProject.userList[key]);
		}
	},

	components: {
		SimpleTypeahead: Vue3SimpleTypeahead,
	},

	template: `
        <div class="user-stage__item" >
            <div class="user-stage__row">
                <div class="user-stage__column">
                    <div class="user-stage__info info-user-stage">
                        <div class="info-user-stage__group-name">
                            <div class="info-user-stage__name-number">{{ objuser.sortPositionUser + 1 }}</div>
                            <div class="info-user-stage__name-value">
                                <input v-if="objuser.type ==  'outside'" type="text" :value="objuser.userName" v-on:change="changeUserName">

								<SimpleTypeahead
									v-if="objuser.type ==  'inside'"
									:placeholder="objuser.userName"
									:items="userList"
									:minInputLength="1"
									:itemProjection="itemProjectionFunction"
									@selectItem="selectItemEventHandler"
								>
								</SimpleTypeahead>

                            </div>
                            <div class="info-user-stage__name-delete" v-on:click="deleteUserName"></div>
                        </div>

                        <div class="info-user-stage__list">

							<template v-for="(item, name, i) in objuser.infoFild" :key="i">
								<div v-if="item.visibility" class="field-item info-user-stage__item" :class="[item.linkField? '--link': '']">
									
									<div class="field-item__group-name">
										<div class="field-item__name">{{item.nameField }}</div>
						
										<div class="field-item__hint hint" v-if="item.hintField">
											<div class="hint__icon">?</div>
											<div class="hint__popup">{{ item.hintField }}</div>
										</div>
									</div>
									<div class="field-item__wrap-text">
										<div v-if="!item.isTrueEdits" class="field-item__text">{{ item.valueField }}</div>
										<input v-if="item.isTrueEdits" class="field-item__text" type="text" :value="item.valueField" v-on:change="editsField($event, {nameField: name})">
									</div>
								</div>
							</template>

                        </div>

                        <div class="info-user-stage__delete-user main-btn" v-on:click="$emit('eventDeleteUser', { idUser: objuser.idUser, sortPositionUser: objuser.sortPositionUser })">Удалить пользователя</div>

                    </div>
                </div>

                <div class="user-stage__column">
                    <div class="user-stage__calc calc-user-stage">

						<div class="calc-user-stage__caption">
							<div class="calc-user-stage__title">Расходы</div>
							<div class="calc-user-stage__title">Расчеты</div>
						</div>

                        <div class="calc-user-stage__list">

							<template v-for="(item, name, i) in objuser.userProp.calcField" :key="i">
								<div class="field-calc calc-user-stage__item" :class="[item.green? '--green' : '' ]">
									<div class="field-calc__name">
										<span>{{ item.nameField }}</span>
						
										<div class="field-calc__hint hint" v-if="item.hintField">
											<div class="hint__icon">?</div>
											<div class="hint__popup">{{ item.hintField }}</div>
										</div>
									</div>
									<div class="field-calc__wrap-value" :class="[item.isTrueEdits? '--edits' : '' ]">
										<div v-if="!item.isTrueEdits" class="field-calc__value">{{ item.valueField }}</div>
										<input v-if="item.isTrueEdits" class="field-calc__value --input" type="text" :value="item.valueField" v-on:change="editsField($event, {nameField: name})">
									</div>
								</div>
							</template>

                        </div>
                    </div>
                </div>

                <div class="user-stage__column">
                    <div class="user-stage__calc calc-user-stage">
                        <div class="calc-user-stage__title">Итог</div>
							<div class="calc-user-stage__list-result">

							<template v-for="(item, name, i) in objuser.userProp.resultField" :key="i">
								<div class="field-calc calc-user-stage__item-result">
									<div class="field-calc__name">
										<span>{{ item.nameField }}</span>
						
										<div class="field-calc__hint hint" v-if="item.hintField">
											<div class="hint__icon">?</div>
											<div class="hint__popup">{{ item.hintField }}</div>
										</div>
									</div>
									<div class="field-calc__wrap-value">
										<div class="field-calc__value">{{ item.valueField }}</div>
									</div>
								</div>
							</template>

						</div>
                    </div>
                </div>
            </div>
        </div>
    `,
};

const compStage = {
	props: {
		objconfig: Object,
	},

	emits: ["eventChangeField", "eventChangeUserName", "eventMoveStage", "eventDeleteStage", "eventChangeNamgeStage", "eventAddUserInside", "eventAddUserOutside", "eventDeleteUser", "eventSelectItemEventHandler"],

	data() {
		return {
			isEdits: false,
		};
	},

	methods: {
		editsStage() {
			this.isEdits = !this.isEdits;

			if (this.isEdits === false) {
			} else {
				this.$nextTick(() => {
					this.$refs.inputNameStage.focus();
				});
			}
		},

		editsField(advice) {
			let objStage = advice;
			objStage.stageId = this.objconfig.stageId;
			objStage.sortPositionStage = this.objconfig.sortPositionStage;
			this.$emit("eventChangeField", objStage);
		},

		changeUserName(advice) {
			let objStage = advice;
			objStage.stageId = this.objconfig.stageId;
			objStage.sortPositionStage = this.objconfig.sortPositionStage;
			this.$emit("eventChangeUserName", objStage);
		},

		deleteUser(advice) {
			let objStage = advice;
			objStage.stageId = this.objconfig.stageId;
			objStage.sortPositionStage = this.objconfig.sortPositionStage;
			this.$emit("eventDeleteUser", objStage);
		},

		changeNameStage(e) {
			if (this.objconfig.nameStage.trim() !== e.target.value.trim()) {
				this.$emit("eventChangeNamgeStage", { stageId: this.objconfig.stageId, sortPositionStage: this.objconfig.sortPositionStage, nameStage: e.target.value });
			}
		},

		selectItemEventHandler(advice) {
			let objStage = advice;
			objStage.stageId = this.objconfig.stageId;
			objStage.sortPositionStage = this.objconfig.sortPositionStage;
			this.$emit("eventSelectItemEventHandler", objStage);
		},
	},

	components: {
		"comp-user": compUser,
	},

	template: `
        <div class="create-project__stage card-stage">
            <div class="card-stage__group-title">
                <div class="card-stage__title title-h3">
                    <span v-show="!isEdits" class="card-stage__title-value">{{ objconfig.nameStage }}</span>
                    <input v-show="isEdits" ref="inputNameStage" class="card-stage__title-value" type="text" :value="objconfig.nameStage" v-on:change="changeNameStage">
                </div>
                <div class="card-stage__option">
                    <div class="card-stage__option-item icon-global --up" v-on:click="$emit('eventMoveStage', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, directionMove: 'up'})"></div>
                    <div class="card-stage__option-item icon-global --down" v-on:click="$emit('eventMoveStage', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, directionMove: 'down'})"></div>
                    <div class="card-stage__option-item icon-global --edits" v-on:click="editsStage"></div>
                    <div class="card-stage__option-item icon-global --delete" v-on:click="$emit('eventDeleteStage', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, })"></div>
                </div>
            </div>

            <div class="card-stage__wrap">
                <div class="card-stage__subtitle title-h4">Участники</div>

                <div class="card-stage__user-list">
                    <div class="card-stage__user-item user-stage">

                        <div class="user-stage__list">

                            <comp-user v-for="(item, name, index) in objconfig.arrUserStage" :key="index" v-on:eventDeleteUser="deleteUser" v-on:eventSelectItemEventHandler="selectItemEventHandler" v-on:eventChangeUserName="changeUserName" v-on:eventChangeField="editsField" :objuser="item" :isedits="isEdits"></comp-user>

                        </div>

                        <div class="user-stage__add-user add-user">
                            <div class="add-user__list">
                                <div class="add-user__item" v-on:click="$emit('eventAddUserInside', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, postUser: 'inside'})">+ ДОБАВИТЬ INSIDE СОТРУДНИКА</div>
                                <div class="add-user__item" v-on:click="$emit('eventAddUserOutside', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, postUser: 'outside'})">+ ДОБАВИТЬ OUTSIDE ИСПОЛНИТЕЛЯ</div>
                            </div>

                            <div class="add-user__text">
                                <ul>
                                    <li>
                                        <b>Inside</b> - штатный сотрудник.Начисляются стандартные налоги (НДФЛ и
                                        соц.
                                        налоги)
                                    </li>
                                    <li>
                                        <b>Outside</b> - внештатный, аутсорс (юр. фирма или фрилансер с ИП). Налоги
                                        не
                                        начисляются
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
};

const compActvieStage = {
	props: {
		objconfig: Object,
	},

	emits: ["eventChangeActiveStage"],

	data() {
		return {
			isShow: false,
		};
	},

	methods: {
		toggleList() {
			this.isShow = !this.isShow;
		},

		dropdown(e) {
			let el = this.$el;
			let target = e.target;
			if (el !== target && !el.contains(target)) {
				this.isShow = false;
			}
		},
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
	},

	computed: {
		activeStage() {
			for (key in this.objconfig) {
				if (this.objconfig[key].isActive === true) {
					return this.objconfig[key].nameStage;
				}
			}
		},
	},

	template: `
        <div class="card-action__field field-select">
            <div class="field-select__name">Активный этап</div>

            <div class="field-select__wrap select-item">
                <div class="select-item__name" v-on:click="toggleList"><span>{{ activeStage }}</span></div>

                <transition name="fade">
                    <div class="select-item__list" v-if="isShow">
                        <div class="select-item__item" v-for="(item, index) in objconfig" :key="objconfig.sortPositionStage" v-on:click="$emit('eventChangeActiveStage', {stageId: item.stageId})">{{ item.nameStage }}</div>
                    </div>
                </transition>
            </div>
        </div>
    `,
};

const compActvieManager = {
	props: {
		objconfig: Object,
	},

	emits: ["eventChangeActiveManager"],

	data() {
		return {
			isShow: false,
		};
	},

	methods: {
		toggleList() {
			this.isShow = !this.isShow;
		},

		dropdown(e) {
			let el = this.$el;
			let target = e.target;
			if (el !== target && !el.contains(target)) {
				this.isShow = false;
			}
		},
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
	},

	computed: {
		activeManager() {
			for (key in this.objconfig) {
				if (this.objconfig[key].isActive === true) {
					return this.objconfig[key].nameManager;
				}
			}
		},
	},

	template: `
        <div class="card-action__field field-select">
            <div class="field-select__name">Менеджер</div>

            <div class="field-select__wrap select-item">
                <div class="select-item__name" v-on:click="toggleList"><span>{{ activeManager }}</span></div>

                <transition name="fade">
                    <div class="select-item__list" v-if="isShow">
                        <div class="select-item__item" v-for="(item, index) in objconfig" :key="objconfig.sortPositionManager" v-on:click="$emit('eventChangeActiveManager', {idManager: item.idManager})">{{ item.nameManager }}</div>
                    </div>
                </transition>
            </div>
        </div>
    `,
};

const project = Vue.createApp({
	data() {
		return {
			itemProject: null,
			isLoading: false,
			// itemProject: {
			// 	globalParam: {
			// 		infoFild: {
			// 			"name-project": {
			// 				nameField: "Название проекта",
			// 				valueField: "111",
			// 			},

			// 			"agreed-expenses": {
			// 				nameField: "Согласованные расходы, руб",
			// 				valueField: 111,
			// 				hintField: "Расходы, которые компания отдала за покупку лида, % другому агенству или партнеру",
			// 			},

			// 			"link-b24": {
			// 				nameField: "Ссылка на группу в б24",
			// 				valueField: "111",
			// 				linkField: true,
			// 			},

			// 			"link-deal-b24": {
			// 				nameField: "Ссылка на сделку в б24",
			// 				valueField: "111",
			// 				linkField: true,
			// 			},

			// 			"date-delivery": {
			// 				nameField: "Дата сдачи",
			// 				valueField: 111,
			// 			},

			// 			"percent-sales": {
			// 				nameField: "% сейлзу",
			// 				valueField: 111,
			// 			},
			// 		},

			// 		office: {
			// 			officeBrynsk: {
			// 				price: 115000,
			// 				people: 15,
			// 			},

			// 			officeMsk: {
			// 				price: 112000,
			// 				people: 4,
			// 			},
			// 		},
			// 	},

			// 	stageParam: {
			// 		0: {
			// 			stageId: "1",

			// 			sortPositionStage: 0,

			// 			nameStage: "Прототипирование",

			// 			isActive: true,

			// 			arrUserStage: {
			// 				0: {
			// 					idUser: "1",

			// 					userName: "Менеджер",

			// 					sortPositionUser: 0,

			// 					type: "inside",

			// 					office: "officeMsk",

			// 					infoFild: {
			// 						"hours-laid": {
			// 							nameField: "Часов заложено",
			// 							valueField: 103,
			// 							hintField: "Количество заложенных на задачу часов",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"link-b24": {
			// 							nameField: "Ссылка на задачу в б24",
			// 							valueField: "111",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"fact-clock": {
			// 							nameField: "Факт часов",
			// 							valueField: 103,
			// 							hintField: "Кол-во рабочих часов, по факту затраченных",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"external-bid": {
			// 							nameField: "Ставка (внеш), руб",
			// 							valueField: 1800,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						wages: {
			// 							nameField: "Заработная плата",
			// 							valueField: 70000,
			// 							visibility: false,
			// 							isTrueEdits: false,
			// 						},
			// 					},
			// 				},

			// 				1: {
			// 					idUser: "2",

			// 					userName: "Менеджер2",

			// 					sortPositionUser: 1,

			// 					type: "outside",

			// 					infoFild: {
			// 						"hours-laid": {
			// 							nameField: "Часов заложено",
			// 							valueField: 112,
			// 							hintField: "Количество заложенных на задачу часов",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"link-b24": {
			// 							nameField: "Ссылка на задачу в б24",
			// 							valueField: 111,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"fact-clock": {
			// 							nameField: "Факт часов",
			// 							valueField: 80.5,
			// 							hintField: "Кол-во рабочих часов, по факту затраченных",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"external-bid": {
			// 							nameField: "Ставка (внеш), руб",
			// 							valueField: 1800,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						wages: {
			// 							nameField: "Заработная плата",
			// 							valueField: 70000,
			// 							visibility: false,
			// 							isTrueEdits: false,
			// 						},
			// 					},
			// 				},
			// 			},
			// 		},

			// 		1: {
			// 			stageId: "2",

			// 			sortPositionStage: 1,

			// 			nameStage: "123123123",

			// 			isActive: false,

			// 			arrUserStage: {
			// 				0: {
			// 					idUser: "1",

			// 					userName: "Менеджер",

			// 					sortPositionUser: 0,

			// 					type: "outside",

			// 					infoFild: {
			// 						"hours-laid": {
			// 							nameField: "Часов заложено",
			// 							valueField: 112,
			// 							hintField: "Количество заложенных на задачу часов",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"link-b24": {
			// 							nameField: "Ссылка на задачу в б24",
			// 							valueField: 111,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"fact-clock": {
			// 							nameField: "Факт часов",
			// 							valueField: 80.5,
			// 							hintField: "Кол-во рабочих часов, по факту затраченных",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"external-bid": {
			// 							nameField: "Ставка (внеш), руб",
			// 							valueField: 1800,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						wages: {
			// 							nameField: "Заработная плата",
			// 							valueField: 70000,
			// 							visibility: false,
			// 							isTrueEdits: false,
			// 						},
			// 					},
			// 				},

			// 				1: {
			// 					idUser: "2",

			// 					userName: "Менеджер2",

			// 					sortPositionUser: 1,

			// 					type: "inside",

			// 					office: "officeMsk",

			// 					infoFild: {
			// 						"hours-laid": {
			// 							nameField: "Часов заложено",
			// 							valueField: 112,
			// 							hintField: "Количество заложенных на задачу часов",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"link-b24": {
			// 							nameField: "Ссылка на задачу в б24",
			// 							valueField: 111,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"fact-clock": {
			// 							nameField: "Факт часов",
			// 							valueField: 80.5,
			// 							hintField: "Кол-во рабочих часов, по факту затраченных",
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						"external-bid": {
			// 							nameField: "Ставка (внеш), руб",
			// 							valueField: 1800,
			// 							visibility: true,
			// 							isTrueEdits: true,
			// 						},

			// 						wages: {
			// 							nameField: "Заработная плата",
			// 							valueField: 70000,
			// 							visibility: false,
			// 							isTrueEdits: false,
			// 						},
			// 					},
			// 				},
			// 			},
			// 		},
			// 	},

			// 	userList: {
			// 		0: {
			// 			idUser: "1",
			// 			sortPositionUser: 0,
			// 			infoFild: {
			// 				nameUser: {
			// 					nameField: "Коношенко Павел",
			// 					valueField: 70000,
			// 				},

			// 				idBitrix: {
			// 					nameField: "ID Битрикс 24",
			// 					valueField: 40,
			// 				},

			// 				wages: {
			// 					nameField: "ЗП средняя, руб",
			// 					valueField: 70000,
			// 				},

			// 				"external-bid": {
			// 					nameField: "Ставка (внеш), руб",
			// 					valueField: 1800,
			// 				},

			// 				office: {
			// 					nameField: "Город офиса",
			// 					valueField: "officeMsk",
			// 				},
			// 			},
			// 		},
			// 		1: {
			// 			idUser: "2",
			// 			sortPositionUser: 0,
			// 			infoFild: {
			// 				nameUser: {
			// 					nameField: "Юзер 2",
			// 					valueField: 70000,
			// 				},

			// 				idBitrix: {
			// 					nameField: "ID Битрикс 24",
			// 					valueField: 40,
			// 				},

			// 				wages: {
			// 					nameField: "ЗП средняя, руб",
			// 					valueField: 70000,
			// 				},

			// 				"external-bid": {
			// 					nameField: "Ставка (внеш), руб",
			// 					valueField: 1800,
			// 				},

			// 				office: {
			// 					nameField: "Город офиса",
			// 					valueField: "officeMsk",
			// 				},
			// 			},
			// 		},
			// 	},

			// 	managerList: {
			// 		0: {
			// 			idManager: "1",
			// 			isActive: true,
			// 			nameManager: "Менеджер 1",
			// 			sortPositionManager: 0,
			// 		},

			// 		1: {
			// 			idManager: "2",
			// 			isActive: false,
			// 			nameManager: "Менеджер 2",
			// 			sortPositionManager: 1,
			// 		},

			// 		2: {
			// 			idManager: "3",
			// 			isActive: false,
			// 			nameManager: "Менеджер 3",
			// 			sortPositionManager: 2,
			// 		},

			// 		3: {
			// 			idManager: "4",
			// 			isActive: false,
			// 			nameManager: "Менеджер 4",
			// 			sortPositionManager: 3,
			// 		},

			// 		4: {
			// 			idManager: "5",
			// 			isActive: false,
			// 			nameManager: "Менеджер 5",
			// 			sortPositionManager: 4,
			// 		},
			// 	},
			// },
		};
	},

	async created() {
		await fetch("/js/data.json", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				this.itemProject = data;

				this.calcUpdateParam(this.itemProject);

				this.isLoading = true;
			});
	},

	methods: {
		// Формулы

		//Рабочих дней
		workingDays(objParam) {
			return +(objParam.a / 7).toFixed(2);
		},

		//Оплачено клиентом
		paidСlient(objParam) {
			return +(objParam.a * objParam.b).toFixed(2);
		},

		//Отгрузка (внешняя)
		shipmentExternal(objParam) {
			return +(objParam.a * 1800).toFixed(2);
		},

		//Разница оплотгруж
		difference(objParam) {
			return +(objParam.a - objParam.b).toFixed(2);
		},

		//Затраты
		wages(objParam, type = "inside") {
			if (type === "inside") {
				return +(objParam.a * (objParam.b / 22 / 7)).toFixed(2);
			}

			if (type === "outside") {
				return +objParam.b.toFixed(2);
			}
		},

		//Налог
		taxation(objParam) {
			return +(objParam.a * 0.15).toFixed(2);
		},

		//Выплата сейлзу
		paymentSales(objParam) {
			return +(objParam.a * 0.1).toFixed(2);
		},

		//Офис
		office(objParam, type = "inside") {
			if (type === "inside") {
				return +((objParam.a / objParam.b / 22) * objParam.c).toFixed(2);
			}

			if (type === "outside") {
				return 0;
			}
		},

		//Всех затрат
		allCosts(objParam) {
			return +(objParam.a + objParam.b + objParam.c + objParam.f).toFixed(2);
		},

		//Прибыль
		profit(objParam) {
			return +(objParam.a - objParam.b).toFixed(2);
		},

		//ЗП менеджера
		managerSalary(objParam) {
			return +(objParam.a * 0.1).toFixed(2);
		},

		//Итого прибыль
		resultProfit(objParam) {
			return +(objParam.a - objParam.b).toFixed(2);
		},

		//Рент
		profitability(objParam) {
			return +((objParam.a * 100) / objParam.b).toFixed(0);
		},

		calcUserParam(currentUser) {
			let hoursLaid = currentUser.infoFild["hours-laid"].valueField;
			let externalBid = currentUser.infoFild["external-bid"].valueField;
			let factClock = currentUser.infoFild["fact-clock"].valueField;
			let wagesInfo = currentUser.infoFild["wages"].valueField;

			let officePrice = currentUser.type == "inside" ? this.itemProject.globalParam.office[currentUser.office].price : 0;
			let officePeople = currentUser.type == "inside" ? this.itemProject.globalParam.office[currentUser.office].people : 0;

			let workingDays = {
				nameField: "Рабочих дней",
				valueField: 0,
				hintField: "Кол-во рабочих часов, по факту затраченных",
				isTrueEdits: false,
			};

			let wages = {
				nameField: "Затраты",
				valueField: 0,
				hintField: "Стоимость работ по внутренней ставке штатного специалиста или затрата на outside",
				isTrueEdits: currentUser.type === "inside" ? false : currentUser.type === "outside" ? true : false,
			};

			let paidСlient = {
				nameField: "Оплачено клиентом",
				valueField: 0,
				hintField: "Сумма оплаченная по договору",
				isTrueEdits: false,
			};

			let taxation = {
				nameField: "Налог",
				valueField: 0,
				hintField: "Налоги государству с прибыли",
				isTrueEdits: false,
			};

			let shipmentExternal = {
				nameField: "Отгрузка (внешняя)",
				valueField: 0,
				hintField: "Отгружено по фактическим часам",
				isTrueEdits: false,
				green: true,
			};

			let office = {
				nameField: "Офис",
				valueField: 0,
				hintField: "Налоги на сотрудника и косвенные платежи (аренда, канцелярия, интернет, еда и т.д)",
				isTrueEdits: false,
				green: true,
			};

			let difference = {
				nameField: "Разница оплотгруж",
				valueField: 0,
				isTrueEdits: false,
				green: true,
			};

			let paymentSales = {
				nameField: "Выплата сейлзу",
				valueField: 0,
				isTrueEdits: false,
				green: true,
			};

			let allCosts = {
				nameField: "Всех затрат",
				valueField: 0,
				hintField: "Всего затрат без менеджмента",
				isTrueEdits: false,
				green: true,
			};

			let profit = {
				nameField: "Прибыль",
				valueField: 0,
				hintField: "Итоговая прибыль",
			};

			let managerSalary = {
				nameField: "ЗП менеджера",
				valueField: 0,
			};

			let resultProfit = {
				nameField: "Итого прибыль",
				valueField: 0,
				hintField: "Прибыль по отделу.",
			};

			let profitability = {
				nameField: "Рент",
				valueField: 0,
				hintField: "Рентабельность конкретного сотрудника.",
			};

			workingDays.valueField = this.workingDays({ a: hoursLaid });
			wages.valueField = this.wages({ a: factClock, b: wagesInfo }, currentUser.type);
			paidСlient.valueField = this.paidСlient({ a: hoursLaid, b: externalBid });
			taxation.valueField = this.taxation({ a: paidСlient.valueField });
			shipmentExternal.valueField = this.shipmentExternal({ a: factClock });
			office.valueField = this.office({ a: officePrice, b: officePeople, c: workingDays.valueField }, currentUser.type);
			difference.valueField = this.difference({ a: paidСlient.valueField, b: shipmentExternal.valueField });
			paymentSales.valueField = this.paymentSales({ a: paidСlient.valueField });
			allCosts.valueField = this.allCosts({ a: wages.valueField, b: taxation.valueField, c: paymentSales.valueField, f: office.valueField });
			profit.valueField = this.profit({ a: paidСlient.valueField, b: allCosts.valueField });
			managerSalary.valueField = this.managerSalary({ a: profit.valueField });
			resultProfit.valueField = this.resultProfit({ a: profit.valueField, b: managerSalary.valueField });
			profitability.valueField = this.profitability({ a: profit.valueField, b: paidСlient.valueField });

			return {
				calcField: {
					"working-days": workingDays,
					wages: wages,
					"paid-client": paidСlient,
					taxation: taxation,
					"shipment-external": shipmentExternal,
					office: office,
					difference: difference,
					"payment-sales": paymentSales,
					"all-costs": allCosts,
				},

				resultField: {
					profit: profit,
					"manager-salary": managerSalary,
					"result-profit": resultProfit,
					profitability: profitability,
				},
			};
		},

		calcStageParam(currentStage) {
			let hoursLaid = {
				nameField: "Часов заложено",
				valueField: 0,
				hintField: "Количество заложенных на задачу часов",
			};

			let factClock = {
				nameField: "Факт часов",
				valueField: 0,
				hintField: "Кол-во рабочих часов, по факту затраченных",
			};

			let wages = {
				nameField: "Затраты",
				valueField: 0,
				hintField: "Стоимость работ по внутренней ставке штатного специалиста или затрата на outside",
			};

			let paidСlient = {
				nameField: "Оплачено клиентом",
				valueField: 0,
				hintField: "Сумма оплаченная по договору",
			};

			let taxation = {
				nameField: "Налог",
				valueField: 0,
				hintField: "Налоги государству с прибыли",
			};

			let shipmentExternal = {
				nameField: "Отгрузка (внешняя)",
				valueField: 0,
				hintField: "Отгружено по фактическим часам",
			};

			let difference = {
				nameField: "Разница оплотгруж",
				valueField: 0,
			};

			let paymentSales = {
				nameField: "Выплата сейлзу",
				valueField: 0,
			};

			let allCosts = {
				nameField: "Всех затрат",
				valueField: 0,
				hintField: "Всего затрат без менеджмента",
			};

			let profit = {
				nameField: "Прибыль",
				valueField: 0,
				hintField: "Итоговая прибыль",
			};

			let managerSalary = {
				nameField: "ЗП менеджера",
				valueField: 0,
			};

			let resultProfit = {
				nameField: "Итого прибыль",
				valueField: 0,
				hintField: "Прибыль по отделу.",
			};

			let profitability = {
				nameField: "Рент",
				valueField: 0,
				hintField: "Рентабельность конкретного сотрудника.",
			};

			if (Object.keys(currentStage.arrUserStage).length > 0) {
				for (let key in currentStage.arrUserStage) {
					hoursLaid.valueField += currentStage.arrUserStage[key].infoFild["hours-laid"].valueField;
					factClock.valueField += currentStage.arrUserStage[key].infoFild["fact-clock"].valueField;

					paidСlient.valueField += currentStage.arrUserStage[key].userProp.calcField["paid-client"].valueField;
					shipmentExternal.valueField += currentStage.arrUserStage[key].userProp.calcField["shipment-external"].valueField;
					difference.valueField += currentStage.arrUserStage[key].userProp.calcField["difference"].valueField;
					wages.valueField += currentStage.arrUserStage[key].userProp.calcField["wages"].valueField;
					taxation.valueField += currentStage.arrUserStage[key].userProp.calcField["taxation"].valueField;
					paymentSales.valueField += currentStage.arrUserStage[key].userProp.calcField["payment-sales"].valueField;
					allCosts.valueField += currentStage.arrUserStage[key].userProp.calcField["all-costs"].valueField;

					profit.valueField += currentStage.arrUserStage[key].userProp.resultField["profit"].valueField;
					managerSalary.valueField += currentStage.arrUserStage[key].userProp.resultField["manager-salary"].valueField;
					resultProfit.valueField = this.resultProfit({ a: profit.valueField, b: managerSalary.valueField });
					profitability.valueField = this.profitability({ a: profit.valueField, b: paidСlient.valueField });
				}
			}

			return {
				infoFild: {
					"hours-laid": hoursLaid,
					"fact-clock": factClock,
				},

				calcField: {
					"paid-client": paidСlient,
					"shipment-external": shipmentExternal,
					difference: difference,
					wages: wages,
					taxation: taxation,
					"payment-sales": paymentSales,
					"all-costs": allCosts,
				},

				resultField: {
					profit: profit,
					"manager-salary": managerSalary,
					"result-profit": resultProfit,
					profitability: profitability,
				},
			};
		},

		calcProjectParam(project) {
			let hoursLaid = {
				nameField: "Часов заложено",
				valueField: 0,
				hintField: "Количество заложенных на задачу часов",
			};

			let factClock = {
				nameField: "Факт часов",
				valueField: 0,
				hintField: "Кол-во рабочих часов, по факту затраченных",
			};

			let wages = {
				nameField: "Затраты",
				valueField: 0,
				hintField: "Стоимость работ по внутренней ставке штатного специалиста или затрата на outside",
			};

			let paidСlient = {
				nameField: "Оплачено клиентом",
				valueField: 0,
				hintField: "Сумма оплаченная по договору",
			};

			let taxation = {
				nameField: "Налог",
				valueField: 0,
				hintField: "Налоги государству с прибыли",
			};

			let shipmentExternal = {
				nameField: "Отгрузка (внешняя)",
				valueField: 0,
				hintField: "Отгружено по фактическим часам",
			};

			let difference = {
				nameField: "Разница оплотгруж",
				valueField: 0,
			};

			let paymentSales = {
				nameField: "Выплата сейлзу",
				valueField: 0,
			};

			let allCosts = {
				nameField: "Всех затрат",
				valueField: 0,
				hintField: "Всего затрат без менеджмента",
			};

			let profit = {
				nameField: "Прибыль",
				valueField: 0,
				hintField: "Итоговая прибыль",
			};

			let managerSalary = {
				nameField: "ЗП менеджера",
				valueField: 0,
			};

			let resultProfit = {
				nameField: "Итого прибыль",
				valueField: 0,
				hintField: "Прибыль по отделу.",
			};

			let profitability = {
				nameField: "Рент",
				valueField: 0,
				hintField: "Рентабельность конкретного сотрудника.",
			};

			if (Object.keys(project.stageParam).length > 0) {
				for (let key in project.stageParam) {
					hoursLaid.valueField += project.stageParam[key].stageProp.infoFild["hours-laid"].valueField;
					factClock.valueField += project.stageParam[key].stageProp.infoFild["fact-clock"].valueField;

					paidСlient.valueField += project.stageParam[key].stageProp.calcField["paid-client"].valueField;
					shipmentExternal.valueField += project.stageParam[key].stageProp.calcField["shipment-external"].valueField;
					difference.valueField += project.stageParam[key].stageProp.calcField["difference"].valueField;
					wages.valueField += project.stageParam[key].stageProp.calcField["wages"].valueField;
					taxation.valueField += project.stageParam[key].stageProp.calcField["taxation"].valueField;
					paymentSales.valueField += project.stageParam[key].stageProp.calcField["payment-sales"].valueField;
					allCosts.valueField += project.stageParam[key].stageProp.calcField["all-costs"].valueField;

					profit.valueField += project.stageParam[key].stageProp.resultField["profit"].valueField;
					managerSalary.valueField += project.stageParam[key].stageProp.resultField["manager-salary"].valueField;
					resultProfit.valueField = this.resultProfit({ a: profit.valueField, b: managerSalary.valueField });
					profitability.valueField = this.profitability({ a: profit.valueField, b: paidСlient.valueField });
				}
			}

			return {
				infoFild: {
					"hours-laid": hoursLaid,
					"fact-clock": factClock,
				},

				calcField: {
					"paid-client": paidСlient,
					"shipment-external": shipmentExternal,
					difference: difference,
					wages: wages,
					taxation: taxation,
					"payment-sales": paymentSales,
					"all-costs": allCosts,
				},

				resultField: {
					profit: profit,
					"manager-salary": managerSalary,
					"result-profit": resultProfit,
					profitability: profitability,
				},
			};
		},

		calcUpdateParam(project) {
			for (let key in project.stageParam) {
				let currentStage = project.stageParam[key];

				for (let i in currentStage.arrUserStage) {
					let currentUser = currentStage.arrUserStage[i];

					currentUser.userProp = this.calcUserParam(currentUser);
				}

				currentStage.stageProp = this.calcStageParam(currentStage);
			}

			project.projectProp = this.calcProjectParam(project);

			console.log(this.itemProject);
		},
		///

		// Изменение глобальных парамметров
		editsFieldGlobal(advice) {
			for (let key in advice) {
				this.itemProject.globalParam.infoFild[key].valueField = advice[key].valueField;
			}
		},

		// Изменение полей юзера
		editsFieldStage(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser]["infoFild"][advice.nameField].valueField = advice.valueField;

			this.calcUpdateParam(this.itemProject);
		},

		// Изменение имени участника этапа
		changeUserParam(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].userName = advice.userName;
		},

		// Перемещение стадии
		changeMoveStage(advice) {
			let lengthObjStage = Object.keys(this.itemProject.stageParam).length;

			if (lengthObjStage > 1) {
				switch (advice.directionMove) {
					case "down":
						if (advice.sortPositionStage + 1 < lengthObjStage) {
							let nextStage = this.itemProject.stageParam[advice.sortPositionStage + 1];

							this.itemProject.stageParam[advice.sortPositionStage].sortPositionStage = advice.sortPositionStage + 1;
							this.itemProject.stageParam[advice.sortPositionStage + 1].sortPositionStage = advice.sortPositionStage;

							this.itemProject.stageParam[advice.sortPositionStage + 1] = this.itemProject.stageParam[advice.sortPositionStage];
							this.itemProject.stageParam[advice.sortPositionStage] = nextStage;
						}
						break;
					case "up":
						if (advice.sortPositionStage !== 0) {
							let prevStage = this.itemProject.stageParam[advice.sortPositionStage - 1];

							this.itemProject.stageParam[advice.sortPositionStage].sortPositionStage = advice.sortPositionStage - 1;
							this.itemProject.stageParam[advice.sortPositionStage - 1].sortPositionStage = advice.sortPositionStage;

							this.itemProject.stageParam[advice.sortPositionStage - 1] = this.itemProject.stageParam[advice.sortPositionStage];
							this.itemProject.stageParam[advice.sortPositionStage] = prevStage;
						}
						break;
				}
			}
		},

		// Изменение навания стадии
		changeNameStage(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].nameStage = advice.nameStage;
		},

		// Удалить юзера
		deleteUser(advice) {
			let index = 0;

			for (let key in this.itemProject.stageParam[advice.sortPositionStage].arrUserStage) {
				if (advice.sortPositionUser <= parseInt(key) && this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[parseInt(key) + 1] !== undefined) {
					this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[parseInt(key) + 1].sortPositionUser = index;

					this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[key] = this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[parseInt(key) + 1];
				}

				if (Object.keys(this.itemProject.stageParam[advice.sortPositionStage].arrUserStage).length - 1 == parseInt(key)) {
					delete this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[key];
				}

				index++;
			}

			this.calcUpdateParam(this.itemProject);
		},

		// Удалить стадию
		changeDeleteStage(advice) {
			for (let key in this.itemProject.stageParam) {
				if (advice.sortPositionStage === parseInt(key)) {
					if (this.itemProject.stageParam[advice.sortPositionStage].isActive === true) {
						this.itemProject.stageParam[1] !== undefined ? (this.itemProject.stageParam[1].isActive = true) : null;
					}
				}

				if (advice.sortPositionStage <= parseInt(key) && this.itemProject.stageParam[parseInt(key) + 1] !== undefined) {
					this.itemProject.stageParam[parseInt(key) + 1].sortPositionStage = key;

					this.itemProject.stageParam[key] = this.itemProject.stageParam[parseInt(key) + 1];
				}

				if (Object.keys(this.itemProject.stageParam).length - 1 == parseInt(key)) {
					delete this.itemProject.stageParam[key];
				}
			}
			this.calcUpdateParam(this.itemProject);
		},

		// Добавить Inside юзера
		addUserInside(advice) {
			let sortPositionUser = Object.keys(this.itemProject.stageParam[advice.sortPositionStage].arrUserStage).length;

			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[sortPositionUser] = {
				idUser: `${new Date().getTime()}`,

				sortPositionUser: sortPositionUser,

				userName: "",

				type: advice.postUser,

				office: "officeBrynsk",

				infoFild: {
					"hours-laid": {
						nameField: "Часов заложено",
						valueField: 0,
						hintField: "Количество заложенных на задачу часов",
						visibility: true,
						isTrueEdits: true,
					},

					"link-b24": {
						nameField: "Ссылка на задачу в б24",
						valueField: "",
						visibility: true,
						isTrueEdits: true,
					},

					"fact-clock": {
						nameField: "Факт часов",
						valueField: 0,
						hintField: "Кол-во рабочих часов, по факту затраченных",
						visibility: true,
						isTrueEdits: true,
					},

					"external-bid": {
						nameField: "Ставка (внеш), руб",
						valueField: 0,
						visibility: true,
						isTrueEdits: true,
					},

					wages: {
						nameField: "Заработная плата",
						valueField: 0,
						visibility: false,
					},
				},
			};

			this.calcUpdateParam(this.itemProject);
		},

		// Добавить Outside юзера
		addUserOutside(advice) {
			let sortPositionUser = Object.keys(this.itemProject.stageParam[advice.sortPositionStage].arrUserStage).length;

			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[sortPositionUser] = {
				idUser: `${new Date().getTime()}`,

				sortPositionUser: sortPositionUser,

				userName: "",

				type: advice.postUser,

				office: null,

				infoFild: {
					"hours-laid": {
						nameField: "Часов заложено",
						valueField: 0,
						hintField: "Количество заложенных на задачу часов",
						visibility: true,
						isTrueEdits: true,
					},

					"link-b24": {
						nameField: "Ссылка на задачу в б24",
						valueField: "",
						visibility: true,
						isTrueEdits: true,
					},

					"fact-clock": {
						nameField: "Факт часов",
						valueField: 0,
						hintField: "Кол-во рабочих часов, по факту затраченных",
						visibility: true,
						isTrueEdits: true,
					},

					"external-bid": {
						nameField: "Ставка (внеш), руб",
						valueField: 0,
						visibility: true,
						isTrueEdits: true,
					},

					wages: {
						nameField: "Заработная плата",
						valueField: 0,
						visibility: false,
					},
				},
			};

			this.calcUpdateParam(this.itemProject);
		},

		// Добавить этап
		addStage() {
			let sortPositionStage = Object.keys(this.itemProject.stageParam).length;

			this.itemProject.stageParam[sortPositionStage] = {
				stageId: `${new Date().getTime()}`,

				sortPositionStage: sortPositionStage,

				nameStage: "Новый этап",

				isActive: Object.keys(this.itemProject.stageParam).length == 0 ? true : false,

				arrUserStage: {},
			};

			this.calcUpdateParam(this.itemProject);
		},

		// Изменить активную стадию
		changeActiveStage(advice) {
			for (key in this.itemProject.stageParam) {
				if (this.itemProject.stageParam[key].stageId === advice.stageId) {
					this.itemProject.stageParam[key].isActive = true;
				} else {
					this.itemProject.stageParam[key].isActive = false;
				}
			}
		},

		// Изменить активного менеджера
		changeActiveManager(advice) {
			for (key in this.itemProject.managerList) {
				if (this.itemProject.managerList[key].idManager === advice.idManager) {
					this.itemProject.managerList[key].isActive = true;
				} else {
					this.itemProject.managerList[key].isActive = false;
				}
			}
		},

		//
		selectItemEventHandler(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].infoFild["external-bid"].valueField = advice.infoFild["external-bid"].valueField;
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].infoFild["wages"].valueField = advice.infoFild["wages"].valueField;
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].office = advice.infoFild["office"].valueField;
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].userName = advice.infoFild["nameUser"].valueField;
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].idUser = advice["idUser"];

			this.calcUpdateParam(this.itemProject);
		},
	},

	components: {
		"comp-global-param": globalParam,
		"comp-stage": compStage,
		"comp-actvie-stage": compActvieStage,
		"comp-actvie-manager": compActvieManager,
	},
});

project.mount(".create-project");
