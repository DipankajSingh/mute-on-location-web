import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { rows } =
      await sql`UPDATE download SET count = count + 1 WHERE item_name = 'App';`;
  } catch (error) {
    console.log(error);
    return new NextResponse("server error! 500");
  }

  return NextResponse.redirect(
    "https://jpctwxmsfbarwyzy.public.blob.vercel-storage.com/app-release-fObSevn4Ysw5dPMMpqxBkgLgoBIz5L.apk"
  );
}
