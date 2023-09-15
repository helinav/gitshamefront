<template>
  <Modal close-button-name="OK" ref="modalRef">
    <template #header>
      <h1>Kuidas mängida?</h1>
    </template>
    <template #body>
      Igas mängus on 10 küsimust või ülesannet. Kõigi nende vastamiseks ja lahendamiseks on aega 60 sekundit. Mida kiiremini vastad seda rohkem punkte teenid. Aga ole tähelepanelik!  Vale vastuse eest saad gitblame-i ja kaotad 1 elu. 3 vale vastuse eest teenid aga "GITSHAME"-i, siis on elud otsas ja sinu mäng lõplikult läbi - Game Over.
      <div class="padding-10"></div>
      Sinu skoori, teenitud gitblame-id ja järgi jäänud küsimuste hulk on mängu ajal alati nähtaval. Pea meeles, et küsimusele vastamiseks ettenähtud aeg hakkab tiksuma
      kohe, kui klikkad PUNASELE nupule "MÄNGI". Lisaks vastusevariantidega küsimustele on mängus ka paar lihtsat kirjutamisülesannet vm.
      <div class="padding-10"></div>
      Iga mängu 5 parimat vastajat saavad esile tõstetud "autahvlil" GITSHAME mängu edetabelis. Head mängimist!
    </template>
    <template>
      <btn @click="closeModal">OK</btn>
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