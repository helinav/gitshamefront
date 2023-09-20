<template>
  <div class="row justify-content-center mt-5">
    <div class=" col col-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionAnswer',
  data() {
    return {
      questionId: 0,
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

    newSelectableAnswer() {
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