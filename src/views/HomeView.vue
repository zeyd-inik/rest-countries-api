<script setup>
import CountryCard from '@/components/CountryCard.vue';
import { useCountriesStore } from '@/stores/countriesStore';
import { ref, computed, onBeforeMount } from 'vue';

const store = useCountriesStore();

const query = ref('');
const allCountries = ref([]);

const showMenu = ref(false);
const selectSearch = ref(false);

const selectMenuText = ref('Filter by Region');

onBeforeMount(async () => {
    if (localStorage.getItem('darkMode')) {
        store.darkMode = JSON.parse(localStorage.getItem('darkMode'));
    } else {
        localStorage.setItem('darkMode', JSON.stringify(store.darkMode));
    }

    const res = await fetch('https://restcountries.com/v3.1/all');
    allCountries.value = await res.json();
    store.globalAllCountries = allCountries.value;
    console.log(allCountries.value);
});

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};
const selectHandle = (e) => {
    selectSearch.value = true;

    selectMenuText.value.innerText = e.target.innerText;
    selectMenuText.value = e.target.innerText;
    showMenu.value = false;
};
const inputHandle = () => {
    if (query.value) {
        selectSearch.value = false;

        selectMenuText.value.innerText = 'All';
    }
};

const inputFilteredCountries = computed(() => {
    if (lowercasedQuery.value !== '' && lowercasedQuery.value) {
        return allCountries.value.filter((country) => {
            return country.name.common.toLowerCase().includes(lowercasedQuery.value);
        });
    }
    return allCountries.value;
});
const SelectFilteredCountries = computed(() => {
    if (selectMenuText.value.innerText === 'All') {
        return allCountries.value;
    }
    return allCountries.value.filter((country) => {
        return country.region === selectMenuText.value.innerText;
    });
});

const lowercasedQuery = computed(() => {
    return query.value.toLocaleLowerCase();
});
</script>
<!-- -------------------------- -->
<!-- -------------------------- -->
<!-- -------------------------- -->
<template>
    <div class="home" :class="{ dark: store.darkMode }" @click="showMenu = false">
        <div class="filter-container">
            <div class="input-container">
                <img src="../assets/icons/search.svg" class="search" :class="{ dark: store.darkMode }" />
                <input
                    :class="{ dark: store.darkMode }"
                    type="text"
                    placeholder="Search for country..."
                    v-model.trim="query"
                    @input="inputHandle"
                />
            </div>

            <div class="drop-menu-container">
                <div class="drop-menu-select" :class="{ dark: store.darkMode }" @click.stop="toggleMenu">
                    <p ref="selectMenuText">Filter by Region</p>
                    <img src="../assets/icons/bottom-arrow.svg" :class="{ dark: store.darkMode }" class="arrow" />
                </div>
                <div class="drop-menu-options" :class="{ dark: store.darkMode }" @click.stop v-if="showMenu">
                    <div class="drop-menu-option" @click="selectHandle">All</div>
                    <div class="drop-menu-option" @click="selectHandle">Africa</div>
                    <div class="drop-menu-option" @click="selectHandle">Americas</div>
                    <div class="drop-menu-option" @click="selectHandle">Asia</div>
                    <div class="drop-menu-option" @click="selectHandle">Europe</div>
                    <div class="drop-menu-option" @click="selectHandle">Oceania</div>
                </div>
            </div>
        </div>
        <div class="cards-container">
            <country-card
                v-if="selectSearch"
                v-for="country in SelectFilteredCountries"
                :key="country.ccn3"
                :country="country"
            ></country-card>
            <country-card
                v-else
                v-for="country in inputFilteredCountries"
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
        @media (min-width: 1440px) {
            display: flex;
            justify-content: space-between;
            padding-left: 65px;
            padding-right: 65px;
        }
        .input-container {
            position: relative;
            margin-bottom: 40px;
            @media (min-width: 1440px) {
                width: 480px;
                padding: 14px 0 14px 0px;
            }

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
                @media (min-width: 1440px) {
                    width: 480px;
                }
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
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        gap: 75px;
    }
}
</style>
