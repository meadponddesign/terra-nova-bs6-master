function Footer() {
	return (
		<div className="footer pt-5 pb-3 text-light ">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col" id="footer-img-profile">
						<div className="mb-4">
							<img className="img-fluid" src="./images/business-card.jpg" alt=" Nancy Pole-White in a hat" />
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
