<script lang="ts">
    import { goto } from "$app/navigation";

    // nested links logic
    function goToPost() {
        goto(`/blog/${id}`);
    }

	// typescript
	interface Props {
		title: string;
		description: string;
		id: string;
		img_url: string;
	}

	let { title, description, id, img_url }: Props = $props();
</script>

<li class="list-row min-h-30 items-center p-4 sm:py-8 cursor-pointer bg-base-200 rounded-2xl shadow-md" onclick={goToPost}>
		<div>
			<img class="rounded-box size-10" src={img_url} />
		</div>
		<div>
			<div class="text-lg font-semibold uppercase">{title}</div>
			<div class="opacity-60">{description}</div>
		</div>
        <button class={`btn btn-accent btn-sm uppercase hover:btn-primary hidden lg:block`}>elolvasom</button>
</li>
