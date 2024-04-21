import Author from "../pages/Author";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import DetailCategory from "../pages/DetailCategory";
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
  {
    path: '/danh-muc',
    component: Category,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/danh-muc/:categoryId',
    component: DetailCategory,
    props: {
      heading: 'Sản phẩm',
    },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
