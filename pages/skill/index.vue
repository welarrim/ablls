<template>
  <div>
    <h1>{{ $t('title.skills') }}</h1>
    <modals-add-skill />
    <modals-edit-skill :show-edit-modal="showEditModal" :skill="skill" @skillEdited="showEditModal = false" />
    <cruds-skill @editBtnClicked="openEditModal" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showEditModal: false,
      skill: {},
    }
  },
  methods: {
    openEditModal (payload) {
      this.skill = payload.row
      this.showEditModal = true
    },
  },
}
</script>
