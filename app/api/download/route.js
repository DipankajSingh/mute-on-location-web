import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await sql`UPDATE download SET count = count + 1 WHERE item_name = 'App';`;
  } catch (error) {
    console.log(error);
    return new NextResponse("server error! 500");
  }

  return NextResponse.redirect(
    "https://jpctwxmsfbarwyzy.public.blob.vercel-storage.com/app-release-fObSevn4Ysw5dPMMpqxBkgLgoBIz5L.apk"
  );
}
