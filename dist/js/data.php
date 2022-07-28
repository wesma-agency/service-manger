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
