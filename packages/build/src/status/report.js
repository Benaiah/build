const { handleBuildError } = require('../error/handle')
const { logStatuses } = require('../log/main')

const { removeStatusesColors } = require('./colors')

// Report plugin statuses to the console and API
const reportStatuses = async function({
  statuses,
  childEnv,
  api,
  mode,
  netlifyConfig,
  errorMonitor,
  deployId,
  logs,
  testOpts,
}) {
  if (statuses === undefined) {
    return
  }

  const statusesA = removeStatusesColors(statuses)
  printStatuses({ statuses: statusesA, mode, logs })
  await sendStatuses({
    statuses: statusesA,
    childEnv,
    api,
    mode,
    netlifyConfig,
    errorMonitor,
    deployId,
    logs,
    testOpts,
  })
}

// When not in production, print statuses to console.
// Only print successful ones, since errors are logged afterwards.
const printStatuses = function({ statuses, mode, logs }) {
  if (mode === 'buildbot') {
    return
  }

  const successStatuses = statuses.filter(shouldPrintStatus)

  if (successStatuses.length === 0) {
    return
  }

  logStatuses(logs, successStatuses)
}

const shouldPrintStatus = function({ state, summary }) {
  return state === 'success' && summary !== undefined
}

// In production, send statuses to the API
const sendStatuses = async function({
  statuses,
  childEnv,
  api,
  mode,
  netlifyConfig,
  errorMonitor,
  deployId,
  logs,
  testOpts,
}) {
  if ((mode !== 'buildbot' && !testOpts.sendStatus) || api === undefined || !deployId) {
    return
  }

  await Promise.all(
    statuses.map(status =>
      sendStatus({ api, status, childEnv, mode, netlifyConfig, errorMonitor, deployId, logs, testOpts }),
    ),
  )
}

const sendStatus = async function({
  api,
  status: { package, version, state, event, title, summary, text },
  childEnv,
  mode,
  netlifyConfig,
  errorMonitor,
  deployId,
  logs,
  testOpts,
}) {
  try {
    await api.createPluginRun({
      deploy_id: deployId,
      body: { package, version, state, reporting_event: event, title, summary, text },
    })
    // Bitballoon API randomly fails with 502.
    // Builds should be successful when this API call fails, but we still want
    // to report the error both in logs and in error monitoring.
  } catch (error) {
    await handleBuildError({ error, errorMonitor, netlifyConfig, childEnv, mode, logs, testOpts })
  }
}

module.exports = { reportStatuses }
