"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stock = [
    {
        "sku": "LTV719449/39/39",
        "stock": 8525
    },
    {
        "sku": "CLQ274846/07/46",
        "stock": 8414
    },
    {
        "sku": "SXB930757/87/87",
        "stock": 3552
    },
    {
        "sku": "PGL751486/42/83",
        "stock": 1484
    },
    {
        "sku": "MRP846986/84/16",
        "stock": 2739
    },
    {
        "sku": "MDH133414/85/14",
        "stock": 7287
    },
    {
        "sku": "HPL673886/40/76",
        "stock": 607
    },
    {
        "sku": "ZCP838287/58/07",
        "stock": 9145
    },
    {
        "sku": "PWX000842/03/47",
        "stock": 8197
    },
    {
        "sku": "XOE089797/10/74",
        "stock": 2226
    },
    {
        "sku": "ENN169733/05/69",
        "stock": 9560
    },
    {
        "sku": "BGZ200017/86/40",
        "stock": 4856
    },
    {
        "sku": "JSZ454994/85/17",
        "stock": 8748
    },
    {
        "sku": "ELK743612/34/57",
        "stock": 6616
    },
    {
        "sku": "CPF246874/77/33",
        "stock": 5363
    },
    {
        "sku": "MQO013465/10/41",
        "stock": 3787
    },
    {
        "sku": "WUU364727/47/81",
        "stock": 3859
    },
    {
        "sku": "DDB197432/70/91",
        "stock": 2810
    },
    {
        "sku": "PRO481716/07/95",
        "stock": 2980
    },
    {
        "sku": "QQO675265/24/21",
        "stock": 7748
    },
    {
        "sku": "SCN373096/15/63",
        "stock": 7915
    },
    {
        "sku": "XEU169192/11/27",
        "stock": 872
    },
    {
        "sku": "RTA872532/57/24",
        "stock": 8252
    },
    {
        "sku": "TVV531854/13/03",
        "stock": 4830
    },
    {
        "sku": "UTF434696/37/18",
        "stock": 7382
    },
    {
        "sku": "YKT849667/75/10",
        "stock": 8355
    },
    {
        "sku": "MQI908424/70/79",
        "stock": 3060
    },
    {
        "sku": "YPU346838/42/51",
        "stock": 2434
    },
    {
        "sku": "ZES180290/58/46",
        "stock": 777
    },
    {
        "sku": "ZZY781086/99/42",
        "stock": 1996
    },
    {
        "sku": "EDI062104/16/63",
        "stock": 5995
    },
    {
        "sku": "QWP084011/40/33",
        "stock": 2256
    },
    {
        "sku": "FKO136294/98/95",
        "stock": 7252
    },
    {
        "sku": "OVY768503/84/79",
        "stock": 8501
    },
    {
        "sku": "SMJ806557/56/05",
        "stock": 6463
    },
    {
        "sku": "SJH146913/58/03",
        "stock": 2219
    },
    {
        "sku": "JKF995902/28/73",
        "stock": 941
    },
    {
        "sku": "IQZ340003/37/30",
        "stock": 1811
    },
    {
        "sku": "OPC383154/11/25",
        "stock": 9453
    },
    {
        "sku": "QPD162093/97/59",
        "stock": 9191
    },
    {
        "sku": "WNG145754/36/02",
        "stock": 8798
    },
    {
        "sku": "SXK331510/08/41",
        "stock": 5085
    },
    {
        "sku": "LLG964262/20/67",
        "stock": 4109
    },
    {
        "sku": "BAJ526361/18/08",
        "stock": 9840
    },
    {
        "sku": "YGH750695/17/53",
        "stock": 4181
    },
    {
        "sku": "LCF762340/73/78",
        "stock": 617
    },
    {
        "sku": "VMH129044/23/71",
        "stock": 7297
    },
    {
        "sku": "RIR591697/29/61",
        "stock": 2430
    },
    {
        "sku": "KDM516407/46/14",
        "stock": 8350
    },
    {
        "sku": "AFF976624/30/90",
        "stock": 8439
    },
    {
        "sku": "QKH540824/67/11",
        "stock": 4761
    },
    {
        "sku": "GKQ314619/44/04",
        "stock": 7819
    },
    {
        "sku": "IZP721309/74/90",
        "stock": 126
    },
    {
        "sku": "OMH974988/04/66",
        "stock": 5218
    },
    {
        "sku": "NDW013510/50/42",
        "stock": 9864
    },
    {
        "sku": "KZK692833/24/76",
        "stock": 7224
    },
    {
        "sku": "MMU823900/96/22",
        "stock": 7725
    },
    {
        "sku": "NAX148363/42/24",
        "stock": 7715
    },
    {
        "sku": "TIN917385/73/82",
        "stock": 6013
    },
    {
        "sku": "GXC407349/62/88",
        "stock": 4769
    },
    {
        "sku": "KPV897515/43/20",
        "stock": 9980
    },
    {
        "sku": "NSW555582/99/27",
        "stock": 5276
    },
    {
        "sku": "TVU730483/47/65",
        "stock": 992
    },
    {
        "sku": "HPX415896/42/97",
        "stock": 9451
    },
    {
        "sku": "KED089097/68/09",
        "stock": 4914
    },
    {
        "sku": "APM103457/39/27",
        "stock": 3026
    },
    {
        "sku": "FZV366142/87/47",
        "stock": 4697
    },
    {
        "sku": "JGH448863/97/72",
        "stock": 6470
    },
    {
        "sku": "HCN631514/18/05",
        "stock": 2226
    },
    {
        "sku": "DHJ381555/46/84",
        "stock": 9361
    },
    {
        "sku": "XZF231780/94/75",
        "stock": 8462
    },
    {
        "sku": "SRF164713/20/36",
        "stock": 6191
    },
    {
        "sku": "WBF948633/60/34",
        "stock": 4058
    },
    {
        "sku": "PQW737989/43/91",
        "stock": 2814
    },
    {
        "sku": "HXL707218/62/28",
        "stock": 7341
    },
    {
        "sku": "TZH873296/06/42",
        "stock": 1126
    },
    {
        "sku": "UMH915687/29/24",
        "stock": 511
    },
    {
        "sku": "SVP461621/17/23",
        "stock": 2501
    },
    {
        "sku": "RCD438149/42/77",
        "stock": 9034
    },
    {
        "sku": "ILJ610772/87/04",
        "stock": 6633
    },
    {
        "sku": "EMN370166/29/48",
        "stock": 857
    },
    {
        "sku": "GPV709367/41/53",
        "stock": 3602
    },
    {
        "sku": "JPT097835/14/99",
        "stock": 2703
    },
    {
        "sku": "KGD740425/40/48",
        "stock": 9097
    },
    {
        "sku": "NMK838808/89/94",
        "stock": 9842
    },
    {
        "sku": "EEB324132/63/63",
        "stock": 7498
    },
    {
        "sku": "OYG464088/98/45",
        "stock": 398
    },
    {
        "sku": "DHJ138836/02/43",
        "stock": 1866
    },
    {
        "sku": "ISF099639/86/90",
        "stock": 4862
    },
    {
        "sku": "DTW874360/97/81",
        "stock": 270
    },
    {
        "sku": "YGU851012/53/29",
        "stock": 4154
    },
    {
        "sku": "ULA310345/04/94",
        "stock": 1868
    },
    {
        "sku": "YON323215/74/41",
        "stock": 7927
    },
    {
        "sku": "DOK019240/66/49",
        "stock": 7709
    },
    {
        "sku": "NPR640416/53/91",
        "stock": 3231
    },
    {
        "sku": "VYM838980/39/17",
        "stock": 4620
    },
    {
        "sku": "SAL508741/19/43",
        "stock": 2245
    },
    {
        "sku": "SXV420098/71/68",
        "stock": 746
    },
    {
        "sku": "TVN783304/18/16",
        "stock": 8079
    },
    {
        "sku": "HGG795032/35/91",
        "stock": 4009
    }
];
exports.default = stock;
//# sourceMappingURL=stock.js.map