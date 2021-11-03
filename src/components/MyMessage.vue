<template>
    <div class="my">
         <li >
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
.my{
    align-self: flex-end;
    max-width: 75%;
}
    li{
        background: #FFFEC7;
        border-radius: 20px;
        padding: 5px 10px;
    }
</style>