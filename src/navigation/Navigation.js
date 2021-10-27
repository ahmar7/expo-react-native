import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "../screen/Gallery";
import Home from "../screen/Home";
// import Maps from "../screen/Maps";
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Maps" component={Maps} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
