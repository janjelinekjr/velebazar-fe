import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useAppSelector} from "./store/store";

function App() {
  const {appName} = useAppSelector(state => state.header)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 20, // 20 seconds
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>
    </div>
  )
}

export default App
