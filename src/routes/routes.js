import config from '../config';
// Pages
import Customer from '../pages/Customer';
import Predict from '../pages/Predict';
import Product from '../pages/Product';
import CustomerSegment from '../pages/CustomerSegment';

//public routers
const publicRoutes = [
    { path: config.routes.home, component: Product },
    { path: config.routes.page1, component: Customer },
    { path: config.routes.page2, component: Predict },
    { path: config.routes.page3, component: CustomerSegment },
];

export { publicRoutes };
