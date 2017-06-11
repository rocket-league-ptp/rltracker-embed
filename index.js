"use strict";

module.exports = (rank) => {
  return {
    title: `${rank.player.nickname} (${rank.player.platform})`,
    color: 6267573,
    fields: [
      {
        name: 'Duels (1v1)',
        inline: false,
        value: '**' + `${rank.duels.tier_name} Division ${rank.duels.division_string}` + '**\n' +
               `${rank.duels.rating} (**${rank.duels.mmr}**) - ` +
               `Matches: **${rank.duels.matches_played}**`
      },
      {
        name: 'Doubles (2v2)',
        inline: false,
        value: '**' + `${rank.doubles.tier_name} Division ${rank.doubles.division_string}` + '**\n' +
               `${rank.doubles.rating} (**${rank.doubles.mmr}**) - ` +
               `Matches: **${rank.doubles.matches_played}**`
      },
      {
        name: 'Solo Standard (3v3s)',
        inline: false,
        value: '**' + `${rank.solo.tier_name} Division ${rank.solo.division_string}` + '**\n' +
               `${rank.solo.rating} (**${rank.solo.mmr}**) - ` +
               `Matches: **${rank.solo.matches_played}**`
      },
      {
        name: 'Standard (3v3)',
        inline: false,
        value: '**' + `${rank.standard.tier_name} Division ${rank.standard.division_string}` + '**\n' +
               `${rank.standard.rating} (**${rank.standard.mmr}**) - ` +
               `Matches: **${rank.standard.matches_played}**`
      },
      /*
      {
        name: 'Statistics',
        inline: false,
        value: `Wins: **${rank.stats.wins}**\n` +
               `Goals: **${rank.stats.goals}**\n` +
               `MVPs: **${rank.stats.mvps}**\n` +
               `Saves: **${rank.stats.saves}**\n` +
               `Shots: **${rank.stats.shots}**\n` +
               `Assists **${rank.stats.assists}**`,
      },
      */
      {
        name: 'Wins',
        inline: true,
        value: rank.stats.wins,
      },
      {
        name: 'Goals',
        inline: true,
        value: rank.stats.goals,
      },
      {
        name: 'MVPs',
        inline: true,
        value: rank.stats.mvps,
      },
      {
        name: 'Saves',
        inline: true,
        value: rank.stats.saves,
      },
      {
        name: 'Shots',
        inline: true,
        value: rank.stats.shots,
      },
      {
        name: 'Assists',
        inline: true,
        value: rank.stats.assists,
      },
    ],

    timestamp: new Date(rank.player.updated_at),

    provider: {
      name: 'illegal-function',
      url: 'https://ptpconfig.herokuapp.com/',
    },
    image: {
      url: rank.player.avatar,
    },
    footer: {
      text: 'Rank information provided by RLTracker.pro'
    }
  }
};
