<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
    </div>
    <div>
      <h class="h-green"> Loo uus kasutaja</h>
      <div class="padding-25"></div>
    </div>
    <form>
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
        <label for="exampleInputEmail1" class="form-label">E-MAIL</label>
        <input v-model="this.userInfo.email" type="email" class="form-control narrow-input"
               placeholder="example@example.com" id="exampleInputEmail1"
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

