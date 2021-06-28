<template>
  <div class="dataexplorer container">
    <toaster v-model="toastsModel" />
    <spinner v-if="metadata === undefined"/>
    <foo v-else-if="metadata !== null" :meta="metadata"/>
    <spinner v-if="data === undefined || metadata === undefined"/>
    <data-table
      v-else-if="data !== null && metadata !==null"
      tableName="data"
      :idAttribute="metadata.idAttribute"
      :entities = "data.items"
      :columns = "metadata.attributes.filter(attr => attr.visible)"
    />
    <pagination v-model="paginationModel"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Metadata from '@/components/Metadata.vue'
import Spinner from '@/components/Spinner.vue'
import { Table, Toaster, Pagination } from '@molgenis-ui/components-library/dist/components-library.esm'

export default Vue.extend({
  name: 'DataExplorer',
  components: { DataTable: Table, Foo: Metadata, Spinner, Toaster, Pagination },
  computed: {
    ...mapState('explorer', ['metadata', 'toasts', 'data']),
    ...mapGetters('explorer', ['entityTypeId', 'pagination', 'page', 'size']),
    toastsModel: {
      get () { return this.toasts },
      set (value) { this.setToasts(value) }
    },
    paginationModel: {
      get () { return this.pagination },
      set (pagination) {
        if (this.$route.query.size !== `${pagination.size}` || this.$route.query.page !== `${pagination.page}`) {
          const query = { ...this.$route.query, size: pagination.size, page: pagination.page }
          this.$router.push({ query })
        }
      }
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
    },
    page: function () {
      this.fetchData()
    },
    size: function () {
      this.fetchData()
    }
  }
})
</script>
