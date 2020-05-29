module.exports = {
  apps : [
    {
      name: 'sveltify.dev',
      script: 'node __sapper__/build',
      watch: ['__sapper__/build'],
      watch_delay: 1000,
      env: {
        PORT: '3000'
      },
    },
  ],
};
