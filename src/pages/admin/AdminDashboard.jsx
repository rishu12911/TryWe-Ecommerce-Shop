import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext } from 'react';
import myContext from '../../context/myContext';

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;
    return (
        <div>
            {/* Top */}
            <div className="top mb-5 px-5 mt-5">
                <div className="bg-gray-200 py-5 border border-gray-300 rounded-lg">
                    <h1 className="text-center text-2xl font-bold text-black">Admin Dashboard</h1>
                </div>
            </div>

            <div className="px-5">
                {/* Mid  */}
                <div className="mid mb-5">
                    {/* main  */}
                    <div className="bg-gray-200 py-5 rounded-xl border border-gray-300">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            {/* Name  */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Role : </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center">
                            {/* Total Products */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-gray-200 hover:bg-gray-300 border-gray-300 px-4 py-3 rounded-xl">
                                    <div className="text-black w-12 h-12 mb-3 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-shopping-cart"
                                        >
                                            <path d="M1 1h4l2.68 10.71a2 2 0 0 0 2 1.57h9.72a2 2 0 0 0 2-1.57L23 6H6" />
                                            <circle cx={9} cy={19} r={2} />
                                            <circle cx={17} cy={19} r={2} />
                                        </svg>
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black"> {getAllProduct.length}</h2>
                                    <p className="text-black font-bold">Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order  */}
                            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-gray-200 hover:bg-gray-300 border-gray-300 px-4 py-3 rounded-xl">
                                    <div className="text-black w-12 h-12 mb-3 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-list"
                                        >
                                            <line x1={8} y1={6} x2={21} y2={6} />
                                            <line x1={8} y1={12} x2={21} y2={12} />
                                            <line x1={8} y1={18} x2={21} y2={18} />
                                            <line x1={3} y1={6} x2={3.01} y2={6} />
                                            <line x1={3} y1={12} x2={3.01} y2={12} />
                                            <line x1={3} y1={18} x2={3.01} y2={18} />
                                        </svg>
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black">{getAllOrder.length}</h2>
                                    <p className="text-black font-bold">Total Order</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-gray-200 hover:bg-gray-300 border-gray-300 px-4 py-3 rounded-xl">
                                    <div className="text-black w-12 h-12 mb-3 inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-users"
                                        >
                                            <path d="M17 9a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2z" />
                                            <circle cx={9} cy={4} r={4} />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black">{getAllUser.length}</h2>
                                    <p className="text-black font-bold">Total User</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail />
                        </TabPanel>

                        <TabPanel>
                            <UserDetail />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
