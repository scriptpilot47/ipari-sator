<script lang="ts">
  import ProductCard from "./ProductCard.svelte";
  import Title from "./Title.svelte";
  import type { PageData } from "../routes/$types";
  let { data }: { data: PageData } = $props();
</script>
<div class="p-8">
  <Title text="Kiemelt termekeink" extra='2xl:text-left'/>
  <div class="flex flex-col md:flex-row items-center justify-center 2xl:justify-start gap-10 sm:gap-5">
      {#if data?.products}
        {#each data.products as product}
          <ProductCard
          title={product.title}
          description={product.description}
          popular={product.is_popular}
          id={product.id}
          />
        {/each}
      {/if}
  </div>
</div>