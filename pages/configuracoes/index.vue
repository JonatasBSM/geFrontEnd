<template>

  <nuxt-layout  :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-3">
      <UBreadcrumb 
      :links="breadcrumbs"
      :ui="{
        active: 'text-ge-violet'
      }"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-4">

        <avisos-card class="col-span-1 lg:col-span-2 xl:col-span-3"/>

        <recurso-card
            class="col-span-1"
            st_title="Documentos"
            to="/configuracoes/documentos"
            st_image_url="/documentos.svg"
            st_content="Criação e gerenciamento de tipos de documentos e documentações."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"
        />
        <recurso-card
            class="col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-span-1"
            st_title="Usuários"
            st_image_only="true"
            st_image_url="/usuarios.svg"
            st_content="Criação e gerenciamento de usuários, permissões e controles de acesso."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"
        />
      </div>
    </div>
  </nuxt-layout>


</template>

<script setup lang="ts">
import recursoCard from "~/components/shared/recursoCard.vue";
import avisosCard from "~/components/shared/avisosCard.vue";

const device = useDevice();

const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' }
];

</script>

<style scoped>

</style>