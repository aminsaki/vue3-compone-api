<template>
  <div>
      <HelloWorld  :name="name" />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import {ref} from "vue";
const   name = ref("aminsaki")

</script>
