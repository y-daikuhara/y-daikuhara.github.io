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

    // 各ドロップダウンの選択肢リストを定義
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

    const carrierOptions = [
        '--- 選択してください ---',
        'KDDI',
        'Softbank',
        'docomo',
        'その他'
    ];

    const categoryOptions = [
        '--- 選択してください ---',
        'イベント',
        '販売支援（イベント以外）',
        'その他'
    ];

    // 「希望備品」はHTMLに項目がないため、一旦コメントアウトまたは削除します。
    // もし後で項目追加があれば、このリストも追加してください。
    /*
    const desiredEquipmentOptions = [
        '--- 選択してください ---',
        'イベント什器',
        'バナー',
        '端末(次の設問で個数を記載すること)',
        '衣類(ジャンバーなど貸し出し可能な場合は事前に相談すること)',
        'その他'
    ];
    */

    // HTML要素の取得
    const noveltyListContainer = document.querySelector('.novelty-list-container');
    const selectedNoveltiesList = document.getElementById('selectedNoveltiesList');
    const totalItemsSpan = document.getElementById('totalItems');
    const noveltyOrderForm = document.getElementById('noveltyOrderForm');
    const areaSelect = document.getElementById('area');
    const carrierSelect = document.getElementById('carrier');
    const categorySelect = document.getElementById('category');
    // const desiredEquipmentSelect = document.getElementById('desiredEquipment'); // 希望備品のselect要素はHTMLから削除されたため、ここも削除

    // ★ここに、Google Apps ScriptのウェブアプリURLを貼り付けてください★
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyqNzhuTSkgYXBaqgXb6uK9QoHPF-2AgQdI_GKgi35mDYbZoJXkWge7eam1d07nkeStmw/exec"; 

    const selectedItems = {}; 

    // ノベルティリストの生成
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

    // ドロップダウン選択肢を生成するヘルパー関数
    function populateSelectOptions(selectElement, optionsArray) {
        optionsArray.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText === '--- 選択してください ---' ? '' : optionText;
            option.textContent = optionText;
            if (optionText === '--- 選択してください ---') {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            selectElement.appendChild(option);
        });
    }

    // 各ドロップダウンの選択肢を生成する関数
    function createAreaOptions() { populateSelectOptions(areaSelect, areaOptions); }
    function createCarrierOptions() { populateSelectOptions(carrierSelect, carrierOptions); }
    function createCategoryOptions() { populateSelectOptions(categorySelect, categoryOptions); }
    // function createDesiredEquipmentOptions() { populateSelectOptions(desiredEquipmentSelect, desiredEquipmentOptions); } // 希望備品の関数も削除

    // 合計数量の更新
    function updateSummary() {
        let totalItems = 0;
        for (const id in selectedItems) {
            const item = selectedItems[id];
            totalItems += item.quantity;
        }
        totalItemsSpan.textContent = totalItems;
    }

    // 選択されたノベルティのリスト表示を更新
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

    // フォーム送信イベント
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
        const category = document.getElementById('category').value;
        const background = document.getElementById('background').value;
        const requester = document.getElementById('requester').value;
        const salesTarget = document.getElementById('salesTarget').value;
        const itemDetails = document.getElementById('itemDetails').value;
        // 希望備品はHTMLから削除されたため、ここも削除
        // const desiredEquipment = document.getElementById('desiredEquipment').value; 
        const shippingZipCode = document.getElementById('shippingZipCode').value;
        const shippingAddress = document.getElementById('shippingAddress').value;
        const shippingContactPerson = document.getElementById('shippingContactPerson').value;
        const shippingPhoneNumber = document.getElementById('shippingPhoneNumber').value;
        const deliveryDate = document.getElementById('deliveryDate').value; 
        const otherNotes = document.getElementById('otherNotes').value;

        // ノベルティが選ばれているかチェック（必須項目ではなくなりましたが、選ばれていないと詳細が空になるため）
        if (Object.keys(selectedItems).length === 0 || totalItemsSpan.textContent === '0') {
            alert('ノベルティを1つ以上選択し、数量を入力してください。');
            return;
        }

        // ノベルティ詳細をまとめて一つの文字列にする
        let orderDetailsText = '';
        for (const id in selectedItems) {
            const item = selectedItems[id];
            // 数量が0でも含めるか、1以上のみ含めるか、用途に応じて調整
            if (item.quantity > 0) { 
                orderDetailsText += `${item.name}: ${item.quantity} 個\n`; 
            }
        }
        // 全くノベルティが選ばれていない場合も、空の文字列として送信される

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
        formDataToSend.append('category', category);
        formDataToSend.append('background', background);
        formDataToSend.append('requester', requester);
        formDataToSend.append('salesTarget', salesTarget);
        formDataToSend.append('itemDetails', itemDetails);
        // formDataToSend.append('desiredEquipment', desiredEquipment); // 希望備品はHTMLから削除されたため、ここも削除
        formDataToSend.append('shippingZipCode', shippingZipCode);
        formDataToSend.append('shippingAddress', shippingAddress);
        formDataToSend.append('shippingContactPerson', shippingContactPerson);
        formDataToSend.append('shippingPhoneNumber', shippingPhoneNumber);
        formDataToSend.append('deliveryDate', deliveryDate);
        formDataToSend.append('otherNotes', otherNotes);
        formDataToSend.append('noveltyOrderDetails', orderDetailsText); // Googleフォームの項目名に合わせて変更


        // 確認ダイアログ
        let confirmationMessage = `--- 発注内容確認 ---\n`;
        confirmationMessage += `エリア: ${area || '(未入力)'}\n`; // 未入力の場合は(未入力)と表示
        confirmationMessage += `実施キャリア: ${carrier || '(未入力)'}\n`;
        confirmationMessage += `名前: ${name || '(未入力)'}\n`;
        confirmationMessage += `一次代理店名: ${primaryAgency || '(未入力)'}\n`;
        confirmationMessage += `二次代理店名: ${secondaryAgency || '(未入力)'}\n`;
        confirmationMessage += `店舗名: ${storeName || '(未入力)'}\n`;
        confirmationMessage += `実施期間（開始予定日〜）: ${startDate || '(未入力)'}\n`;
        confirmationMessage += `実施期間（〜返却予定日）: ${endDate || '(未入力)'}\n`;
        confirmationMessage += `種別: ${category || '(未入力)'}\n`;
        confirmationMessage += `実施背景: ${background || '(未入力)'}\n`;
        confirmationMessage += `依頼者: ${requester || '(未入力)'}\n`;
        confirmationMessage += `販売目標: ${salesTarget || '(未入力)'}\n`;
        confirmationMessage += `端末の場合の機種名と希望数・衣類の種類のサイズと個数を記載: \n${itemDetails || '(未入力)'}\n`;
        // confirmationMessage += `希望備品（イベント什器、バナー、端末、など具体的に）: ${desiredEquipment || '(未入力)'}\n`; // 希望備品はHTMLから削除されたため、ここも削除
        confirmationMessage += `発送先　郵便番号: ${shippingZipCode || '(未入力)'}\n`;
        confirmationMessage += `発送先　住所: ${shippingAddress || '(未入力)'}\n`;
        confirmationMessage += `発送先　担当者: ${shippingContactPerson || '(未入力)'}\n`;
        confirmationMessage += `発送先　電話番号: ${shippingPhoneNumber || '(未入力)'}\n`;
        confirmationMessage += `納期希望日: ${deliveryDate || '(未入力)'}\n`;
        confirmationMessage += `その他: ${otherNotes || '(未入力)'}\n\n`;
        confirmationMessage += `--- ノベルティ詳細 ---\n${orderDetailsText || '(選択なし)'}\n`; // ノベルティが選択されていない場合も表示
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
                    // フォームをリセット
                    noveltyOrderForm.reset();
                    // select要素も初期値に戻す
                    areaSelect.value = ''; 
                    carrierSelect.value = '';
                    categorySelect.value = ''; 
                    // desiredEquipmentSelect.value = ''; // 希望備品はHTMLから削除されたため、ここも削除

                    // ノベルティ選択状態をクリア
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
    createCategoryOptions(); 
    // createDesiredEquipmentOptions(); // 希望備品の関数も削除
});
