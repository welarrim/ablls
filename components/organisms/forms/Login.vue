<template>
  <el-form
    ref="login-form"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.email.label')" prop="email">
      <el-input v-model="ruleForm.email" type="email" name="email" />
    </el-form-item>
    <el-form-item :label="$t('form.password.label')" prop="password">
      <el-input v-model="ruleForm.password" type="password" name="password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('login-form')">
        {{ $t('btn.login') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: this.$t('form.email.rule.required'), trigger: 'blur' },
          { type: 'email', message: this.$t('form.email.rule.type'), trigger: 'blur' },
        ],
        password: [
          { required: true, message: this.$t('form.password.rule.required'), trigger: 'blur' },
          { min: 6, message: this.$t('form.password.rule.min'), trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.error = false
        } else {
          this.error = true
        }
      })
    },
  },
}
</script>
