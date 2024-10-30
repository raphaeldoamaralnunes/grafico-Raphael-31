const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(grafico, {
    type: "pie",
    data: {
        labels: [
            "Instagram",
            "WhatsApp",
            "Facebook",
            "WeChat",
            "TikTok",
            "DouYin",
            "Twitter",
            "Telegram",
            "FB Messenger",
            "LINE"
        ],
        datasets: [{
            data:[
                16.5,
                16.1,
                12.8,
                12.8,
                7.4,
                6.6,
                3.2,
                2.4,
                2.3,
                1.7
            ],
            backgroundColor: [
                "#14E332",
                "#E3AC14",
                "#2B392D",
                "#2B392D",
                "#3B4463",
                "#8E3C50",
                "#8E783C",
                "#1441E3",
                "#E31447",
                "#374FA3",
                "#3C8E48"
            ]
        }]
    }
}
)
