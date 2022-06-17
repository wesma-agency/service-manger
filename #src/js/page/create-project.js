const filedInfo = {
    props: {
        elclass: String,
        isedits: Boolean,
        objfield: Object,
        objname: String
    },

    emits: ["edits"],

    data() {
        return {
            newValue: {
                
            },
        }
    },

    methods: {
        editsFieldInfo(event) {
            return {
                nameObj: this.objname,
                newVal: event.target.value
            };
        }
    },

    template: `
        <div class="field-item" :class="[objfield.linkField? '--link': '', isedits? '--isEdits': '', elclass ]">
            <div class="field-item__group-name">
                <div class="field-item__name">{{ objfield.nameField }}</div>

                <div class="field-item__hint hint" v-if="objfield.hintField">
                    <div class="hint__icon">?</div>
                    <div class="hint__popup">{{ objfield.hintField }}</div>
                </div>
            </div>
            <div class="field-item__wrap-text">
                <div v-if="!isedits" class="field-item__text">{{ objfield.valueField }}</div>
                <input v-if="isedits" class="field-item__text" type="text" :value="objfield.valueField" v-on:change="$emit('edits', editsFieldInfo($event))">
            </div>
        </div>
    `
}

const filedCalc = {
    props: {
        elclass: String,
        isedits: Boolean,
        objfield: Object,
        objname: String
    },

    emits: ["edits"],

    data() {
        return {
            newValue: {
                
            },
        }
    },

    methods: {
        editsFieldInfo(event) {
            console.log(this.objfield);

            return {
                nameObj: this.objname,
                newVal: event.target.value
            };
        }
    },

    template: `
        <div class="field-calc" :class="[isedits? '--isEdits': '', objfield.isTrueEdits? '--green' : '', elclass ]">
            <div class="field-calc__name">
                <span>{{ objfield.nameField }}</span>

                <div class="field-calc__hint hint" v-if="objfield.hintField">
                    <div class="hint__icon">?</div>
                    <div class="hint__popup">{{ objfield.hintField }}</div>
                </div>
            </div>
            <div class="field-calc__wrap-value">
                <div v-if="!isedits" class="field-calc__value">{{ objfield.valueField }}</div>
                <input v-if="isedits" class="field-calc__value" type="text" :value="objfield.valueField" v-on:change="$emit('edits', editsFieldInfo($event))">
            </div>
        </div>
    `
}

const globalParam = {
    props: {
        objfield: Object
    },

    emits: ['changeGlobalParam'],

    data() {
        return {
            isEdits: false,
            newValue: {},
        }
    },

    methods: {
        editsField(advice) {
            this.newValue[advice.nameObj] = advice.newVal;
        },

        handlerEdits(save) {
            this.isEdits = !this.isEdits;

            if (save === true) {
                this.$emit("changeGlobalParam", this.newValue);
            } else {
                for (let key in this.newValue) {
                      delete this.newValue[key];
                }
            }
        }
    },

    components: {
        "comp-field-info": filedInfo
    },
 
    template: `
        <div class="global-param__card card-global">
            <div class="card-global__title title-h3">Глобальные параметры</div>

            <div class="card-global__list">

            <comp-field-info v-for="(el, name, i) in objfield" v-on:edits="editsField"  :key="i" :isedits="isEdits" :objname="name" :objfield="el" :elclass="'card-global__item field-item'"></comp-field-info>

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
    `
}

