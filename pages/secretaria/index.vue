<template>

  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">

    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb 
      :links="breadcrumbs"
      :ui="{
        active: 'text-ge-violet'
      }"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-4">
        <resource-card
            class="col-span-1"
            st_title="Alunos"
            st_image_url="https://via.placeholder.com/150"
            st_content="Criação e gerenciamento de alunos."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"

        />
        <resource-card
            class="col-span-1"
            st_title="Professores"
            st_image_url="https://via.placeholder.com/150"
            st_content="Criação e gerenciamento de professores."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"

        />
        <resource-card
            class="col-span-1"
            st_title="Turmas"
            st_image_only="true"
            to="/secretaria/turmas"
            st_image_url="https://via.placeholder.com/150"
            st_content="Criação e gerenciamento de turmas."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"

        />
      </div>
    </div>

  </NuxtLayout>
</template>

<script setup lang="ts">

import ResourceCard from "~/components/shared/ResourceCard.vue";

const breadcrumbs = [
  { label: 'Secretaria', to: '/secretaria' }
];

const device = useDevice();

</script>

<style scoped>

</style>