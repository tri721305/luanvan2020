import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
// import HomeV2 from './components/home-v2';
// import HomeV3 from './components/home-v3';
import AboutUs from './components/about';
// import TourList from './components/tour-list';
import TourListV2 from './components/tour-list-v2';
// import TourListV3 from './components/tour-list-v3';
import TourDetails from './components/tour-details';
import DestinationLIst from './components/destination-list';
import DestinationLIstV2 from './components/destination-list-v2';
import DestinationDetails from './components/destination-details';
import Faq from './components/faq';
import Contact from './components/contact';
import Error from './components/error';

import UserProfile from './components/user-profile';
import Blog from './components/blog';
// import BlogV2 from './components/blog-v2';
// import BlogV3 from './components/blog-v3';
import BlogDetails from './components/blog-details';
import Login from './components/login'
// import Login from 
import Plan from './components/plan1'
import Search from './components/section-components/search.js'

class App extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={AboutUs} />
						<Route path="/login" component={Login} />
	                    
	                    <Route path="/tour-list-v2" component={TourListV2} />
	                    
						<Route path="/plan" component={Plan} />
	                    <Route path="/tour-details" component={TourDetails} />
	                    <Route path="/destination-list" component={DestinationLIst} />
	                    <Route path="/destination-list-v2" component={DestinationLIstV2} />
	                    <Route path="/destination-details" component={DestinationDetails} />
	                    
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/contact" component={Contact} />
	                    <Route path="/error" component={Error} />
	                    
	                    <Route path="/user-profile" component={UserProfile} />
	                    <Route path="/blog" component={Blog} />
	                    <Route path="/blog-details" component={BlogDetails} />
	                </Switch>
	                </div>
				</HashRouter>
				
        )
    }
}

export default App;