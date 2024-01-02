import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import pedia from "../assets/images/pedia.png"
import growiq from "../assets/images/growiq.png"
import baby from "../assets/images/baby.png"

export default function Product() {
    return (
        <div>
            <Nav />
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={pedia} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                    <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">POPOPI Pedia - HIỆU QUẢ VƯỢT TRỘI</h3>
                    <p className="lead">
                        <ul> Tăng Cân & Tăng Trưởng Khoẻ Mạnh:
                            <li>Cao năng lượng: 1kcal/1ml</li>
                            <li>Tỷ lệ dinh dưỡng cân đối</li>
                            <li>MCT, Whey protein dễ hấp thu</li>
                            <li>Lysine, Vitamin B: giúp ăn ngon miệng</li>
                        </ul>
                        <ul>Tăng Cường Miễn Dịch:
                            <li>HMO - 2'FL, Sữa Non, Kẽm, Selen</li>
                        </ul>
                        <ul>Phát Triển Chiều Cao:
                            <li>Canxi, Phospho, Vitamin D3</li>
                        </ul>
                        <ul>Mát, Giúp Phòng Ngừa Táo Bón</ul>
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <NavLink to="/product" className="btn btn-primary my-2">Tìm Hiểu Thêm</NavLink>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={growiq} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                    <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">POPOPI Grow IQ - Công Thức Dinh Dưỡng Tiên Tiến</h3>
                    <p className="lead">
                        <ul>Phát triển chiều Cao:
                            <li>Tăng cường Canxi</li>
                            <li>Phospho, Magie, Vitamin D3</li>
                        </ul>
                        <ul>Phát Triển Trí Não:
                            <li>DHA, Choline, Taurine</li>
                        </ul>
                        <ul>Tăng Cường Miễn Dịch:
                            <li>HMO - 2'FL, sữa non (IgG)</li>
                        </ul>
                        <ul>Phát Triển Thể Lực:
                            <li>Hệ dưỡng chất cân đối, đầy đủ, FOS, Lysine, Vitamin & Khoáng chất</li>
                        </ul>
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <NavLink to="/product" className="btn btn-primary my-2">Tìm Hiểu Thêm</NavLink>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={baby} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                    <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">POPOPI Baby - Đặc Điểm Nổi Trội</h3>
                    <p className="lead">
                        <ul> Tăng Cân Mau Lớn:
                            <li>Hệ dưỡng chất cân đối, phù hợp với trẻ 0-12 tháng tuổi</li>
                        </ul>
                        <ul>Tăng Cường Miễn Dịch:
                            <li>HMO - 2'FL, Sữa Non, Kẽm, Selen</li>
                        </ul>
                        <ul>Phát Triên Chiều Cao:
                            <li>Canxi, Phospho, Vitamin D3</li>
                        </ul>
                        <ul>Hỗ Trợ Tiêu Hoá, Hấp Thu:
                            <li>FOS, Vitamin B </li>
                        </ul>
                        <ul>Phát Triển Não Bộ:
                            <li>Taurine, Choline, Vitamin A</li>
                        </ul>
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <NavLink to="/product" className="btn btn-primary my-2">Tìm Hiểu Thêm</NavLink>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
    )
}