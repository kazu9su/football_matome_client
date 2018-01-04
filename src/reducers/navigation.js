import nav from '../components/Navigation'

const initialState = nav.router.getStateForAction(nav.router.getActionForPathAndParams('Home'))

export default (state = initialState, action) => {
  const nextState = nav.router.getStateForAction(action, state)

  return nextState || state
}
