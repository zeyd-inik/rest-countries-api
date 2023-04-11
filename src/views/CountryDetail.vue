<script setup>
import { useCountriesStore } from '../stores/countriesStore';
import BorderLink from '../components/BorderLink.vue';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
const route = useRoute();
const store = useCountriesStore();
const id = route.params.id;
const countryData = ref({});
onBeforeMount(async () => {
    countryData.value = await JSON.parse(JSON.stringify(store.globalAllCountries)).find((country) => {
        return country.ccn3 === id;
    });
});
console.log(JSON.parse(JSON.stringify(countryData.value)));
</script>
<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- --------------------------- -->
<template>
    <div class="country-detail" :class="{ dark: store.darkMode }">
        <button class="btn go-back"><img src="../assets/icons/left-arrow.svg" />Back</button>
        <div class="container">
            <div class="img-container">
                <img class="flag" :src="countryData.flags.png" />
            </div>
            <div class="text-container">
                <div class="flex-container">
                    <div class="text-container-A">
                        <div class="country-name">{{ countryData.name.common }}</div>
                        <p class="country-details">
                            Native Name: <span>{{ Object.values(countryData.name.nativeName)[0].common }}</span>
                        </p>
                        <p class="country-details">
                            Population: <span>{{ countryData.population.toLocaleString() }}</span>
                        </p>
                        <p class="country-details">
                            Ragion: <span>{{ countryData.region }}</span>
                        </p>
                        <p class="country-details">
                            Sub Ragion: <span>{{ countryData.subregion }}</span>
                        </p>
                        <p class="country-details">
                            Capital: <span>{{ String(Object.values(countryData.capital)) }}</span>
                        </p>
                    </div>
                    <div class="text-container-B">
                        <p class="country-details">
                            Top Level Domain: <span>{{ countryData.tld[0] }}</span>
                        </p>
                        <p class="country-details">
                            Currencies: <span>{{ Object.values(countryData.currencies)[0].name }}</span>
                        </p>
                        <p class="country-details">
                            Languages: <span>{{ String(Object.values(countryData.languages)) }}</span>
                        </p>
                    </div>
                </div>
                <div class="borders-container">
                    <p class="country-details">Border Countries:</p>
                    <border-link
                        v-for="borderName in countryData.borders"
                        :key="countryData.ccn3"
                        :borderName="borderName"
                    ></border-link>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- --------------------------- -->

<style lang="scss" scoped>
.country-detail {
    padding: 40px 28px;
    color: $text-color;
    background-color: $background-color;
    min-height: 100vh;
    &.dark {
        background-color: $dark-background-color;
        color: $dark-text-color;
    }
    .go-back {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 7px 24px;
        margin-bottom: 64px;
        border: 0;
        outline: 0;
        background-color: $dark-text-color;

        img {
            display: inline-block;
            margin-right: 8px;
        }
    }
    .container {
        .img-container {
            border-radius: 8px;
            overflow: hidden;
            .flag {
                width: 320px;
                height: auto;
                margin-bottom: 44px;
            }
        }
        .text-container {
            .flex-container {
                .country-details {
                    margin-bottom: 6px;
                    font-weight: 600;
                    span {
                        font-weight: 300;
                    }
                }
                .text-container-A {
                    margin-bottom: 32px;
                    .country-name {
                        font-size: 22px;
                        font-weight: 800;
                        margin-bottom: 16px;
                    }
                }
            }
            .borders-container {
                .country-details {
                    margin-bottom: 16px;
                    display: flex;
                    flex-wrap: wrap;
                }
            }
        }
    }
}
</style>