const compUser = {
    props: {
        isedits: Boolean,
        objuser: Object,
        objparam: Object
    },

    emits: ["changeUserParam"],

    data() {
        return {
            objParam: this.objparam,

            newValue: {
                userId: this.objuser.id,

                userName: "",

                info: {

                },

                calc: {
                    
                },

                expenses: {

                }
            }
        }
    },

    methods: {
        editsFieldInfo(advice) {
            this.newValue.info[advice.nameObj] = advice.newVal;
            this.$emit("changeUserParam", this.newValue);
        },

        editsFieldCalc(advice) {
            this.newValue.calc[advice.nameObj] = advice.newVal;
            this.$emit("changeUserParam", this.newValue);
        },

        editsFieldExpenses(advice) {
            this.newValue.expenses[advice.nameObj] = advice.newVal;
            this.$emit("changeUserParam", this.newValue);
        },

        changeName(e) {
            this.newValue.userName = e.target.value;
            this.$emit("changeUserParam", this.newValue);
        }
    },

    components: {
        "comp-field-info": filedInfo,
        "comp-field-calc": filedCalc,
    },

    template: `
        <div class="user-stage__item">
            <div class="user-stage__row">
                <div class="user-stage__column">
                    <div class="user-stage__info info-user-stage">
                        <div class="info-user-stage__group-name">
                            <div class="info-user-stage__name-number">{{ objuser.id }}</div>
                            <div class="info-user-stage__name-value">
                                <span v-if="!isedits">{{ objuser.userName }}</span>
                                <input v-if="isedits" type="text" :value="objuser.userName" v-on:change="changeName">
                            </div>
                            <div class="info-user-stage__name-delete"></div>
                        </div>

                        <div class="info-user-stage__list">

                            <comp-field-info v-for="(el, name, i) in objuser.infoFild" v-on:edits="editsFieldInfo"  :key="i" :isedits="true" :objname="name" :objfield="el" :elclass="'info-user-stage__item'"></comp-field-info>

                        </div>

                    </div>
                </div>

                <div class="user-stage__column">
                    <div class="user-stage__calc calc-user-stage">
                        <div class="calc-user-stage__title">Расчеты</div>

                        <div class="calc-user-stage__list">

                            <comp-field-calc v-for="(el, name, i) in objuser.calcField" v-on:edits="editsFieldCalc"  :key="i" :isedits="true" :objname="name" :objfield="el" :elclass="'calc-user-stage__item'"></comp-field-calc>

                        </div>
                    </div>
                </div>

                <div class="user-stage__column">
                    <div class="user-stage__calc calc-user-stage">
                        <div class="calc-user-stage__title">Расходы</div>

                        <div class="calc-user-stage__list">

                            <comp-field-calc v-for="(el, name, i) in objuser.expensesField" v-on:edits="editsFieldExpenses"  :key="i" :isedits="true" :objname="name" :objfield="el" :elclass="'calc-user-stage__item'"></comp-field-calc>

                        </div>
                    </div>
                </div>

                <div class="user-stage__column">
                    <div class="user-stage__calc calc-user-stage">
                        <div class="calc-user-stage__title">Итог</div>

                    </div>
                </div>
            </div>
        </div>
    `
}

const compStage = {
    props: {
        objconfig: Object,
    },

    emits: ["changeUserArr"],

    data() {
        return {
            isEdits: false,
            stageOgj: {
                nameStage: "",

                arrUserStage: {

                }
            }
        }
    },

    methods: {
        upStage() {
            console.log("up");
        },

        downStage() {
            console.log("down");
        },

        editsStage() {
            this.isEdits = !this.isEdits;

            if (this.isEdits === false) {
                this.$emit("changeUserArr", this.userObj);
            }
        },

        deleteStage() {
            console.log("delete");
        },

        addInsideUser() {

        },

        addOutUser() {

        },

        changeParam(advice) {
            this.stageOgj.arrUserStage[advice.userId] = advice;
            console.log(this.stageOgj);
        }
    },

    components: {
        "comp-user": compUser
    },

    template: `
        <div class="create-project__stage card-stage">
            <div class="card-stage__group-title">
                <div class="card-stage__title title-h3">{{ objconfig.nameStage }}</div>
                <div class="card-stage__option">
                    <div class="card-stage__option-item icon-global --up" v-on:click="upStage"></div>
                    <div class="card-stage__option-item icon-global --down" v-on:click="downStage"></div>
                    <div class="card-stage__option-item icon-global --edits" v-on:click="editsStage"></div>
                    <div class="card-stage__option-item icon-global --delete" v-on:click="deleteStage"></div>
                </div>
            </div>

            <div class="card-stage__wrap">
                <div class="card-stage__subtitle title-h4">Участники</div>

                <div class="card-stage__user-list">
                    <div class="card-stage__user-item user-stage">

                        <div class="user-stage__list">

                            <comp-user v-for="(item, name, index) in objconfig.arrUserStage" v-on:change-user-param="changeParam" :objuser="item" :isedits="isEdits" :objparam="{idStage: objconfig.stageId}"></comp-user>

                        </div>

                        <div class="user-stage__add-user add-user">
                            <div class="add-user__list">
                                <div class="add-user__item" v-on:click="addInsideUser">+ ДОБАВИТЬ INSIDE СОТРУДНИКА</div>
                                <div class="add-user__item" v-on:click="addOutUser">+ ДОБАВИТЬ OUTSIDE ИСПОЛНИТЕЛЯ</div>
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
    `
}

