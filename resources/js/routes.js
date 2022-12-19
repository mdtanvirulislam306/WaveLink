import Dashboard from './components/dashboard/DashboardComponent';
import ItService from './components/service/ItServiceComponent';
import ItServiceAdd from './components/service/ItServiceAddComponent';
import IspService from './components/service/IspServiceComponent';
import IspServiceAdd from './components/service/IspServiceAddComponent';
import ItOrder from './components/order/ItOrderComponent';
import ItOrderAdd from './components/order/ItOrderAddComponent';
import IspOrder from './components/order/IspOrderComponent';
import IspOrderAdd from './components/order/IspOrderAddComponent';
import CustomerList from './components/customer/CustomerListComponent';
export const routes = [
    { path: '/', component: Dashboard },
    { path: '/itservice', component: ItService },
    { path: '/itserviceadd', component: ItServiceAdd },
    { path: '/ispservice', component: IspService },
    { path: '/ispserviceadd', component: IspServiceAdd },
    { path: '/itorder', component: ItOrder },
    { path: '/itorderadd', component: ItOrderAdd },
    { path: '/isporder', component: IspOrder },
    { path: '/isporderadd', component: IspOrderAdd },
    { path: '/customerlist', component: CustomerList },
]