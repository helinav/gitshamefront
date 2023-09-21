<template>
  <div v-if="showAnswers">

    <div class="container text-center">
      <div v-for="answer in answers" :key="answer.answerId" class="row justify-content-center">
        <div>
          <h1>Pane õigesse järjekorda</h1>
          <ul class="list-group" id="sortable-list">
            <li class="list-group-item">{{ answer.text }}</li>
            <li class="list-group-item">Item 2</li>
            <li class="list-group-item">Item 3</li>
            <li class="list-group-item">Item 4</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'AnswersSequence',
  data() {
    return {
      playerGameId: 0,
      showAnswers: false,
      answers: [
        {
          answerId: 0,
          text: '',
          sequence: 0,
          isSelected: false
        }
      ]
    }
  },

  methods: {

    sendGetAnswersSequenceRequest(questionId) {
      this.$http.get("/answers/sequence", {
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

  }
}
</script>