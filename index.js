var _ = require("lodash");
var S = require("string");

var newLineTags = ["p", "div", "br"];

function crop(str, length, opts = {}) {
  opts = Object.assign({
    stripTags: true
  }, opts)
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
  textShort = S(textShort)
  if(opts.stripTags) {
    textShort = textShort.stripTags()
  }
  textShort = textShort.collapseWhitespace().trim().s;
  textShort = _.truncate(textShort, {length});
  return textShort;
}

module.exports = crop;