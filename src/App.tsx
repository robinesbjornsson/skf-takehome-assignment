import { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import { Contact, Facebook, Twitter, Instagram } from './pages/Contact';
import Sidebar from './components/Menu';
import Loading from './components/Loading';
import { Faq } from './pages/Faq';
import { AnnualRevenue, QuarterlyRevenue } from './pages/Revenue';
import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
} from './pages/Account';
import { Payment, Subscription } from './pages/Billing';
import { Notifications } from './pages/Notifications';
import { Home } from './pages/Home';
import { DataNode } from './interfaces';

const starterData: DataNode[] = [
  {
    path: '/',
    title: 'Some node 1',
    children: [
      {
        path: '/',
        title: 'Some node 1.1',
        children: [
          {
            path: '/',
            title: 'Some node 1.1.1',
          },
        ],
      },
      {
        path: '/',
        title: 'Some node 1.2',
      },
      {
        path: '/',
        title: 'Some node 1.3',
        children: [
          {
            path: '/',
            title: 'Some node 1.3.1',
          },
        ],
      },
      {
        path: '/',
        title: 'Some node 1.4',
      },
    ],
  },
  {
    path: '/',
    title: 'Some node 2',
  },
];

function App() {
  const [data, setData] = useState(starterData);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/0c140ce3-9944-46b4-a109-0e232f445937')
      .then((res) => res.json())
      .then((resData) => setData(resData as DataNode[]))
      .catch((error) => {
        console.error('error:', error);
      });
  }, []);

  if (data === starterData)
    return (
      <div className='grid place-items-center h-screen'>
        <Loading />
      </div>
    );

  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar data={data} />
        <div className='flex-grow bg-cover bg-center flex flex-col justify-center text-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/facebook' element={<Facebook />} />
            <Route path='/contact/twitter' element={<Twitter />} />
            <Route path='/contact/instagram' element={<Instagram />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/revenue/annual-revenue' element={<AnnualRevenue />} />
            <Route
              path='/revenue/quarterly-revenue'
              element={<QuarterlyRevenue />}
            />
            <Route path='profile/settings/account/login' element={<Login />} />
            <Route
              path='profile/settings/account/register'
              element={<Register />}
            />
            <Route
              path='profile/settings/account/forgot-password'
              element={<ForgotPassword />}
            />
            <Route
              path='profile/settings/account/reset-password'
              element={<ResetPassword />}
            />
            <Route path='profile/billing/payment' element={<Payment />} />
            <Route
              path='profile/billing/subscription'
              element={<Subscription />}
            />
            <Route
              path='profile/settings/notifications'
              element={<Notifications />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
