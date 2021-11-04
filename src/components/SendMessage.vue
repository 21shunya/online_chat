<template>
    <div>
        <form class="container">
            <input type="text" placeholder="Message..."/>
            <button><img src="@/data/send.png"></button>
        </form>
    </div>
</template>

<script>
export default{
    name: 'SendMessage',
    props: {},
    methods: {
    }
};
</script>

<style lang="scss" scoped>
    .container{
        padding: 0px 0px 30px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        input{
            width: 92%;
            height: 40px;
            border-radius: 15px;
            margin: 0px 15px;
        }
        button{
            background: transparent;
            border: none;
        }
    }
</style>
