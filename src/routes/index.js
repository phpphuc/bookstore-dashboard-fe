import Author from "../pages/Author";
import Category from "../pages/Category";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import DetailCategory from "../pages/DetailCategory";
import DetailProduct from "../pages/DetailProduct";
import Order from "../pages/Order";
import Product from "../pages/Product";
import Review from "../pages/Review";
import LoginPage from "../pages/Login";
import FullLayout from "../layouts/FullLayout";

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
    path: "/login",
    component: LoginPage,
    layout: FullLayout,
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
  {
    path: '/don-hang',
    component: Order,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/danh-gia',
    component: Review,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/the-loai',
    component: Category,
    props: {
      heading: 'Sản phẩm',
    },
  },
  {
    path: '/khach-hang',
    component: Customer,
    props: {
      heading: 'Sản phẩm',
    },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
