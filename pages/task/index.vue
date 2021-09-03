<template>
  <div>
    <h1>{{ $t('title.tasks') }}</h1>
    <modals-add-task />
    <modals-edit-task :show-edit-modal="showEditModal" :task="task" @taskEdited="showEditModal = false" />
    <cruds-task @editBtnClicked="openEditModal" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showEditModal: false,
      task: {},
    }
  },
  methods: {
    openEditModal (payload) {
      this.task = payload.row
      this.showEditModal = true
    },
  },
}
</script>
