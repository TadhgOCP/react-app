export const Navbar = (props) => {

  return (
    <div className="container-fluid">
        <div className="row">

              <div className="col-md-3">
                  <a className="btn btn-primary" role="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                        </svg>
                    </a>

                    <div className="offcanvas offcanvas-start">
                      <div className="offcanvas-body">
                        <div>
                          <ul>
                              <ul className="nav flex-column">
                                    <li className="nav-item">
                                      <a className="nav-link active" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="twitter.html">Twitter</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="discord.html">Discord</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="spotify.html">Spotify</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="youtube.html">Youtube</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="twitch.html">Twitch</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="content.html">Clips</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="index.html">login</a>
                                      </li>
                                </ul>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>

        </div>
    </div>

  )
}
