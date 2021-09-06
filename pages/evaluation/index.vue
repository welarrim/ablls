<template>
  <div>
    <h1>{{ $t('title.evaluations') }}</h1>
    <modals-add-evaluation />
    <modals-edit-evaluation :show-edit-modal="showEditModal" :evaluation="evaluation" @evaluationEdited="showEditModal = false" />
    <cruds-evaluation @editBtnClicked="openEditModal" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showEditModal: false,
      evaluation: {},
    }
  },
  methods: {
    openEditModal (payload) {
      this.evaluation = payload.row
      this.showEditModal = true
    },
  },
}
</script>
