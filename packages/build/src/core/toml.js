const { formatUtils } = require('@netlify/config')

const { writeFile } = require('../utils/fs')
const { logTomlWrite } = require('../log/main')

// Write TOML file to support current buildbot
const tomlWrite = async function(config, baseDir) {
  if (!isNetlifyCI()) {
    return
  }

  const toml = formatUtils.toml.dump(config)
  const tomlPath = `${baseDir}/netlify.toml`
  await writeFile(tomlPath, toml)

  logTomlWrite(tomlPath, toml)
}

// Test if inside netlify build context
const isNetlifyCI = function() {
  return Boolean(process.env.DEPLOY_PRIME_URL)
}

module.exports = { tomlWrite }