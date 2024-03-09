import { useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));
    // CartItems
    const cartItems = useSelector((state) => state.cart);
    const [activeNavLink, setActiveNavLink] = useState(null);

    // Define a function to handle logout
    const handleLogout = () => {
        localStorage.clear('users');
        navigate("/login");
    };

    const handleNavLinkClick = (index) => {
        setActiveNavLink(index === activeNavLink ? null : index);
    };

    return (
        <nav className="bg-gradient-to-l from-gray-500 to-white">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <NavLink to="/">
                        <img src="..\..\..\img\LogoImage.png" alt="TryWe Logo" className="h-10" />
                    </NavLink>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    <ul className="flex space-x-3 text-black font-medium text-md px-5 ">
                        {/* Define NavLink for Home */}
                        <li>
                            <NavLink exact to="/" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 0 ? 'active' : ''}`} onClick={() => handleNavLinkClick(0)}>
                                Home
                            </NavLink>
                        </li>

                        {/* Define NavLink for All Product */}
                        <li>
                            <NavLink to="/allproduct" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 1 ? 'active' : ''}`} onClick={() => handleNavLinkClick(1)}>
                                All Product
                            </NavLink>
                        </li>

                        {/* Define NavLink for Signup */}
                        {!user && (
                            <li>
                                <NavLink to="/signup" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 2 ? 'active' : ''}`} onClick={() => handleNavLinkClick(2)}>
                                    Signup
                                </NavLink>
                            </li>
                        )}

                        {/* Define NavLink for Login */}
                        {!user && (
                            <li>
                                <NavLink to="/login" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 3 ? 'active' : ''}`} onClick={() => handleNavLinkClick(3)}>
                                    Login
                                </NavLink>
                            </li>
                        )}

                        {/* Define NavLink for User Dashboard */}
                        {user?.role === "user" && (
                            <li>
                                <NavLink to="/user-dashboard" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 4 ? 'active' : ''}`} onClick={() => handleNavLinkClick(4)}>
                                    User
                                </NavLink>
                            </li>
                        )}

                        {/* Define NavLink for Admin Dashboard */}
                        {user?.role === "admin" && (
                            <li>
                                <NavLink to="/admin-dashboard" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 5 ? 'active' : ''}`} onClick={() => handleNavLinkClick(5)}>
                                    Admin
                                </NavLink>
                            </li>
                        )}

                        {/* Define Logout button */}
                        {user && (
                            <li className="cursor-pointer font-bold" onClick={handleLogout}>
                                logout
                            </li>
                        )}

                        {/* Define NavLink for Cart */}
                        <li>
                            <NavLink to="/cart" activeClassName="text-pink-500" className={`font-bold ${activeNavLink === 6 ? 'active' : ''}`} onClick={() => handleNavLinkClick(6)}>
                                Cart({cartItems.length})
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
