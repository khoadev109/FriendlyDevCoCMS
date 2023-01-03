module.exports = {
  apps: [
    {
      name: 'strapi friendlydevco',
      cwd: '/home/ubuntu/FriendlyDevCoCMS/app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      },
    },
  ]
};
