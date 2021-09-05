<template>
  <div>
    <h2>{{ child.firstname }} {{ child.lastname }}</h2>
    <h3>{{ $t('date') }} : {{ getEvaluationDate }}</h3>
    <div>
      <div v-for="skill in skills" :key="skill.id" class="skill-column">
        <h4 class="title">
          {{ skill.name }}
        </h4>
        <el-row v-for="result in getResultBySkillId(skill.id)" :key="result.skillId + result.taskOrder">
          <el-col class="task-title" :span="12">
            {{ result.skillId + result.taskOrder }}
          </el-col>
          <el-col :span="12">
            <el-col v-for="index in getTaskScore(result.skillId + result.taskOrder)" :key="`${result.skillId}${result.taskOrder}-${index}`" :span="getSpan(result.skillId + result.taskOrder)" class="case" :class="index <= result.score ? 'filled' : ''" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    evaluation: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      child: {},
      skills: [],
      tasks: [],
    }
  },
  computed: {
    getEvaluationDate () {
      const date = this.evaluation.date.seconds ? this.evaluation.date.seconds * 1000 : this.evaluation.date
      return new Date(date).toLocaleDateString('fr-FR')
    },
  },
  created () {
    this.child = this.$store.getters['childs/byId'](this.evaluation.childId)
    this.skills = this.$store.state.skills.list
    this.tasks = this.$store.state.tasks.list
  },
  methods: {
    getResultBySkillId (skillId) {
      return this.evaluation.results.filter(row => row.skillId === skillId)
    },
    getTaskById (taskId) {
      return this.tasks.find(row => row.id === taskId)
    },
    getTaskScore (taskId) {
      const task = this.getTaskById(taskId)
      return task.score
    },
    getSpan (taskId) {
      const taskScore = this.getTaskScore(taskId)
      return 24 / taskScore
    },
  },
}
</script>
<style scoped>
.case {
  min-height: 19px;
  border: 1px solid #000;
}
.filled {
  background: #99a9bf;
}
.skill-column {
  display: flex;
  flex-direction: column-reverse;
}
.skill-column > .title {
  text-align: center;
}
.skill-column .task-title {
  padding-right: 10px;
  text-align: right;
}
</style>
