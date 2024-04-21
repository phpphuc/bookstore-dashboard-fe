import Dashboard from "../pages/Dashboard";
// Public routes
const publicRoutes = [
  {
    path: '/',
    component: Dashboard,
    props: {
      heading: 'Trang chủ',
    },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
