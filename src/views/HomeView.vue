<template>
  <div>
    <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
    <div class="padding-25"></div>
    <p>IGA RAINI ÕPILANE TEAB, ET <span style="color: #19eb81">“JULGE HUNDI RIND ON ... HAAVLEID TÄIS”</span></p>
    <p>GITSHAME MÄNGUD ON LOODUD JULGETELE VALI-IT LÕPETAJATELE.</p>
    <p>TESTI END JA KASVATA ENESEKINDLUST ...</p>
    <p>ÕPI KASVÕI LÄBI HÄBI!</p>
    <div class="padding-25"></div>
    <btn @click="$router.push({name:'loginRoute'})">Alusta</btn>
    <div class="padding-50"></div>
  </div>
  <p class="p-blue"> "2023 Vali-It Lend 30 / Autorid: Helina, Rasmus, Kristo, ChatGPT / Juhendaja: Rain </p>
  <a href="http://vali-it.ee/" target="_blank">
      <img class="image-link" src="../assets/pictures/vali-it_logo.png" width="80" alt="Vali-It Logo"/>
    </a>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
