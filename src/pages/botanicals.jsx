import React from "react";
import {
  HeaderImage,
  Paragraph,
  ImgBlockRows,
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
          src_background="Blue-Poppy.jpg"
          text="Botanical World"
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
            class_Container="container pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h3 fw-light pt-0 text-light"
            content_Title="Discover Where the Most Gorgeous Plants Grow" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="Where do our garden variety plants such as pelargonium, tomatoes, and tulips actually come from?"
            //////Paragraph 2

            class_Paragraph_2="h6 fw-light lh-lg text-light"
            content_Paragraph_2="Tracing the origins of many household name plants reveals an interesting history that can be better understood and appreciated by visiting the natural habitats where they are endemic. Explore the universe of flora across the globe from the lilies of the Incas, Alstroemeria, to the Baobabs of Botswana and Madagascar to the rhododendron of the Himalaya&rsquo;s forests. And a few more words go here and here to balance."
            //////Paragraph 3

            class_Paragraph_3="h6 fw-light lh-lg text-light"
            content_Paragraph_3=""
          />
        }
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ImgBlockRows
            class_Container="container p-0"
            class_row="row g-0 w-75 mx-auto "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col hidden"
            class_col_5="col hidden"
            class_col_6="col hidden"
            class_labels="mt-5 "
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="sized-DSC_0164_fs.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="sized-rajeev-mog-chowdhary-1033751.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="sized_DSC_0151_fs.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="sized_DSC_0151_fs.jpg"
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
        {
          <Paragraph
            //////container
            class_Container="container pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-0 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="I have designed trips for groups such as the National Tropical Botanical Gardens and the Oregon Hardy Plant Society as well as individuals.  Here are a few examples (links see under group trips also Cape Town Flora) to inspire you on your botanical adventure into the world of plants. Add a few more words here and here, if possible."
            //////Paragraph 2

            class_Paragraph_2="p fw-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
      </div>
      <div className="bg-dark ">
        {
          <Slider
            classContainer="container mb-5 "
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
            image_1="images/plants-jeswin-thomas-1007427.jpg"
            image_2="images/plants-9729036996_8279d06566_o.jpg"
            image_3="images/plants-min-an-1310182.jpg"
            image_4="images/plants-IMG_9359_fs.jpg"
            image_5="images/plants-Nancys-Lily.jpg"
            image_6="images/plants-shuraeva-5126987.jpg"
            image_7="images/plants-tatiana-syrikova-3968174.jpg"
            image_8="images/plants-min-an-1310182.jpg"
          ></Slider>
        }
        <div className="spacer"></div>

        {
          <Paragraph
            //////container
            class_Container="container  pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h4 pt-0 text-light hidden"
            content_Title="Professional Trip Designing for the Inquisitive, Independent & Intrepid" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-0 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light hidden"
            content_Paragraph_1="Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Praesent dapibus, neque id cursus faucibus, torto auguae magna eros eu erat. Aliquam erat volutpat."
            //////Paragraph 2

            class_Paragraph_2="p fw-light lh-lg hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light lh-lg hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        {
          <ImgBlockRows
            class_Container="container p-0"
            class_row="row g-0 w-75 mx-auto "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col hidden"
            class_col_5="col hidden"
            class_col_6="col hidden"
            class_labels="mt-4 "
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="sized-IMG_9456_fs.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="sized-DSC_1958_fs-copy.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="sized-IMG_9516_fs.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="sized_180-DSC01669_fs.jpg"
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
          <ImgBlockRows
            class_Container="container p-5"
            class_row="row g-0 w-75 mx-auto "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col hidden"
            class_col_5="col hidden"
            class_col_6="col hidden"
            class_labels="mt-4 "
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light"
            image_1="sized-IMG_9894_fs.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="sized-IMG_9095_fs.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="sized-DSC_1858_fs-copy.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="sized_180-DSC01669_fs.jpg"
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
        <div className="spacer"></div>
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
        <div className="spacer"></div>
        <div className="spacer"></div>
        {<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
      </div>
      <div className="bg-light ">
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
