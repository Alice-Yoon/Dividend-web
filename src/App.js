import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/views/pages/Home/Home';
import Search from './components/views/pages/Search/Search';
import Portfolio from './components/views/pages/Portfolio/Portfolio';
import Community from './components/views/pages/Community/Community';
import MyPage from './components/views/pages/MyPage/MyPage';
import NotFound from './components/views/pages/NotFound/NotFound';


import NavBar from '../src/components/views/commons/NavBar';
import NavBarVertical from './components/views/commons/NavBarVertical';


function App(props) {

  const [toggleSearch, setToggleSearch] = useState(false);

  const openSearchModal = () => {
    setToggleSearch(true);
  }

  const closeSearchModal = () => {
    setToggleSearch(false);
}



  return (
    <div className={props.className}>
    <Router>
      {/* <div className="nav-bar-horizontal"> */}
        <NavBar openSearchModal={openSearchModal} />
      {/* </div> */}
      {/* <div className="nav-bar-vertical"> */}
        <NavBarVertical />
      {/* </div> */}
      <div className="main-page">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/search" component={Search} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/mypage" component={MyPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    <Search toggleSearch={toggleSearch} closeSearchModal={closeSearchModal} />
    </div>
  );
}

export default styled(App)`
  background-color: #F5F5F5;
  /* position: relative; */
  & {
    /* .nav-bar-horizontal {
    }
    .nav-bar-vertical {
    } */
    .main-page {
      /* border: 3px solid black; */
      padding: 30px;
      margin-top: 80px;
      margin-left: 100px;
    }
  }
`;
