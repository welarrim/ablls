<template>
  <div>
    <h1>{{ $t('title.register') }}</h1>
    <forms-register />
    <nuxt-link to="/login">
      {{ $t('link.login') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  auth: 'guest',
}
</script>
