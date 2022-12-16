export const getRgbColor = value => {
    let r = 0,
        g = 0,
        b = 0;

    if (value.startsWith("#")) {
        let rgb = value.slice(1);
        if (rgb.length === 3) {
            rgb = `${rgb}${rgb}`;
        }
        rgb = parseInt(rgb, 16);
        r = (rgb & 0xff0000) >> 16;
        g = (rgb & 0x00ff00) >> 8;
        b = (rgb & 0x0000ff) >> 0;
    } else if (value.startsWith("rgb")) {
        const rgb = value
            .split("(")[1]
            .split(")")
            .filter(i => i)[0]
            .split(",")
            .map(i => i.trim());

        r = rgb[0];
        g = rgb[1];
        b = rgb[2];
    }

    return `${r}, ${g}, ${b}`;
};
