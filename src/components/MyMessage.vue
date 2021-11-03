<template>
    <div>
        <div v-if="message.senderId == 1">
            <li >
                {{message.text}}
            </li>
        </div>
        <li v-else>
            -----------
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
    li{

    }
</style>