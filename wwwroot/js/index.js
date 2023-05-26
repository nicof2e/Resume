const app = Vue.createApp({
  data() {
      return {
        OptionsHTML:'',
        OptionsCSS:'',
        OptionsJS:'',
        OptionsVUE:'',
        OptionsC:'',
        OptionsSQL:'',
      }
  },
  methods: {

    Chart_HTML:function(){
      var _this = this;
      _this.OptionsHTML = {
        series: [90],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['HTML',],
      }
    },

    Chart_CSS:function(){
      var _this = this;
      _this.OptionsCSS = {
        series: [80],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['CSS',],
      }
    },

    Chart_JS:function(){
      var _this = this;
      _this.OptionsJS = {
        series: [90],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['JavaScript',],
      }
    },

    Chart_VUE:function(){
      var _this = this;
      _this.OptionsVUE = {
        series: [80],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Vue',],
      }
    },

    Chart_C:function(){
      var _this = this;
      _this.OptionsC = {
        series: [75],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['C#',],
      }
    },

    Chart_SQL:function(){
      var _this = this;
      _this.OptionsSQL = {
        series: [80],
        chart: {
          type: 'radialBar',
          height:300,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '60%',
              background: '#121212', //圓心背景色
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '25%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#A33580'], //漸變結束顏色
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['SQL',],
      }
    },

    CreateChart:function(){
      var _this = this;
      _this.Chart_HTML();
      _this.Chart_CSS();
      _this.Chart_JS();
      _this.Chart_VUE();
      _this.Chart_C();
      _this.Chart_SQL();

      var Chart_HTML = new ApexCharts(document.querySelector("#Chart_HTML"), _this.OptionsHTML);
      Chart_HTML.render();
      var Chart_CSS = new ApexCharts(document.querySelector("#Chart_CSS"), _this.OptionsCSS);
      Chart_CSS.render();
      var Chart_JS = new ApexCharts(document.querySelector("#Chart_JS"), _this.OptionsJS);
      Chart_JS.render();
      var Chart_VUE = new ApexCharts(document.querySelector("#Chart_VUE"), _this.OptionsVUE);
      Chart_VUE.render();
      var Chart_C = new ApexCharts(document.querySelector("#Chart_C"), _this.OptionsC);
      Chart_C.render();
      var Chart_SQL = new ApexCharts(document.querySelector("#Chart_SQL"), _this.OptionsSQL);
      Chart_SQL.render();
    },

    CreateSwiper:function(){
    // 初始化Swiper實例
      var swiper = new Swiper('.swiper', {
          slidesPerView: 1,   // 每頁顯示3張圖片
          spaceBetween: 10,   // 圖片之間的間距
          loop: true,         // 循環播放
          autoplay: {
              delay: 3000,    // 自動播放間隔時間
          },
          pagination: {
              el: '.swiper-pagination',  // 分頁器容器
              clickable: true,           // 分頁器是否可點擊
          },
          navigation: {
              nextEl: '.swiper-button-next',  // 下一頁按鈕容器
              prevEl: '.swiper-button-prev',  // 上一頁按鈕容器
          },
          breakpoints: {  //從上到下依序判斷
          // 當窗口寬度>=1024px
          1024:{
            slidesPerView: 3,   // 每頁顯示3張圖片
              spaceBetween: 30,   // 圖片之間的間距
          },
          768:{
            slidesPerView: 2,   // 每頁顯示2張圖片
            spaceBetween: 20,   // 圖片之間的間距
          }
        }
      });
    },


  },
  watch: {

  },
  mounted: function () {
      var _this = this;
      window.onload = function () {
        _this.CreateChart();
        _this.CreateSwiper();
      }

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
      
      
  },
});
