<script setup lang="ts">

import resourceCard from "~/components/shared/resourceCard.vue";

const breadcrumbs = [
    { label: 'Secretaria', to: '/secretaria' }
  ];

const device = useDevice();

</script>

<template>

  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">

    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb 
      :links="breadcrumbs"
      :ui="{
        active: 'text-ge-violet'
      }"
      />

      <div class="grid grid-cols-5 gap-4">
        <resource-card
            class="col-span-1"
            st_title="Alunos"
            st_image_url="https://via.placeholder.com/150"
        />
        <resource-card
            class="col-span-1"
            st_title="Professores"
            st_image_url="https://via.placeholder.com/150"
        />
        <resource-card
            class="col-span-1"
            st_title="Turmas"
            st_image_only="true"
            st_image_url="https://via.placeholder.com/150"
        />
      </div>
    </div>

  </NuxtLayout>
</template>

<style scoped>

</style>