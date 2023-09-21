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
      <div class="col">
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
      ]
    }
  },

  methods: {

    sendGetPossibleAnswersSequenceRequest(questionId) {
      this.$http.get("/possible-answers/sequence", {
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

    updateSequenceTypeAnswerInfo() {
      this.$http.patch("/answer/sequence", this.sequenceTypeAnswerInfo, {
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