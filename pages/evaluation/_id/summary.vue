<template>
  <div>
    <h1>{{ $t('title.result') }}</h1>
    <summary-evaluation :skills="skills" :tasks="tasks" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      skills: {},
      tasks: {},
      evaluation: {},
    }
  },
  created () {
    const id = this.$route.params.id
    this.evaluation = this.$store.getters['evaluations/byId'](id)
    this.skills = this.$store.state.skills.list
    this.tasks = this.$store.getters['tasks/groupBySkill']
  },
}
</script>
