import { useState } from "react";
import { useForm } from "react-hook-form";
import { battingNums, positions, players } from "@/data/createOrder";

type Form = {
  firstHitter: string;
};

export default function Home() {
  interface Player {
    id: number;
    name: string;
    position: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const batters = players.filter((player) => {
    return player.position !== 1;
  });
  const batterNames = batters.map((batter) => batter.name);

  const pitchers = players.filter((player) => {
    return player.position === 1;
  });

  const [battingOrder, setBattingOrder] = useState({});
  const [positionOrder, setPositionOrder] = useState({});

  const test = "TEST";

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("TEST");
  };

  const changeBattingOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBattingOrder({ ...battingOrder, [e.target.name]: e.target.value });
    console.log(battingOrder);
  };
  const changePositionOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPositionOrder({ ...positionOrder, [e.target.name]: e.target.value });
    console.log(positionOrder);
  };
  return (
    <main>
      <div>
        <p>テスト</p>
        <form onSubmit={(e) => submit(e)}>
          {battingNums.map((battingNum, key) => {
            return (
              <div className="flex justify-between w-[280px] mb-4">
                <span>{key + 1}</span>
                <select
                  // name={battingNum.order}
                  // onChange={(e) => changeBattingOrder(e)}
                  {...register("firstHitter", {
                    required: "必須入力",
                    maxLength: {
                      value: 50,
                      message: "最大50文字です",
                    },
                  })}
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
                        {position.name}
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
