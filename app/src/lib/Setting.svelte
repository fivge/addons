<script>
    import { getContext } from "svelte";
    import Fa from "svelte-fa/src/fa.svelte";
    import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
    import Popup from "./Popup.svelte";

    const { open } = getContext("simple-modal");

    const onPopup = () => open(Popup, { message: "It's a modal!" });
</script>

<div on:click={onPopup}>
    <Fa icon={faScrewdriverWrench} />
</div>
