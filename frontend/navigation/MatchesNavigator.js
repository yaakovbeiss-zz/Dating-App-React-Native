import { StackNavigator } from 'react-navigation';
import MatchesScreen from '../containers/MatchesScreenContainer';
import MatchScreen from '../screens/MatchScreen';


export default SuggestMatchNavigator =  StackNavigator(
  {
    MatchesScreen: {
      screen: MatchesScreen,
    },
    MatchScreen: {
      screen: MatchScreen,
    }
  },
  { // StackNavigatorConfig

  }
)
