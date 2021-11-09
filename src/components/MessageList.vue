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
        
        display: flex;
        flex-direction: column;
        margin: 5px;
        font-size: 20px;
        color: #2F2F2F;
    }
    /////////////////////////// стили компонентов сообщений
    .wrapper{
    max-width: 75%;
    display: flex;
    border-radius: 20px;
    padding: 5px 10px;
}

</style>

