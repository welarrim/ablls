<template>
  <el-dialog
    :title="$t('modal.skill.edit.title')"
    :visible="showEditModal"
    @close="$emit('skillEdited')"
  >
    <forms-edit-skill :show-edit-modal="showEditModal" :skill="skill" @skillEdited="$emit('skillEdited')" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    skill: {
      type: Object,
      required: true,
    },
  },
}
</script>
