<template>
  <CornerButton @click="executeLogOut"/>
  <div v-if="showAlert" class="alert alert-success justify-content-center" role="alert">
    {{ alertMessage }}
  </div>
  <div>
    <img src="../assets/pictures/avaleht_GITBLAME.png" width="900" alt="Logo"/>
  </div>
  <div class="row justify-content-center mt-5">
    <div class="col col-3">
      <!--      <GamesDropdown/>-->
    </div>
    <div class="col col-3">
      <button v-if="!isAdmin" @click="$router.push({name: 'playGameRoute'})" type="button"
              class="btn btn-outline-success">Alusta
      </button>
    </div>
    <div v-if="isAdmin" class="button-container" @click="">
      <button class="corner-button">Lisa uus mäng</button>
    </div>
    <div v-if="isAdmin" class="button-container" @click="">
      <button class="corner-button">Muuda mängu</button>
    </div>
    <div v-if="isAdmin" class="button-container" @click="">
      <button class="corner-button">Lisa avatar</button>
    </div>
  </div>
</template>

<script>
import CornerButton from "@/components/button/CornerButton.vue";
import GamesDropdown from "@/components/GamesDropdown.vue";
import {ADMIN} from "@/assets/script/Role";
import router from "@/router";

export default {
  name: "PlayView",
  components: {GamesDropdown, CornerButton},
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

