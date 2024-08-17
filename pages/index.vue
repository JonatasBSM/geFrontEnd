<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    Teste
  </NuxtLayout>
</template>

<script>

definePageMeta({
  middleware: ['auth']
})

export default {
  name: 'IndexPage',
  
  computed: {
    device() {
      return useDevice();
    }
  }
  
}
</script>
