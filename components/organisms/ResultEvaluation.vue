<template>
  <div>
    <h2>{{ child.firstname }} {{ child.lastname }}</h2>
    <h3>Evaluations :</h3>
    <ul>
      <li v-for="(evaluation, i) in evaluations" :key="`date-${evaluation.id}`">
        {{ formatEvaluationDate(evaluation.date) }} : <span :style="`display: inline-block; width:15px; height:15px; border:1px solid #ccc; background-color:${colors[i]};`" />
      </li>
    </ul>
    <el-divider />
    <el-container>
      <el-row :gutter="20" type="flex" class="flex-wrap">
        <el-col v-for="skill in skills" :key="skill.id" :span="3" class="skill-column">
          <h4 class="title">
            {{ skill.name }}
          </h4>
          <el-row v-for="task in getTasksBySkillId(skill.id)" :key="task.id">
            <el-col class="task-title" :span="12">
              {{ task.id }}
            </el-col>
            <el-col :span="12">
              <el-col v-for="index in getTaskScore(task.id)" :key="`${task.id}-${index}`" :span="getSpan(task.id)" class="case" :style="`background-color: ${getColor(task.id, index)}`" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>
<script>
export default {
  props: {
    evaluationsProp: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      evaluations: [],
      child: {},
      skills: [],
      tasks: [],
      colors: [
        '#F9546B',
        '#FC7651',
        '#FFDB60',
        '#42CFCA',
        '#009F93',
      ],
    }
  },
  created () {
    this.evaluations = this.evaluationsProp
    const id = this.$route.params.id
    this.child = this.$store.getters['childs/byId'](id)
    this.skills = this.$store.state.skills.list
    this.tasks = this.$store.state.tasks.list
    this.evaluations.sort((a, b) => {
      return new Date(this.getTimestamps(a.date)) - new Date(this.getTimestamps(b.date))
    })
  },
  methods: {
    getTimestamps (evaluationDate) {
      return evaluationDate.seconds ? evaluationDate.seconds * 1000 : evaluationDate
    },
    formatEvaluationDate (evaluationDate) {
      const date = this.getTimestamps(evaluationDate)
      return new Date(date).toLocaleDateString('fr-FR')
    },
    getTasksBySkillId (skillId) {
      return this.$store.getters['tasks/bySkillId'](skillId)
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
    getColor (taskId, index) {
      const task = this.getTaskById(taskId)
      const scores = {}
      for (let i = 0; i < this.evaluations.length; i++) {
        const result = this.evaluations[i].results.find(row => row.skillId === task.skillId && row.taskOrder === task.order)
        if (result) {
          scores[result.score] = this.colors[i]
        }
      }
      let background = '#fff'
      for (const [score, color] of Object.entries(scores)) {
        if (parseInt(index) <= parseInt(score)) {
          background = color
          break
        }
      }
      return background
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
  margin: 0 5px;
}
.skill-column > .title {
  text-align: center;
}
.skill-column .task-title {
  padding-right: 10px;
  text-align: right;
}
.result-container {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
</style>
