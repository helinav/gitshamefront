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
        <button @click="updateMultipleChoiceAnswerInfo">Vasta</button>
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
      },
    }
  },
  computed: {
    selectedMultipleChoiceAnswers() {
      return this.answers.filter(answer => answer.isSelected)
    },
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

    updateMultipleChoiceAnswerInfo() {
      this.$http.patch("answer/multiple-choice", this.selectedMultipleChoiceAnswers, {
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        this.answerResponse.isCorrect = response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },


  },
}
</script>