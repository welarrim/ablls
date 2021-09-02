<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.firstname.label')" prop="firstname">
      <el-input v-model="ruleForm.firstname" type="text" name="firstname" autofocus />
    </el-form-item>
    <el-form-item :label="$t('form.lastname.label')" prop="lastname">
      <el-input v-model="ruleForm.lastname" type="text" name="lastname" />
    </el-form-item>
    <el-form-item :label="$t('form.gender.label')" prop="gender">
      <el-select v-model="ruleForm.gender">
        <el-option :label="$t('form.options.boy')" value="boy" selected="selected" />
        <el-option :label="$t('form.options.girl')" value="girl" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('form.birthdate.label')" prop="birthdate">
      <el-date-picker v-model="ruleForm.birthdate" type="date" :placeholder="$t('form.birthdate.placeholder')" />
    </el-form-item>
    <el-form-item :label="$t('form.observation.label')">
      <el-input v-model="ruleForm.observation" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="addChild()">
        {{ $t('btn.add') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      formRef: 'add-child-form',
      ruleForm: {
        firstname: '',
        lastname: '',
        gender: 'boy',
        birthdate: '',
        observation: '',
      },
      rules: {
        firstname: [
          { required: true, message: this.$t('form.firstname.rule.required'), trigger: 'blur' },
        ],
        lastname: [
          { required: true, message: this.$t('form.lastname.rule.required'), trigger: 'blur' },
        ],
        gender: [
          { required: true, message: this.$t('form.gender.rule.required'), trigger: 'blur' },
        ],
        birthdate: [
          { required: true, message: this.$t('form.birthdate.rule.required'), trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    addChild () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('childs/add', this.ruleForm)
            this.$emit('childAdded')
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
        firstname: '',
        lastname: '',
        gender: 'boy',
        birthdate: '',
        observation: '',
      }
    },
  },
}
</script>
