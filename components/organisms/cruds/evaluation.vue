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
      prop="status"
      :label="$t('status')"
      sortable
      :formatter="getstatus"
    />
    <el-table-column
      fixed="right"
      :label="$t('operations')"
    >
      <template slot-scope="scope">
        <el-button size="mini" @click="start(scope)">
          {{ $t('btn.start') }}
        </el-button>
        <el-button size="mini" @click="$emit('editBtnClicked', scope)">
          {{ $t('btn.edit') }}
        </el-button>
        <el-popconfirm :title="$t('alert.delete.confirmation')" :confirm-button-text="$t('yes')" :cancel-button-text="$t('no')" @confirm="remove(scope)">
          <el-button slot="reference" size="mini" type="danger">
            {{ $t('btn.remove') }}
          </el-button>
        </el-popconfirm>
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
    getstatus (row) {
      return this.$t(row.status)
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
    start (scope) {
      const row = scope.row
      this.$router.push('/evaluation/' + row.id + '/summary')
    },
    result (scope) {
      const row = scope.row
      this.$router.push('/evaluation/' + row.id + '/result')
    },
  },
}
</script>
