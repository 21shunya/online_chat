<template>
    <div>
        <form class="container">
            <input type="text" placeholder="Message..."/>
            <button>send</button>
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        input{
            width: 92%;
            height: 40px;
            border-radius: 15px;
        }
    }
    
    

</style>
