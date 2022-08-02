const compProject = {
	props: {
		objpram: Object,
	},

	emits: ["eventProjectEnable", "eventProjectDelete", "eventProjectEnd", "eventProjectCopy", "eventProjectRefer"],

	data() {
		return {};
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
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
					arrEl.forEach((el) => el.classList.remove("show"));
				}
			}
		},

		projectEnd() {
			this.$emit("eventProjectEnd", { sortPosition: this.objpram.sortPosition });
		},

		projectCopy() {
			this.$emit("eventProjectCopy", { sortPosition: this.objpram.sortPosition });
		},

		projectRefer() {
			this.$emit("eventProjectRefer", { sortPosition: this.objpram.sortPosition });
		},

		projectDelete() {
			this.$emit("eventProjectDelete", { sortPosition: this.objpram.sortPosition });
		},

		projectEnable() {
			this.$emit("eventProjectEnable", { sortPosition: this.objpram.sortPosition });
		},
	},

	template: `
        <div class="all-projects__item card-projects" :class="{ disabled: !objpram.isActive }">
            <div class="card-projects__row">
                <div class="card-projects__column">
                    <a href="#" class="card-projects__name">{{ objpram.nameProject }}</a>
                    <div class="card-projects__date">Дата сдачи: <span>15.05.2022</span></div>
                </div>

                <div class="card-projects__column">
                    <a :href="objpram.linkB24" class="card-projects__btn btn-white">Группа в б24</a>
                    <a :href="objpram.linkDeal" class="card-projects__btn btn-white">Сделка</a>
                </div>

                <div class="card-projects__column">
                    <div class="card-projects__option">
                        <div class="card-projects__option-name">Рентабельность общая:</div>
                        <div class="card-projects__option-value"><span class="--green">{{ objpram.fildProject.profitability }}%</span></div>
                    </div>

                    <div class="card-projects__option">
                        <div class="card-projects__option-name">Рентабельность этапа:</div>
                        <div class="card-projects__option-value"><span class="--green">{{ objpram.fildProject.profitabilityStage }}%</span></div>
                    </div>
                </div>

                <div class="card-projects__column">
                    <div class="card-projects__option">
                        <div class="card-projects__option-name">Этап:</div>
                        <div class="card-projects__option-value">{{ objpram.fildProject.nameStage }}</div>
                    </div>

                    <div class="card-projects__option">
                        <div class="card-projects__option-name">План / факт этапа:</div>
                        <div class="card-projects__option-value">{{ objpram.fildProject.hoursLaid }} / <span class="--green">{{ objpram.fildProject.factClock }}</span> ч</div>
                    </div>
                </div>

                <div class="card-projects__column">
                    <div class="card-projects__option">
                        <div class="card-projects__option-name">Бюджет: </div>
                        <div class="card-projects__option-value">1 300 000 руб.</div>
                    </div>

                    <div class="card-projects__option">
                        <div class="card-projects__option-name">Оплачено / затрачено внеш.:</div>
                        <div class="card-projects__option-value">{{objpram.fildProject.paidСlient}} / {{objpram.fildProject.taxation}} руб.</div>
                    </div>
                </div>

                <div class="card-projects__column">
                    <div class="card-projects__enable" v-on:click="projectEnable">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                            version="1.1" width="30px" height="30px">
                            <g transform="matrix(1 0 0 1 -1765 -224 )">
                                <path
                                    d="M 28.427734375 9.96995192307692  C 29.4759114583333 11.9050480769231  30 13.9663461538462  30 16.1538461538462  C 30 18.0288461538462  29.6028645833333 19.8197115384615  28.80859375 21.5264423076923  C 28.0143229166667 23.2331730769231  26.9466145833333 24.7055288461538  25.60546875 25.9435096153846  C 24.2643229166667 27.1814903846154  22.6692708333333 28.1670673076923  20.8203125 28.9002403846154  C 18.9713541666667 29.6334134615385  17.03125 30  15 30  C 12.96875 30  11.0286458333333 29.6334134615385  9.1796875 28.9002403846154  C 7.33072916666667 28.1670673076923  5.73567708333333 27.1814903846154  4.39453125 25.9435096153846  C 3.05338541666667 24.7055288461538  1.98567708333333 23.2331730769231  1.19140625 21.5264423076923  C 0.397135416666667 19.8197115384615  0 18.0288461538462  0 16.1538461538462  C 0 13.9663461538462  0.524088541666667 11.9050480769231  1.572265625 9.96995192307692  C 2.62044270833333 8.03485576923077  4.09505208333333 6.41225961538461  5.99609375 5.10216346153846  C 6.55598958333333 4.71754807692307  7.177734375 4.56730769230769  7.861328125 4.65144230769231  C 8.544921875 4.73557692307692  9.08854166666667 5.03605769230769  9.4921875 5.55288461538462  C 9.90885416666667 6.05769230769231  10.068359375 6.62560096153846  9.970703125 7.25661057692308  C 9.873046875 7.88762019230769  9.55078125 8.39543269230769  9.00390625 8.78004807692308  C 7.72786458333333 9.66947115384615  6.74153645833333 10.7572115384615  6.044921875 12.0432692307692  C 5.34830729166667 13.3293269230769  5 14.6995192307692  5 16.1538461538462  C 5 17.4038461538462  5.263671875 18.5967548076923  5.791015625 19.7325721153846  C 6.318359375 20.8683894230769  7.03125 21.8509615384615  7.9296875 22.6802884615385  C 8.828125 23.5096153846154  9.892578125 24.1676682692308  11.123046875 24.6544471153846  C 12.353515625 25.1412259615385  13.6458333333333 25.3846153846154  15 25.3846153846154  C 16.3541666666667 25.3846153846154  17.646484375 25.1412259615385  18.876953125 24.6544471153846  C 20.107421875 24.1676682692308  21.171875 23.5096153846154  22.0703125 22.6802884615385  C 22.96875 21.8509615384615  23.681640625 20.8683894230769  24.208984375 19.7325721153846  C 24.736328125 18.5967548076923  25 17.4038461538462  25 16.1538461538462  C 25 14.6995192307692  24.6516927083333 13.3293269230769  23.955078125 12.0432692307692  C 23.2584635416667 10.7572115384615  22.2721354166667 9.66947115384615  20.99609375 8.78004807692308  C 20.44921875 8.39543269230769  20.126953125 7.88762019230769  20.029296875 7.25661057692308  C 19.931640625 6.62560096153846  20.0911458333333 6.05769230769231  20.5078125 5.55288461538462  C 20.9114583333333 5.03605769230769  21.4583333333333 4.73557692307692  22.1484375 4.65144230769231  C 22.8385416666667 4.56730769230769  23.45703125 4.71754807692307  24.00390625 5.10216346153846  C 25.9049479166667 6.41225961538461  27.3795572916667 8.03485576923077  28.427734375 9.96995192307692  Z M 16.7578125 0.685096153846153  C 17.2526041666667 1.14182692307692  17.5 1.68269230769231  17 2.30769230769231  L 17 13.8461538461538  C 17.5 14.4711538461538  17.2526041666667 15.0120192307692  16.7578125 15.46875  C 16.2630208333333 15.9254807692308  15.6770833333333 16.1538461538462  15 16.1538461538462  C 14.3229166666667 16.1538461538462  13.7369791666667 15.9254807692308  13.2421875 15.46875  C 12.7473958333333 15.0120192307692  12.5 14.4711538461538  13 13.8461538461538  L 13 2.30769230769231  C 12.5 1.68269230769231  12.7473958333333 1.14182692307692  13.2421875 0.685096153846153  C 13.7369791666667 0.228365384615385  14.3229166666667 0  15 0  C 15.6770833333333 0  16.2630208333333 0.228365384615385  16.7578125 0.685096153846153  Z "
                                    fill-rule="nonzero" fill="#51af92" stroke="none"
                                    transform="matrix(1 0 0 1 1765 224 )" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="card-projects__setting setting">
                <div class="setting__icon" v-on:click="toggleSetting">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        version="1.1" width="15px" height="15px">
                        <defs>
                            <mask fill="white" id="clip46">
                                <path
                                    d="M 9.267578125 9.267578125  C 9.755859375 8.779296875  10 8.19010416666667  10 7.5  C 10 6.80989583333333  9.755859375 6.220703125  9.267578125 5.732421875  C 8.779296875 5.244140625  8.19010416666667 5  7.5 5  C 6.80989583333333 5  6.220703125 5.244140625  5.732421875 5.732421875  C 5.244140625 6.220703125  5 6.80989583333333  5 7.5  C 5 8.19010416666667  5.244140625 8.779296875  5.732421875 9.267578125  C 6.220703125 9.755859375  6.80989583333333 10  7.5 10  C 8.19010416666667 10  8.779296875 9.755859375  9.267578125 9.267578125  Z M 14.921875 6.2060546875  C 14.9739583333333 6.2744140625  15 6.35091145833333  15 6.435546875  L 15 8.603515625  C 15 8.681640625  14.9739583333333 8.75651041666667  14.921875 8.828125  C 14.8697916666667 8.89973958333333  14.8046875 8.94205729166666  14.7265625 8.955078125  L 12.919921875 9.228515625  C 12.7962239583333 9.580078125  12.6692708333333 9.87630208333333  12.5390625 10.1171875  C 12.7669270833333 10.4427083333333  13.115234375 10.8919270833333  13.583984375 11.46484375  C 13.6490885416667 11.54296875  13.681640625 11.6243489583333  13.681640625 11.708984375  C 13.681640625 11.7936197916667  13.65234375 11.8684895833333  13.59375 11.93359375  C 13.41796875 12.1744791666667  13.095703125 12.5260416666667  12.626953125 12.98828125  C 12.158203125 13.4505208333333  11.8522135416667 13.681640625  11.708984375 13.681640625  C 11.630859375 13.681640625  11.5462239583333 13.65234375  11.455078125 13.59375  L 10.107421875 12.5390625  C 9.82096354166667 12.6888020833333  9.52473958333333 12.8125  9.21875 12.91015625  C 9.11458333333333 13.7955729166667  9.02018229166667 14.4010416666667  8.935546875 14.7265625  C 8.88997395833333 14.9088541666667  8.77278645833333 15  8.583984375 15  L 6.416015625 15  C 6.32486979166667 15  6.2451171875 14.9723307291667  6.1767578125 14.9169921875  C 6.1083984375 14.8616536458333  6.07096354166667 14.7916666666667  6.064453125 14.70703125  L 5.791015625 12.91015625  C 5.47200520833333 12.8059895833333  5.17903645833333 12.685546875  4.912109375 12.548828125  L 3.53515625 13.59375  C 3.47005208333333 13.65234375  3.388671875 13.681640625  3.291015625 13.681640625  C 3.19986979166667 13.681640625  3.11848958333333 13.6458333333333  3.046875 13.57421875  C 2.2265625 12.83203125  1.689453125 12.28515625  1.435546875 11.93359375  C 1.38997395833333 11.8684895833333  1.3671875 11.7936197916667  1.3671875 11.708984375  C 1.3671875 11.630859375  1.39322916666667 11.5559895833333  1.4453125 11.484375  C 1.54296875 11.34765625  1.708984375 11.1311848958333  1.943359375 10.8349609375  C 2.177734375 10.5387369791667  2.353515625 10.3092447916667  2.470703125 10.146484375  C 2.294921875 9.82096354166666  2.16145833333333 9.49869791666666  2.0703125 9.1796875  L 0.283203125 8.916015625  C 0.198567708333333 8.90299479166667  0.130208333333333 8.8623046875  0.078125 8.7939453125  C 0.0260416666666667 8.7255859375  0 8.64908854166666  0 8.564453125  L 0 6.396484375  C 0 6.318359375  0.0260416666666667 6.24348958333333  0.078125 6.171875  C 0.130208333333333 6.10026041666667  0.192057291666667 6.05794270833333  0.263671875 6.044921875  L 2.080078125 5.771484375  C 2.17122395833333 5.47200520833333  2.29817708333333 5.17252604166667  2.4609375 4.873046875  C 2.20052083333333 4.501953125  1.85221354166667 4.052734375  1.416015625 3.525390625  C 1.35091145833333 3.447265625  1.318359375 3.369140625  1.318359375 3.291015625  C 1.318359375 3.22591145833333  1.34765625 3.15104166666666  1.40625 3.06640625  C 1.57552083333333 2.83203125  1.89615885416667 2.48209635416667  2.3681640625 2.0166015625  C 2.84016927083333 1.55110677083333  3.14778645833333 1.318359375  3.291015625 1.318359375  C 3.37565104166667 1.318359375  3.46028645833333 1.35091145833333  3.544921875 1.416015625  L 4.892578125 2.4609375  C 5.17903645833333 2.31119791666667  5.47526041666667 2.1875  5.78125 2.08984375  C 5.88541666666667 1.20442708333333  5.97981770833333 0.598958333333332  6.064453125 0.273437499999999  C 6.11002604166667 0.0911458333333326  6.22721354166667 0  6.416015625 0  L 8.583984375 0  C 8.67513020833333 0  8.7548828125 0.027669270833332  8.8232421875 0.0830078124999994  C 8.8916015625 0.138346354166665  8.92903645833333 0.208333333333333  8.935546875 0.29296875  L 9.208984375 2.08984375  C 9.52799479166667 2.19401041666667  9.82096354166667 2.314453125  10.087890625 2.451171875  L 11.474609375 1.40625  C 11.533203125 1.34765625  11.611328125 1.318359375  11.708984375 1.318359375  C 11.7936197916667 1.318359375  11.875 1.35091145833333  11.953125 1.416015625  C 12.79296875 2.19075520833333  13.330078125 2.744140625  13.564453125 3.076171875  C 13.6100260416667 3.12825520833333  13.6328125 3.19986979166667  13.6328125 3.291015625  C 13.6328125 3.369140625  13.6067708333333 3.44401041666666  13.5546875 3.515625  C 13.45703125 3.65234375  13.291015625 3.86881510416666  13.056640625 4.1650390625  C 12.822265625 4.46126302083333  12.646484375 4.69075520833333  12.529296875 4.853515625  C 12.6985677083333 5.17903645833333  12.83203125 5.498046875  12.9296875 5.810546875  L 14.716796875 6.083984375  C 14.8014322916667 6.09700520833333  14.8697916666667 6.1376953125  14.921875 6.2060546875  Z "
                                    fill-rule="evenodd" />
                            </mask>
                        </defs>
                        <g transform="matrix(1 0 0 1 -26 -539 )">
                            <path
                                d="M 9.267578125 9.267578125  C 9.755859375 8.779296875  10 8.19010416666667  10 7.5  C 10 6.80989583333333  9.755859375 6.220703125  9.267578125 5.732421875  C 8.779296875 5.244140625  8.19010416666667 5  7.5 5  C 6.80989583333333 5  6.220703125 5.244140625  5.732421875 5.732421875  C 5.244140625 6.220703125  5 6.80989583333333  5 7.5  C 5 8.19010416666667  5.244140625 8.779296875  5.732421875 9.267578125  C 6.220703125 9.755859375  6.80989583333333 10  7.5 10  C 8.19010416666667 10  8.779296875 9.755859375  9.267578125 9.267578125  Z M 14.921875 6.2060546875  C 14.9739583333333 6.2744140625  15 6.35091145833333  15 6.435546875  L 15 8.603515625  C 15 8.681640625  14.9739583333333 8.75651041666667  14.921875 8.828125  C 14.8697916666667 8.89973958333333  14.8046875 8.94205729166666  14.7265625 8.955078125  L 12.919921875 9.228515625  C 12.7962239583333 9.580078125  12.6692708333333 9.87630208333333  12.5390625 10.1171875  C 12.7669270833333 10.4427083333333  13.115234375 10.8919270833333  13.583984375 11.46484375  C 13.6490885416667 11.54296875  13.681640625 11.6243489583333  13.681640625 11.708984375  C 13.681640625 11.7936197916667  13.65234375 11.8684895833333  13.59375 11.93359375  C 13.41796875 12.1744791666667  13.095703125 12.5260416666667  12.626953125 12.98828125  C 12.158203125 13.4505208333333  11.8522135416667 13.681640625  11.708984375 13.681640625  C 11.630859375 13.681640625  11.5462239583333 13.65234375  11.455078125 13.59375  L 10.107421875 12.5390625  C 9.82096354166667 12.6888020833333  9.52473958333333 12.8125  9.21875 12.91015625  C 9.11458333333333 13.7955729166667  9.02018229166667 14.4010416666667  8.935546875 14.7265625  C 8.88997395833333 14.9088541666667  8.77278645833333 15  8.583984375 15  L 6.416015625 15  C 6.32486979166667 15  6.2451171875 14.9723307291667  6.1767578125 14.9169921875  C 6.1083984375 14.8616536458333  6.07096354166667 14.7916666666667  6.064453125 14.70703125  L 5.791015625 12.91015625  C 5.47200520833333 12.8059895833333  5.17903645833333 12.685546875  4.912109375 12.548828125  L 3.53515625 13.59375  C 3.47005208333333 13.65234375  3.388671875 13.681640625  3.291015625 13.681640625  C 3.19986979166667 13.681640625  3.11848958333333 13.6458333333333  3.046875 13.57421875  C 2.2265625 12.83203125  1.689453125 12.28515625  1.435546875 11.93359375  C 1.38997395833333 11.8684895833333  1.3671875 11.7936197916667  1.3671875 11.708984375  C 1.3671875 11.630859375  1.39322916666667 11.5559895833333  1.4453125 11.484375  C 1.54296875 11.34765625  1.708984375 11.1311848958333  1.943359375 10.8349609375  C 2.177734375 10.5387369791667  2.353515625 10.3092447916667  2.470703125 10.146484375  C 2.294921875 9.82096354166666  2.16145833333333 9.49869791666666  2.0703125 9.1796875  L 0.283203125 8.916015625  C 0.198567708333333 8.90299479166667  0.130208333333333 8.8623046875  0.078125 8.7939453125  C 0.0260416666666667 8.7255859375  0 8.64908854166666  0 8.564453125  L 0 6.396484375  C 0 6.318359375  0.0260416666666667 6.24348958333333  0.078125 6.171875  C 0.130208333333333 6.10026041666667  0.192057291666667 6.05794270833333  0.263671875 6.044921875  L 2.080078125 5.771484375  C 2.17122395833333 5.47200520833333  2.29817708333333 5.17252604166667  2.4609375 4.873046875  C 2.20052083333333 4.501953125  1.85221354166667 4.052734375  1.416015625 3.525390625  C 1.35091145833333 3.447265625  1.318359375 3.369140625  1.318359375 3.291015625  C 1.318359375 3.22591145833333  1.34765625 3.15104166666666  1.40625 3.06640625  C 1.57552083333333 2.83203125  1.89615885416667 2.48209635416667  2.3681640625 2.0166015625  C 2.84016927083333 1.55110677083333  3.14778645833333 1.318359375  3.291015625 1.318359375  C 3.37565104166667 1.318359375  3.46028645833333 1.35091145833333  3.544921875 1.416015625  L 4.892578125 2.4609375  C 5.17903645833333 2.31119791666667  5.47526041666667 2.1875  5.78125 2.08984375  C 5.88541666666667 1.20442708333333  5.97981770833333 0.598958333333332  6.064453125 0.273437499999999  C 6.11002604166667 0.0911458333333326  6.22721354166667 0  6.416015625 0  L 8.583984375 0  C 8.67513020833333 0  8.7548828125 0.027669270833332  8.8232421875 0.0830078124999994  C 8.8916015625 0.138346354166665  8.92903645833333 0.208333333333333  8.935546875 0.29296875  L 9.208984375 2.08984375  C 9.52799479166667 2.19401041666667  9.82096354166667 2.314453125  10.087890625 2.451171875  L 11.474609375 1.40625  C 11.533203125 1.34765625  11.611328125 1.318359375  11.708984375 1.318359375  C 11.7936197916667 1.318359375  11.875 1.35091145833333  11.953125 1.416015625  C 12.79296875 2.19075520833333  13.330078125 2.744140625  13.564453125 3.076171875  C 13.6100260416667 3.12825520833333  13.6328125 3.19986979166667  13.6328125 3.291015625  C 13.6328125 3.369140625  13.6067708333333 3.44401041666666  13.5546875 3.515625  C 13.45703125 3.65234375  13.291015625 3.86881510416666  13.056640625 4.1650390625  C 12.822265625 4.46126302083333  12.646484375 4.69075520833333  12.529296875 4.853515625  C 12.6985677083333 5.17903645833333  12.83203125 5.498046875  12.9296875 5.810546875  L 14.716796875 6.083984375  C 14.8014322916667 6.09700520833333  14.8697916666667 6.1376953125  14.921875 6.2060546875  Z "
                                fill-rule="nonzero" fill="#000000" stroke="none" fill-opacity="0"
                                transform="matrix(1 0 0 1 26 539 )" />
                            <path
                                d="M 9.267578125 9.267578125  C 9.755859375 8.779296875  10 8.19010416666667  10 7.5  C 10 6.80989583333333  9.755859375 6.220703125  9.267578125 5.732421875  C 8.779296875 5.244140625  8.19010416666667 5  7.5 5  C 6.80989583333333 5  6.220703125 5.244140625  5.732421875 5.732421875  C 5.244140625 6.220703125  5 6.80989583333333  5 7.5  C 5 8.19010416666667  5.244140625 8.779296875  5.732421875 9.267578125  C 6.220703125 9.755859375  6.80989583333333 10  7.5 10  C 8.19010416666667 10  8.779296875 9.755859375  9.267578125 9.267578125  Z "
                                stroke-width="2" stroke="#8087a7" fill="none"
                                transform="matrix(1 0 0 1 26 539 )" mask="url(#clip46)" />
                            <path
                                d="M 14.921875 6.2060546875  C 14.9739583333333 6.2744140625  15 6.35091145833333  15 6.435546875  L 15 8.603515625  C 15 8.681640625  14.9739583333333 8.75651041666667  14.921875 8.828125  C 14.8697916666667 8.89973958333333  14.8046875 8.94205729166666  14.7265625 8.955078125  L 12.919921875 9.228515625  C 12.7962239583333 9.580078125  12.6692708333333 9.87630208333333  12.5390625 10.1171875  C 12.7669270833333 10.4427083333333  13.115234375 10.8919270833333  13.583984375 11.46484375  C 13.6490885416667 11.54296875  13.681640625 11.6243489583333  13.681640625 11.708984375  C 13.681640625 11.7936197916667  13.65234375 11.8684895833333  13.59375 11.93359375  C 13.41796875 12.1744791666667  13.095703125 12.5260416666667  12.626953125 12.98828125  C 12.158203125 13.4505208333333  11.8522135416667 13.681640625  11.708984375 13.681640625  C 11.630859375 13.681640625  11.5462239583333 13.65234375  11.455078125 13.59375  L 10.107421875 12.5390625  C 9.82096354166667 12.6888020833333  9.52473958333333 12.8125  9.21875 12.91015625  C 9.11458333333333 13.7955729166667  9.02018229166667 14.4010416666667  8.935546875 14.7265625  C 8.88997395833333 14.9088541666667  8.77278645833333 15  8.583984375 15  L 6.416015625 15  C 6.32486979166667 15  6.2451171875 14.9723307291667  6.1767578125 14.9169921875  C 6.1083984375 14.8616536458333  6.07096354166667 14.7916666666667  6.064453125 14.70703125  L 5.791015625 12.91015625  C 5.47200520833333 12.8059895833333  5.17903645833333 12.685546875  4.912109375 12.548828125  L 3.53515625 13.59375  C 3.47005208333333 13.65234375  3.388671875 13.681640625  3.291015625 13.681640625  C 3.19986979166667 13.681640625  3.11848958333333 13.6458333333333  3.046875 13.57421875  C 2.2265625 12.83203125  1.689453125 12.28515625  1.435546875 11.93359375  C 1.38997395833333 11.8684895833333  1.3671875 11.7936197916667  1.3671875 11.708984375  C 1.3671875 11.630859375  1.39322916666667 11.5559895833333  1.4453125 11.484375  C 1.54296875 11.34765625  1.708984375 11.1311848958333  1.943359375 10.8349609375  C 2.177734375 10.5387369791667  2.353515625 10.3092447916667  2.470703125 10.146484375  C 2.294921875 9.82096354166666  2.16145833333333 9.49869791666666  2.0703125 9.1796875  L 0.283203125 8.916015625  C 0.198567708333333 8.90299479166667  0.130208333333333 8.8623046875  0.078125 8.7939453125  C 0.0260416666666667 8.7255859375  0 8.64908854166666  0 8.564453125  L 0 6.396484375  C 0 6.318359375  0.0260416666666667 6.24348958333333  0.078125 6.171875  C 0.130208333333333 6.10026041666667  0.192057291666667 6.05794270833333  0.263671875 6.044921875  L 2.080078125 5.771484375  C 2.17122395833333 5.47200520833333  2.29817708333333 5.17252604166667  2.4609375 4.873046875  C 2.20052083333333 4.501953125  1.85221354166667 4.052734375  1.416015625 3.525390625  C 1.35091145833333 3.447265625  1.318359375 3.369140625  1.318359375 3.291015625  C 1.318359375 3.22591145833333  1.34765625 3.15104166666666  1.40625 3.06640625  C 1.57552083333333 2.83203125  1.89615885416667 2.48209635416667  2.3681640625 2.0166015625  C 2.84016927083333 1.55110677083333  3.14778645833333 1.318359375  3.291015625 1.318359375  C 3.37565104166667 1.318359375  3.46028645833333 1.35091145833333  3.544921875 1.416015625  L 4.892578125 2.4609375  C 5.17903645833333 2.31119791666667  5.47526041666667 2.1875  5.78125 2.08984375  C 5.88541666666667 1.20442708333333  5.97981770833333 0.598958333333332  6.064453125 0.273437499999999  C 6.11002604166667 0.0911458333333326  6.22721354166667 0  6.416015625 0  L 8.583984375 0  C 8.67513020833333 0  8.7548828125 0.027669270833332  8.8232421875 0.0830078124999994  C 8.8916015625 0.138346354166665  8.92903645833333 0.208333333333333  8.935546875 0.29296875  L 9.208984375 2.08984375  C 9.52799479166667 2.19401041666667  9.82096354166667 2.314453125  10.087890625 2.451171875  L 11.474609375 1.40625  C 11.533203125 1.34765625  11.611328125 1.318359375  11.708984375 1.318359375  C 11.7936197916667 1.318359375  11.875 1.35091145833333  11.953125 1.416015625  C 12.79296875 2.19075520833333  13.330078125 2.744140625  13.564453125 3.076171875  C 13.6100260416667 3.12825520833333  13.6328125 3.19986979166667  13.6328125 3.291015625  C 13.6328125 3.369140625  13.6067708333333 3.44401041666666  13.5546875 3.515625  C 13.45703125 3.65234375  13.291015625 3.86881510416666  13.056640625 4.1650390625  C 12.822265625 4.46126302083333  12.646484375 4.69075520833333  12.529296875 4.853515625  C 12.6985677083333 5.17903645833333  12.83203125 5.498046875  12.9296875 5.810546875  L 14.716796875 6.083984375  C 14.8014322916667 6.09700520833333  14.8697916666667 6.1376953125  14.921875 6.2060546875  Z "
                                stroke-width="2" stroke="#8087a7" fill="none"
                                transform="matrix(1 0 0 1 26 539 )" mask="url(#clip46)" />
                        </g>
                    </svg>
                </div>

                <div class="setting__list">
                    <div class="setting__item"><a href="#">Редактировать</a></div>
                    <div class="setting__item" v-on:click="projectEnd">Завершить</div>
                    <div class="setting__item" v-on:click="projectCopy">Копировать</div>
                    <div class="setting__item" v-on:click="projectRefer">Передать</div>
                    <div class="setting__item" v-on:click="projectDelete">Удалить</div>
                </div>
            </div>
        </div>
    `,
};

