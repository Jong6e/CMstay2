// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@components': './src/components',
                        '@styles': './src/styles',
                        '@hoc': './src/hoc',
                    },
                },
            ],
        ],
    };
};
