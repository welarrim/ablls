<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.letter.label')" prop="letter">
      <el-input v-model="ruleForm.letter" type="text" name="letter" autofocus />
    </el-form-item>
    <el-form-item :label="$t('form.name.label')" prop="name">
      <el-input v-model="ruleForm.name" type="text" name="name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="addSkill()">
        {{ $t('btn.add') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      formRef: 'add-skill-form',
      ruleForm: {
        letter: '',
        name: '',
      },
      rules: {
        letter: [
          { required: true, message: this.$t('form.letter.rule.required'), trigger: 'blur' },
        ],
        name: [
          { required: true, message: this.$t('form.name.rule.required'), trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    addSkill () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('skills/add', this.ruleForm)
            this.$emit('skillAdded')
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
        letter: '',
        name: '',
      }
    },
  },
}
</script>
