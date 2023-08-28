const app = Vue.createApp({
    data(){
        return{
            username: "",
            password: "",
        };
    },
    methods:{
        loggedIn(){
            alert("Welcome, " + this.username);
        },
    },
});

app.mount("#app");