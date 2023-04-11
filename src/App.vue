<script setup>
import { RouterView, useRoute } from 'vue-router';
import TheHeader from './components/TheHeader.vue';

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
