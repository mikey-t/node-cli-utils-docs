import { series } from 'swig-cli'
import { spawnAsync } from '@mikeyt23/node-cli-utils'

export const publish = series(gitStageAll, gitCommit, gitPush)

async function gitStageAll() {
  await spawnAsync('git', ['add', '.'], { throwOnNonZero: true })
}

async function gitCommit() {
  await spawnAsync('git', ['commit', '-m', 'Updated documentation'], { throwOnNonZero: true })
}

async function gitPush() {
  await spawnAsync('git', ['push'], { throwOnNonZero: true })
}
