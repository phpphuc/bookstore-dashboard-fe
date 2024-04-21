import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="antialiased font-sans h-full bg-white">
      {/* <Header /> */}
      <Sidebar />
      <div className="lg:pl-72">
      {children}
        </div>
    </div>
  );
}

export default DefaultLayout;
