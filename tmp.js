/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
) &&
  ((document.querySelector(".main").style.display = "none"),
  (document.querySelector(".pagination-container").style.display = "none"),
  (document.querySelector("#announce").innerHTML =
    "不支持移动端访问，请用电脑访问 https://register-1257138158.cos-website.ap-guangzhou.myqcloud.com"));
let q1_html =
    '\n<div id="q1-username-wrapper">\n  <label id="q1-username-label"><b>用户名</b></label>\n  <label id="q1-username-result"></label>\n  <input type="file" id="q1-uploader" name="filename" onchange="activate1()">\n</div>\n<div id="q2-password-wrapper">\n  <label id="q2-password-label"><b>密码</b></label>\n  <div id="q2-text">\n</div>\n',
  q2_html =
    '\n  <div class="keyboard-wrapper">\n    <div id="keyboard">\n      <div class="key" data-key="A">A</div>\n      <div class="key" data-key="B">B</div>\n      <div class="key" data-key="C">C</div>\n      <div class="key" data-key="D">D</div>\n      <div class="key" data-key="E">E</div>\n      <div class="key" data-key="F">F</div>\n      <div class="key" data-key="G">G</div>\n      <div class="key" data-key="H">H</div>\n      <div class="key" data-key="I">I</div>\n      <div class="key" data-key="J">J</div>\n      <div class="key" data-key="K">K</div>\n      <div class="key" data-key="L">L</div>\n      <div class="key" data-key="M">M</div>\n      <div class="key" data-key="N">N</div>\n      <div class="key" data-key="O">O</div>\n      <div class="key" data-key="P">P</div>\n      <div class="key" data-key="Q">Q</div>\n      <div class="key" data-key="R">R</div>\n      <div class="key" data-key="S">S</div>\n      <div class="key" data-key="T">T</div>\n      <div class="key" data-key="U">U</div>\n      <div class="key" data-key="V">V</div>\n      <div class="key" data-key="W">W</div>\n      <div class="key" data-key="X">X</div>\n      <div class="key" data-key="Y">Y</div>\n      <div class="key" data-key="Z">Z</div>\n      <div class="key" data-key="0">0</div>\n      <div class="key" data-key="1">1</div>\n      <div class="key" data-key="2">2</div>\n      <div class="key" data-key="3">3</div>\n      <div class="key" data-key="4">4</div>\n      <div class="key" data-key="5">5</div>\n      <div class="key" data-key="6">6</div>\n      <div class="key" data-key="7">7</div>\n      <div class="key" data-key="8">8</div>\n      <div class="key" data-key="9">9</div>\n      <div class="key wide" data-key="&nbsp">空格</div>\n      <div class="key wide" id="clear-btn">清空</div>\n    </div>\n  </div>\n  <img id="cursor" src="./q2-assets/cursor.png" draggable="false">\n  <img id="fan" src="./q2-assets/fan.png" draggable="false">',
  q3_html =
    '\n<div id="q2-password-wrapper">\n  <label id="q2-password-label"><b>请重复刚才输入的密码</b></label>\n  <div id="q2-text">\n</div>\n',
  q4_html =
    '\n  <h2>你的年龄: <span id="volumeDisplay">50</span></h2>\n\t<div class="slider-container">\n\t\t<input type="range" min="1" max="10000" value="5000" class="slider" id="sliderLeft">\n\t\t<input type="range" min="1" max="10000" value="5000" class="volume" id="volumeBar" disabled="true">\n\t\t<input type="range" min="1" max="18000" value="9000" class="slider" id="sliderRight">\n\t</div>',
  q5_html =
    '\n<h2>你的生日</h2>\n<div class="earth-container">\n      <button id="date">\n      <div></div>\n      <input class="earth-input" type="checkbox">\n      <div id="datePicker">\n      <svg viewBox="0 0 350 166" >\n      <ellipse id="ellipse" cx="175" cy="83" rx="150" ry="73"\n      style="fill-opacity: 0;stroke:yellow;stroke-width:0.5" />  \n      <image id="earth" height="15" width="15" href="earth.png"></image>\n      <image id="sun" x="105" y="68" height="30" width="30" href="sun.png"></image>\n      </svg> \n    </div>\n  </button>\n</div>\n',
  q6_html =
    '\n<div class="main-input-div">\n  <label id="q1-username-label"><b>邮箱</b></label>\n  <input type="text" class="main-input" disabled placeholder="你的邮箱">\n  <input id="q6-clear-btn" value="清空" type="button">\n</div>\n<div class="main-game-div">\n  <div class="bukkit box"></div>\n</div>\n',
  executeCloudFunction = (e) => (
    console.log(e),
    axios
      .post(
        "https://service-9kivy954-1257138158.gz.apigw.tencentcs.com:443/updateNewUser",
        e,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((e) => (console.log(e), e))
      .catch((e) => {
        console.log(e.response);
      })
  ),
  startPlayTime = performance.now(),
  final_html =
    '\n<p class="announce">我在北京时间<span id="maintenance_date"></span>进行停机维护。在此期间，图书管理系统无法被访问。</p>\n<p class="announce">预计维护时间：24小时。停服范围：全服。</p>\n<p class="announce">如果老师或助教不幸在维护期间进入此系统，虽然评分方面对我不公平（因为你们无法感受我精心设计的系统），但如果给和其它同学差不多的平均分我也是能接受的。</p>\n',
  score_html =
    '\n<div id="resultContainer" class="no-show">\n<p class="challenge">如果你好奇的话：</p>\n<p class="challenge">你，用户名<span id="result_username"></span>，是第<span id="result_number"></span>个完成挑战的用户。</p>\n<img src="giphy.gif">\n<p class="challenge">你总共花费了<span id="result_time"></span>，战胜了<span id="result_position"></span>%的用户。</p>\n</div>\n',
  errorMessage = document.querySelector("#error-message"),
  usernameLabel = document.querySelector("#final-username-result"),
  passwordLabel = document.querySelector("#final-password-result"),
  ageLabel = document.querySelector("#final-age-result"),
  birthdayLabel = document.querySelector("#final-birthday-result"),
  emailLabel = document.querySelector("#final-email-result"),
  newMain = document.querySelector(".new-main"),
  pageCount = 5,
  newsDataRender = [],
  p = 1,
  render = () => {
    let e = document.querySelector("#choose-container");
    if (((newMain.innerHTML = " "), (errorMessage.innerHTML = ""), 1 == p))
      e.classList.add("no-show"),
        (newMain.innerHTML += q1_html),
        document.getElementById("q2-text").addEventListener("mousedown", () => {
          (newMain.innerHTML += q2_html), activate2();
        });
    else if (2 == p)
      e.classList.add("no-show"),
        (newMain.innerHTML += q4_html),
        (newMain.innerHTML += q5_html),
        activate4(),
        activate5();
    else if (3 == p)
      e.classList.add("no-show"), (newMain.innerHTML += q6_html), activate6();
    else if (4 == p)
      e.classList.remove("no-show"),
        document
          .querySelector(".pagination-container")
          .classList.add("no-show");
    else {
      e.classList.add("no-show"),
        (document.querySelector("#big-title").innerHTML =
          "图书管理系统维护公告"),
        (newMain.innerHTML += final_html),
        (newMain.innerHTML += score_html);
      let n = document.querySelector("#maintenance_date"),
        a = new Date().toISOString().slice(0, 10);
      n.innerHTML = a;
      let i = performance.now();
      uploadDataAndCalculate(username, i - startPlayTime);
    }
  };
function millisToMinutesAndSeconds(e) {
  let n = Math.floor(e / 6e4),
    a = ((e % 6e4) / 1e3).toFixed(0);
  return n + "分" + (a < 10 ? "0" : "") + a + "秒";
}
render();
let next = document.querySelector(".next");
function validateBeforeNext() {
  if (1 === p) {
    if ("" === username || "" === password)
      return (errorMessage.innerHTML = "用户名或密码为空，请输入内容！!1!"), !1;
    if (password.length < 6)
      return (errorMessage.innerHTML = "你的密码太短了！!1!"), !1;
  } else if (2 === p) {
    if (null === birthday)
      return (errorMessage.innerHTML = "请输入生日！!!！!!！！1!"), !1;
    let e = new Date().getFullYear(),
      n = birthday.getFullYear();
    if (Math.abs(e - n - age) > 1)
      return (
        (errorMessage.innerHTML = "生日和当前年龄不匹配！!!！!!！！1!"), !1
      );
  } else if (3 === p) {
    if ("" === email)
      return (errorMessage.innerHTML = "请输入邮箱！!!！!!！！1!"), !1;
    if (!email.includes("@") || !email.includes("."))
      return (
        (errorMessage.innerHTML =
          "邮箱格式看起来不对！怎么会没有@符号和点呢!!！!!！！1!"),
        !1
      );
  }
  return !0;
}
function uploadDataAndCalculate(e, n) {
  (async () => {
    let a = new URLSearchParams();
    a.append("username", e), a.append("timeTaken", n);
    let i = await executeCloudFunction(a),
      t = millisToMinutesAndSeconds(n);
    "data" in i &&
      "number" in i.data &&
      ((result = i.data),
      resultContainer.classList.remove("no-show"),
      (document.querySelector("#result_username").innerHTML = e),
      (document.querySelector("#result_time").innerHTML = t),
      (document.querySelector("#result_number").innerHTML = result.number),
      (document.querySelector("#result_position").innerHTML =
        result.better_than));
  })();
}
next.onclick = function () {
  validateBeforeNext() && (p >= 5 || ((p += 1), render()));
};

