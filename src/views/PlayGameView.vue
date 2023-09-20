<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          KüSIMUS + PILT
          <QuestionImage/>
        </div>
        <div class="col">
          <QuestionAnswer/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import QuestionAnswer from "@/components/slot/QuestionAnswer.vue";
import QuestionImage from "@/components/slot/QuestionImage.vue";
import router from "@/router";
import {useRoute} from "vue-router";

export default {
  name: "PlayGameView",
  components: {QuestionAnswer, QuestionImage},
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
        totalNumberOfQuestions: 0
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
        this.questionInfo  = response.data
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

