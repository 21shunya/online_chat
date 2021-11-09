<template>
    <div class="wrapper">
        <div id="text">{{ msg.text }}</div>
        <TimeOfMsg
            :msg="msg"
        />     
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
    components:{
        TimeOfMsg
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    align-self: flex-end;
    background: #FFFEC7;
}
#text{
    padding: 0px 20px 0px 0px;
}
.info{
    font-size: 12px;
    color: #888888;    
}
</style>