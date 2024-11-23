import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin, { Configuration } from 'mini-css-extract-plugin'
import path from 'path'
import DevServer from 'webpack-dev-server'

interface IEnvornoment {
	mode: 'development' | 'production'
	port: number
}

interface DevServerConfiguration extends DevServer.Configuration {}

export default (env: IEnvornoment) => {
	const isDev = env.mode === 'development'
	console.log('isDEv', env.mode)

	const config: Configuration & { devServer?: DevServerConfiguration } = {
		mode: 'development',
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: {
			filename: '[name].[contenthash].bundle.js',

			path: path.resolve(__dirname, 'build'),
			clean: true,
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'src', 'assets', 'images'),
						to: path.resolve(__dirname, 'build', 'assets', 'images'),
					},
				],
			}),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: isDev
										? '[path][name]__[local]'
										: '[hash:base64:8]',

									auto: true,
								},
							},
						},
						'sass-loader',
					],
				},

				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},

				{
					test: /\.json$/,
					use: 'json-loader',
					type: 'javascript/auto',
				},
				{
					test: /\.(png|jpg|gif)$/i,
					dependency: { not: ['url'] },
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
							},
						},
					],
				},
				{
					test: /\.svg$/,
					use: '@svgr/webpack',
				},
			],
		},
		resolve: {
			extensions: ['.json', '.tsx', '.ts', '.js'],
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		devtool: isDev && 'inline-source-map',

		devServer: isDev
			? {
					port: env.port || 4000,
					open: true,
			  }
			: undefined,
	}
	return config
}
