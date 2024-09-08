<template>
  <div id="info-section" class="h-48 bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 kpi-container">
    <div class="flex items-center justify-between h-1/3">
      <div>
        <img width="32px" src="/perfil.png" alt="User Icon">
      </div>
      <div @click="refreshStatus()" class="flex flex-col items-center justify-center gap-1 cursor-pointer">
        <Icon size="1.5em" :class="'text-'+props.colorTheme" name="mage:reload-reverse"/>
      </div>
    </div>
    <div class="flex flex-col mt-2 h-2/3">
      <h2 class="text-gray-700 text-md font-medium">Usuários</h2>
      <p class="text-ge-violet text-2xl font-semibold mt-1">{{ amount }}</p>
      <div class="w-full flex justify-end mt-auto">
        <p class="text-gray-500 text-xs">19/07/2002 13:40:55</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//Props
const props = defineProps({

  icon: {
    type: String,
    required: true
  },

  colorTheme: {
    type: String,
    required: false,
    default: 'ge-violet'
  },

  actionClass: {
    type: String,
    required: true
  }
})
//Emits

//Reactive variables
import actions from "~/actions";

const amount = ref(null);
//Computed

//Methods
async function refreshStatus() {
  amount.value = (await actions[props.actionClass].count()).data;
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