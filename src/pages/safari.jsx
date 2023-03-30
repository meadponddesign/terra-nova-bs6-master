import React from "react";
import {
  HeaderImage,
  Paragraph,
  Cards,
  ContactCall,
  BorderPattern,
  ImgBlockRows,
} from "../components/rows";

function Safari() {
  return (
    <>
      {
        <HeaderImage
          src_background="safari-lioness_chitabe.jpg"
          text="Safari"
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
            class_Container="container  pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h3 fw-light pt-0 text-light"
            content_Title="Up-Close Wilderness Encounters of the Africa Kind" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="Derived from the Swahili word, a safari is defined as a journey, but over the past century the word has become synonymous with an expedition to observe or hunt animals in their natural habitat, especially in Africa.  The macho Hemingway style animal hunt safaris have given way to the 21st century “photo shoot”/animal observation safari, which reigns supreme. Nonetheless the animal observation safaris cover a wide range of experiences: gorilla trekking, walking, land rover, and water-based safaris. And about ten to twelve more words."
            //////Paragraph 2

            class_Paragraph_2="h6 fw-light lh-lg text-light"
            content_Paragraph_2="Safari accommodations offer a wide variety, from lodges to mobile and permanent tented camps with various levels of amenities from wine cellars, high thread count Egyptian cotton sheets to bush showers and camp cots&hellip; I love going on safari. Check out a few of my past adventures for inspiration for you own personal safari."
            //////Paragraph 3

            class_Paragraph_3="p fw-light hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        <div className="spacer"></div>
        {
          <ImgBlockRows
            class_Container="container p-0"
            class_row="row g-0 w-75 mx-auto "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col"
            class_col_5="col hidden"
            class_col_6="col hidden"
            class_labels="mt-4 "
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="ekrulila-3837487 (4).jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="safari-P1160311_fs.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="safari.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="safari-P1130946_fs.jpg"
            image_4_title="photo credit: xyz abc"
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
        {
          <Paragraph
            //////container
            class_Container="container  pt-0 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-0 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light hidden"
            content_Paragraph_1="Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim."
            //////Paragraph 2

            class_Paragraph_2="p fw-light text-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Veritatis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light text-light hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        <div className="spacer"></div>
        {
          <Paragraph
            //////container
            class_Container="container  pt-0 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="Professional Trip Designing for the Inquisitive, Independent & Intrepid" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-0 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light hidden"
            content_Paragraph_1=" Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Veritatis in!Lorem ipsum dolor sit amet!"
            //////Paragraph 2

            class_Paragraph_2="p fw-light text-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Veritatis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light lh-lg hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
      </div>
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
      <div className="spacer"></div>
      <div className="spacer"></div>

      {<BorderPattern img_src="border-pattern.jpg" alt_src="" />}

      <div className="bg-light">
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

export default Safari;
