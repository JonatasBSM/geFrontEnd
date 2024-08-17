<template lang="">
    <div>
       <UModal v-model="flOppened" title="Logout" @close="flOppened = false">
            <UCard>
                <template #header>
                    <div class="flex justify-end">
                        <UButton @click="close_modal()" color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"/>
                    </div>
                </template>

                <div class="text-center pt-2">
                    <p>Tem certeza que deseja sair?</p>
                </div>

                <template #footer>
                    <div class="flex justify-end">
                        <div class="grid grid-cols-2 gap-2">
                            <UButton
                                size="sm"
                                color="red"
                                variant="solid"
                                label="Cancelar"
                                :trailing="false"
                                @click="close_modal()"
                            />

                            <UButton
                                size="sm"
                                color="emerald"
                                variant="solid"
                                label="Sim, sair"
                                :trailing="false"
                                @click="logout()"
                            />
                        </div>
                    </div>
                </template>
            </UCard>
        </UModal>   
    </div>
</template>
<script>

export default {
    data() {
        return {
            flOppened: false
        }
    },
    methods: {
        open_modal() {
            this.flOppened = true;
        },

        close_modal() {
            this.flOppened = false;
        },

        logout() {
            const store = useAuthStore();
            store.logout();
        }
    }
}

</script>
<style lang="">
    
</style>