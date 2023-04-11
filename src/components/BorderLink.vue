<script setup>
import { watch } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';
import { RouterLink, useRouter, useRoute } from 'vue-router';

const store = useCountriesStore();
const router = useRouter();
const route = useRoute();
const props = defineProps(['borderName']);

const cntr = JSON.parse(JSON.stringify(store.globalAllCountries)).find((country) => {
    return country.cca3 === props.borderName;
});

console.log(cntr);
</script>
<!-- ------------------------- -->
<!-- ------------------------- -->
<!-- ------------------------- -->
<template>
    <button @click="router.push('/country-detail/' + cntr.ccn3)" class="btn">{{ cntr.name.common }}</button>
</template>
<!-- ------------------------- -->
<!-- ------------------------- -->
<!-- ------------------------- -->

<style lang="scss" scoped>
.btn {
    width: min-content;
    min-width: 96px;
    margin-right: 10px;
    margin-bottom: 8px;
    padding: 3px 5px;
    border: none;
    border-radius: 5px;
    background-color: $dark-text-color;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.4) 0px 0px 1px 0px;
}
</style>
