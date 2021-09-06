<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="$t('seeds')" name="seeds">
      <settings-seeds />
    </el-tab-pane>
    <el-tab-pane :label="$t('evaluation')" name="evaluation">
      Evaluation
    </el-tab-pane>
    <el-tab-pane :label="$t('users')" name="users">
      Users
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'seeds',
    }
  },
}
</script>
