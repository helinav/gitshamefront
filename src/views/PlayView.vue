<template>
  <CornerButton @click="executeLogOut"/>
  <div v-if="showAlert" class="custom-alert" role="alert">
    {{ alertMessage }}
  </div>
  <div>
    <img src="../assets/pictures/menu_banner-default.png" width="400" alt="Logo"/>
  </div>
  <div class="row justify-content-center mt-5">
    <div class="col col-3">
      <div class="dropdown" v-if="!isAdmin">
        <h class="h-green">Vali mäng!</h>
        <div class="padding-25"></div>
        <div class="styled-select">
          <select id="select" name="select" style="width: 64%;">
            <option value="CSS">Java ubade espresso</option>
            <option value="Javascript">Javascript</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
      </div>
      <div class="padding-10"></div>
      <div class="dropdown" v-if="isAdmin">
        <h class="h-green">Admin valikud</h>
      </div>
    </div>
    <div class="form-label">
      <btn v-if="!isAdmin" @click="$router.push({name: 'playGameRoute'})" class="btn-red" type="button">Mängi</btn>
    </div>
    <div v-if="isAdmin" class="button-container" @click="$router.push({name: 'gameRoute'})">
      <btn class="corner-button">Lisa uus mäng</btn>
    </div>
    <div v-if="isAdmin" class="button-container" @click="">
      <btn class="corner-button">Muuda mängu</btn>
    </div>
    <div v-if="isAdmin" class="button-container" @click="$router.push({name: 'avatarRoute'})">
      <btn class="corner-button">Lisa avatar</btn>
    </div>

    <div class="row justify-content-center" v-if="!isAdmin">
      <div class="d-flex justify-content-center">
        <div class="form-label" style="margin-left: 3px;">
          <btn class="btn-gold">Edetabel</btn>
        </div>
        <div class="form-label">
          <btn @click="openModal">Reeglid</btn>
          <RulesModal ref="rulesModalRef"></RulesModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CornerButton from "@/components/button/CornerButton.vue";
import {ADMIN} from "@/assets/script/Role";
import router from "@/router";
import RulesModal from "@/components/modal/RulesModal.vue";

export default {
  name: "PlayView",
  components: {RulesModal, CornerButton},
  data() {
    return {
      showAlert: false,
      alertMessage: "Oled sisse logitud!",
      roleName: sessionStorage.getItem('roleName'),
      isLoggedIn: true,
      isAdmin: false
    }
  },
  methods: {
    openModal() {
      this.$refs.rulesModalRef.$refs.modalRef.openModal()
    },

    closeModal() {
      this.$refs.rulesModalRef.$refs.modalRef.closeModal()
    },

    updateNavMenu() {
      this.isLoggedIn = sessionStorage.getItem('userId') !== null
      this.isAdmin = sessionStorage.getItem('roleName') === ADMIN
    },
    showTempAlert() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    },

    executeLogOut() {
      sessionStorage.clear()
      router.push({name: 'homeRoute'})
    },
  },
  mounted() {
    this.showTempAlert()
  },
  beforeMount() {
    this.isAdmin = true
    this.updateNavMenu()
  }
}
</script>

