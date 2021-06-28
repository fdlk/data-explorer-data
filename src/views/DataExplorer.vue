<template>
  <div class="dataexplorer">
    <toaster v-model="toastsModel" />
    <spinner v-if="metadata === undefined"/>
    <foo v-else-if="metadata !== null" :meta="metadata"/>
    <spinner v-if="data === undefined || metadata === undefined"/>
    <data-table
      v-else-if="data !== null && metadata !==null"
      :idAttribute="metadata.idAttribute"
      :entities = "data.items"
      :columns = "metadata.attributes"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Metadata from '@/components/Metadata.vue'
import Spinner from '@/components/Spinner.vue'
import { Table, Toaster } from '@molgenis-ui/components-library/dist/components-library.esm'

export default Vue.extend({
  name: 'DataExplorer',
  components: { DataTable: Table, Foo: Metadata, Spinner, Toaster },
  computed: {
    ...mapState('explorer', ['metadata', 'toasts', 'data']),
    ...mapGetters('explorer', ['entityTypeId']),
    toastsModel: {
      get () { return this.toasts },
      set (value) { this.setToasts(value) }
    }
  },
  methods: {
    ...mapMutations('explorer', ['setToasts']),
    ...mapActions('explorer', ['fetchMetadata', 'fetchData'])
  },
  watch: {
    entityTypeId: {
      immediate: true,
      handler () {
        this.fetchMetadata()
        this.fetchData()
      }
    }
  }
})
</script>
