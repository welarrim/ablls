<template>
  <el-header>
    <el-menu mode="horizontal" :default-active="activeMenu" :router="true">
      <el-menu-item v-for="(menu, i) in menus" :key="i" :index="menu.route">
        {{ $t(menu.title) }}
      </el-menu-item>
      <el-menu-item @click="logout">
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
        {
          title: 'menu.childs',
          route: '/child',
        },
        {
          title: 'menu.skills',
          route: '/skill',
        },
        {
          title: 'menu.tasks',
          route: '/task',
        },
        {
          title: 'menu.evaluations',
          route: '/evaluation',
        },
        {
          title: 'menu.settings',
          route: '/settings',
        },
      ],
    }
  },
  computed: {
    activeMenu () {
      return this.$nuxt.$route.path
    },
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
