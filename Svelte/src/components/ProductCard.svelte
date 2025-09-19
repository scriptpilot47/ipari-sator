<script lang="ts">
  import { goto } from "$app/navigation";

  function goToAbout() {
    goto(`/products/${id}`);
  }

  interface Props {
    popular?: boolean;
    title: string;
    description: string;
    id: string
    img_url: string
  }
  
  let { popular = false, title, description, id, img_url }: Props = $props();
</script>
<button onclick={goToAbout} class="card card-sm md:card-lg bg-base-200 w-72 sm:w-96 shadow-sm min-h-1 md:min-h-120 hover:cursor-pointer">
  <figure>
    <img
      src={img_url}
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class={`badge badge-primary ${popular ? 'block' : 'hidden'} badge-sm sm:badge-md`}>NEPSZERU</div>
    </h2>
    <p class="text-left">{description}</p>
    <div class="card-actions justify-start">
        <a href='/products/{id}' class="btn btn-accent uppercase hover:bg-primary">
            megtekint
        </a>
    </div>
  </div>
</button>