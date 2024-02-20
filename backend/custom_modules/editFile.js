// fileUtils.js
const fs = require('fs');

function editFile(filePath, newData, callback) {
    fs.writeFile(filePath, newData, (err) => {
        if (err) {
            console.error('Error editing file:', err);
            callback(err);
            return;
        }
        console.log('File edited successfully');
        callback(null);
    });
}

module.exports = { editFile };
