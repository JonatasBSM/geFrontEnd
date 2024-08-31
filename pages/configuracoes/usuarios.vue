<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">


      <div class="grid grid-cols-1 gap-4">
        <UBreadcrumb
            :links="breadcrumbs"
            :ui="{
        active: 'text-ge-violet'
      }"/>
        <div id="user-widgets" class="grid  grid-cols-4 mt-6">
          <users-amount-kpi class="col-span-4 sm:col-span-2 lg:col-span-2 2xl:col-span-1"/>
        </div>
        <UCard>
          <UTabs :items="tabs">
            <template #item="{ item }">
              <template v-if="item.key == 'cargo'">
                <crud-table title="Cargo" modal-component="CargoModal" action-class="cargo" :columns="[
                { label: 'Nome', key: 'st_nome' },
                { label: 'Descrição', key: 'actions', content: 'st_descricao' },
              ]"/>
              </template>
              <template v-else-if="item.key == 'usuario'">
                <crud-table title="Usuário" modal-component="UsuarioModal" :fl_filter="true" action-class="usuario" :columns="[
                  { label: 'Nome', key: 'name' },
                  { label: 'Email', key: 'email'},
                  { label: 'Cargo', key: 'actions', content: 'nome_cargo' },
                ]" />
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
import CrudTable from "~/components/shared/tables/crudTable.vue";
import UsersAmountKpi from "~/components/shared/keyPerformanceIndicators/UsersAmountKpi.vue";

const device = useDevice();
const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Usuários', to: '/configuracoes/usuarios' }
];

const tabs = [
  { label: 'Cargo', key: 'cargo' },
  { label: 'Usuário', key: 'usuario' }
];
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>