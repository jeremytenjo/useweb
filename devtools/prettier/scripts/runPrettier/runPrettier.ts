import shell from '../../../../packages/node/shell/shell.js'
;(async function runPrettier() {
  shell(
    `prettier --write '{**/*,*}.{js,jsx,json,ts,tsx}' --config ./devtools/prettier/prettierConfig.cjs --ignore-path ./devtools/prettier/prettierignore`,
  )
})()
