
<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/menu_banner-default.png" width="400" alt="Logo"/>
    </div>
    <div class="justify-content-center mt-5">
      <btn @click="openModal()">Logi sisse</btn>
      <LoginModal ref="loginModalRef"></LoginModal>
    </div>
    <div class="justify-content-center mt-1">
      <btn @click="navigateToAccountView">Loo kasutaja</btn>
    </div>
  </div>
</template>

<script>


import LoginModal from "@/components/modal/LoginModal.vue";
import router from "@/router";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
export default {
  components: {AlertSuccess, LoginModal},

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
