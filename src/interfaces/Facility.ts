export default interface Facility {
    施設名: string; // 施設名
    都道府県: string; // 都道府県
    市区町村: string; // 市区町村
    番地以下: string; // 番地以下
    URL: string; // URL
    分類: string; // 分類
    最寄駅路線: string; // 最寄駅路線
    最寄駅: string; // 最寄駅
    最寄駅徒歩: number; // 最寄駅徒歩[分]
    面積: number; // 舞台奥行[m]
    定員: number; // 舞台幅[m]
    駐車場: string; // 駐車場
    ピアノ有無: boolean; // ピアノ有無
    打楽器貸出: boolean; // 譜面台貸出
    譜面台貸出: boolean; // 譜面台貸出
    経度: number; // 経度
    緯度: number; // 緯度
    備考: string; // 備考
  }