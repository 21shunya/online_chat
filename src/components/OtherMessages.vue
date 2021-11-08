<template>
    <div class="wrapper">
        <div id="login">{{ user.login }}</div>
        <div id="text">{{ msg.text }}</div>
    </div>
</template>

<script>
import { fetchUser } from '@/service/dataService'

export default{
    name: 'Message',
    props:{
        msg: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        user: {}
    }),

    mounted() {
        this.fetchUser();
    },
    
    methods: {
        async fetchUser(){
            this.user = await fetchUser(this.msg.senderId)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    align-self: flex-start;
    max-width: 75%;
    display: flex;
    flex-direction: column;
    background: #A6FF72;
    border-radius: 20px;
    align-items: flex-start;
    padding: 5px 10px;

        #login{
            font-size: 12px;
            padding: 0px 0px 5px 0px;
            color: #888888;
        }

        #text{
            padding: 0px 60px 0px 0px;
            font-size: 20px;
            color: #2F2F2F;
        }
}
</style>