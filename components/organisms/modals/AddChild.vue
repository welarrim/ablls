<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">
      {{ $t('btn.add') }}
    </el-button>
    <el-dialog
      :title="$t('modal.child.add.title')"
      :visible.sync="dialogVisible"
    >
      <forms-add-child @childAdded="dialogVisible = false" />
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
