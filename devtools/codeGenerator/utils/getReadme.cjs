module.exports = function getReadme() {
  return {
    path: () => 'README.md',
    template: ({ name, helpers: { changeCase } }) => {
      const nameLC = changeCase.lowerCase(name)

      return `
        # ${name}
        ## Installation

        ${'```'}sh
          npm i @useweb/${nameLC}
        ${'```'}
        `
    },
  }
}
