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
      <el-button type="primary" :loading="isLoading" @click="editChild()">
        {{ $t('btn.edit') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    child: {
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
      formRef: 'edit-child-form',
      ruleForm: {
        id: 0,
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
      this.ruleForm.id = this.child.id
      this.ruleForm.firstname = this.child.firstname
      this.ruleForm.lastname = this.child.lastname
      this.ruleForm.gender = this.child.gender
      this.ruleForm.birthdate = this.child.birthdate.seconds ? this.child.birthdate.seconds * 1000 : this.child.birthdate
      this.ruleForm.observation = this.child.observation
    },
    editChild () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('childs/edit', this.ruleForm)
            this.$emit('childEdited')
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
