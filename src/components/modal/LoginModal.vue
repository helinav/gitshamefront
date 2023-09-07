<template>
  <div class="modal-dialog modal-dialog-centered">
    <div>
      <Modal close-button-name="Tagasi" ref="modalRef">

        <template #header>
          Sisse logimine
        </template>

        <template #body>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div>
            <input type="password" class="form-control" placeholder="Parool">
          </div>
        </template>

        <template #footer>
          <button @click="login" type="button" class="btn btn-success">Logi sisse</button>
        </template>
      </Modal>
    </div>
  </div>
</template>


<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import {INCORRECT_CREDENTIALS} from "@/assets/ErrorCode";

export default {
  name: 'LoginModal',
  components: {Modal},
  data() {
    return {
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
    }
  },

  methods: {

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
          router.push({name: 'mainMenuRoute'})
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