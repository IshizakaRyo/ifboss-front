import useSWR from "swr";
import Link from "next/link";
import Heading from "@/components/common/Heading";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function index() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8888/ifboss-backend/public/api/baseball/20230625/game_detail",
    fetcher
  );

  console.log(data?.expected_order_array);

  if (isLoading)
    return (
      <main>
        <div className="text-2xl h-24 px-32 flex items-center bg-indigo-900 text-white front-semibold">
          2023年6月25日の予想スタメン一覧
        </div>
        LOADING
      </main>
    );

  return (
    <main>
      <div>
        <Heading text="2023年6月25日の予想スタメン一覧" />
        <div className="flex flex-col gap-12 pt-12">
          {data.expected_order_array.map((expected_order: any, key: number) => {
            return (
              <div className="w-max mx-auto" key={key}>
                <span className="block">{expected_order.user_name}</span>
                <span className="text-xs text-gray-500">
                  {expected_order.created_at}
                </span>
                <table className="border w-[280px]">
                  <tbody>
                    <TrItem
                      orderNumber="1"
                      playerName={expected_order.first_hitter.member_name}
                      position={expected_order.first_hitter.position}
                    />
                    <TrItem
                      orderNumber="2"
                      playerName={expected_order.secound_hitter.member_name}
                      position={expected_order.secound_hitter.position}
                    />
                    <TrItem
                      orderNumber="3"
                      playerName={expected_order.third_hitter.member_name}
                      position={expected_order.third_hitter.position}
                    />
                    <TrItem
                      orderNumber="4"
                      playerName={expected_order.fourth_hitter.member_name}
                      position={expected_order.fourth_hitter.position}
                    />
                    <TrItem
                      orderNumber="5"
                      playerName={expected_order.fifth_hitter.member_name}
                      position={expected_order.fifth_hitter.position}
                    />
                    <TrItem
                      orderNumber="6"
                      playerName={expected_order.sixth_hitter.member_name}
                      position={expected_order.sixth_hitter.position}
                    />
                    <TrItem
                      orderNumber="7"
                      playerName={expected_order.seventh_hitter.member_name}
                      position={expected_order.seventh_hitter.position}
                    />
                    <TrItem
                      orderNumber="8"
                      playerName={expected_order.eight_hitter.member_name}
                      position={expected_order.eight_hitter.position}
                    />
                    <TrItem
                      orderNumber="9"
                      playerName={expected_order.ninth_hitter.member_name}
                      position={expected_order.ninth_hitter.position}
                    />
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
        <Link
          href="/orders/form"
          className="fixed right-4 bottom-4 bg-indigo-900 text-white px-4 py-2 border-4 rounded-md"
        >
          投稿する
        </Link>
      </div>
    </main>
  );
}

interface TrItemProps {
  orderNumber: string;
  playerName: string;
  position: string;
}

function TrItem({ orderNumber, playerName, position }: TrItemProps) {
  return (
    <tr className="h-12 border">
      <td className="w-4 px-4 text-center">{orderNumber}</td>
      <td className="text-left px-12">{playerName}</td>
      <td className="w-4 px-4 text-center">{position}</td>
    </tr>
  );
}
