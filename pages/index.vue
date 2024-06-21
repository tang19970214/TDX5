<template>
  <div>
    <div class="indexPage">
      <div class="indexPage__title">
        <div class="indexPage__title--imgAndTxt">
          <!-- image -->
          <img class="img" src="@/assets/images/home-icon.svg" alt="台灣產業數位轉型量表" width="340px" />
          <!-- title -->
          <div class="title">
            <p class="title__text">台灣產業</p>
            <div class="title__supText">
              <strong class="title__supText--cn">數位轉型量表<strong class="title__supText--en">TDX</strong></strong>
            </div>
            <svg height="10" width="30">
              <line x1="4" y1="5" x2="30" y2="5" style="stroke: rgb(14, 92, 148); stroke-width: 2"></line>
            </svg>
            <p class="title__subject">Taiwan Digtal Transformation Index</p>
          </div>
        </div>
      </div>

      <div class="indexPage__introduce">
        <!-- 介紹 -->
        <div class="indexPage__introduce--card" v-if="introduction.length > 0">
          <div class="introduce" v-for="item in introduction" :key="item.id">
            <!-- 介紹-標題 -->
            <div class="introduce__block">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13.5C14.3137 13.5 17 10.8137 17 7.5C17 4.18629 14.3137 1.5 11 1.5C7.68629 1.5 5 4.18629 5 7.5C5 10.8137 7.68629 13.5 11 13.5Z" stroke="#5C88C9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.49951 14L6.41602 20.48L10.9993 17.5507L15.5827 20.48L14.4995 14" stroke="#5C88C9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <strong class="introduce__block--title">{{ item.title }}</strong>
            </div>
            <!-- 介紹-內文 -->
            <!-- <p class="introduce__content" v-if="item.title !== '聯絡'">{{ item.text }}</p>
            <div style="margin-top: 12px" v-else> -->
            <p class="introduce__content" v-for="(items, idx) in item.text.split('<br/>')" :key="idx">{{ items }}</p>
            <!-- </div> -->
          </div>
        </div>

        <!-- 開始填寫btn -->
        <div class="indexPage__introduce--btn">
          <el-select v-model="industry" placeholder="請選擇產業">
            <el-option :label="item.label" :value="item.label" v-for="item in industryList" :key="item.id"></el-option>
          </el-select>
          <button :class="{ active: !industry }" class="goNext" @click="goBasicInfo()" :disabled="!industry">開始填寫</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      industry: "",
      industryList: [
        // { id: 1, label: "工業區" },
        { id: 2, label: "食品及飼品製造業" },
        { id: 3, label: "飲料製造業" },
        { id: 4, label: "紡織業" },
        { id: 5, label: "化學材料及肥料製造業" },
        { id: 6, label: "塑膠製品製造業" },
        { id: 7, label: "橡膠製品製造業" },
        { id: 8, label: "基本金屬製造業" },
        { id: 9, label: "螺絲、螺帽及鉚釘製造業" },
        { id: 10, label: "電子零組件製造業" },
        { id: 11, label: "電腦、電子產品及光學製品製造業" },
        { id: 12, label: "電力設備及配備製造業" },
        { id: 13, label: "機械設備製造業" },
        { id: 14, label: "化妝品製造業" },
        { id: 15, label: "金屬製品製造業" },
        { id: 16, label: "汽車及其零件製造業" },
        { id: 17, label: "其他製造業" },
      ],
      introduction: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      try {
        const {
          data: { code, result },
        } = await this.$api.explanationNote.get();
        if (code === 200) {
          this.introduction = [
            { id: 1, title: "主旨", text: result.subject },
            { id: 2, title: "對填答企業的幫助", text: result.help },
            { id: 3, title: "聯絡人", text: result.connection },
          ];
        }
      } catch (error) {
        console.error(error);
      }
    },
    goBasicInfo() {
      let url = "";
      switch (this.industry) {
        case "紡織業":
          url = "https://tier.surveycake.biz/s/p1GkR";
          break;
        case "螺絲、螺帽及鉚釘製造業":
          url = "https://tier.surveycake.biz/s/v2v66";
          break;
        case "金屬製品製造業":
          url = "https://tier.surveycake.biz/s/v2v66";
          break;
        case "塑膠製品製造業":
          url = "https://tier.surveycake.biz/s/l6Gy1";
          break;
        case "化妝品製造業":
          url = "https://tier.surveycake.biz/s/bLGN1";
          break;
        case "食品及飼品製造業":
          url = "https://tier.surveycake.biz/s/v2v0w";
          break;
        case "飲料製造業":
          url = "https://tier.surveycake.biz/s/v2v0w";
          break;
        // case "工業區":
        //   url = "https://tier.surveycake.biz/s/xN0Kz";
        //   break;
        default:
          url = "https://tier.surveycake.biz/s/NwVbL";
          break;
      }

      window.location.href = url;
    },
  },
};
</script>

