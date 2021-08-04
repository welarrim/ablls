<template>
  <el-form
    :ref="formRef"
    label-position="top"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item :label="$t('form.email.label')" prop="email">
      <el-input v-model="ruleForm.email" type="email" name="email" autofocus />
    </el-form-item>
    <el-form-item :label="$t('form.password.label')" prop="password">
      <el-input v-model="ruleForm.password" type="password" name="password" />
    </el-form-item>
    <el-form-item :label="$t('form.passwordConfirm.label')" prop="passwordConfirm">
      <el-input v-model="ruleForm.passwordConfirm" type="password" name="passwordConfirm" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="signUp">
        {{ $t('btn.register') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    const passwordConfirm = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error(this.$t('form.passwordConfirm.rule.identique')))
      } else {
        callback()
      }
    }
    return {
      formRef: 'register-form',
      ruleForm: {
        email: '',
        password: '',
        passwordConfirm: '',
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
        passwordConfirm: [
          { required: true, validator: passwordConfirm, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    signUp () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Create user
            const { email, password } = this.ruleForm
            const response = await this.$fire.auth.createUserWithEmailAndPassword(email, password)

            // Send Email Verification
            response.user.sendEmailVerification({
              url: this.$config.baseUrl,
            })

            // Logout User
            this.$fire.auth.signOut()

            // Display message
            this.$toast.success(this.$t('alert.register.success'))

            // Redirect to login
            this.$router.push('/login')

            this.stopLoading()
          } catch (error) {
            this.displayError(error)
            this.stopLoading()
          }
        } else {
          this.$toast.error(this.$t('alert.form.validation'))
        }
      })
    },
  },
}
</script>
