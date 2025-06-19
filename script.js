document.addEventListener('DOMContentLoaded', function() {
    const noveltyData = [
        { id: 'item01', name: 'オリジナルTシャツ', unitPrice: 2500 },
        { id: 'item02', name: 'エコバッグ', unitPrice: 1200 },
        { id: 'item03', name: 'ボールペン (3色セット)', unitPrice: 800 },
        { id: 'item04', name: 'マグカップ', unitPrice: 1500 },
        { id: 'item05', name: '付箋セット', unitPrice: 400 },
        { id: 'item06', name: 'クリアファイル', unitPrice: 200 },
        { id: 'item07', name: 'ノートパッド', unitPrice: 600 },
        { id: 'item08', name: 'キーホルダー', unitPrice: 350 },
        { id: 'item09', name: 'モバイルバッテリー', unitPrice: 3000 },
        { id: 'item10', name: 'タンブラー', unitPrice: 1800 },
        { id: 'item11', name: 'ハンドタオル', unitPrice: 700 },
        { id: 'item12', name: 'USBメモリ (32GB)', unitPrice: 1000 },
        { id: 'item13', name: 'ステッカーセット', unitPrice: 250 },
        { id: 'item14', name: 'カレンダー (卓上)', unitPrice: 900 },
        { id: 'item15', name: 'ブランケット', unitPrice: 2800 },
        { id: 'item16', name: 'モバイルスタンド', unitPrice: 1100 },
        { id: 'item17', name: 'マスクケース', unitPrice: 500 },
        { id: 'item18', name: 'LEDライト', unitPrice: 1300 },
        { id: 'item19', name: '折りたたみ傘', unitPrice: 2000 },
        { id: 'item20', name: 'トートバッグ', unitPrice: 1600 },
        { id: 'item21', name: 'ネックストラップ', unitPrice: 450 },
        { id: 'item22', name: 'ワイヤレスイヤホン', unitPrice: 4000 },
        { id: 'item23', name: 'クッション', unitPrice: 2200 },
        { id: 'item24', name: 'アロマディフューザー', unitPrice: 2500 },
        { id: 'item25', name: 'ペンケース', unitPrice: 750 },
        { id: 'item26', name: 'ミニスピーカー', unitPrice: 1800 },
        { id: 'item27', name: '付箋紙ロール', unitPrice: 300 },
        { id: 'item28', name: 'トラベルポーチ', unitPrice: 1400 },
        { id: 'item29', name: 'アイマスク', unitPrice: 600 },
        { id: 'item30', name: '充電ケーブルセット', unitPrice: 950 },
        { id: 'item31', name: '手ぬぐい', unitPrice: 850 },
        { id: 'item32', name: 'ミニ扇風機', unitPrice: 1700 },
        { id: 'item33', name: 'コースター (4枚セット)', unitPrice: 550 },
        { id: 'item34', name: 'スマホリング', unitPrice: 400 },
        { id: 'item35', name: 'サコッシュ', unitPrice: 1900 },
        { id: 'item36', name: 'パスケース', unitPrice: 650 },
        { id: 'item37', name: '除菌ジェル', unitPrice: 300 },
        { id: 'item38', name: '絆創膏セット', unitPrice: 200 },
        { id: 'item39', name: 'マスク (5枚セット)', unitPrice: 700 },
        { id: 'item40', name: 'カトラリーセット', unitPrice: 1500 },
        { id: 'item41', name: '折りたたみエコバッグ', unitPrice: 1300 },
        { id: 'item42', name: 'タオルハンカチ', unitPrice: 500 },
        { id: 'item43', name: 'ミニタオル', unitPrice: 400 },
        { id: 'item44', name: '歯ブラシセット', unitPrice: 600 },
        { id: 'item45', 'name': 'ウェットティッシュ', unitPrice: 250 },
        { id: 'item46', name: 'ペンスタンド', unitPrice: 900 },
        { id: 'item47', name: '付箋メモ', unitPrice: 350 },
        { id: 'item48', name: 'USBハブ', unitPrice: 1000 },
        { id: 'item49', name: '多機能ペン', unitPrice: 1100 },
        { id: 'item50', name: 'ミニノート', unitPrice: 500 }
    ];

    const noveltyListContainer = document.querySelector('.novelty-list-container');
    const selectedNoveltiesList = document.getElementById('selectedNoveltiesList');
    const totalItemsSpan = document.getElementById('totalItems');
    const totalAmountSpan = document.getElementById('totalAmount');
    const noveltyOrderForm = document.getElementById('noveltyOrderForm');

    const selectedItems = {}; // 選択されたノベルティとその数量、単価を保持するオブジェクト

    // ノベルティリストを動的に生成
    function createNoveltyItems() {
        noveltyData.forEach(novelty => {
            const noveltyItemDiv = document.createElement('div');
            noveltyItemDiv.classList.add('novelty-item');

            const label = document.createElement('label');
            label.setAttribute('for', novelty.id);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = novelty.id;
            checkbox.name = 'novelty';
            checkbox.value = novelty.id;

            const spanName = document.createElement('span');
            spanName.textContent = novelty.name;

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.min = '1';
            quantityInput.value = '1'; // 初期値
            quantityInput.classList.add('quantity-input');
            quantityInput.id = `qty-${novelty.id}`;
            quantityInput.placeholder = '数量';
            quantityInput.style.display = 'none'; // 初期状態では非表示

            const itemSubtotalSpan = document.createElement('span');
            itemSubtotalSpan.classList.add('item-subtotal');
            itemSubtotalSpan.id = `subtotal-${novelty.id}`;
            itemSubtotalSpan.textContent = ''; // 初期状態では空

            label.appendChild(checkbox);
            label.appendChild(spanName);
            noveltyItemDiv.appendChild(label);
            noveltyItemDiv.appendChild(quantityInput);
            noveltyItemDiv.appendChild(itemSubtotalSpan);
            noveltyListContainer.appendChild(noveltyItemDiv);

            // チェックボックスの変更イベント
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    quantityInput.style.display = 'block'; // 表示
                    quantityInput.value = '1'; // チェック時に数量を1にリセット
                    selectedItems[novelty.id] = {
                        name: novelty.name,
                        quantity: 1,
                        unitPrice: novelty.unitPrice
                    };
                } else {
                    quantityInput.style.display = 'none'; // 非表示
                    delete selectedItems[novelty.id]; // 選択から削除
                }
                updateSummary();
                updateSelectedNoveltiesDisplay();
            });

            // 数量入力の変更イベント
            quantityInput.addEventListener('input', function() {
                let quantity = parseInt(this.value);
                if (isNaN(quantity) || quantity < 1) {
                    quantity = 0; // 不正な値は0として扱うか、エラー表示
                    this.value = ''; // 入力欄をクリア
                }
                if (selectedItems[novelty.id]) {
                    selectedItems[novelty.id].quantity = quantity;
                }
                updateSummary();
                updateSelectedNoveltiesDisplay();
            });
        });
    }

    // 合計数量と合計金額を更新
    function updateSummary() {
        let totalItems = 0;
        let totalAmount = 0;

        for (const id in selectedItems) {
            const item = selectedItems[id];
            totalItems += item.quantity;
            totalAmount += item.quantity * item.unitPrice;

            // 各アイテムの小計を更新
            const itemSubtotalSpan = document.getElementById(`subtotal-${id}`);
            if (itemSubtotalSpan) {
                itemSubtotalSpan.textContent = `${(item.quantity * item.unitPrice).toLocaleString()} 円`;
            }
        }

        totalItemsSpan.textContent = totalItems;
        totalAmountSpan.textContent = totalAmount.toLocaleString();
    }

    // 選択されたノベルティのリストを更新
    function updateSelectedNoveltiesDisplay() {
        selectedNoveltiesList.innerHTML = ''; // 一旦クリア

        for (const id in selectedItems) {
            const item = selectedItems[id];
            if (item.quantity > 0) { // 数量が0より大きいもののみ表示
                const li = document.createElement('li');
                li.textContent = `${item.name}: ${item.quantity} 個 (${(item.quantity * item.unitPrice).toLocaleString()} 円)`;
                selectedNoveltiesList.appendChild(li);
            }
        }
    }

    // フォーム送信イベント
    document.addEventListener('DOMContentLoaded', function() {
    // ... (既存のnoveltyData配列やconst定義などはそのまま) ...

    // ★ここに、先ほどデプロイしたGoogle Apps ScriptのウェブアプリURLを貼り付けてください★
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/a/macros/g-backs.com/s/AKfycbxDGoltRXnWrUaJVpGddzDX4p9xqJVV-iAOqE5QF4IKg2P-KOrcTWXLrgsMdeNmTeCB/exec"; 

    // ... (createNoveltyItems(), updateSummary(), updateSelectedNoveltiesDisplay()関数もそのまま) ...

    // フォーム送信イベント
    noveltyOrderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // デフォルトの送信を防止

        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const contact = document.getElementById('contact').value;
        const notes = document.getElementById('notes').value;

        // 必須項目のチェック
        if (!name || !department || !contact) {
            alert('氏名、部署名、連絡先は必須項目です。');
            return;
        }

        // 選択されたノベルティの確認
        if (Object.keys(selectedItems).length === 0 || totalItemsSpan.textContent === '0') {
            alert('ノベルティを1つ以上選択し、数量を入力してください。');
            return;
        }

        // ノベルティ詳細をまとめて一つの文字列にする
        let orderDetailsText = '';
        let hasSelectedNovelty = false;
        for (const id in selectedItems) {
            const item = selectedItems[id];
            if (item.quantity > 0) {
                orderDetailsText += `${item.name}: ${item.quantity} 個 (${(item.quantity * item.unitPrice).toLocaleString()} 円)\n`;
                hasSelectedNovelty = true;
            }
        }

        if (!hasSelectedNovelty) {
             alert('ノベルティを1つ以上選択し、数量を入力してください。');
             return;
        }
        
        // 合計金額を数値として取得
        const totalAmountNum = parseFloat(totalAmountSpan.textContent.replace(/,/g, ''));


        // Google Apps Scriptに送るデータを用意
        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('department', department);
        formDataToSend.append('contact', contact);
        formDataToSend.append('notes', notes);
        formDataToSend.append('orderDetails', orderDetailsText); // ノベルティ詳細を文字列で送信
        formDataToSend.append('totalAmount', totalAmountNum); // 合計金額を数値で送信

        // 確認ダイアログ（これはユーザーに見せる最終確認）
        let confirmationMessage = `--- 発注内容確認 ---\n`;
        confirmationMessage += `氏名: ${name}\n`;
        confirmationMessage += `部署名: ${department}\n`;
        confirmationMessage += `連絡先: ${contact}\n\n`;
        confirmationMessage += `--- ノベルティ詳細 ---\n${orderDetailsText}\n`;
        confirmationMessage += `合計選択ノベルティ数: ${totalItemsSpan.textContent}\n`;
        confirmationMessage += `合計金額: ${totalAmountSpan.textContent} 円\n\n`;
        if (notes) {
            confirmationMessage += `備考:\n${notes}\n\n`;
        }
        confirmationMessage += `--------------------\n`;


        if (confirm(confirmationMessage + '\nこの内容で発注しますか？')) {
            // Google Apps Scriptへデータを送信
            fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                body: formDataToSend // FormDataオブジェクトをそのままbodyに設定
            })
            .then(response => response.json()) // JSON形式のレスポンスを解析
            .then(data => {
                if (data.status === 'success') {
                    alert('発注が完了しました。ありがとうございます！');
                    // フォームをリセットする場合
                    noveltyOrderForm.reset();
                    // selectedItemsをクリアし、表示を更新
                    for (const id in selectedItems) {
                        const checkbox = document.getElementById(id);
                        if (checkbox) checkbox.checked = false; // チェックを外す
                        const quantityInput = document.getElementById(`qty-${id}`);
                        if (quantityInput) quantityInput.style.display = 'none'; // 数量入力欄を隠す
                        const subtotalSpan = document.getElementById(`subtotal-${id}`);
                        if (subtotalSpan) subtotalSpan.textContent = ''; // 小計をクリア
                    }
                    Object.keys(selectedItems).forEach(key => delete selectedItems[key]); // selectedItemsを完全にクリア
                    updateSummary();
                    updateSelectedNoveltiesDisplay();

                } else {
                    alert('発注に失敗しました: ' + data.message + ' (詳細は管理者にお問い合わせください)');
                    console.error('Submission error:', data.message);
                }
            })
            .catch(error => {
                alert('通信エラーが発生しました。インターネット接続を確認してください。');
                console.error('Fetch error:', error);
            });
        } else {
            alert('発注をキャンセルしました。');
        }
    });

    // 初期化
    createNoveltyItems();
    updateSummary(); 
    updateSelectedNoveltiesDisplay();
});