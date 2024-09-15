<template>
    <div class="h-52 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl flex flex-col gap-6">
      <header class="flex justify-between items-center pt-6 px-6 h-[35%]">
        <div v-if="st_title" class="flex gap-3 items-center">
          <div class="col-span-1">
            <img width="32px" v-if="st_image_url" :src="st_image_url" alt="" class="image rounded-lg"/>
          </div>
          <h2 id="card-title">{{st_title}}</h2>
        </div>
        <resource-card-dropdown :to="to" :items="dropdownItems"/>
      </header>
      <section class="grid grid-cols-1 px-6 h-1/2">
          <p v-if="st_content"  id="card-content" class="text-sm text-gray-500">{{st_content}}</p>
      </section>

      <section v-if="st_wikipedia_url" class="flex text-xs items-center justify-end border-t-2 h-[20%]">
        <p id="card-wiki" class="cursor-pointer text-ge-violet text-md transition-transform transform hover:text-blue-900 py-3 px-9">Visualizar Documentação</p>
      </section>
    </div>
</template>

<script setup lang="ts">
import ResourceCardDropdown from "~/components/shared/dropdowns/ResourceCardDropdown.vue";

const props = defineProps({
  st_title: {
    type: String,
    default: ''
  },
  st_image_url: {
    type: String,
    default: ''
  },
  st_content: {
    type: String,
    default: ''
  },
  st_wikipedia_url: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  }
});

const name = 'CustomComponent';
const dropdownItems = [
  [
    { label: 'Ver mais' }
  ],
  [
    { label: 'Fechar' }
  ]
];

</script>

<style scoped>
  #card-title {
    font-family: Montserrat;
    font-weight: bold;
  }

  #card-content {
    font-family: Montserrat;
  }

  #card-wiki {
    font-family: Roboto;
    font-weight: bold;
  }

</style>
