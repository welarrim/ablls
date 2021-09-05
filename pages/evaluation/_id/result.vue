<template>
  <div>
    <h1>{{ $t('title.result') }}</h1>
    <result-evaluation :evaluation="evaluation" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      evaluation: {},
    }
  },
  created () {
    const id = this.$route.params.id
    this.evaluation = this.$store.getters['evaluations/byId'](id)
    if (!this.evaluation) {
      this.$router.push('/evaluation')
    }
  },
}
</script>
