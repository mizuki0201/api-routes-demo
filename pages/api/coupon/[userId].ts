import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import dayjs from "dayjs";

/**
 * クーポンURLにアクセスされたらこのAPIの処理が動く。
 * cookieに出品者のuserIdとクーポンの有効期限の情報を設定した上で
 * 出品者の商品一覧ページへリダイレクトする。
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // 今回はdemoなのでlocalhostのみで動かす想定
  const ORIGIN = "http://localhost:3000";

  const { userId } = req.query;

  // URLの妥当性をチェック（今回はdemoなので簡単に記述）
  if (!userId) {
    throw Error("URL is invalid");
  }

  // cookieにクーポンの情報を登録
  const key = `coupon_${userId}`;
  const expires = dayjs().add(1, "week").toDate();
  const options = { domain: "localhost", expires, path: "/" };
  setCookie({ res }, key, expires.getTime().toString(), options);

  // 対象ページへリダイレクト
  const redirectUrl = `${ORIGIN}/seller/${userId}`;
  res.redirect(redirectUrl);
};

export default handler;
