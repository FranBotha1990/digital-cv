<template>
    
    <!-- Screen container, page-level -->
    <main class="screen-cnt">

        <!-- Overlay image, behind site content -->
        <div class="overlay-cnt">
            <div class="overlay-image"></div>
        </div>

        <!-- Content container -->
        <div class="content-cnt">
            
            <!-- Buttons -->
            <nav>
                <div class="container flex flex-wrap mx-auto max-w-md sm:justify-between justify-center pb-4">
                    <NuxtLink to="/" class="buttons drop-down delay-500" active-class="active-button">Home</NuxtLink>
                    <NuxtLink to="/profile" class="buttons drop-down delay-600" active-class="active-button">Profile</NuxtLink>
                    <NuxtLink to="/education" class="buttons drop-down delay-700" active-class="active-button">Education</NuxtLink>
                    <NuxtLink to="/projects" class="buttons drop-down delay-800" active-class="active-button">Projects</NuxtLink>
                </div>
            </nav>

            <!-- Page contents added below -->
            <slot />

        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>

</style>