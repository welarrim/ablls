<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.skill.label')" prop="skillId">
      <el-select v-model="ruleForm.skillId">
        <el-option v-for="skill in skills" :key="skill.id" :label="skill.name" :value="skill.id" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('form.order.label')" prop="order">
      <el-input v-model="ruleForm.order" type="number" name="order" autofocus />
    </el-form-item>
    <el-form-item :label="$t('form.name.label')" prop="name">
      <el-input v-model="ruleForm.name" type="text" name="name" />
    </el-form-item>
    <el-form-item :label="$t('form.score.label')" prop="score">
      <el-input v-model="ruleForm.score" type="number" name="score" />
    </el-form-item>
    <el-form-item :label="$t('form.goal.label')">
      <el-input v-model="ruleForm.goal" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.question.label')">
      <el-input v-model="ruleForm.question" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.example.label')">
      <el-input v-model="ruleForm.example" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.criteria.label')">
      <el-input v-model="ruleForm.criteria" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.observation.label')">
      <el-input v-model="ruleForm.observation" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="addTask">
        {{ $t('btn.add') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      formRef: 'add-task-form',
      ruleForm: {
        skillId: '',
        order: 0,
        score: 0,
        name: '',
        goal: '',
        question: '',
        example: '',
        criteria: '',
        observation: '',
      },
      rules: {
        skillId: [
          { required: true, message: this.$t('form.skill.rule.required'), trigger: 'blur' },
        ],
        order: [
          { required: true, message: this.$t('form.order.rule.required'), trigger: 'blur' },
        ],
        score: [
          { required: true, message: this.$t('form.score.rule.required'), trigger: 'blur' },
        ],
        name: [
          { required: true, message: this.$t('form.name.rule.required'), trigger: 'blur' },
        ],
      },
    }
  },
  async fetch () {
    await this.$store.dispatch('skills/fetch')
  },
  computed: {
    skills () {
      return this.$store.state.skills.list
    },
  },
  methods: {
    addTask () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('tasks/add', this.ruleForm)
            this.$emit('taskAdded')
          } catch (error) {
            this.displayError(error)
          } finally {
            this.clearFields()
            this.stopLoading()
          }
        } else {
          this.$toast.error(this.$t('alert.form.validation'))
        }
      })
    },
    clearFields () {
      this.ruleForm = {
        skillId: '',
        order: 0,
        score: 0,
        name: '',
        goal: '',
        question: '',
        example: '',
        criteria: '',
        observation: '',
      }
    },
  },
}
</script>
