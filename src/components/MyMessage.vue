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
    max-width: 75%;
    display: flex;
    background: #FFFEC7;
    border-radius: 20px;
    padding: 5px 10px;
}
#text{
    padding: 0px 20px 0px 0px;
}
.info{
    font-size: 12px;
    color: #888888;    
}
.time{
    align-self: flex-end;
    padding: 0px 8px 0px 0px; 
}


</style>