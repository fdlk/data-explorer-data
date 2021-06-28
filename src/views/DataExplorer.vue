<template>
  <div class="dataexplorer">
    <h1>{{ entityTypeId }}</h1>
    <data-table/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Data from '@/components/Data.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'DataExplorer',
  components: { DataTable: Data },
  computed: {
    ...mapGetters('explorer', ['entityTypeId'])
  }
})
</script>
