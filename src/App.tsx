import { Provider } from "react-redux";
import { DisplayCounter } from "./Components/Display";
import { ImpactCounter } from "./Components/Impact";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <DisplayCounter x={true} />
      <ImpactCounter />
    </Provider>
  );
};
