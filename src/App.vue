<template>
    <div>
        <Header />
        <div
            id="app"
            class="container py-3"
        >
            <router-view />
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        components: {
            Header,
        },
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
