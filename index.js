var _ = require("lodash");
var S = require("string");

var newLineTags = ["p", "div", "br"];

function crop(str, length) {
  length = length || 100;
  var textShort = S(str).decodeHtmlEntities().s;
  var regExpStr = [];
  newLineTags.forEach(function(tag) {
    regExpStr.push("(</?" + tag + "\s*/?>)");
  });
  regExpStr = regExpStr.join("|");
  var regExp = new RegExp(regExpStr, "ig");
  textShort = textShort.replace(regExp, function(m) {
    return m + "\n";
  });
  textShort = S(textShort).stripTags().collapseWhitespace().trim().s;
  textShort = _.trunc(textShort, length);
  return textShort;
}

module.exports = crop;