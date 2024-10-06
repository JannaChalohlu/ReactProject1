import facebookImg from "../../images/other/socialMedia/facebook.jpg"
import instagramImg from "../../images/other/socialMedia/instagram.jpg";
import youtubeImg from "../../images/other/socialMedia/YouTube.png";
import giropay from "../../images/other/paymentMethods/giropay.png";
import mastercard from "../../images/other/paymentMethods/mastercard.png";
import paypal from "../../images/other/paymentMethods/payPal.jpg";
import visa from "../../images/other/paymentMethods/visa.png";
import dhl from "../../images/other/shippingMethods/dhl.png";
import dpd from "../../images/other/shippingMethods/dpd.png";
import packstation from "../../images/other/shippingMethods/packstation.png";
import "./footer.css"

function Footer() {
  return (
    <div className="footer-main">
    <div className="footer">
      <div className="social-media">
        <h3>Follow us on</h3>
        <ul>
          <li>
            <a href="http://facebook.com" target="_blank">
              <img src={facebookImg} alt="facebook" />
            </a>
            <p>Facebook</p>
          </li>
          <li>
            <a href="http://instagram.com" target="_blank">
              <img src={instagramImg} />
            </a>
            <p>Instagram</p>
          </li>
          <li>
            <a href="http://youtube.com" target="_blank">
              <img src={youtubeImg} />
            </a>
            <p>YouTube</p>
          </li>
        </ul>
      </div>
      <div className="payment-method">
        <h3>Payment Methods</h3>
        <ul>
          <li><img src={giropay} alt="giropay img" />
          <p>Giropay</p>
          </li>
          <li><img src={mastercard} alt="mastercard img" />
          <p>MasterCard</p>
          </li>
          <li><img src={paypal} alt="paypal img" />
          <p>PayPal</p>
          </li>
          <li><img src={visa} alt="visa img" />
          <p>VISA</p>
          </li>
        </ul>
      </div>
      <div className="shipping-method">
        <h3>Shipping Methods</h3>
        <ul>
          <li><img src={dhl} alt="dhl img" />
          <p>DHL</p>
          </li>
          <li><img src={dpd} alt="dpd img" />
          <p>DPD</p>
          </li>
          <li><img src={packstation} alt="packstation img" />
          <p>PackStation</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Footer;
