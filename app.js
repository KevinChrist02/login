const app = Vue.createApp({
    data(){
        return{
            username: "",
            password: "",
            showMessage: false,
        };
    },
    methods:{
        loggedIn(){
            this.showMessage = true;
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