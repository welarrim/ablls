<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.name.label')" prop="name">
      <el-input v-model="ruleForm.name" type="text" name="name" />
    </el-form-item>
    <el-form-item :label="$t('form.goal.label')">
      <el-input v-model="ruleForm.goal" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.question.label')">
      <el-input v-model="ruleForm.question" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.examples.label')">
      <el-input v-model="ruleForm.examples" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('form.score.label')" prop="score">
      <el-input-number v-model="ruleForm.score" :min="1" name="score" @change="updateCriterias" />
    </el-form-item>
    <el-form-item :label="$t('form.criterias.label')">
      <el-input v-for="(criteria, index) in ruleForm.criterias" :key="index" v-model="criteria.value" type="text" />
    </el-form-item>
    <el-form-item :label="$t('form.observations.label')">
      <el-input v-model="ruleForm.observations" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="editTask">
        {{ $t('btn.edit') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    showEditModal: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      formRef: 'edit-task-form',
      ruleForm: {
        id: 0,
        skillId: '',
        order: 1,
        score: 1,
        name: '',
        goal: '',
        question: '',
        examples: '',
        criterias: [{ score: 0, value: '0 = ' }, { score: 1, value: '1 = ' }],
        observations: '',
      },
      rules: {
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
  watch: {
    showEditModal () {
      this.initFields()
    },
  },
  mounted () {
    this.initFields()
  },
  methods: {
    updateCriterias (currentValue, oldValue) {
      const diff = currentValue - oldValue
      if (diff > 0) {
        for (let i = oldValue + 1; i <= currentValue; i++) {
          this.ruleForm.criterias.push({ score: i, value: `${i} = ` })
        }
      } else if (diff < 0) {
        for (let i = oldValue; i >= currentValue; i--) {
          this.ruleForm.criterias.splice(i + 1, 1)
        }
      }
    },
    initFields () {
      this.ruleForm.id = this.task.id
      this.ruleForm.skillId = this.task.skillId
      this.ruleForm.order = this.task.order
      this.ruleForm.score = this.task.score
      this.ruleForm.name = this.task.name
      this.ruleForm.goal = this.task.goal
      this.ruleForm.question = this.task.question
      this.ruleForm.examples = this.task.examples
      this.ruleForm.criterias = this.task.criterias
      this.ruleForm.observations = this.task.observations
    },
    editTask () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('tasks/edit', this.ruleForm)
            this.$emit('taskEdited')
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
        id: 0,
        skillId: '',
        order: 1,
        score: 1,
        name: '',
        goal: '',
        question: '',
        examples: '',
        criterias: [{ score: 0, value: '0 = ' }, { score: 1, value: '1 = ' }],
        observations: '',
      }
    },
  },
}
</script>
