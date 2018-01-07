import { StackNavigator } from 'react-navigation';
import SuggestMatch from '../screens/SuggestMatch';
import MatchModal from '../screens/MatchModal';


export default SuggestMatchNavigator =  StackNavigator(
  {
    FindMatch: {
      screen: SuggestMatch,
      navigationOptions: () => ({
        header: null,
      })
    },
    MatchModal: {
      screen: MatchModal,
    }
  },
  { //StackNavigatorConfig
    mode: 'modal'
  }
)
