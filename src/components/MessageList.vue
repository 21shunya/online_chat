<template>
    <div>
        <ul>
            <MyMessage
                v-for="message in messages"
                :key="message.senderId"
                :message="message"
            />
            a
        </ul>
    </div>
</template>

<script>
import MyMessage from '@/components/MyMessage.vue'

export default{
    name: 'MessageList',
    props: ['messages'],
    components:{
        MyMessage
    },
    
}
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
</style>

