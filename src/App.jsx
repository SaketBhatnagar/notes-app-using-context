import React from "react";
import GetProducts from "./component/Products/GetProducts";
import ProductsDetails from "./pages/ProductsDetails";
import NotesProvider from "./contextapi/NotesProvider";
import GetAllNotes from "./component/Notes/GetAllNotes";
import Navbar from "./component/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Counter from "./component/Counter";
import ReducerCounter from "./pages/ReducerCounter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ToolkitCounter from "./pages/ToolkitCounter";


const App = () => {
  return (
    <>

      <BrowserRouter>
          <Navbar/>
          {/* <NotesProvider>
            <Routes>
                      <Route path="/" element={<section className="text-4xl font-semibold text-center pt-96">Hello My Portflio</section>}/>
                      <Route path="/notes-project" element={<main className="py-7"><GetAllNotes /></main>}/>                     
                      <Route path="/products-project" element={<ProductsDetails />}/>
                      <Route path="/counter-project" element={< Counter/>}/>
                      <Route path="*" element={<section className="text-red-500 text-5xl font-bold text-center pt-96">Error 404 NOT FOUND!</section>}/>
              </Routes>
            </NotesProvider> */}
            {/* <ReducerCounter/> */}

            <Provider store={store}>

                <ToolkitCounter/>

            </Provider>
        </BrowserRouter>
    </>
  );
};

export default App;
