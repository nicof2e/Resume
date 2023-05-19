const app = Vue.createApp({
  data() {
      return {
        taiwanCountry: [],
        CountryName: '',
        options5:'',
        OptionsSoftware:'',
        OptionsHardware:'',
        OptionsServe:'',
        OptionsCircle:'',
        OptionsLine:'',
        OptionsProgress1:'',
        OptionsProgress2:'',
        OptionsProgress3:'',
        OptionsColumn:'',
        OptionsArea:'',
        seriesData:[],
        iteration:11, //設定迭代次數
        CarCountiteration:120, //設定迭代次數
        trigoStrength:3,  //三角函數強度
        
      }
  },
  methods: {

  },
  watch: {

  },
  mounted: function () {
      var _this = this;
      $(window).scroll(function(evt){
        if ($(window).scrollTop()>0) {
            $(".navbar").removeClass("bg-white0");
            $(".navbar").addClass("bg-black");
        }
        else {
                $(".navbar").addClass("bg-white0");
                $(".navbar").removeClass("bg-black");
        }
    });

    $(document).on('click', 'a', function(evt){
      var target = $(this).attr("href");
      console.log(target);
      $('html, body').animate({
          scrollTop: $(target).offset().top // 向上捲動(scrollTop): 距離
      });  // 執行時間500ms
      
      if($(window).width() <= 768){
          $('.navbar-toggler').trigger('click');
          console.log('click')
      };
      });
      
      var s = skrollr.init();//skrollr初始化


  },
});
