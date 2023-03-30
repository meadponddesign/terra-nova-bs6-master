import React from "react";
import {
	Paragraph,
	Cards,
	ContactCall,
	BorderPattern,
	HeaderVideo,
} from "../components/rows";

function Home() {
	return (
		<>

			<HeaderVideo />
			<BorderPattern img_src="border-pattern.jpg" alt_src="" />
			<div className="bg-dark ">
				<div className="spacer"></div>

				
					<Paragraph
						//////container
						class_Container="container pt-5 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h3 fw-light pt-0 text-light"
						content_Title="Professional Trip Designing for the Inquisitive, Independent & Intrepid" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="h6 fw-light lh-lg text-light"
						content_Paragraph_1="Does the glut of travel information overwhelm you? 
                        Searching for the kind of vacation you want can be work rather than play. 
                        As a travel professional, I have years of experience navigating through the 
                        rough seas of our information age. Terra Nova's philosophy is if I do not know 
                        the answers to your travel inquiries from personal experience, I know where to find them."
						//////Paragraph 2

						class_Paragraph_2="p fw-light lh-lg hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="p fw-light lh-lg hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				
				<div className="spacer"></div>
				<div className="spacer"></div>

				
					<ContactCall
						class_Container="container mt-0 mb-0  pb-0 "
						class_row="row justify-content-center"
						class_link="decorate-none"
						link_target="tel:+1-503-296-7913"
						class_Paragraph_1="col-auto text-light  border border-1 text-end h6 p-3"
						class_Paragraph_2="col-auto text-light  border border-1 bg-green text-start h6 p-3"
						content_Paragraph_1="To Arrange Your Adventure of a Lifetime, Call:"
						content_Paragraph_2="+1 (503) 296-7913"
				/>
				
				<div className="spacer"></div>
				<div className="spacer"></div>

			</div>
			<BorderPattern img_src="border-pattern.jpg" alt_src="" />

			<div className="bg-light ">

				<div className="spacer"></div>
				<div className="spacer"></div>

				
					<Cards
						class_Container="container bg-beige p-0  mt-0 pb-5"
						class_row="row g-2 g-xl-2  m-0  p-0 mx-auto pb-5"
						class_col_1="col my-3 "
						class_col_2="col my-3 "
						class_col_3="col my-3 "
						class_col_4="col my-3 "
						class_col_5="col my-3 "
						class_img="rounded img-fluid m-auto img-zoom"
						class_card="card card-size mb-4  bg-transparent mb-lg-0 "
						class_card_body="card-body card-offset bg-white  rounded shadow"
						class_drop_menu="card-drop-menu"
						class_drop_item="card-drop-menu-item"
						image_1="thumb-img-7.jpg"
						alt_1="image"
						image_2="card-ship.jpg"
						alt_2="image"
						image_3="thumb-img-9.jpg"
						alt_3="image"
						image_4="thumb-img-10.jpg"
						alt_4="image"
						image_5="thumb-img-11b.jpg"
						alt_5="image"
						class_header_1=" h4 card-header1 fw-bold ps-1"
						class_header_2=" h6 card-header2 fw-bold ps-1"
						class_ul_list="h6 p-1 ps-4 list-group"
						class_li_list="mb-1  border-0 card-link-bullet"
						class_text_1="p fw-light lh-base card-link "
						class_text_2="p fw-light lh-base card-link text-light"
						header_1=""
						header_2=""
						header_3=""
						header_4=""
						header_5=""
						header_6=""
						subtitle_1=""
						subtitle_2=""
						subtitle_3=""
						subtitle_4=""
						subtitle_5=""
						subtitle_6=""
						col_1_text_1="africa"
						col_1_href_1="./africa"
						col_1_text_2="africa"
						col_1_href_2="./africa"
						col_1_text_3="africa"
						col_1_href_3="./africa"
						col_1_text_4="africa"
						col_1_href_4="./africa"
						col_1_text_5="africa"
						col_1_href_5="./africa"
						col_1_text_6="africa"
						col_1_href_6="./africa"
						col_2_text_1="africa"
						col_2_href_1="./africa"
						col_2_text_2="africa"
						col_2_href_2="./africa"
						col_2_text_3="africa"
						col_2_href_3="./africa"
						col_2_text_4="africa"
						col_2_href_4="./africa"
						col_2_text_5="africa"
						col_2_href_5="./africa"
						col_2_text_6="africa"
						col_2_href_6="./africa"
						col_3_text_1="africa"
						col_3_href_1="./africa"
						col_3_text_2="africa"
						col_3_href_2="./africa"
						col_3_text_3="africa"
						col_3_href_3="./africa"
						col_3_text_4="africa"
						col_3_href_4="./africa"
						col_3_text_5="africa"
						col_3_href_5="./africa"
						col_3_text_6="africa"
						col_3_href_6="./africa"
						col_4_text_1="africa"
						col_4_href_1="./africa"
						col_4_text_2="africa"
						col_4_href_2="./africa"
						col_4_text_3="africa"
						col_4_href_3="./africa"
						col_4_text_4="africa"
						col_4_href_4="./africa"
						col_4_text_5="africa"
						col_4_href_5="./africa"
						col_4_text_6="africa"
						col_4_href_6="./africa"
						col_5_text_1="africa"
						col_5_href_1="./africa"
						col_5_text_2="africa"
						col_5_href_2="./africa"
						col_5_text_3="africa"
						col_5_href_3="./africa"
						col_5_text_4="africa"
						col_5_href_4="./africa"
						col_5_text_5="africa"
						col_5_href_5="./africa"
						col_5_text_6="africa"
						col_5_href_6="./africa"
					/>

				
			</div>
			<BorderPattern img_src="border-pattern.jpg" alt_src="" />

		</>
	);
}

export default Home;
