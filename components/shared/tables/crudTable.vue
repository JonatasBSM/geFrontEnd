<template>
  <header class="flex justify-end mt-6">
    <UButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="violet"
        variant="solid"
        :label="'Novo ' + title"
        :trailing="false"
        @click="open_modal()"
    />
  </header>
  <UTable
      :columns="columns"
      :rows="rows"
  >

    <template #actions-data="{ row,column }">
      <div class="flex items-center justify-between">
        <span>{{ row[column.content] }}</span>
        <u-dropdown :items="dropdownItems(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </u-dropdown>
      </div>
    </template>
  </UTable>
  <component @refresh="refresh" :is="component" v-model:form="selected" v-model:modal-state="modelState"/>
</template>

<script setup lang="ts">

import actions from "~/actions";

interface Column {
  key: string|null;
  label: string;
  content?: string|null;
}

//Props
const props = defineProps({

  title: {
    type: String,
    default: '',
    required: true,
  },

  columns: {
    type: Array as PropType<Column[]>,
    required: true,
  },

  actionClass: {
    type: String,
    default: '',
    required: true,
  },

  modalComponent: {
    type: String,
    default: '',
    required: true,
  }

})

//Emits

//Reactive variables

const component = defineAsyncComponent(() => import(`~/components/shared/modals/${props.modalComponent}.vue`));

const modelState = ref(false);

let selected = ref(null);

let rows = ref([]);

const dropdownItems = (row) => [
  [
    {
      label: 'Editar',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        open_modal(row)
      }
    },
    {
      label: 'Deletar',
      icon: 'i-heroicons-trash-20-solid',
      click: () => {
        delete_row(row)
      }
    }
  ]
]
//Computed

//Methods
function open_modal(row:any = null) {

  if(row) {
    selected.value = row;
  } else {
    selected.value = actions[props.actionClass].new_row();
  }

  modelState.value = true;

}

function delete_row(row) {
  actions[props.actionClass].delete_row(row.id);
  refresh();
}

async function refresh() {
  rows.value  = (await actions[props.actionClass].list()).data;
}
//Watchers

//Lifecycle hooks
onMounted(async () => {
  rows.value  = (await actions[props.actionClass].list()).data;
});
//Expose
</script>

<style scoped>

</style>