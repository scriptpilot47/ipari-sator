<script lang="ts">
  interface Props {
    material: string;
    dimensions: string;
    color: string;
    area: string;
  }
  
  let { material, dimensions, color, area }: Props = $props();
</script>
<div class="overflow-x-auto my-auto">
  <table class="table table-zebra">
    <!-- head -->
    <tbody>
      <!-- row 1 -->
      <tr>
        <td>Anyag</td>
        <td>{material}</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <td>Szín</td>
        <td>{color}</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <td>Terület</td>
        <td>{area}</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <td>Méret (SZ,H,M)</td>
        <td>{dimensions}</td>
      </tr>
    </tbody>
  </table>
</div>