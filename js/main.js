// Coach Summoning Section
// ================================================
$("#btn").on("click", function () {
    $("h1").hide();
    $("#btn").hide();
    $("#loading").show();

    // Math.floorは、切り捨てて整数化させる関数
    // Math.random()は、０以上１未満の小数をランダムに生成する関数
    let num = Math.floor(Math.random() * 3);
    // 変数宣言（コーチ情報）
    let coachName = "";
    let imagePath = "";
    let helloMessage = "";
    //変数宣言（質問・答え・助言）
    let questionText = "";
    let answer1 = "";
    let answer2 = "";
    let answer3 = "";
    let answer4 = "";
    let advice1 = "";
    let advice2 = "";
    let advice3 = "";
    let advice4 = "";

    if (num === 0) {
        coachName = "あなたの特別コーチは、関西人コーチ「浪速の銀治郎」です！";
        imagePath = "./img/kansai.png";
        helloMessage = "まいど！銀治郎やで、よろしくな！ <br>" + 
                       "ほんで、ちょっとつ質問に答えてくれたらええからな〜。<br>" +
                       "そしたら、あんたの悩みをズバッと解決するわ！<br>" +
                       "まずはわて（画像）をポチっとしてや〜！";
        questionText = "[質問] おいおい、学生時代っちゅうのはな、何でもかんでも青春やろ！せやけど、あんたが「これだけはホンマに頑張ったで！」って胸張れること、いったい何やねん？ほら、言うてみぃな！"
        answer1 = "①調査は任せとき！資料集めまくって、奥深～くまで追求するタイプやねん。これで友だちも驚愕や、なんちゅうか、研究魂が燃え上がったわ！";
        answer2 = "②うちはサポート派やねん。みんなで力合わせてゴール目指す感じ、なんやかんや最高やったで。ほんま、涙ちょちょぎれる思いやったわ！";
        answer3 = "③文化祭やで！そらもう、みんなにド肝抜かせたったわ！未知の挑戦やったけど、舞台に立ったら気持ちええもんやな！オモロかったで！";
        answer4 = "④そらもう、やったったで！朝から晩までひたすら練習して、最後に目標ドーン！やで。途中で諦めかけたけどな、気合いで突き抜けたんや！";
        advice1 = "ほんま、情報ぎっちり集めるんはあんたのええとこや！でもな、完璧主義でやりすぎると、タイミング逃してまうで？『ま、7割でええか〜』思うて行ったら、びっくりするぐらい話早まるかもやで！";
        advice2 = "あんた、みんなの世話焼くんうまいなぁ〜！でもな、ちょっと一回『ほんまにやりたいこと』考えてみぃ？リーダーシップもな、ずっと『ええ人』しとるんやのうて、自分の意志出していくとこから始まんねん！";
        advice3 = "いや〜さすが、アイディアまんまんで、ほんま頼もしいなぁ！けどな、後ろついてくるみんなが『ちょっと待ってーな！』って言うとるかも知れんで？たまにはスピードちょっと緩めて、みんな一緒に盛り上がれるようにしぃや！";
        advice4 = "おお、兄さん姉さん、ほんまガンガンいっとるな！でもな、目ぇ見張るんも大事やけど、たまにはプロセスも大事にしぃや〜。リーダーシップいうのは、ゴールにひとりで突っ走るんやなくて、みんな引っ張っていくもんやで！";  
    } else if (num === 1) {
        coachName = "あなたの特別コーチは、サムライ「斬鉄之介（ざんてつのすけ）」です！"
        imagePath="./img/samurai.png";
        helloMessage = "拙者、斬鉄之介と申す。以後、よしなに頼むでござる！<br>" + 
                       "まず、問いに答えていただきたい。1つほど、な。<br>" +
                       "さすれば、そなたの悩み、ズバリ解決いたすでござるよ。<br>" +
                       "まずはこの拙者（画像）をクリックしてくだされ！";
        questionText = "[問い] 学びの時代、されど一心不乱に打ち込んだこと、何かござったか？拙者、興味津々にてござる！"
        answer1 = "①ふむ、拙者、研究にて膨大なる資料を集め、深き探求を遂げたり。知の道に己を捧げ、奥義を極めたと胸を張り申す！";
        answer2 = "②うむ、我ら仲間と共に力を合わせ、共に困難を乗り越えた次第。助け合いこそが真の美徳、これぞ義の心といえよう！";
        answer3 = "③ほほう、我は祭りの場において新しき挑戦を成し遂げたる者！己が勇を誇り、皆の心を打つ演目を披露したり。まさに、見事なる挑戦であった！";
        answer4 = "④ははっ！拙者、日々精進し、ついに目標を成し遂げ申した。もはや、ただの道とはいえぬ…修羅の道と心得よ！";
        advice1 = "そなた、さながら城の番人のごとく、情報をかき集め、完璧を求める御仁なり。しかし、急がぬ者は戦（いくさ）に勝てぬゆえ、時には『七割で良し！』といたし候。完璧を待たぬが知恵者の心得と覚えたり！";
        advice2 = "おお、そなた、人を支えるその優しき心根、まさに菩薩のごとし！されど、あまりに『良い人』ばかりでは、己の意志が薄れてしまうぞ。たまには己が本当にしたきこと、胸に手を当て、己を見つめることも大切ぞ！";
        advice3 = "おお、そなたのアイディア、まことに天晴れじゃ！されど、あまりに早馬のごとく駆けるゆえ、周囲の者が『待たれい！』と嘆いておるやもしれぬ。時には、その馬を抑え、皆で同じ道を歩むのも、粋なものじゃぞ。";
        advice4 = "拙者、聞き申す！そなた、あたかも戦場に立つ武将のごとく、突き進むことばかり考えておるな？されど、時にはその足を止め、プロセスという道を振り返るのも一興ぞ。真のリーダーとは、皆を巻き込み、共に栄光の城へと突き進むものでござる！";      
    } else if (num === 2) {
        coachName = "あなたの特別コーチは、来日２年目の「グレタ・ゼロエミ」です！"
        imagePath="./img/foreigner.png"; 
        helloMessage = "ハロー！グレタだよ！よろしくプリーズ！<br>" +
            "まず、あるクエスチョンにアンサーしてね。<br>" +
            "アンサーが終わったら、あんたの悩みをズバっと解決しちゃうよ！<br>" +
            "さぁ、まずはこの私（画像）をクリックして、レッツゴー！";
        questionText = "[クエスチョン！] オッケー、学生のとき！一番「イチバン！」がんばったことは何デスカ？ワタシ知りたいデス！フルエフォートで行ったヤツ、プリーズ！"
        answer1 = "①ワタシ、研究が大好きです！たくさんの資料を集めて、しっかり調べました。友だちもビックリしてくれました！まるでシラベもののニンジャみたい！";
        answer2 = "②ワタシ、クラスのみんなをサポートしました！みんなで力あわせてやりとげたとき、ほんとにヒーローみたいな気分でした！とてもカンゲキしました！";
        answer3 = "③オオー！ワタシ、文化祭でまったく新しいことにチャレンジしました！みんなの前でドキドキだったけど、ほんとに最高の経験でした！とっても楽しかったです！";
        answer4 = "④ワタシ、ホントにがんばりました！勉強とぶかつでモクヒョウをたっせいしたんです！毎日アタマと体つかって、最後に『やったー！』って感じでした！スゴイでしょ？";
        advice1 = "オー、あなたいつもデータいっぱい、アナライズするの上手ね！でも、ちょっとだけ、『70％でOK！』って思ってみる、グレイトアイディアよ！パーフェクトじゃなくてもチャンス逃がさない。これ、めっちゃアメイジングね！";
        advice2 = "オー、あなたはベリーナイス。みんなのサポート、ほんと上手ですね！でも、ちょっとだけ『ワタシ、ほんとにやりたい何？』考えてみるの大事ね！リーダーシップは、自分の意志も大事！ちょっと自分パワー出す！カッコイイね！";
        advice3 = "あなた、アメイジング！アイディアバンバンでる！でもね、オーケー、みんな『え、ちょっと待って！』いうてるかもしれんよ？スピードちょっとだけダウンしてみる！みんな一緒にエンジョイできたらベリーナイスです！";
        advice4 = "オーケー、あなたサムライみたい、ぜんぜんまっすぐいく、でも、ワタシいう。プロセスもみる！リーダーシップ、これね、ただゴールいくじゃなくて、みんなつれていくことね。ゴールいくはオーケー。でも、チームもサムライみたい大事よ！";
    }

        $("#result").text(coachName).show();
        // コーチネームを表示する   →<p id="result"> coachName </p>
        $("#coachImage").attr("src", imagePath).show();
        // attr=attribute。src（画像のファイル場所）に、コーチの画像場所の属性を与えた
        $("#hello").html(helloMessage).show();
        // コーチ挨拶を表示する     →<p id="hello"> helloMessage </p>


          // LOADING
// ================================================
const loadingAreaGrey = document.querySelector('#loading');
// 「loading」というidには、cssがあたっている。灰の背景色
const loadingAreaGreen = document.querySelector('#loading-screen');
// 「loading-screen」というidには、cssがあたっている。緑の背景色
const loadingText = document.querySelector('#loading-text');
// 「loading-text」というidには、cssがあたっている。

  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    // ↓↓↓動きの内容（透明度・反応させないように）
    {
      opacity: [1, 0],
    //   透明度を1から0にして不透明にする
      visibility: 'hidden',
    //   クリックやホバーも含めて反応しないようにする
    },
    // ↓↓↓動きの詳細（1.2秒後に2秒かけて滑らかに終了後もそれを保つ）
    {
      duration: 4000,
      delay: 2000,
      easing: 'ease',
      fill: 'forwards',
    //   アニメーションが終わった後も位置や透明度が維持される
    }
  );

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    //   横はそのまま、縦だけ、下（100vh)から上（-100vh）へ
    },
    {
      duration: 4000,
      delay: 1500,
      easing: 'ease',
      fill: 'forwards',
    }
  );  

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
        // アニメーションの80％まではずっと透明度1（見える）
        // ここから透明になっていく（最後の20％で消える）
      },
      {
        opacity: 0,
        offset: 1  //100%
        // アニメーションが100％の時に透明度0（消える）
      },
    ], 
    {
      duration: 3000,
      easing: 'ease',
      fill: 'forwards',
    //   アニメーションが終わっても、透明0を保つ（消えたまま）
    }
  );
