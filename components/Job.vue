<template>
    <section class="mb-2">
        <h2>{{ title }}</h2>
        <div class="flex justify-between">
            <p>{{ company }}</p>
            <p>{{ dateRange }}</p>
            <p>{{ location }}</p>
        </div>
        <p>{{ companyDescription }}</p>
        <ul>
            <li v-for="(responsibility, index) in responsibilities" key="index">{{ responsibility }}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        props: {
            title: String,
            company: String,
            dateRange: String,
            location: String,
            companyDescription: String,
            responsibilities: Array,
        }
    }
</script>

<style>

</style>