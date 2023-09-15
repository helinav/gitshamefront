<template>
  <div class="special-container">
    <button class="corner-button"> Logi välja </button>
  </div>
</template>

<script>
export default {
  name: "CornerButton",
};
</script>

<style scoped>
.button-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.corner-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin-bottom: 10px; /* Add margin to separate the two buttons */
}
</style>
