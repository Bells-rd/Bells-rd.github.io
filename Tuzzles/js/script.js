// オプションを指定してSkipprの実行
$("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 400,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 4000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});

$(".menu-box").click(function(){
    $(".nav-list").slideToggle();
});

//■商品の詳細ホバー
$('.production').hover(function(){
    $(this).children('p.fadeToggle').stop().fadeToggle();
});

//■page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();
 
//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  } 
});
 
// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});