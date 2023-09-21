<template>
  <div v-if="typeName === 'textbox'">
    <div class="form-text justify-content-center">
      <div class="input-group">
        <input
            type="text"
            id="text-input"
            v-model="textInput"
        >
      </div>
    </div>

    <div class="row mt-5">
      <div v-show="notAnsweredYet">
        {{questionInfo.answerExplanation}}
        <button @click="nextQuestion">Next One</button>
      </div>
      <div class="col" v-show="!notAnsweredYet">
        <button @click="updateAnswerTextboxInfo" type="button" class="btn btn-primary">Vasta</button>
      </div>
    </div>
  </div>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  name: 'AnswersTextbox',
  props: {
      typeName: String,
      questionInfo: Object,
  },
  data() {
    return {
      textInput: '',
      showAnswers: false,
      playerGameId: Number(useRoute().query.playerGameId),
      answer: {
        answerId: 0,
        text: ''
      },
      textBoxAnswerInfo: {
        answerId: 0,
        text: ''
      },
      answerResponse: {
        isCorrect: false,
        score: 0
      },
      notAnsweredYet: false
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
        this.textBoxAnswerInfo = response.data
        console.log(response.data);
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    updateAnswerTextboxInfo() {
      this.textBoxAnswerInfo.text = this.textInput;

      this.$http.patch("/answer-textbox", this.textBoxAnswerInfo, {
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        this.answerResponse = response.data;
        this.notAnsweredYet = true;
        this.$emit('status-of-competition', this.answerResponse);
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    nextQuestion() {
      this.$emit('next-question');
      this.notAnsweredYet = false;
    },
  }
}
</script>