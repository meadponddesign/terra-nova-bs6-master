import React from "react";
import {
	HeaderImage,
	Paragraph,
	ParagraphCols,
	ImgBlockRows,
	ImgBlock,
	ImageRight,
	ImageLeft,
	ImageBlockMason1,
	Cards,
	ContactCall,
	Slider,
	BorderPattern,
} from "../components/rows";

function Home() {
	return (
		<>
			{
				<HeaderImage
					src_background="Blue-Poppy.jpg"
					text="Your Invitation to Voyage…"
					img_height="70vh"
					class_text="col-auto text-light fw-bold  px-5 mx-auto pb-2 h1"
					text_background_color="rgba(160, 82, 19,.6)"
				/>
			}
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
			<div className="bg-dark ">
				{
					<Paragraph
						//////container
						class_Container="container border pt-5 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h4 pt-0 text-light"
						content_Title="Professional Trip Designing for the Inquisitive, Independent & Intrepid" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-light lh-lg text-light"
						content_Paragraph_1=" Does the glut of travel information overwhelm you? 
                        Searching for the kind of vacation you want can be work rather than play. 
                        As a travel professional, I have years of experience navigating through the 
                        rough seas of our information age. Terra Nova's philosophy is if I do not know 
                        the answers to your travel inquiries from personal experience, I know where to find them"
						//////Paragraph 2

						class_Paragraph_2="p fw-light lh-lg hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="p fw-light lh-lg hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				}
				{
					<ParagraphCols
						class_Container="container text-light border"
						class_row="row my-4"
						class_col_1="col"
						class_col_2="col"
						class_col_3="col"
						class_header_1="mt-4 mb-3"
						class_header_2="mt-4 mb-3"
						class_header_3="mt-4 mb-3"
						class_text_1="mt-4 mb-3"
						class_text_2="mt-4 mb-3"
						class_text_3="mt-4 mb-3"
						header_1="Lorem ipsom"
						header_2="Lorem ipsom"
						header_3="Lorem ipsom"
						text_1="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_2="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_3="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
					/>
				}

				{
					<ImgBlockRows
						class_Container="container p-0  border "
						class_row="row g-0  "
						class_col_1="col"
						class_col_2="col"
						class_col_3="col"
						class_col_4="col"
						class_col_5="col"
						class_col_6="col"
						class_labels="mt-4 "
						class_img="img-fluid w-100 "
						class_label="text-center fst-italic text-light"
						image_1="sized_180-DSC01669_fs.jpg"
						alt_1="image"
						label_1="Lorem Ipsom"
						image_2="sized_180-DSC01669_fs.jpg"
						alt_2="image"
						label_2="Lorem Ipsom"
						image_3="sized_180-DSC01669_fs.jpg"
						alt_3="image"
						label_3="Lorem Ipsom"
						image_4="sized_180-DSC01669_fs.jpg"
						alt_4="image"
						label_4="Lorem Ipsom"
						image_5="sized_180-DSC01669_fs.jpg"
						alt_5="image"
						label_5="Lorem Ipsom"
						image_6="sized_180-DSC01669_fs.jpg"
						alt_6="image"
						label_6="Lorem Ipsom"
					/>
				}
				{
					<ImgBlock
						class_Container="container mt-0 p-0 border"
						class_row="row g-0 w-100"
						class_col_1="col"
						class_col_2="col"
						class_col_3="col"
						class_img="img-fluid w-100 "
						class_label="text-center fst-italic text-light"
						image_1="sized_180-DSC01669_fs.jpg"
						alt_1="image"
						label_1="Lorem Ipsom"
						image_2="sized_180-DSC01669_fs.jpg"
						alt_2="image"
						label_2="Lorem Ipsom"
						image_3="sized_180-DSC01669_fs.jpg"
						alt_3="image"
						label_3="Lorem Ipsom"
						image_4="sized_180-DSC01669_fs.jpg"
						alt_4="image"
						label_4="Lorem Ipsom"
						image_5="sized_180-DSC01669_fs.jpg"
						alt_5="image"
						label_5="Lorem Ipsom"
						image_6="sized_180-DSC01669_fs.jpg"
						alt_6="image"
						label_6="Lorem Ipsom"
					/>
				}

				{
					<ImageRight
						class_Container="container mt-0 p-0 border"
						class_row="row g-0 w-100 text-light"
						class_col_1="col-8"
						class_col_2="col-4"
						class_img="img-fluid w-100 "
						image_1="sized_180-DSC01669_fs.jpg"
						alt_1="image"
						label_1="Lorem Ipsom"
						image_2="sized_180-DSC01669_fs.jpg"
						alt_2="image"
						label_2="Lorem Ipsom"
						image_3="sized_180-DSC01669_fs.jpg"
						alt_3="image"
						label_3="Lorem Ipsom"
						image_4="sized_180-DSC01669_fs.jpg"
						alt_4="image"
						label_4="Lorem Ipsom"
						image_5="sized_180-DSC01669_fs.jpg"
						alt_5="image"
						label_5="Lorem Ipsom"
						image_6="sized_180-DSC01669_fs.jpg"
						alt_6="image"
						label_6="Lorem Ipsom"
						class_header_1=" h2 mt-4 mb-3"
						class_header_2=" h2 mt-4 mb-3"
						class_header_3=" h2 mt-4 mb-3"
						class_text_1="h4 mt-4 mb-3"
						class_text_2="h4 mt-4 mb-3"
						class_text_3="h4 mt-4 mb-3"
						header_1="Lorem ipsom"
						header_2="Lorem ipsom"
						header_3="Lorem ipsom"
						text_1="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_2="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_3="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
					/>
				}
				{
					<ImageLeft
						class_Container="container mt-0 p-0 border"
						class_row="row g-0 w-100 text-light"
						class_col_1="col-8"
						class_col_2="col-4"
						class_img="img-fluid w-100 "
						image_1="sized_180-DSC01669_fs.jpg"
						alt_1="image"
						label_1="Lorem Ipsom"
						image_2="sized_180-DSC01669_fs.jpg"
						alt_2="image"
						label_2="Lorem Ipsom"
						image_3="sized_180-DSC01669_fs.jpg"
						alt_3="image"
						label_3="Lorem Ipsom"
						image_4="sized_180-DSC01669_fs.jpg"
						alt_4="image"
						label_4="Lorem Ipsom"
						image_5="sized_180-DSC01669_fs.jpg"
						alt_5="image"
						label_5="Lorem Ipsom"
						image_6="sized_180-DSC01669_fs.jpg"
						alt_6="image"
						label_6="Lorem Ipsom"
						class_header_1=" h2 mt-4 mb-3"
						class_header_2=" h2 mt-4 mb-3"
						class_header_3=" h2 mt-4 mb-3"
						class_text_1="h4 mt-4 mb-3"
						class_text_2="h4 mt-4 mb-3"
						class_text_3="h4 mt-4 mb-3"
						header_1="Lorem ipsom"
						header_2="Lorem ipsom"
						header_3="Lorem ipsom"
						text_1="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_2="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
						text_3="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
					/>
				}
				{
					<ImageBlockMason1
						class_Container="container mt-2 border p-0"
						class_row_1="row g-0 "
						class_row_2="row g-0 "
						class_col_1="col-4 "
						class_col_2="col-8 border"
						class_col_3="col-6"
						class_col_4="col-6"
						class_col_5="col my-4 ms-5 text-light"
						class_title_1="h4 mt-4 mb-3 text-light "
						class_title_2="h4 mt-4 mb-3 text-light "
						class_title_3="h4 mt-4 mb-3 text-light "
						class_title_4="h4 mt-4 mb-3 text-light "
						class_title_5="h4 mt-4 mb-3 text-light "
						class_title_6="h6 mt-4 mb-3"
						class_title_7="h6 mt-4 mb-3"
						class_title_8="h6 mt-4 mb-3"
						class_text_1="h6 mt-4 mb-3 text-light lh-base"
						class_text_2="h6 mt-4 mb-3 text-light lh-base"
						class_text_3="h6 mt-4 mb-3 text-light lh-base"
						class_text_4="h6 mt-4 mb-3 text-light lh-base"
						class_text_5="h6 mt-4 mb-3 text-light lh-base"
						class_text_6="h6 mt-4 mb-3 lh-base text-light"
						class_text_7="h6 mt-4 mb-3 lh-base text-light"
						class_text_8="h6 mt-4 mb-3 lh-base text-light"
						class_img="img-fluid "
						alt_1="img"
						img_1="ekrulila-3837487 (5).jpg"
						alt_2="img"
						img_2="ekrulila-3837487 (3).jpg"
						alt_3="img"
						img_3="ekrulila-3837487 (6).jpg"
						alt_4="img"
						img_4="ekrulila-3837487 (4).jpg"
						alt_5="img"
						img_5="ekrulila-3837487 (2).jpg"
						title_1="Trip Designer Extraordinare:"
						text_1="I’m Nancy Pole-Wilhite and I love to plan personalized, concierge trip designing.
						Imagine your exploration and destination—I’ll work with you to craft the best, most
						memorable trips for the individual, organized, group, family, and special interest groups."
						title_2="Destination Specialist:"
						text_2="Latin America, Asia, France, Italy, Africa…and beyond."
						title_3="Travel Interest Specialist:
						"
						text_3="France, Chile, walking tours, treks, fly-in safaris, women’s tours, sabbatical travel,
						choir groups, and unique, bespoke trip designing."
						title_4="Countries Visited:"
						text_4="China, Nepal, Tibet, Tahiti, Japan, Singapore, Thailand, Australia, Argentina, Chile, Costa
						Rica, Belize, Mexico, Peru, Botswana, Zimbabwe, South Africa, Kenya, Tanzania, Morocco,
						France, Spain, Italy, Eastern Europe, and UK."
						title_5="Passions:"
						text_5="Singer in liturgy choir, Cantores in Ecclesia, Board President of women’s vocal ensemble,
						In Mulieribus, swimming, hiking, canoeing, gardening, indigenous cultures, art, music
						and literature. And a few more words here and here."
						title_6="Memberships:"
						text_6="APTA(Assoc. for the Promotion of Tourism to Africa), NW China Council, Japanese Garden
						of Portland, Oregon, National Tropical Botanical Garden"
						title_7="Education:"
						text_7="B.A. from University of California at Berkeley. Graduated Great Distinction in English
						Literature and French. And a few more words here and here."
						title_8="Languages:"
						text_8="English, French, and some Spanish. "
					/>
				}
				{
					<ContactCall
						class_Container="container mt-0 mb-0  pb-0 "
						class_row="row justify-content-center "
						class_link="decorate-none"
						link_target="tel:+1-503-296-7913"
						class_Paragraph_1="col-auto text-light  border border-1 text-end h5 p-3"
						class_Paragraph_2="col-auto text-light  border border-1 bg-green text-start h5 p-3"
						content_Paragraph_1="To Arrange Your Adventure of a Lifetime, Call:"
						content_Paragraph_2="+1 (503) 296-7913"
					/>
				}

				{
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

				}
			</div>
			{
				<Slider classContainer='container mb-4 '
					class_row="row w-75 mx-auto p-4"
					class_col="col"
					class_title_1="h1"
					class_title_2="h1"
					class_title_3="h1"
					class_title_4="h1"
					class_title_5="h1"
					class_title_6="h1"
					class_title_7="h1"
					class_title_8="h1"
					class_paragraph_1="p"
					class_paragraph_2="p"
					class_paragraph_3="p"
					class_paragraph_4="p"
					class_paragraph_5="p"
					class_paragraph_6="p"
					class_paragraph_7="p"
					class_paragraph_8="p"
					alt_1="img"
					alt_2="img"
					alt_3="img"
					alt_4="img"
					alt_5="img"
					alt_6="img"
					alt_7="img"
					alt_8="img"
					title_1="lorem ipsome"
					title_2="lorem ipsome"
					title_3="lorem ipsome"
					title_4="lorem ipsome"
					title_5="lorem ipsome"
					title_6="lorem ipsome"
					title_7="lorem ipsome"
					title_8="lorem ipsome"
					paragraph_1="lorem ipsome some more"
					paragraph_2="lorem ipsome some more"
					paragraph_3="lorem ipsome some more"
					paragraph_4="lorem ipsome some more"
					paragraph_5="lorem ipsome some more"
					paragraph_6="lorem ipsome some more"
					paragraph_7="lorem ipsome some more"
					paragraph_8="lorem ipsome some more"
					image_1="https://placeimg.com/600/550/nature"
					image_2="https://placeimg.com/600/550/nature"
					image_3="https://placeimg.com/600/550/nature"
					image_4="https://placeimg.com/600/550/nature"
					image_5="https://placeimg.com/600/550/nature"
					image_6="https://placeimg.com/600/550/nature"
					image_7="https://placeimg.com/600/550/nature"
					image_8="https://placeimg.com/600/550/nature" ></Slider>
			}
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
		</>
	);
}

export default Home;
