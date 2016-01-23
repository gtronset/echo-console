var chalk = require('chalk');

var Echo = function() {
    this.m = console.log.bind(console);
    this.md = console.trace.bind(console);
    this.ch = chalk;
    this.chb = chalk.bold;
};

Echo.prototype.error = function(message, stack) {
    this.m(this.chb.red(message));
    if(stack) this.m(this.chb.red(stack));
};

Echo.prototype.debug = function(message) {
    this.m(this.chb.red(message))
};

Echo.prototype.warning = function(message) {
    this.m(this.chb.yellow(message));
};

Echo.prototype.success = function(message) {
    this.m(this.chb.green(message));
};

Echo.prototype.log = function(message) {
    this.m(message);
};

Echo.prototype.comment = function(message) {
    this.m(this.chb.gray(message));
};

Echo.prototype.msg = function(message) {
    this.m(this.chb.blue(message));
};

Echo.prototype.progress = function(message) {
    this.m(this.ch.cyan(message));
};

module.exports = Echo;