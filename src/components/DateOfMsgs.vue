<template>
    <div class="info">
        <div
        v-if="currentDate - new Date(this.date_txt) != 0"
        >
            {{ date_txt }}
        </div>
        <div v-else>today</div>
    </div>
</template>

<script>
export default {
    name: 'Date',
    props:{
        msg: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        date: Date(),
        date_txt: '',
        currentDate: new Date().toISOString(),
    }),
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            this.date_txt = this.msg.datetime.split('T')[0].split('-').reverse().join('-')
            this.currentDate = new Date(this.currentDate.split('T')[0].split('-').reverse().join('-'))
        }
    }
}
</script>

<style lang="scss" scoped>
    .info{
    font-size: 12px;
    color: #888888;    
}
</style>