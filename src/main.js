import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAD1Xhi6T_1jSQ3z0F6YMqbnOZrscYRwUo",
  authDomain: "vue-firebase-997eb.firebaseapp.com",
  projectId: "vue-firebase-997eb",
  storageBucket: "vue-firebase-997eb.appspot.com",
  messagingSenderId: "377398502521",
  appId: "1:377398502521:web:38b241d78a5ad8d96a20a8",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
