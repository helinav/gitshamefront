<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h class="h-black">GITBLAME! VALE VASTUS!</h>
    </template>
    <template #body class="p-modal-long-text">
      <div class="p-modal-long-text">
        Oi ei! Vastasid valesti! Kokku 3 eksimust = GITSHAME ja siis on mäng läbi! Võta ennast kokku, ära enam eksi!
        <div class="padding-10"></div>
      </div>
    </template>
    <template>
      <btn @click="closeModal">LEPIN SELLEGA</btn>
    </template>
  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'WrongAnswerModal',
  components: {Modal},
  router() {
    return router
  },
  methods: {
    closeModal() {
      this.$refs.modalRef.closeModal()
    },
  }


}
</script>