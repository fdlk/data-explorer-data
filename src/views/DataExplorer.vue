<template>
  <div class="dataexplorer">
    <h1>{{ id }}</h1>
    <data-table/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Data from '@/components/Data.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'DataExplorer',
  components: { DataTable: Data },
  props: {
    id: String
  }
})
</script>
