// Import Bootstrap and Popper.js
import 'bootstrap';
import '@popperjs/core';

// Import Vue
import { createApp } from 'vue';

// Import the main App component
import App from './components/app.vue';

// Create a Vue app instance and mount the App component
createApp(App).mount('#app');

