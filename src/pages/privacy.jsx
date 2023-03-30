import React from "react";
import {
	HeaderImage,
	Paragraph,
	Cards,
	ContactCall,
	BorderPattern,
} from "../components/rows";

function Home() {
	return (
		<>
			{
				<HeaderImage
					src_background="ekrulila-3837487Short.jpg"
					text="Our Privacy Policy&hellip;"
					img_height="50vh"
					class_text="col-auto text-light fw-med  px-5 mx-auto pb-2 h1"
					text_background_color="rgba(160, 82, 19,.6)"
				/>
			}
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
			<div className="bg-light ">
			<div className="spacer"></div>
			

				{
					<Paragraph
						//////container--NOTE: This page is not completed yet.  032622
						class_Container="container pt-5 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h2 fw-med pt-0 text-dark"
						content_Title="Terra Nova Travel Values Your Privacy" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-4 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="h6 fw-med lh-lg text-dark hidden"
						content_Paragraph_1=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "
						
						
						//////Paragraph 2

						class_Paragraph_2="h6 fw-med lh-lg text-dark hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="h6 fw-med lh-lg text-dark hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="INTRODUCTION" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="This privacy notice provides you with details of how we collect and process your personal data through your use of our site, Terranovatour.com.
						Terra Nova Travel, LLC is responsible for your personal data (referred to as “we”, “us” or “our” in privacy notice). It is very important that the information we hold about you is accurate and up to date. Please let us know if at any time your personal information changes by emailing us at nancy@terranovatour.com"
						//////Paragraph 2

						class_Paragraph_2="p fw-med text-dark hidden"
						content_Paragraph_2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
						//////Paragraph 3

						class_Paragraph_3="p fw-med text-dark hidden"
						content_Paragraph_3=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in!"
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="WHAT DATA DO WE COLLECT ABOUT YOU & FOR WHAT PURPOSE?" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="Personal data means any information capable of identifying an individual. It does not include anonymous data. We may process the following categories of personal data about you:
						User Data that includes data about how you use our website and any online services together with any data that you post for publication on our website or through other online services. We process this data to operate our website and ensure relevant content is provided to you, to ensure the security of our website, to maintain back-ups of our website and/or databases, and to enable publication and administration of our website, other online services, and business."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_2="Technical Data that includes data about your use of our website and online services such as your IP address, your login data, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyze your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you, and to understand the effectiveness of our advertising."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_3="Marketing Data includes data about your preferences in receiving marketing from us and our third parties and your communication preferences. We process this data to deliver relevant website content and advertisements to you and measure or understand the effectiveness of this advertising.
						We may use Customer Data, User Data, Technical Data, and Marketing Data to deliver relevant website content and advertisements to you and to measure or understand the effectiveness of the advertising we serve you."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark font-light"
						content_Title="SENSITIVE DATA" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="We do not collect any sensitive data about you. Sensitive data refers to data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, information about your health, and genetic and biometric data. We do not collect any information about criminal convictions and offenses.
						Where we are required to collect personal data by law, or under the terms of our mutual contract, if you do not provide us with that data when requested, we may not be able to adhere to the contract (for example, to deliver goods or services to you). If you don’t provide us with the requested data, we may have to cancel a product or service you have ordered but if we do, we will notify you at the time."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_2="Technical Data that includes data about your use of our website and online services such as your IP address, your login data, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyze your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you, and to understand the effectiveness of our advertising."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_3="We will only use your personal data for a purpose it was collected for or a reasonably compatible purpose if necessary.
						We may process your personal data without your knowledge or consent where this is required or permitted by law.
						We do not carry out automated decision making or any type of automated profiling."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="HOW WE COLLECT YOUR PERSONAL DATA" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="We may collect data about you by you providing the data directly to us (for example by filling in forms on our site or by sending us emails). We may automatically collect certain data from you as you use our website by using cookies and similar technologies.
						We may receive data from third parties such as analytics providers (Google, for instance), search information providers such as Google or aggregators.  may receive data from third parties such as analytics providers (Google, for instance), search information providers such as Google or aggregators."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_2="We may receive data from third parties such as analytics providers (Google, for instance), search information providers such as Google or aggregators."
						//////Paragraph 3

						class_Paragraph_3="p fw-light lh-lg text-dark mt-4 hidden"
						content_Paragraph_3="Lorem ipsum."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="MARKETING COMMUNICATIONS" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="Our legal premise for processing your personal data to send you marketing communications is either your consent or our legitimate interests (namely to grow our business). Before we share your personal data with any third party for their own marketing purposes, we will get your express consent."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_2="Before"
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_3="Lorem ipsum."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="DISCLOSURE OF YOUR PERSONAL DATA" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 --This will be a bulleted lineup below. 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="We may have to share your personal data with the parties set out below:
						Service providers who provide IT and system administration services.
						Professional advisers including lawyers, bankers, auditors, and insurers.
						Government bodies that require us to report processing activities.
						Third parties to whom we sell, transfer, or merge parts of our business or our assets."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 "
						content_Paragraph_2="We require all third parties to whom we transfer your data to respect the security of your personal data and to treat it in accordance with the law. We only allow such third parties to process your personal data for specified purposes and in accordance with our instructions."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_3="Lorem ipsum."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="DATA SECURITY" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 --This will be a bulleted lineup below. 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="We have put in place security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed without authorization. We also allow access to your personal data only to those employees and partners who have a business need to know such data. They will only process your personal data on our instructions, and they must keep it confidential."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 "
						content_Paragraph_2="We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach if which we are legally required."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_3="Lorem ipsum."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="DATA RETENTION" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. When deciding what the correct time is to keep the data for, we look at its amount, nature and sensitivity, potential risk of harm from unauthorized use or disclosure, the processing purposes, if these can be achieved by other means and legal requirements. "
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 "
						content_Paragraph_2="
						For tax purposes, the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they stop being customers."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 "
						content_Paragraph_3="In some circumstances, we may anonymize your personal data for research or statistical purposes in which case we may use this information indefinitely without further notice to you."
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="YOUR LEGAL RIGHTS" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="For tax purposes, the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they stop being customers. You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive or refuse to comply with your request under these circumstances.
						We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 "
						content_Paragraph_2="We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden "
						content_Paragraph_3="In"
					/>
				}
							{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="THIRD-PARTY LINKS" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_2="We"
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden "
						content_Paragraph_3="In"
					/>
				}

				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="COOKIES" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see below for our Cookie Policy."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4 hidden"
						content_Paragraph_2="We"
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden "
						content_Paragraph_3="In"
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="WHAT&rsquo;S A COOKIE?" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1="A “cookie” is a piece of information that is stored on your computer&rsquo;s hard drive which records how you move around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyze traffic and for advertising and marketing purposes.
						Cookies are used by nearly all websites and do not harm your system."
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_2="If you want to check or change what types of cookies you accept, this can usually be altered within your browser settings. You can block cookies at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site."
						//////Paragraph 3

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden "
						content_Paragraph_3="In"
					/>
				}
				{
					<Paragraph
						//////container
						class_Container="container pt-0 "
						class_Container_Title="row text-center mt-0 mx-auto "
						//////Title

						class_Title="h5 pt-4 text-dark fw-med"
						content_Title="DO WE USE COOKIES?" //////container
						//////Paragraph container

						class_Container_Paragraph="row text-left mt-2 w-85 px-3 mx-auto "
						//////Paragraph 1 

						class_Paragraph_1="p fw-med lh-lg text-dark"
						content_Paragraph_1={<><p><b>This privacy notice </b> provides you with details of how we collect and process your personal data through your use of our site,
						Terranovatour.com. Terra Nova Travel, LLC is responsible for your personal data (referred to as “we”, “us” or “our” in privacy notice). It is very important that the information we hold about you is accurate and up to date.
						 Please let us know if at any time your personal information changes by emailing us at <b><a href="mailto:nancy@terranovatour.com">nancy@terranovatour.com</a></b></p></>}
						
						//////Paragraph 2

						class_Paragraph_2="p fw-med lh-lg text-dark mt-4"
						content_Paragraph_2="If you want to check or change what types of cookies you accept, this can usually be altered within your browser settings. You can block cookies at any time by activating the setting on Cookies are either:
						Session cookies: these are only stored on your computer during your web session and are automatically deleted when you close your browser &ndash; they usually store an anonymous session ID allowing you to browse a website without having to log in to each page but they do not collect any personal data from your computer; or
						Persistent cookies: a persistent cookie is stored as a file on your computer and it remains there when you close your web browser. The cookie can be read by the website that created it when you visit that website again. We use persistent cookies for Google Analytics."
						//////Paragraph 3 Bulleted items below and boldfaced leadin tags

						class_Paragraph_3="p fw-med lh-lg text-dark mt-4 hidden "
						content_Paragraph_3="Cookies can also be categorized as follows:
						Strictly necessary cookies: These cookies are essential to enable you to use the website effectively, such as when buying a product and/or service, and therefore cannot be turned off. Without these cookies, the services available to you on our website cannot be provided. These cookies do not gather information about you that could be used for marketing or remembering where you have been on the Internet.
						Performance cookies: These cookies enable us to monitor and improve the performance of our website. For example, they allow us to count visits, identify traffic sources, and see which parts of the site are most popular.
						Functionality cookies: These cookies allow our website to remember choices you make and provide enhanced features. For instance, we may be able to provide you with news or updates relevant to the services you use. They may also be used to provide services you have requested such as viewing a video or commenting on a blog. The information these cookies collect is usually kept anonymous.
						our browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site."
					/>
				}

					<div className="spacer"></div>
					<div className="spacer"></div>
					
				{
					///////This needs to have a black border around it.
					<ContactCall
						class_Container="container mt-0 mb-0  pb-0 "
						class_row="row justify-content-center"
						class_link="decorate-none"
						link_target="tel:+1-503-296-7913"
						class_Paragraph_1="col-auto text-dark  border border-1 text-end h6 p-3"
						class_Paragraph_2="col-auto text-light  border border-1 bg-green text-start h6 p-3"
						content_Paragraph_1="To Arrange Your Adventure of a Lifetime, Call:"
						content_Paragraph_2="+1 (503) 296-7913"
				/>
				}
				<div className="spacer"></div>
				<div className="spacer"></div>
				<div className="bg-light ">
				{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
				
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
			</div>
			{<BorderPattern img_src="border-pattern.jpg" alt_src="" />}
		</>
	);
}

export default Home;
