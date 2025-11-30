// File: ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "soulwax-dart-editor",
      script: "./server.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      min_uptime: "10s",
      max_restarts: 10,
      restart_delay: 4000,
      env: {
        NODE_ENV: "production",
        PORT: 5555,
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_file: "./logs/pm2-combined.log",
      time: true,
      merge_logs: true,
      kill_timeout: 5000,
    },
  ],
};
