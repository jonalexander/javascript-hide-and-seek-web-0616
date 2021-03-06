const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
  const src = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

  jsdom({ html, src, useEach: true })

  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).to.equal('nested')
      expect(getFirstSelector('.ranked-list')).to.eql(document.querySelector('.ranked-list'))
    })
  })

  describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).to.eql(document.querySelector('#nested .target'))
    })
  })

  describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).to.eql(document.querySelector('#grand-node div div div div'))
    })
  })

  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      var children = firstList.children
      var start = 1
      for (var i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (var i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
      }
    })
  })
})
