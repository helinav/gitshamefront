<template>
  <div class="button-container">
    <button class="corner-button">Logi välja</button>
  </div>
</template>

<script>
export default {
  name: "CornerButton",
};
</script>

<style scoped>
.button-container {
  position: relative; /* Create a positioning context for the absolute positioning of the button */
  width: 100%; /* Ensure the container takes up the full width of the page */
  height: 100%; /* Ensure the container takes up the full height of the page */
}

.corner-button {
  position: absolute;
  bottom: 10px; /* Adjust as needed to position the button at the desired vertical distance from the corner */
  right: 10px; /* Adjust as needed to position the button at the desired horizontal distance from the corner */
}
</style>
