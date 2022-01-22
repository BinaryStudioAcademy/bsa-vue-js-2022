<template>
    <div>
        <!-- SEARCH BLOCK -->
        <h2 class="text-start">
            Add new currency
        </h2>
        <hr>
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': error }"
                placeholder="Enter cryptocurrency here"
            >
            <select
                class="form-select max-width"
                aria-label="Default select example"
            >
                <option value="UAH">
                    UAH
                </option>
                <option value="USD">
                    USD
                </option>
                <option value="EUR">
                    EUR
                </option>
                <option value="JPY">
                    JPY
                </option>
                <option value="CAD">
                    CAD
                </option>
                <option value="CHF">
                    CHF
                </option>
                <option value="GBP">
                    GBP
                </option>
            </select>
            <button class="btn btn-outline-primary col-3">
                Add currency
            </button>
        </div>
        <div
            v-if="error"
            class="text-danger text-start mt-3"
        >
            Some error
        </div>
        <h2 class="text-start mt-5">
            Filter
        </h2>
        <hr>

        <!-- FILTERS BLOCK -->
        <div class="row">
            <div class="col-6">
                <div class="text-start mb-3">
                    Crypto currency:
                </div>
                <div class="d-flex">
                    <button class="btn btn-light px-3 me-1">
                        BTC
                    </button>
                    <button class="btn btn-light px-3 me-1">
                        ETH
                    </button>
                </div>
            </div>
            <div class="col-6">
                <div class="text-start mb-3">
                    Fiat currency:
                </div>
                <div class="d-flex">
                    <button class="btn btn-light px-3 me-1">
                        USD
                    </button>
                    <button class="btn btn-light px-3 me-1">
                        UAH
                    </button>
                </div>
            </div>
        </div>
        <hr>

        <!-- MAIN BLOCK -->
        <main class="mt-3">
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col">
                    <div
                        class="card mb-4 rounded-3 shadow-sm"
                    >
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">
                                BTC - USD
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="py-4 fw-bold fs-3">
                                0.0025
                            </div>
                            <div class="d-flex">
                                <button
                                    type="button"
                                    class="w-100 btn btn-lg btn-outline-primary me-1"
                                >
                                    Details
                                </button>
                                <button
                                    type="button"
                                    class="w-100 btn btn-lg btn-outline-danger ms-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">
                                ETH - UAH
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="py-4 fw-bold fs-3">
                                0.1111
                            </div>
                            <div class="d-flex">
                                <button
                                    type="button"
                                    class="w-100 btn btn-lg btn-outline-primary me-1"
                                >
                                    Details
                                </button>
                                <button
                                    type="button"
                                    class="w-100 btn btn-lg btn-outline-danger ms-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- CHART BLOCK -->
        <div v-if="selectedPair">
            <h2 class="text-start mt-5">
                Graphic
            </h2>
            <hr>
            <BarChart />
        </div>
    </div>
</template>

<script>
    import BarChart from "@/components/BarChart";
    import { GET_CURRENCY, GET_CRYPTO_CURRENCY } from "@/store/modules/currency/types/getters";
    import { FETCH_CURRENCY } from "@/store/modules/currency/types/actions";
    import namespace from "@/store/modules/currency/namespace";
    import { mapGetters, mapActions } from "vuex";

    export default {
        components: {
            BarChart,
        },
        data() {
            return {
                error: true,
                selectedPair: "some-pair",
            };
        },
        computed: {
            ...mapGetters(namespace, {
                currency: GET_CURRENCY,
                cryptoCurrency: GET_CRYPTO_CURRENCY,
            }),
        },
        mounted() {
            this.fetchCurrency();
        },
        methods: {
            ...mapActions(namespace, {
                fetchCurrency: FETCH_CURRENCY,
            }),
        },
    };
</script>


<style lang="scss" scoped>
    .max-width {
        max-width: 15%;
    }
</style>
