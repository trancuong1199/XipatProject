import Dashboard from '~/pages/Dashboard';
import ListProducts from '~/pages/Products/ListProducts';
import Setting from '~/pages/Setting';

const privateRoutes = [
    { path: '/', component: Dashboard },
    { path: '/listProducts', component: ListProducts },
    { path: '/setting', component: Setting },
];

export { privateRoutes };
