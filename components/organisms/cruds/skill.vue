<template>
  <el-table
    v-loading="loading"
    :data="skills"
    :default-sort="{prop: 'letter', order: 'ascending'}"
  >
    <el-table-column
      prop="letter"
      :label="$t('letter')"
      sortable
    />
    <el-table-column
      prop="name"
      :label="$t('name')"
      sortable
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
    await this.$store.dispatch('skills/fetch')
    this.loading = false
  },
  computed: {
    skills () {
      return this.$store.state.skills.list
    },
  },
  methods: {
    async edit (scope) {
      const row = scope.row
      await this.$store.dispatch('skills/edit', row)
    },
    async remove (scope) {
      const row = scope.row
      await this.$store.dispatch('skills/remove', row)
      this.$toast.success(this.$t('alert.skills.delete.success'))
    },
  },
}
</script>
