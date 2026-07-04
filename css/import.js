/* ===== リセット ===== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== 全体 ===== */

body {
    font-family: "Yu Gothic UI", "Yu Gothic", sans-serif;
    background-color: #FFF8E7;
    color: #3A3A3A;
    line-height: 1.6;
}

/* ===== Header ===== */

.header {
    background: #FFFDF8;
    border-bottom: 1px solid #E8DDC8;
    padding: 18px 32px;
}

.logo a {
    text-decoration: none;
    color: #3A3A3A;
    font-size: 26px;
    font-weight: bold;
}

/* ===== Main ===== */

.container {
    max-width: 700px;
    margin: 60px auto;
    padding: 0 20px;
}

/* ===== Card ===== */

.import-card,
.result-card {
    background: white;
    border-radius: 18px;
    padding: 35px;
    margin-bottom: 24px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

/* ===== タイトル ===== */

h1 {
    margin-bottom: 10px;
    font-size: 30px;
}

h2 {
    margin-bottom: 18px;
}

.description {
    color: #6F6A63;
    margin-bottom: 25px;
}

/* ===== ファイル ===== */

#csvFile {
    margin-bottom: 18px;
}

#fileName {
    color: #777;
    margin-bottom: 25px;
}

/* ===== ボタン ===== */

#importButton {
    width: 100%;
    padding: 14px;

    border: none;
    border-radius: 12px;

    background: #7FA36B;
    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

#importButton:hover {
    background: #6C9258;
}

/* ===== Result ===== */

#result {
    color: #555;
}
