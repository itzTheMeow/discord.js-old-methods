const djs = require('discord.js');
const { Client, GuildMember, UserManager, GuildMemberRoleManager, Guild } = require('discord.js');

/**
 * Adds the methods into discord.js version 12.
 *
 * @return {number} x raised to the n-th power.
 */

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
  GuildMember.prototype.setRoles = function (r1, r2) {
    return this.roles.set(r1, r2);
  };
  GuildMemberRoleManager.prototype.get = function (r) {
    return this.cache.get(r);
  };
  GuildMember.prototype.colorRole = function () {
    return this.roles.color;
  };
  GuildMember.prototype.highestRole = function () {
    return this.roles.highest;
  };
  GuildMember.prototype.hoistRole = function () {
    return this.roles.hoist;
  };
  Guild.prototype.ban = function (m1, m2) {
    return this.members.ban(m1, m2);
  };
  Guild.prototype.unban = function (m1, m2) {
    return this.members.unban(m1, m2);
  };

  return djs;
};

//module.exports() /* test */