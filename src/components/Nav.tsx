import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
        <header className="d-flex justify-content-center bg-dark py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink to="/"className="nav-link" aria-current="page">POPOPI</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">Thông Tin</NavLink></li>
            <li className="nav-item"><NavLink to="/product" className="nav-link">Sản Phẩm</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Liên Hệ</NavLink></li>
          </ul>
        </header>
      </div>
    
    )
    }