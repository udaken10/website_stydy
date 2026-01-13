// ボタンの要素を取得
const button = document.getElementById('colorButton');

// クリックイベントを追加
button.addEventListener('click', () => {
    // 背景色をランダムに変更
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    
    // コンソールにメッセージを表示
    console.log('背景色を ' + randomColor + ' に変更しました。');
});

// 学習用：要素の操作
document.getElementById('item-html').style.fontWeight = 'bold';

/* 【クエスト4】
   ここに、ボタンをクリックしたときに alert を出すコードを書いてみよう！
*/
