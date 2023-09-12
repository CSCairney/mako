import "./styles.css";

const Contact = () => {
    return (
        <div className='contact'>
            <h1 id='contact' className='section-title'>
              Charles Cairney
            </h1>
            <p className='contact-information'>
              93年東京都生まれ。高校卒業後、南米の映像技術や広告デザイン、音楽に興味を持ち、約2年半ブラジルへ移住。その後帰国しイラストレーターとして活動を開始。キャラクターデザイン、イラストレーションに加え、
              2022年よりアニメーション制作を始める。2019年に初の商業画集・展示会『MikaPikaZo』を開催。 任天堂『ファイアーエムブレム エンゲージ』キャラクターデザイン、VTuber『Hakos
              Baelz』や『輝夜 月』のキャラクターデザインや、Ado 1stアルバム『狂言』野外広告ビジュアル、pixiv監修アートブック『VISIONS
              2023』表紙イラスト、東京国立博物館創立150年記念『国宝 東京国立博物館のすべて』コラボイラスト、『初音ミク マジカルミライ 2018』『電音部』『Fate/Grand Order
              清少納言』など。
            </p>
            <div className='contact-icon' />
            <a className='link' href='https://twitter.com/MikaPikaZo' rel='noopener'>
              <div className='twitterLink_logo'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                </svg>
              </div>
              <div className='twitterLink_text'>@MikaPikazo</div>
            </a>
          </div>
    )
}

export default Contact;