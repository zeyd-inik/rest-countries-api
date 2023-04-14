<script setup>
import { RouterLink } from 'vue-router';
import { useCountriesStore } from '../stores/countriesStore';

const props = defineProps(['country']);
const store = useCountriesStore();
</script>

<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<template>
    <router-link :to="'/country-detail/' + country.ccn3">
        <div class="country-cards">
            <img :src="country.flags.svg" />
            <div class="card-info" :class="{ dark: store.darkMode }">
                <div class="country-name">{{ country.name.common }}</div>
                <div class="population small-text-info">
                    <span>Population: </span>{{ country.population.toLocaleString() }}
                </div>
                <div class="ragion small-text-info"><span>Region: </span>{{ country.region }}</div>
                <div class="capital small-text-info"><span>Capital: </span>{{ String(country.capital) }}</div>
            </div>
        </div>
    </router-link>
</template>
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.country-cards {
    width: 264px;
    height: 336px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;

    background-color: transparent;
    margin-bottom: 32px;
    letter-spacing: 0.7px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .card-info {
        padding: 24px;
        color: $text-color;
        background-color: $dark-text-color;
        flex: 1;
        &.dark {
            background-color: $dark-elements-color;
            color: $background-color;
        }

        .country-name {
            font-weight: 800;
            font-size: 18px;
            padding-bottom: 16px;
        }
        .small-text-info {
            padding-bottom: 8px;
            font-weight: 300;
        }
        span {
            font-weight: 600;
            font-size: 14px;
        }
    }
}
</style>
