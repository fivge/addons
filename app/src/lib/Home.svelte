<script>
    import dayjs from "dayjs";
    import "dayjs/locale/zh-cn";
    import Modal from "svelte-simple-modal";

    import Setting from "./Setting.svelte";
    import { getRgbColor } from "../tools/color";
    import bgImg from "../assets/bg.png";

    dayjs.locale("zh-cn");

    let search = "";

    let now = new Date();
    $: date = dayjs(now).format("M月D日 dddd");
    $: time = dayjs(now).format("HH:mm");

    const config = {
        themeColor: "#fff",
        bgColor: "#141516",
        bgImg,
        bgPosition: "bottom",
    };

    $: rgbColor = getRgbColor(config.themeColor);

    const onSearch = ({ keyCode }) => {
        if (keyCode === 13) {
            const url = "https://www.google.com/search?q=" + encodeURIComponent(search);
            chrome.tabs.create({ url });
        }
    };

    setInterval(() => {
        now = new Date();
    }, 30 * 1000);
</script>

<div
    class="home"
    style="--theme-color: {config.themeColor};--rgb-color: {rgbColor};--bg-image: url({bgImg});--bg-color: {config.bgColor};--bg-position: {config.bgPosition}"
>
    <div class="header">
        <div>你好</div>
        <Modal>
            <Setting />
        </Modal>
    </div>
    <div class="search">
        <input type="search" bind:value={search} class="search-input" placeholder="Search Google" on:keydown={onSearch} />
    </div>
    <div class="footer">
        <div class="time-zone">
            <div class="time">{time}</div>
            <div class="date">{date}</div>
        </div>
    </div>
</div>

<style>
    .home {
        height: 100%;
        background: no-repeat var(--bg-image) var(--bg-position) / 100vw auto var(--bg-color);
        display: flex;
        flex-direction: column;
    }

    .header {
        padding: 32px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        font-size: 32px;
        color: var(--theme-color);
    }

    .search {
        width: 100%;
        text-align: center;
    }

    .search-input {
        background: var(--bg-color);
        width: 40%;
        border: 2px solid rgba(255, 255, 255, 0);
        border-bottom: 2px solid rgba(var(--rgb-color), 0.3);
        padding: 10px;

        transition: all ease-in-out 0.3s;
        font-size: 32px;
        color: var(--theme-color);
    }

    .search-input:hover {
        /* border: 2px solid rgba(var(--rgb-color), 0.3); */
        /* border-radius: 32px; */
    }

    .footer {
        flex: 1;

        padding: 24px 32px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .time-zone {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        color: var(--theme-color);
        line-height: 1;
        text-align: right;
    }

    .time {
        font-size: 48px;
        text-shadow: 0 0 4px rgba(var(--rgb-color), 0.6);
    }

    .date {
        margin-top: 12px;
        font-size: 18px;
        text-shadow: 0 0 1px rgba(var(--rgb-color), 0.6);
    }
</style>
