<template>
  <Modal close-button-name="Tagasi" ref="modalRef">
    <template #header>
      <h1>Kuidas mäng käib?</h1>
    </template>
    <template #body>
      Igas mängus on 10 küsimust. Kõigile küsimustle on vastamiseks aega max 60 sekundit. Mida kiiremini vastad seda rohkem punkte teenid. Aga ole tähelepanelik!
      Vale vastuse eest saad gitblame-i ja kaotad 1 elu. 3 vale vastuse eest teenid "GITSHAME"-i, siis on elud otsas ja sinu mäng lõplikult läbi - Game Over.

      Sinu skoori, järele jäänud küsimuste ja teenitud gitblame-ide hulk, on mängu ajal alati nähtaval.
      Pea meeles, et küsimuseks vastamiseks ettenähtud aeg hakkab jooksma, kohe kui klikkad nupule "Järgmine küsimus".

      Mängus on 3 tüüpi küsimusi. Kui vastusevariantidega küsimusele võib õigeid vastuseid olla rohkem kui 1, siis on seda ka küsimuses mainitud. Lisaks on veel


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