import Author from "../pages/Author";
import Dashboard from "../pages/Dashboard";
import DetailProduct from "../pages/DetailProduct";
import Product from "../pages/Product";
// Public routes
const publicRoutes = [
  {
    path: '/',
    component: Dashboard,
    props: {
      heading: 'Trang chủ',
    },
  },
  {
    path: '/san-pham',
    component: Product,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/san-pham/:productId',
    component: DetailProduct,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/tac-gia',
    component: Author,
    props: {
      heading: 'Sản phẩm',
    },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
