const djs = require('discord.js'); // get main library
const { Client, GuildMember, UserManager, GuildMemberRoleManager } = require('discord.js'); // include classes from library

module.exports = function () {
  djs.RichEmbed = djs.MessageEmbed;
  Client.fetchUser = UserManager.fetch;
  GuildMember.prototype.addRole = GuildMember.prototype.addRoles = GuildMemberRoleManager.add;
  GuildMember.prototype.removeRole = GuildMember.prototype.removeRoles = GuildMemberRoleManager.remove;
  //GuildMember.setRole = GuildMember

  return djs; // output new discord.js module
};

//module.exports() /* test */