<template>
    <div class="msg-wrapper my-msg">
        <button class="msg-text" @click="showModal">
            {{ msg.message }}
        </button>
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
    methods: {
        showModal() {
            this.$emit('showModal')
        }
    }
    // components:{
    //     TimeOfMsg
    // }
}
</script>
