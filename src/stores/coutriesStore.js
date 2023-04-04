import { defineStore } from 'pinia';

export const useCountriesStore = defineStore({
    id: 'countries',
    state: () => ({
        darkMode: false,
    }),
    getters: {},
    actions: {},
});
