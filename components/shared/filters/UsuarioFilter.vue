<template>
  <div class="grid grid-cols-8 gap-4 bg-gray-100 p-4 rounded-lg shadow">
    <!-- Input de Pesquisa -->
    <UInput
        class="col-span-5"
        v-model="search"
        @update:modelValue="filter_results"
        type="text"
        placeholder="Pesquisar..."
    />

    <!-- Seletor de Categoria -->
    <USelect
        class="col-span-2"
        v-model="selectedCategory"
        :options="[
        { label: 'Selecione um Cargo', value: '' },
        { label: 'Aluno', value: 'Aluno' },
        { label: 'Professor', value: 'Professor' },
        { label: 'Coordenador', value: 'Coordenador' },
      ]"
        @update:modelValue="filter_results"
    >
    </USelect>

    <!-- Botão de Limpar -->
    <UButton
        @click="clear_filters"
        size="sm"
        color="red"
        class="flex justify-center"
    >
      Limpar
    </UButton>
  </div>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
// Emits
const emits = defineEmits(['filter']);

// Reactive variables
const search = ref('');
const selectedCategory = ref('');
const result = ref(props.data);

// Methods
function filter_results() {
  result.value = props.data;

  // Filter by search value
  if (search.value) {
    result.value = result.value.filter((item) => {
      return (
          item.name.toLowerCase().includes(search.value.toLowerCase()) ||
          item.email.toLowerCase().includes(search.value.toLowerCase())
      );
    });
  }

  // Filter by category
  if (selectedCategory.value) {
    result.value = result.value.filter((item) => item.nome_cargo === selectedCategory.value);
  }

  emits('filter', result.value);
}

function clear_filters() {
  search.value = '';
  selectedCategory.value = '';
  result.value = props.data;
  emits('filter', result.value);
}

// Watchers
watch(() => props.data, (oldValue, newValue) => {
  filter_results();
})
</script>

<style scoped>
/* Your custom styles here */
</style>
