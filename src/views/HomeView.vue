<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
      </div>
      <div class="row mt-5">
        <p>IGA RAINI ÕPILANE TEAB, ET <span style="color: #19eb81">“JULGE HUNDI RIND ON ... HAAVLEID TÄIS”</span></p>
        <p>GITSHAME MÄNGUD ON LOODUD JULGETELE VALI-IT LÕPETAJATELE.</p>
        <p>TESTI END JA KASVATA ENESEKINDLUST ...</p>
        <p>ÕPI KASVÕI LÄBI HÄBI!</p>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-1">
          <div class="emptyspace"></div>
          <button @click="$router.push({name:'loginRoute'})" type="button" class="btn btn-primary">Alusta</button>
          <div class="emptyspace"></div>
        </div>
      </div>
      <div class="row mt-5">
        <paragraph-2>2023 Vali-It Lend 30 / Autorid: Helina, Rasmus, Kristo / Juhendaja: Rain</paragraph-2>
        <div class="emptyspace"></div>
      </div>
    <div>
      <a href="http://vali-it.ee/">
        <img class="image-link" src="../assets/pictures/vali-it_logo.png" width="80" alt="Vali-It Logo"/>
      </a>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
