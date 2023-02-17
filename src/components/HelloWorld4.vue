<template>
  <div class="hello">
    {{ counts }}
  </div>
</template>

<script>
import {users} from "@/mixins/users";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  mixins: [users],
  setup() {
    const store = useStore();

    const counts = computed(function () {
        console.log(store.state.count);
      return store.state.count;
    })

    return {counts}
  }
}

</script>

<style scoped lang="scss">

</style>
