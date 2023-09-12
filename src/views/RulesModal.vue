<template>
  <Modal close-button-name="Tagasi" ref="modalRef">
    <template #header>
      <h1>Reeglid</h1>
    </template>
    <template #body>
      siia tulevad reeglid
    </template>
    <template #footer>
      <button @click="closeModal" type="button" class="btn btn-success">Sain aru</button>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'RulesModal',
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