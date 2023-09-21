<template>
  <div v-if="showAnswers">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <div class="form-floating">
            <textarea v-model="answer.text" class="form-control" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Kirjuta vastus</label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <button @click="updateAnswerSequenceInfo" type="button" class="btn btn-primary">Vasta</button>
      </div>
    </div>

  </div>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  name: 'AnswersTextbox',
  data() {
    return {
      showAnswers: false,
      playerGameId: Number(useRoute().query.playerGameId),
      answer: {
        answerId: 0,
        text: ''
      },
      textBoxAnswerInfo: {
        answerId: 0,
        text: ''
      }
    }
  },
  methods: {

    sendGetPossibleAnswerTextboxRequest(questionId) {
      this.$http.get("/possible-answer/textbox", {
            params: {
              questionId: questionId
            }
          }
      ).then(response => {
        this.answer = response.data

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    updateAnswerSequenceInfo() {
      this.$http.post("/answer-textbox", this.textBoxAnswerInfo, {
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        const responseBody = response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>