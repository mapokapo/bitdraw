import { setup, update, background, Color, center, circle, Vector2, CANVAS_HEIGHT, CANVAS_WIDTH } from "../../src";

setup(() => {
    background(600, 600, new Color("#000000"));
    center(true);
});

let r: number = 50;
let loc: Vector2 = new Vector2(r, CANVAS_HEIGHT/2);
update(() => {
    circle(loc, r, new Color("#ffffff"), true);
    loc.addAndMutate(new Vector2(5, 0));
    if (loc.x - r >= CANVAS_WIDTH) loc.x = -r;
});