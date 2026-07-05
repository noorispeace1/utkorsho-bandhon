const { execSync } = require('child_process');

try {
  // Get process listening on port 3000
  const output = execSync('netstat -ano | findstr :3000').toString();
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.includes('LISTENING')) {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== '0') {
        console.log(`Killing process ${pid} on port 3000...`);
        execSync(`taskkill /F /PID ${pid}`);
      }
    }
  }
} catch (error) {
  console.log('No process found or error:', error.message);
}
