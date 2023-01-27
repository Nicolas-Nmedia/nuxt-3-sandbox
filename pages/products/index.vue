<script setup lang="ts">
import { Pokemon } from '~~/utilities/types';

const minId = 1;
const maxId = 789;

const pokemonId = ref(Math.floor(Math.random() * (maxId - minId + 1) + minId))
const pokemon2Id = Math.floor(Math.random() * (maxId - minId + 1) + minId)

const baseURL = "https://pokeapi.co/api/v2"

const { data: pokemon, refresh: pokemonRefresh, error: pokemonError } = await useFetch<Pokemon>(`pokemon/${pokemonId.value}/`, {
    baseURL,
    key: pokemonId.toString()
});

const { data: pokemon2, refresh: pokemon2Refresh, error: pokemon2Error } = await useFetch<Pokemon>(`pokemon/${pokemon2Id}/`, {
    baseURL,
    key: pokemon2Id.toString()
});
</script>

<template>
    <div class="double-up">
        <div class="panel">
            <span>{{ pokemon?.name }}</span>
            <picture class="hero">
                <img :src="pokemon?.sprites.front_default"
                     :alt="pokemon?.name"
                     width="400"
                     height="400" />
            </picture>
        </div>

        <div class="panel">
            <span>{{ pokemon2?.name }}</span>
            <picture class="hero">
                <img :src="pokemon2?.sprites.front_default"
                     :alt="pokemon2?.name"
                     width="400"
                     height="400" />
            </picture>
        </div>
    </div>
</template>

<style lang="scss">
picture {
    display: block;
}

.hero > img {
    inline-size: 60%;
    height: auto;
    aspect-ratio: 1/1;
}

.double-up {
    display: flex;
    gap: 1rem;

    font-size: 2rem;

    > * {
        flex-basis: 50%;
        flex-grow: 1;
    }
}
</style>