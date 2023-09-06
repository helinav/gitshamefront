<template>
  <div class="container text-center vh-100">
    <div class="col">
      <div class="row">
        <img src="../assets/pictures/avaleht_GITBLAME.png" width="900" alt="Logo"/>
      </div>
      <div class="row mt-2">
        <p>IGA RAINI ÕPILANE TEAB, ET “JULGE HUNDI RIND ON ... HAAVLEID TÄIS”</p>
        <p>GITSHAME MÄNGUD ON LOODUD JULGETELE VALI IT LÕPETAJATELE.</p>
        <p>TESTI END JA KASVATA ENESEKINDLUST ...</p>
        <p>ÕPI KASVÕI LÄBI HÄBI!</p>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-1">
          <button @click="$router.push({name:'loginRoute'})" type="button" class="btn btn-primary">Alusta</button>
        </div>
      </div>
      <div class="row mt-5">
        <p>2023 Vali-It Lend 30 / Autorid: Helina, Rasmus, Kristo / Juhendaja: Rain</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
