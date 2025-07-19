const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'mfProfile',
    filename: 'remoteEntry.js',
    exposes: {
        './Profile': './src/app/components/profile/profile.ts',
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }
});