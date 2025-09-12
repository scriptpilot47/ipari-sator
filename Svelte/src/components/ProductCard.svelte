<script lang="ts">
      interface Props {
        popular?: boolean;
        title: string;
        }
    let { popular = false, title }: Props = $props();
</script>
<div class="card card-sm md:card-lg bg-base-200 w-72 sm:w-96 shadow-sm">
  <figure>
    <img
      src="https://api.kismetal.hu/public/1/items/satrak/haz/gallery/gallery_01_km_uth_000.jpg"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class={`badge badge-primary ${popular ? 'block' : 'hidden'} badge-sm sm:badge-md`}>NEPSZERU</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-start">
        <div class="btn btn-accent uppercase">
            megtekint
        </div>
    </div>
  </div>
</div>