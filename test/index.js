// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'

import Fps from '../index.js'
import { Fps as FpsFromSrc } from '../src/Fps.js'

describe('main require', function () {
  it('exports Fps from src', function () {
    expect(Fps).to.equal(FpsFromSrc)
  })
})
