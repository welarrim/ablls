<template>
  <el-main>
    <el-row :gutter="20" class="mx-0" type="flex" justify="center" align="center">
      <el-col class="left-side px-0 h-full hidden-xs-only" :sm="12" :md="12" :lg="12" :xl="12" />
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <nuxt />
      </el-col>
    </el-row>
  </el-main>
</template>

<style scoped>
  main.el-main {
    margin: -8px;
    padding: 0;
  }
  .h-full {
    height: 100vh;
  }
  .px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .left-side {
    background-image: url('~/assets/images/login.webp');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
