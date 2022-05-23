import Vue from 'vue'

export default ({ $request }, inject) => {
  const api = {
      explanationNote: {
        get() {
            return $request({
                url: "ExplanationNote/Get",
                method: "get",
            })
        }
      },
      userReply: {
        get(params) {
            return $request({
                url: "UserReply/GetCakeResult",
                method: "get",
                params
            })
        }
      },
  }

  Vue.prototype.api = api
  inject('api', api)
}