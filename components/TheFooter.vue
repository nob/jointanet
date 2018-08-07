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
                      <p><small>{{ company.address_label}}:&nbsp;</small>{{ company.address }}</p>
                      <p><small>{{ company.tel_label }}: &nbsp;</small>{{ company.tel }}</p>
                      <p><small>{{ company.business_label }}:&nbsp;</small>{{ company.business }}</p>
                  </address>
                  <address class="clearfix">
                      <p class="pull-left"><img class="face" src="~/assets/img/yanbe-c.png" :alt="company.repname"></p>
                      <p><small>{{ company.repname_label }}:&nbsp;</small><strong>{{ company.repname }}</strong></p>
                  </address>
              </div>
              <div id="myCarousel" class="carousel slide span6">
                  <form id="inquiry" name="contact" action="/" method="post" accept-charset="utf-8" class="carousel-inner" netlify-honeypot="bot-field" netlify>
                      <input type="hidden" name="form-name" value="contact">
                      <p style="display:none;">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                      </p>
                      <div id="inquiry-1" class="active item">
                          <h5>{{ contact.step1_msg }}</h5>
                          <p><small>{{ contact.step1_sub_msg }}</small></p>
                          <textarea name="inquiry-msg" required="required" maxlength="20000" rows="7" :placeholder="contact.step1_txt_placeholder"></textarea>
                          <div class="btns clearfix">
                              <a id="btn-inquiry-next" class="btn btn-large btn-danger pull-right" type="button">{{ contact.step1_btn_label}}&nbsp;<i class="icon-chevron-right icon-white"></i></a>
                          </div>
                      </div>
                      <div id="inquiry-2" class="item">
                          <h5>{{ contact.step2_msg }}</h5>
                          <p><small>{{ contact.step2_sub_msg }}</small></p>
                          <div>
                              <label for="name">{{ contact.step2_name_label }}</label><input type="text" name="name" required="required" value="" placeholder="">
                          </div>
                          <div>
                              <label for="email">{{ contact.step2_email_label }}</label><input type="email" name="email" required="required" value="" placeholder="name@your-domain.com">
                          </div>
                          <div>
                              <label for="url">{{ contact.step2_url_label }}</label><input type="url" name="url" value="" placeholder="http://www.your-domain.com">
                          </div>
                          <div class="btns clearfix">
                              <a id="btn-inquiry-back" class="btn btn-inverse pull-left" type="button" data-slide="prev"><i class="icon-chevron-left icon-white"></i>&nbsp;{{ contact.step2_back_btn_label }}</a>
                              <button id="btn-inquiry-submit" class="btn btn-large btn-jointanet-1 pull-right" type="submit">{{ contact.step2_btn_label }}&nbsp;<i class=" icon-ok icon-white"></i></button>
                              <img id="loading" class="pull-right" src="~/assets/img/waiting.gif" :alt="contact.step2_loading_msg">
                          </div>
                      </div>
                      <div id="inquiry-3" class="item">
                          <h3>{{ contact.step3_msg }}</h3>
                          <p><small>{{ contact.step3_sub_msg }}</small></p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </footer>
</template>
<script>
export default {
  computed: {
		company () {
			return this.$store.state.company
		},
    contact () {
      return this.$store.state.contact
    }
	},
}
</script>
