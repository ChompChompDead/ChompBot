# Hello there!
This is chompbot's repo. This is chompbots old version, and currently I am making a new version rewritten entirely. Even though this bot might suck, I'll list how to setup the bot. 
<br> 
<br>
## Step one: Getting your bot token 

First, to get your bot token you need to go to the [discord developer portal](https://discord.com/developers/applications). Then you need to make an application. To do that, click the button in the top right corner and follow the steps. After you make your application, you need to make your bot. Just simply click the bot tab on the left side of your screen, and then click "Add Bot"
<br>
<br>
Now that you have your bot, to get the bot token you need to click on the copy token button (or you can just reveal the token and copy it there.)<br>
![No picture :(](https://cdn.discordapp.com/attachments/697634291340804106/770335284998832128/unknown.png)
<br>
<br> 
Remember, your bot token is sacred. Sharing it to anyone can make them have complete control over what your bot does. If that ever happens, just click regenerate token and it will make a new token for you.
<br>
<br>
## Step two: Configuring the bot config files
So anyways, i'm expecting that you have downloaded the files from chompbot or just git cloned them. In your config.json file, make a variable that stores your token (you can do it with any text editor you want). Example:
```json
{
  "token": "Your Token Here",
  "prefix": "Your prefix here"
}
```
<br>
<br>

## Step three: Making the bot use your token
You may ask: "Why isn't the bot already configured to use the token in my config.json file?" It's because my hosting service uses the files directly from my github, so I had to change the files bot token directory and stuff. To change it, just replace these lines in the index.js file. 
<br>
Replace
<br>
![No picture :(](https://cdn.discordapp.com/attachments/697634291340804106/770338276191633408/unknown.png)
<br>
With
<br>
![No picture :(](https://cdn.discordapp.com/attachments/697634291340804106/770338743147429908/unknown.png)

