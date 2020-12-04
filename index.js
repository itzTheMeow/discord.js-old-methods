const djs = require('discord.js');
const { Client, GuildMember, UserManager, GuildMemberRoleManager } = require('discord.js');

/**
 * Adds the methods into discord.js version 12.
 *
 * @return {number} x raised to the n-th power.
 */

//read discord
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
  GuildMember.prototype.setRole = GuildMember.prototype.setRoles = function (r1, r2) {
    return this.roles.set(r1, r2);
  };
  GuildMember.prototype.colorRole = function () {
    return this.roles.color;
  };
  GuildMemberRoleManager.prototype.highestRole = function () {};
  GuildMemberRoleManager.prototype.hoistRole = function () {};

  return djs;
};

//module.exports() /* test */