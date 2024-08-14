<script>
import subMenuItems from "~/components/dashboard/subMenuItems.vue";
export default {
  props: {
    title: String,
  },
  components: {
    subMenuItems,
  },
};

</script>

<template>
    <div id="routes" class="mt-3">
      <h3 class=" font-semibold text-[#6a6cfe] mb-3">{{title}}</h3>
      <slot/>
    </div>
</template>

<style scoped>

</style>