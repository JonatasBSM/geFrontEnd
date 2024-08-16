<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    Teste
  </NuxtLayout>V
</template>

<script>

export default {
  name: 'IndexPage',
  
  computed: {
    device() {
      return useDevice();
    }
  }
  
}
</script>
