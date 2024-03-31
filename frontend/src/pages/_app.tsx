import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext';
import {DynamicContextProvider} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

export const backendUrl = 'http://localhost:3001/api/v1';
  export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
    settings={{
      environmentId: "89a68c5e-885f-48e3-8db6-5b9d3b8a325c",
      walletConnectors: [EthereumWalletConnectors],
      eventsCallbacks: {
        onAuthSuccess: (data) => {
          console.log("Auth Success", data);
        }
      }
    }}
    >
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </DynamicContextProvider>
  );
}
