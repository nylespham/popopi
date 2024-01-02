import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <div>
            <Nav />
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Thông Tin Liên hệ</h1>
                    <h4> Nếu như quý khách có nhu cầu thắc mắc về các sảm phẩm sữa POPOPI, vui lòng liên hệ qua thông tin dưới đây</h4>
                    <p className="col-lg-10 fs-4">Zalo: (+84) 77 504 9059</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Tên</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className=" form-floating mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Lời Nhắn</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                        </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Gửi Lời Nhắn</button>
                    <hr className="my-4"/>
                    </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}