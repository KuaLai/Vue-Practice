import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery';
import './assets/sass/main.scss';
import router from './assets/router';
// import MetaInfo from "vue-meta-info";
import VueHead from 'vue-head';
import VueGAPI from 'vue-gapi';

const apiConfig = {
  apiKey: 'AIzaSyBHm7yxG9zXBc0c49IzytJbvxJvIHJpHbA',
  clientId:
    '1016830868471-umarecm01ekphm9jkd54bp6vqluol9mf.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets', // See, edit, create, and delete your spreadsheets in Google Drive
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
};

Vue.use(VueHead);
// Vue.use(MetaInfo);
// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig);

Vue.config.productionTip = false;
Vue.prototype.$ = $;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
