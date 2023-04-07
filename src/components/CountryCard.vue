<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['country']);
</script>

<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<template>
    <router-link :to="'/country-detail/' + country.ccn3">
        <div class="country-cards">
            <img :src="country.flags.svg" />
            <div class="card-info">
                <div class="country-name">{{ country.name.common }}</div>
                <div class="population small-text-info"><span>Population: </span>{{ country.population }}</div>
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
    border-radius: 5px;
    overflow: hidden;
    background-color: $dark-text-color;
    margin-bottom: 32px;

    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    .card-info {
        padding: 24px;
        color: $text-color;
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
