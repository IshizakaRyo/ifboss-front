import { useState } from "react";
import { useForm } from "react-hook-form";
import { battingNums, positions, players } from "@/data/createOrder";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>;
}

export default function Home() {
  const batters = players.filter((player) => {
    return player.position !== 1;
  });
  const pitchers = players.filter((player) => {
    return player.position === 1;
  });

  const [battingOrder, setBattingOrder] = useState({});
  const [positionOrder, setPositionOrder] = useState({});
  const gameDetailId = 1;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("TEST");
    console.log(battingOrder);
    console.log(positionOrder);
    console.log(gameDetailId);
  };

  const changeBattingOrder = (battingOrderInput: string) => {
    const inputArray = JSON.parse(battingOrderInput);
    setBattingOrder({ ...battingOrder, [inputArray[0]]: inputArray[1] });
  };

  const changePositionOrder = (positionOrderInput: string) => {
    const inputPositionArray = JSON.parse(positionOrderInput);
    setPositionOrder({
      ...positionOrder,
      [inputPositionArray[0]]: inputPositionArray[1],
    });
  };
  return (
    <main>
      <div>
        <p>テスト</p>
        <form onSubmit={(e) => onSubmit(e)}>
          {battingNums.map((battingNum, key) => {
            return (
              <div className="flex justify-between w-[280px] mb-4">
                <span>{key + 1}</span>

                <SelectForm
                  placeholder="選手名"
                  changeState={(value: string) => changeBattingOrder(value)}
                >
                  {batters.map((batter: any) => {
                    const battingOrderValue = [battingNum.order, batter.name];
                    return (
                      <SelectItem value={JSON.stringify(battingOrderValue)}>
                        {batter.name}
                      </SelectItem>
                    );
                  })}
                </SelectForm>

                <SelectForm
                  placeholder="未選択"
                  changeState={(value: string) => changePositionOrder(value)}
                >
                  {positions.map((position: any) => {
                    const positionOrderValue = [
                      battingNum.order,
                      position.positionNum,
                    ];
                    return (
                      <SelectItem value={JSON.stringify(positionOrderValue)}>
                        {position.name}
                      </SelectItem>
                    );
                  })}
                </SelectForm>
              </div>
            );
          })}
          <div className="flex mb-8 mr-2">
            <span className="mr-2">投</span>
            <SelectForm
              placeholder="選手名"
              changeState={(value: string) => changeBattingOrder(value)}
            >
              {pitchers.map((pitcher) => {
                const battingOrderValue = ["pitchar", pitcher.name];
                return (
                  <SelectItem value={JSON.stringify(battingOrderValue)}>
                    {pitcher.name}
                  </SelectItem>
                );
              })}
            </SelectForm>
          </div>
          <Button variant="outline" type="submit">
            投稿
          </Button>
        </form>
      </div>
    </main>
  );
}

const SelectForm = ({ placeholder, changeState, children }: any) => {
  return (
    <Select onValueChange={changeState}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
};
