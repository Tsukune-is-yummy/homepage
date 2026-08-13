---
title: No.006 AQUOS ZETA SH-01Gについて語る
date: 2026-08-14
slug: sh-01g-recovery
description: "SH-01GのRecoverymodeについて"
cover: "./cover006.png"
---
お久しぶりです、Tsukuneserver管理者のつくねです。  
今回は、家の棚に眠っていた古のスマートフォン  
`Sharp AQUOS ZETA SH-01G`
について話していきたいと思います  

## そもそもなにその産廃
SH-01Gは2014年秋に発売されたSnapdragon 801を載せた32bitハイエンドスマートフォン2GB RAMと32GB ROMを搭載。  
###### ハイエンドとはいっても2026年現在で追いつけるスペックではない

## これでなにするの
カスタムロムを入れたかったが、今回は諸事情で初期化のみ。

## 事件発生　＆　端末の初期化まで
作業に取り掛かるときカスタムロムを入れようと思ったがここで事件発生
TWRP(※1)がこの端末にないどころかネットではRecoveryMode(※2)でさえも**入ることができない**と書かれていました 
以前自分のスマホがなかった時代にこの端末を使用していたのですが、親に隠されたっきり使っていないのでパスワードも覚えていないんですよね。  
そこでサードパーティ製のロック解除ソフトウェアを使用しようと思いましたが、AQUOSがそのソフトの製品一覧に**載っていない。**  
仕方なくRecoveryModeでWipeoutを試みましたが、電源ボタン と 音量ボタン- で12秒ぐらいのバイブレーションがdocomoロゴ表示からずっと繰り返す  
これは...?と思いGeminiに相談、経年劣化による急な電圧降下によって侵入を拒否されている のではと、ならば電源を接続したらいいじゃないか  
そしたら、できた長めのバイブレーションはなくなったけど今度は普通に起動した。(RecoveryModeに入りたいのに)  
Googleの検索に"sh-01g recoverymode" と検索していたら とあるYouTube動画にたどり着いた。  
AIモードもハルシネーションしか起こさなかったので信用していなかったけれど、この動画なら海外ニキの動画だし信用できるなと思い再生  
[sharp aquos zeta SH-01G recovery - forgot code pattern lock - factory reset](https://www.youtube.com/watch?v=zWUneeZYnPQ)
<div className="aspect-video w-full">
  <iframe
    src="https://www.youtube-nocookie.com/embed/zWUneeZYnPQ"
    title="YouTube video player"
    className="w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>

できてますやん海外ニキさん  

詳細の手順を書き起こしますね↓
```

電源を切った状態で
音量下キーと電源キーを同時に長押しする
画面に NTT docomo のロゴが表示されたら、ボタンを押したまま1秒ほど待つ
そうしたら一瞬ブルｯってくるからその時に電源ボタンを7回以上連打
黒背景に赤文字の Android system recovery 画面が表示される
音量キーで wipe data/factory reset にカーソルを合わせ、電源キー長押しで決定する
```

※1 Team Win Recovery Project (TWRP) はAndroidをベースとしたデバイス向けのフリーでオープンソースなAndroid端末など公式リカバリモードを置き換える、サードパーティ製の**拡張修復・管理プログラム**である。  
出典 [Wikipedia](https://ja.wikipedia.org/wiki/Team_Win_Recovery_Project)  
※2　その名の通り緊急復旧モードである  

## なぜカスタムロムが導入できないのか


## 大きな制約
最新アップデートを迎えたこのSH-01GはAndroid 4.4(KitKat)からAndroid 5.0.2(Lollipop)にアップデートされました。
現代に於いてこのバージョンの古さはほんとにマズい  
このバージョンだから起こるエラーとかしょっちゅうあります  
Play Storeがサーバーが応答しなくてしばらくして出てくる利用規約に同意が出るまで使用不可だったり  
多くのアプリはもうすでに最新アップデートはAndroid5.0.2で利用不可でAPKはAndroid5.0+のものを探さなければならないので少し大変です

以前、Samsung S3でカスタムROMを焼いたことがあるのですが比較的**簡単**でした  
今回は、ハードウェアベースでSharpがロックを掛けブートローダーアンロックができなかったり、TWRP入れられなかったので今回は**諦めました**  

### SH-01Gの今後の向き合い方
Geminiと相談してみると、常時点灯するスマートデバイス化やポータブル音楽プレイヤーとしての活用がいいんじゃないかなって僕は思います  
今後、スマートデバイス化させる記事も出すのでお楽しみに  
読んでいただきありがとうございます

Authred by Tsukune.
