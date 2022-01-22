import { GET_CURRENCY, GET_CRYPTO_CURRENCY } from "./types/getters";

export function getGetters() {
    return {
        [GET_CURRENCY](state) {
            return state.collection;
        },
        [GET_CRYPTO_CURRENCY](state) {
            return Object.values(state.collection);
        },
    };
}
