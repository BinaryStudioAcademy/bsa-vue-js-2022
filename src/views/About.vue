<template>
    <div>
        <div
            class="btn-group"
            srole="group"
            aria-label="Basic radio toggle button group"
        >
            <input
                id="popular"
                type="radio"
                class="btn-check"
                autocomplete="off"
                checked
            >
            <label
                class="btn btn-outline-dark"
                for="popular"
            >
                1 hour
            </label>

            <input
                id="upcoming"
                type="radio"
                class="btn-check"
                autocomplete="off"
            >
            <label
                class="btn btn-outline-dark"
                for="upcoming"
            >
                1 day
            </label>

            <input
                id="top_rated"
                type="radio"
                class="btn-check"
                autocomplete="off"
            >
            <label
                class="btn btn-outline-dark"
                for="top_rated"
            >
                1 week
            </label>

            <input
                id="top_rated"
                type="radio"
                class="btn-check"
                autocomplete="off"
            >
            <label
                class="btn btn-outline-dark"
                for="top_rated"
            >
                1 month
            </label>

            <input
                id="top_rated"
                type="radio"
                class="btn-check"
                autocomplete="off"
            >
            <label
                class="btn btn-outline-dark"
                for="top_rated"
            >
                1 year
            </label>
        </div>

        <LineChart
            class="mt-3"
        />
    </div>
</template>

<script>
    import LineChart from "@/components/LineChart";

    export default {
        components: {
            LineChart,
        },
    };
</script>
