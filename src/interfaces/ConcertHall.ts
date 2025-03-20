export default interface ConcertHall {
    施設名: string; // 施設名
    都道府県: string; // 都道府県
    市区町村: string; // 市区町村
    番地以下: string; // 番地以下
    URL: string; // URL
    分類: string; // 分類
    最寄駅路線: string; // 最寄駅路線
    最寄駅: string; // 最寄駅
    最寄駅徒歩: number; // 最寄駅徒歩[分]
    舞台奥行: number; // 舞台奥行[m]
    舞台幅: number; // 舞台幅[m]
    客席数: number; // 客席数[人]
    駐車場: string; // 駐車場
    ピアノ有無: boolean; // ピアノ有無
    譜面台貸出: boolean; // 譜面台貸出
    親子室: boolean; // 親子室
    経度: number; // 経度
    緯度: number; // 緯度
    備考: string; // 備考
  }