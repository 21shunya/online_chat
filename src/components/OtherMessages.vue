<template>
    <div class="other">
        <li >
            <div id="name">{{message.senderId}}</div>
            {{message.text}}
        </li>
    </div>
</template>

<script>

export default{
    name: 'Message',
    props:{
        message: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.other{
    align-self: flex-start;
   max-width: 75%;
}
    li{
        display: flex;
        flex-direction: column;
        background: #A6FF72;
        border-radius: 20px;
        align-items: flex-start;
        padding: 5px 10px;
        #name{
        }
    }
</style>