const grafico = document.getElementById('myChart').getContext("2d");
var meuGrafico = new Chart(grafico,{
    type:"pie",
    date: {
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
        ]
    }
}
)