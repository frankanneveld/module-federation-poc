const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.json'),
//   ['auth-lib']  
// );

module.exports = {
  output: {
    uniqueName: "mfe3",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },  
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
  plugins: [
    new ModuleFederationPlugin({
        name: "mfe3",
        // library: {},
        filename: "remoteEntry.js", 
        exposes: {
            './web-components': path.join(__dirname, './src/bootstrap.ts'),
        },        
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
  
          // Uncomment for sharing lib of an Angular CLI or Nx workspace
        //   ...sharedMappings.getDescriptors()
        })
        
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    // sharedMappings.getPlugin(),
  ],
};