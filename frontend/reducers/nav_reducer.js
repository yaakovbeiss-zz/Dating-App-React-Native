import MainNavigator from '../navigation/MainNavigator';

const NavReducer = (state, action) => {
  const newState = MainNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default NavReducer;
