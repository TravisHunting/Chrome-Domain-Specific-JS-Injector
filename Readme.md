# What does this extension do? <br>

When you click the extension button the URL of your currently selected browser tab will be parsed. If a corresponding JS file exists in the "root/scripts/" folder, the script will immediately be run.  

<div align="center">

Extension Button Appearance
<br>

<img src="https://i.imgur.com/zu3Bma5.jpg" alt="Top Right Corner of the Chrome Window">

</div>



# Why do you want it?  <br>

Write yourself a suite of simple (or complex) scripts to make your life easier. 

Automate repetitive browser based tasks (like filling out repetitive forms), parse document data, download images.... Whatever you like. Don't worry about keeping track of your scripts, or entering them into the console. Just click a button!
<br>

# Installing the Extension: <br>

1. Clone the repository 
    - git clone https://github.com/TravisHunting/Chrome-Domain-Specific-JS-Injector.git
2. Open Chrome, then open the menu (3 dots in the top right corner) 
3. Click "More Tools" -> "Extensions"
    - Make sure to enable "Developer mode" with the slide button in the top right corner of the window
5. Click "Load Unpacked Extension" near the top left corner of the window
6. Navigate to the root folder of the extension 
    - In this case, "Chrome-Domain-Specific-JS-Injector"
7. Hit "Select Folder" to finalize.

# Notes: <br>

- If you attempt to run the extension on a site for which a script does not yet exist, you will be notified. If you open the Chrome Developer Tools by pressing F12, you can see exactly what you will need to name the script file in order for it to be run automatically.
- The "Extension Button" is found in the top right corner of the Chrome window. If the button is not visible at first, you may need to click on the small icon that looks like a puzzle piece, then click the 'Pin' icon next to this extension ("Javascript Injector").

<div align="center">

Pin Extension to Browser Bar
<br>

<img src="https://i.imgur.com/AdeTl0x.jpg" alt="Top Right Corner of the Chrome Window" width="300px">

</div>

