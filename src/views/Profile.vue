<template>
<div id="border">
    <div class="box">
        <div>
            <!-- <span>ID: {{currentUser.id}}</span> -->
            <button @click.prevent="logOut">LogOut</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    // currentUser() {
    //   return this.$store.state.auth.user;
    // }
  },
  mounted() {
    // if (!this.currentUser) {
    //   this.$router.push('/login');
    // }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
#border {
  border: 2px solid black;
  border-radius: 15px;
  background: linear-gradient(-45deg, #FF0000,#ECE319,#FE7D06,#E40000,#DB1ADF,#7100CA,#1434DB,#16ECDF,#11EA0C,#FFF502,#00D94A);
  padding: 2px;
  box-shadow: 4px 4px 20px 6px #000000;
  max-width: 90%;
}

.box {
  display: flex;
  flex-direction: column;
  background-color: #20213A;
  border-radius: 15px;
  padding: 10px 25px;
  
}

button {
    padding: 10px 20px;
    border-radius: 20px;
    font-family: Mulish;
    font-size: 20px;    
    background: transparent;
    border: 1px solid #9D6FFF;
    color: #9D6FFF;
}

span {
  font-family: Lora;
  font-size: 39px;
  margin: 50px;
  color: #FFFFFF;
  font-weight: bold;
}
</style>