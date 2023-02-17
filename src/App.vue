<template>
  <div>
    <button type="submit" @click="color = color ==='red' ? 'green' :  'red' "> color is: {{ color }}</button>

  </div>
</template>

<script setup>
import {ref} from "vue";

const color = ref("red")
</script>
<style scoped>
button {
  background: v-bind(color)
}
</style>
