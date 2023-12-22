import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  interface Player {
    id: number;
    name: string;
    position: number;
  }
  const battingNums = [
    { order: "firstHitter" },
    { order: "secoundHitter" },
    { order: "thirdHitter" },
    { order: "fourthHitter" },
    { order: "fifthHitter" },
    { order: "sixthHitter" },
    { order: "seventhHitter" },
    { order: "eightHitter" },
    { order: "ninthHitter" },
  ];
  const positions = [
    { positionName: "捕", positionNum: 2 },
    { positionName: "一", positionNum: 3 },
    { positionName: "二", positionNum: 4 },
    { positionName: "三", positionNum: 5 },
    { positionName: "遊", positionNum: 6 },
    { positionName: "左", positionNum: 7 },
    { positionName: "中", positionNum: 8 },
    { positionName: "右", positionNum: 9 },
    { positionName: "指", positionNum: 10 },
  ];
  const players: Player[] = [
    { id: 1, name: "山本由伸", position: 1 },
    { id: 2, name: "宮城大弥", position: 1 },
    { id: 3, name: "山岡泰輔", position: 1 },
    { id: 4, name: "山下舜平太", position: 1 },
    { id: 5, name: "若月健矢", position: 2 },
    { id: 6, name: "森友哉", position: 2 },
    { id: 6, name: "頓宮裕真", position: 3 },
    { id: 6, name: "セデーニョ", position: 3 },
    { id: 6, name: "安達了一", position: 4 },
    { id: 6, name: "宜保翔", position: 4 },
    { id: 6, name: "宗佑磨", position: 5 },
    { id: 6, name: "西野真弘", position: 5 },
    { id: 6, name: "紅林弘太郎", position: 6 },
    { id: 6, name: "野口智哉", position: 6 },
    { id: 6, name: "福田周平", position: 7 },
    { id: 6, name: "佐野皓大", position: 7 },
    { id: 6, name: "中川圭太", position: 8 },
    { id: 6, name: "茶野篤政", position: 8 },
    { id: 6, name: "杉本裕太郎", position: 9 },
    { id: 6, name: "小田裕也", position: 9 },
  ];

  const batters = players.filter((player) => {
    return player.position !== 1;
  });
  const pitchers = players.filter((player) => {
    return player.position === 1;
  });

  const [battingOrder, setBattingOrder] = useState({});
  const [positionOrder, setPositionOrder] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("TEST");
  };

  const changeBattingOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBattingOrder({ ...battingOrder, [e.target.name]: e.target.value });
  };
  const changePositionOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPositionOrder({ ...positionOrder, [e.target.name]: e.target.value });
    console.log(positionOrder);
  };
  return (
    <main>
      <div>
        <p>テスト</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          {battingNums.map((battingNum, key) => {
            return (
              <div>
                <a href="">{key + 1}</a>
                <select
                  name={battingNum.order}
                  onChange={(e) => changeBattingOrder(e)}
                >
                  <option value="">選択してください</option>
                  {batters.map((batter) => {
                    return <option value={batter.name}>{batter.name}</option>;
                  })}
                </select>
                <select
                  name={battingNum.order}
                  onChange={(e) => changePositionOrder(e)}
                >
                  <option value="">未選択</option>
                  {positions.map((position) => {
                    return (
                      <option value={position.positionNum}>
                        {position.positionName}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}
          <div>
            <select name="pitcher">
              {pitchers.map((pitcher) => {
                return <option value={pitcher.id}>{pitcher.name}</option>;
              })}
            </select>
          </div>
          <input type="submit" value="送信" />
        </form>
      </div>
    </main>
  );
}
