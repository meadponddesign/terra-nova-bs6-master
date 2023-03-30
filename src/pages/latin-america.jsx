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
          src_background="sized_1903-303100172_750d6be50c_o.jpg"
          text="Latin America"
          img_height="70vh"
          class_text="col-auto text-light fw-med  px-5 mx-auto pb-2 h1"
          text_background_color="rgba(160, 82, 19,.6)"
        />
      }
      {
        <BorderPattern
          img_src="border-pattern.jpg"
          alt_src="Green and Russet Tropical Art Border"
        />
      }
      <div className="bg-dark ">
        <div className="spacer"></div>
        {
          <Paragraph
            //////container
            class_Container="container pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title
            class_Title="h3 fw-light pt-0 text-light mb-4"
            content_Title="Experience the Beauty of Latin America&rsquo;s Natural Habitats & Inhabitants" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto "
            //////Paragraph 1

            class_Paragraph_1="h6 fw-light lh-lg text-light"
            content_Paragraph_1="South of the border frequently euphemistically is used to mean Mexico, but in reality “south of the border” comprises Latin America&rsquo;s 20 individual countries in Central America and South America that each have their own distinct geographic features, cultures, plants, and animals.  Latin America&rsquo;s diversity is astounding and breathtaking.  From the Altiplanos of Peru & Bolivia, the Ecuadorian Galapagos, Napo&rsquo;s equatorial steamy jungles & Quito&rsquo;s & the Cotopaxi &rsquo;s area active high-altitude volcanos to the Chile&rsquo;s Atacama Desert, Lake district & Patagonia and the cosmopolitan Buenos Aires, Argentina&rsquo;s Big Apple/City of Lights, there&rsquo;s something to delight and inspire every traveler. "
            //////Paragraph 2

            class_Paragraph_2="p fw-light lh-lg hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light lh-lg hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        <div className="spacer"></div>
        {
          <ImgBlockRows
            class_Container="container p-0"
            class_row="row g-0 w-85 mx-auto "
            class_col_1="col"
            class_col_2="col"
            class_col_3="col"
            class_col_4="col"
            class_col_5="col"
            class_col_6="col"
            class_labels="mt-4"
            class_img="img-fluid w-100 "
            class_label="text-center fst-italic text-light "
            image_1="sized_180-DSC01686_fs.jpg"
            image_1_title="this is a tooltip"
            alt_1="image"
            label_1=""
            image_2="sized_180-IMG_9008_fs.jpg"
            image_2_title="this is a tooltip"
            alt_2="image"
            label_2=""
            image_3="sized_180-DSC01669_fs.jpg"
            image_3_title="this is a tooltip"
            alt_3="image"
            label_3=""
            image_4="sized_180-image000001.jpg"
            image_4_title="this is a tooltip"
            alt_4="image"
            label_4=""
            image_5="sized_180-DSCN1703_fs.jpg"
            image_5_title="this is a tooltip"
            alt_5="image"
            label_5=""
            image_6="sized_180-P1110699_fs.jpg"
            image_6_title="this is a tooltip"
            alt_6="image"
            label_6=""
          />
        }
        {
          <Paragraph
            //////container
            class_Container="container pt-0 "
            class_Container_Title="row text-center mt-0 mx-auto"
            //////Title

            class_Title="h5 pt-0 text-light mt-0 hidden"
            content_Title="The Smaller Subhead and Text Go Below Here" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-0 w-85 px-3 fw-light mx-auto "
            //////Paragraph 1

            class_Paragraph_1="p fw-light text-light hidden"
            content_Paragraph_1="Lorem ipsum dolor sit amet. Sed temporibus asperiores et quia voluptatem qui corrupti aliquid id eligendi ipsam ut iste error ut enim voluptatem aut quaerat officia. Est ullam repellendus ad eaque obcaecati ex debitis quod. In officia rerum est ducimus quia et odit doloribus est iure quas? Aut aspernatur minima qui ipsa dolorem et voluptas placeat quo consectetur blanditiis qui reiciendis voluptatibus."
            //////Paragraph 2

            class_Paragraph_2="p fw-light hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light hidden"
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
            image_1="images/Latin-Am-DSC01583_fs.jpg"
            image_2="images/LatinAm-DSCN0800_fs.jpg"
            image_3="images/LatinAm-IMG_8050_fs.jpg"
            image_4="images/LatinAm-DSCN1494_fs.jpg"
            image_5="images/LatinAm-P1100461_fs.jpg"
            image_6="images/LatinAm-P1110428_fs.jpg"
            image_7="images/LatinAm-P1110357_fs.jpg"
            image_8="images/LatinAm-DSCN0800_fs.jpg"
          ></Slider>
        }{" "}
        {
          <Paragraph
            //////container
            class_Container="container pt-5 "
            class_Container_Title="row text-center mt-0 mx-auto "
            //////Title

            class_Title="h5 pt-0 text-light mt-0 mb-2 hidden"
            content_Title="The Smaller Subhead and Text Style Here" //////container
            //////Paragraph container

            class_Container_Paragraph="row text-center mt-4 w-85 px-3 mx-auto hidden "
            //////Paragraph 1

            class_Paragraph_1="p fw-light lh-lg text-light hidden"
            content_Paragraph_1=" Lorem ipsum dolor sit amet. Sed temporibus asperiores et quia voluptatem qui corrupti aliquid id eligendi ipsam ut iste error ut enim voluptatem aut quaerat officia. Est ullam repellendus ad eaque obcaecati ex debitis quod. In officia rerum est ducimus quia et odit doloribus est iure quas? Aut aspernatur minima qui ipsa dolorem et voluptas placeat quo consectetur blanditiis qui reiciendis voluptatibus est error omnis. "
            //////Paragraph 2

            class_Paragraph_2="p fw-light lh-lg hidden"
            content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
            //////Paragraph 3

            class_Paragraph_3="p fw-light lh-lg hidden"
            content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
          />
        }
        <div className="spacer"></div>
        <div className="spacer"></div>
        {<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
      </div>
      <div className="bg-brown">
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ImageLeft
            class_Container="container mt-0 p-0"
            class_row="row g-0 w-75 mx-auto text-light"
            class_col_1="col-7 ps-3"
            class_col_2="col-5"
            class_img="img-fluid w-100 "
            image_1="latin_america.gif"
            image_1_title="this is a tooltip"
            alt_1="Latin America on the Map"
            label_1="Lorem Ipsom"
            class_header_1="h4 mt-0 mb-3"
            class_header_2="h4 mt-4 mb-3 hidden"
            class_header_3="h4 mt-4 mb-3 hidden"
            class_text_1="p fw-light mt-4 mb-3 text-light"
            class_text_2="p fw-light mt-4 mb-3 text-light"
            class_text_3="p fw-light mt-4 mb-3 text-light"
            header_1="Latin America on the Map"
            header_2=""
            header_3=""
            text_1="Lorem ipsum dolor sit amet. Sed temporibus asperiores et quia voluptatem qui corrupti aliquid id eligendi ipsam ut iste error ut enim voluptatem aut quaerat officia. Est ullam repellendus ad eaque obcaecati ex debitis quod. In officia rerum est ducimus quia et odit doloribus est iure quas? Aut aspernatur minima qui ipsa dolorem et voluptas placeat quo consectetur blanditiis qui reiciendis voluptatibus est error omnis."
            text_2="In officia rerum est ducimus quia et odit doloribus est iure quas? Aut aspernatur minima qui ipsa dolorem et voluptas placeat quo consectetur blanditiis qui reiciendis voluptatibus est error omnis."
            text_3=""
          />
        }
        <div className="spacer"></div>
        <div className="spacer"></div>
        {
          <ContactCall
            class_Container="container mt-0 mb-0 pb-0 "
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
      {
        <BorderPattern
          img_src="border-pattern.jpg"
          alt_src="Green and Russet Tropical Art Border"
        />
      }
    </>
  );
}

export default Home;
