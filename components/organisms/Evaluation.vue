<template>
  <div>
    <h2>{{ task.id }} - {{ task.name }}</h2>
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="$t('task.goal')" name="1">
        <p>{{ task.goal }}</p>
      </el-collapse-item>
      <el-collapse-item :title="$t('task.question')" name="2">
        <p>{{ task.question }}</p>
      </el-collapse-item>
      <el-collapse-item :title="$t('task.examples')" name="3">
        <p>{{ task.examples }}</p>
      </el-collapse-item>
      <el-collapse-item :title="$t('task.criterias')" name="4">
        <p v-for="criteria in task.criterias" :key="criteria.score">
          {{ criteria.value }}
        </p>
      </el-collapse-item>
      <el-collapse-item :title="$t('task.observations')" name="5">
        <p>{{ task.observation }}</p>
      </el-collapse-item>
    </el-collapse>
    <el-divider />
    <el-radio v-for="criteria in task.criterias" :key="criteria.score" v-model="score" :label="criteria.score">
      {{ criteria.value }}
    </el-radio>
    <el-button type="success" @click="storeAnswerAndNext">
      {{ $t('btn.save_and_next') }}
    </el-button>
    <el-button type="success" @click="storeAnswerAndSummary">
      {{ $t('btn.save_and_summary') }}
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      activeNames: ['1'],
      score: 0,
    }
  },
  methods: {
    storeAnswerAndNext () {
      this.$emit('storeAnswerAndNext', this.score)
    },
    storeAnswerAndSummary () {
      this.$emit('storeAnswerAndSummary', this.score)
    },
  },
}
</script>
