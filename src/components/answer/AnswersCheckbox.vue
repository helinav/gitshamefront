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
      <div v-show="notAnsweredYet">
        {{questionInfo.answerExplanation}}
        <button @click="nextQuestion">Next One</button>
      </div>
      <div class="col" v-show="!notAnsweredYet">
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
        isCorrect: false,
        score: 0
      },
      notAnsweredYet: false,
    }
  },
  props: {
    questionInfo: Object,
  },
  computed: {
    selectedMultipleChoiceAnswers() {
      console.log("computed");
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
        this.$emit('answer-submitted')
        this.answerResponse = response.data
        this.notAnsweredYet = true
        this.$emit('status-of-competition', this.answerResponse);
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    nextQuestion() {
      this.$emit('next-question');
      this.notAnsweredYet = false;
    },

  },
}
</script>