<template>
    <div class="header-container">
        <div class="header-btns">
            <button class="chat-img-btn" @click="goToProfile"><img src="@/data/profile.png"></button>
            <button class="chat-img-btn"><img src="@/data/Search.png"></button>
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
