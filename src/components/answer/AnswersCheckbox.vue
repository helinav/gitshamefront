<template>
  <div v-if="showAnswers">

    <div class="container text-center">
      <div v-for="answer in answers" :key="answer.answerId" class="row justify-content-center">
        <div class="col">
          <div class="form-check">
            <input v-model="answer.isSelected" class="form-check-input" type="checkbox">
            <label class="form-check-label">
              {{ answer.text }}
            </label>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'AnswersCheckbox',
  data() {
    return {
      showAnswers: false,
      playerGameId: 0,
      answers: [
        {
          answerId: 0,
          text: '',
          isSelected: false
        }
      ]
    }
  },
  methods: {
    sendGetAnswersSelectRequest(questionId) {
      this.$http.get("/answers/select", {
            params: {
              questionId: questionId
            }
          }
      ).then(response => {
        this.answers = response.data
        this.showAnswers = true
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },


  },
}
</script>