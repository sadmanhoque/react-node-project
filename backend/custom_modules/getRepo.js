const { exec } = require('child_process');

function runTerminalCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            callback(error.message, null);
            return;
        }
        if (stderr) {
            console.error(`Command stderr: ${stderr}`);
            // Assuming this is a progress/status update, not an error
            // You might want to handle this differently based on your needs
            // For now, just logging the stderr as a regular output
            console.log(`Command stderr: ${stderr}`);
        }
        console.log(`Command output: ${stdout}`);
        callback(null, stdout);
    });
}

// Example usage
/*const command = 'git clone https://github.com/sadmanhoque/sample-node-project.git' // Example command
runTerminalCommand(command, (error, output) => {
   if (error) {
        console.error('Command execution failed:', error);
        return;
    }
    console.log('Command output:', output);
});*/

const command = 'cd sample-node-project; cat README.md' // Example command
runTerminalCommand(command, (error, output) => {
    if (error) {
        console.error('Command execution failed:', error);
        return;
    }
    console.log('Command output:', output);
});
