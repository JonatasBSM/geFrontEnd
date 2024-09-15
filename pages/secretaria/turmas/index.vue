<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb
        :links="breadcrumbs"
        :ui="{
          active: 'text-ge-violet'
        }"
      />


      <div class="widgets">

      </div>

      <div class="">
        <UCard>
          <crud-table title="Turma" modal-component="" action-class="turma" :columns="[
          { label: 'Nome', key: 'st_nome' },
          { label: 'Ano', key: 'year' },
          { label: 'Turno', key: 'shift' },
          { label: 'Série', key: 'grade' },
          { label: 'Ações', key: 'actions' }
        ]"
          />
        </UCard>
      </div>
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
  { label: 'Secretaria', to: '/secretaria' },
  { label: 'Turmas', to: '/secretaria/turmas' }
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>