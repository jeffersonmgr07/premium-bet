import { parse } from "csv-parse";
import League from "../models/League.js";
import Match from "../models/Match.js";

export const importMatchesFromCsv = async (buffer) => {
  return new Promise((resolve, reject) => {
    parse(buffer, { columns: true, trim: true }, async (err, rows) => {
      if (err) return reject(err);
      try {
        for (const row of rows) {
          const {
            leagueName,
            leagueCode,
            homeTeam,
            awayTeam,
            startTime,
            oddHome,
            oddDraw,
            oddAway
          } = row;

          let league = await League.findOne({ code: leagueCode });
          if (!league) {
            league = await League.create({
              name: leagueName,
              code: leagueCode
            });
          }

          await Match.create({
            league: league._id,
            homeTeam,
            awayTeam,
            startTime: new Date(startTime),
            odds1x2: {
              home: Number(oddHome),
              draw: Number(oddDraw),
              away: Number(oddAway)
            }
          });
        }
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  });
};
