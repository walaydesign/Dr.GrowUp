window.addEventListener("load", () => {
  gsap.registerPlugin(TextPlugin, SplitText);
  //   初始頁面動畫
  let split = SplitText.create(".init-text", {
    type: "lines",
    linesClass: "line",
  });

  gsap.from(split.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });
});

$(document).ready(function () {
  $(".chat_input_send").click(function () {
    if ($(".chat-input-main").val() !== "") {
      //   初始畫面 -> 開始聊天
      if ($(".chat_wrapper.init").hasClass("active")) {
        $(".chat_wrapper.init").fadeOut(300);
        $(".chat_wrapper.chatting").delay(300).show().css("display", "flex");
      }

      //   送出問題
      let questionText = $(".chat-input-main").val();
      let question = $("<p class='question'></p>").text(questionText);
      $(".chat_wrapper.chatting").append(question);

      //   思考中
      let typing = `<div class='typing'><div class='dot dot-1'></div><div class='dot dot-2'></div><div class='dot dot-3'></div></div>`;
      let typingAnswer = $("<div class='answer_text'></div>").html(typing);
      let avatar = $(
        "<div class='answer_logo'><img src='./next/logo.png' /><p>剛剛好 AI</p></div>",
      );
      let answer = $("<div class='answer'></div>");
      answer.append(avatar, typingAnswer);
      $(".chat_wrapper.chatting").append(answer);

      //   問題出現的動畫
      setTimeout(() => {
        question.addClass("show");
      }, 100);
      $(".chat-input-main").val("");

      //   思考回答出現的動畫
      setTimeout(() => {
        answer.addClass("show");
        setTimeout(() => {
          //   回答
          // let answerText = `如果你對孩子的身高、骨齡或發育還想更系統地了解，其實黃醫師有把很多門診常被問到的問題整理成一本書。<br><br>裡面把身高、骨齡、發育指標等觀念講得很清楚，也整理了很多爸媽常見的疑問。<br><br>有興趣可以看看：<a href="#">https://www.drgrowup.com.tw/blog/shop</a><br>我可以怎麼瞭解更多資訊`;
          // let answerTextWrap = $("<p class='answer_text'></p>").html(
          //   answerText,
          // );
            let answerTextWrap = $("<p class='answer_text'>地今杯穴己上亭古發紅太間勿青、造且美實在裏生教。都六品條，水壯具放牠田王真兆怪路四現，法打男抓能拍！別各午在步課花又力！再手亮化冰貝吧。貓犬彩。尺彩現三們貓尾喝爸就點坐地洋何口爬急東免「起收共躲飽」動鳥圓定是穴鳥乞走上紅「是這她者他綠牙多中連」忍兩。音泉帽士衣蛋點相去正？犬們小走！長定爬真畫太姐見實石又現工巴寸頭比，寸對乙申學後抱林苦至樹教尺同，追乙現我結笑干雲他。種世化司日眼祖請邊知松長完麻斤多七草車就，耍交借爸實明門找半「皮千跑公兆服」。</p>");

          let answerImgUrl = "./next/pic.jpg";
          let answerImg = $("<img>").attr("src", answerImgUrl);
          let answerImgWrap = $("<div class='answer_pic'></div>");
          answerImgWrap.append(answerImg);
          answer.empty();
          answer.append(avatar, answerTextWrap, answerImgWrap);
          $(".chat_wrapper.chatting").append(answer);

          answer.append(avatar, answerTextWrap, answerImgWrap);

          // GSAP 打字動畫
          gsap.to(answerTextWrap[0], {
            duration: 3,
            text: {
              value: answerText,
              delimiter: "",
            },
            ease: "none",
          });
        }, 1000);
      }, 500);
    }
  });
});
