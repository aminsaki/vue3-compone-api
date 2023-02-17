<template>
  <div class="hello">
    {{users.name}}
     <br>
    {{ count }}
    <input type="submit" @click="increment" :value="Clickincrement">

    {{ name }} || {{ obj }}
    <input type="submit" @click="updateName" :value="click">
  </div>
</template>

<script>
import {ChnameName, useIncrement} from "@/composition/useIncrement";
import {users} from "@/mixins/users";

export default {
  mixins:[users],
  setup() {
    const {count, increment} = useIncrement()
    const {name, updateName} = ChnameName("rsodmfisaodfsin")

    // const name = ref("amisnaki");
    // const obj = reactive({
    //   a: 'a101.',
    //   b: "B",
    //   c: "REZ"
    // });
    //
    // function updateName() {
    //   return  obj.c="amin";
    // }

    // return {name, obj ,  updateName};
    return {
      count, increment, name, updateName
    }
  }
}

</script>

<style scoped lang="scss">

</style>
