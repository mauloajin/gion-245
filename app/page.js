const siteUrl = "https://gion-245.vercel.app";
const storeName = "祗園245";
const address = "京都府京都市東山区智恩院新門前大和大路東入二丁目中之町245-1";
const phone = "075-533-8245";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=%E7%A5%97%E5%9C%92245%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E6%9D%B1%E5%B1%B1%E5%8C%BA%E4%B8%AD%E4%B9%8B%E7%94%BA245-1";
const reservationUrl = "https://paypaygourmet.yahoo.co.jp/145380";

const facts = [
  ["店名", storeName],
  ["英語表記", "Gion 245"],
  ["料理", "ジャパニーズイタリアン／イタリア料理"],
  ["住所", address],
  ["電話", phone],
  ["営業時間", "17:00–23:00"],
  ["定休日", "不定休"],
  ["予約", "完全予約制"],
  ["席", "14席（カウンター8席・テーブル6席）"],
  ["個室", "2〜6名で利用可能"],
  ["喫煙", "全席禁煙"],
  ["服装", "スマートカジュアル"],
  ["サービス料", "10%"],
  ["駐車場", "専用駐車場なし（近隣にコインパーキングあり）"],
];

const faqs = [
  {
    q: "祗園245はどこにありますか？",
    a: `${address}です。新門前通の北側、花見小路通から東へ進んだ場所にあります。`,
  },
  {
    q: "最寄り駅から何分ですか？",
    a: "京都市営地下鉄東西線の三条京阪駅から徒歩約5分、京阪本線の祇園四条駅から徒歩約7分です。",
  },
  {
    q: "営業時間と定休日は？",
    a: "営業時間は17:00から23:00まで、定休日は不定休です。営業状況は予約時にご確認ください。",
  },
  {
    q: "予約は必要ですか？",
    a: "完全予約制です。オンライン予約ページ、または電話075-533-8245からお問い合わせください。",
  },
  {
    q: "どのような料理を楽しめますか？",
    a: "季節の食材や京野菜を取り入れ、和の繊細さとイタリア料理を組み合わせたおまかせコースを提供しています。",
  },
  {
    q: "コースの内容と料金は？",
    a: "ディナーは黒毛和牛フィレをメインに、旬の魚料理を含む8皿前後のおまかせコース15,000円（税込・サービス料別）が案内されています。仕入れにより内容は変わります。",
  },
  {
    q: "個室はありますか？",
    a: "2名から6名で利用できる個室があります。空き状況は予約時にご確認ください。",
  },
  {
    q: "子どもと利用できますか？",
    a: "小学生以上のお子さまが利用できます。子ども用メニューと子ども椅子はありません。",
  },
  {
    q: "英語で予約や利用ができますか？",
    a: "英語メニューがあり、英語対応スタッフも案内されています。オンライン予約ページには英語表示があります。",
  },
  {
    q: "支払い方法は？",
    a: "主要クレジットカード、電子マネー、PayPay、楽天ペイが利用できます。",
  },
];

