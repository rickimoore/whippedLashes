const contentful = require('contentful')
const contentcma = require('contentful-management')
const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  CTF_CMA_ACCESS_TOKEN: process.env.CTF_CMA_ACCESS_TOKEN
}

module.exports = {
  createClient (config = defaultConfig) {
    return contentful.createClient({
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_ACCESS_TOKEN
    })
  },
  createClientCMA (config = defaultConfig) {
    return contentcma.createClient({
      accessToken: config.CTF_CMA_ACCESS_TOKEN
    })
  }
}
