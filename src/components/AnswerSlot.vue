<template>
  <div class="row justify-content-center mt-5">
    <div class=" col col-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnswerSlot'
}
</script>