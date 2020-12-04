const djs = require('discord.js'); // get main library
const { Client, GuildMember, UserManager, GuildMemberRoleManager } = require('discord.js'); // include classes from library

module.exports = function () {
  djs.RichEmbed = djs.MessageEmbed;
  Client.prototype.fetchUser = function (u1, u2, u3) {
    return UserManager.fetch(u1, u2, u3);
  };
  GuildMember.prototype.addRole = GuildMember.prototype.addRoles = function (r1, r2) {
    return this.roles.add(r1, r2);
  };
  GuildMember.prototype.removeRole = GuildMember.prototype.removeRoles = function (r1, r2) {
    return this.roles.remove(r1, r2);
  };

  return djs;
};

//module.exports() /* test */