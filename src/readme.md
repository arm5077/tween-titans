# tween-titans
To the rescue!

## API reference
**TweenSelf([options])**

_Options:_
* `target` (HTMLElement): The element you'll be tweening/from which you'll be measuring scroll.
* `margin` (Object): Modifies the dimensions of the scrolling section.
  * `top` (number): The number of pixels to alter the scrollable section at the top.
  * `bottom` (number): The number of pixels to alter the scrollable section at the bottom.
* `waypoints` (Array of `waypoint` objects): Styles the target element should transition between at selected points.
  * `percent` (number): The percentage in the scroll experience where the styles should be fully transitioned.
  * `style`: (Object): A set of CSS properties in Javascript style indicating what the element should look like.
