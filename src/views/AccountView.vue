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
        <input v-model="this.userInfo.username" type="text" class="form-control" placeholder="Kasutajanimi"
               aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Parool</label>
        <input v-model="this.userInfo.password" type="password" class="form-control"
               placeholder="Kirjuta siia tugev salasõna"
               id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">E-maili address</label>
        <input v-model="this.userInfo.email" type="email" class="form-control" placeholder="example@example.com"
               id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
    </form>
    <div class="mb-3">
      <AvatarImage :image-data-base64="imageDataFromDatabase"/>
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
      imageDataFromDatabase: '',
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
    }
  },
}

</script>

