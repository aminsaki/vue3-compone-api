<template>
  <div>
        <HelloWorld :name="name" @chlidDate="showDate()"/>

    <HelloWorld>
      <!--      <template v-slot:ul>-->
      <!--        <ul>-->
      <!--          <li>a</li>-->
      <!--          <li>b</li>-->
      <!--          <li>c</li>-->
      <!--        </ul>-->
      <!--      </template>-->
      <template v-slot:users>
         <ul>
           <li>{{users.name}}</li>
           <li>{{users.family}}</li>
           <li>{{users.avg}}</li>
         </ul>
      </template>
    </HelloWorld>

  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {users} from "@/mixins/users"
export default {
  components: {
    HelloWorld,
  },
  mixins:[users],
  provide: {
    dataTile: "test one",
    dataTileTwo: "test tow"

  },

  methods: {
    showDate: function () {
      alert("Sdfsdf");
    }
  }
}
</script>
