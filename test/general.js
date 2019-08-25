var crop = require("../index");
var should = require("should");

describe("crop texts", function() {
  it("should crop text with div", function() {
    var text = "hello world<div>and you</div>";
    crop(text, 120).should.equal("hello world and you");
  });

  it("should crop text with div 2", function() {
    var text = "<div>test</div><div>test<br></div>";
    crop(text, 120).should.equal("test test");
  });

  it("should crop text with span", function() {
    var text = "hello world<span>and you</span>";
    crop(text, 120).should.equal("hello worldand you");
  });

  it("should crop text with p", function() {
    var text = "hello world<p>and you</p>";
    crop(text, 17).should.equal("hello world an...");
  });

  it("should not strip tags when cropping", function() {
    var text = "hello world<p>and you</p>";
    crop(text, 17, {
      stripTags: false
    }).should.equal("hello world<p>...");
  });
});