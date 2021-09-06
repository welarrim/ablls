<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">
      {{ $t('btn.add') }}
    </el-button>
    <el-dialog
      :title="$t('modal.evaluation.add.title')"
      :visible.sync="dialogVisible"
    >
      <forms-add-evaluation @evaluationAdded="dialogVisible = false" />
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
