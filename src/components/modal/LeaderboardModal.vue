<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h class="h-black">PARIMAD MÄNGIJAD!</h>
    </template>
    <template #body class="p-modal-long-text">
      <div class="">
<!--        template hetkel-->
        <table class="table">
          <thead>
          <tr>
            <th scope="col">KOHT</th>
            <th scope="col">KASUTAJA</th>
            <th scope="col">PUNKTID</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>helina</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>rasmus</td>
            <td>400</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>kristo</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>...</td>
            <td>...</td>
          </tr>
          </tbody>
        </table>
        <div class="padding-10"></div>
      </div>
    </template>
    <template>
      <btn @click="closeModal">APLAUS</btn>
    </template>
  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'LeaderboardModal',
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