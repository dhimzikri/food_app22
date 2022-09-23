
// import React, { useEffect } from 'react'
// import { Header, MainContainer, CreateContainer, Menu } from './components'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion';
// import "./index.css";

// // Pages on SideBar
// // import SideBar from "./components/SideBar";
// // import Dashboard from "./components/Pages/Dashboard";
// import Users from "./components/Pages/Users";
// import Messages from "./components/Pages/Messages";
// import FileManager from "./components/Pages/FileManager";
// import Analytics from "./components/Pages/Analytics";
// import Order from "./components/Pages/Order";
// import Saved from "./components/Pages/Saved";
// import Setting from "./components/Pages/Setting";
// import { useStateValue } from './context/StateProvider';
// import { getAllFoodItems } from './utils/firebaseFunctions';
// import { actionType } from './context/reducer';
// // end of pages

// const App = () => {

//     const [{foodItems}, dispatch] = useStateValue();

//     const fetchData = async () => {
//         await getAllFoodItems().then((data) => {
//             dispatch({
//                 type : actionType.SET_FOOD_ITEMS,
//                 foodItems : data,
//             })
//         })
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <AnimatePresence exitBeforeEnter>
//             <div className='w-screen h-auto flex flex-col bg-primary'>
//                 <Header />
//                 <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
//                     <Routes>
//                         <Route path='/*' element={<MainContainer />} />
//                         <Route path='/createItem' element={<CreateContainer />} />
//                         <Route path='/menu' element={<Menu />} />
//                         <Route path="/users" element={<Users />} />
//                         <Route path="/messages" element={<Messages />} />
//                         <Route path="/analytics" element={<Analytics />} />
//                         <Route path="/file-manager" element={<FileManager />} />
//                         <Route path="/order" element={<Order />} />
//                         <Route path="/saved" element={<Saved />} />
//                         <Route path="/settings" element={<Setting />} />
//                     </Routes>
//                 </main>
//             </div>
//         </AnimatePresence>
//     )
// }


import React, { useEffect } from 'react'
import { Header, MainContainer, CreateContainer, Menu } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import "./index.css";

// Pages on SideBar
// import SideBar from "./components/SideBar";
// import Dashboard from "./components/Pages/Dashboard";
import Users from "./components/Pages/Users";
import Messages from "./components/Pages/Messages";
import FileManager from "./components/Pages/FileManager";
import Analytics from "./components/Pages/Analytics";
import Order from "./components/Pages/Order";
import Saved from "./components/Pages/Saved";
import Setting from "./components/Pages/Setting";
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
// end of pages

const App = () => {

    const [{foodItems}, dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItems().then((data) => {
            dispatch({
                type : actionType.SET_FOOD_ITEMS,
                foodItems : data,
            })
        })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/file-manager" element={<FileManager />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/settings" element={<Setting />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    )
}

export default App