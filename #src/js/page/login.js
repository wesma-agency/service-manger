const formAuth = Vue.createApp({
	data() {
		return {
            login: null,
            pass: null,
		};
	},

	methods: {
        onSubmit() {
            console.log(this.login, this.pass);
        }
	},
});

console.log(formAuth);

formAuth.mount(".login");
