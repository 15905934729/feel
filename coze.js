  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7569055673708216366',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_TPR0oh9RV8gVrLLDLkmyMlJ6H8OKVm6EnJ1o0C6ZdB7llWwmbya1IMdtc98p4mIv',
      onRefreshToken: function () {
        return 'pat_TPR0oh9RV8gVrLLDLkmyMlJ6H8OKVm6EnJ1o0C6ZdB7llWwmbya1IMdtc98p4mIv'
      }
    },
    // 配置用户信息
    userInfo: {
      id: '12345',
      url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',  // 用户头像
      nickname: 'Johns',
    },
    // 配置聊天窗口的整体 UI 效果，包括应用图标、页面布局、语言属性等。
    ui: {
        base: {
        icon: 'https://zzyl0927.oss-cn-beijing.aliyuncs.com/2025/11/b5d2dec96f778fa8f6bb21ca306df133.jpg', // 悬浮球图标
        layout: 'pc',
        zIndex: 1000,
        },
        //配置顶部标题栏
      header: {
          isShow: true,
          isNeedClose: true,
       },
        footer: {
        isShow: true,
        expressionText: '欢迎来到Feel社交平台'
        },
        //配置聊天框
      chatBot: {
        title: "Feel社交平台",
        el: document.getElementById('id1'),
        width: 400,
        isNeedAddNewConversation: false,
        isNeedQuote: true
      },
      conversations: {
        isNeed: true  
        }
    }
  });