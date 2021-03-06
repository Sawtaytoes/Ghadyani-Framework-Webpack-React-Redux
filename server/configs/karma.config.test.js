// Config Vars
const dir = require(`${global.baseDir}globalDirs`)
const karmaDefaultConfig = require(`${dir.configs}karma.config.default`)

module.exports = config => config.set(Object.assign({}, karmaDefaultConfig(config), {
	singleRun: true,
}))