// });


// Question Section
// ================================================
    $("#coachImage").on("click", function () {
        $("#hello").hide();
    // 質問テキストを表示する
    $("#question").text(questionText).show();       
    // 回答を作る   append:付け加える
        $("#choices").append(`<button id="choice1" class="choice-btn">${answer1}</button>`);
        $("#choices").append(`<button id="choice2" class="choice-btn">${answer2}</button>`);
        $("#choices").append(`<button id="choice3" class="choice-btn">${answer3}</button>`);
        $("#choices").append(`<button id="choice4" class="choice-btn">${answer4}</button>`);
        // バッククォート（｀）を使うことで、変数の中身${answer}を表示できます！！！ややこしいぜ！
        // choice-btnはcssで使用
        // idはクリックイベントをするのに設定した
         
        // 各回答ボタンにクリックイベントを設定し、助言を表示
        $("#choice1").on("click", function () {
            $("#questionContainer").hide();
            $("#hello").html(`${advice1}`).show();
        });
        $("#choice2").on("click", function () {
            $("#questionContainer").hide();
            $("#hello").html(`${advice2}`).show();
        });
        $("#choice3").on("click", function () {
            $("#questionContainer").hide();
            $("#hello").html(`${advice3}`).show();
        });
        $("#choice4").on("click", function () {
            $("#questionContainer").hide();
            $("#hello").html(`${advice4}`).show();
        });
    });
})