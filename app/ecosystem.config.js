module.exports = {
  apps: [
    {
      name: 'friendlydevcocms',
      cwd: '/home/ubuntu/FriendlyDevCoCMS/app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development'
      },
    },
  ]
};
