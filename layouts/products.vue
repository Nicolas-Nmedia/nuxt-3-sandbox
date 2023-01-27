<script setup lang="ts">
    
</script>

<template>
    <header>
        <nav class="main-nav" aria-label="Navigation principale">
            <nuxt-link to="/products" class="main-logo">Marchandise Nuxt Ninjutsu</nuxt-link>
        </nav>
    </header>

    <!-- Main content -->
    <main>
        <slot />
    </main>

    <footer>
        <nav class="secondary-navigation" aria-label="Navigation secondaire">
            <nuxt-link to="/">Maison</nuxt-link>
            <nuxt-link to="/about">À propos</nuxt-link>
            <nuxt-link to="/products">Nos produits</nuxt-link>
        </nav>
    </footer>
</template>

<style lang="scss">

</style>