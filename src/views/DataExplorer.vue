<template>
  <div class="dataexplorer container">
    <toaster v-model="toastsModel" />
    <foo v-if="metadata" :meta="metadata"/>
    <spinner v-if="data === undefined || metadata === undefined"/>
    <div v-else>
      <data-table
        v-if="data !== null && metadata !==null"
        tableName="data"
        :idAttribute="metadata.idAttribute"
        :entities = "data.items"
        :columns = "metadata.attributes.filter(attr => attr.visible)"
        @sort = "setSort"
      />
      <pagination v-model="paginationModel"/>
    </div>
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
    ...mapGetters('explorer', ['entityTypeId', 'pagination', 'page', 'size', 'sort']),
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
    ...mapActions('explorer', ['fetchMetadata', 'fetchData']),
    setSort (sort) {
      if (sort !== this.sort?.sortColumnName) {
        const query = { ...this.$route.query, sort }
        this.$router.push({ query })
      } else if (this.sort.isSortOrderReversed) {
        const query = { ...this.$route.query }
        delete query.sort
        this.$router.push({ query })
      } else {
        const query = { ...this.$route.query, sort: `-${sort}` }
        this.$router.push({ query })
      }
    }
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
    },
    sort: function () {
      this.fetchData()
    }
  }
})
</script>
