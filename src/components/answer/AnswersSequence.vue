<template>
  <div v-if="showAnswers">

    <div class="container text-center">
      <div v-for="answer in answers" :key="answer.answerId" class="row justify-content-center">
        <div>
          <h1>Pane õigesse järjekorda</h1>
          <ul class="list-group" id="sortable-list">
            <li class="list-group-item">
            <input type="number" v-model="answer.sequence" min="1">
            {{ answer.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div v-show="notAnsweredYet">
        {{questionInfo.answerExplanation}}
        <button @click="nextQuestion">Next One</button>
      </div>
      <div class="col" v-show="!notAnsweredYet">
        <button @click="updateSequenceTypeAnswerInfo" type="button" class="btn btn-primary">Vasta</button>
      </div>
    </div>

  </div>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  name: 'AnswersSequence',
  data() {
    return {
      playerGameId: Number(useRoute().query.playerGameId),
      showAnswers: false,
      answers: [
        {
          answerId: 0,
          text: '',
          sequence: 0,
          isSelected: false
        }
      ],
      sequenceTypeAnswerInfo:[
        {
          answerId: 0,
          text: '',
          sequence: 0,
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
  methods: {
    sendGetPossibleAnswersSequenceRequest(questionId) {
      console.log("sendGetPossibleAnswersSequenceRequest before");

      this.$http.get("/possible-answers/sequence", {
            params: {
              questionId: questionId
            }
          }
      ).then(response => {
        console.log("sendGetPossibleAnswersSequenceRequest response before");
        this.answers = response.data
        this.showAnswers = true
        console.log("sendGetPossibleAnswersSequenceRequest response after");

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
      console.log("sendGetPossibleAnswersSequenceRequest after");
    },

    updateSequenceTypeAnswerInfo() {
      console.log("updateSequenceTypeAnswerInfo before");
      console.log("answers | ", this.answers);
      this.$http.patch("/answer/sequence", this.answers,{
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        console.log("updateSequenceTypeAnswerInfo response");

        this.answerResponse = response.data
        this.notAnsweredYet = true
        this.$emit('status-of-competition', this.answerResponse);

      }).catch(error => {
        console.log("updateSequenceTypeAnswerInfo error");

        const errorResponseBody = error.response.data
      })
      console.log("updateSequenceTypeAnswerInfo after");


    },
    nextQuestion() {
      this.$emit('next-question');
      this.notAnsweredYet = false;
    },

  }
}
</script>