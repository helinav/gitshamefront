<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/menu_banner-makeaccount.png" width="250" alt="Logo" />
    </div>
    <div>
      <h class="h-green"> LOO UUS KASUTAJA</h>
      <div class="padding-25"></div>
      <div class="mb-2">
        <label class="form-label">VALI AVATAR! </label>
        <div class="avatar-container">
          <img src="../assets/pictures/avatar1_hacker.png" alt="Avatar 1" @click="selectAvatar('avatar1')" />
          <img src="../assets/pictures/avatar2_neo.png" alt="Avatar 2" @click="selectAvatar('avatar2')" />
          <img src="../assets/pictures/avatar3_hannes.png" alt="Avatar 3" @click="selectAvatar('avatar3')" />
          <img src="../assets/pictures/avatar4_mrrobot.png" alt="Avatar 4" @click="selectAvatar('avatar4')" />
          <img src="../assets/pictures/avatar5_bender.png" alt="Avatar 5" @click="selectAvatar('avatar5')" />
          <img src="../assets/pictures/avatar6_sandra.png" alt="Avatar 6" @click="selectAvatar('avatar6')" />
        </div>
      </div>
    </div>
    <form>
      <div class="padding-10"></div>
      <div class="mb-2">
        <label for="exampleInputUsername" class="form-label">KASUTAJANIMI</label>
        <input v-model="this.userInfo.username" type="text" class="form-control narrow-input" placeholder="Kasutajanimi"
               aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">PAROOL</label>
        <input v-model="this.userInfo.password" type="password" class="form-control narrow-input"
               placeholder="Kirjuta siia tugev salasõna"
               id="exampleInputPassword1">
      </div>
      <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">SINU E-MAIL</label>
        <input v-model="this.userInfo.email" type="email" class="form-control narrow-input"
               placeholder="example@example.com" id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
    </form>
    <btn @click="" type="submit">Loo kasutaja</btn>
    <AlertSuccess :alert-message="successMessage" />
    <AlertDanger :alert-message="errorResponse.message" />
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

    getUserInfo() {
      this.$http.get("/account", {
            params: {
              username: this.username,
              password: this.password,
              email: this.email,
              imageId: this.imageId
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        this.userInfo = response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },

    mandatoryFieldsAreFilled() {
      let request = this.userInfo;
      return request.username.length > 0 &&
          request.password.length > 0 &&
          reque
    },

    addAccount() {

    },


  }

}

</script>

