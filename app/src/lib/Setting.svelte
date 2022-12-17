<script>
    import { getContext } from "svelte";
    import Popup from "./Popup.svelte";

    const { open } = getContext("simple-modal");

    const onPopup = () => open(Popup, { message: "It's a modal!" });
</script>

<div on:click={onPopup}>
    <i class="fa-solid fa-screwdriver-wrench" />
</div>
