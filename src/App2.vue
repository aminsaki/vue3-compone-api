<template>
  <div>
    <HelloWorld/>
    <button type="submit" @click="increment">increment</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {useStore} from "vuex";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();

    function increment() {
      store.dispatch('AddIncrement')
    }


    return {increment}
  }

}
</script>
