<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.child.label')" prop="childId">
      <el-select v-model="ruleForm.childId">
        <el-option v-for="child in childs" :key="child.id" :label="child.firstname + ' ' +child.lastname" :value="child.id" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('form.date.label')" prop="date">
      <el-date-picker v-model="ruleForm.date" type="date" :placeholder="$t('form.date.placeholder')" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="editEvaluation">
        {{ $t('btn.edit') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    evaluation: {
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
      formRef: 'edit-evaluation-form',
      ruleForm: {
        id: 0,
        childId: '',
        date: '',
        statut: 'pending',
        results: {},
      },
      rules: {
        childId: [
          { required: true, message: this.$t('form.child.rule.required'), trigger: 'blur' },
        ],
        date: [
          { required: true, message: this.$t('form.date.rule.required'), trigger: 'blur' },
        ],
      },
    }
  },
  async fetch () {
    await this.$store.dispatch('childs/fetch')
  },
  computed: {
    childs () {
      return this.$store.state.childs.list
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
    initFields () {
      this.ruleForm.id = this.evaluation.id
      this.ruleForm.childId = this.evaluation.childId
      this.ruleForm.date = this.evaluation.date.seconds ? this.evaluation.date.seconds * 1000 : this.evaluation.date
      this.ruleForm.statut = this.evaluation.statut
      this.ruleForm.results = this.evaluation.results
    },
    editEvaluation () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('evaluations/edit', this.ruleForm)
            this.$emit('evaluationEdited')
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
        childId: '',
        date: '',
        statut: 'pending',
        results: {},
      }
    },
  },
}
</script>
