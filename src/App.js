import react, { lazy, Suspense, useState } from "react";
import reactDOM from "react-dom";
// Defult Import
import HeaderLayout from './components/Header'
// Named import
// import {HeaderLayout} from './components/Header'
// import * as head from './components/Header'
// head.HeaderLayout
import Footer from './components/Footer'
import Body from './components/Body'
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/ProfileClass";
import RestroMenu from "./components/RestroMenu";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import UserContext from "./utill/UserContext";
import { Provider } from 'react-redux';
import Store from './utill/storeCollection/Store'

// import InstaMart from "./components/instaMart";

// All concepts are same..
//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//On Dynamic Import
const About = lazy(() => import('./components/About'));
const InstaMart = lazy(() => import("./components/InstaMart"));
// On Demand loading -> uplone render -> Suspensed loading


// react.Fragment ==> <> </> (represent a empty tag) =. like template in angular
const AppLayout = () => {
  // Don't do any Lazy loading here.., Because it will be keep rendring.
  const [user, setUser] = useState({
    name: 'hemraj..',
    email: 'hemrajshaqawal@gmail.com'
  })
  return (
    <Provider store={Store}>
      <UserContext.Provider value={{
        user : user,
        setUser: setUser
      }}>
        <div className="content-normal mx-auto px-4 bg-slate-100">
          <HeaderLayout />
          {/* <Body /> */}
          <Outlet/>
          <Footer />
        </div>      
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [      
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About/>
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile name={'HemrajClassBased'}/>
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restromenu/:id',
        element: <RestroMenu/>
      },
      {
        // fallback is show any JSZ
        path: '/insta-mart',
        element: (
        <Suspense fallback={<ShimmerSimpleGallery card imageHeight={250} caption />}>
          <InstaMart/>
        </Suspense>)
      },
    ],
  },
]);


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

/*
Props Drilling Concepts
AppLayout
  (state - user)
    <Body user={user}>
      <RestaurantContainer user={user}/>
         <RestaurantCard user={user}/>
          <h1>{user.name}</h1>

*/