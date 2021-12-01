<template>
    <div class="header-container">
        <div class="header-btns">
            <button class="h-btn" @click="goToProfile"><img src="@/data/profile.png"></button>
            <button class="h-btn"><img src="@/data/Search.png"></button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'TopOfChat',
    props: {},
    methods: {
        goToProfile() {
            this.$router.push("/profile")
        }
    }
};
</script>
