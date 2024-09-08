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
          <crud-table title="Disciplina" modal-component="DisciplinaModal" action-class="disciplina" :columns="[
          { label: 'Nome', key: 'st_nome' },
          { label: 'Descrição', key: 'actions', content: 'st_descricao' },
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
  { label: 'Disciplinas', to: '/configuracoes/disciplinas' }
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>