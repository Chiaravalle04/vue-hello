const { createApp } = Vue

createApp({
    
    data() {
     
        return {
     
            title: 'Benvenuto Vue!',
            mainLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
            altImg: 'Logo Vue',
            textWhite: 'text-white',

        }
    }

}).mount('#app')