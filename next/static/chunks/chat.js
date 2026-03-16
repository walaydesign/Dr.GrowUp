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
      let chatHeight = $(".chat_wrapper.chatting").height();
      $(".chat").animate({ scrollTop: chatHeight }, 300);

      //   思考回答出現的動畫
      setTimeout(() => {
        answer.addClass("show");
        //   回答
        setTimeout(() => {
          let answerText = `如果你對孩子的身高、骨齡或發育還想更系統地了解，其實黃醫師有把很多門診常被問到的問題整理成一本書。<br><br>裡面把身高、骨齡、發育指標等觀念講得很清楚，也整理了很多爸媽常見的疑問。<br><br>有興趣可以看看：<a href="#">https://www.drgrowup.com.tw/blog/shop</a><br>我可以怎麼瞭解更多資訊`;
          let answerTextWrap = $("<p class='answer_text'></p>");

          let answerImgUrl = "./next/pic.jpg";
          let answerImg = $("<img>").attr("src", answerImgUrl);
          let answerImgWrap = $("<div class='answer_pic'></div>");
          answerImgWrap.append(answerImg);
          answer.empty();
          answer.append(avatar, answerTextWrap, answerImgWrap);
          $(".chat_wrapper.chatting").append(answer);

          answer.append(avatar, answerTextWrap, answerImgWrap);

          // 打字動畫
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

  let headerHeight = $("header").height();
  $(".chat").on("scroll", function () {
    $(".answer").each(function (i) {
      console.log("i=" + i);
      let avatarHeight = $(this).find(".answer_logo").height();
      let triggerOffset = (headerHeight - avatarHeight) / 2;
      let answerTop = $(this).offset().top;
      let answerBottom = $(this).offset().top + $(this).height() + 70;
      if (answerTop <= triggerOffset && answerBottom >= headerHeight) {
        $(this).find(".answer_logo").addClass("fixed");
        $(this).find(".answer_logo").css("top",triggerOffset);
      } else {
        $(this).find(".answer_logo").removeClass("fixed");
        $(this).find(".answer_logo").css("top", 0);
      }
    });
  });
});
