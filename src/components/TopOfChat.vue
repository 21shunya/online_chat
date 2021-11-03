<template>
    <div class="container">
        <div class="btn">
            <button id="profile">p</button>
            <button id="search">s</button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'TopOfChat',
    props: {},
    methods: {
    }
};
</script>

<style lang="scss" scoped>
    .btn {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 8px 0px;
    border-bottom: 2px solid green;
    }
</style>
