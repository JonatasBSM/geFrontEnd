<template>
  <UModal v-model="modelState" @close="emits.refresh">
    <UForm :validate="validate" :state="formattedForm" @submit="onSubmit()">
      <UCard>
        <template #header>
          <div class="flex justify-between">
            <h3>Novo Período Letivo</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
          </div>
        </template>

        <div class="grid grid-cols-1">
          <UFormGroup class="col-span-2" label="Nome:" name="st_nome">
            <UInput v-model="formattedForm.st_nome" placeholder="Nome..."/>
          </UFormGroup>

          <div class="col-span-1 mt-4 grid grid-cols-1 gap-2">

            <UFormGroup name="turnos" label="Turnos:">
              <div class="w-full flex justify-end my-2">
                <UButton
                    :padded="false"
                    color="violet"
                    variant="link"
                    label="Adicionar"
                    icon="i-heroicons-plus-solid"
                    @click="add_turno()"
                />
              </div>
              <div v-for="(turno, index) in formattedForm.turnos">

                <UButtonGroup class="w-full mt-2">
                  <USelect
                      v-model="formattedForm.turnos[index].value"
                      class="w-full"
                      :options="formattedTurnos"
                      option-attribute="name"
                      name="tipo_documento"
                  />
                  <UButton
                      color="red"
                      icon="i-heroicons-trash-solid"
                      @click="remove_turno(index)"
                  />
                </UButtonGroup>
              </div>
            </UFormGroup>

          </div>

        </div>

        <template #footer>
          <div class="flex justify-end">
            <UButton
                icon="i-heroicons-pencil-square"
                size="sm"
                color="violet"
                label="Salvar"
                type="submit"
            />
          </div>
        </template>
      </UCard>
    </UForm>
  </UModal>

</template>

<script setup lang="ts">
//Props

//Emits
import actions from "~/actions";

const emits = defineEmits(['refresh']);
//Reactive variables
const modelState = defineModel('modalState');

const form = defineModel('form', {
  default: {
    st_nome: '',
    turnos: []
  }
});

const formattedForm = ref({});

const turnos = ref([]);

//Computed
const formattedTurnos = computed(() => {

  const defaultOption = { value: '', name: 'Selecione um Turno' };
  const array = turnos.value.map((turno) => {
    return { value: turno.id, name: turno.st_nome };
  });

  return [defaultOption, ...array];
});
//Methods
function add_turno() {
  formattedForm.value.turnos.push({ value: '', name: 'Selecione um Turno' });
}

function remove_turno(index) {
  formattedForm.value.turnos.splice(index, 1);
}

function validate(state: any) {
  const errors = [];

  if (!state.st_nome) {
    errors.push({ path: 'st_nome', message: 'Nome é obrigatório' });
  }
  return errors;
}

function onSubmit() {
  if(formattedForm.value.id) {
    actions.periodoLetivo.update(formattedForm.value)
  } else {
    actions.periodoLetivo.create(formattedForm.value)
  }

  close_modal();
  emits('refresh');
}

function close_modal() {
  modelState.value = false;
}
//Watchers
watch(
    () => form.value,
    (newFormValue) => {
      console.log(newFormValue)
      if (newFormValue) {
        formattedForm.value = {
          ...newFormValue,
          turnos: newFormValue.turnos.map((turno) => {
            return { value: turno.id, name: turno.st_nome };
          }),
        };
      }
    },
    { immediate: true },
    { deep: true }
);
//Lifecycle hooks
onMounted(async () => {
    turnos.value = await (await (actions.turno.list())).data;
})
//Expose
</script>

<style scoped>

</style>