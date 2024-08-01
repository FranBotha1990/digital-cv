<template>
    <!-- Screen container, page-level -->
    <main class="screen-cnt">
        <!-- Content container -->
        <div class="content-cnt">
            
            <!-- Buttons -->
            <nav>
                <div class="container flex flex-wrap mx-auto max-w-md sm:justify-between justify-center pb-4">
                    <button class="buttons">
                        Home
                    </button>
                    <button class="buttons">
                        Profile
                    </button>
                    <button class="buttons">
                        Education
                    </button>
                    <button class="buttons">
                        Projects
                    </button>
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