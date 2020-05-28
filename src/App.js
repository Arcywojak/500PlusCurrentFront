import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Footer from './components/footer/footer'
import Nav from './components/nav/nav';
import Home from './components/home/home'
import Register from './components/register/register';
import Login from './components/login/login';
import About from './components/about/about';
import ForMedia from './components/forMedia/forMedia';
import Regulations from './components/regulations/regulations';
import Page404 from './components/page404/page404';
import Account from './components/account/account';
import Offers from './components/offers/offers'
import OfferDetails from './components/offers/offerDetails/offerDetails'
import Contact from './components/contact/contact';
import Faq from './components/faq/faq';
import Creator from './components/register/creator/creator.js'  /* tymczasowo do testów wyglądu */
import './app.css'


class App extends Component {
 
    render() {
      return (
        <BrowserRouter>
          <Provider store={store}>
          <div className="App">
            
            <Route path="/" component={Nav} />

          <Switch>
            <Route path="/rejestracja" component={Register} />
            <Route  path="/bla" component={Creator}/>
            <Route path="/logowanie" component={Login} />
            <Route path="/o-nas" component={About} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/dla-mediow" component={ForMedia} />
            <Route path="/regulamin" component={Regulations} />
            <Route path="/moje-konto" component={Account} />  
            <Route path="/oferty/:id" render={(props)=> <OfferDetails id={props.match.params.id}/>}/>
            <Route path="/oferty" component={Offers} />
            <Route path="/faq" component={Faq} />
            <Route exact path="/" component={Home} />  
            <Route  component={Page404} />
          </Switch>
            
            
            <Footer/>
          </div>
          </Provider>
        </BrowserRouter>
    )
}
}

export default App;

