const { execSync } = require('child_process');
execSync('npm install', { cwd: './temp_repo', stdio: 'inherit' });
execSync('npm run build', { cwd: './temp_repo', stdio: 'inherit' });
