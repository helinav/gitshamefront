<template>
  <div v-if="isOpen" class="modal-dialog modal-dialog-centered">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeLoginModal">Tagasi</button>
          <button type="button" class="btn btn-primary" @click="closeLoginModal">Logi sisse</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    openLoginModal() {
      this.isOpen = true
    },
    closeLoginModal() {
      this.isOpen = false
    },
  }
}
</script>