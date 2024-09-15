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
        <UTabs :items="tabs">
          <template #item="{ item }">
            <template v-if="item.key == 'disciplina'">

              <crud-table title="Disciplina" modal-component="DisciplinaModal" action-class="disciplina" :columns="[
                { label: 'Nome', key: 'st_nome' },
                { label: 'Descrição', key: 'actions', content: 'st_descricao' },
              ]"/>
            </template>
            <template v-else-if="item.key == 'segmento-escolar'">
              <crud-table title="Segmento Escolar" modal-component="SegmentoEscolarModal" action-class="segmentoEscolar" :columns="[
                { label: 'Nome', key: 'st_nome' },
                { label: 'Disciplinas', key: 'actions', content: 'visualizador_disciplinas' },
              ]"/>
            </template>
          </template>
        </UTabs>
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

const tabs = [
  { key: 'disciplina', label: 'Disciplina' },
  { key: 'segmento-escolar', label: 'Segmento Escolar' },
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>