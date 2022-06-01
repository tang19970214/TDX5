export default {
  server: {
    port: 8000,
  },
  head: {
    title: '台灣產業數位轉型量表TDX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: "https://dtrl.tw/" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "台灣產業數位轉型量表TDX" },
      { property: "og:site_name", content: "台灣產業數位轉型量表TDX" },
      { property: 'og:image', content: "https://dtrl.tw/img/home-icon.002989f.svg" },
      { name: 'keywords', content: '台灣產業數位轉型量表, TDX, 台灣產業, 數位量表, 數位轉型量表, Taiwan Digtal Transformation Index'},
      { hid: 'description', name: 'description', content: '經濟部工業局委託數位經濟暨產業發展協會、台灣經濟研究院、資策會執行「數位轉型基盤建構先期推動計畫」，其中重要的工作為發展與推動企業的數位轉型量表- 台灣產業數位轉型量表- TDX，現階段已針對製造業(扣件、紡織)、服務業(餐飲)、資訊服務業進行量表設計。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/index.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '~/plugins/axios.js',
    '~/plugins/api.js',

    { src: '~/plugins/element-ui.js', ssr: false },
    { src: '~/plugins/sweet-alert.js', ssr: false },
    { src: '~/plugins/apexchart.js', ssr: false },
  ],

  components: true,

  buildModules: [
    ["@nuxtjs/dotenv", { filename: ".env." + process.env.NODE_ENV }]
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
    vendor: ['element-ui'],
    // publicPath: "https://dtrl.tw/"
  }
}
