<template>
  <el-table
    v-loading="loading"
    :data="childs"
    :default-sort="{prop: 'firstname', order: 'ascending'}"
  >
    <el-table-column
      prop="firstname"
      :label="$t('firstname')"
      sortable
    />
    <el-table-column
      prop="lastname"
      :label="$t('lastname')"
      sortable
    />
    <el-table-column
      prop="gender"
      :label="$t('gender')"
      sortable
      :formatter="getGender"
    />
    <el-table-column
      prop="birthdate"
      :label="$t('birthdate')"
      sortable
      :formatter="getBirthDate"
    />
    <el-table-column
      prop="observations"
      :label="$t('observations')"
      sortable
      :formatter="observationsExist"
    />
    <el-table-column
      fixed="right"
      :label="$t('operations')"
    >
      <template slot-scope="scope">
        <el-button size="mini" @click="$router.push(`/child/${scope.row.id}/result`)">
          {{ $t('btn.result') }}
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
    await this.$store.dispatch('childs/fetch')
    this.loading = false
  },
  computed: {
    childs () {
      return this.$store.state.childs.list
    },
  },
  methods: {
    getGender (row) {
      return this.$t(row.gender)
    },
    getBirthDate (row) {
      const birthdate = row.birthdate.seconds ? row.birthdate.seconds * 1000 : row.birthdate
      return new Date(birthdate).toLocaleDateString('fr-FR')
    },
    observationsExist (row) {
      return row.observations ? this.$t('yes') : this.$t('no')
    },
    async edit (scope) {
      const row = scope.row
      await this.$store.dispatch('childs/edit', row)
    },
    async remove (scope) {
      const row = scope.row
      await this.$store.dispatch('childs/remove', row)
      this.$toast.success(this.$t('alert.childs.delete.success'))
    },
  },
}
</script>
