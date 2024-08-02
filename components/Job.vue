<template>

    <!-- Job history component -->
    <section class="mb-6">
        <h2 class="mb-2">{{ title }}</h2>
        <div class="flex justify-between font-semibold text-sm text-custcol-indigodye">
            <p>{{ company }}</p>
            <p class="flex"><IconsDateIcon class="[&>svg]:h-4 [&>svg]:w-4 pr-1"/>{{ dateRange }}</p>
        </div>
        <p class="flex italic text-sm pt-1 pb-2 text-custcol-teal"><IconsLocationIcon class="[&>svg]:h-4 [&>svg]:w-4"/>{{ location }}</p>
        <p class="italic pb-2">{{ companyDescription }}</p>
        <ul class="list-disc pl-6">
            <li v-for="(responsibility, index) in responsibilities" key="index" v-html="formatResponsibility(responsibility)"></li>
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

    // Format responsibilities so titles are somewhat darker
    const formatResponsibility = (text) => {
        const [respTitle, respDescription] = text.split(':');

        return `<span class="responsibility-title">${respTitle}</span>: ${respDescription ? respDescription : ''}`;
    };

</script>

<style>

</style>