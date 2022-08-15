let c = document.getElementById("skin-editor-canvas")
let ctx = c.getContext("2d")
let base64 = "YOUR-BASE64-CODE"
let image = new Image();
image.src = base64;
ctx.drawImage(image, 0, 0);
ctx.save();