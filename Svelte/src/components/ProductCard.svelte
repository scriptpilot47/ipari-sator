<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import ProductCardSkeleton from "./Skeletons/ProductCardSkeleton.svelte";

  function goToAbout() {
    goto(`/products/${id}`);
  }

  // skeleton logic
  let loaded = $state(false);
  let imageRef;

  function onLoad() {
    loaded = true;
  }

  onMount(() => {
    if (imageRef?.complete) {
      loaded = true;
    }
  });

  // props typescript

  interface Props {
    popular?: boolean;
    sale?: boolean;
    title: string;
    description: string;
    id: string;
    img_url: string;
    price: number;
    sale_og_price: number;
  }
  
  let { popular = false, title, description, id, img_url, price, sale, sale_og_price }: Props = $props();
</script>
<button onclick={goToAbout} class={`card card-sm md:card-lg bg-base-200 w-72 sm:w-96 shadow-sm min-h-1 md:min-h-130 hover:cursor-pointer ${loaded ? '' : 'hidden'}`}>
  <figure>
    <img
      src={img_url}
      alt="" bind:this={imageRef} onload={onLoad} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class={`badge badge-primary ${popular ? 'block' : 'hidden'} badge-sm sm:badge-md`}>NEPSZERU</div>
      <div class={`badge bg-red-500 ${sale ? 'block' : 'hidden'} badge-sm sm:badge-md`}>AKCIO</div>
    </h2>
    <h3 class={`text-left mb-2`}>
      <span class={`${sale ? 'line-through mr-4' : ''}`}>
      {sale ? `${sale_og_price.toLocaleString('hu-HU')} Ft.` : price.toLocaleString('hu-HU')}
      </span>
			<span class="font-normal italic">{sale ? '' : ' Ft. + afa'}</span>
			<span class="font-normal no_underline">{sale ? price.toLocaleString('hu-HU') : ''}{sale ? ' Ft. + afa' : ''}</span>
    </h3>
    <p class="text-left">{description}</p>
    <div class="card-actions justify-start">
        <a href='/products/{id}' class="btn btn-accent uppercase hover:bg-primary">
            megtekint
        </a>
    </div>
  </div>
</button>
{#if !loaded}
    <ProductCardSkeleton />
{/if}