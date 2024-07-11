import React from 'react'
import Header from './Header'

function Search() {
  return (
    <div>
    <Header/>
    <br />
      <div className="conatiner">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Customers Name to be Deleted'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
