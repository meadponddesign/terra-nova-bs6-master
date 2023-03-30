import React from "react";
import {
	HeaderImage,
	Paragraph,
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
					src_background="sized-hero-4262119066_799d13a55c_o.jpg"
					text="Endangered Cultures"
					img_height="70vh"
					class_text="col-auto text-light fw-medium  px-5 mx-auto pb-2 h1"
					text_background_color="rgba(160, 82, 19,.6)"
				/>
			}
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
			<div className="bg-dark ">
				{
					<Paragraph
						//////container
						class_Container="container  pt-5 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h4 pt-4 text-light fw-light "
						content_Title="Visit the Endangered Cultures of the World Before They Fade Away " 
						//////container
						//////Paragraph container

						class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="h6 fw-light lh-lg text-light"
						content_Paragraph_1="A double edged sword-preservation of culture through tourism or is tourism contributing to the deterioration of the very culture that tourism hope to preserve?  A question of balance and making sure that local communities benefit as well.  Part of the eco system, endangered cultures also require protection,  or their way of life which has preserved fragile balance between man and nature will be lost as well as their rich contributions to the world of arts and crafts. I have organized special women’s group to visit special arts and craft communities in India, SE Asia, and Myanmar. "
						//////Paragraph 2

						class_Paragraph_2="h6 fw-light lh-lg text-light hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="h6 fw-light lh-lg text-light hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				}
				{
					<Slider classContainer='container mb-4 '
						class_row="row w-50 mx-auto p-4"
						class_col="col"
						class_title_1="h4 pt-0 text-light"
						class_title_2="h4 pt-0 text-light"
						class_title_3="h4 pt-0 text-light"
						class_title_4="h4 pt-0 text-light"
						class_title_5="h4 pt-0 text-light"
						class_title_6="h4 pt-0 text-light"
						class_title_7="h4 pt-0 text-light"
						class_title_8="h4 pt-0 text-light"
						class_paragraph_1="p fw-light lh-lg text-light"
						class_paragraph_2="p fw-light lh-lg text-light"
						class_paragraph_3="p fw-light lh-lg text-light"
						class_paragraph_4="p fw-light lh-lg text-light"
						class_paragraph_5="p fw-light lh-lg text-light"
						class_paragraph_6="p fw-light lh-lg text-light"
						class_paragraph_7="p fw-light lh-lg text-light"
						class_paragraph_8="p fw-light lh-lg text-light"
						alt_1="img"
						alt_2="img"
						alt_3="img"
						alt_4="img"
						alt_5="img"
						alt_6="img"
						alt_7="img"
						alt_8="img"
						title_1=""
						title_2=""
						title_3=""
						title_4=""
						title_5=""
						title_6=""
						title_7=""
						title_8=""
						paragraph_1=""
						paragraph_2=""
						paragraph_3=""
						paragraph_4=""
						paragraph_5=""
						paragraph_6=""
						paragraph_7=""
						paragraph_8=""
						image_1="images/endangered-P1160543_fs.jpg"
						image_2="images/endangered_P1020648_fs.jpg"
						image_3="images/endangered-DSC_1616_fs.jpg"
						image_4="images/endangered-jose-aragones-860577.jpg"
						image_5="images/endangered-klub-boks-10500827.jpg"
						image_6="images/endangered-P1020442_fs.jpg"
						image_7="images/endangered-P1160530_fs.jpg"
						image_8="images/endangered-P1050810_fs.jpg" ></Slider>
				}
				{
					<Paragraph
						//////container
						class_Container="container  pt-5 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h4 fw-light mt-4 mb-5 text-light hidden "
						content_Title="Facculpa nis nonsequi ius aut occab idem eum quidi ip de pa qui beaqua?" 
						//////container
						//////Paragraph container

						class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto hidden"
						//////Paragraph 1

						class_Paragraph_1="p fw-light text-light"
						content_Paragraph_1=" See a slideshow tour of the highlights of my trip from Rabat, Chefchouan, Volulblis, Fes, the desert, Skoura, Asni, Mar
						See a slideshow tour of the highlights of my trip from Rabat, Chefchouan, Volulblis, Fes, the desert, Skoura, Asni, Marrakech, rakech, 
						"
						//////Paragraph 2

						class_Paragraph_2="p fw-light hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="p fw-light hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				}
			
				<div className="spacer"></div>
				<div className="spacer"></div>
				{
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
				}

			</div>
			<div className="spacer"></div>
			<div className="spacer"></div>

			<div>
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
			<div className="bg-light ">

				<div className="spacer"></div>
				<div className="spacer"></div>

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
				<div className="spacer"></div>

			</div>
			</div>
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
		</>
	);
}

export default Home;
