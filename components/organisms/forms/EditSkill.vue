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
      <el-button type="primary" :loading="isLoading" @click="editSkill">
        {{ $t('btn.edit') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    skill: {
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
      formRef: 'edit-skill-form',
      ruleForm: {
        id: 0,
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
      this.ruleForm.id = this.skill.id
      this.ruleForm.letter = this.skill.letter
      this.ruleForm.name = this.skill.name
    },
    editSkill () {
      this.$refs[this.formRef].validate(async (valid) => {
        if (valid) {
          this.startLoading()
          try {
            // Add child
            await this.$store.dispatch('skills/edit', this.ruleForm)
            this.$emit('skillEdited')
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
        letter: '',
        name: '',
      }
    },
  },
}
</script>
