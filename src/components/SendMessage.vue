<template>
    <div class="container">
        <form>
            
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
    .conatainer{
        display: flex;
        justify-content: space-between;
    }

</style>
