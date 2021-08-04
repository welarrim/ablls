<template>
  <el-header>
    <el-menu mode="horizontal">
      <el-menu-item v-for="(menu, i) in menus" :key="i" :index="i.toString()" :route="menu.route">
        {{ $t(menu.title) }}
      </el-menu-item>
      <el-menu-item :index="(menus.length + 1).toString()" @click="logout">
        {{ $t('menu.logout') }}
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
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