const project = Vue.createApp({
    data() {
        return {
            itemProject: {
                globalParam: {
                    name1: {
                        nameField: "Название проекта",
                        valueField: "111",
                    },

                    name2: {
                        nameField: "Согласованные расходы, руб",
                        valueField: "111",
                        hintField: "Расходы, которые компания отдала за покупку лида, % другому агенству или партнеру"
                    },

                    name3: {
                        nameField: "Ссылка на группу в б24",
                        valueField: "111",
                        linkField: true
                    },

                    name4: {
                        nameField: "Ссылка на сделку в б24",
                        valueField: "111",
                        linkField: true
                    },

                    name5: {
                        nameField: "Дата сдачи",
                        valueField: "111",
                    },

                    name6: {
                        nameField: "% сейлзу",
                        valueField: "111",
                    },
                },

                stageParam: {
                    "1": {
                        stageId: "1",

                        nameStage: "Прототипирование",

                        arrUserStage: {
                           "1": {
                                id: "1",

                                userName: "Менеджер",
        
                                infoFild: {
                                    "hours-laid": {
                                        nameField: "Часов заложено",
                                        valueField: "112",
                                        hintField: "13123"
                                    },
            
                                    "link-b24": {
                                        nameField: "Ссылка на задачу в б24",
                                        valueField: "111",
                                    },
            
                                    "fact-clock": {
                                        nameField: "Факт часов",
                                        valueField: "80.5",
                                        hintField: "13123"
                                    },
            
                                    "external-bid": {
                                        nameField: "Ставка (внеш), руб",
                                        valueField: "1800",
                                    },
                                },
        
                                calcField: {
                                    "working-days": {
                                        nameField: "Рабочих дней",
                                        valueField: "14,71428571",
                                        hintField: "13123"
                                    },
        
                                    "paid-client": {
                                        nameField: "Оплачено клиентом",
                                        valueField: "185 400",
                                        hintField: "13123",
                                    },
        
                                    "shipment-external": {
                                        nameField: "Отгрузка (внешняя)",
                                        valueField: "140 230",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "difference": {
                                        nameField: "Разница опл\отгруж",
                                        valueField: "45170",
                                        isTrueEdits: true
                                    },
                                },
        
                                expensesField: {
                                   "expenses": {
                                        nameField: "Затраты",
                                        valueField: "46 818",
                                        hintField: "13123"
                                    },
        
                                   "taxation": {
                                        nameField: "Налог",
                                        valueField: "27 810",
                                        hintField: "13123"
                                    },
        
                                    "office": {
                                        nameField: "Офис",
                                        valueField: "18727,27273",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "payment-sales": {
                                        nameField: "Выплата сейлзу",
                                        valueField: "18 540",
                                        isTrueEdits: true
                                    },
        
                                    "all-costs": {
                                        nameField: "Всех затрат",
                                        valueField: "111 895",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
                                }
                            },

                            "2": {
                                id: "2",

                                userName: "Менеджер2",
        
                                infoFild: {
                                    "hours-laid": {
                                        nameField: "Часов заложено",
                                        valueField: "112",
                                        hintField: "13123"
                                    },
            
                                    "link-b24": {
                                        nameField: "Ссылка на задачу в б24",
                                        valueField: "111",
                                    },
            
                                    "fact-clock": {
                                        nameField: "Факт часов",
                                        valueField: "80.5",
                                        hintField: "13123"
                                    },
            
                                    "external-bid": {
                                        nameField: "Ставка (внеш), руб",
                                        valueField: "1800",
                                    },
                                },
        
                                calcField: {
                                    "working-days": {
                                        nameField: "Рабочих дней",
                                        valueField: "14,71428571",
                                        hintField: "13123"
                                    },
        
                                    "paid-client": {
                                        nameField: "Оплачено клиентом",
                                        valueField: "185 400",
                                        hintField: "13123",
                                    },
        
                                    "shipment-external": {
                                        nameField: "Отгрузка (внешняя)",
                                        valueField: "140 230",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "difference": {
                                        nameField: "Разница опл\отгруж",
                                        valueField: "45170",
                                        isTrueEdits: true
                                    },
                                },
        
                                expensesField: {
                                   "expenses": {
                                        nameField: "Затраты",
                                        valueField: "46 818",
                                        hintField: "13123"
                                    },
        
                                   "taxation": {
                                        nameField: "Налог",
                                        valueField: "27 810",
                                        hintField: "13123"
                                    },
        
                                    "office": {
                                        nameField: "Офис",
                                        valueField: "18727,27273",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "payment-sales": {
                                        nameField: "Выплата сейлзу",
                                        valueField: "18 540",
                                        isTrueEdits: true
                                    },
        
                                    "all-costs": {
                                        nameField: "Всех затрат",
                                        valueField: "111 895",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
                                }
                            },
                        }
                    },

                    "2": {
                        stageId: "2",

                        nameStage: "123123123",

                        arrUserStage: {
                           "1": {
                                id: "1",

                                userName: "Менеджер",
        
                                infoFild: {
                                    "hours-laid": {
                                        nameField: "Часов заложено",
                                        valueField: "112",
                                        hintField: "13123"
                                    },
            
                                    "link-b24": {
                                        nameField: "Ссылка на задачу в б24",
                                        valueField: "111",
                                    },
            
                                    "fact-clock": {
                                        nameField: "Факт часов",
                                        valueField: "80.5",
                                        hintField: "13123"
                                    },
            
                                    "external-bid": {
                                        nameField: "Ставка (внеш), руб",
                                        valueField: "1800",
                                    },
                                },
        
                                calcField: {
                                    "working-days": {
                                        nameField: "Рабочих дней",
                                        valueField: "14,71428571",
                                        hintField: "13123"
                                    },
        
                                    "paid-client": {
                                        nameField: "Оплачено клиентом",
                                        valueField: "185 400",
                                        hintField: "13123",
                                    },
        
                                    "shipment-external": {
                                        nameField: "Отгрузка (внешняя)",
                                        valueField: "140 230",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "difference": {
                                        nameField: "Разница опл\отгруж",
                                        valueField: "45170",
                                        isTrueEdits: true
                                    },
                                },
        
                                expensesField: {
                                   "expenses": {
                                        nameField: "Затраты",
                                        valueField: "46 818",
                                        hintField: "13123"
                                    },
        
                                   "taxation": {
                                        nameField: "Налог",
                                        valueField: "27 810",
                                        hintField: "13123"
                                    },
        
                                    "office": {
                                        nameField: "Офис",
                                        valueField: "18727,27273",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "payment-sales": {
                                        nameField: "Выплата сейлзу",
                                        valueField: "18 540",
                                        isTrueEdits: true
                                    },
        
                                    "all-costs": {
                                        nameField: "Всех затрат",
                                        valueField: "111 895",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
                                }
                            },

                            "2": {
                                id: "2",

                                userName: "Менеджер2",
        
                                infoFild: {
                                    "hours-laid": {
                                        nameField: "Часов заложено",
                                        valueField: "112",
                                        hintField: "13123"
                                    },
            
                                    "link-b24": {
                                        nameField: "Ссылка на задачу в б24",
                                        valueField: "111",
                                    },
            
                                    "fact-clock": {
                                        nameField: "Факт часов",
                                        valueField: "80.5",
                                        hintField: "13123"
                                    },
            
                                    "external-bid": {
                                        nameField: "Ставка (внеш), руб",
                                        valueField: "1800",
                                    },
                                },
        
                                calcField: {
                                    "working-days": {
                                        nameField: "Рабочих дней",
                                        valueField: "14,71428571",
                                        hintField: "13123"
                                    },
        
                                    "paid-client": {
                                        nameField: "Оплачено клиентом",
                                        valueField: "185 400",
                                        hintField: "13123",
                                    },
        
                                    "shipment-external": {
                                        nameField: "Отгрузка (внешняя)",
                                        valueField: "140 230",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "difference": {
                                        nameField: "Разница опл\отгруж",
                                        valueField: "45170",
                                        isTrueEdits: true
                                    },
                                },
        
                                expensesField: {
                                   "expenses": {
                                        nameField: "Затраты",
                                        valueField: "46 818",
                                        hintField: "13123"
                                    },
        
                                   "taxation": {
                                        nameField: "Налог",
                                        valueField: "27 810",
                                        hintField: "13123"
                                    },
        
                                    "office": {
                                        nameField: "Офис",
                                        valueField: "18727,27273",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
        
                                    "payment-sales": {
                                        nameField: "Выплата сейлзу",
                                        valueField: "18 540",
                                        isTrueEdits: true
                                    },
        
                                    "all-costs": {
                                        nameField: "Всех затрат",
                                        valueField: "111 895",
                                        hintField: "13123",
                                        isTrueEdits: true
                                    },
                                }
                            },
                        }
                    }
                }
            }
        }
    },

    methods: {
        handlerGlobParam(advice) {
            for (let key in advice) {
                this.itemProject.globalParam[key].valueField = advice[key];
            }
        },

        handlerUserParam(advice) {
            console.log(advice);
        }
    },

    components: {
        "comp-global-param": globalParam,
        "comp-stage": compStage
    }
});



project.mount(".create-project");