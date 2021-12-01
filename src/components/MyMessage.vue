<template>
    <div class="msg-wrapper my-msg">
        <div class="msg-text">{{ msg.message }}</div>
        <!-- <TimeOfMsg
            :msg="msg"
        />      -->
    </div>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue'

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
    // }
}
</script>
