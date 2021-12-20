<template>
  <div>
    <h1>{{ $t('title.evaluations') }}</h1>
    <evaluation :task="task" :evaluation="evaluation" @storeAnswerAndNext="storeAnswerAndNext" @storeAnswerAndSummary="storeAnswerAndSummary" />
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
    const taskId = this.$route.params.taskId
    this.evaluation = this.$store.getters['evaluations/byId'](id)
    this.task = this.$store.getters['tasks/byId'](taskId)
  },
  methods: {
    async getNextTask () {
      const results = this.evaluation.results
      if (!results.length) {
        this.$router.push(`/evaluation/${this.evaluation.id}/A1`)
        return
      }
      const lastResult = results[results.length - 1]
      const skillId = lastResult.skillId
      const taskOrder = lastResult.taskOrder
      const nextTaskOrder = taskOrder + 1
      let nextTask = this.$store.getters['tasks/byId'](skillId + nextTaskOrder)
      if (nextTask) {
        this.$router.push(`/evaluation/${this.evaluation.id}/${nextTask.id}`)
        return
      }
      const alpha = 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
      const index = alpha.indexOf(skillId)
      const nextSkillId = alpha[index + 1]
      nextTask = this.$store.getters['tasks/byId'](nextSkillId + '1')
      if (nextTask) {
        this.$router.push(`/evaluation/${this.evaluation.id}/${nextTask.id}`)
      } else {
        const evaluation = JSON.parse(JSON.stringify(this.evaluation))
        evaluation.status = 'done'
        await this.$store.dispatch('evaluations/edit', evaluation)
        this.$router.push('/evaluation')
      }
    },
    async storeScore (score) {
      const evaluation = JSON.parse(JSON.stringify(this.evaluation))
      const index = this.evaluation.results.findIndex(row => row.skillId === this.task.skillId && row.taskOrder === this.task.order)
      if (index >= 0) {
        evaluation.results[index].score = score
      } else {
        evaluation.results.push({
          skillId: this.task.skillId,
          taskOrder: this.task.order,
          score,
        })
      }
      await this.$store.dispatch('evaluations/edit', evaluation)
      this.evaluation = evaluation
    },
    async storeAnswerAndNext (score) {
      await this.storeScore(score)
      this.getNextTask()
    },
    async storeAnswerAndSummary (score) {
      await this.storeScore(score)
      this.$router.push(`/evaluation/${this.evaluation.id}/summary`)
    },
  },
}
</script>