const jpAreas = [
  "祗園245", "祇園245", "Gion 245", "京都祇園", "祇園白川", "新門前通",
  "花見小路", "中之町", "東山区", "三条京阪駅", "三条駅", "祇園四条駅",
  "京都市", "京都府", "巽橋", "白川", "知恩院", "大和大路",
];
const jpIntents = [
  "ジャパニーズイタリアン", "イタリア料理", "レストラン", "ディナー", "完全予約制",
  "予約", "オンライン予約", "電話予約", "おまかせコース", "ディナーコース",
  "黒毛和牛フィレ", "シャトーブリアン", "旬の魚料理", "京野菜", "季節の食材",
  "ワイン", "日本酒", "町家レストラン", "カウンター席", "個室",
  "営業時間", "定休日", "住所", "電話番号", "アクセス", "徒歩", "地図",
  "全席禁煙", "スマートカジュアル", "英語メニュー",
];
const enAreas = [
  "Gion 245", "Gion Kyoto", "Gion Shirakawa", "Shinmonzen Street", "Hanamikoji Street",
  "Nakanocho", "Higashiyama Ward", "Sanjo Keihan Station", "Sanjo Station",
  "Gion-Shijo Station", "Kyoto City", "Kyoto Prefecture", "Shirakawa canal",
  "Tatsumi Bridge", "Chion-in area", "Yamato-oji Street",
];
const enIntents = [
  "Japanese Italian restaurant", "Italian restaurant", "dinner restaurant", "reservation-only restaurant",
  "restaurant reservation", "online booking", "phone reservation", "omakase dinner", "dinner course",
  "Wagyu beef fillet", "Chateaubriand", "seasonal fish", "Kyoto vegetables", "seasonal ingredients",
  "wine and sake", "Kyoto townhouse restaurant", "counter seating", "private room", "opening hours",
  "closing days", "address", "phone number", "directions", "Google Maps", "walking access",
  "non-smoking restaurant", "smart casual", "English menu", "English-speaking staff",
];
const jpKeywords = jpAreas.flatMap((area) => jpIntents.map((intent) => `${area} ${intent}`));
const enKeywords = enAreas.flatMap((area) => enIntents.map((intent) => `${intent} near ${area}`));

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: storeName,
  alternateName: "Gion 245",
  description:
    "京都・祇園の町家で、季節の食材と京野菜を生かしたジャパニーズイタリアンのおまかせコースを提供する完全予約制レストラン。",
  url: siteUrl,
  telephone: "+81-75-533-8245",
  address: {
    "@type": "PostalAddress",
    streetAddress: "智恩院新門前大和大路東入二丁目中之町245-1",
    addressLocality: "京都市東山区",
    addressRegion: "京都府",
    postalCode: "605-0082",
    addressCountry: "JP",
  },
  servesCuisine: ["Japanese Italian", "Italian"],
  priceRange: "¥¥¥¥",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  acceptsReservations: true,
  hasMenu: "https://www.gion-245.com/original.html",
  sameAs: [
    "https://www.gion-245.com/",
    "https://www.instagram.com/gion245245/",
    "https://www.facebook.com/profile.php?id=61566321377340&locale=ja_JP",
    "https://tabelog.com/kyoto/A2601/A260301/26018705/",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: reservationUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="祗園245 トップへ">祗園<span>245</span></a>
        <nav aria-label="メインナビゲーション">
          <a href="#concept">特徴</a>
          <a href="#course">料理</a>
          <a href="#information">店舗情報</a>
          <a className="nav-cta" href={reservationUrl} target="_blank" rel="noreferrer">予約 <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-rule hero-rule-one" aria-hidden="true" />
        <div className="hero-rule hero-rule-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow light">Japanese Italian · Kyoto Gion</p>
          <h1><span>祗園</span><strong>245</strong></h1>
          <p className="roman">GION TWO FOUR FIVE</p>
          <div className="hero-copy">
            <p>季節と京都を、一皿の余韻へ。</p>
            <span>和の繊細さとイタリア料理の感性を重ねる、祇園の完全予約制レストラン。</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={reservationUrl} target="_blank" rel="noreferrer">オンライン予約 <Arrow /></a>
            <a className="button ghost" href={`tel:${phone.replaceAll("-", "")}`}>電話 {phone}</a>
          </div>
        </div>
        <div className="hero-facts" aria-label="基本案内">
          <div><span>Hours</span><strong>17:00 — 23:00</strong></div>
          <div><span>Access</span><strong>三条京阪駅 徒歩5分</strong></div>
          <div><span>Style</span><strong>完全予約制</strong></div>
        </div>
        <a className="scroll" href="#concept"><span>Scroll</span><i aria-hidden="true" /></a>
      </section>

      <section className="section intro" id="concept">
        <div className="section-number">01</div>
        <div className="section-heading">
          <p className="eyebrow">Philosophy</p>
          <h2>京の季節を映す、<br />和とイタリアン。</h2>
        </div>
        <div className="intro-copy prose">
          <p className="lead">新門前通の町家で向き合うのは、季節ごとに表情を変える食材です。</p>
          <p>祗園245では、京野菜や旬の魚、黒毛和牛などを取り入れ、和食の繊細な感覚とイタリア料理の技法を重ねたおまかせコースを用意しています。器の彩り、香り、温度まで一皿ごとに組み立てられたジャパニーズイタリアンです。</p>
          <p>カウンター越しに厨房を望む席と、2名から6名で利用できる個室があります。食事の時間を落ち着いて楽しめるよう、来店は完全予約制です。</p>
          <div className="seal" aria-label="Gion Kyoto 245"><span>GION</span><strong>245</strong><small>KYOTO</small></div>
        </div>
      </section>

      <section className="section course" id="course">
        <div className="section-number pale">02</div>
        <div className="section-heading light-heading">
          <p className="eyebrow light">Omakase Course</p>
          <h2>旬をたどる、<br />八皿前後のコース。</h2>
        </div>
        <div className="course-card">
          <p className="course-label">Dinner</p>
          <h3>シェフのおまかせコース</h3>
          <p className="price"><span>¥</span>15,000<small>税込・サービス料別</small></p>
          <p>黒毛和牛フィレをメインに、旬の魚料理を含む8皿前後。季節と仕入れにより、その日の内容が組み立てられます。</p>
          <dl>
            <div><dt>構成</dt><dd>8皿前後</dd></div>
            <div><dt>メイン</dt><dd>黒毛和牛フィレ</dd></div>
            <div><dt>サービス料</dt><dd>10%</dd></div>
          </dl>
          <p className="note">食材・皿数は仕入れ状況により変わります。最新内容は予約時にご確認ください。</p>
        </div>
        <div className="ingredients" aria-label="料理の特徴">
          <article><span>01</span><h3>Season</h3><p>旬の食材と京野菜を取り入れた、その時季ならではの構成。</p></article>
          <article><span>02</span><h3>Wagyu</h3><p>メインには、肉質を生かして仕立てる黒毛和牛フィレ。</p></article>
          <article><span>03</span><h3>Pairing</h3><p>シャンパン、白・赤ワイン、日本酒まで料理に合わせた幅広い飲み物。</p></article>
        </div>
      </section>

      <section className="section room" id="room">
        <div className="section-number">03</div>
        <div className="room-grid">
          <div className="room-art" aria-hidden="true"><span>町</span><span>家</span><i /></div>
          <div className="room-copy prose">
            <p className="eyebrow">Space & Courtesy</p>
            <h2>町家の静けさと、<br />厨房の気配。</h2>
            <p>席はカウンター8席とテーブル6席の計14席。オープンキッチンを望むカウンターと、2〜6名で利用できる個室を備えています。</p>
            <ul>
              <li><span>席</span>14席</li>
              <li><span>個室</span>2〜6名</li>
              <li><span>喫煙</span>全席禁煙</li>
              <li><span>服装</span>スマートカジュアル</li>
              <li><span>お子さま</span>小学生以上</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="reservation-band" id="reservation">
        <p className="eyebrow light">Reservation</p>
        <h2>ご来店は、完全予約制です。</h2>
        <p>席数が限られているため、事前に日時と人数をご確認のうえご予約ください。</p>
        <div className="hero-actions centered">
          <a className="button primary" href={reservationUrl} target="_blank" rel="noreferrer">オンライン予約 <Arrow /></a>
          <a className="button ghost" href={`tel:${phone.replaceAll("-", "")}`}>電話で問い合わせ</a>
        </div>
      </section>

      <section className="section information" id="information">
        <div className="section-number">04</div>
        <div className="section-heading">
          <p className="eyebrow">Information</p>
          <h2>店舗情報</h2>
        </div>
        <div className="fact-list">
          {facts.map(([label, value]) => (
            <div className="fact-row" key={label}><dt>{label}</dt><dd>{value}{label === "電話" && <a className="inline-link" href={`tel:${phone.replaceAll("-", "")}`}>電話する</a>}</dd></div>
          ))}
        </div>
        <p className="update-note">営業時間・休業日は変更される場合があります。予約時に最新情報をご確認ください。</p>
      </section>

      <section className="access" id="access">
        <div className="access-visual" aria-hidden="true">
          <div className="street street-a" /><div className="street street-b" /><div className="street street-c" />
          <div className="river" /><div className="pin"><span>245</span></div>
          <span className="map-label label-one">新門前通</span><span className="map-label label-two">花見小路通</span><span className="map-label label-three">白川</span>
        </div>
        <div className="access-copy">
          <p className="eyebrow light">Access</p>
          <h2>新門前通、<br />花見小路の東へ。</h2>
          <address>{address}</address>
          <div className="route"><span>地下鉄東西線</span><strong>三条京阪駅</strong><em>徒歩 約5分</em></div>
          <div className="route"><span>京阪本線</span><strong>祇園四条駅</strong><em>徒歩 約7分</em></div>
          <p>新門前通を花見小路から東へ進み、5軒目の北側です。専用駐車場はありません。</p>
          <a className="text-link light-link" href={mapUrl} target="_blank" rel="noreferrer">Google Mapsで開く <Arrow /></a>
        </div>
      </section>

      <section className="section english" id="english">
        <div className="section-number">05</div>
        <div className="section-heading">
          <p className="eyebrow">English Guide</p>
          <h2>For guests<br />visiting Kyoto.</h2>
        </div>
        <div className="english-copy prose" lang="en">
          <p className="lead">Gion 245 is a reservation-only Japanese Italian restaurant in Kyoto’s Gion district.</p>
          <p>The restaurant serves an omakase dinner that combines the delicacy of Japanese cuisine with Italian techniques. The course uses seasonal ingredients and Kyoto vegetables, with Japanese Black Wagyu fillet as the main dish and a seasonal fish dish among approximately eight courses.</p>
          <div className="english-facts">
            <div><span>Hours</span><strong>5:00 PM–11:00 PM</strong></div>
            <div><span>Closed</span><strong>Irregular holidays</strong></div>
            <div><span>Address</span><strong>245-1 Nakanocho, Higashiyama-ku, Kyoto 605-0082, Japan</strong></div>
            <div><span>Access</span><strong>5 min from Sanjo Keihan / 7 min from Gion-Shijo</strong></div>
            <div><span>Reservation</span><strong>Advance reservation required</strong></div>
            <div><span>Language</span><strong>English menu and English-speaking staff available</strong></div>
          </div>
          <p>Use the online booking page or call <a href={`tel:${phone.replaceAll("-", "")}`}>+81 75 533 8245</a>. The dress code is smart casual. All seats are non-smoking, and children of elementary-school age or older may dine at the restaurant.</p>
          <a className="text-link" href={reservationUrl} target="_blank" rel="noreferrer">Book a table online <Arrow /></a>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-number">06</div>
        <div className="section-heading">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>よくあるご質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<i aria-hidden="true">＋</i></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="links-section">
        <p className="eyebrow">Official & Reservation Links</p>
        <h2>関連リンク</h2>
        <div className="link-grid">
          <a href="https://www.gion-245.com/" target="_blank" rel="noreferrer"><span>Official Website</span><strong>公式サイト</strong><Arrow /></a>
          <a href={reservationUrl} target="_blank" rel="noreferrer"><span>Reservation</span><strong>オンライン予約</strong><Arrow /></a>
          <a href="https://www.instagram.com/gion245245/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@gion245245</strong><Arrow /></a>
          <a href="https://tabelog.com/kyoto/A2601/A260301/26018705/" target="_blank" rel="noreferrer"><span>Restaurant Guide</span><strong>食べログ</strong><Arrow /></a>
        </div>
      </section>

      <section className="keywords-section">
        <details>
          <summary>祗園245に関する検索語・Related searches <span>開く</span></summary>
          <div className="keyword-columns">
            <div><h3>日本語</h3><p>{jpKeywords.join(" ／ ")}</p></div>
            <div lang="en"><h3>English</h3><p>{enKeywords.join(" / ")}</p></div>
          </div>
        </details>
      </section>

      <footer>
        <div className="footer-mark"><span>祗園</span><strong>245</strong></div>
        <div className="footer-info">
          <p>{address}</p><a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a><span>17:00–23:00 ／ 不定休</span>
        </div>
        <div className="footer-links"><a href={mapUrl} target="_blank" rel="noreferrer">Map</a><a href={reservationUrl} target="_blank" rel="noreferrer">Reservation</a><a href="#top">Page top ↑</a></div>
        <small>© Gion 245. Restaurant information guide.</small>
      </footer>
    </main>
  );
}
