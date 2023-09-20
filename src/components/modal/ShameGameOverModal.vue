<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h class="h-black">Game over</h>
    </template>
    <template #body class="p-modal-long-text">
      <div class="p-modal-long-text">
        GITSHAME! Sind on 3 korda GITBLAME'itud. Sinu mäng on läbi!
        <div class="padding-10"></div>
      </div>
    </template>
    <template>
      <btn @click="closeModal">LÄHEN VASTAMA</btn>
    </template>
  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'ShameGameOverModal',
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