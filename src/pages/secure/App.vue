<script setup lang="ts">
    import Header from "@components/ui/Header.vue";
    import UserMenu from "@components/ui/menu/UserMenu.vue";
</script>

<template>
   <v-layout>
        <Header />

        <div>
            <UserMenu />
            <div>
                <router-view />
            </div>
        </div>
    </v-layout>
</template>