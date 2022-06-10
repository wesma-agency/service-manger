const globalParam = {
    props: {
        objfield: Object
    },

    data() {
        return {
            isEdits: false,
            dataField: this.objfield
        }
    },
 
    template: `
        <div class="global-param__card card-global">
            <div class="card-global__title title-h3">Глобальные параметры</div>

            <div class="card-global__list">

                <div v-for="(item, index) in dataField" :key="index" class="card-global__item field-item" :class="{ '--link': item.linkField }">
                    <div class="field-item__group-name">
                        <div class="field-item__name">{{ item.nameField }}</div>

                        <div class="field-item__hint hint" v-if="item.hintField">
                            <div class="hint__icon">?</div>
                            <div class="hint__popup">{{ item.hintField }}</div>
                        </div>
                    </div>

                    <div class="field-item__text">{{ item.valueField }}</div>
                </div>

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
                <div class="card-global__btn main-btn" v-if="!isEdits" v-on:click="isEdits = !isEdits">Редактирвоать</div>

                <div class="card-global__btn main-btn" v-if="isEdits">Применить</div>
                <div class="card-global__btn main-btn --gray" v-if="isEdits">Отменить</div>
            </div>
        </div>
    `
}

const project = Vue.createApp({
    data() {
        return {
            itemProject: {
                globalParam: [
                    {
                        nameField: "Название проекта",
                        valueField: "111",
                    },

                    {
                        nameField: "Согласованные расходы, руб",
                        valueField: "111",
                        hintField: "Расходы, которые компания отдала за покупку лида, % другому агенству или партнеру"
                    },

                    {
                        nameField: "Ссылка на группу в б24",
                        valueField: "111",
                        linkField: true
                    },

                    {
                        nameField: "Ссылка на сделку в б24",
                        valueField: "111",
                        linkField: true
                    },

                    {
                        nameField: "Дата сдачи",
                        valueField: "111",
                    },

                    {
                        nameField: "% сейлзу",
                        valueField: "111",
                    },
                ],

                stageParam: [
                    {
                        nameStage: "Прототипирование",

                        arrUserStage: [
                            {
                                userName: "Менеджер",
        
                                infoFild: [
                                    {
                                        nameField: "Часов заложено",
                                        valueField: "112",
                                        hintField: "13123"
                                    },
            
                                    {
                                        nameField: "Ссылка на задачу в б24",
                                        valueField: "111",
                                        linkField: true
                                    },
            
                                    {
                                        nameField: "Факт часов",
                                        valueField: "80.5",
                                        hintField: "13123"
                                    },
            
                                    {
                                        nameField: "Ставка (внеш), руб",
                                        valueField: "1800",
                                    },
                                ],
        
                                calcField: [
                                    {
                                        nameField: "Рабочих дней",
                                        valueField: "14,71428571",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Оплачено клиентом",
                                        valueField: "185 400",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Отгрузка (внешняя)",
                                        valueField: "140 230",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Разница опл\отгруж",
                                        valueField: "45170",
                                    },
                                ],
        
                                expensesField: [
                                    {
                                        nameField: "Затраты",
                                        valueField: "46 818",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Налог",
                                        valueField: "27 810",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Офис",
                                        valueField: "18727,27273",
                                        hintField: "13123"
                                    },
        
                                    {
                                        nameField: "Выплата сейлзу",
                                        valueField: "18 540",
                                    },
        
                                    {
                                        nameField: "Всех затрат",
                                        valueField: "111 895",
                                        hintField: "13123"
                                    },
                                ]
                            },
                        ]
                    }
                ]
            }
        }
    },

    methods: {

    },

    components: {
        "comp-global-param": globalParam
    }
});



project.mount(".create-project");