const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const btn = document.getElementById("go");

btn.addEventListener("click", () => {
  window.location.href = "https://www.hackforplay.xyz/users/otcm5ggCSyZCmnDW7D4M389BXE12";
});
let point = 0;
let pointふえる = 1;
const area = document.getElementById("click-area");
const score = document.getElementById("score");

area.addEventListener("click", (e) => {
  point += pointふえる;              // ← 数値を増やす
  score.textContent = point+'pt';  // ← 画面に反映！！

  const plus = document.createElement("div");
  plus.className = "plus";
if(point<=50){
  plus.textContent = "+1pt";
}
    if(point>=50){
        plus.textContent = "+2pt";
pointふえる=2
  }
    if(point>=100){
pointふえる=4
plus.textContent = "+4pt";
  }
    if(point>=200){
pointふえる=6
plus.textContent = "+6pt";
  }
    if(point>=400){
pointふえる=8
plus.textContent = "+8pt";
  }
    if(point>=800){
pointふえる=10
plus.textContent = "+10pt";
  }

  plus.style.left = e.clientX + "px";
  plus.style.top  = e.clientY + "px";

  document.body.appendChild(plus);

  setTimeout(() => {
    plus.remove();
  }, 800);


});
const targetDate = new Date("2026-04-1T00:00:00+00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "今日からめたもんが世界を支配するらしい…";
    return;
  }

  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const syuu = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const hiniti = Math.floor((diff / (1000 * 60 * 60 * 24)) % 7);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("countdown").textContent =
    `エイプリルフールまで、あと ${syuu}週間${hiniti}日${hours}時間 ${minutes}分 ${seconds}秒`;

}

updateCountdown();
setInterval(updateCountdown, 1000);

 
function omikuzi() {
  const min = 1;
const max = 100;
const rand = Math.floor(Math.random() * (max - min + 1)) + min;

  const min2 = 1;
const max2 = 4;
const rand2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

if(rand>95){
 
  if(rand2===1){
 document.getElementById("omikuzi").textContent =
  '大吉！！！何してもうまくいくよ！'
  }else if(rand2===2){
     document.getElementById("omikuzi").textContent =
  '大吉！！！家にアラブの石油王が来るよ！'
  }else if(rand2===3){
     document.getElementById("omikuzi").textContent =
  '大吉！！！めっちゃ頭よくなるよ！'
  }else if(rand2===4){
     document.getElementById("omikuzi").textContent =
  '大吉！！！自分だけでなく周りの人も健康になるよ！'
  }
}else if(rand>70){
 if(rand2===1){
 document.getElementById("omikuzi").textContent =
  '中吉！！！何してもほどほどにうまくいくよ！'
  }else if(rand2===2){
     document.getElementById("omikuzi").textContent =
  '中吉！！！自販機でだれかがお釣りを取り忘れていたかも…！'
  }else if(rand2===3){
     document.getElementById("omikuzi").textContent =
  '中吉！！！難しいテストがすらすら解ける！'
  }else if(rand2===4){
     document.getElementById("omikuzi").textContent =
  '中吉！！！明日すっきり起きられる！！'
  }
}else if(rand>50){
 if(rand2===1){
 document.getElementById("omikuzi").textContent =
  '小吉！！！何してもちょっとうまくいくかもよ！'
  }else if(rand2===2){
     document.getElementById("omikuzi").textContent =
  '中吉！！！おこづかいがもらえるかも！'
  }else if(rand2===3){
     document.getElementById("omikuzi").textContent =
  '中吉！！！ひらめき力があがる！'
  }else if(rand2===4){
     document.getElementById("omikuzi").textContent =
  '中吉！！！とくに変わりはないけど健康になった気分！'
  }
}else if(rand>30){
 if(rand2===1){
 document.getElementById("omikuzi").textContent =
  '凶…新しい挑戦はやめておこう…'
  }else if(rand2===2){
     document.getElementById("omikuzi").textContent =
  '凶…お釣り足りなかったかも！？'
  }else if(rand2===3){
     document.getElementById("omikuzi").textContent =
  '凶…ぜんぜん授業についていけない…'
  }else if(rand2===4){
     document.getElementById("omikuzi").textContent =
  '凶…喉がイガイガする…'
  }
}
else {
 if(rand2===1){
 document.getElementById("omikuzi").textContent =
  '大凶…何してもうまくいかない…'
  }else if(rand2===2){
     document.getElementById("omikuzi").textContent =
  '大凶…あれ？財布盗まれた！？'
  }else if(rand2===3){
     document.getElementById("omikuzi").textContent =
  '大凶…テスト10点…'
  }else if(rand2===4){
     document.getElementById("omikuzi").textContent =
  '大凶…頭も痛いし鼻水出るしだるいし咳出るしお腹痛いし腰痛いし肩痛いし喉痛いしめまいもする…でも熱はないから休めない…'
  }
}
  }
  omikuzi()
  document.addEventListener("DOMContentLoaded", () => {
  omikuzi();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});


