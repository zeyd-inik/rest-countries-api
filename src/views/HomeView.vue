<script setup>
import { useCountriesStore } from '@/stores/countriesStore';
import CountryCard from '@/components/CountryCard.vue';
import { ref, onBeforeMount } from 'vue';
const store = useCountriesStore();

const URL = 'https://restcountries.com/v3.1/all';
onBeforeMount(async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    store.globalAllCountries = data;
});

const showMenu = ref(false);
</script>
<!-- -------------------------- -->
<!-- -------------------------- -->
<!-- -------------------------- -->
<template>
    <div class="home" :class="{ dark: store.darkMode }">
        <div class="filter-container">
            <div class="input-container">
                <img src="../assets/icons/search.svg" class="search" :class="{ dark: store.darkMode }" />
                <input :class="{ dark: store.darkMode }" type="text" placeholder="Search for country..." />
            </div>
            <div class="drop-menu-container">
                <div class="drop-menu-select" :class="{ dark: store.darkMode }" @click="showMenu = !showMenu">
                    Filter by Region<img
                        src="../assets/icons/bottom-arrow.svg"
                        :class="{ dark: store.darkMode }"
                        class="arrow"
                    />
                </div>
                <div v-if="showMenu" class="drop-menu-options" :class="{ dark: store.darkMode }">
                    <div class="drop-menu-option">All</div>
                    <div class="drop-menu-option">Africa</div>
                    <div class="drop-menu-option">Americas</div>
                    <div class="drop-menu-option">Asia</div>
                    <div class="drop-menu-option">Europe</div>
                    <div class="drop-menu-option">Oceania</div>
                </div>
            </div>
        </div>
        <div class="cards-container">
            <country-card
                v-for="country in store.globalAllCountries"
                :key="country.ccn3"
                :country="country"
            ></country-card>
        </div>
    </div>
</template>
<!-- -------------------------- -->
<!-- -------------------------- -->
<!-- -------------------------- -->

<style lang="scss" scoped>
.home {
    padding: 24px 16px;
    min-height: 100vh;
    background-color: $background-color;
    color: $text-color;
    &.dark {
        background-color: $dark-background-color;
    }
    .filter-container {
        .input-container {
            position: relative;
            margin-bottom: 40px;

            input[type='text'] {
                width: 100%;
                border: none;
                border-radius: 5px;
                padding: 14px 0 14px 74px;
                font-size: 12px;
                font-weight: 400;
                color: $text-color;
                background-color: $dark-text-color;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
                outline: none;
                transition: box-shadow 0.3s ease;
                &.dark {
                    background-color: $dark-elements-color;
                    color: $elements-color;
                    &::placeholder {
                        color: $elements-color;
                        font-weight: 500;
                    }
                }
                &:focus {
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
                    &::placeholder {
                        color: transparent;
                        font-weight: 500;
                    }
                }
                &::placeholder {
                    color: $elements-color;
                    font-weight: 500;
                }
            }
            .search {
                position: absolute;
                top: 50%;
                left: 16px;
                transform: translateY(-50%);
                width: 32px;
                height: 16px;
                background-color: transparent;
                &.dark {
                    color: $background-color;
                }
            }
        }
        .drop-menu-container {
            position: relative;
            width: 200px;
            .drop-menu-select {
                user-select: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                height: 48px;
                width: 100%;
                border: none;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
                border-radius: 5px;
                margin-bottom: 5px;
                padding: 24px 14px;
                font-size: 14px;
                font-weight: 400;
                color: $text-color;
                background-color: $dark-text-color;
                outline: none;
                cursor: pointer;
                &.dark {
                    background-color: $dark-elements-color;
                    color: $background-color;
                }

                .arrow {
                    position: absolute;
                    color: $text-color;
                    top: 50%;
                    right: 16px;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    &.dark {
                        background-color: $dark-elements-color !important;
                        color: $background-color !important;
                    }
                }
            }
            .drop-menu-options {
                background-color: $dark-text-color;
                padding-top: 16px;
                border-radius: 5px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
                position: absolute;
                width: 100%;
                &.dark {
                    background-color: $dark-elements-color;
                    color: $background-color;
                }

                .drop-menu-option {
                    padding: 4px 0 4px 24px;

                    align-items: center;
                    width: 100%;
                    overflow-x: visible;
                    font-size: 12px;
                    cursor: pointer;
                    transition: font-weight ease 0.2s;
                    &:hover {
                        font-weight: 700;
                    }
                    &:last-of-type {
                        padding-bottom: 16px;
                    }
                }
            }
        }
    }
    .cards-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
}
</style>
