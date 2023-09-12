<head>
<link rel="stylesheet" href="my-style.css"/>
</head>
<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
    </div>
    <div class="justify-content-center mt-5">
      <button @click="openModal()" type="button">Logi sisse</button>
      <LoginModal ref="loginModalRef"></LoginModal>
    </div>
    <div class="justify-content-center mt-5">
      <button @click="navigateToAccountView" type="button" class="btn btn-outline-success">Loo uus konto</button>
    </div>
  </div>
</template>

<script>


import LoginModal from "@/components/modal/LoginModal.vue";
import router from "@/router";
export default {
  components:{
    LoginModal
  },
  methods: {
    navigateToAccountView() {
      router.push({name: 'accountRoute'})
    },

    openModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },

    closeModal () {
      this.$refs.loginModalRef.$refs.modalRef.closeModal()
    }

  }
}
</script>
