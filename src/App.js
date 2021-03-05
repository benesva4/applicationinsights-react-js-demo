import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./AppInsight";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <MyComponent />
    </AppInsightsContext.Provider>
  );
};

export default App;
