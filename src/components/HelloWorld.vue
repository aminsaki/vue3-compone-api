<template>
  <div class="hello">
    <!--    {{ props.name }} {{text}}-->
    <button @click="increment">{{ count }}</button>

  </div>
</template>

<script setup>
import { $ref } from "vue/macros";

let count = $ref(0)

console.log(count)

function increment() {
  count++
}

// import {defineProps, } from 'vue';
// import {users} from "@/mixins/users";
// const  props = defineProps(['name'])
</script>
<style scoped lang="scss">
</style>
