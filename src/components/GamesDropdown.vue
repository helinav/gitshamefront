<template>
  <div style="display: flex; justify-content: center;">
  <select v-model="selectedGameId" @change="emitSelectedGameId"
          class="form-select" aria-label="Default select example" style="width: 280px; border-radius: 0;">
    <option selected :value="0">Vali mäng</option>
    <option v-for="game in games" :value="game.gameId" :key="game.gameId" >{{ game.name }}</option>
  </select>
    </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'GamesDropdown',
  data() {
    return {
      selectedGameId: 0,
      games: [
        {
          gameId: 0,
          name: ''
        }
      ]
    }
  },
  methods: {

    getGames() {
      this.$http.get("/game")
          .then(response => {
            this.games = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedGameId() {
      this.$emit('event-update-selected-game-id', this.selectedGameId)
    },
  },
  beforeMount() {
    this.getGames()
  }
}
</script>