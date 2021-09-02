<template>
  <el-dialog
    :title="$t('modal.child.edit.title')"
    :visible="showEditModal"
    @close="$emit('childEdited')"
  >
    <forms-edit-child :show-edit-modal="showEditModal" :child="child" @childEdited="$emit('childEdited')" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    child: {
      type: Object,
      required: true,
    },
  },
}
</script>
