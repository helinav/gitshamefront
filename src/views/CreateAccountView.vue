<template>
  <div class="container text-center vh-100">
    <div>
      <img src="../assets/pictures/avaleht_GITBLAME.png" width="900" alt="Logo"/>
    </div>
    <div>
      <h3>Loo uus kasutaja</h3>
    </div>
    <form>
      <div class="mb-3" >
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
      <img src="../assets/pictures/neo.png" height="150" width="150" alt="Neo"/>
      <img src="../assets/pictures/mrrobot.png" height="150" width="150" alt="Mr Robot"/>
      <img src="../assets/pictures/sandra.png" height="150" width="150" alt="Sandra"/>
      <img src="../assets/pictures/hacker.png" height="150" width="150" alt="Hacker"/>
    </div>
    <button type="submit" class="btn btn-primary">Loo uus kasutaja</button>


  </div>
</template>

<script>

</script>
