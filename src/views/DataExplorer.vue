<template>
  <div class="dataexplorer">
    <toast v-if="toast" v-bind="toast"/>
    <spinner v-if="metadata === undefined"/>
    <foo v-else-if="metadata !== null" :meta="metadata"/>
    <data-table/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import Data from '@/components/Data.vue'
import Metadata from '@/components/Metadata.vue'
import Spinner from '@/components/Spinner.vue'
import Toast from '@/components/Toast.vue'

export default Vue.extend({
  name: 'DataExplorer',
  components: { DataTable: Data, Foo: Metadata, Spinner, Toast },
  computed: {
    ...mapState('explorer', ['metadata', 'toast']),
    ...mapGetters('explorer', ['entityTypeId'])
  },
  methods: {
    ...mapActions('explorer', ['fetchMetadata'])
  },
  watch: {
    entityTypeId: {
      immediate: true,
      handler (value) {
        this.fetchMetadata(value)
      }
    }
  }
})
</script>
