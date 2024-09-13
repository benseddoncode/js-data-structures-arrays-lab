const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');
const test01 = ConflictTest01

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});

console.log(test01)