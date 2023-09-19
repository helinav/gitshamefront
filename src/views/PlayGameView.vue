<template>
  <AnswerSlot/>
</template>
<script>
import AnswerSlot from "@/components/AnswerSlot.vue";

export default {
  name: "PlayGameView",
  components: {AnswerSlot},
  data() {
    return {
      playerGameId: 0,
      questionInfo: {
        questionId: 0,
        questionText: '',
        answerExplanation: '',
        typeName: '',
        imageData: '',
        strikeCount: 0,
        questionNumber: 0,
        totalNumberOfQuestions: 0
      }
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
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },

  mounted() {
    this.sendQuestionInfoRequest()
  }
}
</script>

