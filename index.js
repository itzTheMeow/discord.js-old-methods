const djs = require('discord.js'); // get main library
const { Client, GuildMember } = require('discord.js'); // include classes from library

module.exports = function () {
  djs.RichEmbed = djs.MessageEmbed;
  Client.fetchUser = Client.users.fetch;
  GuildMember.addRole = GuildMember.addRoles = GuildMember.roles.add;
  GuildMember.removeRole = GuildMember.removeRoles = GuildMember.roles.remove;
  //GuildMember.setRole = GuildMember

  return djs; // output new discord.js module
};