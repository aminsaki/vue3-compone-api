<template>
  <div class="hello">

    <slot name="users"/>


    <!--      <slot name="ul" />-->
<!--        {{ name }}-->

<!--        <button type="submit" @click="sendDate()">not</button>-->
    <!--    {{ dataTile }} , {{ dataTileTwo }}-->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['name'],
  inject: ['dataTile', 'dataTileTwo'],
  data() {
  },
  methods: {
    sendDate: function () {
      this.$emit("chlidDate", "sdfsdf")
    }
  }
}

</script>

<style scoped lang="scss">

</style>
