<template>
    <div id="routes" class="mt-3">
      <h3 class=" font-semibold text-[#6a6cfe] mb-3">{{title}}</h3>
      <slot/>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
})

</script>

<style scoped>

</style>