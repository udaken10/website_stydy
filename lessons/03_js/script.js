/* 
    Lesson 3: JavaScriptで動かそう
    
    【やってみよう！】
    1. btn-hello をクリックしたときに alert('こんにちは！') が出るようにしよう。
    2. btn-change をクリックしたときに、message の文字の色を変えよう。
*/

// 1. ボタンをプログラムで見つける
const helloBtn = document.getElementById('btn-hello');
const changeBtn = document.getElementById('btn-change');
const messageText = document.getElementById('message');

// 2. 「クリックされたら〜する」という命令を書く
helloBtn.addEventListener('click', () => {
    // ここに alert(...) を書いてみてね
    console.log('挨拶ボタンが押されたよ');
});

changeBtn.addEventListener('click', () => {
    // messageText のクラスを付け替えて豪華にします
    messageText.classList.toggle('active');
});
 stone