<style lang="scss">
.indexPage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 10;

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media (min-width: 1280px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }

  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;

    &--imgAndTxt {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row-reverse;
      }

      .img {
        @media (min-width: 768px) {
          margin-left: 16px;
        }
        @media (min-width: 1024px) {
          margin-left: 24px;
        }
      }

      .title {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @media (min-width: 768px) {
          margin-right: 16px;
        }
        @media (min-width: 1024px) {
          margin-right: 24px;
        }

        &__text {
          font-size: 2.25rem;
          line-height: 2.5rem;
          color: rgb(92, 136, 201);
          margin-top: 1rem;
          margin-bottom: 1rem;

          @media (min-width: 768px) {
            font-size: 3rem;
            line-height: 1;
          }
        }

        &__supText {
          display: flex;
          align-items: center;

          &--cn {
            font-size: 3rem;
            line-height: 1;
            color: rgb(54, 89, 140);
            margin-bottom: 16px;

            @media (min-width: 768px) {
              font-size: 3.75rem;
              line-height: 1;
            }
          }

          &--en {
            font-size: 2.25rem;
            line-height: 2.5rem;
            color: rgb(92, 136, 201);
            margin-bottom: 16px;

            @media (min-width: 768px) {
              font-size: 3.75rem;
              line-height: 1;
            }
          }
        }

        &__subject {
          margin-left: 4px;
          margin-top: 8px;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.25rem;
          letter-spacing: 1px;
          color: rgb(92, 136, 201);
        }
      }
    }
  }

  &__introduce {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: column-reverse;
    }

    &--card {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .introduce {
        width: 100%;
        margin-top: 16px;
        margin-bottom: 16px;

        @media (min-width: 768px) {
          margin: 16px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }

        @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            animation-fill-mode: both;
            animation-duration: 1000ms;
            animation-delay: 500ms;
            animation-iteration-count: 1;
            opacity: 1;
            animation-name: loadIn-#{$i};
          }

          @keyframes loadIn-#{$i} {
            0% {
              opacity: 0;
              @if $i == 1 {
                transform: translate3d(-100%, 0px, 0px);
              } @else if $i == 2 {
                transform: translate3d(0px, -100%, 0px);
              } @else if $i == 3 {
                transform: translate3d(0px, 100%, 0px);
              } @else if $i == 4 {
                transform: translate3d(100%, 0px, 0px);
              }
            }
            100% {
              opacity: 1;
              transform: none;
            }
          }
        }

        &__block {
          display: flex;
          align-items: center;

          &--title {
            margin-left: 8px;
            font-size: 1.5rem;
            line-height: 2rem;
            color: rgb(92, 136, 201);
          }
        }

        &__content {
          margin-top: 12px;
          font-weight: bold;
          font-size: 0.875rem;
          line-height: 1.5rem;
          color: rgb(82, 101, 151);
        }
      }
    }

    &--btn {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .el-select {
        width: 100%;
        @media (min-width: 768px) {
          width: 15rem;
        }
        @media (min-width: 768px) {
          margin-top: 0px;
        }
      }

      .goNext {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        border: none;
        border-radius: 0.5rem;
        background: rgb(88, 153, 200);
        color: white;
        font-weight: 700;
        transition-duration: 300ms;
        cursor: pointer;

        &:hover {
          background: rgb(50, 118, 167);
        }

        @media (min-width: 768px) {
          width: 15rem;
        }
        @media (min-width: 768px) {
          margin-top: 0px;
        }

        &.active {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>