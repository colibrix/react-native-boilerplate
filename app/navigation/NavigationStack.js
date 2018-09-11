import { createStackNavigator } from 'react-navigation';

import Login from 'app/screens/Login';

const RNApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNApp;
