<script lang="ts">
    import {onMount} from 'svelte'
	import type { Card } from '../app';
    
    let cards: Card[] = [];
    export let cacheKey: string
    async function  loadImages() {
        try{
            const response = await fetch(`../src/lib/cookies/files.json`)
            const data = await response.json()

            if(data[cacheKey]){
                cards = data[cacheKey]
            }
            else{
                console.error(`Egh? is ${cacheKey} actualy exist?`)
            }
        }
        catch(error){
            console.error("Oops! It looks like images don't want to load, ", error)
        }
    }
    onMount(() => {
    loadImages();
    });
</script>
{#if cards.length > 0}
{#each cards as card }
<div class="card_container">

    <div class="card_header">

        <picture class="pic">

          <img src="{card.card_image_src}" alt="{card.card_name}">
  
        </picture>
    </div>
    <div class="container">
        <h1>{card.card_name}</h1>
       <slot/>
    </div>
</div>
{/each}
{:else}
    <p>Loading...</p>
{/if}
