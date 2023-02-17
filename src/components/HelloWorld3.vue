<template>
  <div class="hello">
    {{ fullName }}
    <button type="submit" @click="updateName()" :value="click">{{ click }}</button>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from "vue";
import {users} from "@/mixins/users";

export default {
  mixins: [users],
  setup() {
    const last_name = ref("reze");
    const fist_name = ref("rezza");

    const fullName = computed(() => {
      return fist_name.value + ' ' + last_name.value;
    });
    watch(fist_name, () => {
      fist_name.value = "Amin";
      last_name.value = "saki";
    });

    watchEffect(fist_name, () => {
      fist_name.value = "";
    });

    function updateName() {
      return fist_name.value = "rez";
    }

    return {fullName, fist_name, last_name, updateName}

  }
}

</script>

<style scoped lang="scss">

</style>
