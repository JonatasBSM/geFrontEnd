<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb
          :links="breadcrumbs"
          :ui="{
          active: 'text-ge-violet'
        }"
      />
      <UCard>
          <crud-table title="Segmento Escolar" modal-component="SegmentoEscolarModal" action-class="segmentoEscolar" :columns="[
          { label: 'Nome', key: 'st_nome' },
          { label: 'Disciplinas', key: 'actions', content: 'visualizador_disciplinas' },
        ]"/>
      </UCard>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
import CrudTable from "~/components/shared/tables/CrudTable.vue";

const device = useDevice();
const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Segmentos Escolares', to: '/configuracoes/segmentos-escolares' }
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>