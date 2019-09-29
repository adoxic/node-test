const exec = require('child_process').exec;

function start() {
    console.log('request handler "start".');
    let content = 'empty';

    exec('ls -lah', function(error, stdout, stderr) {
        content = stdout;
    });
    return content;
}

function upload() {
    console.log('request handler "upload".');
    return 'Hello upload';
}

exports.start = start;
exports.upload = upload;