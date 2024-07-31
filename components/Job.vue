<template>

    <!-- Job history component -->
    <section class="mb-6">
        <h2 class="mb-2">{{ title }}</h2>
        <div class="flex justify-between font-semibold text-sm">
            <p>{{ company }}</p>
            <p>{{ dateRange }}</p>
            <p>{{ location }}</p>
        </div>
        <p class="italic pt-2 pb-2">{{ companyDescription }}</p>
        <ul class="list-disc pl-6">
            <li v-for="(responsibility, index) in responsibilities" key="index">{{ responsibility }}</li>
        </ul>
    </section>

</template>

<script setup>

    // Job history props
    const props = defineProps({
        title: {
            type: String,
        },
        company: {
            type: String,
        },
        dateRange: {
            type: String,
        },
        location: {
            type: String,
        },
        companyDescription: {
            type: String,
        },
        responsibilities: {
            type: Array,
        }
    })

</script>

<style>

</style>