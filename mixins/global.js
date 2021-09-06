export default {
  data () {
    return {
      isLoading: false,
    }
  },
  methods: {
    startLoading () {
      this.isLoading = true
    },
    stopLoading () {
      this.isLoading = false
    },
    displayError (error) {
      if (error.code) {
        const key = `alert.firebase.${error.code}`
        this.$toast.error(this.$t(key))
      } else {
        this.$toast.error(this.$t('alert.error.unknown'))
      }
      console.error(error)
    },
  },
}
