<template>
  <el-dialog
    :title="$t('modal.evaluation.edit.title')"
    :visible="showEditModal"
    @close="$emit('evaluationEdited')"
  >
    <forms-edit-evaluation :show-edit-modal="showEditModal" :evaluation="evaluation" @evaluationEdited="$emit('evaluationEdited')" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    evaluation: {
      type: Object,
      required: true,
    },
  },
}
</script>
