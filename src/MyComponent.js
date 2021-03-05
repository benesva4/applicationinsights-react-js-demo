import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const MyComponent = () => {
  const appInsight = useAppInsightsContext();

  appInsight.trackMetric("Component 'ComponentWithInsight' is in use");

  return <h1>My Component</h1>;
};

export default MyComponent;
