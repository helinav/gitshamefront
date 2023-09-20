<template>
  <div class="row justify-content-center mt-5">

    <div class="col-3">
      <slot name="body">
        Vastusevariandid vastavalt typeName'ile
      </slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'QuestionAnswer',
  data() {
    return {
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
      selectResponse: [
        {
          answerId: 0,
          text: '',
          isSelected: true
        }
      ],
      textBoxResponse: {
        answerId: 0,
        text: ''
      },
      sequenceResponse: [
        {
          answerId: 0,
          text: '',
          sequence: 0,
          isSelected: true
        }
      ]
    }
  },

  methods: {

    showQuestionAnswers() {
      if (this.questionInfo.typeName === 'radio' || this.questionInfo.typeName === 'checkbox') {
        this.newSelectAnswer()
      } else if (this.questionInfo.typeName === 'textbox') {
        this.newTextBoxAnswer();
      } else {
        this.newSequenceAnswer()
      }
    },

    newSelectAnswer() {
      this.$http.get("/answers/select", {
            params: {
              questionId: this.questionId
            }
          }
      ).then(response => {
        this.selectResponse = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    newTextBoxAnswer() {
      this.$http.get("/answers/textbox", {
            params: {
              questionId: this.questionId
            }
          }
      ).then(response => {
        this.textBoxResponse = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    newSequenceAnswer() {
      this.$http.get("/answers/sequence", {
            params: {
              questionId: this.questionId
            }
          }
      ).then(response => {
        this.sequenceResponse = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>