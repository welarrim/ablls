<template>
  <el-table
    v-loading="loading"
    :data="teams"
    :default-sort="{prop: 'name', order: 'ascending'}"
  >
    <el-table-column
      prop="name"
      :label="$t('name')"
      sortable
    />
    <el-table-column
      fixed="right"
      :label="$t('operations')"
    >
      <template slot-scope="scope">
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
    await this.$store.dispatch('teams/fetch')
    this.loading = false
  },
  computed: {
    teams () {
      return this.$store.state.teams.list
    },
  },
  methods: {
    async edit (scope) {
      const row = scope.row
      await this.$store.dispatch('teams/edit', row)
    },
    async remove (scope) {
      const row = scope.row
      await this.$store.dispatch('teams/remove', row)
      this.$toast.success(this.$t('alert.teams.delete.success'))
    },
  },
}
</script>
