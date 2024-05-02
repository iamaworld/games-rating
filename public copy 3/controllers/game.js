const fs = require("fs").promises;
const { getRandomGame } = require("../appModules/api");
const { PATH_TO_RATING_FILE, config } = require("../appModules/rating");

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports.gameRouteController = gameRouteController;
