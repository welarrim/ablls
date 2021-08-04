<template>
  <div>
    <h1>{{ $t('title.login') }}</h1>
    <forms-login />
    <nuxt-link to="/register">
      {{ $t('link.register') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  auth: 'guest',
}
</script>
