<script setup lang="ts">
import { Pokemon } from '~~/utilities/types';

const
    config = useRuntimeConfig(),
    baseURL = config.public.baseURL

const { id }: { id?: string } = useRoute().params
const { data: pokemon, refresh: pokemonRefresh, error: pokemonError } = await useFetch<Pokemon>(`pokemon/${id}`, {
    baseURL,
    key: id
})

definePageMeta({
    layout: "products"
})

</script>

<template>
    <article class="pokemon-file">
        <div class="grid-container">
            <picture class="front-pic">
                <img height="800" width="800" :src="pokemon?.sprites.front_default" :alt="pokemon?.name" />
            </picture>
            
            <div class="pokemon-name">
                <h1>{{ pokemon ? pokemon.name : `Un pokemon`}}</h1>
            </div>
            
            <div class="pokemon-data">
                <a class="encounters-link" :href="pokemon?.location_area_encounters ?? '#'">{{ pokemon?.location_area_encounters }}</a>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
@layer component {
    .pokemon-file {
        container: profile / inline-size;

        .grid-container {
            display: grid;
            grid-template: 
                "front-pic"
                "name"
                "data"
                / minmax(0, 1fr);
        }

        .front-pic {
            grid-area: front-pic;
            place-self: center;
            inline-size: 20ch;

            img {
                inline-size: 100%;
                height: auto;
                aspect-ratio: 1/1;
            }
        }

        .pokemon-name {
            grid-area: name;
            
        }

        .pokemon-data {
            grid-area: data;
        }
    }

    .pokemon-name {
        align-self: center;

        h1 {
            font-size: 5rem;
            overflow-wrap: break-word;
            hyphens: auto;
        }
    }

    @container profile (min-width: 60ch) {
        .pokemon-file .grid-container {
            grid-template: 
                "front-pic  name"
                "data       data"
                / 1fr       minmax(0, 2fr);
        }


    }
}
</style>