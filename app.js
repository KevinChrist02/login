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
    computed:{
        // returning the value if both objects are not empty
        loginValid(){
            return this.username !== "" && this.password !== "";
        },
    },
});

app.mount("#app");