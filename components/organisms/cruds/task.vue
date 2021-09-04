<template>
  <el-table
    v-loading="loading"
    :data="tasks"
    :default-sort="{prop: 'order', order: 'ascending'}"
  >
    <el-table-column
      prop="skillId"
      :label="$t('skill')"
      sortable
      :formatter="getSkill"
    />
    <el-table-column
      prop="order"
      :label="$t('order')"
      sortable
    />
    <el-table-column
      prop="score"
      :label="$t('score')"
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
    await this.$store.dispatch('tasks/fetch')
    await this.$store.dispatch('skills/fetch')
    this.loading = false
  },
  computed: {
    tasks () {
      return this.$store.state.tasks.list
    },
    skills () {
      return this.$store.state.skills.list
    },
  },
  methods: {
    getSkill (row) {
      const skill = this.$store.getters['skills/byId'](row.skillId)
      return skill ? `${skill.letter} - ${skill.name}` : ''
    },
    async edit (scope) {
      const row = scope.row
      await this.$store.dispatch('tasks/edit', row)
    },
    async remove (scope) {
      const row = scope.row
      await this.$store.dispatch('tasks/remove', row)
      this.$toast.success(this.$t('alert.tasks.delete.success'))
    },
  },
}
</script>
