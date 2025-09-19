<script lang="ts">
      interface Props {
        popular?: boolean;
        title: string;
        description: string;
        }
    let { popular = false, title, description }: Props = $props();
</script>
<div class="card card-sm md:card-lg bg-base-200 w-72 sm:w-96 shadow-sm min-h-1 md:min-h-120">
  <figure>
    <img
      src="https://expresstents.co.uk/wp-content/uploads/2023/06/GS203216.jpg"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class={`badge badge-primary ${popular ? 'block' : 'hidden'} badge-sm sm:badge-md`}>NEPSZERU</div>
    </h2>
    <p>{description}</p>
    <div class="card-actions justify-start">
        <div class="btn btn-accent uppercase">
            megtekint
        </div>
    </div>
  </div>
</div>