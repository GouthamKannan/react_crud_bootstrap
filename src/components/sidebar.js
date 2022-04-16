
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';

import {Link} from 'react-router-dom';

// Side bar component
function Sidebar() {

    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                        <Link className="nav-link" to="/admin"><i className="fas fa-fw fa-table"></i>Admin</Link>
                </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/product"><i className="fas fa-fw fa-table"></i>Product</Link>
                </li>
            </ul>
        </>
    );
  }

  export default Sidebar;