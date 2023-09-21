<template>
  <div>
    <div>
      <div>
        <h4>{{ questionInfo.questionText }}</h4>
        <h5>Strike count: {{ questionInfo.strikeCount }}</h5>
        <QuestionImage :image-data-base64="questionInfo.imageData"/>
        <div></div>
      </div>
    </div>

    <AnswersCheckbox ref="answersCheckboxRef" @activate-show-answer-explanation="showAnswerExplanation"/>

    <AnswersTextbox ref="answersTextboxRef"/>

    <AnswersSequence ref="answersSequenceRef"/>

    <div class="row mt-5">
      <!--      <div v-if="" class="col">ÕIGE VASTUSE SELGITUS: {{ questionInfo.answerExplanation }}</div>-->
    </div>

    <div class="row mt-5">
      <div class="progress row mt-5" role="progressbar" aria-label="Success example" aria-valuenow="10"
           aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-success">Progress: {{ questionInfo.questionNumber }} /
          {{ questionInfo.totalNumberOfQuestions }}
        </div>
      </div>
    </div>


  </div>
</template>
<script>

import router from "@/router";
import {useRoute} from "vue-router";
import QuestionImage from "@/components/image/QuestionImage.vue";
import AnswersCheckbox from "@/components/answer/AnswersCheckbox.vue";
import AnswersTextbox from "@/components/answer/AnswersTextbox.vue";
import AnswersSequence from "@/components/answer/AnswersSequence.vue";

export default {
  name: "PlayGameView",
  components: {AnswersSequence, AnswersTextbox, AnswersCheckbox, QuestionImage},

  data() {
    return {
      playerGameId: Number(useRoute().query.playerGameId),
      answerId: 0,
      questionInfo: {
        questionId: 0,
        questionText: '',
        answerExplanation: '',
        typeName: '',
        imageData: '',
        strikeCount: 0,
        questionNumber: 0,
        totalNumberOfQuestions: 0,
        isGameOver: true
      },

    }
  },

  methods: {

    sendQuestionInfoRequest() {
      this.$http.get("/next-question", {
            params: {
              playerGameId: this.playerGameId,
            }
          }
      ).then(response => {
        this.questionInfo = response.data
        if (this.questionInfo.isGameOver) {
          // todo: mis siis kui mäng on läbi

        } else {
          let questionAnswerType = this.questionInfo.typeName;
          switch (questionAnswerType) {
            case 'checkbox':
              this.$refs.answersCheckboxRef.playerGameId = this.playerGameId
              this.$refs.answersCheckboxRef.sendGetPossibleAnswersMultipleChoiceRequest(this.questionInfo.questionId)
              break

            case 'radio':
              this.$refs.answersCheckboxRef.sendGetPossibleAnswersMultipleChoiceRequest(this.questionInfo.questionId)
              break

            case 'textbox':
              this.$refs.answersCheckboxRef.playerGameId = this.playerGameId
              this.$refs.answersTextboxRef.sendGetPossibleAnswerTextboxRequest(this.questionInfo.questionId)
              break

            case 'sequence':
              this.$refs.answersSequenceRef.playerGameId = this.playerGameId
              this.$refs.answersSequenceRef.sendGetPossibleAnswersSequenceRequest(this.questionInfo.questionId)
              break

          }
        }
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    showAnswerExplanation(answerExplanation) {
      this.questionInfo.answerExplanation = answerExplanation
    },

  },

  mounted() {
    this.sendQuestionInfoRequest()
  }

}
</script>

