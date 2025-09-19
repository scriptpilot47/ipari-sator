<script lang="ts">
    interface Props {
        text?: string;
        extra: string;
    }
    let { text, extra = ''}: Props = $props();
</script>
<h1 class="text-center {extra} text-bold text-2xl md:text-4xl font-bold text-base-content py-4">{text}</h1>
