import xlsx from "xlsx";
import yaml from "js-yaml";
import fs from "fs";

/**
 * Excelファイルを読み込み、各行をYAML配列として出力します。
 * プロパティ名は列ヘッダーを使用します。
 *
 * @param {string} inputFile - 入力するExcelファイルのパス
 * @param {string} [outputFile] - 出力するYAMLファイルのパス（省略可能）
 */
function excelToYaml(inputFile, outputFile) {
  try {
    // Excelファイルを読み込む
    const workbook = xlsx.readFile(inputFile);

    // 最初のシートを取得
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // シートをJSONオブジェクトの配列に変換
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // JSONをYAML形式に変換
    let yamlData = yaml.dump(jsonData, {
      indent: 2,
      lineWidth: -1, // 行の折り返しを無効化
      noRefs: true, // 循環参照の処理
      noCompatMode: true,
      sortKeys: false, // キーのソートを無効化
      
    });

    yamlData = yamlData.replaceAll("- 施設名", "\n- 施設名").trimStart();

    // 結果を出力
    if (outputFile) {
      fs.writeFileSync(outputFile, yamlData, "utf8");
      console.log(`YAMLデータを ${outputFile} に保存しました。`);
    } else {
      console.log(yamlData);
    }
  } catch (error) {
    console.error(`エラーが発生しました: ${error.message}`);
    process.exit(1);
  }
}

// コマンドライン引数を処理
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log(
      "使用方法: node excel-to-yaml.js <Excelファイル> [YAMLファイル]"
    );
    process.exit(1);
  }

  const inputFile = args[0];
  const outputFile = args[1]; // 指定がなければundefined

  excelToYaml(inputFile, outputFile);
}

// スクリプトが直接実行された場合にmain関数を呼び出す
main();
