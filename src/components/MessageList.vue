<template>
    <div class="msg">
        <div
            class="list"
            v-for="msg in messages"
            :key="msg.id">
            <MyMessage
                v-if="msg.senderId == 1"
                :msg="msg"
            />
            <OtherMessages
                v-else 
                :msg="msg"
            />
        </div>    
        <ul>
           
        </ul>
    </div>
</template>

<script>
import MyMessage from '@/components/MyMessage.vue'
import OtherMessages from '@/components/OtherMessages.vue'

export default{
    name: 'MessageList',
    props: ['messages'],
    components:{
        MyMessage,
        OtherMessages
    },
    
}
</script>

<style lang="scss" scoped>
    .msg{
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-shrink: 1;
    }
    .list{
        margin: 5px;
        display: flex;
        flex-direction: column;
        list-style: none;
    }

</style>

