<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h class="h-black">Mis on sinu vastus?</h>
    </template>
    <template #body class="p-modal-long-text">
      <div class="p-modal-long-text">
        Sa pole ju midagi vastanud. Kõigepealt vasta ja alles siis klikka nupule "VASTA".
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
  name: 'AnswerMissingErrorModal',
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