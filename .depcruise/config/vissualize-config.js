/**
 * options.reporterOptionsをカスタマイズして見た目を変える。
 * https://github.com/sverweij/dependency-cruiser/blob/develop/doc/rules-reference.md#reporteroptions
 */

const path = require("path");

const DOT_COLORS = require('./dotConstants/color');

const config = {
    extends: path.resolve(__dirname, "./config.base.js"),
}

module.exports = config;
