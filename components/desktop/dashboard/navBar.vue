<template>
  
  <div class="bg-white rounded-lg flex justify-between items-center py-3 px-8 shadow-md transition-shadow duration-300 cursor-pointer hover:shadow-xl">
    <div id="search-div" class=" flex items-center w-[93%]">
      <Icon style="color: #4b5563" size="1.5em" name="bx:search"/>
      <input class="bg-transparent border-none outline-none ml-1 w-[99%]"
        placeholder="Pesquisar..."
      >
    </div>
    <div id="configurations-div" class="flex items-center w-[7%] justify-end">
      <Icon style="color: #4b5563" size="1.5em" name="bx:bell"/>
      <user-dropw-down class="ml-2"/>
    </div>
  </div>
  
  </template>

<script setup lang="ts">
  import userDropwDown from '~/components/shared/dropdown/userDropDown.vue'
</script>