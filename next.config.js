const withSass = require('@zeit/next-sass');
const _ = require('lodash');

const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');
sourcebit.fetch(sourcebitConfig);

module.exports = withSass({});
