// Don't delete this file. It's used to load all the icons into storybook
const json = require('./selection.json')

export default json.icons.map(icon => icon.properties.name).sort()
