'use strict'

const { dependencies } = require('../package')

const packages = {
  'express-route-prefix': { package: 'express', hasRouter: true },
  'fastify': { hasRouter: true },
  'nest-fastify': { checked: true, hasRouter: true, package: '@nestjs/core' },

  'express': { extra: true, hasRouter: true },
  'express-with-middlewares': { extra: true, package: 'express', hasRouter: true },
  'nest': { extra: true, package: '@nestjs/core', hasRouter: true },
  'nest-res': { extra: true, package: '@nestjs/core', hasRouter: true },
  'nest-express': { extra: true, package: '@nestjs/core', hasRouter: true },
  'nest-express-res': { extra: true, package: '@nestjs/core', hasRouter: true },
  'nest-fastify-res': { extra: true, hasRouter: true, package: '@nestjs/core' },
}

let choices = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(require.resolve(module + '/package.json')).version
    packages[pkg].version = version
  }
  choices.push(pkg)
})

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices
      .map(c => {
        return extra === !!packages[c].extra
          ? Object.assign({}, packages[c], { name: c })
          : null
      })
      .filter(c => c)
  },

  info: module => {
    return packages[module]
  }
}
