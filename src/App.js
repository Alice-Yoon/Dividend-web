import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/views/pages/Home/Home';
import Portfolio from './components/views/pages/Portfolio/Portfolio';
import Community from './components/views/pages/Community/Community';
import MyPage from './components/views/pages/MyPage/MyPage';
import NotFound from './components/views/pages/NotFound/NotFound';


function App() {
  return (
    <div>
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/mypage" component={MyPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </>
    </div>
  );
}

export default App;
