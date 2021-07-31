<template>
  <el-header>
    <el-menu mode="horizontal">
      <el-menu-item v-for="(menu, i) in menus" :key="i" :index="i+1" :route="menu.route">
        {{ $t(menu.title) }}
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          title: 'menu.home',
          route: '/',
        },
      ],
    }
  },
}
</script>
