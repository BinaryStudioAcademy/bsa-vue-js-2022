import Vue from "vue";
import Vuex from "vuex";
import { getCurrencyModule } from "@/store/modules/currency";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        currency: getCurrencyModule(),
    },
});
