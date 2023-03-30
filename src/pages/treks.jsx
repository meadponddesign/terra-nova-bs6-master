import React from "react";
import {
  HeaderImage,
  Paragraph,
  ImgBlock,
  Cards,
  ContactCall,
  BorderPattern,
} from "../components/rows";

function Home() {
  return (
    <>
      {
        <HeaderImage
          src_background="eric-sanman-1365425.jpg"
          text="Treks & Hikes"
          img_height="70vh"
          class_text="col-auto text-light fw-med  px-5 mx-auto pb-2 h1"
          text_background_color="rgba(160, 82, 19,.6)"
        />
      }
      {<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
      <div className="spacer"></div>
      <div className="bg-dark ">
        {
          <Paragraph
            //////container
            class_Container="container pt-5"
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h3 fw-light pt-0 text-light"
            content_Title="Walk, Hike, Trek Our Earth, Step-By-Step&hellip;" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="Walk, hike, trek are various words used to putting one foot ahead of the other.  A walk is usually associated with more of a ramble across the countryside such as the Cotswolds, but a walk can also be confined to an urban space or a walking tour of XYZ city&hellip; A hike or trek could be pretty much considered as a walk—but hikes and treks, depending upon the destination— can also be challenging and of longer duration.  A few of the iconic treks are Nepal&rsquo;s Annapurna, Peru&rsquo;s Machu Pichu, or New Zealand&rsquo;s Milford Sound. "
            //////Paragraph 2

            class_Paragraph_2="h6 fw-light lh-lg text-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        <div className="spacer"></div>
        {
          <ImgBlock
            class_Container="container mt-0 p-0"
            class_row="row g-0 w-50 mx-auto"
            class_col_1="col"
            class_col_2="col"
            class_col_3="col hidden"
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="trek-DSC01607_fs.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="trek-knome-6359111.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="trek-taryn-elliott-4183359.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="trek-IMG_0516-2_fs.jpg"
            image_4_title="this is a tooltip"
            alt_4="image"
            label_4=""
          />
        }
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <Paragraph
            //////container
            class_Container="container "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="Qui Errot Doloremque Aut Optio Omnis id Quis Deserun" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-left mt-0 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light mb-5"
            content_Paragraph_1="A hike is often focused on a trail which does not necessarily require you complete the entire circuit. There are also several famous trails which have gained popularity like the pilgrimage routes to Santiago del Compostela, trails along the coast of the Cinque Terra or Torres del Paine Park in Chile. Rather than camping you stay in accommodations ranging from rustic lodges/refugios to hotels along the way. For an unusual combination, you can also consider a walking safari with Sumburu of Kenya. Whatever appeals to you, I can help you design a walk, hike, or trek that is the right one for you."
            //////Paragraph 2

            class_Paragraph_2="p fw-light text-light hidden"
            content_Paragraph_2=" Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."
            //////Paragraph 3

            class_Paragraph_3="p fw-light text-light hidden"
            content_Paragraph_3="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."
          />
        }
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ContactCall
            class_Container="container mt-0 mb-5  pb-0 "
            class_row="row justify-content-center"
            class_link="decorate-none"
            link_target="tel:+1-503-296-7913"
            class_Paragraph_1="col-auto text-light  border border-1 text-end h6 p-3"
            class_Paragraph_2="col-auto text-light  border border-1 bg-green text-start h6 p-3"
            content_Paragraph_1="To Arrange Your Adventure of a Lifetime, Call:"
            content_Paragraph_2="+1 (503) 296-7913"
          />
        }

        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
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
      </div>
      {<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
    </>
  );
}

export default Home;
