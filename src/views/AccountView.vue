<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/menu_banner-makeaccount.png" width="250" alt="Logo"/>
      <AlertSuccess :alert-message="successMessage"/>
      <AlertDanger :alert-message="errorResponse.message"/>
    </div>
    <div>
      <h class="h-green"> LOO UUS KASUTAJA</h>
      <div class="padding-25"></div>
      <div class="mb-2">
        <label class="form-label">VALI AVATAR!</label>
        <div class="avatar-container">
          <img
              v-for="avatar in avatars"
              :key="avatar.imageId"
              :src="avatar.imageData"
              :alt="avatar.imageId"
              @click="selectAvatar(avatar)"
              :class="{ selected: avatar === selectedAvatar }"
          />
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
        <div class="padding-10"></div>
        <!--        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
      </div>
    </form>
    <btn @click="addAccount" type="">Loo kasutaja</btn>
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
      avatars: [
        {
          imageId: 0,
          imageData: ''
        }
      ],
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
      },
      selectedAvatar: null
    }
  },

  methods: {
    setAvatarRequestImageData(imageDataBase64) {
      this.avatars.imageData = imageDataBase64
    },

    setSuccessMessage() {
      this.successMessage = ACCOUNT_ADDED
    },

    setEmailErrorMessage() {
      this.errorResponse.errorCode = EMAIL_ALREADY_EXISTS
      this.errorResponse.message = 'Selline emaili aadress on juba süsteemis olemas';
    },

    setUsernameErrorMessage() {
      this.errorResponse.errorCode = USERNAME_ALREADY_EXISTS
      this.errorResponse.message = 'Selline kasutajanimi on süsteemis juba olemas'
    },

    selectAvatar(avatar) {
      this.selectedAvatar = avatar
      this.userInfo.imageId = avatar.imageId
    },

    resetSuccessMessage() {
      this.successMessage = ''
    },

    resetErrorMessage() {
      this.errorResponse.message = ''
    },

    resetAllFields() {
      this.userInfo.username = '',
      this.userInfo.password = '',
      this.userInfo.email = '',
      this.userInfo.imageId = ''
    },

    addAccount() {
      this.resetSuccessMessage()
      this.resetErrorMessage()
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
      this.$http.post("/account", this.userInfo, {
            params: {
              username: this.userInfo.username,
              password: this.userInfo.password,
              email: this.userInfo.email,
              imageId: this.userInfo.imageId
            }
          }
      ).then(response => {
        this.handleAddAccountSuccessResponse()
        this.resetAllFields()
      }).catch(error => {
        this.handleAddAccountErrorResponse()
      })
    },

    handleAddAccountSuccessResponse() {
      this.successMessage = ACCOUNT_ADDED
    },

    handleAddAccountErrorResponse() {
      if (this.errorResponse.errorCode === EMAIL_ALREADY_EXISTS) {
        this.setEmailErrorMessage();
      } else {
        this.setUsernameErrorMessage();
      }
    },

    getAvatars() {
      this.$http.get("/account")
          .then(response => {
            this.avatars = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

  },
  beforeMount() {
    this.getAvatars()
    this.resetAllFields()
  }

}

</script>

