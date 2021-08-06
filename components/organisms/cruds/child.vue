<template>
  <el-table
    v-loading="loading"
    :data="childs"
    :default-sort="{prop: 'firstName', order: 'ascending'}"
  >
    <el-table-column
      prop="firstName"
      :label="$t('firstName')"
      sortable
    />
    <el-table-column
      prop="lastName"
      :label="$t('lastName')"
      sortable
    />
    <el-table-column
      prop="sexe"
      :label="$t('sexe')"
      sortable
      :formatter="getSexe"
    />
    <el-table-column
      prop="birthDate"
      :label="$t('birthDate')"
      sortable
      :formatter="getBirthDate"
    />
    <el-table-column
      prop="observation"
      :label="$t('observation')"
      sortable
      :formatter="getObservation"
    />
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
    getSexe (row) {
      return this.$t(row.sexe)
    },
    getBirthDate (row) {
      return new Date(row.birthDate).toLocaleDateString('fr-FR')
    },
    getObservation (row) {
      return row.observation ? this.$t('yes') : this.$t('no')
    },
  },
}
</script>
