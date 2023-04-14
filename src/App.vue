<script setup>
import TheHeader from './components/TheHeader.vue';
import { useCountriesStore } from './stores/countriesStore';
import { RouterView, useRoute } from 'vue-router';
const store = useCountriesStore();

const route = useRoute();
</script>
<!-- ----------------------------------------------- -->
<!-- ----------------------------------------------- -->
<!-- ----------------------------------------------- -->

<template>
    <div class="app">
        <TheHeader />
        <RouterView :key="route.path" />
    </div>
</template>
<!-- ----------------------------------------------- -->
<!-- ----------------------------------------------- -->
<!-- ----------------------------------------------- -->

<style lang="scss"></style>
