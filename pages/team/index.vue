<template>
  <div>
    <h1>{{ $t('title.teams') }}</h1>
    <modals-add-team />
    <modals-edit-team :show-edit-modal="showEditModal" :team="team" @teamEdited="showEditModal = false" />
    <cruds-team @editBtnClicked="openEditModal" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showEditModal: false,
      team: {},
    }
  },
  methods: {
    openEditModal (payload) {
      this.team = payload.row
      this.showEditModal = true
    },
  },
}
</script>
