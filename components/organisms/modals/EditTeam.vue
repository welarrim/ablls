<template>
  <el-dialog
    :title="$t('modal.team.edit.title')"
    :visible="showEditModal"
    @close="$emit('teamEdited')"
  >
    <forms-edit-team :show-edit-modal="showEditModal" :team="team" @teamEdited="$emit('teamEdited')" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    team: {
      type: Object,
      required: true,
    },
  },
}
</script>
