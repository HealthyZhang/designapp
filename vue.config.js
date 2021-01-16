const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    lintOnSave: false,
    // configureWebpack: {
    //     module: {
    //         rules: [
    //         {
    //             test: /\.(jsx|tsx|js|ts)$/,
    //             loader: 'ts-loader',
    //             options: {
    //             transpileOnly: true,
    //             getCustomTransformers: () => ({
    //                 before: [ tsImportPluginFactory( /** options */) ]
    //             }),
    //             compilerOptions: {
    //                 module: 'es2015'
    //             }
    //             },
    //             exclude: /node_modules/
    //         }
    //         ]
    //     },
    // }
    
}