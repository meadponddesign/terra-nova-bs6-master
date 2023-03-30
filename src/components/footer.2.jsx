function Footer() {
	return (
		<div className="footer pt-5 pb-3 text-light">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-8 col-12" id="footer-img-profile">
						<div className="mb-4">
							<img className="img-fluid mb-2 mt-3 w-75" src="./images/nancybells-2.svg" alt=" Nancy Pole-White in a hat" />
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<div className="mb-3 text-light">
							<img src="./images/my-logo.svg" alt="logo of Terra Nova" id="footer-img-logo" />
						</div>
						<div className="mb-4 text-light">
							<p>
								Terra Nova Travel, LLC
								<br />
								2154 NW Aspen Ave.
								<br />
								Portland, Oregon, 97210
							</p>
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope me-1 mb-1" viewBox="0 0 16 16">
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
								</svg>
								Email Me
							</p>
						</div>
					</div>
					<div className="col-lg-2 col-md-4 col-6 hidden">
						<div className="mb-4">
							<h5 className="mb-4 text-light">Explore</h5>
							<ul className="list-unstyled list-group">
								<li className="list-group-item">
									<a href="#!" className="list-group-item-link text-light">
										About
									</a>
								</li>
								<li className="list-group-item">
									<a href="#!" className="list-group-item-link text-light">
										Points On the Compass
									</a>
								</li>
								<li className="list-group-item">
									<a href="#!" className="list-group-item-link text-light">
										Floats Your Boat
									</a>
								</li>
								<li className="list-group-item">
									<a href="#!" className="list-group-item-link text-light">
										Ways To Go
									</a>
								</li>
								<li className="list-group-item">
									<a href="#!" className="list-group-item-link text-light">
										Travel Dispatches
										<br />& Gallery
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-12 footer-text text-center">
					<ul className="list-inline">
						<li className="list-inline-item text-light">©2021 | TERRA NOVA TRAVEL, LLC. ALL RIGHTS RESERVED |</li>
						<li className="list-inline-item text-light">2154 NW ASPEN AVE, PORTLAND, OREGON, USA 97210 |</li>
						<li className="list-inline-item text-light">CALL +1 (503) 296-7913</li>
						<li className="list-inline-item text-light">Privacy</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
