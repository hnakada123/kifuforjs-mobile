function after_kifu_load(){
  setTimeout(function(){ // Kifu読み込み待ち
    var board_id = "board";
    var e = $('#'+board_id);
    e.find('.info').insertBefore(e.find('.ban')); // 棋譜情報をbanの上に移動
    e.find('.mochi1').insertBefore(e.find('.ban')); // 持ち駒をbanの上に移動
    e.find('.mochi0').insertAfter(e.find('.ban'));  // 持ち駒をbanの下に移動
    e.find('.panel').insertAfter(e.find('.mochi0'));  // 棋譜リストなどのパネルを持ち駒の下に移動
    e.find('.inline.go').insertAfter(e.find('.mochi0'));  // 矢印ボタンを持ち駒の下に移動
    e.find('.inline.tools').insertAfter(e.find('.inline.go'));  // 反転ボタンを矢印ボタンの下に移動
    e.find('.kifuforjs > tbody > tr:first-child > td:first-child').remove(); // banの左のtdタグを削除
    e.find('.kifuforjs > tbody > tr:first-child > td:last-child').remove(); // banの右のtdタグを削除
    e.find('.kifuforjs button:contains("credit")').remove();
  },100);
}
