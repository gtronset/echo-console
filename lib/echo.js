var chalk = require('chalk');

var echo = (function(){
    var m = console.log.bind(console),
        md = console.trace.bind(console),
        ch = chalk,
        chb = chalk.bold;

    return {
        error: function(c){ m(chb.red(c)) },
        debug: function(c){ md(chb.red(c)) },
        warning: function(c){ m(chb.yellow(c)) },
        success: function(c){ m(chb.green(c)) },
        log: function(c){ m(c) },
        comment: function(c){ m(chb.gray(c)) },
        msg: function(c){ m(chb.blue(c)) },
        progress: function(c){ m(ch.cyan(c)) }
    }
})();



/*var Echo = function() {
    this._uuid = null;
    this._major = null;
    this._minor = null;

    this._discovered = {};

    noble.on('discover', this.onDiscover.bind(this));
};




Echo.prototype.stopScanning = function() {
    clearInterval(this._lostCheckInterval);

    debug('stopScanning');
    noble.stopScanning();
};*/

module.exports = echo;
