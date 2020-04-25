<template>
  <div class="home">
    <button @click="makeAPI">API-TEST</button>

    <button @click="isModal=!isModal">MODAL SWITCH</button>
    <modal v-if="isModal" @closeModal="isModal=false">
      <template #header>header</template>
      <template #body>body</template>
    </modal>


    <div style="border: 1px solid aquamarine">
      Wpisz produkt:    <input class="form__input" v-model.trim="$v.productForm.name.$model"/>
      Wpisz ilość:<input type="number"/>
      <div class="error" v-if="!$v.productForm.name.required">Field A is required.</div>
      <div class="error" v-if="!$v.productForm.name.minLength">min A is required.</div>

<!--      {{$v.productForm.name.$error}}-->

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { magazineApi } from "../api/magazineApi";
import Modal from "../components/Modal";

import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
    Modal,
    HelloWorld
  },
  validations: {
    productForm: {
      name: {
        required,
        minLength: minLength(4)
      }
    }
  },
  data() {
    return {
      isModal: false,
      productForm: {
        name:'',
        number:0
      }
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
