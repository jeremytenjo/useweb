import shell from '../../../../packages/node/shell/index.js'
;(async function runPrettier() {
  shell(
    `prettier --write '{**/*,*}.{js,jsx,json,ts,tsx}' --config ./devtools/prettier/prettierConfig.cjs`,
  )
})()
