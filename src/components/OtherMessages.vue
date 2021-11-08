<template>
    <div class="wrapper">
        <div class="info login">{{ user.login }}</div>
        <div id="text">{{ msg.text }}</div>
        <div class="info time">{{ time }}</div>
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
        user: {},
        time: '',
    }),
    mounted() {
        this.fetchUser();
        this.getTime();
    },
    
    methods: {
        async fetchUser(){
            this.user = await fetchUser(this.msg.senderId)
        },
        async getTime(){
            this.time = this.msg.datetime.split('T')[1].split(':',2).join(':') 
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
}
.info{
    font-size: 12px;
    color: #888888;    
}
.login{    
    padding: 0px 0px 5px 0px;  
    }
.time{
    align-self: flex-end;
    padding: 0px 8px 6px 0px; 
}

        

        #text{
            padding: 0px 50px 0px 0px;
            font-size: 20px;
            color: #2F2F2F;
        }
</style>