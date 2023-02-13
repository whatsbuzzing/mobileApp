import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { useRef } from "react";
import analytics from "@react-native-firebase/analytics"
import StackNavigator from "./StackNavigator";

export default function App() {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
        // console.log(routeNameRef.current)
      }}
    >
      <StackNavigator />
    </NavigationContainer>
  );
}
