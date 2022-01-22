<script>
    import { Bar } from "vue-chartjs";
    import defaultOptions from "@/config/chartDefaultOptions";

    export default {
        extends: Bar,
        props: {
            data: {
                type: Array,
                default: () => [41, 20, 12, 39,],
            },
        },
        mounted() {
            this.renderChart(
                {
                    labels: Array.from({length: 10,}),
                    datasets: [
                        {
                            backgroundColor: "#f87979",
                            data: this.data,
                        },
                    ],
                },
                {
                    ...defaultOptions,
                    scales: {
                        xAxes: [{ display: false, },],
                    },
                }
            );
        },
    };
</script>
