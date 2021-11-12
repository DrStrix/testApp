import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import HomeScreen from './screens/home.screen';
import DetailsScreen from './screens/details.screen';

const store = configureStore();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Список' }}/>
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Пользователь' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
