<template>
<CornerButton @click="executeLogOut"/>
  <div v-if="showAlert" class="alert alert-success" role="alert">
    {{alertMessage}}
  </div>
</template>

<script>
import CornerButton from "@/components/button/CornerButton.vue";
import router from "@/router";

export default {
  name: "PlayView",
  components: {CornerButton},
  data() {
    return {
      showAlert: false,
      alertMessage: "Oled sisse logitud"
    }
  },
  methods: {
    showTempAlert() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    },

    executeLogOut() {
      sessionStorage.clear()
      router.push({name: 'homeRoute'})
    },
  },
  mounted() {
    this.showTempAlert();
  }
}
</script>