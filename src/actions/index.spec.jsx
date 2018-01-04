import assert from 'power-assert'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configMockStore from 'redux-mock-store'
import WindowMock from 'window-mock'

const middleware = [thunk]
const mockStore = configMockStore(middleware)

import { requestFeeds, receiveFeeds, fetchFeeds, openLink } from './'

describe('requstFeeds', () => {
  it('should return REQUEST_FEEDS action', () => {
    assert.deepStrictEqual(
          requestFeeds(),
      {
        type: 'REQUEST_FEEDS',
      },
        )
  })
})

describe('receiveFeeds', () => {
  it('should return RECEIVE_FEEDS action', () => {
    const feeds = [{
      id: 1,
      title: 'hoge',
      link: 'http://hoge.com',
    }]

    assert.deepStrictEqual(
            receiveFeeds({ data: feeds }),
      {
        type: 'RECEIVE_FEEDS',
        feeds,
      },
        )
  })
})

describe('fetchFeeds', () => {
  it('should set feeds by response', (done) => {
    const store = mockStore({
      feeds: [],
    })

    const response = {
      data: [
        {
          id: 1,
          title: 'hoge',
          link: 'http://google.com',
        },
      ],
    }

    fetchMock.getOnce('api/get', response)

    store.dispatch(fetchFeeds())
      .then(() => {
        const dispatchedActions = store.getActions()

        assert.strictEqual(dispatchedActions.length, 1)
        assert.deepStrictEqual(dispatchedActions[0], receiveFeeds(response))

        done()
      })
  })
})

describe('openLink', () => {
  it('set link to window.location.href', () => {
    const windowMock = new WindowMock()
    global.window = windowMock
    const link = 'http://hoge.com'
    openLink(link)

    assert(link, global.window.location.href)
  })
})
