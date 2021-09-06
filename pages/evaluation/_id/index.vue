<template>
  <div>
    <h1>{{ $t('title.evaluations') }}</h1>
    <evaluation :task="task" @answerSubmitted="storeScore" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      evaluation: {},
      task: {},
    }
  },
  async created () {
    await this.$store.dispatch('evaluations/fetch')
    await this.$store.dispatch('tasks/fetch')
    const id = this.$route.params.id
    this.evaluation = this.$store.getters['evaluations/byId'](id)
    if (this.evaluation) {
      this.getNextTask()
    }
  },
  methods: {
    async getNextTask () {
      if (this.evaluation.status === 'done') {
        this.$router.push('/evaluation')
      }
      const results = this.evaluation.results
      if (!results.length) {
        this.task = this.$store.getters['tasks/byId']('A1')
        return
      }
      const lastResult = results[results.length - 1]
      const skillId = lastResult.skillId
      const taskOrder = lastResult.taskOrder
      const nextTaskOrder = taskOrder + 1
      let nextTask = this.$store.getters['tasks/byId'](skillId + nextTaskOrder)
      if (nextTask) {
        this.task = nextTask
        return
      }
      const alpha = 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
      const index = alpha.indexOf(skillId)
      const nextSkillId = alpha[index + 1]
      nextTask = this.$store.getters['tasks/byId'](nextSkillId + '1')
      if (nextTask) {
        this.task = nextTask
      } else {
        const evaluation = JSON.parse(JSON.stringify(this.evaluation))
        evaluation.status = 'done'
        await this.$store.dispatch('evaluations/edit', evaluation)
        this.$router.push('/evaluation')
      }
    },
    async storeScore (score) {
      const evaluation = JSON.parse(JSON.stringify(this.evaluation))
      evaluation.results.push({
        skillId: this.task.skillId,
        taskOrder: this.task.order,
        score,
      })
      await this.$store.dispatch('evaluations/edit', evaluation)
      this.getNextTask()
    },
  },
}
</script>
