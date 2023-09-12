<template>
  <div class="text-center">
    <h1>Lisa uus mäng</h1>
  </div>
  <div class="input-group justify-content-center mb-3">
    <input type="text" class="form-control w-25" placeholder="Kirjuta mängu nimi" aria-label="Mängu nimi" aria-describedby="basic-addon1">
  </div>
  <div @click="">
    <button class="btn btn-outline-success">Lisa mäng</button>
  </div>
</template>

<script>
export default {
  name: 'GameView'
}
</script>