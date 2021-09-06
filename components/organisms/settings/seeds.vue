<template>
  <el-table
    :data="seeds"
    style="width: 100%"
  >
    <el-table-column
      prop="title"
      :label="$t('name')"
      :formatter="getTitle"
    />
    <el-table-column fixed="right" :label="$t('operations')">
      <template slot-scope="scope">
        <el-popconfirm :title="$t('alert.seeds.confirmation')" :confirm-button-text="$t('yes')" :cancel-button-text="$t('no')" @confirm="startSeed(scope.row.title)">
          <el-button
            slot="reference"
            size="mini"
            type="danger"
          >
            {{ $t('btn.start') }}
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
      seeds: [
        {
          title: 'skills',
        },
        {
          title: 'tasks',
        },
      ],
    }
  },
  methods: {
    getTitle (row) {
      return this.$t('title.' + row.title)
    },
    async startSeed (element) {
      // Clean DB
      await this.$store.dispatch(element + '/clean')
      // Run seed
      await this.$store.dispatch(element + '/seed')
      this.$toast.success(this.$t('alert.seeds.complete'))
    },
  },
}
</script>
