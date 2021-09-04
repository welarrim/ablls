<template>
  <el-table
    v-loading="loading"
    :data="evaluations"
    :default-sort="{prop: 'date', order: 'ascending'}"
  >
    <el-table-column
      prop="date"
      :label="$t('date')"
      sortable
      :formatter="formatDate"
    />
    <el-table-column
      prop="child"
      :label="$t('child')"
      sortable
      :formatter="getChild"
    />
    <el-table-column
      prop="statut"
      :label="$t('statut')"
      sortable
      :formatter="getStatut"
    />
    <el-table-column
      fixed="right"
      label="Opérations"
    >
      <template slot-scope="scope">
        <el-button size="mini" @click="$emit('editBtnClicked', scope)">
          {{ $t('btn.edit') }}
        </el-button>
        <el-button size="mini" type="danger" @click="remove(scope)">
          {{ $t('btn.remove') }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
    }
  },
  async fetch () {
    await this.$store.dispatch('evaluations/fetch')
    await this.$store.dispatch('childs/fetch')
    this.loading = false
  },
  computed: {
    evaluations () {
      return this.$store.state.evaluations.list
    },
    childs () {
      return this.$store.state.childs.list
    },
  },
  methods: {
    formatDate (row) {
      const date = row.date.seconds ? row.date.seconds * 1000 : row.date
      return new Date(date).toLocaleDateString('fr-FR')
    },
    getChild (row) {
      const child = this.$store.getters['childs/byId'](row.childId)
      return child ? `${child.firstname} ${child.lastname}` : ''
    },
    getStatut (row) {
      return this.$t(row.statut)
    },
    async edit (scope) {
      const row = scope.row
      await this.$store.dispatch('evaluations/edit', row)
    },
    async remove (scope) {
      const row = scope.row
      await this.$store.dispatch('evaluations/remove', row)
      this.$toast.success(this.$t('alert.evaluations.delete.success'))
    },
  },
}
</script>
