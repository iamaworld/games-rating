const { endpoints } = require("../appModules/api");
const { gotData } = require("../appModules/api/index");
const { staticFile } = require("../appModules/http-utils/static-file");
const { makeRatingFile } = require("../appModules/rating");
const { PATH_TO_RATING_FILE, config } = require("../appModules/rating");

const mainRouteController = async (res, publicUrl, extname) => {
  const data = await gotData(endpoints.games);
  await makeRatingFile(PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
};

module.exports.mainRouteController = mainRouteController;
