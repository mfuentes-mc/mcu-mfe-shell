
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    const deps = require("./package.json").dependencies;
    module.exports = {
    mode: "production",
    output: {
        publicPath: "http://shell-mcuniversity.s3-website-us-east-1.amazonaws.com/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 4200,
        historyApiFallback: true,
    },

    module: {
        rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
            fullySpecified: false,
            },
        },
        {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        {
            test: /\.(jpg|png|svg)$/,
            use: {
            loader: 'url-loader',
            },
        },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
        name: "shell",
        filename: "remoteEntry.js",
        remotes: {
            users: 'users@http://users-mcuniversity.s3-website-us-east-1.amazonaws.com/remoteEntry.js',
            stores: 'stores@http://stores-mcuniversity.s3-website-us-east-1.amazonaws.com/remoteEntry.js',
        },
        shared: {
            ...deps,
            react: {
            singleton: true,
            requiredVersion: deps.react,
            },
            "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
            },
        },
        }),
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        }),
    ],
};

