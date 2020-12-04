const djs = require('discord.js');
const {
  Client,
  GuildMember,
  UserManager,
  GuildMemberRoleManager,
  Guild,
  VoiceBroadcast,
  VoiceConnection,
} = require('discord.js');

/**
 * Adds the methods into discord.js version 12.
 *
 * @return {discord.js} The new discord.js object.
 */

module.exports = function () {
  // Start Other Classes
  djs.RichEmbed = djs.MessageEmbed;

  // Start Client
  Client.prototype.fetchUser = function (u1, u2, u3) {
    return UserManager.fetch(u1, u2, u3);
  };

  // Start Managers
  GuildMemberRoleManager.prototype.get = function (r) {
    return this.cache.get(r);
  };

  // Start GuildMember
  GuildMember.prototype.addRole = GuildMember.prototype.addRoles = function (r1, r2) {
    return this.roles.add(r1, r2);
  };
  GuildMember.prototype.removeRole = GuildMember.prototype.removeRoles = function (r1, r2) {
    return this.roles.remove(r1, r2);
  };
  GuildMember.prototype.setRoles = function (r1, r2) {
    return this.roles.set(r1, r2);
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

  // Start Guild
  Guild.prototype.ban = function (m1, m2) {
    return this.members.ban(m1, m2);
  };
  Guild.prototype.unban = function (m1, m2) {
    return this.members.unban(m1, m2);
  };

  // Start VoiceBroadcast + VoiceConnection
  VoiceBroadcast.prototype.playFile = VoiceBroadcast.prototype.playStream = VoiceBroadcast.prototype.playArbitraryInput = VoiceBroadcast.prototype.playBroadcast = VoiceConnection.prototype.playFile = VoiceConnection.prototype.playStream = VoiceConnection.prototype.playArbitraryInput = VoiceConnection.prototype.playBroadcast = function (
    inp
  ) {
    return this.play(inp);
  };
  VoiceBroadcast.playOpusStream = VoiceConnection.playOpusStream = function (s) {
    return this.play(s, { type: 'opus' });
  };
  VoiceBroadcast.playConvertedStream = VoiceConnection.playConvertedStream = function (s) {
    return this.play(s, { type: 'converted' });
  };

  return djs;
};

//module.exports() /* test *