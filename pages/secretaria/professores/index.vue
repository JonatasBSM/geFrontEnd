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
        <crud-table title="Professor" modal-component="" action-class="professor" :columns="[
          { label: 'Nome', key: 'name' },
          { label: 'Cargo', key: 'actions', content: 'nome_cargo' },
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