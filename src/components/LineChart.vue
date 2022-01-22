<script>
    import { Line } from "vue-chartjs";
    import defaultOptions from "@/config/chartDefaultOptions";

    export default {
        extends: Line,
        props: {
            labels: {
                type: Array,
                default: () => [
                    "16.01.2022",
                    "17.01.2022",
                    "18.01.2022",
                    "19.01.2022",
                    "20.01.2022",
                    "21.01.2022",
                    "22.01.2022",
                ],
            },
            data: {
                type: Array,
                default: () => [40, 39, 10, 40, 39, 81, 40,],
            },
        },
        data() {
            return {
                gradient: null,
            };
        },
        mounted() {
            this.gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);
            this.gradient2 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
            this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
            this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

            this.renderChart(
                {
                    labels:  this.labels,
                    datasets: [
                        {
                            borderColor: "#FC2525",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "white",
                            backgroundColor: this.gradient,
                            data: this.data,
                        },
                    ],
                },
                defaultOptions
            );
        },
    };
</script>
