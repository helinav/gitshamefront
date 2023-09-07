<template>
  <div class="container text-center vh-100">
    <div class="justify-content-center mb-5">
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="900" alt="Logo"/>
    </div>
    <div class="justify-content-center mt-5">
      <button @click="openLoginModal" type="button" class="btn btn-primary">Logi sisse</button>
      <LoginModal ref="loginModalRef"></LoginModal>
    </div>
    <div class="justify-content-center mt-5">
      <button @click="$router.push({name: 'createAccountRoute'})" type="button" class="btn btn-primary">Loo uus konto</button>
    </div>
  </div>
</template>

<script>


import LoginModal from "@/components/modal/LoginModal.vue";
export default {
  components:{
    LoginModal
  },
  data() {
    return{

    }
  },
  methods: {

    openLoginModal() {
      this.$refs.loginModalRef.openLoginModal()
    },

    closeLoginModal () {
      this.$refs.loginModalRef.closeLoginModal()
    }

  }
}
</script>
