import { SET_CURRENCY } from "./types/mutations";

const mutations= {
    [SET_CURRENCY](state, currency) {
        state.collection = currency;
    },
};

export default mutations;
