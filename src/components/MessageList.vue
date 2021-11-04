<template>
    <div class="mes">
        <ul
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
    }
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }

</style>

