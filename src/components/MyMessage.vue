<template>
    <div class="my">
        <div class="msg">{{msg.text}}</div>     
    </div>
</template>

<script>

export default{
    name: 'Message',
    props:{
        msg: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.my{
    align-self: flex-end;
    max-width: 75%;
}
    .msg{
        background: #FFFEC7;
        border-radius: 20px;
        padding: 5px 10px;
    }
</style>