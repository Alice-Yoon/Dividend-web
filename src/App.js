import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import NavBar from './components/views/commons/NavBar';
import Home from './components/views/pages/Home/Home';
// import Search from './components/views/pages/Search/Search';
import Portfolio from './components/views/pages/Portfolio/Portfolio';
import Community from './components/views/pages/Community/Community';
import MyPage from './components/views/pages/MyPage/MyPage';
import NotFound from './components/views/pages/NotFound/NotFound';


function App() {
  return (
    <>
    {/* <NavBar /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/mypage" component={MyPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
