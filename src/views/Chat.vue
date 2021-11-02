<template>
    <div class="chat">Chat
        <TopOfChart />
        <SendMessage />
    </div>
</template>

<script>
import TopOfChart from '@/components/TopOfChat.vue'
import SendMessage from '@/components/SendMessage.vue'

export default{
    name: 'Chat',
    components:{
        TopOfChart,
        SendMessage
    }
};
</script>

<style lang="scss" scoped>
    .chat{
        display: flex; 
        flex-direction: column;
        width: 40%;       
    }

</style>
