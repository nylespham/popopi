import Nav from "../components/Nav"
import Footer from "../components/Footer"
import general from "../assets/images/general.jpeg"
import lab from "../assets/images/lab.jpeg"
import { NavLink } from "react-router-dom"
import pediacert from "../assets/images/pediacert.jpeg"
import growiqcert from "../assets/images/growiqcert.jpeg"
import babycert from "../assets/images/babycert.jpeg"

export default function About() {
    return (
        <div>
            <Nav />
            <div className="b-example-divider"></div>

<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={general} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Về POPOPI</h1>
      <p className="lead">
        Là thương hiệu sữa bột dinh dưỡng cao cấp dành cho trẻ em được sản xuất tại Việt Nam theo công nghệ tiên tiến của Mỹ,
        POPOPI được sản xuất bởi Công ty Cổ phần Dinh dưỡng Nutriking, một trong những công ty hàng đầu Việt Nam trong lĩnh vực dinh dưỡng.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sản Phẩm</button>
      </div>
    </div>
  </div>
</div>

<section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Nguyên Liệu Sữa Bột Nhập Khẩu Từ New Zealand</h1>
        <p className="lead text-body-secondary">
        Với sứ mệnh cung cấp sản phẩm dinh dưỡng chất lượng cao cấp, bằng công nghệ hiện đại nhất, 
        từ nguồn nguyên liệu tốt nhất, với tấm lòng trân quý nhất đối với sức khỏe của người tiêu dùng Việt.
        </p>
        <p>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={pediacert} role="img" />
            <div className="card-body">
              <p className="card-text">POPOPI Pedia</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <NavLink to="/" type="button" className="btn btn-sm btn-outline-secondary">Xem chi tiết</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={growiqcert} role="img" />
            <div className="card-body">
              <p className="card-text">POPOPI Grow IQ</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <NavLink to="/" type="button" className="btn btn-sm btn-outline-secondary">Xem chi tiết</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={babycert} role="img" />
            <div className="card-body">
              <p className="card-text">POPOPI Baby</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <NavLink to="/" type="button" className="btn btn-sm btn-outline-secondary">Xem chi tiết</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={lab} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Đảm Bảo Về Độ An Toàn</h2>
      <p className="lead">
        Là thương hiệu sữa bột dinh dưỡng cao cấp dành cho trẻ em được sản xuất tại Việt Nam theo công nghệ tiên tiến của Mỹ,
        POPOPI được sản xuất bởi Công ty Cổ phần Dinh dưỡng Nutriking, một trong những công ty hàng đầu Việt Nam trong lĩnh vực dinh dưỡng.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <NavLink to="/" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Trang Chủ</NavLink>
      </div>
    </div>
  </div>
</div>

<div className="bg-dark text-secondary px-4 py-5 text-center">
  <div className="py-5">
    <h1 className="display-5 fw-bold text-white">Chất Lượng Về Sản Phẩm</h1>
    <div className="col-lg-6 mx-auto">
      <p className="fs-5 mb-4">Sản phẩm được nghiên cứu bởi những chuyên gia dinh dưỡng hàng đầu, áp dụng công thức dinh dưỡng tiên tiến, và sản xuất trên dây truyền thiết bị hiện đại, quy trình khép kín đảm bảo mọi tiêu chuẩn chất lượng quốc tế.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <NavLink to="/contact"type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Liên Hệ</NavLink>
      </div>
    </div>
  </div>
</div>
            <Footer />
        </div>
    )
}