import useSWR from "swr";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from "@/components/common/Heading";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8888/ifboss-backend/public/api/baseball/dashbord",
    fetcher
  );

  console.log(data);

  if (isLoading) return <p>LOADING</p>;

  return (
    <main>
      <div>
        <Heading text="ゲーム一覧" />
        <div className="flex flex-col gap-4 items-center pt-12">
          {data.product.map((game: any) => {
            return (
              <Link href="/schad_test">
                <Card className="w-[380px] hover:bg-gray-100">
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
                  <CardFooter>
                    <span>詳細</span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
