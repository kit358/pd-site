function recommend() {
    const sweet = document.getElementById("sweet").value;
    const result = document.getElementById("result");

    if (!sweet) {
        result.textContent = "スイーツを選んでください。";
        return;
    }

    // ★実験データに基づくおすすめ表（自由に編集可能）
    const data = {
        donut: "コーヒー（実験後ランキング1位：ドーナツ×コーヒー）",
        castella: "紅茶",
        choux: "牛乳",
        cake: "コーヒー",
        daifuku: "お茶（※大福×リンゴジュースは不人気）"
    };

    result.textContent = "おすすめの飲み物： " + data[sweet];
}
