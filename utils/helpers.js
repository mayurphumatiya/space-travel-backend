import express from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const router = express.Router();

export function isFieldPresentInRequest(reqBody, fieldName) {
  try {
    return (
      reqBody.hasOwnProperty(fieldName) &&
      reqBody[fieldName] !== null &&
      reqBody[fieldName] !== undefined &&
      reqBody[fieldName] !== ""
    );
  } catch (e) {
    console.log(`Error while check field name: ${e}`);
    return false;
  }
}

export const sendMail = async (mail, code) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "spacetourism6969@gmail.com",
      pass: "ojagzlcpdvignujo",
    },
  });

  let emailTemplate = `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="x-apple-disable-message-reformatting" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title> </title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&display=swap");
        [style*="Libre Franklin"] {
          font-family: "Libre Franklin", sans-serif !important;
        }
        u + #font-fix {
          display: block !important;
        }
        body {
          margin: 0 !important;
        }
        div[style*="margin: 16px 0"] {
          margin: 0 !important;
        }
        a {
          text-decoration: none;
        }
        @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
          .mini {
            width: 100% !important;
          }
          .ipadImg {
            width: 98% !important;
          }
          .ipad {
            width: 319px !important;
          }
          .val {
            width: 212px !important;
          }
        }
        @media screen and (min-device-width: 10px) and (max-width: 640px) {
          .full {
            width: 100% !important;
            height: auto !important;
          }
          .hide {
            width: 0 !important;
            height: 0 !important;
            font-size: 0 !important;
            line-height: 0 !important;
            overflow: hidden !important;
            float: left !important;
            display: none !important;
          }
          .show {
            display: block !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            float: none !important;
            clear: both !important;
            font-size: 18px !important;
            line-height: 23px !important;
          }
          table.show {
            display: table !important;
          }
          .shrink {
            width: 100px !important;
          }
          .quarter {
            width: 140px !important;
          }
          .container {
            min-width: 100% !important;
          }
          .block {
            display: block !important;
          }
          .center {
            margin: 0 auto !important;
            text-align: center !important;
            float: none !important;
            clear: both !important;
          }
          .box {
            width: 90% !important;
          }
          .half {
            width: 49% !important;
          }
          .yahooHero {
            padding: 40px 0 !important;
          }
          .bp_20 {
            padding-bottom: 20px !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 18px !important;
          }
        }
      </style>
      <!--[if gte mso 9
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:AllowPNG /><o:PixelsPerInch
              >96</o:PixelsPerInch
            ></o:OfficeDocumentSettings
          ></xml
        ><!
      [endif]-->
    </head>
    <body style="padding: 0" class="body">
      <div
        aria-hidden="true"
        style="display: none; max-height: 0; overflow: hidden; mso-hide: all"
      >
        There's more where that came from..
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
      </div>
      <table
        align="center"
        cellpadding="0"
        cellspacing="0"
        border="0"
        role="presentation"
        style="width: 100%; margin: 0 auto"
      >
        <!--[if !mso]-->
        <tbody>
          <tr>
            <td style="font-size: 0; line-height: 0; color: #fffffe">
              &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847;
              &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847;
              &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847;
              &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847;
              &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847;
              &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847; &#847;
              &#847; &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847;
              &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
              &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847;
              &#847; &#847; &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847;
              &#847;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847;
              &#847; &#847; &#847; &#847; &#847; &#847; &#847;&#847; &#847; &#847;
              &#847; &#847; &#847; &#847; &#847;
            </td>
          </tr>
        </tbody>
      </table>
      <table
        align="center"
        cellpadding="0"
        cellspacing="0"
        border="0"
        role="presentation"
        style="width: 100%; margin: 0 auto; background-color: #ffffff"
      >
        <tbody>
          <tr>
            <td style="font-size: 0">&nbsp;</td>
            <td
              align="center"
              style="width: 640px"
              bgcolor="#1e2124"
              class="full"
            >
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                style="width: 640px; margin: 0 auto"
                id="Header"
                class="full"
                bgcolor="#1e2124"
              >
                <tbody></tbody>
              </table>
              <!-- LOGO  -->
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                bgcolor="#1e2124"
                role="presentation"
                style="
                  width: 640px;
                  margin: 0 auto;
                  height: auto;
                  font-size: 20px;
                "
                id="Hero"
                class="full"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1084788917036920832/1122183795286749194/image.png"
                  alt="logo"
                  width="600"
                />
              </table>
              <!-- QR CODE  -->
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                style="width: 90%; margin: 0 auto; background-color: #36393e"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        text-align: center;
                        font-size: 25px;
                        color: #fff;
                        font-family: Bellefair, serif;
                      "
                    >
                      Congratulations on your booking!🎉
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 58px 0 28px">
                      <img
                        src="cid:qrcode"
                        width="250"
                        height="250"
                        alt="barcode"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        text-align: center;
                        font-size: 25px;
                        color: #fff;
                        font-family: Bellefair, serif;
                        padding-block: 20px;
                      "
                    >
                      We're excited for your journey🚀
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- More to Love -->
              <table align="center">
                <tr>
                  <td align="center" style="padding: 58px 0 28px">
                    <h4
                      style="
                        margin: 0;
  
                        font-size: 30px;
                        line-height: 1.6;
  
                        text-align: center;
                        font-family: Bellefair, serif;
                        font-weight: 700;
                        text-transform: uppercase;
                        color: #fff;
                      "
                    >
                      <a
                        href="https://dev--spacex-travel.netlify.app/"
                        style="text-decoration: none; color: #d2d8f9"
                        target="_blank"
                        >Explore More Destinations</a
                      >
                    </h4>
                  </td>
                </tr>
                <tr></tr>
              </table>
  
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                style="width: 640px; margin: 0 auto"
                class="full"
                bgcolor="#1e2124"
              >
                <tbody>
                  <tr>
                    <td align="center">
                      <a
                        href="https://dev--spacex-travel.netlify.app/destination"
                        style="text-decoration: none"
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/1084788917036920832/1122123927100084275/image-moon.webp"
                          width="160"
                          alt="Moon"
                          style="
                            border: 0;
                            margin: 0 auto;
                            text-align: center;
                            display: block;
                            border-radius: 10px;
                          "
                      /></a>
                    </td>
                    <td align="center">
                      <a
                        href="https://dev--spacex-travel.netlify.app/destination"
                        style="text-decoration: none"
                        ><img
                          src="https://cdn.discordapp.com/attachments/1084788917036920832/1122123927615963186/image-mars.webp"
                          width="160"
                          alt="Mars"
                          style="
                            border: 0;
                            margin: 0 auto;
                            text-align: center;
                            display: block;
                            border-radius: 10px;
                          "
                      /></a>
                    </td>
                    <td align="center">
                      <a
                        href="https://dev--spacex-travel.netlify.app/destination"
                        style="text-decoration: none"
                        ><img
                          src="https://cdn.discordapp.com/attachments/1084788917036920832/1122123927372709939/image-europa.webp"
                          alt="Europa"
                          width="160"
                          style="
                            border: 0;
                            margin: 0 auto;
                            text-align: center;
                            display: block;
                            border-radius: 10px;
                          "
                      /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 183px"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="
                                padding: 20px 20px;
                                font-size: 18px;
                                text-align: left;
                                line-height: 26px;
                                text-transform: none;
                                -webkit-text-size-adjust: none;
                                font-weight: 400;
                                font-family: Barlow Condensed, sans-serif;
                              "
                              class="center bp_20"
                            >
                              <a
                                href="https://dev--spacex-travel.netlify.app/destination"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                                >Moon</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 183px"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="
                                padding: 20px 20px;
                                font-size: 17px;
                                text-align: left;
                                line-height: 26px;
                                text-transform: none;
                                -webkit-text-size-adjust: none;
                                font-weight: 400;
                                font-family: Barlow Condensed, sans-serif;
                              "
                              class="center bp_20"
                            >
                              <a
                                href="https://dev--spacex-travel.netlify.app/destination"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                                >Mars</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 183px"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="
                                padding: 20px 20px;
                                font-size: 17px;
                                text-align: left;
                                line-height: 26px;
                                text-transform: none;
                                -webkit-text-size-adjust: none;
                                font-weight: 400;
                                font-family: Barlow Condensed, sans-serif;
                              "
                              class="center bp_20"
                            >
                              <a
                                href="https://dev--spacex-travel.netlify.app/destination"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                                >Europa</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
  
                  <tr></tr>
                </tbody>
              </table>
            </td>
            <td style="font-size: 0" class="hide">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <!-- AFTER MORE TO LOVE  -->
      <!-- Start Hr Line -->
      <table
        align="center"
        cellpadding="0"
        cellspacing="0"
        border="0"
        role="presentation"
        style="width: 640px; margin: 0 auto; border-bottom: 1px solid #d9d9d9"
        class="full"
      ></table>
      <!-- End Hr Line -->
      <table
        align="center"
        cellpadding="0"
        cellspacing="0"
        border="0"
        role="presentation"
        style="width: 100%; margin: 0 auto; background-color: #ffffff"
      >
        <tbody>
          <tr>
            <td style="font-size: 0">&nbsp;</td>
            <td align="center" style="width: 640px" class="full">
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                bgcolor="#282b30"
                style="width: 640px; margin: 0 auto"
                id="Category"
                class="full"
              >
                <tbody>
                  <tr>
                    <td align="center" style="padding: 0" class="noPad">
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%; margin: 0 auto"
                      >
                        <tbody>
                          <tr>
                            <td align="center">
                              <!--[if !mso]-->
                              <a
                                href="https://dev--spacex-travel.netlify.app/destination"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                              >
                                <div>
                                  <!--[endif]-->
                                  <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    role="presentation"
                                    style="width: 90%; margin: 0 auto"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            padding: 25px 0;
                                            font-size: 19px;
                                            font-weight: 500;
                                            text-align: left;
                                            line-height: 30px;
                                            text-transform: none;
                                            -webkit-text-size-adjust: none;
                                            font-weight: 500;
                                            font-family: Barlow Condensed,
                                              sans-serif;
                                          "
                                          class="center"
                                        >
                                          <a
                                            href="https://dev--spacex-travel.netlify.app/destination"
                                            style="
                                              text-decoration: none;
                                              color: #d2d8f9;
                                            "
                                            target="_blank"
                                            >Destinations&nbsp;&nbsp;</a
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if !mso]-->
                                </div>
                              </a>
                              <!--[endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding: 0">
                              <table
                                align="center"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                role="presentation"
                                style="width: 100%; margin: 0 auto"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        font-size: 0;
                                        padding: 0;
                                        border-top: 1px solid #fff;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <!--[if !mso]-->
                              <a
                                href="https://dev--spacex-travel.netlify.app/crew"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                              >
                                <div>
                                  <!--[endif]-->
                                  <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    role="presentation"
                                    style="width: 90%; margin: 0 auto"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            padding: 25px 0;
                                            font-size: 19px;
                                            text-align: left;
                                            line-height: 30px;
                                            text-transform: none;
                                            -webkit-text-size-adjust: none;
                                            font-weight: 500;
                                            font-family: Barlow Condensed,
                                              sans-serif;
                                          "
                                          class="center"
                                        >
                                          <a
                                            href="https://dev--spacex-travel.netlify.app/crew"
                                            style="
                                              text-decoration: none;
                                              color: #d2d8f9;
                                            "
                                            target="_blank"
                                            >Crew &nbsp;&nbsp;</a
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if !mso]-->
                                </div>
                              </a>
                              <!--[endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding: 0">
                              <table
                                align="center"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                role="presentation"
                                style="width: 100%; margin: 0 auto"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        font-size: 0;
                                        padding: 0;
                                        border-top: 1px solid #fff;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <!--[if !mso]-->
                              <a
                                href="https://dev--spacex-travel.netlify.app/technology"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                              >
                                <div>
                                  <!--[endif]-->
                                  <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    role="presentation"
                                    style="width: 90%; margin: 0 auto"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            padding: 25px 0;
                                            font-size: 19px;
                                            text-align: left;
                                            line-height: 30px;
                                            text-transform: none;
                                            -webkit-text-size-adjust: none;
                                            font-weight: 500;
                                            font-family: Barlow Condensed,
                                              sans-serif;
                                          "
                                          class="center"
                                        >
                                          <a
                                            href="https://dev--spacex-travel.netlify.app/technology"
                                            style="
                                              text-decoration: none;
                                              color: #d2d8f9;
                                            "
                                            target="_blank"
                                            >Technology&nbsp;&nbsp;</a
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if !mso]-->
                                </div>
                              </a>
                              <!--[endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding: 0">
                              <table
                                align="center"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                role="presentation"
                                style="width: 100%; margin: 0 auto"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        font-size: 0;
                                        padding: 0;
                                        border-top: 1px solid #fff;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- FOOTER  -->
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                bgcolor="#282b30"
                style="width: 100%; margin: 0 auto"
              >
                <tbody>
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 60%; margin: 0 auto; padding-top: 50px"
                        class="box"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="
                                font-family: Barlow Condensed, sans-serif;
                                font-size: 12px;
                                line-height: 24px;
                                letter-spacing: 0.3px;
                                font-weight: 300;
                                color: #d2d8f9;
                                -webkit-font-smoothing: antialiased;
                                -webkit-text-size-adjust: none;
                                padding: 0;
                              "
                            >
                              This email was sent to:
                              <a
                                href="${mail}"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                                >${mail}</a
                              >
                              <br />Sent by: Space-Tourism, Inc.
                              <br />
                              1119 Colorado Ave BKC, IN, 400001
                              <br />
                              Need Help? Call us!
                              <a
                                href="tel:1-800-372-2201"
                                style="text-decoration: none; color: #d2d8f9"
                                target="_blank"
                                >(800) 372-2201</a
                              >
                              <br />&nbsp;
                              <span class="hide"><br /></span>
                              ©&nbsp;Space-Tourism , Inc.&nbsp;2024<br />
                              <span class="block"
                                ><a
                                  href="https://dev--spacex-travel.netlify.app/"
                                  style="
                                    text-decoration: underline;
                                    color: #d2d8f9;
                                  "
                                  target="_blank"
                                  >Unsubscribe</a
                                ></span
                              >
                              <span class="hide"> | </span>
                              <span class="block"
                                ><a
                                  href="https://dev--spacex-travel.netlify.app/"
                                  style="
                                    text-decoration: underline;
                                    color: #d2d8f9;
                                  "
                                  target="_blank"
                                  >View in Browser</a
                                ></span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
  
            <td style="font-size: 0" class="hide">&nbsp;</td>
          </tr>
        </tbody>
      </table>
  
      <table style="width: 100%; margin: 0 auto; background-color: #fffffe">
        <tbody>
          <tr>
            <td style="font-size: 0">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <section>
        <div
          id="font-fix"
          style="
            white-space: nowrap;
            font: 15px courier;
            line-height: 0;
            display: none;
          "
        >
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </section>
      <custom name="usermatch" type="tracking" />
      <custom name="opencounter" type="tracking" />
      <div id="wormhole-context-menu"></div>
    </body>
  </html>
  `;

  var mailOptions = {
    from: "spacetourism6969@gmail.com",
    to: mail,
    subject: "Congratulations!! Tickets Booked",
    html: emailTemplate,
    attachments: [
      {
        path: code,
        cid: "qrcode",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent" + info.response);
    }
  });
};
