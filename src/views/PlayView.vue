<template>
  <CornerButton @click="executeLogOut"/>
  <div v-if="showAlert" class="alert alert-success justify-content-center" role="alert">
    {{ alertMessage }}
  </div>
  <div>
    <img src="../assets/pictures/menu_banner-default.png" width="400" alt="Logo"/>
  </div>
  <div class="row justify-content-center mt-5">
    <div class="col col-3">

      <div class="dropdown">
        <h2>VALI MÄNG</h2>
        <div class="styled-select">
          <div class="padding-10"></div>
          <select id="select" name="select" style="width: 80%;"> <!-- Set the width to 100% to expand the dropdown -->
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="PHP">PHP</option>
            <option value="ASP.NET">ASP.NET</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
      </div>
      <div class="padding-50"></div>

    </div>
    <div class="form-label">
      <btn v-if="!isAdmin" @click="$router.push({name: 'playGameRoute'})" class="btn-red" type="button">Alusta
      </btn>
    </div>
    <div v-if="isAdmin" class="button-container" @click="$router.push({name: 'gameRoute'})">
      <button class="corner-button">Lisa uus mäng</button>
    </div>
    <div v-if="isAdmin" class="button-container" @click="">
      <button class="corner-button">Muuda mängu</button>
    </div>
    <div v-if="isAdmin" class="button-container" @click="$router.push({name: 'avatarRoute'})">
      <button class="corner-button">Lisa avatar</button>
    </div>
    <div class="row justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="form-label" style="margin-left: 3px;">
          <btn>Tagasi</btn>
        </div>
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
      alertMessage: "Oled sisse logitud",
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

