import React from 'react';
import '../Styles/Hiring.css'
import android from '../Assets/asset 11.png';
import sendquery from '../Assets/note.png';

const Hiring = ({data}) => {
  return (
    <div className="container">
      <section className="common-section p-5 mb-5 bg-color">
        <div className="container text-center common-title">
          <h2 className="common-heading">
          Hire dedicated developers
          </h2>
        </div>
        {/* crousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* first-slide */}
              <div className="container g-5">
                <div className="row">
                  {/* cards */}
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.ios.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.ios.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.php.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.php.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.node.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.node.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="carousel-item">
              {/* first-slide */}
              <div className="container">
                <div className="row">
                  {/* cards */}
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.magneto.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.magneto.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.wordprees.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.wordprees.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.angular.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.angular.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="carousel-item">
              {/* first-slide */}
              <div className="container">
                <div className="row">
                  {/* cards */}
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.reactjs.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.reactjs.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.reactnative.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll">
                            {data.reactnative.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="card p-2 d-flex justify-content-center align-items-center"
                        style={{ width: '300px' }}>
                        <img
                          src={android}
                          className="card-img-top w-25 h-25"
                          style={{ height: '40vh' }}
                          alt="..."
                        />
                          <h5 className="card-title">{data.flutter.title}</h5>
                        <div className="card-body card-body-content">
                          <p className="card-text scrollbar overflow-y-scroll ">
                            {data.flutter.about}
                          </p>
                          
                        </div>
                          
                          <button
                            href="/"
                            className="btn">
                            Send Query <img src={sendquery} alt="" />
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <button
            className="carousel-control-prev crauselbtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="previcon"> <i className="fa-solid fa-less-than"></i> </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next crauselbtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="nexticon" aria-hidden="true"><i className="fa-solid fa-greater-than"></i></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hiring;
