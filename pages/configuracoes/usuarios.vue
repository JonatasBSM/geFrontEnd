<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">

      <div class="grid grid-cols-1 gap-4">
        <UBreadcrumb
            :links="breadcrumbs"
            :ui="{
        active: 'text-ge-violet'
      }"/>
        <UCard>
            <crud-table title="Usuário" modal-component="UsuarioModal" action-class="auth" :columns="[
            { label: 'Nome', key: 'name' },
            { label: 'Email', key: 'email'},
            { label: 'Cargo', key: 'actions', content: 'cargo.st_nome' },
          ]" />
        </UCard>
      </div>

  </NuxtLayout>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
import CrudTable from "~/components/shared/tables/crudTable.vue";

const device = useDevice();
const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Usuários', to: '/configuracoes/usuarios' }
]
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>