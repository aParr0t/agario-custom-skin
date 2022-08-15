# agario-custom-skin
A console script that lets you use any 512x512 image as a skin.
Note: this only works on desktop, since (as far as I know) you need to use the
webbrowser's developer tools in process.

## Instructions:
1. Download any 512x512 png image
2. Convert the image to base64 with a website like [Base64-Image](https://www.base64-image.de/)
3. Copy the code from [console script](agario_console_script.js) into a text editor like notepad
4. Copy the base64 code you got from the converter website and replace it instead of YOUR-BASE64-CODE in the script
5. Head over to [agar.io](https://agar.io/) and open the skin editor
6. Press F12, or right-click and select "inspect", to open the developer tools. Then click on "Console" in the toolbar at the top
7. Now paste the script (with your own base64 code) into the console and press Enter
8. Your skin should now be visible on the painter. DO NOT DRAW ANYTHING, as that will erase the image.
9. Save the skin, and enjoy!

## Troubleshooting:
If, for some reason, the skin didn't appear after step 7, following the steps below could help:
Go, one line at a time, through the modified script (the one with your own base64 code). For each line, paste
the line into the console and hit Enter.
