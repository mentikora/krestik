const gulphb = require('gulp-hb');
const handlebars = gulphb.handlebars;

module.exports.register = function (handlebars) {
  handlebars.registerHelper('iterator', function (count, options) {
    var ret = "";

    for (var i = 0, j = count; i < j; i++) {
      ret += options.fn(this);
    }

    return ret;
  });
};
