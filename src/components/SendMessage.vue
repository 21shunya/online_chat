<template>
    <div>
        <form class="container" @keyup.enter="onSubmitClicked">
            <input type="text" placeholder="Message..."/>
            <button @click="onSubmitClicked"><img src="@/data/send.png"></button>
        </form>
    </div>
</template>

<script>
import {sendMsg} from '@/service/dataService';

export default{
    name: 'SendMessage',
    props: {},
    methods: {
        async onSubmitClicked
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
            height: 35px;
            border-radius: 15px;
            margin: 0px 15px;
            font-size: 17px;
        }
        button{
            background: transparent;
            border: none;
        }
        img{
            height: 25px;
        }
    }
</style>
