<template>
  <el-dialog
    :title="$t('modal.task.edit.title')"
    :visible="showEditModal"
    @close="$emit('taskEdited')"
  >
    <forms-edit-task :show-edit-modal="showEditModal" :task="task" @taskEdited="$emit('taskEdited')" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>
