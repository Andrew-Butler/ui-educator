<script lang="ts" setup>
    import { reactive } from "vue";
    import HelloWorld from "@/components/HelloWorld.vue";

    const x = reactive({ 
        test: 4
    });

</script>
<template>
    <v-app>
        <v-main>
            {{x}}
        </v-main>
    </v-app>
</template>
