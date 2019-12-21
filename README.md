# HypeImageBaseEncoder
![HypeImageBaseEncoder|690x487](https://playground.maxziebell.de/Hype/ImageBaseEncoder/HypeImageBaseEncoder.jpg) 
<sup>The cover artwork is not hosted in this repository and &copy;opyrighted by Max Ziebell</sup>

This little extension helps you inline images and reference them without any efforts in your Hype projects. This reduces further request to any files on the server. Turn those beautiful images into ugly little code frogs. It works the following way:

**Instruction:**
1. Use any images as always in Hype
2. On export (only local) the extension writes your images as Base64 code to your console
3. Copy and paste the images you want in-lined from the console (Chrome has a copy button) and paste them to your Head-HTML
4. Requests to that file will from then on be served from that inline content (in previews and exports)
5. To update a file that has been previously inlined repeat the process

**Hints:**
* Doesn't support automatic retina switching
* You can disable preload for inlined images (but isn't a must)
* Disable automatic image optimization to keep your original file (sometimes Hype converts PNG to JPG if enabled)
* Use for small images as Base64 isn't the most size efficient! You can ignore this hint if your app runs local and size isn't a matter. 
* Use [ImageOptim](https://imageoptim.com/) (lossless compression) and [ImageAlpha](https://pngmini.com/) (reduction of colors in PNG) on your files before using this extension to further reduce size before inlining files!
* If you have inlined all images and don't want any local console output you can disable it with `<script>HypeImageBaseEncoder.localConsoleOutput(false);</script>` in your Head-HTML (after including the script). The console output is anyway restricted to local development.

**Version:**\
`1.0   Initial release with simple example`\
`1.1   Added .svg support, jpeg extension and outputOnce`

Content Delivery Network (CDN)
--
Latest version can be linked into your project using the following in the head section of your project:
```html
<script src="https://cdn.jsdelivr.net/gh/worldoptimizer/HypeImageBaseEncoder/HypeImageBaseEncoder.min.js"></script>
```

Optionally you can also link a SRI version or specific releases. 
Read more about that on the JsDelivr (CDN) page for this extension at https://www.jsdelivr.com/package/gh/worldoptimizer/HypeImageBaseEncoder

Learn how to use the latest extension version and how to combine extensions into one file at
https://github.com/worldoptimizer/HypeCookBook/wiki/Including-external-files-and-Hype-extensions
