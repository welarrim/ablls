<template>
  <div>
    <el-collapse v-for="(skill, skillIndex) in skills" :key="skill.id" v-model="activeNames">
      <el-collapse-item :title="skill.name" :name="skillIndex">
        <el-row :gutter="20" type="flex">
          <el-col v-for="task in tasks[skill.id]" :key="task.id" :span="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ task.name }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push(`/evaluation/${evaluation.id}/${task.id}`)">
                  {{ $t('btn.start') }}
                </el-button>
              </div>
              <div>
                {{ $t('title.result') }} : {{ getResult(skill.id, task.order) }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
    },
    tasks: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      activeNames: 0,
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
  methods: {
    getResult (skillId, taskOrder) {
      const result = this.evaluation.results.find(row => row.skillId === skillId && row.taskOrder === taskOrder)
      if (result) {
        return result.score
      } else {
        return this.$t('not_passed')
      }
    },
  },
}
</script>
