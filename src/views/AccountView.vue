<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/menu_banner-makeaccount.png" width="250" alt="Logo"/>
    </div>
    <div>
      <h class="h-green"> LOO UUS KASUTAJA</h>
      <div class="padding-25"></div>
      <div class="mb-2">
        <label class="form-label">VALI AVATAR!</label>
        <div>
          <div v-for="avatar in avatars" :key="avatar.avatars">
          <AvatarImage :image-data-base64="avatars" @click=""/>
          </div>
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
    <btn @click="addAccount" type="submit">Loo kasutaja</btn>
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
import AvatarImage from "@/components/AvatarImage.vue";

export default {
  components: {AvatarImage, AlertDanger, AlertSuccess},
  data() {
    return {
      avatars: {
        imageId: 0,
        imageData: ''
      },
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

    setAvatarRequestImageData(imageDataBase64) {
      this.avatars.imageData = imageDataBase64
    },

    setSuccessMessage() {
      this.successMessage = ACCOUNT_ADDED
    },


    addAccount() {
      if (this.mandatoryFieldsAreFilled()) {
        this.sendAddAccountRequest();
      } else {
        this.errorResponse.message = FILL_MANDATORY_FIELDS
      }
    },

    mandatoryFieldsAreFilled() {
      let request = this.userInfo;
      return request.username.length > 0 &&
          request.password.length > 0 &&
          request.email.includes('@') &&
          request.imageId > 0

    },

    sendAddAccountRequest() {
      this.$http.post("/account", {
            params: {
              username: this.userInfo.username,
              password: this.userInfo.password,
              email: this.userInfo.email,
              imageId: this.userInfo.imageId
            }
          }
      ).then(response => {
        this.handleAddAccountSuccessResponse()
      }).catch(error => {

      })
    },

    handleAddAccountSuccessResponse() {
      this.successMessage = ACCOUNT_ADDED
    },






  }

}

</script>

