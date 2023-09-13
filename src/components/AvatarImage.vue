<template>
<img :src="imageDataBase64" class="img-thumbnail">
</template>

<script>
export default {
  name: 'AvatarImage',
  props: {
    imageDataBase64: String
  }
}
</script>