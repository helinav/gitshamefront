<template>
<div>
  <img :src="imageDataBase64"/>
</div>
</template>

<script>
export default {
  name: 'AvatarImage',
  props: {
    imageDataBase64: String
  }
}
</script>