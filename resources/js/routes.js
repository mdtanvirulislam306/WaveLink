import Dashboard from './components/dashboard/DashboardComponent';
import ItService from './components/service/ItServiceCompopnent';
import ItServiceAdd from './components/service/ItServiceAddCompopnent';
import IspService from './components/service/IspServiceCompopnent';
import IspServiceAdd from './components/service/IspServiceAddCompopnent';
export const routes = [
    { path: '/', component: Dashboard },
    { path: '/itservice', component: ItService },
    { path: '/itserviceadd', component: ItServiceAdd },
    { path: '/ispservice', component: IspService },
    { path: '/ispserviceadd', component: IspServiceAdd },
]