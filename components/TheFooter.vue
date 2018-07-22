<template>
  <footer id="site-footer">
      <div id="top-pad2"></div>
      <div class="container">
          <div class="row">
              <div class="span12">
                  <img class="logo" src="~/assets/img/logo-l.png" alt="Jointanet">
              </div>
              <div class="span6">
                  <address class="clearfix">
                      <h4>ジョインタネット</h4>
                      <p><small>Address:&nbsp;</small>3-7-2-216 Higashi Ooi, Shinagawa-ku, Tokyo, Japan 140-0011</p>
                      <p><small>Tel: &nbsp;</small>+81-908-382-5207</p>
                      <p><small>Business Details:&nbsp;</small>Internet / Web System Consulting, Design, Development, Management and Maintenance</p>
                  </address>
                  <address class="clearfix">
                      <p class="pull-left"><img class="face" src="~/assets/img/yanbe-c.png" alt="山辺&nbsp;登"></p>
                      <p><small>代表:&nbsp;</small><strong>Noboru&nbsp;Yamabe</strong></p>
                  </address>
              </div>
              <div id="myCarousel" class="carousel slide span6">
                  <form id="inquiry" action="/backend/inquiry" method="post" accept-charset="utf-8" class="carousel-inner">
                      <div id="inquiry-1" class="active item">
                          <h5>Please feel free to contact us with questions or inquiries by using the following form.</h5>
                          <p><small>We will get back to you within 48 hours.</small></p>
                          <textarea name="inquiry-msg" required="required" maxlength="20000" rows="7" placeholder="ご相談/ご質問内容: あなたが既にお持ちのウェブサイトについて、　新しく制作したいウェブサイトについて、等…"></textarea>
                          <div class="btns clearfix">
                              <a id="btn-inquiry-next" class="btn btn-large btn-danger pull-right" type="button">次へ&nbsp;<i class="icon-chevron-right icon-white"></i></a>
                          </div>
                      </div>
                      <div id="inquiry-2" class="item">
                          <h5>Please give us your name and contact info</h5>
                          <p><small>This information will not be shared with or supplied to any third party.</small></p>
                          <div>
                              <label for="name">お名前</label><input type="text" name="name" required="required" value="" placeholder="">
                          </div>
                          <div>
                              <label for="email">Eメールアドレス</label><input type="email" name="email" required="required" value="" placeholder="name@your-domain.com">
                          </div>
                          <div>
                              <label for="url">ウェブサイトアドレス(もし既にお持ちであれば)</label><input type="url" name="url" value="" placeholder="http://www.your-domain.com">
                          </div>
                          <div class="btns clearfix">
                              <a id="btn-inquiry-back" class="btn btn-inverse pull-left" type="button" data-slide="prev"><i class="icon-chevron-left icon-white"></i>&nbsp;戻る</a>
                              <button id="btn-inquiry-submit" class="btn btn-large btn-jointanet-1 pull-right" type="submit">送信&nbsp;<i class=" icon-ok icon-white"></i></button>
                              <img id="loading" class="pull-right" src="~/assets/img/waiting.gif" alt="sending...">
                          </div>
                      </div>
                      <div id="inquiry-3" class="item">
                          <h3>お問い合わせありがとうございました。</h3>
                          <p><small>48時間以内にこちらからご連絡させて頂きます。</small></p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </footer>
</template>
