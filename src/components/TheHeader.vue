<script setup>
import { useCountriesStore } from '@/stores/countriesStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useCountriesStore();

const changeMode = () => {
    store.darkMode = !store.darkMode;
};
</script>
<!-- ------------------------------------------ -->
<!-- ------------------------------------------ -->
<!-- ------------------------------------------ -->
<template>
    <header :class="{ dark: store.darkMode }">
        <h1 @click="router.push('/')">Where in the world?</h1>
        <div @click="changeMode" class="dark-mode-container">
            <img class="icon" src="../assets/icons/moon.svg" />
            <p>Dark Mode</p>
        </div>
    </header>
</template>
<!-- ------------------------------------------ -->
<!-- ------------------------------------------ -->
<!-- ------------------------------------------ -->

<style lang="scss" scoped>
@import '@/assets/global.scss';

header {
    display: flex;
    justify-content: space-between;
    padding: 30px 16px;
    color: $text-color;
    background-color: $dark-text-color;
    font-weight: 800;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    &.dark {
        background-color: $dark-elements-color;
    }

    .dark-mode-container {
        display: flex;
        font-weight: 600;
        cursor: pointer;

        .icon {
            width: 16px;
            height: 16px;
            user-select: none;
        }
        p {
            margin-left: 8px;
            user-select: none;
        }
    }
}
</style>
