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

			<template v-for="(item, name, i) in objfield.infoFild" :key="i">
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
                                        class="--green"><b>55%</b></span>
                                </div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Этап:</div>
                                <div class="info-global__option-value">Дизайн UX</div>
                            </div>
                        </div>

                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">План / факт этапа: </div>
                                <div class="info-global__option-value">113 / <span
                                        class="--green">35</span> ч</div>
                            </div>
                        </div>


                        <div class="info-global__column">
                            <div class="info-global__option">
                                <div class="info-global__option-name">Рентабельность этапа:</div>
                                <div class="info-global__option-value"><span class="--green"> <b>40%</b>
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
                                <div class="info-global__option-value">570 000 / 345 433 руб.</div>
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

	emits: ["eventChangeField", "eventChangeUserName", "eventDeleteUser"],

	data() {
		return {
			calcField: {
				"working-days": {
					nameField: "Рабочих дней",
					valueField: 0,
					hintField: "Кол-во рабочих часов, по факту затраченных",
					isTrueEdits: false,
				},

				wages: {
					nameField: "Затраты",
					valueField: "",
					hintField: "Стоимость работ по внутренней ставке штатного специалиста или затрата на outside",
					isTrueEdits: this.objuser.type === "inside" ? false : this.objuser.type === "outside" ? true : false,
				},

				"paid-client": {
					nameField: "Оплачено клиентом",
					valueField: 0,
					hintField: "Сумма оплаченная по договору",
					isTrueEdits: false,
				},

				taxation: {
					nameField: "Налог",
					valueField: 0,
					hintField: "Налоги государству с прибыли",
					isTrueEdits: false,
				},

				"shipment-external": {
					nameField: "Отгрузка (внешняя)",
					valueField: 0,
					hintField: "Отгружено по фактическим часам",
					isTrueEdits: false,
					green: true,
				},

				office: {
					nameField: "Офис",
					valueField: 0,
					hintField: "Налоги на сотрудника и косвенные платежи (аренда, канцелярия, интернет, еда и т.д)",
					isTrueEdits: false,
					green: true,
				},

				difference: {
					nameField: "Разница оплотгруж",
					valueField: 0,
					isTrueEdits: false,
					green: true,
				},

				"payment-sales": {
					nameField: "Выплата сейлзу",
					valueField: 0,
					isTrueEdits: false,
					green: true,
				},

				"all-costs": {
					nameField: "Всех затрат",
					valueField: 0,
					hintField: "Всего затрат без менеджмента",
					isTrueEdits: false,
					green: true,
				},
			},

			resultField: {
				profit: {
					nameField: "Прибыль",
					valueField: 0,
					hintField: "Итоговая прибыль",
				},

				"manager-salary": {
					nameField: "ЗП менеджера",
					valueField: 0,
				},

				"result-profit": {
					nameField: "Итого прибыль",
					valueField: 0,
					hintField: "Прибыль по отделу.",
				},

				profitability: {
					nameField: "Рент",
					valueField: 0,
					hintField: "Рентабельность конкретного сотрудника.",
				},
			},
		};
	},

	computed: {
		workingDays: {
			get() {
				return +(this.objuser.infoFild["hours-laid"].valueField / 7).toFixed(2);
			},

			set() {
				this.calcField["working-days"].valueField = +(this.objuser.infoFild["hours-laid"].valueField / 7).toFixed(2);
			},
		},

		paidСlient: {
			get() {
				return +(this.objuser.infoFild["hours-laid"].valueField * this.objuser.infoFild["external-bid"].valueField).toFixed(2);
			},

			set() {
				this.calcField["paid-client"].valueField = +(this.objuser.infoFild["hours-laid"].valueField * this.objuser.infoFild["external-bid"].valueField).toFixed(2);
			},
		},

		shipmentExternal: {
			get() {
				return +(this.objuser.infoFild["fact-clock"].valueField * 1800).toFixed(2);
			},

			set() {
				this.calcField["shipment-external"].valueField = +(this.objuser.infoFild["fact-clock"].valueField * 1800).toFixed(2);
			},
		},

		difference: {
			get() {
				return +(this.paidСlient - this.shipmentExternal).toFixed(2);
			},

			set() {
				this.calcField["difference"].valueField = +(this.paidСlient - this.shipmentExternal).toFixed(2);
			},
		},

		wages: {
			get() {
				if (this.objuser.type === "inside") {
					return +(this.objuser.infoFild["fact-clock"].valueField * (this.objuser.infoFild["wages"].valueField / 22 / 7)).toFixed(2);
				}

				if (this.objuser.type === "outside") {
					return +this.objuser.infoFild["wages"].valueField.toFixed(2);
				}
			},

			set() {
				if (this.objuser.type === "inside") {
					this.calcField["wages"].valueField = +(this.objuser.infoFild["fact-clock"].valueField * (this.objuser.infoFild["wages"].valueField / 22 / 7)).toFixed(2);
				}

				if (this.objuser.type === "outside") {
					this.calcField["wages"].valueField = +this.objuser.infoFild["wages"].valueField.toFixed(2);
				}
			},
		},

		taxation: {
			get() {
				return +(this.paidСlient * 0.15).toFixed(2);
			},

			set() {
				this.calcField["taxation"].valueField = +(this.paidСlient * 0.15).toFixed(2);
			},
		},

		paymentSales: {
			get() {
				return +(this.paidСlient * 0.1).toFixed(2);
			},

			set() {
				this.calcField["payment-sales"].valueField = +(this.paidСlient * 0.15).toFixed(2);
			},
		},

		office: {
			get() {
				if (this.objuser.type === "inside") {
					return +((this.$root.$data.itemProject.globalParam.office[this.objuser.office].price / this.$root.$data.itemProject.globalParam.office[this.objuser.office].people / 22) * this.workingDays).toFixed(2);
				}

				if (this.objuser.type === "outside") {
					return 0;
				}
			},

			set() {
				if (this.objuser.type === "inside") {
					this.calcField["office"].valueField = +((this.$root.$data.itemProject.globalParam.office[this.objuser.office].price / this.$root.$data.itemProject.globalParam.office[this.objuser.office].people / 22) * this.workingDays).toFixed(2);
				}

				if (this.objuser.type === "outside") {
					this.calcField["office"].valueField = 0;
				}
			},
		},

		allCosts: {
			get() {
				return +(this.wages + this.taxation + this.paymentSales + this.office).toFixed(2);
			},

			set() {
				this.calcField["all-costs"].valueField = +(this.wages + this.taxation + this.paymentSales + this.office).toFixed(2);
			},
		},

		profit: {
			get() {
				return +(this.paidСlient - this.allCosts).toFixed(2);
			},

			set() {
				this.resultField["profit"].valueField = +(this.paidСlient - this.allCosts).toFixed(2);
			},
		},

		managerSalary: {
			get() {
				return +(this.profit * 0.1).toFixed(2);
			},

			set() {
				this.resultField["manager-salary"].valueField = +(this.profit * 0.1).toFixed(2);
			},
		},

		resultProfit: {
			get() {
				return +(this.profit - this.managerSalary).toFixed(2);
			},

			set() {
				this.resultField["result-profit"].valueField = +(this.profit - this.managerSalary).toFixed(2);
			},
		},

		profitability: {
			get() {
				return +((this.profit * 100) / this.paidСlient).toFixed(0);
			},

			set() {
				this.resultField["profitability"].valueField = +((this.profit * 100) / this.paidСlient).toFixed(0);
			},
		},

		calcValue: {
			get() {
				return {
					"working-days": this.workingDays,
					"paid-client": this.paidСlient,
					"shipment-external": this.shipmentExternal,
					difference: this.difference,
					wages: this.wages,
					taxation: this.taxation,
					office: this.office,
					"payment-sales": this.paymentSales,
					"all-costs": this.allCosts,
					profit: this.profit,
					"manager-salary": this.managerSalary,
					"result-profit": this.resultProfit,
					profitability: this.profitability,
				};
			},
		},
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
	},

	template: `
        <div class="user-stage__item">
            <div class="user-stage__row">
                <div class="user-stage__column">
                    <div class="user-stage__info info-user-stage">
                        <div class="info-user-stage__group-name">
                            <div class="info-user-stage__name-number">{{ objuser.sortPositionUser + 1 }}</div>
                            <div class="info-user-stage__name-value">
                                <input type="text" :value="objuser.userName" v-on:change="changeUserName">
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

							<template v-for="(item, name, i) in calcField" :key="i">
								<div class="field-calc calc-user-stage__item" :class="[item.green? '--green' : '' ]">
									<div class="field-calc__name">
										<span>{{ item.nameField }}</span>
						
										<div class="field-calc__hint hint" v-if="item.hintField">
											<div class="hint__icon">?</div>
											<div class="hint__popup">{{ item.hintField }}</div>
										</div>
									</div>
									<div class="field-calc__wrap-value" :class="[item.isTrueEdits? '--edits' : '' ]">
										<div v-if="!item.isTrueEdits" class="field-calc__value">{{ calcValue[name] }}</div>
										<input v-if="item.isTrueEdits" class="field-calc__value --input" type="text" :value="calcValue[name]" v-on:change="editsField($event, {nameField: name})">
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

							<template v-for="(item, name, i) in resultField" :key="i">
								<div class="field-calc calc-user-stage__item-result">
									<div class="field-calc__name">
										<span>{{ item.nameField }}</span>
						
										<div class="field-calc__hint hint" v-if="item.hintField">
											<div class="hint__icon">?</div>
											<div class="hint__popup">{{ item.hintField }}</div>
										</div>
									</div>
									<div class="field-calc__wrap-value">
										<div class="field-calc__value">{{ calcValue[name] }}</div>
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

	emits: ["eventChangeField", "eventChangeUserName", "eventMoveStage", "eventDeleteStage", "eventChangeNamgeStage", "eventAddUser", "eventDeleteUser"],

	data() {
		return {
			isEdits: false,
		};
	},

	methods: {
		editsStage() {
			this.isEdits = !this.isEdits;

			if (this.isEdits === false) {
				console.log(this);
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

                            <comp-user v-for="(item, name, index) in objconfig.arrUserStage" v-on:eventDeleteUser="deleteUser" v-on:eventChangeUserName="changeUserName" v-on:eventChangeField="editsField" :objuser="item" :isedits="isEdits"></comp-user>

                        </div>

                        <div class="user-stage__add-user add-user">
                            <div class="add-user__list">
                                <div class="add-user__item" v-on:click="$emit('eventAddUser', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, postUser: 'inside'})">+ ДОБАВИТЬ INSIDE СОТРУДНИКА</div>
                                <div class="add-user__item" v-on:click="$emit('eventAddUser', { stageId: objconfig.stageId, sortPositionStage: objconfig.sortPositionStage, postUser: 'outside'})">+ ДОБАВИТЬ OUTSIDE ИСПОЛНИТЕЛЯ</div>
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
			itemProject: {
				globalParam: {
					infoFild: {
						"name-project": {
							nameField: "Название проекта",
							valueField: "111",
						},

						"agreed-expenses": {
							nameField: "Согласованные расходы, руб",
							valueField: 111,
							hintField: "Расходы, которые компания отдала за покупку лида, % другому агенству или партнеру",
						},

						"link-b24": {
							nameField: "Ссылка на группу в б24",
							valueField: "111",
							linkField: true,
						},

						"link-deal-b24": {
							nameField: "Ссылка на сделку в б24",
							valueField: "111",
							linkField: true,
						},

						"date-delivery": {
							nameField: "Дата сдачи",
							valueField: 111,
						},

						"percent-sales": {
							nameField: "% сейлзу",
							valueField: 111,
						},
					},

					office: {
						officeBrynsk: {
							price: 115000,
							people: 15,
						},

						officeMsk: {
							price: 112000,
							people: 4,
						},
					},
				},

				stageParam: {
					0: {
						stageId: "1",

						sortPositionStage: 0,

						nameStage: "Прототипирование",

						isActive: true,

						arrUserStage: {
							0: {
								idUser: "1",

								userName: "Менеджер",

								sortPositionUser: 0,

								type: "inside",

								office: "officeMsk",

								infoFild: {
									"hours-laid": {
										nameField: "Часов заложено",
										valueField: 103,
										hintField: "Количество заложенных на задачу часов",
										visibility: true,
										isTrueEdits: true,
									},

									"link-b24": {
										nameField: "Ссылка на задачу в б24",
										valueField: "111",
										visibility: true,
										isTrueEdits: true,
									},

									"fact-clock": {
										nameField: "Факт часов",
										valueField: 103,
										hintField: "Кол-во рабочих часов, по факту затраченных",
										visibility: true,
										isTrueEdits: true,
									},

									"external-bid": {
										nameField: "Ставка (внеш), руб",
										valueField: 1800,
										visibility: true,
										isTrueEdits: true,
									},

									wages: {
										nameField: "Заработная плата",
										valueField: 70000,
										visibility: false,
										isTrueEdits: false,
									},
								},
							},

							1: {
								idUser: "2",

								userName: "Менеджер2",

								sortPositionUser: 1,

								type: "outside",

								infoFild: {
									"hours-laid": {
										nameField: "Часов заложено",
										valueField: 112,
										hintField: "Количество заложенных на задачу часов",
										visibility: true,
										isTrueEdits: true,
									},

									"link-b24": {
										nameField: "Ссылка на задачу в б24",
										valueField: 111,
										visibility: true,
										isTrueEdits: true,
									},

									"fact-clock": {
										nameField: "Факт часов",
										valueField: 80.5,
										hintField: "Кол-во рабочих часов, по факту затраченных",
										visibility: true,
										isTrueEdits: true,
									},

									"external-bid": {
										nameField: "Ставка (внеш), руб",
										valueField: 1800,
										visibility: true,
										isTrueEdits: true,
									},

									wages: {
										nameField: "Заработная плата",
										valueField: 70000,
										visibility: false,
										isTrueEdits: false,
									},
								},
							},
						},
					},

					1: {
						stageId: "2",

						sortPositionStage: 1,

						nameStage: "123123123",

						isActive: false,

						arrUserStage: {
							0: {
								idUser: "1",

								userName: "Менеджер",

								sortPositionUser: 0,

								type: "outside",

								infoFild: {
									"hours-laid": {
										nameField: "Часов заложено",
										valueField: 112,
										hintField: "Количество заложенных на задачу часов",
										visibility: true,
										isTrueEdits: true,
									},

									"link-b24": {
										nameField: "Ссылка на задачу в б24",
										valueField: 111,
										visibility: true,
										isTrueEdits: true,
									},

									"fact-clock": {
										nameField: "Факт часов",
										valueField: 80.5,
										hintField: "Кол-во рабочих часов, по факту затраченных",
										visibility: true,
										isTrueEdits: true,
									},

									"external-bid": {
										nameField: "Ставка (внеш), руб",
										valueField: 1800,
										visibility: true,
										isTrueEdits: true,
									},

									wages: {
										nameField: "Заработная плата",
										valueField: 70000,
										visibility: false,
										isTrueEdits: false,
									},
								},
							},

							1: {
								idUser: "2",

								userName: "Менеджер2",

								sortPositionUser: 1,

								type: "inside",

								office: "officeMsk",

								infoFild: {
									"hours-laid": {
										nameField: "Часов заложено",
										valueField: 112,
										hintField: "Количество заложенных на задачу часов",
										visibility: true,
										isTrueEdits: true,
									},

									"link-b24": {
										nameField: "Ссылка на задачу в б24",
										valueField: 111,
										visibility: true,
										isTrueEdits: true,
									},

									"fact-clock": {
										nameField: "Факт часов",
										valueField: 80.5,
										hintField: "Кол-во рабочих часов, по факту затраченных",
										visibility: true,
										isTrueEdits: true,
									},

									"external-bid": {
										nameField: "Ставка (внеш), руб",
										valueField: 1800,
										visibility: true,
										isTrueEdits: true,
									},

									wages: {
										nameField: "Заработная плата",
										valueField: 70000,
										visibility: false,
										isTrueEdits: false,
									},
								},
							},
						},
					},
				},

				managerList: {
					0: {
						idManager: "1",
						isActive: true,
						nameManager: "Менеджер 1",
						sortPositionManager: 0,
					},

					1: {
						idManager: "2",
						isActive: false,
						nameManager: "Менеджер 2",
						sortPositionManager: 1,
					},

					2: {
						idManager: "3",
						isActive: false,
						nameManager: "Менеджер 3",
						sortPositionManager: 2,
					},

					3: {
						idManager: "4",
						isActive: false,
						nameManager: "Менеджер 4",
						sortPositionManager: 3,
					},

					4: {
						idManager: "5",
						isActive: false,
						nameManager: "Менеджер 5",
						sortPositionManager: 4,
					},
				},
			},
		};
	},

	methods: {
		editsFieldGlobal(advice) {
			for (let key in advice) {
				this.itemProject.globalParam.infoFild[key].valueField = advice[key].valueField;
			}
		},

		editsFieldStage(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser]["infoFild"][advice.nameField].valueField = advice.valueField;
			console.log(this.itemProject);
		},

		changeUserParam(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[advice.sortPositionUser].userName = advice.userName;
			console.log(this.itemProject);
		},

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

			console.log(this.itemProject);
		},

		changeNameStage(advice) {
			this.itemProject.stageParam[advice.sortPositionStage].nameStage = advice.nameStage;
		},

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

			console.log(this.itemProject);
		},

		changeDeleteStage(advice) {
			let index = 0;

			for (let key in this.itemProject.stageParam) {
				if (advice.sortPositionStage <= parseInt(key) && this.itemProject.stageParam[parseInt(key) + 1] !== undefined) {
					this.itemProject.stageParam[parseInt(key) + 1].sortPositionStage = index;

					this.itemProject.stageParam[key] = this.itemProject.stageParam[parseInt(key) + 1];
				}

				if (Object.keys(this.itemProject.stageParam).length - 1 == parseInt(key)) {
					delete this.itemProject.stageParam[key];
				}

				index++;
			}

			console.log(this.itemProject);
		},

		addUser(advice) {
			let sortPositionUser = Object.keys(this.itemProject.stageParam[advice.sortPositionStage].arrUserStage).length;

			this.itemProject.stageParam[advice.sortPositionStage].arrUserStage[sortPositionUser] = {
				idUser: `${new Date().getTime()}`,

				sortPositionUser: sortPositionUser,

				userName: "",

				type: advice.postUser,

				office: "officeMsk",

				infoFild: {
					"hours-laid": {
						nameField: "Часов заложено",
						valueField: "",
						hintField: "Количество заложенных на задачу часов",
						visibility: true,
					},

					"link-b24": {
						nameField: "Ссылка на задачу в б24",
						valueField: "",
						visibility: true,
					},

					"fact-clock": {
						nameField: "Факт часов",
						valueField: "",
						hintField: "Кол-во рабочих часов, по факту затраченных",
						visibility: true,
					},

					"external-bid": {
						nameField: "Ставка (внеш), руб",
						valueField: "",
						visibility: true,
					},

					wages: {
						nameField: "Заработная плата",
						valueField: "",
						visibility: false,
					},
				},
			};

			console.log(this.itemProject);
		},

		addStage() {
			let sortPositionStage = Object.keys(this.itemProject.stageParam).length;

			this.itemProject.stageParam[sortPositionStage] = {
				stageId: `${new Date().getTime()}`,

				sortPositionStage: sortPositionStage,

				nameStage: "Новый этап",

				isActive: false,

				arrUserStage: {},
			};

			console.log(this.itemProject.stageParam);
		},

		changeActiveStage(advice) {
			for (key in this.itemProject.stageParam) {
				if (this.itemProject.stageParam[key].stageId === advice.stageId) {
					this.itemProject.stageParam[key].isActive = true;
				} else {
					this.itemProject.stageParam[key].isActive = false;
				}
			}

			console.log(this.itemProject);
		},

		changeActiveManager(advice) {
			for (key in this.itemProject.managerList) {
				if (this.itemProject.managerList[key].idManager === advice.idManager) {
					this.itemProject.managerList[key].isActive = true;
				} else {
					this.itemProject.managerList[key].isActive = false;
				}
			}

			console.log(this.itemProject);
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
