import{BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from '../App';
import Header from '../components/Common/Layouts/Header';
import Login from '../components/Login/Login';
import ComponentList from '../components/MaterialComponents/ComponentList';
import AddMaterial from '../components/Materials/AddMaterial/AddMaterial';
import MaterialList from '../components/Materials/MaterialList/MaterialList';
import BomRequest from '../components/Review/BomRequest';

const Routing = () => {
    return(
    <Router>
        <div>
            <Header/>
            <Switch>
            <Route exact path='/' render={() =>{return(<Redirect to={'/login'} />)}} /> 
               <Route path='/login' component={Login}/>
               <Route path='/materiallist' component={MaterialList}/>
               <Route path='/addmaterial' component={AddMaterial}/>
               <Route path='/componentlist' component={ComponentList}/>
               <Route path='/bomrequest' component={BomRequest}/>
            </Switch>
        </div>
    </Router>
    )
}

export default Routing;