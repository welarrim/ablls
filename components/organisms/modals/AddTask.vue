<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">
      {{ $t('btn.add') }}
    </el-button>
    <el-dialog
      :title="$t('modal.task.add.title')"
      :visible.sync="dialogVisible"
    >
      <forms-add-task @taskAdded="dialogVisible = false" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
    }
  },
}
</script>
