<script setup>
import BorderLink from '../components/BorderLink.vue';
import { useCountriesStore } from '../stores/countriesStore';
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
const route = useRoute();
const store = useCountriesStore();
const router = useRouter();
const id = route.params.id;
const countryData = ref({});

onBeforeMount(async () => {
    countryData.value = store.globalAllCountries.find((country) => {
        return country.ccn3 === id;
    });
});
</script>
<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- --------------------------- -->
<template>
    <div class="country-detail" :class="{ dark: store.darkMode }">
        <button :class="{ dark: store.darkMode }" class="btn go-back" @click="router.go(-1)">
            <img src="../assets/icons/left-arrow.svg" />Back
        </button>
        <div class="container">
            <div class="img-container">
                <img class="flag" :src="countryData.flags.png" />
            </div>
            <div class="text-container">
                <div class="flex-container-A">
                    <div class="country-name">{{ countryData.name.common }}</div>
                    <div class="flex-container-B">
                        <div class="text-container-A">
                            <p class="country-details">
                                Native Name:
                                <span :class="{ dark: store.darkMode }">{{
                                    Object.values(countryData.name.nativeName)[0].common
                                }}</span>
                            </p>
                            <p class="country-details">
                                Population:
                                <span :class="{ dark: store.darkMode }">{{
                                    countryData.population.toLocaleString()
                                }}</span>
                            </p>
                            <p class="country-details">
                                Ragion: <span :class="{ dark: store.darkMode }">{{ countryData.region }}</span>
                            </p>
                            <p class="country-details">
                                Sub Ragion: <span :class="{ dark: store.darkMode }">{{ countryData.subregion }}</span>
                            </p>
                            <p class="country-details">
                                Capital:
                                <span :class="{ dark: store.darkMode }">{{
                                    String(Object.values(countryData.capital))
                                }}</span>
                            </p>
                        </div>
                        <div class="text-container-B">
                            <p class="country-details">
                                Top Level Domain:
                                <span :class="{ dark: store.darkMode }">{{ countryData.tld[0] }}</span>
                            </p>
                            <p class="country-details">
                                Currencies:
                                <span :class="{ dark: store.darkMode }">{{
                                    Object.values(countryData.currencies)[0].name
                                }}</span>
                            </p>
                            <p class="country-details">
                                Languages:
                                <span :class="{ dark: store.darkMode }">{{
                                    String(Object.values(countryData.languages))
                                }}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="borders-container">
                    <p v-if="countryData.borders" class="country-details">Border Countries:</p>

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
    padding: 40px 28px 60px;
    color: $text-color;
    background-color: $background-color;
    min-height: calc(100vh - 79px);
    color: $text-color;

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
        cursor: pointer;
        &.dark {
            background-color: $dark-elements-color;
            color: $dark-text-color;
        }

        img {
            display: inline-block;
            margin-right: 8px;
        }
    }
    .container {
        @media (min-width: 1440px) {
            display: flex;
        }
        .img-container {
            width: 320px;
            height: 229px;
            margin-bottom: 44px;
            border-radius: 8px;
            overflow: hidden;
            @media (min-width: 1440px) {
                width: 560px;
                height: auto;
            }

            .flag {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .text-container {
            @media (min-width: 1440px) {
                flex: 1;
                margin-left: 120px;
            }
            .country-details {
                margin-bottom: 6px;
                font-weight: 600;
                span {
                    font-weight: 300;
                    &.dark {
                        color: $elements-color;
                    }
                }
            }

            .flex-container-A {
                @media (min-width: 1440px) {
                    display: flex;
                    flex-direction: column;
                }
                .country-name {
                    font-size: 22px;
                    font-weight: 800;
                    margin-bottom: 12px;
                }

                .text-container-A {
                    margin-bottom: 32px;
                }
                .text-container-B {
                    margin-bottom: 32px;
                }
            }

            .borders-container {
                .country-details {
                    margin-bottom: 16px;
                    display: flex;
                    flex-wrap: wrap;
                    font-weight: 600;
                    font-size: 16px;
                }
            }
        }
        .flex-container-B {
            display: flex;
        }
    }
}
</style>
