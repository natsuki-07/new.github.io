# myportfolio
 <!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ポートフォリオです。">  
  <meta name="keywords" content="portfolio">
  <script src="https://kit.fontawesome.com/b73f4d72af.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/themes/black/pace-theme-center-atom.min.css" />
  <title>Natsuki's Portfolio</title>
  <script src="jquery-3.5.1.min.js"></script>
  <link rel="stylesheet" href="./css/normalize.css">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
 <header>
   <h1>Portfolio</h1>
   <nav class="nav nav_close">
     <ul>
       <li><a href="#about">ABOUT</a></li>
       <li><a href="#skill">SKILL</a></li>
       <li><a href="#works">WORKS</a></li>
       <li><a href="#contact">CONTACT</a></li>
     </ul>
   </nav>
    <div class="stick">
     <div class="humberger">
       <span class="top"></span>
       <span class="middle"></span>
       <span class="bottom"></span>
     </div>
   </div>
  </header>
  
  <!--スライドショー-->
  <div id="slideshow">
    <div class="slides">
     <img src="./img/np1.png" alt="スライド画像">
     <img src="./img/np2.png" alt="スライド画像">
     <img src="./img/np3.png" alt="スライド画像">
     <img src="./img/np4.png" alt="スライド画像">
     <img src="./img/np5.png" alt="スライド画像">
     <img src="./img/np6.png" alt="スライド画像">
     <img src="./img/np7.png" alt="スライド画像">
     <img src="./img/np8.png" alt="スライド画像"> 
     <img src="./img/np9.png" alt="スライド画像">
    </div>
  </div>
  <div id="about">
   <h2  class="effect_fade">ABOUT</h2>
    <p class="myimg"><img src="./img/S__260087811.png" alt="me" class="effect_fade"></p>
    <p class="name effect_fade">杉山 夏輝</p>
    <div class="intro">

      <p>初めまして。<br>LP制作などWebページの制作を勉強しています。フロントの言語を学習していますが、PHPも学習する予定です。<br>カナダ・トロントにワーキングホリデービザで留学。日常英会話ができます。TOEIC835点</p>
      <p>趣味：海外旅行,スキューバダイビング,音楽(邦ロック),マンガ</p>
    </div>
  </div>
<div id="skill">
  <h2  class="effect_fade">SKILL</h2>
  <div class="skillboxes">
    <div class="skillbox">
      <p>
        <i class="fas fa-code fa-5x effect_fade"></i>
      </p>
      <h3 class="effect_fade">HTML&CSS</h3>
      <p>HTMLでページを構成し、CSSでデザインを整えます。</p>
    </div>
    <div class="skillbox">
      <p>
        <i class="fab fa-js-square fa-5x effect_fade"></i>
      </p>
      <h3 class="effect_fade">JavaScript</h3>
      <p>ページに動きや機能を加えます。</p>
    </div>
    <div class="skillbox">
      <p>
        <i class="fab fa-php fa-5x effect_fade"></i>
      </p>
      <h3 class="effect_fade">PHP</h3>
      <p>PHPにより動的なページの制作をします。<br>特にWordPressに機能を加えられます</p>
    </div>
    <div class="skillbox">
      <p>
        <i class="fab fa-wordpress fa-5x effect_fade"></i>
      </p>
      <h3 class="effect_fade">WordPress</h3>
      <p>世界で圧倒的なシェアを誇るブログソフトです。<br>ホームページ作成などができます。</p>
    </div>
  </div>
</div>

<div id="works">
  <h2 class="effect_fade">WORKS</h2>
  <div class="workboxes">
   <div class="workbox effect_fade">
    <div class="work">
      <img src="cropped-nicole-honeywill-730102-unsplash.png" alt="work画像">
    </div>
    <div class="work_explain">
      <p>WordPressテーマ Write模写</p>
      <p>スマホファーストで作成</p>
    </div>
  </div>
   <div class="workbox effect_fade">
    <div class="work">
      <img src="photo-1533094692971-5f4c56ec1339.png" alt="work画像">
    </div>
    <div class="work_explain">
      <p>(未)制作した作品が入る予定です。</p>
    </div>
  </div>
   <div class="workbox effect_fade">
    <div class="work">
      <img src="photo-1533094692971-5f4c56ec1339.png" alt="work画像">
    </div>
    <div class="work_explain">
      <p>(未)制作した作品が入る予定です。</p>
    </div>
  </div>
   <div class="workbox effect_fade">
    <div class="work">
      <img src="photo-1533094692971-5f4c56ec1339.png" alt="work画像">
    </div>
    <div class="work_explain">
      <p>(未)制作した作品が入る予定です。</p>
    </div>
  </div>
 </div>
   <button type="button" class="more">More ></button> 
</div>

<div id="contact">
  <h2>Contact</h2>
  <form action="" method="post">
    <div class="contact_parts">
      <label for="name">Name</label>     <input type="text" name="NAME">
    </div>
    <div class="contact_parts">
      <label for="email">Email</label> 
      <input type="mail" name="email" id="email">
    </div>

    <div class="contact_parts contentbox">
      <label for="message" class="content">Content</label>
      <textarea name="message" id="message" rows="7" cols="40"></textarea>
      <div class="button"> 
  
        <input class="submit_button" type="submit" value="送信">
      </div>
    </div>

  </form>
</div>
  <footer>
    <div class="sns_icon">
      
        <i class="fab fa-twitter fa-2x twitter"></i>
      </span>
      
        <i class="fab fa-instagram fa-2x insta"></i>
      
    </div>
    <div class="text">
     <p class="copyright">2020@copyright Natsuki</p>
    </div>
    <div class="pagetop">
      <a href="#">
      <i class="fas fa-chevron-up fa-1x"></i>
    </a>  
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html> 
