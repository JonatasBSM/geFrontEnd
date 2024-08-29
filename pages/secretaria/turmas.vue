<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <UBreadcrumb
        :links="breadcrumbs"
        :ui="{
        active: 'text-ge-violet'
      }"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
const device = useDevice();

const breadcrumbs = [
  { label: 'Secretaria', to: '/secretaria' },
  { label: 'Turmas', to: '/secretaria/turmas' }
]

//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>