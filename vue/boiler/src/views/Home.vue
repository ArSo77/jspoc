<template>
  <div class="home">
    <button @click="makeAPI">API-TEST</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { magazineApi } from "../api/magazineApi";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      test: 123
    }
  },
  methods: {
    makeAPI() {
      console.log("makeAPI")
      console.log(magazineApi.getProducts().catch(er => {
        console.log("----------", er)
      }))
    }

  }
}
</script>
