<template>
  <div v-show="questionInfo.strikeCount > 2">
    <ShameGameOverModal ref="shameGameOpenModalRef"></ShameGameOverModal>
  </div>
  <div v-show="questionInfo.strikeCount < 3">
    <div v-if="questionInfo.isGameOver = true">
      <h5>Sinu skoor:{{ answerResponse.score }}</h5>
      <button @click="$router.push({name:'playRoute'})">Tagasi mängu valima</button>
    </div>
    <div>
      <div>
        <h4>{{ questionInfo.questionText }}</h4>
        <h5>GitBlame: {{ questionInfo.strikeCount }}</h5>
        <QuestionImage :image-data-base64="questionInfo.imageData"/>
      </div>
    </div>
    <div v-show="questionInfo.typeName==='radio' || questionInfo.typeName==='checkbox'">
      <AnswersCheckbox ref="answersCheckboxRef" @status-of-competition="syncOfDataResponse"
                       :question-info="questionInfo" @next-question="sendQuestionInfoRequest"/>
    </div>
    <div v-show="questionInfo.typeName==='textbox'">
      <AnswersTextbox ref="answersTextboxRef" @status-of-competition="syncOfDataResponse"
                      :type-name="questionInfo.typeName" :question-info="questionInfo"
                      @next-question="sendQuestionInfoRequest"/>
    </div>
    <div v-show="questionInfo.typeName==='sequence'">
      <AnswersSequence ref="answersSequenceRef" @status-of-competition="syncOfDataResponse"
                       :question-info="questionInfo" @next-question="sendQuestionInfoRequest"/>
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
import {routerKey, useRoute} from "vue-router";
import QuestionImage from "@/components/image/QuestionImage.vue";
import AnswersCheckbox from "@/components/answer/AnswersCheckbox.vue";
import AnswersTextbox from "@/components/answer/AnswersTextbox.vue";
import AnswersSequence from "@/components/answer/AnswersSequence.vue";
import ShameGameOverModal from "@/components/modal/ShameGameOverModal.vue";

export default {
  name: "PlayGameView",
  computed: {
    routerKey() {
      return routerKey
    }
  },
  components: {ShameGameOverModal, AnswersSequence, AnswersTextbox, AnswersCheckbox, QuestionImage},

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
      answerResponse: {
        isCorrect: false,
        score: 0
      },
    }
  },
  watch: {
    'questionInfo.strikeCount'(newVal) {
      if (newVal > 2) {
        this.openModal();
      }
    }
    },

  methods: {
    openModal() {
      this.$refs.shameGameOpenModalRef.$refs.modalRef.openModal()
    },
    syncOfDataResponse(response) {
      this.answerResponse = response;
    },
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
          this.isGameOver = true

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

  },

  mounted() {
    this.sendQuestionInfoRequest()
  }

}
</script>

