<template>
    <div class="msg-wrapper other-msg">
        <div class="msg-info login-in-msg"> name </div>
        <div class="txt-time">
            <div class="msg-text">{{ msg.message }}</div>
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
    //     async fetchUser() {
    //         this.user = await fetchUser(this.msg.senderId)
    //     },
    // }
}
</script>

<style lang="scss" scoped>

.txt-time{
    display: flex;
}
          
</style>