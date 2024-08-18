<script setup lang="ts">
import resourceCard from "~/components/shared/resourceCard.vue";


const device = useDevice();

const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' }
];

</script>

<template>

  <nuxt-layout  :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-3">
      <UBreadcrumb 
      :links="breadcrumbs"
      :ui="{
        active: 'text-ge-violet'
      }"
      />

      <div class="grid grid-cols-5 gap-4">
        <resource-card
            class="col-span-3"
            st_title="Avisos"
            st_image_url="/avisos.svg"
            st_content="Aqui você encontra todos os avisos importantes"
        />
        <resource-card
            class="col-span-1"
            st_title="Documentos"
            to="/configuracoes/documentos"
            st_image_url="/documentos.svg"
            st_content="Criação e gerenciamento de tipos de documentos e documentações."
            st_wikipedia_url="https://pt.wikipedia.org/wiki/Usu%C3%A1rio"
            :fl_details="true"
        />
        <resource-card
            class="col-span-1"
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

<style scoped>

</style>