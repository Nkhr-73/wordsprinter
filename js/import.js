// ===== 要素取得 =====

const csvFile = document.getElementById("csvFile");
const fileName = document.getElementById("fileName");

// ===== イベント =====

csvFile.addEventListener("change", showFileName);

// ===== 関数 =====

// ファイル名を表示する
function showFileName() {

    // ファイルが選択されていない場合
    if (csvFile.files.length === 0) {
        fileName.textContent = "ファイルが選択されていません";
        return;
    }

    // ファイル名を表示
    fileName.textContent = csvFile.files[0].name;
}
