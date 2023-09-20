<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h class="h-black">AEG OTSAS!</h>
    </template>
    <template #body class="p-modal-long-text">
      <div class="p-modal-long-text">
        Sa ei jõudnud küsimusele vastata. Saad 0 punkti, kuid võid mängu jätkata.
        <div class="padding-10"></div>
      </div>
    </template>
    <template>
      <btn @click="closeModal">SELGE</btn>
    </template>
  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'TimeIsUpModal',
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