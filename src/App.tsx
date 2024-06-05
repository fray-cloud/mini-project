import React from 'react';
import logo from './logo.svg';
import SiteRouter from './router/intex';
import Header from './components/header';
import { Container } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div className='wrapper'>
        <div className='contentWrapper'>
          <Header/>
          <SiteRouter/>
        </div>
        {/* footer */}
      </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
    
    </>
  );
}

export default App;
