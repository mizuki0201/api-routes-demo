import { FC } from "react";
import { GetServerSideProps } from "next";

type PageProps = { data: { userId: string } };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.userId ?? "";
  return { props: { data: { userId } } };
};

const Seller: FC<PageProps> = ({ data }) => {
  const { userId } = data;

  // 今回はAPI Routesの説明なので、マークアップはしません
  return (
    <>
      <h1>出品者（id: {userId}）の商品一覧ページです</h1>
      <p>クーポンURLから遷移した場合はcookieにデータが保存されています</p>
    </>
  );
};

export default Seller;
