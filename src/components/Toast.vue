<template>
  <div class="toast">
    <p>{{ message }}</p>
    <button @click="setToast(null)">x</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  props: {
    message: String
  },
  methods: {
    ...mapMutations('explorer', ['setToast'])
  }
})
</script>
