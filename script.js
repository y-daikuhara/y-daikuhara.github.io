document.addEventListener('DOMContentLoaded', function() {
    // ノベルティの種類リスト
    const noveltyData = [
        { id: 'item109', name: 'キャンパススクエア保冷トート（Ｓ）' },
        { id: 'item325', name: 'SWAGアイテム　クリアファイル（Gアイコン小）' },
        { id: 'item326', name: 'SAWGアイテム　A5　リングノート　赤' },
        { id: 'item327', name: 'SAWGアイテム　A5　リングノート 青' },
        { id: 'item328', name: 'SAWGアイテム　A5　リングノート　緑' },
        { id: 'item329', name: 'SAWGアイテム　A5　リングノート　黄' },
        { id: 'item334', name: 'SWAGアイテム　ボールペン　ホワイト' },
        { id: 'item552', name: 'アクロボール3' },
        { id: 'item564', name: 'Googleマスク' },
        { id: 'item801', name: 'Swag_リングノートA6　赤(New)' },
        { id: 'item802', name: 'Swag_リングノー-トA6　緑(New)' },
        { id: 'item803', name: 'Swag_リングノートA6-　黄(New)' },
        { id: 'item804', name: 'Swag_リングノートA6　青(New)' },
        { id: 'item805', name: 'Swag_ウェットティッシュ(New)' },
        { id: 'item806', name: 'Swag_ハンドタオル　刺繍ワンポイント' },
        { id: 'item807', name: 'Swag_クリアファイル(New)' },
        { id: 'item1100', name: 'Swag_巾着ポーチ(大)_黒' },
        { id: 'item1103', name: 'Swag_フェアトレードフラットポーチ(Gロゴ)' },
        { id: 'item1104', name: 'Swag_トートバック（黒）' },
        { id: 'item1112', name: 'Swag_スマホクリーナー(Gロゴ)_グレー' },
        { id: 'item1404', name: 'Google バラマキ SWAG 風船' },
        { id: 'item1405', name: 'Google バラマキ SWAG ステッカー' },
        { id: 'item1415', name: 'Google pixel ロゴ入り成約ノベルティ（カラーホワイト）BOXティッシュ' },
        { id: 'item1417', name: 'Google pixel 9/9Pro バラマキノベルティ（うちわ）' },
        { id: 'item1418', name: 'Google pixel 9/ 成約ノベルティ（スマホネックストラップ）' },
        { id: 'item1419', name: 'Google A4 ファイルケース　カラー赤（ラウンダー用）' },
        { id: 'item1420', name: 'Google A4 ファイルケース　カラー黄（ラウンダー用）' },
        { id: 'item1421', name: 'Google A4 ファイルケース　カラー緑（ラウンダー用）' },
        { id: 'item1422', name: 'Google A4 ファイルケース　カラー青（ラウンダー用）' },
        { id: 'item1423', name: 'Google pixel ロゴ入り　バラマキノベルティ（クールシート）' },
        { id: 'item1424', name: 'Google pixel 9 pro KV ビジュアル　バラマキノベルティ（クールシート）' },
        { id: 'item1425', name: 'Google pixel ロゴ入り成約ノベルティ（カラーホワイト）' },
        { id: 'item1490', name: 'Google Pixel POP Socket （成約ノベルティ）' },
        { id: 'item1495', name: 'Google Gマークステッカー' },
        { id: 'item1496', name: 'Swag_サーモステンレスボトル(シルバー)' },
        { id: 'item1497', name: 'Swag_サーモステンレスボトル(黒)' },
        { id: 'item1498', name: 'Swag_サーモステンレスボトル(白)' },
        { id: 'item1499', name: 'Swag_サーモステンレスボトル(ネイビー)' },
        { id: 'item1500', name: 'Swag_サーモステンレスボトル(ピンク)' },
        { id: 'item1501', name: 'ポップソケッツ(Gマーク)' },
        { id: 'item1502', name: 'ポップソケッツ(Gマーク)なし' },
        { id: 'item1531', name: 'Swag_スマホクリーナー(Google Pixel)_ホワイト' },
        { id: 'item1532', name: '2025_Google Pixelカレンダー' },
        { id: 'item1564', name: 'Pixel 9a ピンバッジ' },
        { id: 'item1565', name: 'Pixel 9a PVCポーチ(Iris)' },
        { id: 'item1566', name: 'Pixel 9a ハンドストラップ' },
        { id: 'item1556', name: 'BOXティッシュ' }
    ];

    // エリアの選択肢リスト
    const areaOptions = [
        '--- 選択してください ---',
        '東日本① RSS',
        '東日本② RSS',
        '中部 RSS',
        '関西 RSS',
        '西日本 RSS',
        'CST',
        '東日本① TSM',
        '東日本② TSM',
        '中部関西 TSM',
        '西日本 TSM',
        'DSM',
        '事務局'
    ];

    // 実施キャリアの選択肢リスト
    const carrierOptions = [
        '--- 選択してください ---',
        'KDDI',
        'Softbank',
        'docomo',
        'その他'
    ];

    // 種別の選択肢リストを追加
    const categoryOptions = [
        '--- 選択してください ---',
        'イベント',
        '販売支援（イベント以外）',
        'その他'
    ];

    // 希望備品の選択肢リストを追加
    const desiredEquipmentOptions = [
        '--- 選択してください ---',
        'イベント什器',
        'バナー',
        '端末(次の設問で個数を記載すること)',
        '衣類(ジャンバーなど貸し出し可能な場合は事前に相談すること)',
        'その他'
    ];


    // HTMLの各部分とJavaScriptを連携させるための準備
    const noveltyListContainer = document.querySelector('.novelty-list-container');
    const selectedNoveltiesList = document.getElementById('selectedNoveltiesList');
    const totalItemsSpan = document.getElementById('totalItems');
    const noveltyOrderForm = document.getElementById('noveltyOrderForm');
    const areaSelect = document.getElementById('area');
    const carrierSelect = document.getElementById('carrier');
    const categorySelect = document.getElementById('category'); // 種別のselect要素を取得
    const desiredEquipmentSelect = document.getElementById('desiredEquipment'); // 希望備品のselect要素を取得

    // ★ここに、Google Apps ScriptのウェブアプリURLを貼り付けてください★
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/a/macros/g-backs.com/s/AKfycbz6Xt5OX6PMz3qWVJiOHvH08kPWpUk9671DSpYubRxF6qhCcjz11_ZGo1fkuNjNSZLs/exec"; 

    // ユーザーが選択したノベルティとその数量を保存する場所
    const selectedItems = {}; 

    // ノベルティのリスト（チェックボックスと数量入力欄）を自動で作る関数
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
            quantityInput.value = '1'; 
            quantityInput.classList.add('quantity-input');
            quantityInput.id = `qty-${novelty.id}`;
            quantityInput.placeholder = '数量';
            quantityInput.style.display = 'none';

            label.appendChild(checkbox);
            label.appendChild(spanName);
            noveltyItemDiv.appendChild(label);
            noveltyItemDiv.appendChild(quantityInput);
            noveltyListContainer.appendChild(noveltyItemDiv);

            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    quantityInput.style.display = 'block';
                    quantityInput.value = '1';
                    selectedItems[novelty.id] = {
                        name: novelty.name,
                        quantity: 1,
                    };
                } else {
                    quantityInput.style.display = 'none';
                    delete selectedItems[novelty.id];
                }
                updateSummary();
                updateSelectedNoveltiesDisplay();
            });

            quantityInput.addEventListener('input', function() {
                let quantity = parseInt(this.value);
                if (isNaN(quantity) || quantity < 1) {
                    quantity = 0;
                    this.value = '';
                }
                if (selectedItems[novelty.id]) {
                    selectedItems[novelty.id].quantity = quantity;
                }
                updateSummary();
                updateSelectedNoveltiesDisplay();
            });
        });
    }

    // エリアの選択肢を生成する関数
    function createAreaOptions() {
        areaOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === '--- 選択してください ---' ? '' : optionText;
            option.textContent = optionText;
            if (optionText === '--- 選択してください ---') {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            areaSelect.appendChild(option);
        });
    }

    // 実施キャリアの選択肢を生成する関数
    function createCarrierOptions() {
        carrierOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === '--- 選択してください ---' ? '' : optionText;
            option.textContent = optionText;
            if (optionText === '--- 選択してください ---') {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            carrierSelect.appendChild(option);
        });
    }

    // 種別の選択肢を生成する関数を新しく追加
    function createCategoryOptions() {
        categoryOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === '--- 選択してください ---' ? '' : optionText;
            option.textContent = optionText;
            if (optionText === '--- 選択してください ---') {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            categorySelect.appendChild(option);
        });
    }

    // 希望備品の選択肢を生成する関数を新しく追加
    function createDesiredEquipmentOptions() {
        desiredEquipmentOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === '--- 選択してください ---' ? '' : optionText;
            option.textContent = optionText;
            if (optionText === '--- 選択してください ---') {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            desiredEquipmentSelect.appendChild(option);
        });
    }

    // 合計の数量を計算して表示を更新する関数
    function updateSummary() {
        let totalItems = 0;

        for (const id in selectedItems) {
            const item = selectedItems[id];
            totalItems += item.quantity;
        }

        totalItemsSpan.textContent = totalItems;
    }

    // 選択されたノベルティのリストを下のボックスに表示する関数
    function updateSelectedNoveltiesDisplay() {
        selectedNoveltiesList.innerHTML = '';

        for (const id in selectedItems) {
            const item = selectedItems[id];
            if (item.quantity > 0) {
                const li = document.createElement('li');
                li.textContent = `${item.name}: ${item.quantity} 個`; 
                selectedNoveltiesList.appendChild(li);
            }
        }
    }

    // フォームの「発注内容を確認」ボタンが押されたときの動作
    noveltyOrderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 発注者情報を取得
        const area = document.getElementById('area').value; 
        const carrier = document.getElementById('carrier').value;
        const name = document.getElementById('name').value;
        const primaryAgency = document.getElementById('primaryAgency').value;
        const secondaryAgency = document.getElementById('secondaryAgency').value;
        const storeName = document.getElementById('storeName').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const category = document.getElementById('category').value; // 新しく追加
        const background = document.getElementById('background').value;
        const requester = document.getElementById('requester').value;
        const salesTarget = document.getElementById('salesTarget').value;
        const itemDetails = document.getElementById('itemDetails').value;
        const desiredEquipment = document.getElementById('desiredEquipment').value; // 新しく追加
        const shippingZipCode = document.getElementById('shippingZipCode').value;
        const shippingAddress = document.getElementById('shippingAddress').value;
        const shippingContactPerson = document.getElementById('shippingContactPerson').value;
        const shippingPhoneNumber = document.getElementById('shippingPhoneNumber').value;
        const deliveryDate = document.getElementById('deliveryDate').value; 
        const otherNotes = document.getElementById('otherNotes').value;


        // 必須項目のチェック (種別と希望備品も追加)
        if (!area || !carrier || !name || !storeName || !startDate || !endDate || !category || !background || !requester || !shippingAddress || !shippingContactPerson || !shippingPhoneNumber || !deliveryDate || !desiredEquipment) {
            alert('必須項目が入力されていません。ご確認ください。');
            return; 
        }

        // ノベルティが選ばれているかチェック
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
                orderDetailsText += `${item.name}: ${item.quantity} 個\n`; 
                hasSelectedNovelty = true;
            }
        }

        if (!hasSelectedNovelty) {
             alert('ノベルティを1つ以上選択し、数量を入力してください。');
             return;
        }
        
        // Google Apps Scriptに送るデータを用意
        const formDataToSend = new FormData();
        formDataToSend.append('area', area);
        formDataToSend.append('carrier', carrier);
        formDataToSend.append('name', name);
        formDataToSend.append('primaryAgency', primaryAgency);
        formDataToSend.append('secondaryAgency', secondaryAgency);
        formDataToSend.append('storeName', storeName);
        formDataToSend.append('startDate', startDate);
        formDataToSend.append('endDate', endDate);
        formDataToSend.append('category', category); // 新しく追加
        formDataToSend.append('background', background);
        formDataToSend.append('requester', requester);
        formDataToSend.append('salesTarget', salesTarget);
        formDataToSend.append('itemDetails', itemDetails);
        formDataToSend.append('desiredEquipment', desiredEquipment); // 新しく追加
        formDataToSend.append('shippingZipCode', shippingZipCode);
        formDataToSend.append('shippingAddress', shippingAddress);
        formDataToSend.append('shippingContactPerson', shippingContactPerson);
        formDataToSend.append('shippingPhoneNumber', shippingPhoneNumber);
        formDataToSend.append('deliveryDate', deliveryDate);
        formDataToSend.append('otherNotes', otherNotes);
        formDataToSend.append('orderDetails', orderDetailsText);


        // 確認ダイアログ
        let confirmationMessage = `--- 発注内容確認 ---\n`;
        confirmationMessage += `エリア: ${area}\n`;
        confirmationMessage += `実施キャリア: ${carrier}\n`;
        confirmationMessage += `名前: ${name}\n`;
        confirmationMessage += `一次代理店名: ${primaryAgency}\n`;
        confirmationMessage += `二次代理店名: ${secondaryAgency}\n`;
        confirmationMessage += `店舗名: ${storeName}\n`;
        confirmationMessage += `実施期間（開始予定日〜）: ${startDate}\n`;
        confirmationMessage += `実施期間（〜返却予定日）: ${endDate}\n`;
        confirmationMessage += `種別: ${category}\n`; // 新しく追加
        confirmationMessage += `実施背景: ${background}\n`;
        confirmationMessage += `依頼者: ${requester}\n`;
        confirmationMessage += `販売目標: ${salesTarget}\n`;
        confirmationMessage += `端末の場合の機種名と希望数・衣類の種類のサイズと個数を記載: \n${itemDetails}\n`;
        confirmationMessage += `希望備品（イベント什器、バナー、端末、など具体的に）: ${desiredEquipment}\n`; // 新しく追加
        confirmationMessage += `発送先　郵便番号: ${shippingZipCode}\n`;
        confirmationMessage += `発送先　住所: ${shippingAddress}\n`;
        confirmationMessage += `発送先　担当者: ${shippingContactPerson}\n`;
        confirmationMessage += `発送先　電話番号: ${shippingPhoneNumber}\n`;
        confirmationMessage += `納期希望日: ${deliveryDate}\n`;
        confirmationMessage += `その他: ${otherNotes}\n\n`;
        confirmationMessage += `--- ノベルティ詳細 ---\n${orderDetailsText}\n`;
        confirmationMessage += `合計選択ノベルティ数: ${totalItemsSpan.textContent}\n`;
        confirmationMessage += `--------------------\n`;


        if (confirm(confirmationMessage + '\nこの内容で発注しますか？')) {
            fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                body: formDataToSend 
            })
            .then(response => response.json()) 
            .then(data => {
                if (data.status === 'success') {
                    alert('発注が完了しました。ありがとうございます！');
                    noveltyOrderForm.reset();
                    // select要素も初期値に戻す
                    areaSelect.value = ''; 
                    carrierSelect.value = '';
                    categorySelect.value = ''; // 新しく追加
                    desiredEquipmentSelect.value = ''; // 新しく追加

                    for (const id in selectedItems) {
                        const checkbox = document.getElementById(id);
                        if (checkbox) checkbox.checked = false; 
                        const quantityInput = document.getElementById(`qty-${id}`);
                        if (quantityInput) quantityInput.style.display = 'none'; 
                    }
                    Object.keys(selectedItems).forEach(key => delete selectedItems[key]); 
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

    // 初期化時に各種選択肢を生成
    createNoveltyItems();
    updateSummary(); 
    updateSelectedNoveltiesDisplay();
    createAreaOptions(); 
    createCarrierOptions(); 
    createCategoryOptions(); // 種別の選択肢生成関数を呼び出す
    createDesiredEquipmentOptions(); // 希望備品の選択肢生成関数を呼び出す
});
