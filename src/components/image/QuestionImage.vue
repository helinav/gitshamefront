<template>
<div>
    <img :src="imageDataBase64">
</div>
</template>

<script>
export default {
  name: 'QuestionImage',
  props: {
    imageDataBase64: String,
    avatars: [
      {
        imageId: 0,
        imageData: ''
      }
    ],
  }
}
</script>