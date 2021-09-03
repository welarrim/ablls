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
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="signIn">
        {{ $t('btn.login') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      formRef: 'login-form',
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
    signIn () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Sign in
            const { email, password } = this.ruleForm
            const response = await this.$fire.auth.signInWithEmailAndPassword(email, password)

            if (!response.user.emailVerified) {
              setTimeout(() => {
                this.$fire.auth.signOut()
                this.$toast.error(this.$t('alert.login.emailNotVerified'))
                this.stopLoading()
              }, 500)
              return false
            }

            // Wait for redirection
            setTimeout(() => {
              // Redirect to Home
              this.$router.push('/')
              this.stopLoading()
            }, 500)
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
