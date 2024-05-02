const { config } = require("./config");
const { makeRatingFile } = require("./rating-file");
const { updateRating } = require("./calculations");
const { createRating } = require("./calculations");
const { PATH_TO_RATING_FILE, WEIGHT } = require("./config");

module.exports = {
  makeRatingFile,
  config,
  updateRating,
  createRating,
  PATH_TO_RATING_FILE,
  WEIGHT,
};
