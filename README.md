<!-- ✔✘ -->
# discord.js-old-methods
A W.I.P. npm package that adds discord.js v11 methods to v12!

**USES DISCORD.JS VERSION *12.5.1***

The methods discussed [here](https://discordjs.guide/additional-info/changes-in-v12.html) will be added.

# Methods Added so Far
<sub><sup>*Tested methods are marked with a check.*</sup></sub>

- ✔ Client.fetchUser
- ✔ Guild.ban
- ✔ Guild.unban
- ✔ GuildMember.addRole[s]
- ✔ GuildMember.colorRole[\*](#notes)
- ✔ GuildMember.highestRole[\*](#notes)
- ✔ GuildMember.hoistRole[\*](#notes)
- ✔ GuildMember.removeRole[s]
- ✔ GuildMember.setRoles
- ✔ RichEmbed
- ✘ VoiceBroadcast.playFile
- ✘ VoiceBroadcast.playStream
- ✘ VoiceBroadcast.playArbitraryInput
- ✘ VoiceBroadcast.playBroadcast
- ✘ VoiceBroadcast.playOpusStream
- ✘ VoiceBroadcast.playConvertedStream
- ✘ VoiceConnection.playFile
- ✘ VoiceConnection.playStream
- ✘ VoiceConnection.playArbitraryInput
- ✘ VoiceConnection.playBroadcast
- ✘ VoiceConnection.playOpusStream
- ✘ VoiceConnection.playConvertedStream

- Added .get() to Managers. (no more .cache.get())

## Notes
\* Must use as function. It is *currently* not possible for us to make these a string. (submit a PR if you know how)