<template>
  <div class="finishPage">
    <div class="finishPage__header">
      <img src="@/assets/images/finishPage.svg" alt="完成" />

      <div class="finishPage__header--tab">
        <strong class="active">量表結果摘要</strong>
      </div>
    </div>

    <AllFinishPage v-if="list.length > 0" :list="list" />
  </div>
</template>

<script>
export default {
  head: {
    title: "分析結果 - 台灣產業數位轉型量表TDX",
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      const listQuery = {
        svid: this.$route.query.svid,
        hash: this.$route.query.hash,
      };

      this.$api.userReply
        .get(listQuery)
        .then((res) => {
          const { code, data } = res.data;
          if (code === 200) {
            this.list = data;
          } else {
            this.$swal
              .fire({
                icon: "error",
                title: "資料傳輸有問題，請重新填寫，謝謝您！",
                timer: 2000,
                showConfirmButton: false,
              })
              .then(() => {
                this.$router.push("/");
              });
          }
        })
        .catch(() => {
          this.$swal
            .fire({
              icon: "error",
              title: "資料傳輸有問題，請重新填寫，謝謝您！",
              timer: 2000,
              showConfirmButton: false,
            })
            .then(() => {
              this.$router.push("/");
            });
        });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
.finishPage {
  position: relative;
  width: 100%;
  max-width: 976px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 16px;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }

  &__header {
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 991) {
      padding: 24px;
    }

    &--tab {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: auto;

      @media (min-width: 769px) {
        justify-content: center;
      }

      strong {
        padding: 13px 8px 0 8px;
        line-height: 1.5;
        white-space: nowrap;
        overflow-wrap: break-word;
        color: #5899c8;
        font-size: 24px;
        transition: 0.5s;
        cursor: pointer;

        @media (min-width: 769px) {
          white-space: pre-wrap;
        }

        &:hover {
          padding-top: 0;
          font-size: 36px;
        }
      }

      .active {
        padding-top: 0;
        color: rgb(54, 89, 140);
        font-size: 36px;
      }
    }

    &--subTitle {
      margin-top: 20px;
      font-size: 20px;
      color: rgb(54, 89, 140);
      // line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;

      .desc {
        display: flex;
        flex-direction: column;

        &.mt-23 {
          margin-top: 23px;
        }

        p {
          letter-spacing: 1px;
          line-height: 1.8;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          font-size: 14px;
          color: rgb(82, 101, 151);
          font-weight: 700;
        }
      }

      .successSend {
        width: 100%;
        display: flex;
        align-items: center;

        strong {
          margin: 24px 0px 16px;
          line-height: 1.2;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          color: rgb(54, 89, 140);
          font-size: 36px;
        }
      }
    }
  }
}
</style>
