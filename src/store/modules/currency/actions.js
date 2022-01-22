import { FETCH_CURRENCY } from "./types/actions";
import { SET_CURRENCY } from "./types/mutations";

export function getActions() {
    return {
        [FETCH_CURRENCY]({ commit, }) {
            // todo: fetch currency data
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit(SET_CURRENCY,
                        {
                            BTC: {
                                USD: 10000,
                            },
                            ETH: {
                                UAH: 100000,
                            },
                        }
                    );
                    resolve();
                }, 500);
            });
        },
    };
}
