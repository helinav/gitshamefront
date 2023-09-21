<template>
  <Modal close-button-name="APLAUS" ref="modalRef">
    <template #header>
      <h class="h-black">Parimad mängijad!</h>
    </template>
    <template #body>
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
            <th scope="row">1st</th>
            <td>helina</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">2st</th>
            <td>rasmus</td>
            <td>400</td>
          </tr>
          <tr>
            <th scope="row">3st</th>
            <td>kristo</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">4st</th>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">5st</th>
            <td>...</td>
            <td>...</td>
          </tr>
          </tbody>
        </table>
        <div class="padding-10"></div>
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