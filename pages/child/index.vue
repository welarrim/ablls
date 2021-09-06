<template>
  <div>
    <h1>{{ $t('title.childs') }}</h1>
    <modals-add-child />
    <modals-edit-child :show-edit-modal="showEditModal" :child="child" @childEdited="showEditModal = false" />
    <cruds-child @editBtnClicked="openEditModal" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showEditModal: false,
      child: {},
    }
  },
  methods: {
    openEditModal (payload) {
      this.child = payload.row
      this.showEditModal = true
    },
  },
}
</script>