const compFiltersProjects = {
	props: {
		objparam: Object,
	},

	emits: ["eventChangFilter"],

	data() {
		return {
			showList: false,
		};
	},

	methods: {
		toggleList() {
			this.showList = !this.showList;
		},

		dropdown(e) {
			let el = this.$el;
			let target = e.target;
			if (el !== target && !el.contains(target)) {
				this.showList = false;
			}
		},

		changFilter(index) {
			this.$emit("eventChangFilter", { sortPosition: this.objparam.sortPosition, key: index });
		},
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
	},

	template: `
        <div class="all-projects__item-filter filter-project" :class="{ active: showList }">
            <div class="filter-project__name" v-on:click="toggleList"><span>{{objparam.nameFilter}}</span></div>

            <transition name="fade">
                <div class="filter-project__list" v-if="showList">
                    <div class="filter-project__list-item" v-for="(el, name, index) in objparam.arrFilter" :key="index" v-on:click="changFilter(name)"> {{ el }} </div>
                </div>
            </transition>
        </div>
    `,
};

const allProjects = Vue.createApp({
	data() {
		return {
			listFilter: {
				0: {
					sortPosition: 0,
					nameFilter: "Менеджер",
					arrFilter: {
						0: "Липская Марина",
						1: "Мельникова Инна",
						2: "Селейкович Марина",
					},
				},

				1: {
					sortPosition: 1,
					nameFilter: "Год",
					arrFilter: {
						0: "2020",
						1: "2021",
						2: "2022",
					},
				},

				2: {
					sortPosition: 2,
					nameFilter: "CMS",
					arrFilter: {
						0: "Bitrix",
						1: "Webasyst",
						2: "ModX",
					},
				},

				3: {
					sortPosition: 3,
					nameFilter: "Активный",
					arrFilter: {
						0: "Активный",
						1: "Завершенный",
					},
				},
			},

			listProject: {
				0: {
					sortPosition: 0,

					isActive: true,

					nameProject: "intex-leader.ru",

					dateEnd: "15.05.2022",

					linkB24: "link",

					linkDeal: "link-deal",

					fildProject: {
						profitability: 55,
						profitabilityStage: 40,
						nameStage: "Дизайн UX",
						factClock: 113,
						hoursLaid: 35,
						paidСlient: 570000,
						taxation: 345433,
					},
				},

				1: {
					sortPosition: 1,

					isActive: false,

					nameProject: "poolstroi.ru",

					dateEnd: "15.05.2022",

					linkB24: "link",

					linkDeal: "link-deal",

					fildProject: {
						profitability: 65,
						profitabilityStage: 50,
						nameStage: "Дизайн UX",
						factClock: 20,
						hoursLaid: 35,
						paidСlient: 570000,
						taxation: 345433,
					},
				},

				2: {
					sortPosition: 2,

					isActive: true,

					nameProject: "intex-leader.ru",

					dateEnd: "15.05.2022",

					linkB24: "link",

					linkDeal: "link-deal",

					fildProject: {
						profitability: 55,
						profitabilityStage: 40,
						nameStage: "Дизайн UX",
						factClock: 113,
						hoursLaid: 35,
						paidСlient: 570000,
						taxation: 345433,
					},
				},
			},
		};
	},

	methods: {
		projectEnable(advice) {
			this.listProject[advice.sortPosition].isActive = !this.listProject[advice.sortPosition].isActive;
		},

		projectDelete(advice) {
			for (let key in this.listProject) {
				if (advice.sortPosition <= parseInt(key) && this.listProject[parseInt(key) + 1] !== undefined) {
					this.listProject[parseInt(key) + 1].sortPosition = parseInt(key);

					this.listProject[key] = this.listProject[parseInt(key) + 1];
				}

				if (Object.keys(this.listProject).length - 1 == parseInt(key)) {
					delete this.listProject[key];
				}
			}
		},

		projectRefer(advice) {
			console.log(advice);
		},

		projectCopy(advice) {
			console.log(advice);
		},

		projectEnd(advice) {
			console.log(advice);
		},

		changFilter(advice) {
			this.listFilter[advice.sortPosition].nameFilter = this.listFilter[advice.sortPosition].arrFilter[advice.key];
		},
	},

	components: {
		"comp-filters-projects": compFiltersProjects,
		"comp-project": compProject,
	},
});

allProjects.mount(".all-projects");
