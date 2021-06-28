<template>
  <div class="metadata">
    <h1>{{ meta.label }}</h1>
    <span v-if="meta.description">{{ meta.description }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Data',
  props: {
    meta: Object
  }
})
</script>
