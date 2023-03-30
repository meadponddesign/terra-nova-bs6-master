import React from "react";
import {
	HeaderImage,
	ContactForm2,
	BorderPattern,
} from "../components/rows";

function Home() {

	const ContactBackground = {

		backgroundImage: "url('images/contact-backgrnd.jpg')"

	}

	return (
		<>
			{
				<HeaderImage
					src_background="ekrulila-3837487Short.jpg"
					text="Contact Me&hellip;"
					img_height="50vh"
					class_text="col-auto text-light fw-med  px-5 mx-auto pb-2 h1"
					text_background_color="rgba(160, 82, 19,.6)"
				/>
			}
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
			<div style={ContactBackground}>


				<ContactForm2 />

			</div>
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
		</>
	);
}

export default Home;
