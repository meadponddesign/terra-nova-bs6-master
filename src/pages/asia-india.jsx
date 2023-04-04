import React from "react";
import {
  HeaderImage,
  Paragraph,
  ImgBlockRows,
  ImageLeft,
  Cards,
  ContactCall,
  BorderPattern,
  Slider,
} from "../components/rows";

function Home() {
  return (
    <>
      {
        <HeaderImage
          src_background="Asia-235731.jpg"
          text="India & Asia&hellip;"
          img_height="70vh"
          class_text="col-auto text-light fw-med  px-5 mx-auto pb-2 h1"
          text_background_color="rgba(160, 82, 19,.6)"
        />
      }
      {
        <BorderPattern
          img_src="border-pattern.jpg"
          alt_src="Green and Russet Art Border"
        />
      }
      <div className="spacer"></div>
      <div className="bg-dark ">
        {
          <Paragraph
            //////container
            class_Container="container  pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h3 fw-light pt-0 text-light mb-3"
            content_Title="Savor the Unique Cultures, Colors & Spices" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto"
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="Ancient civilizations with their distinct vibe, Blade Runner cities, floating markets, jungle engulfed temples, marble mausoleums, pungent spices and elegant textiles.  (Link India and Asia trips here)"
            //////Paragraph 2

            class_Paragraph_2="h6 fw-light lh-lg text-light"
            content_Paragraph_2="     My most recent adventure took me to Vietnam where I spent 2 fantastic weeks and still can&rsquo;t claim to know the country. (working on a story about the trip with pictures..)"
            //////Paragraph 3

            class_Paragraph_3="p fw-light lh-lg hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }

        {
          <Slider
            classContainer="container mb-4 "
            class_row="row w-50 mx-auto p-4"
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
            image_1="images/indiaasia-artem-beliaikin.jpg"
            image_2="images/asia-india-saymon-sami.jpg"
            image_3="images/asia-india-wouter-de-jong-750895.jpg"
            image_4="images/asia-india_anfjara_art.jpg"
            image_5="images/asia-india-arora.jpg"
            image_6="images/asiaindia-anugrah-lohiya.jpg"
            image_7="images/Asia-India-sahil-prajapati.jpg"
            image_8="images/asiaindia-ashok-j-kshetri.jpg"
          ></Slider>
        }
        {
          <Paragraph
            //////container
            class_Container="container  pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="India and Asia Headline Goes Briefly Here" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light hidden"
            content_Paragraph_1="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."
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
          <BorderPattern
            img_src="border-pattern.jpg"
            alt_src=""
          />
        }
      </div>
      <div className="bg-brown ">
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ImageLeft
            class_Container="container mt-0 p-0"
            class_row="row g-0 w-75 mx-auto text-light"
            class_col_1="col-5 ps-3"
            class_col_2="col-7"
            class_img="img-fluid w-100 "
            image_1="Map_of_Asia.jpg"
            image_1_title="this is a tooltip"
            alt_1="Austral and Asia Map"
            label_1="Lorem Ipsom"
            class_header_1="h4 mt-0 mb-3"
            class_header_2="h4 mt-4 mb-3 hidden"
            class_header_3="h4 mt-4 mb-3 hidden"
            class_text_1="p fw-light mt-4 mb-3 text-light"
            class_text_2="p fw-light mt-4 mb-3 text-light"
            class_text_3="p fw-light mt-4 mb-3 text-light"
            header_1="India & Asia Destinations to Explore"
            header_2=""
            header_3=""
            text_1="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
            text_2="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quidem voluptatum velit modi non quos soluta maxime quasi vel inventore dolorem."
            text_3=""
          />
        }

        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ImgBlockRows
            class_Container="container p-0   "
            class_row="row g-0 mx-auto w-85 "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col"
            class_col_5="col hidden"
            class_col_6="col hidden"
            class_labels="mt-4 "
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="sized_256x180-1.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="sized_256x180-nepal_group.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="sized_256x180-14.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="sized_256x180-4.jpg"
            image_4_title="this is a tooltip"
            alt_4="image"
            label_4=""
            image_5="sized_180-DSC01669_fs.jpg"
            image_5_title="this is a tooltip"
            alt_5="image"
            label_5=""
            image_6="sized_180-DSC01669_fs.jpg"
            image_6_title="this is a tooltip"
            alt_6="image"
            label_6=""
          />
        }
        <div className="spacer"></div>
        {
          <Paragraph
            //////container
            class_Container="container  pt-4 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="Discover the Exotic Cultures, Traditions & Flavors of India and Southeast Asia" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto hidden "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light"
            content_Paragraph_1=" Arum hilibus, seque dolorro volorerum quo blacerspit untibus, inciaectur si dus si od quiae nosae core velest,
						sinust id ut aut fuga. Nam eSediamus andiscia quam, et earum a nos est harciis acerunti voluptissit, culliquaero. Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdie."
            //////Paragraph 2

            class_Paragraph_2="p fw-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
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
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <BorderPattern
            img_src="border-pattern.jpg"
            alt_src=""
          />
        }
      </div>
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
      {
        <BorderPattern
          img_src="border-pattern.jpg"
          alt_src=""
        />
      }
    </>
  );
}

export default Home;
