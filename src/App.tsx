import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { NavLink } from "react-router-dom"
import pedia from "./assets/images/pedia.png"
import growiq from "./assets/images/growiq.png"
import baby from "./assets/images/baby.png"

function App() {

  return (
      <div>
        <Nav />
        <main>

          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">POPOPI</h1>
                <p className="lead text-body-secondary">Điều gì khiến những sản phẩm từ Popopi được nhiều mẹ bỉm tin dùng.</p>
                <p>
                  <NavLink to="/about" className="btn btn-primary my-2">Tìm Hiểu Thêm</NavLink>
                </p>
              </div>
            </div>
          </section>
            <div className="album py-5 bg-body-tertiary text-center">
              <div className="col-lg-6 col-md-8 mx-auto">
              <p className="lead text-body-secondary">Tổng quan những sản phẩm đang được ưa chuộng:</p>
              </div>
            </div>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={pedia} role="img" />
                    <div className="card-body">
                      <h5>POPOPI Pedia</h5>
                      <p className="card-text">Tăng Cân – Phục Hồi Đà Tăng Trưởng Cho Trẻ Biếng Ăn, Chậm Tăng Cân.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink type="button" className="btn btn-sm btn-outline-secondary my-2" to="/product">Tìm Hiểu Thêm</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={growiq} role="img" />
                    <div className="card-body">
                      <h5>POPOPI Grow IQ</h5>
                      <p className="card-text">Tăng Cường Miễn Dịch, Phát Triển Chiều Cao - Trí Não.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink type="button" className="btn btn-sm btn-outline-secondary my-2" to="/product">Tìm Hiểu Thêm</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={baby} role="img" />
                    <div className="card-body">
                      <h5>POPOPI Baby</h5>
                      <p className="card-text">Tăng Cường Miễn Dịch, Hỗ Trợ Tiêu Hoá - Tăng Cân Khoẻ Mạnh.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <NavLink type="button" className="btn btn-sm btn-outline-secondary my-2" to="/product">Tìm Hiểu Thêm</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="bg-body">
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
  )
}

export default App
