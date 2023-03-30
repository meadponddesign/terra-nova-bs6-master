const img_dir = "./images/";
export function Paragraph({
  class_Container,
  class_Container_Title,
  class_Title,
  content_Title,
  class_Container_Paragraph,
  class_Paragraph_1,
  class_Paragraph_2,
  class_Paragraph_3,
  content_Paragraph_1,
  content_Paragraph_2,
  content_Paragraph_3,
}) {
  return (
    <div className={class_Container}>
      <div className={class_Container_Title}>
        <div className={class_Title}>{content_Title}</div>
      </div>
      <div className={class_Container_Paragraph}>
        <div className={class_Paragraph_1}>{content_Paragraph_1}</div>
      </div>
      <div className={class_Container_Paragraph}>
        <div className={class_Paragraph_2}>{content_Paragraph_2}</div>
      </div>
      <div className={class_Container_Paragraph}>
        <div className={class_Paragraph_3}>{content_Paragraph_3}</div>
      </div>
    </div>
  );
}
export function ContactCall({
  class_Container,
  class_row,
  class_link,
  class_Paragraph_1,
  class_Paragraph_2,
  content_Paragraph_1,
  content_Paragraph_2,
}) {
  return (
    <div className={class_Container}>
      <a href={class_link} className={class_link}>
        <div className={class_row}>
          <div className={class_Paragraph_1}>{content_Paragraph_1}</div>
          <div className={class_Paragraph_2}>{content_Paragraph_2}</div>
        </div>
      </a>
    </div>
  );
}
export function ParagraphCols({
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_col_3,
  class_header_1,
  class_header_2,
  class_header_3,
  class_text_1,
  class_text_2,
  class_text_3,
  header_1,
  header_2,
  header_3,
  text_1,
  text_2,
  text_3,
}) {
  return (
    <div className={class_Container}>
      <div className={class_row}>
        <div className={class_col_1}>
          <h2 className={class_header_1}>{header_1}</h2>
          <h6 className={class_text_1}>{text_1}</h6>
        </div>
        <div className={class_col_2}>
          <h2 className={class_header_2}>{header_2}</h2>
          <h6 className={class_text_2}>{text_2}</h6>
        </div>
        <div className={class_col_3}>
          <h2 className={class_header_3}>{header_3}</h2>
          <h6 className={class_text_3}>{text_3}</h6>
        </div>
      </div>
    </div>
  );
}
export function HeaderImage({
  src_background,
  text,
  img_height,
  text_background_color,
  class_text,
}) {
  const divStyle = {
    backgroundImage: "url(" + img_dir + src_background + " )",
    height: img_height,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };
  const textBackground = {
    backgroundColor: text_background_color,
  };
  return (
    <div className="container-fluid " style={divStyle}>
      <div className=" row h-100  align-items-center">
        <div className={class_text} style={textBackground}>
          {text}
        </div>
      </div>
    </div>
  );
}
export function HeaderVideo() {
  return (
    <div className="container-fluid p-0 ">
      <div className=" row header-video-container ">
        <video autoPlay muted playsInline className="header-video">
          <source src="images/video-tnt.mp4" type="video/mp4" />
        </video>
        <div className="header-overlay">
          <div className="h1 header-text ps-4 pb-2 pe-4  text-light fw-med">
            Your Invitation to Voyage…
          </div>
        </div>
      </div>
    </div>
  );
}
export function ImgBlockRows({
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_col_3,
  class_col_4,
  class_col_5,
  class_col_6,
  class_img,
  class_label,
  image_1,
  image_1_title,
  alt_1,
  label_1,
  image_2,
  image_2_title,
  alt_2,
  label_2,
  image_3,
  image_3_title,
  alt_3,
  label_3,
  image_4,
  image_4_title,
  alt_4,
  label_4,
  image_5,
  image_5_title,
  alt_5,
  label_5,
  image_6,
  image_6_title,
  alt_6,
  label_6,
}) {
  return (
    <>
      <div className={class_Container}>
        <div className={class_row}>
          <div className={class_col_1}>
            <img
              className={class_img}
              src={img_dir + image_1}
              alt={alt_1}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_1_title}
            />
            <p className={class_label}>{label_1}</p>
          </div>
          <div className={class_col_2}>
            <img
              className={class_img}
              src={img_dir + image_2}
              alt={alt_2}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_2_title}
            />
            <p className={class_label}>{label_2}</p>
          </div>
          <div className={class_col_3}>
            <img
              className={class_img}
              src={img_dir + image_3}
              alt={alt_3}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_3_title}
            />
            <p className={class_label}>{label_3}</p>
          </div>
          <div className={class_col_4}>
            <img
              className={class_img}
              src={img_dir + image_4}
              alt={alt_4}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_4_title}
            />
            <p className={class_label}>{label_4}</p>
          </div>
          <div className={class_col_5}>
            <img
              className={class_img}
              src={img_dir + image_5}
              alt={alt_5}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_5_title}
            />
            <p className={class_label}>{label_5}</p>
          </div>
          <div className={class_col_6}>
            <img
              className={class_img}
              src={img_dir + image_6}
              alt={alt_6}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_6_title}
            />
            <p className={class_label}>{label_6}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export function ImgBlock({
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_col_3,
  class_img,
  class_label,
  image_1,
  image_1_title,
  alt_1,
  label_1,
  image_2,
  image_2_title,
  alt_2,
  label_2,
  image_3,
  image_3_title,
  alt_3,
  label_3,
  image_4,
  image_4_title,
  alt_4,
  label_4,
  image_5,
  image_5_title,
  alt_5,
  label_5,
  image_6,
  image_6_title,
  alt_6,
  label_6,
}) {
  return (
    <>
      <div className={class_Container}>
        <div className={class_row}>
          <div className={class_col_1}>
            <p className={class_label}>{label_1}</p>
            <img className={class_img} src={img_dir + image_1} alt={alt_1} title={image_1_title}/>
            <img className={class_img} src={img_dir + image_2} alt={alt_2} title={image_2_title}/>
            <p className={class_label}>{label_2}</p>
          </div>
          <div className={class_col_2}>
            <p className={class_label}>{label_3}</p>
            <img className={class_img} src={img_dir + image_3} alt={alt_3} title={image_3_title}/>
            <img className={class_img} src={img_dir + image_4} alt={alt_4} title={image_4_title}/>
            <p className={class_label}>{label_4}</p>
          </div>
          <div className={class_col_3}>
            <p className={class_label}>{label_5}</p>
            <img className={class_img} src={img_dir + image_5} alt={alt_5} title={image_5_title}/>
            <img className={class_img} src={img_dir + image_6} alt={alt_6} title={image_6_title}/>
            <p className={class_label}>{label_6}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export function ImageRight({
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_img,
  image_1,
  alt_1,
  alt_2,
  class_header_1,
  class_header_2,
  class_header_3,
  class_text_1,
  class_text_2,
  class_text_3,
  header_1,
  header_2,
  header_3,
  text_1,
  text_2,
  text_3,
}) {
  return (
    <>
      <div className={class_Container}>
        <div className={class_row}>
          <div className={class_col_1}>
            <div className={class_header_1}>{header_1}</div>
            <div className={class_text_1}>{text_1}</div>
            <div className={class_header_2}>{header_2}</div>
            <div className={class_text_2}>{text_2}</div>
            <div className={class_header_3}>{header_3}</div>
            <div className={class_text_3}>{text_3}</div>
          </div>
          <div className={class_col_2}>
            <img
              className={class_img}
              src={img_dir + image_1}
              alt={alt_1}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Photo by Xyz from Pexels"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export function ImageLeft({
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_img,
  image_1,
  image_1_title,
  alt_1,
  class_header_1,
  class_header_2,
  class_header_3,
  class_text_1,
  class_text_2,
  class_text_3,
  header_1,
  header_2,
  header_3,
  text_1,
  text_2,
  text_3,
}) {
  return (
    <>
      <div className={class_Container}>
        <div className={class_row}>
          <div className={class_col_2}>
            <img
              className={class_img}
              src={img_dir + image_1}
              alt={alt_1}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={image_1_title}
            />
          </div>
          <div className={class_col_1}>
            <div className={class_header_1}>{header_1}</div>
            <div className={class_text_1}>{text_1}</div>
            <div className={class_header_2}>{header_2}</div>
            <div className={class_text_2}>{text_2}</div>
            <div className={class_header_3}>{header_3}</div>
            <div className={class_text_3}>{text_3}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export function BorderPattern({ img_src, alt_src }) {
  return (
    <div className="border-pattern">
      <img src={img_dir + img_src} alt={alt_src} width="100%" height="100%" />
    </div>
  );
}
export function ImageBlockMason1({
  class_Container,
  class_row_1,
  class_row_2,
  class_col_1,
  class_col_2,
  class_col_3,
  class_col_4,
  class_col_5,
  class_img,
  class_title_1,
  class_title_2,
  class_title_3,
  class_title_4,
  class_title_5,
  class_title_6,
  class_title_7,
  class_title_8,
  class_text_1,
  class_text_2,
  class_text_3,
  class_text_4,
  class_text_5,
  class_text_6,
  class_text_7,
  class_text_8,
  img_1,
  alt_1,
  img_2,
  alt_2,
  img_3,
  alt_3,
  img_4,
  alt_4,
  img_5,
  alt_5,
  title_1,
  title_2,
  title_3,
  title_4,
  title_5,
  title_6,
  title_7,
  title_8,
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  text_6,
  text_7,
  text_8,
}) {
  return (
    <div className={class_Container}>
      <div className={class_row_1}>
        <div className={class_col_1}>
          <img
            className={class_img}
            src={img_dir + img_1}
            alt={alt_1}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <img
            className={class_img}
            src={img_dir + img_2}
            alt={alt_2}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <img
            className={class_img}
            src={img_dir + img_3}
            alt={alt_3}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
        </div>
        <div className={class_col_2}>
          <div className={class_row_2}>
            <div className={class_col_3}>
              <img
                className={class_img}
                src={img_dir + img_4}
                alt={alt_4}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Photo by Xyz from Pexels"
              />
            </div>
            <div className={class_col_4}>
              <img
                className={class_img}
                src={img_dir + img_5}
                alt={alt_5}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Photo by Xyz from Pexels"
              />
            </div>
            <div className={class_col_5}>
              <div className={class_title_1}>{title_1}</div>
              <div className={class_text_1}>{text_1}</div>
              <div className={class_title_2}>{title_2}</div>
              <div className={class_text_2}>{text_2}</div>
              <div className={class_title_3}>{title_3}</div>
              <div className={class_text_3}>{text_3}</div>
              <div className={class_title_4}>{title_4}</div>
              <div className={class_text_4}>{text_4}</div>
              <div className={class_title_5}>{title_5}</div>
              <div className={class_text_5}>{text_5}</div>
              <div className={class_title_6}>{title_6}</div>
              <div className={class_text_6}>{text_6}</div>
              <div className={class_title_7}>{title_7}</div>
              <div className={class_text_7}>{text_7}</div>
              <div className={class_title_8}>{title_8}</div>
              <div className={class_text_8}>{text_8}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Cards({
  backgroundimg,
  class_Container,
  class_row,
  class_col_1,
  class_col_2,
  class_col_3,
  class_col_4,
  class_col_5,
  class_img,
  class_card,
  class_card_body,
  class_ul_list,
  class_li_list,
  class_drop_menu,
  class_drop_item,
  image_1,
  alt_1,
  image_2,
  alt_2,
  image_3,
  alt_3,
  image_4,
  alt_4,
  image_5,
  alt_5,
  class_header_1,
  class_header_2,
  class_text_1,
  class_text_2,
  header_1,
  header_2,
  header_3,
  header_4,
  header_5,
  header_6,
  subtitle_1,
  subtitle_2,
  subtitle_3,
  subtitle_4,
  subtitle_5,
  subtitle_6,
  col_1_text_1,
  col_1_href_1,
  col_1_text_2,
  col_1_href_2,
  col_1_text_3,
  col_1_href_3,
  col_1_text_4,
  col_1_href_4,
  col_1_text_5,
  col_1_href_5,
  col_1_text_6,
  col_1_href_6,
  col_2_text_1,
  col_2_href_1,
  col_2_text_2,
  col_2_href_2,
  col_2_text_3,
  col_2_href_3,
  col_2_text_4,
  col_2_href_4,
  col_2_text_5,
  col_2_href_5,
  col_2_text_6,
  col_2_href_6,
  col_3_text_1,
  col_3_href_1,
  col_3_text_2,
  col_3_href_2,
  col_3_text_3,
  col_3_href_3,
  col_3_text_4,
  col_3_href_4,
  col_3_text_5,
  col_3_href_5,
  col_3_text_6,
  col_3_href_6,
  col_4_text_1,
  col_4_href_1,
  col_4_text_2,
  col_4_href_2,
  col_4_text_3,
  col_4_href_3,
  col_4_text_4,
  col_4_href_4,
  col_4_text_5,
  col_4_href_5,
  col_4_text_6,
  col_4_href_6,
  col_5_text_1,
  col_5_href_1,
  col_5_text_2,
  col_5_href_2,
  col_5_text_3,
  col_5_href_3,
  col_5_text_4,
  col_5_href_4,
  col_5_text_5,
  col_5_href_5,
  col_5_text_6,
  col_5_href_6,
}) {
  const backgroudStyle = {
    backgroundImage: 'url("./images/compass.png")',
    backgroundSize: " auto",
    backgroundPosition: " bottom",
    backgroundRepeat: " no-repeat",
  };
  return (
    <div className={class_Container} style={backgroudStyle}>
      <div className={class_row}>
        {/* <!-- thumbnail --> */}
        <div className={class_col_1}>
          <img
            className={class_img}
            src={img_dir + image_1}
            alt={alt_1}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <div className={class_card}>
            <div className={class_card_body}>
              <div className={class_header_1}>Points on the Compass</div>
              <h6 className={class_header_2}>Where Do You Want To Go?</h6>
              <ul className={class_ul_list}>
                <li className={class_li_list}>
                  <a href={col_1_href_1}>
                    <div className={class_text_1}>Africa</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_1_href_2}>
                    <div className={class_text_1}>AustralAsia</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_1_href_3}>
                    <div className={class_text_1}>India & Asia</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_1_href_4}>
                    <div className={class_text_1}>Europe</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_1_href_5}>
                    <div className={class_text_1}>Latin America</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_1_href_5}>
                    <div className={class_text_1}>Morocco</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- thumbnail --> */}
        <div className={class_col_2}>
          <img
            className={class_img}
            src={img_dir + image_2}
            alt={alt_2}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <div className={class_card}>
            <div className={class_card_body}>
              <div className={class_header_1}>Floats Your Boat</div>
              <div className={class_header_2}>What Do You Like To Do?</div>
              <ul className={class_ul_list}>
                <li className={class_li_list}>
                  <a href={col_2_href_1}>
                    <div className={class_text_1}>Botanicals</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_2}>
                    <div className={class_text_1}>Eco-Adventures</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_3}>
                    <div className={class_text_1}>Endangered Cultures</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_4}>
                    <div className={class_text_1}>Food & Drink</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_5}>
                    <div className={class_text_1}>Safari</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_4}>
                    <div className={class_text_1}>Small Ships</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_4}>
                    <div className={class_text_1}>Treks & Hiking</div>
                  </a>
                </li>
                <li className={class_li_list}>
                  <a href={col_2_href_4}>
                    <div className={class_text_1}>World of Plants</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- thumbnail --> */}
        <div className={class_col_3}>
          <img
            className={class_img}
            src={img_dir + image_3}
            alt={alt_3}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <div className={class_card}>
            <div className={class_card_body}>
              <div className={class_header_1}>Ways To Go</div>
              <div className={class_header_2}>How Do You Like To Travel? </div>
              <ul className={class_ul_list}>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Custom Group
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Family & MultiGeneration
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Organized Set Departure Group
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Private / Individual
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href="./">
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href="./">
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href="./">
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Women
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- thumbnail --> */}
        <div className={class_col_4}>
          <img
            className={class_img}
            src={img_dir + image_4}
            alt={alt_4}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Photo by Xyz from Pexels"
          />
          <div className={class_card}>
            <div className={class_card_body}>
              <div className={class_header_1}>Travel Dispatches</div>
              <div className={class_header_2}>&lsquo;A Broad Abroad&rsquo;</div>
              <br></br>
              <ul className={class_ul_list}>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Past Itineraries{" "}
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Exotic Travel Archive{" "}
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={class_li_list}>
                  <div className={class_text_1}>
                    Image Gallery{" "}
                    <ul className={class_drop_menu}>
                      <li className={class_drop_item}>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                        <a href={col_1_href_1}>
                          <div className={class_text_2}> something div</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- thumbnail --> */}
        {/* <div className={class_col_5} id="card5">
					<img className={class_img} src={img_dir + image_5} alt={alt_5} data-bs-toggle="tooltip" data-bs-placement="top" title="Photo by Xyz from Pexels" />
					<div className={class_card}>
						<div className={class_card_body}>
							<div className={class_header_1}>Custom Group Trips</div>
							<div className={class_header_2}>Custom Trip Archives</div>
							<ul className={class_ul_list}>
								<li className={class_li_list}>
									<div className={class_text_1}>
										Sample One{" "}
										<ul className={class_drop_menu}>
											<li className={class_drop_item}>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className={class_li_list}>
									<div className={class_text_1}>
										Sample Two{" "}
										<ul className={class_drop_menu}>
											<li className={class_drop_item}>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className={class_li_list}>
									<div className={class_text_1}>
										Sample Three{" "}
										<ul className={class_drop_menu}>
											<li className={class_drop_item}>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className={class_li_list}>
									<div className={class_text_1}>
										Sample Four{" "}
										<ul className={class_drop_menu}>
											<li className={class_drop_item}>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
												<a href={col_1_href_1}>
													<div className={class_text_2}> something div</div>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div> */}
      </div>
    </div>
  );
}
export function Slider({
  classContainer,
  class_row,
  class_col,
  class_title_1,
  class_title_2,
  class_title_3,
  class_title_4,
  class_title_5,
  class_title_6,
  class_title_7,
  class_title_8,
  class_paragraph_1,
  class_paragraph_2,
  class_paragraph_3,
  class_paragraph_4,
  class_paragraph_5,
  class_paragraph_6,
  class_paragraph_7,
  class_paragraph_8,
  alt_1,
  alt_2,
  alt_3,
  alt_4,
  alt_5,
  alt_6,
  alt_7,
  alt_8,
  title_1,
  title_2,
  title_3,
  title_4,
  title_5,
  title_6,
  title_7,
  title_8,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
  paragraph_5,
  paragraph_6,
  paragraph_7,
  paragraph_8,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
}) {
  return (
    <div className={classContainer}>
      <div className={class_row}>
        <div className={class_col}>
          <div
            className="carousel slide pt-5"
            id="carouselIndicators"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src={image_1} alt={alt_1} />
                <div class="carousel-caption text-start">
                  <div className={class_title_1}>{title_1}</div>
                  <p className={class_paragraph_1}>{paragraph_1}</p>
                </div>
              </div>
              <div className="carousel-item ">
                <img src={image_2} alt={alt_2} />
                <div class="carousel-caption text-start">
                  <div className={class_title_2}>{title_2}</div>
                  <p className={class_paragraph_2}>{paragraph_2}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image_3} alt={alt_3} />
                <div class="carousel-caption text-start">
                  <div className={class_title_3}>{title_3}</div>
                  <p className={class_paragraph_3}>{paragraph_3}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image_4} alt={alt_4} />
                <div class="carousel-caption text-start">
                  <div className={class_title_4}>{title_4}</div>
                  <p className={class_paragraph_4}>{paragraph_4}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image_5} alt={alt_5} />
                <div class="carousel-caption text-start">
                  <div className={class_title_5}>{title_5}</div>
                  <p className={class_paragraph_5}>{paragraph_5}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image_6} alt={alt_6} />
                <div class="carousel-caption text-start">
                  <div className={class_title_6}>{title_6}</div>
                  <p className={class_paragraph_6}>{paragraph_6}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image_7} alt={alt_7} />
                <div class="carousel-caption text-start">
                  <div className={class_title_7}>{title_7}</div>
                  <p className={class_paragraph_7}>{paragraph_7}</p>
                </div>
              </div>
              <div className="carousel-item ">
                <img src={image_8} alt={alt_8} />
                <div class="carousel-caption text-start">
                  <div className={class_title_8}>{title_8}</div>
                  <p className={class_paragraph_8}>{paragraph_8}</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Mason2({
  class_Container = "container",
  class_row = "row",
  class_col_1 = "col-3",
  class_col_2 = "col-9",
  class_row_inner,
  class_img = "img-fluid",
  class_label1 = "p text-center fst-italic text-light",
  class_label2 = "p text-center fst-italic text-light",
  class_label3 = "p text-center fst-italic text-light",
  class_label4 = "p text-center fst-italic text-light",
  class_label5 = "p text-center fst-italic text-light",
  class_header_1 = "h4 pt-0 text-light",
  class_header_2 = "h4 pt-0 text-light",
  class_header_3 = "h4 pt-0 text-light",
  class_header_4 = "h4 pt-0 text-light",
  class_header_5 = "h4 pt-0 text-light",
  class_header_6 = "h4 pt-0 text-light",
  class_text_1 = "p fw-light  text-light",
  class_text_2 = "p fw-light  text-light",
  class_text_3 = "p fw-light  text-light",
  class_text_4 = "p fw-light  text-light",
  class_text_5 = "p fw-light  text-light",
  class_text_6 = "p fw-light  text-light",
  image_1 = "sized-186x186-india07_oxen.jpg",
  image_2 = "sized-186x186-india07_oxen.jpg",
  image_3 = "sized-186x186-india07_oxen.jpg",
  image_4 = "sized-186x186-india07_oxen.jpg",
  image_5 = "sized-186x186-india07_oxen.jpg",
  alt_1 = "xxxxxxxxxx",
  alt_2 = "xxxxxxxxxx",
  alt_3 = "xxxxxxxxxx",
  alt_4 = "xxxxxxxxxx",
  alt_5 = "xxxxxxxxxx",
  label_1 = "lorem",
  label_2 = "lorem",
  label_3 = "lorem",
  label_4 = "lorem",
  label_5 = "lorem",
  header_1 = "xxxxxxxxxx",
  header_2 = "xxxxxxxxxx",
  header_3 = "xxxxxxxxxx",
  header_4 = "xxxxxxxxxx",
  header_5 = "xxxxxxxxxx",
  header_6 = "xxxxxxxxxx",
  text_1 = "xxxxxxxxxx",
  text_2 = "xxxxxxxxxx",
  text_3 = "xxxxxxxxxx",
  text_4 = "xxxxxxxxxx",
  text_5 = "xxxxxxxxxx",
  text_6 = "xxxxxxxxxx",
}) {
  return (
    <>
      <div className={class_Container}>
        <div className={class_row}>
          <div className={class_col_1}>
            <img
              className={class_img}
              src={img_dir + image_1}
              alt={alt_1}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Photo by Xyz from Pexels"
            />
            <p className={class_label1}>{label_1}</p>
            <img
              className={class_img}
              src={img_dir + image_2}
              alt={alt_2}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Photo by Xyz from Pexels"
            />
            <p className={class_label2}>{label_2}</p>
            <img
              className={class_img}
              src={img_dir + image_3}
              alt={alt_3}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Photo by Xyz from Pexels"
            />
            <p className={class_label3}>{label_3}</p>
            <img
              className={class_img}
              src={img_dir + image_4}
              alt={alt_4}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Photo by Xyz from Pexels"
            />
            <p className={class_label4}>{label_4}</p>
          </div>
          <div className={class_col_2}>
            <div className={class_header_1}>{header_1}</div>
            <div className={class_text_1}>{text_1}</div>
            <div className={class_header_2}>{header_2}</div>
            <div className={class_text_2}>{text_2}</div>
            <div className={class_header_3}>{header_3}</div>
            <div className={class_text_3}>{text_3}</div>
            <div className={class_header_4}>{header_4}</div>
            <div className={class_text_4}>{text_4}</div>
            <div className={class_header_5}>{header_5}</div>
            <div className={class_text_5}>{text_5}</div>
            <div className={class_row_inner}>
              <div className="col">
                <div className={class_header_6}>{header_6}</div>
                <div className={class_text_6}>{text_6}</div>
              </div>
              <div className="col">
                <img
                  className={class_img}
                  src={img_dir + image_5}
                  alt={alt_5}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Photo by Xyz from Pexels"
                />
                <p className={class_label5}>{label_5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Mason3() {
  return (
    <>
      <div className="spacer"></div>
      <div className="container">
        <div className="row w-75 mx-auto g-3">
          <div className="col-4 ">
            <div className="row mb-2">
              <img className="img-fluid" src="images/safari-map2.jpg" alt="" />
            </div>
            <div className="row g-2">
              <div className="col-6">
                <div className="p text-light fw-light">
                  <i>
                    Terhorei eoer. Tenimag nihit mo iuscias dolupta sitis ut
                    quisti ae pe eariam
                  </i>
                </div>
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src="images/safari-bird-P1140025_fs.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-8 section2 ">
            <div className="row section3 ">
              <div className="col-8 ">
                <img
                  className="img-fluid"
                  src="images/599-P1160361_fs.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <div className="row mb-3">
                  <img
                    className="img-fluid "
                    src="images/safari-bedroom.jpg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <img className="img-fluid" src="images/hippo1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-3 ">
            <div className="p text-light">.</div>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src="images/safari-ungaro-1233286.jpg"
              alt=""
            />
          </div>
          <div className="col-3">
            <div className="p text-light fw-light">
              <i>Terhorei eoer.</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Mason4() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="images/P1220677_fs.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img
              src="images/sized_186x186-18_P1230413_fs.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col">
            <img src="images/sized_186x186-.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img
              src="images/sized-186x186-23_P1230746_fs.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col">
            <img
              src="images/sized-186x186-26_P1210711_fs.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col pt-3">
            <div className="h4 text-light mt-5 mb-4">
              Facculpa nis nonsequi ius aut occab idemeum quidi ip de pa qui
              beaquam atur?
            </div>
            <div className="p text-light fw-light pb-4 ">
              Lorem ipsum dolor sit amet. QuiLorem ipsum dolor sit amet. Qui
              error doloremque aut optio omnis id quis deserunt ab adipisci
              Quis. Aut aliquam pariatur in atque tenetur At provident commodi
              At natus mollitia ut officia nihil? Eum quaerat odio eum rerum
              excepturi et temporibus nesciunt quo amet pariatur qui molestiae
              nihil. Copy about the wonderful country of Morocco. Tenimagnihit
              molupic iuscias dolupta sitis ut quistiae pe eariam hicidelendae
              non natem que nus, ut am, solenisquat ad quam am, alignimaion pa
              eossinctia endae comnimi, que nonsequ amenda pernatusam aliquid
              elendit am, inissum sequi aditat officiamus.
            </div>
          </div>
          <div className="col mason4-img6">
            <img
              src="images/sized-540x540-P1230694_fs.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </>
  );
}
export function ContactForm() {
  return (
    <>
      <div className="container ">
        <div className="row p-5">
          <div className="col-6 p-2">
            <div className="h2 w-75 mx-auto">Column left header</div>
            <div className="p w-75 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quibusdam hic aliquam quam facere! Quis eum explicabo
              quod veniam quam.
            </div>
            <div className="p w-75 mx-auto">Phone </div>
            <div className="p w-75 mx-auto">Email</div>
          </div>
          <div className="col-6 contact-container ">
            <img
              className="contact-border "
              src="./images/contact-border.png"
              alt=""
            />
            <div className="h2 text-center mt-2">Let's Get In Touch </div>
            <div className="p text-center ">
              Ut quamenditat quidemq uiatur sam sequos ex etus, nis aut
              estinciis di dolupta tquisit ilit molo. Anducipi ctorestinti
              tieoreoi therioere
            </div>
            <div className="p-4">
              <input className="w-100 mb-5" type="text" placeholder="Name" />
              <input className="w-100 mb-5" type="email" placeholder="Email" />
              <textarea
                className="w-100 mt-3 "
                type="text"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function ContactForm2() {
  return (
    <>
      <div className="container ">
        <div className="row py-5 ">
          <div className="col-4 py-3 mb-5 pb-5 mx-auto   text-center">
            <div className="h2">Header</div>
            <div className="p">Lorem ipsum dolor sit amet.</div>
            <div className="p">Phone</div>
            <div className="p">Email</div>
          </div>
          <div className="col  mb-5 pb-5 ps-0 pe-0 mx-auto contact-container ">
            <img
              className="contact-border"
              src="./images/contact-border.png"
              alt=""
            />
            <div className="h2 w-85 text-center m-2">Header</div>
            <div className="p w-85 text-center m-2">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="ps-4 pe-4">
              <input type="text" className="w-100  " placeholder="NAME" />
              <input type="email" className="w-100  " placeholder="Email" />
              <textarea
                className="w-100 mt-3 "
                type="text"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
