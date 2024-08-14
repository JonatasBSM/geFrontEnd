<template lang="">
    <li>
        <nuxt-link class="cursor-pointer py-2 px-4 text-gray-600 hover:bg-gray-200 rounded flex flex-row items-center" :to="to">
            <Icon :name="icon"/>
            <div class="ml-2">{{ label }}</div>
        </nuxt-link>
    </li>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },

        icon: {
            type: String,
            required: true
        },
      
        to: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>