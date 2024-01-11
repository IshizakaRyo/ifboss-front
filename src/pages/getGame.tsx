import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR(
    "http://localhost:8888/penya_atorie/api/baseball/dashbord",
    fetcher
  );
  //   const instance = axios.create({
  //     baseURL: "http://localhost:8888/penya_atorie/",
  //     withCredentials: true,
  //   });
  //   instance.get("sanctum/csrf-cookie");
  //   const data = instance.get("api/baseball/dashbord");

  console.log(data);

  return (
    <main>
      <div>
        <p>ゲーム一覧</p>
        <div className="w-[780px]">
          {data.product.map((game: any) => {
            return (
              <Card className="w-[380px]">
                <CardHeader>
                  <CardTitle>vs {game.opponent_team.name}</CardTitle>
                  <CardDescription>
                    {game.dating} ({game.day_of_week}) {game.start_time}
                  </CardDescription>
                  <CardDescription>{game.place}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>投稿数:120件</p>
                </CardContent>
              </Card>
            );
          })}
          <Card className="w-[380px]">
            <CardHeader>
              <CardTitle>vs ソフトバンク</CardTitle>
              <CardDescription>2023-12-29 (日)</CardDescription>
              <CardDescription>14:00</CardDescription>
              <CardDescription>PayPayドーム</CardDescription>
            </CardHeader>
            <CardContent>
              <p>投稿数:120件</p>
            </CardContent>
          </Card>
          <Card className="w-[380px]">
            <CardHeader>
              <CardTitle>vs ソフトバンク</CardTitle>
              <CardDescription>2023-12-29 (日)</CardDescription>
              <CardDescription>14:00</CardDescription>
              <CardDescription>PayPayドーム</CardDescription>
            </CardHeader>
            <CardContent>
              <p>投稿数:120件</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
