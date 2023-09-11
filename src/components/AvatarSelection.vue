<template>
  <div class="avatar-gallery">
    <div class="avatar-row">
      <div v-for="(avatar, index) in avatars.slice(0, 3)" :key="index" :class=" { 'selected-avatar': selectedAvatar === avatar }">
        <img :src="avatar" alt="Avatar" class="avatar rounded" @click="selectAvatar(avatar)"/>
      </div>
    </div>
    <div class="avatar-row">
      <div v-for="(avatar, index) in avatars.slice(3, 6)" :key="index" :class="{ 'selected-avatar': selectedAvatar === avatar }">
        <img :src="avatar" alt="Avatar" class="avatar rounded" @click="selectAvatar(avatar)"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatars: [
        'avatar1.jpg',
        'avatar2.jpg',
        'avatar3.jpg',
        'avatar4.jpg',
        'avatar5.jpg',
        'avatar6.jpg',
      ],
      selectedAvatar: null,
    };
  },
  methods: {
    selectAvatar(avatar) {
      this.selectedAvatar = avatar;
    },
  },
};
</script>
<style scoped>
.avatar-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-row {
  display: flex;
}
.avatar {
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
}
.selected-avatar {
  border: 3px solid #007BFF; /* Add your desired frame style here */
}
</style>