import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import phoneNumberValidator from '~/resources/js/helpers/phoneNumberValidator';
VeeValidate.Validator.extend('phoneNumber', phoneNumberValidator);
import interceptorsSetup from '../auth/interceptors';
interceptorsSetup();

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VeeValidate);

new Vue({
	router,
	store,
	beforeCreate() {
		this.$store.commit('initialiseStore');
	},
	render: h => h(App),
}).$mount('#app');
