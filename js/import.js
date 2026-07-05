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

　　//読み込み開始アラート
const importButton = document.getElementById("importButton");

importButton.addEventListener("click", function () {
    alert("読み込み開始！");
});

// ===== CSV読み込み =====

importButton.addEventListener("click", readCSV);

function readCSV() {

    if (csvFile.files.length === 0) {
        alert("CSVファイルを選択してください。");
        return;
    }

    const file = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {

        const csvText = event.target.result;

        console.log(csvText);

        document.getElementById("result").textContent = csvText;

    };

    reader.readAsText(file, "UTF-8");

}
