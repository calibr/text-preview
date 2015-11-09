var crop = require("../index");
var should = require("should");

describe("crop texts", function() {
  it("should crop text with div", function() {
    var text = "hello world<div>and you</div>";
    crop(text, 120).should.equal("hello world and you");
  });

  it("should crop text with span", function() {
    var text = "hello world<span>and you</span>";
    crop(text, 120).should.equal("hello worldand you");
  });

  it("should crop text with p", function() {
    var text = "hello world<p>and you</p>";
    crop(text, 120).should.equal("hello world and you");
  });
});