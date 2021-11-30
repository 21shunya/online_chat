<template>
    <div class="msgs">
        <div
            class="list"
            v-for="msg in messages"
            :key="msg.id">
            <!-- <DateOfMsgs 
                :msg="msg"
            /> -->
            <MyMessage
                v-if="msg.userId == userId"
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
import DateOfMsgs from '@/components/DateOfMsgs.vue'

export default{
    name: 'MessageList',
    props: ['messages'],
    components:{
        MyMessage,
        OtherMessages,
        DateOfMsgs
    },
    data: () => ({
        userId: ''
    }),
    methods: {
        getUserId() {
            const { userId } = JSON.parse(localStorage.getItem('user'))
            this.userId = userId
        },
    },
    mounted() {
        this.getUserId()
    }
}
</script>

<style lang="scss" scoped>
    
.msgs{
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    flex-shrink: 1;
    margin: 5px;
    overflow-y: auto;
}
// .msgs:hover{
//     justify-content: flex-end;
// }

/* полоса прокрутки (скроллбар) */    
    ::-webkit-scrollbar {
    width: 7px; /* ширина для вертикального скролла */
    background-color: transparent;
    
    }
// ::-webkit-scrollbar:hover {
//     background-color: rgba(255, 255, 255, 0.5);
// }

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid;
    border-radius: 10em;
}

::-webkit-scrollbar-thumb:hover {
   background-color: #20213A;
   border-color: rgba(255, 255, 255, 0.5);
}
    .list{
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        flex: 1;
        margin: 5px;
        font-size: 17px;
        color: #2F2F2F;
    }

    /////// стили компонентов сообщений
    .wrapper{
    max-width: 75%;
    display: flex;
    border-radius: 20px;
    padding: 5px 10px;
}

</style>

