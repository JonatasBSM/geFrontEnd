<template>
  <div id="info-section" class="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
    <div class="flex items-center w-2/3">
      <div class="p-3">
        <img class="w-10 h-10" src="/perfil.png" alt="User Icon">
      </div>
      <div class="ml-3">
        <h2 class="text-gray-700 text-md font-medium">Usuários</h2>
        <p class="text-ge-violet text-xl font-semibold mt-1">{{usersAmount}}</p>
      </div>
    </div>
    <div @click="refreshStatus()" class="flex flex-col items-center w-1/3 justify-center gap-1 cursor-pointer">
      <Icon size="1.5em" class="text-ge-violet hover:text-indigo-600" name="mage:reload-reverse"/>
      <p class="text-gray-600 text-sm font-medium hover:text-gray-900">Atualizar</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
import actions from "~/actions";

const usersAmount = ref(null);
//Computed

//Methods
async function refreshStatus() {
  usersAmount.value = (await actions.usuario.count()).data;
}
//Watchers

//Lifecycle hooks
onMounted(() => {
  refreshStatus();
});
//Expose
</script>

<style scoped>
#info-section {
  font-family: Montserrat;
}
</style>