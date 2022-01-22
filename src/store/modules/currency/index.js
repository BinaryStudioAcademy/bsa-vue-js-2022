import State from "./State";
import mutations from "./mutations";
import {getGetters} from "./getters";
import {getActions} from "./actions";

export function getCurrencyModule() {
    return {
        namespaced: true,
        mutations,
        getters: getGetters(),
        actions: getActions(),
        state: new State(),
    };
}
