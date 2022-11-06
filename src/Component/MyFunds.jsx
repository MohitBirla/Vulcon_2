import React from 'react'

export default function MyFunds() {
  return (
    <div className='top_main'>
      <div className='main'>
        <div className='text-white'>
          <div className='ps-5'>
          <h1  style={{ fontSize: '60px', fontWeight: 'bold' }} >My Funds</h1>
        
        <div className="events_list_tablist gallery_list mt-4">
          <div className='justify-content-center'>
          <ul
            className="nav nav-pills  tabs_events gallery_image_list"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                MANAGE FUNDS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="ms-3"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                MY WALLETS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="ms-3"
                id="pills-wp-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-wp"
                type="button"
                role="tab"
                aria-controls="pills-wp"
                aria-selected="false"
              >
                NFT TRANSFER HISTORY
              </button>
            </li>

          </ul>
          </div>
          </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div

              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="gallery_main_container ">
                <div>
                  <div className='row mt-5'>
                    <div className='col'>
                      <div class="card  blur_color">

                        <div class="card-body blur_color card-main text-white">

                          <h3 style={{fontFamily:'Beatrix Antiqua'}} className='card-title' >Matice Main Wallet </h3>  
                          <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>
                          <div className='d-flex align-items-center pt-4'>
                            <p style={{ color: '#989FAE' }} class=" text-p card-text mt-2">Total Main Wallet Balance</p>
                            <h3 style={{fontFamily:'Beatrix Antiqua'}} className='ms-3 '><span>0 </span>Matice</h3>
                          </div>
                          <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>

                          <div class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                            <div style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                              Transfer to
                              <h3 style={{fontFamily:'Beatrix Antiqua'}}  class="mb-0 mt-2 text-white">Market Wallet</h3>
                            </div>
                            <form class="row flex-grow-1 gx-1">
                              <div class="col-6 position-relative mb-2 mb-sm-0">
                                <input type="number" id="FromMainPYR" min="1" class="form-control shadow-none h-pxl-48 rounded-1" placeholder="Enter Amount of PYR" />
                                <h6 id="MainMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </h6>
                              </div>
                              <div class="col-6">
                                <button type="button" id="ConvertMainToMarket" class="BtnBorder py-2 px-2 bg-transparent border-0 " >Transfer</button>
                              </div>
                            </form>
                          </div>

                        </div>
                      </div>
                    </div>
                 
                  </div>
                  <div className='row mt-5'>
                      <div className='col-4'>
                        <h3 style={{fontFamily:'Beatrix Antiqua'}}  class="card-title">Swapping <span className='wallet'>History</span> </h3>

                      </div> 
                      <div className='col-8 align-items-end bd-highlight justify-content-end'>
                        <input type="text" class="form-control shadow-none  rounded-1 w-75" name="Payment.TwoFactorCode" placeholder="Search" />
                      </div>
                    </div>
                  <div className='table_head'>
                  
                    <div className='table-container  blur_color'>
                      <table class="table  table-sm mt-4  blur_color">
                        <thead>
                          <tr style={{background:"#404040"}}>
                            <th scope="col text-p">Id</th>
                            <th scope="col text-p">Type</th>
                            <th scope="col text-p">From Address</th>
                            <th scope="col text-p">To Address</th>
                            <th scope="col text-p">Transaction Id</th>
                          </tr>
                        </thead>
                        </table>
                    </div>


                        <div className='table-container  blur_color'>
<table class="table  table-sm mt-4  blur_color">
                        <tbody className=''>
                          <tr className='mt-2'>
                            <th scope="row">212275</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>
                            <td style={{ width: '15%' }}></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>

                          </tr>
                          <tr className='mt-2'>
                            <th scope="row">212276</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>

                            <td ></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>

                          </tr>
                          <tr className='mt-2'>
                            <th scope="row">212277</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>

                            <td></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>


                          </tr>
                          <tr className='mt-2'>
                            <th scope="row" style={{ width: '10%' }}>212278</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>
                            <td></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429489</td>


                          </tr>
                        </tbody>
                </table>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div

              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="gallery_main_container justify-content-center d-flex flex-wrap">
                  <h1 className='text-white'>MY WALLETS</h1>
                </div>
              </div>
            </div>
            <div

              className="tab-pane fade"
              id="pills-wp"
              role="tabpanel"
              aria-labelledby="pills-wp-tab"
            >
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                  <h1 className='text-white'>NFT TRANSFER HISTORY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}
