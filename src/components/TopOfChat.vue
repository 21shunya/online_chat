<template>
    <div class="container">
        <div class="btn">
            <button><img src="@/data/profile.png"></button>
            <button id="search"><img src="@/data/Search.png"></button>
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
.container{
    padding: 30px 0px 0px 0px;
}
    .btn {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 5px 0px;
    border-bottom: 2px solid;
    border-image:  linear-gradient(113.55deg, #00D94A 0%, rgba(255, 245, 2, 0.8) 10.37%, rgba(17, 234, 12, 0.8) 12.46%, rgba(22, 236, 223, 0.8) 15%, rgba(20, 52, 219, 0.8) 29.99%, rgba(113, 0, 202, 0.418654) 37%, rgba(219, 26, 223, 0.8) 46.7%, rgba(228, 0, 0, 0.8) 49.51%, rgba(254, 125, 6, 0.8) 52.09%, rgba(236, 227, 25, 0.8) 59.25%, #FF0000 64.36%);
    -webkit-border-image: -webkit-linear-gradient(113.55deg, #00D94A 0%, rgba(255, 245, 2, 0.8) 10.37%, rgba(17, 234, 12, 0.8) 12.46%, rgba(22, 236, 223, 0.8) 15%, rgba(20, 52, 219, 0.8) 29.99%, rgba(113, 0, 202, 0.418654) 37%, rgba(219, 26, 223, 0.8) 46.7%, rgba(228, 0, 0, 0.8) 49.51%, rgba(254, 125, 6, 0.8) 52.09%, rgba(236, 227, 25, 0.8) 59.25%, #FF0000 64.36%);
    -moz-border-image: -moz-linear-gradient(113.55deg, #00D94A 0%, rgba(255, 245, 2, 0.8) 10.37%, rgba(17, 234, 12, 0.8) 12.46%, rgba(22, 236, 223, 0.8) 15%, rgba(20, 52, 219, 0.8) 29.99%, rgba(113, 0, 202, 0.418654) 37%, rgba(219, 26, 223, 0.8) 46.7%, rgba(228, 0, 0, 0.8) 49.51%, rgba(254, 125, 6, 0.8) 52.09%, rgba(236, 227, 25, 0.8) 59.25%, #FF0000 64.36%);
    border-image-slice: 1;
    }
    button{
        background: transparent;
        border: none;
    }
    img{
        height: 25px;
    }
</style>
