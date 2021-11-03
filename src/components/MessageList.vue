<template>
    <div class="mes">
        <ul
            v-for="message in messages"
            :key="message.senderId">
            
            <MyMessage
                id="my"
                v-if="message.senderId == 1"
               :message="message"
            />
            <OtherMessages
                id="other"
                v-else 
                :message="message"
            />
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
    .mes{
        display: flex;
        flex-direction: column;
        flex: 1;
        background: rgba(128, 128, 128, 0.089);
    }
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }

</style>

