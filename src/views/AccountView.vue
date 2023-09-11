<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="800" alt="Logo"/>
    </div>
    <div>
      <h3>Loo uus kasutaja</h3>
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label">Kasutajanimi</label>
        <input type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Parool</label>
        <input type="password" class="form-control" placeholder="Kirjuta siia tugev salasõna"
               id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">E-maili address</label>
        <input type="email" class="form-control" placeholder="example@example.com" id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
    </form>
    <div class="mb-3">
      <label class="form-label">Vali pilt</label>
      <img src="../assets/pictures/avatar1_hacker.png" width="150" alt="Avatar 1"/>
      <img src="../assets/pictures/avatar2_neo.png" width="150" alt="Avatar 2"/>
      <img src="../assets/pictures/avatar3_hannes.png" width="150" alt="Avatar 3"/>
      <img src="../assets/pictures/avatar4_mrrobot.png" width="150" alt="Avatar 4"/>
      <img src="../assets/pictures/avatar5_bender.png" width="150" alt="Avatar 5"/>
      <img src="../assets/pictures/avatar6_sandra.png" width="150" alt="Avatar 6"/>
    </div>
    <button @click="navigateToPlayView" type="submit" class="btn btn-outline-success">Loo uus kasutaja</button>
  </div>
</template>

<script>

import router from "@/router";

export  default {
  methods: {
    navigateToPlayView(){
      router.push({name: 'playRoute'})
    }

  }
}

</script>

