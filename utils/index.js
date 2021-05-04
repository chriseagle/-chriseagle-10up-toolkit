/**
 * Internal dependencies
 */
const {
	getArgFromCLI,
	getArgsFromCLI,
	getFileArgsFromCLI,
	getNodeArgsFromCLI,
	hasArgInCLI,
	hasFileArgInCLI,
	spawnScript,
} = require('./cli');

const {
	getWebpackArgs,
	hasBabelConfig,
	getJestOverrideConfigFile,
	hasJestConfig,
	hasPrettierConfig,
	hasEslintConfig,
	hasEslintignoreConfig,
	hasPostCSSConfig,
	getBuildFiles,
	hasStylelintConfig,
	getTenUpScriptsConfig,
	getTenUpScriptsPackageBuildConfig,
	hasWebpackConfig,
} = require('./config');
const { fromProjectRoot, fromConfigRoot, hasProjectFile } = require('./file');

const { hasPackageProp, getPackagePath, getPackage, getPackageVersion } = require('./package');

const { displayWebpackStats } = require('./webpack');

module.exports = {
	fromProjectRoot,
	fromConfigRoot,
	getArgFromCLI,
	getArgsFromCLI,
	getFileArgsFromCLI,
	getNodeArgsFromCLI,
	hasStylelintConfig,
	getWebpackArgs,
	hasBabelConfig,
	hasArgInCLI,
	hasFileArgInCLI,
	getJestOverrideConfigFile,
	hasJestConfig,
	hasPackageProp,
	hasPrettierConfig,
	hasEslintConfig,
	hasEslintignoreConfig,
	hasPostCSSConfig,
	hasProjectFile,
	spawnScript,
	getPackagePath,
	getBuildFiles,
	getPackage,
	getPackageVersion,
	getTenUpScriptsConfig,
	getTenUpScriptsPackageBuildConfig,
	hasWebpackConfig,
	displayWebpackStats,
};
