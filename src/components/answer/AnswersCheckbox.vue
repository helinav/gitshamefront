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

    <div class="row mt-5">
      <div class="col">
        <button @click="updateMultipleChoiceAnswerInfo" type="button" class="btn btn-primary">Vasta</button>
      </div>
    </div>

  </div>
</template>
<script>

import {useRoute} from "vue-router";

export default {
  name: 'AnswersCheckbox',
  data() {
    return {
      showAnswers: false,
      playerGameId: Number(useRoute().query.playerGameId),
      answers: [
        {
          answerId: 0,
          text: '',
          isSelected: false
        }
      ],
      multipleChoiceAnswerInfo: [
        {
          answerId: 0,
          text: '',
          isSelected: false
        }
      ],
      answerResponse: {
        isCorrect: false
      }
    }
  },
  methods: {
    sendGetPossibleAnswersMultipleChoiceRequest(questionId) {
      this.$http.get("/possible-answers/multiple-choice", {
            params: {
              questionId: questionId
            }
          }
      ).then(response => {
        this.answers = response.data
        this.showAnswers = true
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    activateShowAnswerExplanation() {
      this.$emit('activate-show-answer-explanation')
    },

    updateMultipleChoiceAnswerInfo() {
      this.$http.patch("answer/multiple-choice", this.multipleChoiceAnswerInfo, {
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        this.answerResponse.isCorrect = response.data
        this.activateShowAnswerExplanation()
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },


  },
}
</script>