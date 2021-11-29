<template>
    <div class="info time">{{ time }}</div>
</template>

<script>
export default{
    name: 'Time',
    props:{
        msg: {
            type: Object,
            required: true
        }
    },
     data: () => ({
        time: '',
    }),
    mounted() {
        this.getTime();
    },
    methods: {
        // async getTime(){
        //     this.time = this.msg.datetime.split('T')[1].split(':',2).join(':') 
        // }
    }
}
</script>

<style lang="scss" scoped>
.time{
    align-self: flex-end;
    padding: 0px 8px 0px 0px; 
}
</style>
