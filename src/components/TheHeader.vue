<script setup>
import { useCounteriesStore } from 'pinia';

const store = useCounteriesStore();
</script>

<template>
    <header>
        <h1>Where in the world?</h1>
        <div class="dark-mode-container">
            <img class="icon" src="../assets/icons/moon.svg" />
            <p>Dark Mode</p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/global.scss';
header {
    display: flex;
    justify-content: space-between;
    padding: 30px 16px;
    color: $text-color;
    background-color: $background-color;
    font-weight: 800;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    .dark-mode-container {
        display: flex;
        font-weight: 600;

        .icon {
            width: 16px;
            height: 16px;
        }
        p {
            margin-left: 8px;
        }
    }
}
</style>
