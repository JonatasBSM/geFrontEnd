<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    Teste
  </NuxtLayout>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: ['auth']
})

const device = useDevice();
const name = 'IndexPage';

</script>
