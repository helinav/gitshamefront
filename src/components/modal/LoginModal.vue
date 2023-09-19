<template>
  <div>
    <Modal close-button-name="Tagasi" ref="modalRef">
      <template #header>
        <h class="h-black">Logi sisse</h>
      </template>
      <template #body>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <AlertDanger :alert-message="errorResponse.message"/>
              <div class="mb-3">
                <label for="username" class="h-black">Kasutajanimi</label>
                <input v-model="username" type="text" class="form-control" id="username">
              </div>
              <div class="mb-3">
                <label for="password" class="h-black">Parool</label>
                <input v-model="password" type="password" class="form-control" id="password">
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <btn @click="login">Logi sisse</btn>
      </template>
    </Modal>
  </div>
</template>


<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import {INCORRECT_CREDENTIALS} from "@/assets/script/ErrorCode";
import {FILL_MANDATORY_FIELDS} from "@/assets/script/AlertMessage";
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'LoginModal',
  components: {AlertDanger, Modal},
  data() {
    return {
      isOpen: false,
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: '',
        playerId: 0
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
    }
  },

  methods: {

    login() {
      this.resetErrorMessage()
      if (this.mandatoryFieldsAreFilled()) {
        this.sendLoginRequest()
      } else {
        this.errorResponse.message = FILL_MANDATORY_FIELDS
      }
    },

    resetErrorMessage() {
      this.errorResponse.message = ''
    },

    mandatoryFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0
    },

    sendLoginRequest() {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        sessionStorage.setItem('playerId', this.loginResponse.playerId)
        this.$refs.modalRef.closeModal()
        router.push({name: 'playRoute'})
      }).catch(error => {
        this.errorResponse = error.response.data
        if (this.errorResponse.errorCode !== INCORRECT_CREDENTIALS) {
          router.push({name: 'errorRoute'})
        }
      })
    },
  },
}
</script>