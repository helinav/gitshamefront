<template>
  <div class="text-center">
    <AlertSuccess :alert-message="successMessage"/>
    <AlertDanger :alert-message="errorMessage"/>
    <h1>Lisa uus mäng</h1>
  </div>
  <div class="input-group justify-content-center mb-3">
    <input type="text" class="form-control w-25" placeholder="Kirjuta mängu nimi" aria-label="Mängu nimi"
           aria-describedby="basic-addon1">
  </div>
  <div @click="addGame">
    <button class="btn btn-outline-success">Lisa mäng</button>
  </div>
</template>

<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {GAME_NAME_ADDED} from "@/assets/script/AlertMessage";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {GAME_NAME_ALREADY_EXISTS} from "@/assets/script/ErrorCode";

export default {
  name: 'GameView',
  components: {AlertDanger, AlertSuccess},
  data() {
    return {
      successMessage: '',
      errorMessage: '',
      gameId: 0,
      gameName: '',
    }
  },
  methods: {

    addGame() {
      this.sendGameRequest()
    },


    sendGameRequest() {
      this.$http.post("/game", this.gameId, {
            params: {
              gameName: this.gameName,
            }
          }
      ).then(response => {
        this.handleGameRequestSuccessResponse()
      }).catch(error => {
        this.handleGameRequestErrorResponse()
      })
    },

    handleGameRequestSuccessResponse() {
      this.successMessage = GAME_NAME_ADDED
      this.resetField()
    },

    handleGameRequestErrorResponse() {
      this.errorMessage = GAME_NAME_ALREADY_EXISTS
    },

    resetField() {
      this.gameName = ''
    },

  }

}
</script>