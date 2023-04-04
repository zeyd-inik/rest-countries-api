<script setup>
import { RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useCounteriesStore } from 'pinia';

import TheHeader from './components/TheHeader.vue';

const store = useCounteriesStore();

onBeforeMount(() => {
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', 'false');
    } else {
        store.darkMode = JSON.parse(localStorage.getItem('darkMode'));
    }
});
</script>

<template>
    <div class="app">
        <TheHeader />
        <RouterView />
    </div>
</template>

<style lang="scss"></style>
