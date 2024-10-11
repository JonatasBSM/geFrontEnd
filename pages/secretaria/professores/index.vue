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
        <crud-table-with-pages title="Professor" action-class="professor" :columns="[
          { label: 'Nome', key: 'name' },
          { label: 'Segmento Escolar' },
          { label: 'Disciplinas', key: 'actions', content: '' }
        ]"
         edit-page-url="/secretaria/professores/editar"
                               create-page-url="/secretaria/professores/criar"
        />
      </UCard>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
import CrudTableWithPages from "~/components/shared/tables/CrudTableWithPages.vue";

const device = useDevice();
const breadcrumbs = [
  { label: 'Secretaria',
    to: '/secretaria'
  },
  { label: 'Professores',
    to: '/secretaria/professores'
  }
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>