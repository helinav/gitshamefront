<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
    </div>
    <div>
      <h3>Loo uus kasutaja</h3>
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label">Kasutajanimi</label>
        <input v-model="this.userInfo.username" type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Parool</label>
        <input v-model="this.userInfo.password" type="password" class="form-control" placeholder="Kirjuta siia tugev salasõna"
               id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">E-maili address</label>
        <input v-model="this.userInfo.email" type="email" class="form-control" placeholder="example@example.com" id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
    </form>
    <div class="mb-3">
      <label class="form-label">Vali pilt</label>
      <img src="../assets/pictures/avatar1_hacker.png" width="150" alt="Avatar 1"/>
      <img src="../assets/pictures/avatar2_neo.png" width="150" alt="Avatar 2"/>
      <img src="../assets/pictures/avatar3_hannes.png" width="150" alt="Avatar 3"/>
      <img src="../assets/pictures/avatar4_mrrobot.png" width="150" alt="Avatar 4"/>
      <img src="../assets/pictures/avatar5_bender.png" width="150" alt="Avatar 5"/>
      <img src="../assets/pictures/avatar6_sandra.png" width="150" alt="Avatar 6"/>
    </div>
    <button @click="" type="submit" class="btn btn-outline-success">Loo uus kasutaja</button>
    <AlertSuccess :alert-message="successMessage"/>
    <AlertDanger :alert-message="errorResponse.message"/>
  </div>
</template>

<script>

import router from "@/router";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {EMAIL_ALREADY_EXISTS, USERNAME_ALREADY_EXISTS} from "@/assets/script/ErrorCode";
import {ACCOUNT_ADDED, FILL_MANDATORY_FIELDS} from "@/assets/script/AlertMessage";

export default {
  components: {AlertDanger, AlertSuccess},
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
        email: '',
        imageId: 0
      },
      successMessage: '',
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    setUsername(newUsername) {
      this.userInfo.username = newUsername
    },

    setPassword(newPassword) {
      this.userInfo.password = newPassword
    },

    setEmail(newEmail) {
      this.userInfo.email = newEmail
    },

    setImageId(newImageId) {
      this.userInfo.imageId = newImageId
    },

    createAccount() {
      this.setUsername()
      this.setPassword()
      this.setEmail()
      this.setImageId()
      if (this.mandatoryFieldsAreFilled()) {
        this.addAccountInfo()
      } else {
        this.errorResponse.message = FILL_MANDATORY_FIELDS
      }
    },

    addAccountInfo() {
        this.$http.post("/account", this.userInfo
        ).then(response => {
          this.handleSuccessResponse()
        }).catch(error => {
          this.handleErrorResponse(error)
        })
    },

    mandatoryFieldsAreFilled() {
      let request = this.userInfo;
      return request.username.length > 0 &&
          request.password.length > 0 &&
          request.email.includes('@') &&
          request.imageId
    },

    handleSuccessResponse() {
      this.successMessage = ACCOUNT_ADDED
    },

    handleErrorResponse(error) {
      if (error.response.data.errorCode === USERNAME_ALREADY_EXISTS ||
          error.response.data.errorCode === EMAIL_ALREADY_EXISTS ) {
        this.errorResponse.message = error.response.data.message;
        return;
      }
      router.push({name: 'errorRoute'});
    }
  }

}

</script>

