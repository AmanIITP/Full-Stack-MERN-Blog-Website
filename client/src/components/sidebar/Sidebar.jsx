import "./sidebar.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCat(res.data);
        };
        getCats();
    }, []);

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <br></br>
            <img src="https://avatars.githubusercontent.com/u/95214630?v=4" alt="" />
            <p>Hello, This is Aman Verma, a free time blogger and techie geek. My interest lies in playing video games and sports specially Football</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cat.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}

            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-whatsapp"></i>
            </div>
        </div>
    </div>
  )
}
