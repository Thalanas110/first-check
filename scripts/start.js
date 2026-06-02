const { spawn } = require('child_process');

const port = process.env.PORT || '4200';
process.env.PORT = port;

const args = ['serve', '--host', '0.0.0.0', '--port', port];

const proc = spawn('ng', args, { stdio: 'inherit', env: process.env, shell: true });

proc.on('exit', (code) => process.exit(code));
proc.on('error', (err) => { console.error(err); process.exit(1); });
