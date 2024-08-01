<template>

    <!-- Footer information -->
    <footer class="footer-cnt">
        <div>
            <p class="text-center font-bold">&copy; Francois Botha {{ currentYear }} </p>
        </div>
    </footer>

</template>

<script setup>

    // Get current year
    const currentYear = ref(new Date().getFullYear())

</script>

<style>

</style>