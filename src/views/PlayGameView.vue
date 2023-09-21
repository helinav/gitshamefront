<template>
  <div>
    <div>
      <div>
        <h4>KÜSIMUS JA PILT questionInfost</h4>
        <div>

        </div>
      </div>
    </div>

    <QuestionAnswer>
    <template #body>

    </template>
    </QuestionAnswer>

    <div class="row mt-5">
      <div class="col">PROGRESSIRIBA</div>
      <div class="col">ÕIGE VASTUSE SELGITUS</div>
    </div>
  </div>
</template>
<script>

import router from "@/router";
import {useRoute} from "vue-router";
import QuestionAnswer from "@/components/QuestionAnswer.vue";

export default {
  name: "PlayGameView",
  components: {QuestionAnswer},

  data() {
    return {
      playerGameId: Number(useRoute().query.playerGameId),
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
        const queryParameters = {
          questionId: this.questionInfo.questionId,
          questionText: this.questionInfo.questionText,
          answerExplanation: this.questionInfo.answerExplanation,
          typeName: this.questionInfo.typeName,
          imageData: this.questionInfo.imageData,
          strikeCount: this.questionInfo.strikeCount,
          questionNumber: this.questionInfo.questionNumber,
          totalNumberOfQuestions: this.questionInfo.totalNumberOfQuestions,
        }
        router.push({query: queryParameters})
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

