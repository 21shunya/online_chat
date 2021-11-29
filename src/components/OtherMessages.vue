<template>
    <div class="wrapper">
        <div class="info login"> name </div>
        <div class="txt-time">
            <div id="text">{{ msg.message }}</div>
        </div>
    </div>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue'
// import { fetchUser } from '@/netClient/dataService'

export default{
    name: 'Message',
    props:{
        msg: {
            type: Object,
            required: true
        }
    },
    // components:{
    //     TimeOfMsg
    // },
    // data: () => ({
    //     user: {},
    // }),
    // mounted() {
    //     this.fetchUser();
    // },
    
    // methods: {
    //     async fetchUser(){
    //         this.user = await fetchUser(this.msg.senderId)
    //     },
    // }
}
</script>

<style lang="scss" scoped>
.wrapper{
    align-self: flex-start;
    flex-direction: column;
    background: #A6FF72;
    align-items: flex-start;
}
.txt-time{
    display: flex;
}
.info{
    font-size: 12px;
    color: #888888;    
}
.login{    
    padding: 0px 0px 5px 0px;  
}
#text{
    padding: 0px 20px 0px 0px;
}             
</style>