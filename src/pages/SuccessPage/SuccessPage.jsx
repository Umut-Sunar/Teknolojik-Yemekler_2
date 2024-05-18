
import './SuccessPage.css'

export default function SuccessPage(props) {
const {finalOrderData}=props

return( <>
<main className="SuccessMainWrapper">

<header className="SuccessHeader"><p  style={{fontFamily:' Satisfy, cursive',fontSize:'18px',color:'var(--Sarı)'}}>lezzetin yolda</p>Teknolojik Yemekler</header>
<section className="SuccessTitleWrapper">
<h1 className="SuccessTitle">TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!</h1>
<hr/>
<p>Boyut:{finalOrderData.Boyut}<br/>Hamur: {finalOrderData.Hamur}<br/>Ek Malzemeler: {finalOrderData.additionals}</p>
<p>Sipariş Toplamı <br/>Seçimler: {finalOrderData.secimlerTutar}<br/>Toplam Tutar: {finalOrderData.toplamTutar}</p>
</section>
</main>
</>)

}