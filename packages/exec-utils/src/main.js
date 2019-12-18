const execa = require('execa')

// Execute a command, with arguments being an array
const run = function(file, args, options) {
  const [argsA, optionsA] = parseArgs(args, options)
  const optionsB = { ...DEFAULT_OPTIONS, ...optionsA }
  const childProcess = execa(file, argsA, optionsB)
  redirectOutput(childProcess, optionsB)
  return childProcess
}

// Execute a command, with file + arguments being a single string
const runCommand = function(command, options) {
  const optionsA = { ...DEFAULT_OPTIONS, ...options }
  const childProcess = execa.command(command, optionsA)
  redirectOutput(childProcess, optionsA)
  return childProcess
}

// Both `args` and `options` are optional
const parseArgs = function(args, options) {
  if (Array.isArray(args)) {
    return [args, options]
  }

  if (typeof args === 'object') {
    return [[], args]
  }

  return []
}

// Allow running local binaries by default
const DEFAULT_OPTIONS = { preferLocal: true }

// Redirect output by default, unless specified otherwise
const redirectOutput = function(childProcess, { stdio, stdout, stderr }) {
  if (stdio !== undefined || stdout !== undefined || stderr !== undefined) {
    return
  }

  childProcess.stdout.pipe(process.stdout)
  childProcess.stderr.pipe(process.stderr)
}

run.command = runCommand

module.exports = run
