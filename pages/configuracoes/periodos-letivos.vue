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
        <UTabs :items="tabs" >
          <template #item="{ item }">
            <template v-if="item.key == 'turno'">
              <crud-table title="Turno" modal-component="TurnoModal" action-class="turno" :columns="[
                {
                  label: 'Id',
                  key: 'id',
                },
                {
                  label: 'Nome',
                  key: 'actions',
                  content: 'st_nome',
                },
              ]"
              @refresh="refresh"/>
            </template>
            <template v-else-if="item.key == 'periodo-letivo'">
              <crud-table title="Período Letivo" modal-component="PeriodoLetivoModal" action-class="periodoLetivo" :columns="[
                {
                  label: 'Id',
                  key: 'id',
                },
                {
                  label: 'Nome',
                  key: 'actions',
                  content: 'st_nome',
                },
              ]"
              :key="periodoLetivoKey"/>
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

definePageMeta({
  middleware: ['auth']
})

const device = useDevice();

const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Períodos Letivos', to: '/configuracoes/periodos-letivos' }
]

const tabs = [
  {
    key: 'turno',
    label: 'Turno'
  },
  {
    key: 'periodo-letivo',
    label: 'Período Letivo'
  }
]

const periodoLetivoKey = ref(0);
//Computed

//Methods
function refresh() {
  periodoLetivoKey.value++;
}
//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>