module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                    @import '@/styles/variables.scss';
                    @import '@/styles/fonts.scss';
                `,
      },
    },
  },
};
