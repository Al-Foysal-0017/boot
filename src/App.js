import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Governance from './pages/governance/Governance';
import More from './pages/more/More';
import Pools from './pages/pools/Pools';
import Swap from './pages/swap/Swap';
import ConnectWallet from './pages/connectWallet/ConnectWallet';


function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" component={Swap} exact />
       <Route path="/pools" component={Pools} exact />
       <Route path="/governance" component={Governance} exact />
       <Route path="/more" component={More} exact />
       <Route path="/connect-wallet" component={ConnectWallet} exact />
     </Switch>
    </Router>
  );
}

export default App;
