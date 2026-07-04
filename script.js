// ==========================================
// WordSprint
// Version 1.0
// ==========================================

const WordSprint = {

    version: "1.0",

    data: {
        streak: 0,
        todayGoal: 50,
        todayLearned: 0,
        totalWords: 0
    },

    init() {
        console.log(`WordSprint v${this.version} Started.`);

        this.loadData();
        this.addEvents();
        this.checkDailyLogin();
    },

    // -------------------------
    // データ保存
    // -------------------------

    saveData() {
        localStorage.setItem("WordSprintData", JSON.stringify(this.data));
    },

    loadData() {

        const saved = localStorage.getItem("WordSprintData");

        if(saved){
            this.data = JSON.parse(saved);
        }
    },

    // -------------------------
    // イベント
    // -------------------------

    addEvents(){

        document.querySelectorAll(".card").forEach(card=>{

            card.addEventListener("click",()=>{

                const page = card.querySelector("h2").textContent;

                switch(page){

                    case "Study":
                        location.href="study.html";
                        break;

                    case "Test":
                        location.href="test.html";
                        break;

                    case "Review":
                        location.href="review.html";
                        break;

                    case "Statistics":
                        location.href="stats.html";
                        break;

                }

            });

        });

    },

    // -------------------------
    // 今日初めて開いたか確認
    // -------------------------

    checkDailyLogin(){

        const today = new Date().toLocaleDateString();

        const last = localStorage.getItem("lastOpen");

        if(last !== today){

            localStorage.setItem("lastOpen",today);

            console.log("Today's first launch!");

        }

    }

};

// 起動
document.addEventListener("DOMContentLoaded",()=>{

    WordSprint.init();

});
