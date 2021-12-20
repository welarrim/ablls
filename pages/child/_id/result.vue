<template>
  <div>
    <h1>{{ $t('title.result') }}</h1>
    <result-evaluation :evaluations-prop="evaluations" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      evaluations: {},
    }
  },
  created () {
    const id = this.$route.params.id
    this.evaluations = this.$store.getters['evaluations/byChildId'](id)
  },
}
</script>
