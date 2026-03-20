window.addEventListener("load", () => {
  gsap.registerPlugin(TextPlugin, SplitText);
  //   初始頁面動畫
  let split = SplitText.create(".init-text", {
    type: "chars, words, lines",
  });

  gsap.from(split.chars, {
    opacity: 0,
    duration: 0.05,
    stagger: 0.03,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.querySelector(".chat-input-main");
  const sendBtn = document.querySelector(".chat_input_send");
  const chatContainer = document.querySelector(".chat");
  const chatWrapperChatting = document.querySelector(".chat_wrapper.chatting");
  const chatWrapperInit = document.querySelector(".chat_wrapper.init");
  const header = document.querySelector("header");

  sendBtn.addEventListener("click", () => {sendMessage();});

  // 按enter送出訊息
  const textarea = document.querySelector(".chat-input-main");
  textarea.addEventListener("keydown", function (e) {
    // 1. 檢查是否正在使用中文輸入法選字 (避免選字時按 Enter 直接送出)
    // if (e.isComposing || e.keyCode === 229) {
    //   return;
    // }

    // 2. 判斷按下的是否為 Enter
    if (e.key === "Enter") {
      // 3. 判斷是否有按住 Shift 鍵
      if (e.shiftKey) {
        // 如果按住 Shift + Enter：允許換行 (不需做任何事，讓預設行為發生)
        return;
      } else {
        // 如果只按 Enter：送出訊息
        e.preventDefault(); // *** 關鍵：阻止 textarea 產生換行 ***

        sendMessage(); // 執行你的送出 function
      }
    }
  });

  function sendMessage() {
    const questionText = chatInput.value.trim();

    if (questionText !== "") {
      // 初始畫面 -> 開始聊天
      if (chatWrapperInit && chatWrapperInit.classList.contains("active")) {
        chatWrapperInit.style.transition = "opacity 0.3s";
        chatWrapperInit.style.opacity = "0";
        setTimeout(() => {
          chatWrapperInit.style.display = "none";
          chatWrapperChatting.style.display = "flex";
          chatWrapperChatting.style.opacity = "1";
        }, 300);
      }

      // 送出問題
      const question = document.createElement("p");
      question.className = "question";
      question.textContent = questionText;
      chatWrapperChatting.appendChild(question);

      // 思考中
      const typingHTML = `<div class='typing'><div class='dot dot-1'></div><div class='dot dot-2'></div><div class='dot dot-3'></div></div>`;
      const answer = document.createElement("div");
      answer.className = "answer";

      const avatar = document.createElement("div");
      avatar.className = "answer_logo";
      avatar.innerHTML = `<img src='./next/logo.png' /><p>剛剛好 AI</p>`;

      const typingAnswer = document.createElement("div");
      typingAnswer.className = "answer_text";
      typingAnswer.innerHTML = typingHTML;

      answer.appendChild(avatar);
      answer.appendChild(typingAnswer);
      chatWrapperChatting.appendChild(answer);

      // 問題出現的動畫
      setTimeout(() => question.classList.add("show"), 350);
      chatInput.value = "";

      // 問問題後滾動到底部
      setTimeout(() => {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: "smooth",
        });
      }, 100);

      // 機器人回答邏輯
      setTimeout(() => {
        answer.classList.add("show");

        setTimeout(() => {
          const answerText = `如果你對孩子的身高、骨齡或發育還想更系統地了解，其實黃醫師有把很多門診常被問到的問題整理成一本書。<br><br>裡面把身高、骨齡、發育指標等觀念講得很清楚，也整理了很多爸媽常見的疑問。<br><br>有興趣可以看看：<a href="https://www.drgrowup.com.tw/blog/shop" target="_blank">https://www.drgrowup.com.tw/blog/shop</a><br>我可以怎麼瞭解更多資訊`;

          const answerTextWrap = document.createElement("p");
          answerTextWrap.className = "answer_text";

          const answerImgWrap = document.createElement("div");
          answerImgWrap.className = "answer_pic";
          answerImgWrap.innerHTML = `<img src='./next/pic.jpg' />`;

          // 清空原有的 typing 內容並更換
          answer.innerHTML = "";
          answer.appendChild(avatar);
          answer.appendChild(answerTextWrap);
          answer.appendChild(answerImgWrap);

          // GSAP 打字動畫
          gsap.to(answerTextWrap, {
            duration: 3,
            text: { value: answerText, delimiter: "" },
            ease: "none",
            onUpdate: () => {
            // 打字時跟隨滾動
            chatContainer.scrollTop = chatContainer.scrollHeight;
            },
            onComplete: () => {
              // 顯示圖片的動畫
              answerImgWrap.style.display = "block";
              gsap.to(answerImgWrap, {
                opacity: 1,
                duration: 0.5,
                onComplete: () => {
                  // 取得各個元素的高度
                  const chatBottom = document.querySelector(".chat_bottom");
                  const chatWrapperChatting = document.querySelector(
                    ".chat_wrapper.chatting",
                  );

                  // 使用 offsetHeight 取得目前可視的高度 (含 padding/border)
                  const inputHeight = chatBottom ? chatBottom.offsetHeight : 0;
                  const answerHeight = answer.offsetHeight;
                  const imgHeight = answerImgWrap.offsetHeight;

                  // 取得整個對話容器的內容總高度
                  const wrapperHeight = chatWrapperChatting.scrollHeight;

                  // 計算滾動終點
                  // 總內容高度 - 視窗高度 + 圖片一半的高度
                  const scrollEnd =
                    wrapperHeight - window.innerHeight - imgHeight / 2;

                  // 執行平滑捲動
                  chatContainer.scrollTo({
                    top: scrollEnd,
                    behavior: "smooth",
                  });
                }
              });
            },
          });
        }, 1000);
      }, 500);
    }
  }

  // Scroll 監聽 (Sticky Avatar 邏輯)
  // chatContainer.addEventListener("scroll", () => {
  //   const headerHeight = header ? header.offsetHeight : 0;
  //   const answers = document.querySelectorAll(".answer");

  //   answers.forEach((item) => {
  //     const avatar = item.querySelector(".answer_logo");
  //     if (!avatar) return;

  //     const avatarHeight = avatar.offsetHeight;
  //     let triggerOffset;
  //     if (window.innerWidth <= 450) {
  //       triggerOffset = headerHeight;
  //     } else {
  //       triggerOffset = (headerHeight - avatarHeight) / 2;
  //     }

  //     const rect = item.getBoundingClientRect();
  //     const chatRect = chatContainer.getBoundingClientRect();

  //     const answerTop = rect.top - chatRect.top;
  //     const answerBottom = answerTop + item.offsetHeight + 70;
  //     let avatarTop;
  //     if (window.innerWidth <= 450) {
  //       avatarTop = headerHeight;
  //     } else {
  //       avatarTop = triggerOffset;
  //     }

  //     if (answerTop <= triggerOffset && answerBottom >= headerHeight) {
  //       avatar.classList.add("fixed");
  //       avatar.style.top = `${avatarTop}px`;
  //     } else {
  //       avatar.classList.remove("fixed");
  //       avatar.style.top = `0px`;
  //     }
  //   });
  // });
});
