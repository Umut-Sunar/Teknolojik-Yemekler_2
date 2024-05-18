
import './Footer.css'

export default function Footer(props) {
              const {productSelection} =props
  function navigateToProduct(event) {
    const linkName = event.target.textContent
    productSelection(linkName)
  }

  return (
    <>
      <footer className="Footer">
              <div className="Footer-container">
        <div className="Footer-Left-Items">
          <div className="Footer-Communication-Channels">
            <p className="Brand-Name-Footer">Teknolojik Yemekler</p>
            <p>
              <a style={{display:'flex',justifyContent:'center',alignItems:'center' ,gap:'5px'}} href="mailto:aciktim@teknolojikyemekler.com"><img src="../../../Assets/mile2-aseets/footer/icons/icon-2.png" alt="" />aciktim@teknolojikyemekler.com</a>
            </p>
            <address style={{display:'flex',justifyContent:'center',alignItems:'center' ,gap:'5px'}}> <img src="../../../Assets/mile2-aseets/footer/icons/icon-1.png" alt="" /> <a href="https://www.google.com.tr/maps/place/Ye%C5%9Fil+Dardanos+Tatil+Sitesi/@40.0767564,26.3636376,17z/data=!3m1!4b1!4m6!3m5!1s0x14b1ab2e2404ce39:0xbe3cbbf1150f0ca6!8m2!3d40.0767523!4d26.3662125!16s%2Fg%2F11h1knns_7?hl=tr&entry=ttu" target="_blank">
            Yeşil Dardanos Sitesi, Çanakkale
        </a></address>
            <p style={{display:'flex',justifyContent:'start',alignItems:'center' ,gap:'5px'}} ><img  src="../../../Assets/mile2-aseets/footer/icons/icon-3.png" alt="" />+905322107712 </p>
          </div>

          <div className="Footer-Menu">
            <h2>Sıcacık Menüler</h2>
            <ul className='Footer-Menu-List'>
              <li>
                <a  href={navigateToProduct}>Position Absolute Acı Pizza</a>
              </li>
              <li>
                <a onClick={navigateToProduct}>Terminal Pizza</a>
              </li>
              <li>
                <a onClick={navigateToProduct}>Ucuz Yollu Ögrenci Pizzası</a>
              </li>
              <li>
                <a onClick={navigateToProduct}>UseEffect Tavuklı Burger</a>
              </li>
              <li>
                <a onClick={navigateToProduct}>Buffalo Acılı Tavuk Burger</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Footer-Instagram">
          <h2>Instagram</h2>
          <div className="Footer-Instagram-Images">
            <ul className="Instagram-Image-List">
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-0.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-1.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-2.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-3.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-4.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../../../Assets/mile2-aseets/footer/insta/li-5.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
