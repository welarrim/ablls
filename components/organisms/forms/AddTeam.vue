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
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="addTeam">
        {{ $t('btn.add') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      formRef: 'add-team-form',
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: this.$t('form.name.rule.required'), trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    addTeam () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('teams/add', this.ruleForm)
            this.$emit('teamAdded')
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
        name: '',
      }
    },
  },
}
</script>
