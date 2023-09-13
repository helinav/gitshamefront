<template>
  <CornerButton @click="executeLogOut"/>
  <div>
    <AlertSuccess :alert-message="successMessage"/>
    <div class="text-center">
      <h1>Lisa avatar</h1>
    </div>
    <ImageInput @event-emit-base64="setAvatarRequestImageData"/>
    <div class="justify-content-center mt-5">
      <button @event-update-success-message="setSuccessMessage" @click="addAvatar">Lisa pilt</button>
    </div>
    <div class="justify-content-center">
      <button @click="$router.push({name: 'playRoute'})">Tagasi</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ImageInput from "@/components/ImageInput.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {AVATAR_ADDED} from "@/assets/script/AlertMessage";
import CornerButton from "@/components/button/CornerButton.vue";
import router from "@/router";

export default defineComponent({
  components: {CornerButton, ImageInput, AlertSuccess},
  data() {
    return {
      successMessage: '',
      avatarRequest: {
        imageData: '',
        status: '',
        type: ''
      }
    }
  },

  methods: {
    setAvatarRequestImageData(imageDataBase64) {
      this.avatarRequest.imageData = imageDataBase64
    },

    setSuccessMessage(successMessage) {
      this.successMessage = successMessage
    },

    addAvatar() {
      this.sendAvatarRequest()
    },

    sendAvatarRequest() {
      this.$http.post("/avatar", this.avatarRequest
      ).then(response => {
        this.handleAvatarRequestSuccessResponse();
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    handleAvatarRequestSuccessResponse() {
      this.successMessage = AVATAR_ADDED
    },

    executeLogOut() {
      sessionStorage.clear()
      router.push({name: 'homeRoute'})
    }
  }
})
</script>