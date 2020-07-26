![GitHub issues](https://img.shields.io/github/issues/mapokapo/graphical-engine)
![GitHub forks](https://img.shields.io/github/forks/mapokapo/graphical-engine)
![npm bundle size](https://img.shields.io/bundlephobia/min/graphical-engine)
![npm](https://img.shields.io/npm/v/graphical-engine?label=npm)
![GitHub](https://img.shields.io/github/license/mapokapo/graphical-engine)

<br />
<p align="center">
  <a href="https://github.com/mapokapo/graphical-engine">
    <img src="/misc/images/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Bitdraw</h3>
  <p align="center">
    A fun canvas API :space_invader:
    <br />
    <a href="#documentation-book"><strong>Explore the docs</strong></a>
    <br />
    <br />
    <a href="#getting-started-hammer">Get Started</a>
    ·
    <a href="/issues">Report Bug</a>
    ·
    <a href="/issues">Request Feature</a>
  </p>
</p>

## Table of Contents :arrow_down:
* [About the Project](#about-the-project-information_source)
* [Getting Started](#getting-started-hammer)
  * [Quick Start](#quick-start)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage-zap)
* [Documentation](#documentation-book)
* [TODO](#todo-white_check_mark)
* [Contributing](#contributing-heart)
* [License](#license-thumsup)
* [Contact](#contact-phone)
* [Acknowledgements](#acknowledgements-innocent)

## About The Project :information_source:
![Bitdraw Code](/misc/images/example.png?raw=true)

Bitdraw is a simple and opinionated library that eases the use of the HTML5 Canvas API.

This library is focused on simplicity and intuition. As such, it tries to minimize the choice of how to render your content.

Also included are some convenient classes that will make some parts of your app easier to maintain (e.g. Vector manipulation, Hex/RGB color conversion, etc.).

> Note: Although this library is published on npm, it is still in the pre-release stage. Expected bugs and unexpected behavior, as well as breaking changes.

### Built With
This project was made and built with [Typescript](https://www.typescriptlang.org/), and is made for use in a [Typescript environment](https://webpack.js.org/guides/typescript/), although it is not required.

The bundled code published on NPM is built with [Webpack](https://webpack.js.org/), using the `ts-loader` package.

## Getting Started :hammer:

### Quick Start
1. Clone the [`/misc/examples/`](/mist/examples) folder and cd into it
```sh
git clone https://github.com/mapokapo/graphical-engine.git && cd graphical-engine
```
2. Install required packages
```sh
npm install
```
3. Run Webpack
```sh
npm start
```
4. Done! You can now publish your files or double-click your index.html file.


### Prerequisites
* [Node.js](https://nodejs.org/en/download/)
* NPM
```sh
$ npm install npm@latest -g
```

### Installation
1. Create a new NPM project
```sh
$ npm init
```
2. Install the package
```sh
$ npm i graphical-engine
```
3. Create an index.html file with a `<canvas id="canvas"></canvas>` inside it, as well as a link to your bundled code. You can find a template [here](/misc/example/index.html).
4. Install bundling software
```sh
$ npm i -D webpack webpack-cli typescript ts-loader
```
5. Build your code with Webpack
```sh
npx webpack
```
6. Done! You can now publish your files or double-click your index.html file.

## Usage :zap:
This library can be imported through the ES6 `import { ... } from ...` statement AKA ESM, which is natively supported by Typescript.

Using the `import * as Package from ...` statement is **not recommended**, as the bundled files could potentially contain useless code.
You can also import the library using the CommonJS `require()` function, although this is not recommended as CommonJS modules are not tree-shakable.

You can view more at the [Example](/misc/example)


## TODO :white_check_mark:
- [ ] Support transparency in the Color class.
- [ ] Implement additional layers over the Canvas API (text, transform, styles, shapes...)

See the [open issues](/issues) for a list of proposed features (and known issues).

## Documentation :book:
1. [Drawing Methods](#drawing-methods)
	* [background](#backgroundwidth-height-color)
	* [stroke](#strokeloc1-loc2-color-width)
	* [circle](#circleloc-radius-color-fill-width)
	* [arc](#arcloc-radius-color-startangle-endangle-fill-width)
	* [rect](#rectloc1-loc2-color-fill-width)
	* [triangle](#triangleloc1-loc2-loc3-color-fill-width)
2. [Utility Methods](#utility-methods)
	* [clear](#clear)
	* [center](#center)
	* [setup](#setupcallback)
	* [update](#updatecallback)
3. [Globals](#globals)
	* [canvas](#canvas---htmlcanvaselement)
	* [ctx](#ctx---canvasrenderingcontext2d)
	* [CANVAS_WIDTH](#canvas_width---number)
	* [CANVAS_HEIGHT](#canvas_height---number)
4. [Utilities](#utilities)
	* [Vector2](#class-vector2)
	* [Color](#class-color)

### Drawing Methods
#### background(width, height, color)
* parameters:
	* `width` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The new canvas width.
	* `height` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The new canvas height.
	* `color` - <[Color](#utilitiescolor)> The new canvas color.
* description:
	* This method resizes the canvas to the specified size, and simply draws a rectangle covering the entire canvas with the specified fill color.

#### stroke(loc1, loc2, color, width?)
* parameters:
	* `loc1` - <[Vector2](#utilitiesvector2)> The first point.
	* `loc2` - <[Vector2](#utilitiesvector2)> The second point.
	* `color` - <[Color](#utilitiescolor)> The color of the line.
	* `width` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The width of the line in pixels. `1` by default.
* description:
	* This methods draws a line connecting the 2 supplied vertices.

#### circle(loc, radius, color, fill, width?)
* parameters:
	* `loc` - <[Vector2](#utilitiesvector2)> The central vertex of the circle.
	* `radius` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The radius of the circle in pixels.
	* `color` - <[Color](#utilitiescolor)> The color of the circle.
	* `fill` - <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether the circle should be filled.
	* `width` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The width of the circle border in pixels. `1` by default.
* description:
	* This method draws a circle that can be filled or transparent with a border.

#### arc(loc, radius, color, startAngle, endAngle, fill, width?)
* parameters:
	* `loc` - <[Vector2](#utilitiesvector2)> The center of the arc.
	* `radius` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The radius of the arc in pixels.
	* `color` - <[Color](#utilitiescolor)> The color of the arc.
	* `startAngle` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The starting angle of the arc in radians.
	* `endAngle` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The ending angle of the arc in radians.
	* `fill` - <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether the arc should be filled.
	* `width` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The width of the arc border in pixels. `1` by default.
* description:
	* This method draws a circle sector (a *'slice of pie'* shape). The starting and ending angles are in a clockwise order.

#### rect(loc1, loc2, color, fill, width?)
* parameters:
	* `loc1` - <[Vector2](#utilitiesvector2)> The first vertex of the rectangle.
	* `loc2` - <[Vector2](#utilitiesvector2)> The vertex opposite/diagonal to the first vertex.
	* `color` - <[Color](#utilitiescolor)> The color of the rectangle.
	* `fill` - <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether the rectangle should be filled.
	* `width` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The width of the rectangle border in pixels. `1` by default.
* description:
	* This method draws a rectangle that can be filled or transparent with a border.

#### triangle(loc1, loc2, loc3, color, fill, width?)
* parameters:
	* `loc1` - <[Vector2](#utilitiesvector2)> The first vertex of the triangle.
	* `loc2` - <[Vector2](#utilitiesvector2)>The second vertex of the triangle.
	* `loc2` - <[Vector2](#utilitiesvector2)> The third vertex of the triangle.
	* `color` - <[Color](#utilitiescolor)> The color of the triangle.
	* `fill` - <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether the triangle should be filled.
	* `width` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The width of the triangle border in pixels. `1` by default.
* description:
	* This function draws a triangle connecting the 3 provided vertices. It can be filled or transparent with a border. The order of the vertices does not matter.

### Utility Methods
#### clear()
* description:
	* This function simply calls `background()`, except the arguments are always the current canvas width and height, and the color used in the last `background()`call. It is used to clear the canvas.
#### center(absolute?)
* parameters:
	* `absolute` - <[?boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether the element should be centered absolutely using `transform: translate(-50%, -50%)`, or use `margin: auto;` (in a flex parent). `true` by default.
* description:
	* This function is purely a DOM manipulation function: it centers the canvas element.
#### setup(callback)
* parameters:
	* `callback` - <[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)> The callback that gets executed upon app startup.
* description:
	* The callback passed to this method is called once, on app startup. This is initialization and DOM methods should be ideally called, for performance reasons.

#### update(callback)
* parameters:
	* `callback` - <[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type))> The callback that gets executed every frame. It recieves `deltaTime`; the number of miliseconds between the previous and last frame.
* description:
	* This function initialises the main app loop. The provided callback is called every frame with the number of miliseconds between the previous and last frame.

### Globals
#### canvas - <[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)>
The canvas element.
#### ctx - <[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)>
The 2D canvas rendering context.
#### CANVAS_WIDTH - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)>
The current width of the canvas element.
#### CANVAS_HEIGHT - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)>
The current height of the canvas element.

### Utilities
### class: Vector2
A 2D vector class that contains useful methods for creating and manipulating vectors.
#### Properties:
* `x` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - The X coordinate of the vector.
* `y` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - The Y coordinate of the vector.

#### Methods:
* *static* **Vector2.from(v)**
  * Creates a new vector from the coordinates of the supplied vector.
  * *param* `v` - <[Vector2](#utilitiesvector2)> A vector.
  * returns <[Vector2](#utilitiesvector2)> - A new vector.


* **getDirection()**
	* Returns the angle from the X-axis to the vector.
	* returns <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Angle in radians.

* **setDirection(radians)**
	* Sets the direction of the vector.
	* *param* `radians` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Angle in radians.

* **getMagnitude()**
	* Gets the length of a vector from the origin.
	* returns <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Length of vector.

* **setMagnitude(magnitude)**
	* Sets the vector's length.
	* *param* `magnitude` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The number to set the vectors magnitude to.

* **add(v)**
	* Returns the result of adding two vectors together.
	* *param* `v` - <[Vector2](#utilitiesvector2)> Another vector.
    * returns <[Vector2](#utilitiesvector2)> - A new vector.
 
* **addAndMutate(v)**
	* Adds the argument vector to this vector.
	* *param* `v` - <[Vector2](#utilitiesvector2)> Another vector.

* **subtract(v)**
	* Returns the result of subtracting the argument vector from this vector.
	* *param* `v` - <[Vector2](#utilitiesvector2)> Another vector.
    * returns <[Vector2](#utilitiesvector2)> - A new vector.
 
* **subtractAndMutate(v)**
	* Subtracts the argument vector from this vector.
	* *param* `v` - <[Vector2](#utilitiesvector2)> Another vector.

* **multiply(scalar)**
	* Returns the result of multiplying this vector by the provided scalar.
	* *param* `scalar` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The number by which to multiply this vector.
	* returns <[Vector2](#utilitiesvector2)> - A new vector.
 
* **multiplyAndMutate(scalar)**
	* Multiplies this vector by the provided number.
	* *param* `scalar` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The number by which to multiply this vector.

* **divide(scalar)**
	* Returns the result of dividing this vector by the provided number.
	* *param* `scalar` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The number by which to divide this vector.
	* returns <[Vector2](#utilitiesvector2)> - A new vector.

* **divideAndMutate(scalar)**
	* Divides this vector by the provided number.
	* *param* `scalar` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The number by which to divide this vector.

* **absolute()**
	* Returns an absolute value of this vector. This essentially puts the vector into the first quadrant of the coordinate plane.
    * returns <[Vector2](#utilitiesvector2)> - An absolute vector.
 
* **absoluteAndMutate()**
	* Makes this vector absolute.

* **copy()**
	* Returns a vector identical to this one.
	* returns <[Vector2](#utilitiesvector2)> - A new vector.

* **toString()**
	* Returns a string representation of this vector.
	* returns <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> - A string representing this vector.

* **toArray()**
	* Returns an array representation of this vector.
	* returns <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)>> - An array representing this vector.

* **toObject()**
	* Returns an object representation of this vector.
	* returns <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> - An object representing this vector.

* **set(v)**
	* Sets this vector's coordinates to that of another vector.
	* *param* `v` - <[Vector2](#utilitiesvector2)> Another vector.

* **setCoords(x, y)**
	* Sets this vector's X and Y coordinates the supplied parameters.
	* *param* `x` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The X coordinate.
	* *param* `y` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> The Y coordinate.

* **normalise()**
	* Returns the result of normalising this vector.
	* returns <[Vector2](#utilitiesvector2)> - A normalised vector.

* **normaliseAndMutate()**
	* Normalises this vector.

* **normal(clockwise?)**
	* Returns the normal of this vector.
	* *param* `clockwise` - <[?boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Whether to return the clockwise normal of this vector. `false` by default.
	* returns <[Vector2](#utilitiesvector2)> - A normal vector.

### class: Color
An RGB/hex color class that contains useful methods for translating color formats.
#### Properties:
* `r` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Red.
* `g` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Green.
* `b` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Blue.
* `a` <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> - Alpha.

#### Methods:
* *static* **Color.RGBtoHex(r, g, b)**
  * A helper method that converts an RGB color value to a Hex color value.
  * *param* `r` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Red.
  * *param* `g` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Green.
  * *param* `b` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Blue.
  * returns <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> - A Hex color value string.

* *static* **Color.HexToRGB(hex)**
  * A helper method that converts a Hex color value to an RGB color value.
  * *param* `hex` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> A hex color value string.
  * returns <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> - An object representing an RGB color value. Has `r`, `g`, `b`, and `a` properties.

* **getHex()**
	* Returns a Hex string representation of this Color object.
  * returns <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> - A Hex color value string.

* **getRGB()**
	* Returns an RGB string representation of this Color object.
  * returns <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> - An RGB color value string.

* **getRGBA()**
	* Returns an RGBA string representation of this Color object.
  * returns <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> - An RGBA color value string.

* **setRGB(r, g, b, a?)**
	* Sets the RGBA values of this Color object to the supplied RGBA parameters.
    * *param* `r` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Red.
    * *param* `g` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Green.
    * *param* `b` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Blue.
    * *param* `b` - <[?number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> Alpha. `1` by default.

* **setHex(hex)**
	* Sets the RGBA values of this Color object to the supplied hex string.
  * *param* `hex` - <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> A hex color value string.

## Contributing :heart:
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License :thumbsup:
Distributed under the MIT License. See [`LICENSE`](/LICENSE) for more information.

## Contact :phone:
Bunny - leopetrovic11@gmail.com

Project Link: [https://github.com/mapokapo/graphical-engine](https://github.com/mapokapo/graphical-engine)

## Acknowledgements :innocent:
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png