let copyw=0

copy.addEventListener("click", (e) => {



   const min = 1;
const max = 10;
const metamon = Math.floor(Math.random() * (max - min + 1)) + min;
copyw+=1
if(copyw>=70){

copyw=0
}else if(copyw >= 60){
  document.getElementById('copy').textContent = '腱鞘炎なるよ…？';
}else if(copyw >= 50){
  document.getElementById('copy').textContent = '手、疲れない？';
}else if(copyw >= 40){
  document.getElementById('copy').textContent = '暇なの？？';
}else if(copyw >= 30){
  document.getElementById('copy').textContent = 'どれくらい送るの？？？';
}else if(copyw >= 20){
  document.getElementById('copy').textContent = 'そろそろ痛いからやめて…';
}else if(copyw >= 10){
  document.getElementById('copy').textContent = 'そんなコピーする…？';
}else{
  document.getElementById('copy').textContent = 'コピー完了！';
}
if(metamon===1){
 navigator.clipboard.writeText('めたもん神');
}else if(metamon===2){
   navigator.clipboard.writeText('めたもん愛してるよ😍😍😍😍😍😍');
}else if(metamon===3){
   navigator.clipboard.writeText('ずっと好きでした！付き合ってください！');
}else if(metamon===4){
   navigator.clipboard.writeText('💩←今日出たうんこの形');
} else if(metamon===5){
   navigator.clipboard.writeText('ずっとお前の事嫌いだった。絶交しよう。');
}else if(metamon===6){
   navigator.clipboard.writeText('ミルクティーは天の川だ。これは比喩やおふざけではない。なぜなら、ミルクティーはミルキーだ。それはつまり薩摩市との陰謀を示している。事実は明確ではないが、コンニャクイモミルクティーを作ることができれば、明確になるだろう。そのためには、塩酸の採取が必要だ。そこでついてきてほしいやつが5人いる。まずは二郎系そうめん屋「ドライフラワー」の常連「伊能忠敬」次にあおぞらマントルで5円稼いだ実力をもった「激落ちちゃん」その次忌々しいあの虫の毒を素早く解除する薬「ムヒ」最後に説明する必要すらないへそ曲げくんと綿棒歯ブラシコンビ。いけるか？');
}else if(metamon===7){
   navigator.clipboard.writeText('レスバしよう');
}else if(metamon===8){
   navigator.clipboard.writeText('お前今日からペットな');
}else if(metamon===9){
   navigator.clipboard.writeText('ここはどこ…？私は誰？あなたも誰？');
}else if(metamon===10){
   navigator.clipboard.writeText('俺！俺だけどさ、運転してたら妊婦を酷いけがさせちゃって、そこから流産したから、慰謝料として100万円必要なんだ…50万円だけでいいし、ちゃんと返すから貸してくれないか？');
}
});