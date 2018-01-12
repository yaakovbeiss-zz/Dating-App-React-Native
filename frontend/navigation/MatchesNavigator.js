import { StackNavigator } from 'react-navigation';
import MatchesScreen from '../containers/MatchesScreenContainer';


export default SuggestMatchNavigator =  StackNavigator(
  {
    MatchesScreen: {
      screen: MatchesScreen,
    }
  },
  { // StackNavigatorConfig

  }
)
