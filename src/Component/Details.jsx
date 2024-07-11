import React from 'react'
import Header from './Header'

function Details() {
  return (
    <div>
        <Header/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <di className="row g-3">
                        <div className="card">
                            <div className="card-text">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter ur name'/>   
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone No</label>
                                <input type="text" className="form-control" placeholder='Enter ur Phone Number'/>   
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label><br />
                                <textarea name="" id="" placeholder='Enter ur Address'></textarea>
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" placeholder='Enter ur Pincode'/>
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">District</label>
                                <input type="text" className="form-control" />
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Village Office</label>
                                <input type="text" className="form-control" />
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" placeholder='Enter ur Email Id'/>
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </di>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details

