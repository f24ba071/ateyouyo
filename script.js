// SNSページ
// お気に入りボタン
 const images = document.querySelectorAll(".switchImage");

  images.forEach((img) => {
    const image1 = "images/sirohart.png";
    const image2 = "images/favorite.png";

    img.addEventListener("click", () => {
      img.src = img.src.includes(image1) ? image2 : image1;
    });
  });

// search
function opensearch() {
    document.getElementById('search').classList.add('open');
}

function closesearch() {
    document.getElementById('search').classList.remove('open');
}
// post
function openpost() {
    document.getElementById('post').classList.add('open');
}

function closepost() {
    document.getElementById('post').classList.remove('open');
}
// favo
function openfavo() {
    document.getElementById('favo').classList.add('open');
}

function closefavo() {
    document.getElementById('favo').classList.remove('open');
}
// クーポン、キャンペーンページ-----------------------------------
// ---------------------------------------------------------------------------------------
// kupon
function openkupon() {
    document.getElementById('kupon').classList.add('open');
}

function closekupon() {
    document.getElementById('kupon').classList.remove('open');
}
// can
function opencan() {
    document.getElementById('can').classList.add('open');
}

function closecan() {
    document.getElementById('can').classList.remove('open');
}

// クーポンQRコードを表示機能
document.addEventListener('DOMContentLoaded', function() {
  const couponItems = document.querySelectorAll('.coupon-item');

  couponItems.forEach(item => {
    item.addEventListener('click', function() {
      // クーポン詳細ページへ遷移
      // window.location.href は、指定したURLに現在のページをリダイレクトします。
      window.location.href = 'coupon_detail.html';

      // もし特定のクーポン情報を渡したい場合は、以下のようにURLパラメータを追加できます
      // const couponName = this.textContent; // クリックされたクーポンのテキストを取得
      // window.location.href = 'coupon_detail.html?coupon=' + encodeURIComponent(couponName);
    });
  });
});

// キャンペーンページに飛ぶ機能
document.addEventListener('DOMContentLoaded', function() {
  const couponItems = document.querySelectorAll('.can-item');

  couponItems.forEach(item => {
    item.addEventListener('click', function() {
      // クーポン詳細ページへ遷移
      // window.location.href は、指定したURLに現在のページをリダイレクトします。
      window.location.href = 'event.html#can';

      // もし特定のクーポン情報を渡したい場合は、以下のようにURLパラメータを追加できます
      // const couponName = this.textContent; // クリックされたクーポンのテキストを取得
      // window.location.href = 'coupon_detail.html?coupon=' + encodeURIComponent(couponName);
    });
  });
});