
import Announce from './components/Anuncios/Announce';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';


const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Announce/>
                <Navbar/>
                
                <Routes>
                    <Route path="/" 
                    element={<ItemListContainer  />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route 
                        path="/book/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path='/cart' element={<CartView />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
