<template>
  <CornerButton @click="executeLogOut"/>
  <div v-if="showAlert" class="custom-alert" role="alert">
    {{ alertMessage }}
  </div>
  <div>
    <img src="../assets/pictures/menu_banner-default.png" width="400" alt="Logo"/>
  </div>
  <AlertDanger :alert-message="errorResponse.message"/>
  <div class="row justify-content-center mt-5">
    <div class="col col-3">
      <GamesDropdown v-if="!isAdmin" ref="gamesDropDownRef" @event-update-selected-game-id="setGameRequestGameId"/>
    </div>
    <div class="form-label">
      <div class="padding-17"></div>
      <btn v-if="!isAdmin" @click="startPlayerGame" class="btn-red" type="button">Mängi</btn>
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
          <btn class="btn-gold">Autahvel</btn>
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
import GamesDropdown from "@/components/GamesDropdown.vue";
import {CHOOSE_A_GAME} from "@/assets/script/AlertMessage";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {useRoute} from "vue-router";

export default {
  name: "PlayView",
  components: {AlertDanger, GamesDropdown, RulesModal, CornerButton},
  data() {
    return {
      showAlert: false,
      alertMessage: "Oled sisse logitud!",
      roleName: sessionStorage.getItem('roleName'),
      isLoggedIn: true,
      isAdmin: false,
      newGameRequest: {
        gameId: 0,
        playerId: Number(sessionStorage.getItem('playerId'))
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
      playerGameId: 0,
      questionInfo: {
        questionId: 0,
        questionText: '',
        answerExplanation: '',
        typeName: '',
        imageData: '',
        strikeCount: 0,
        questionNumber: 0,
        totalNumberOfQuestions: 0
      }
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
      this.newGameRequest.playerId = Number(sessionStorage.getItem('playerId'))
    },

    showTempAlert() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    },

    setGameRequestGameId(selectedGameId) {
      this.newGameRequest.gameId = selectedGameId
    },

    setErrorResponseMessage() {
      this.alertMessage = ''
      this.errorResponse.message = CHOOSE_A_GAME
    },

    resetErrorResponse() {
      this.errorResponse.message = ''
    },

    startPlayerGame() {
      this.resetErrorResponse()
      if (this.newGameRequest.gameId > 0) {
        this.sendGameRequest()
      } else {
        this.setErrorResponseMessage()
      }
    },

    sendGameRequest() {
      this.$http.post("/gameplay", this.newGameRequest
      ).then(response => {
        const playerGameId = response.data.playerGameId
        router.push({name: 'playGameRoute', query: {playerGameId: playerGameId}})
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
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
