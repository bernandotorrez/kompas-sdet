var fs = require('fs');

createFile = ({username, password}) => {
    var stream = fs.createWriteStream("account.json");
    stream.once('open', function(fd) {
        stream.write(JSON.stringify({ username: username, password: password}));
        stream.end();
    });
}

module.exports = createFile;
