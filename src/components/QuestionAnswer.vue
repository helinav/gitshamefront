<template>
  <div class="row justify-content-center mt-5">

    <div class="col-3">
      <slot name="body">
        Vastusevariandid vastavalt typeName'ile
        <div v-if="questionInfo.typeName === 'radio'">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1"></label>
          </div>
        </div>

        <div v-else-if="questionInfo.typeName === 'checkbox'">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Vastus
            </label>
          </div>
        </div>

        <div v-else-if="questionInfo.typeName === 'textbox'">
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Kirjuta vastus</label>
          </div>
        </div>

        <div v-else-if="questionInfo.typeName === 'sequence'">
          <div class="container">
            <h1>Pane õigesse järjekorda</h1>
            <ul class="list-group" id="sortable-list">
              <li class="list-group-item">Item 1</li>
              <li class="list-group-item">Item 2</li>
              <li class="list-group-item">Item 3</li>
              <li class="list-group-item">Item 4</li>
            </ul>
          </div>
        </div>
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
              questionId: this.questionInfo.questionId
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
              questionId: this.questionInfo.questionId
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
              questionId: this.questionInfo.questionId
            }
          }
      ).then(response => {
        this.sequenceResponse = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  },

  mounted() {
    this.showQuestionAnswers()
  }
}
</script>