<template>
  <header class="flex justify-end mt-6">
    <UButton
        class="mb-3"
        icon="i-heroicons-pencil-square"
        size="sm"
        color="violet"
        variant="solid"
        :label="'Novo ' + title"
        :trailing="false"
        @click="redirect_to_create_page()"
    />

  </header>
  <UCard class="mt-3">
    <template v-if="filterComponent" #header>
      <component :is="filterComponent" :data="rows" @filter="filter"/>
    </template>

    <div>
      <UTable
          :columns="columns"
          :rows="filterComponent ? filteredRows : rows"
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
    </div>

  </UCard>
</template>

<script setup lang="ts">
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

  filterComponent: {
    type: String,
    default: '',
    required: false,
  },

  createPageUrl: {
    type: String,
    required: true,
  },

  editPageUrl: {
    type: String,
    required: true,
  },

})
//Emits
const emits = defineEmits(['refresh']);
//Reactive variables
import actions from "~/actions";

const filterComponent = props.filterComponent ? defineAsyncComponent(() => import(`~/components/shared/filters/${props.filterComponent}.vue`)) : '';

let rows = ref([]);
let filteredRows = ref([]);

const dropdownItems = (row) => [
  [
    {
      label: 'Editar',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        redirect_to_edit_page(row)
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
function redirect_to_create_page() {
  navigateTo(props.createPageUrl);
}

function redirect_to_edit_page(row) {
  navigateTo(props.editPageUrl + row.id);
}

function delete_row(row) {
  actions[props.actionClass].delete_row(row.id);
  refresh();
}
//Watchers

//Lifecycle hooks
onMounted(async () => {
  rows.value  = (await actions[props.actionClass].list()).data;
  filteredRows.value = rows.value;
});
//Expose
</script>

<style scoped>

</style>