const { createApp } = Vue;

createApp({
    data() {
        return {
            mailListTemp: [],
            mailList: [],
            counter: null
        }
    },
    methods: {

        generateRandomMail() {

            for (let i = 0; i < this.counter; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        console.log(resp.data.response);
                        this.mailListTemp.push(resp.data)

                        if (this.mailListTemp.length === this.counter) {
                            this.mailList = this.mailListTemp
                            this.mailListTemp = []
                        };


                    })

            };
        },
    },
    mounted() {

    }

}).mount("#app")