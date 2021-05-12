
import './App.css';
import Main from './pages/Main/Main';
import {BrowserRouter as Router,Switch,Route} from"react-router-dom";
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import GoodsList from './pages/GoodsList/GoodsList';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import AddProduct from './pages/AddProduct/AddProduct';
import Preloader from './components/Preloader/Preloader';


function App() {
  return (
    <Router>
      <Preloader/>
      <Header/>
      <Switch>
        <Route  exact path="/" component={Main}/>
        <Route path="/goods/:category" component={GoodsList}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/add" component={AddProduct}/>
        <Route path="/edit" component={AddProduct}/>
        <Route component={NotFound}/>
        
      </Switch>
    </Router>
  );
}
export default App;
