import InViewFadeIn from "@/components/atom/moleculs/inview-fadein";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { H1, H2, H3, Paragraph } from "@/components/ui/typography";
import TransparentLogo from "@/assets/transparent-logo.webp";
import ShopRoom from "@/assets/shop-room.webp";
import ShopOverview from "@/assets/shop-overview.webp";
import ShopShowCase from "@/assets/shop-show-case.webp";
import Image from "next/image";
import InstagramList from "@/components/atom/moleculs/instagram";
import Link from "next/link";

const producs: { name: string; en: string; price: number }[] = [
  {
    name: "ツナマヨ",
    en: "Tuna Mayo",
    price: 200,
  },
  {
    name: "しゃけ",
    en: "Salmon",
    price: 200,
  },
  {
    name: "今日のおむすび",
    en: "Today's Special",
    price: 200,
  },
  {
    name: "梅",
    en: "Salt Plum",
    price: 200,
  },
  {
    name: "イカ昆布",
    en: "Squid and Kelp",
    price: 300,
  },
  {
    name: "おかか",
    en: "Bonito Flakes",
    price: 200,
  },
  {
    name: "たらこ",
    en: "Cod Roe",
    price: 300,
  },
  {
    name: "昆布",
    en: "Kelp",
    price: 200,
  },
  {
    name: "塩えだまめ",
    en: "Salted edamame",
    price: 200,
  },
  {
    name: "焼きおにぎり × 2",
    en: "Grilled Rice Ball",
    price: 300,
  },
  {
    name: "たぬき",
    en: "Fried ball",
    price: 200,
  },
  {
    name: "コーン",
    en: "Coen",
    price: 200,
  },
  {
    name: "スパムおむすび",
    en: "Spam Omusubi",
    price: 350,
  },
  {
    name: "豚汁",
    en: "Miso Soup",
    price: 400,
  },
  {
    name: "（夏季限定）かき氷",
    en: "(Summer only) Shaved ice.",
    price: 300,
  },
];

const questions = [
  {
    question: "団体・大量購入はできますか？",
    answer: "予約制です。お問い合わせください！",
  },
  {
    question: "売り切れの場合、通常より早く営業を終了しますか？",
    answer: "申し訳ありません。売り切れの場合はその時点で当日の営業は終了とさせて頂きます",
  },
  {
    question: "営業日は？",
    answer:
      "月曜日から日曜日、毎日営業しています！土曜日は16時から居酒屋としても営業しています！" +
      "店主一人の為、急遽お休みを頂く場合もございます。その際にはSNS等でお知らせ致します。",
  },
  {
    question: "日替わりのおかずは何時頃から販売していますか？",
    answer: "朝 8時からご提供しています。開店前に起こし頂いても、準備状況によってはご提供できることもあります。",
  },
  {
    question: "日替わりのおかずはなんですか？",
    answer: "日替わりのおかずは、その日の店主の気分で決めています。お楽しみに！",
  },
];

export default async function IndexPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-400 via-pink-400 to-orange-400">
        <div className="absolute -bottom-4 left-0 bg-gradient-to-t from-background to-transparent h-[50vh] w-full" />
        <div className="flex flex-col items-center text-center justify-center h-[100vh]">
          <div className="flex flex-col justify-center items-center max-w-screen-md animate-pulse p-2 sm:p-24 bg-gray-200/30 backdrop-blur-lg rounded-full aspect-square border border-gray-200/30 shadow-lg">
            <Image
              priority
              src={TransparentLogo.src}
              alt="loose and fluffy logo"
              width={300}
              height={300}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </section>
      <section className="container py-8 md:py-12 lg:py-24 min-h-[80svh] flex flex-col justify-center items-center">
        <InViewFadeIn className="space-y-6 w-full" threshold={0.1}>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <H2 id="menu">
              <Link href={"/#menu"}>Omusubi Menu</Link>
            </H2>
          </div>
          <div className="mx-auto grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {producs.map((item, index) => (
              <Card className="flex flex-col justify-between" key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.en}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <CardFooter className="flex flex-row justify-end p-0">{`${item.price} 円`}</CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </InViewFadeIn>
      </section>
      {/* <section className="container  flex flex-col justify-center items-center max-w-4xl">
        <InViewFadeIn className="space-y-6 w-full">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <H2>きまぐれおかず</H2>
            <Paragraph>おかずは日替わりです</Paragraph>
          </div>
          <div>
            <Previews />
          </div>
        </InViewFadeIn>
      </section> */}
      <section className="container py-8 md:py-12 lg:py-24 min-h-[60vh] md:max-w-[64rem]">
        <InViewFadeIn className="space-y-10">
          <div>
            <H3 id="shop-info" className="py-10">
              <Link href={"/#shop-info"}>店舗情報</Link>
            </H3>
            <div className="mx-auto grid justify-center gap-8 grid-cols-1 sm:grid-cols-2">
              <div>
                <Paragraph className="font-bold">営業日</Paragraph>
                <Paragraph>月曜日 〜 日曜日</Paragraph>
                <Paragraph className="pt-2">土曜日のみ居酒屋も営業中</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">営業時間</Paragraph>
                <Paragraph>毎日 AM 8:00 - PM 5:00</Paragraph>
                <Paragraph className="font-bold pt-2">居酒屋利用</Paragraph>
                <Paragraph>土曜 PM 4:00 - PM 9:00</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">住所</Paragraph>
                <Paragraph>110-0001 東京都台東区3−8−9</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">電話番号</Paragraph>
                <Paragraph className="text-sm">090-8180-6263</Paragraph>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.7379827237836!2d139.76424216961357!3d35.727400698285784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dd19caab3e7%3A0x7ff1081efbd13ae4!2z44CSMTEwLTAwMDEgVG9reW8sIFRhaXRvIENpdHksIFlhbmFrYSwgMy1jaMWNbWXiiJI44oiSOSDkuInpmb3po5_lk4E!5e0!3m2!1sen!2sjp!4v1719107503750!5m2!1sen!2sjp"
              style={{ border: 0, width: "100%", height: 450 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </InViewFadeIn>
      </section>
      <section className="container py-8 md:py-12 lg:py-24 flex flex-col justify-center items-center max-w-4xl">
        <InViewFadeIn className="space-y-6 w-full" threshold={0.2}>
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <H2 id="shopimage">
              <Link href={"/#shopimage"}>店舗外観</Link>
            </H2>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:justify-around">
            <Image
              className="rounded-lg max-h-screen object-contain"
              src={ShopOverview.src}
              alt="店舗外観"
              width={400}
              height={400}
            />
            <Image
              className="rounded-lg max-h-screen object-contain"
              src={ShopShowCase.src}
              alt="ショーケース"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-center items-center py-8">
            <Image
              className="rounded-lg max-h-screen object-contain"
              src={ShopRoom.src}
              alt="店内写真"
              width={600}
              height={400}
            />
          </div>
        </InViewFadeIn>
      </section>
      <section className="container py-8 md:py-12 lg:py-24 flex flex-col justify-center items-center max-w-4xl">
        <InViewFadeIn className="space-y-6 w-full">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <H2 id="instagram">
              <Link href={"/#instagram"}>Instagram</Link>
            </H2>
          </div>
          <div>
            <InstagramList />
          </div>
        </InViewFadeIn>
      </section>
      <hr />
      <section className="container space-y-6 py-20 md:max-w-[64rem] flex flex-col items-stretch">
        <H3 id="faq">
          <Link href={"/#faq"}>よくある質問</Link>
        </H3>
        <Paragraph className="text-muted-foreground">
          直接の連絡をご希望の場合は <a href="mailto:looseandfluffy@yahoo.co.jp">looseandfluffy＠yahoo.co.jp</a>{" "}
          迄、お問合せ下さい
        </Paragraph>
        <Accordion type="single" collapsible>
          {questions.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="container py-8 md:py-12 lg:py-24 md:max-w-[64rem]">
        <InViewFadeIn className="space-y-10">
          <div>
            <H3 className="py-10" id="companyinfo">
              <Link href={"/#companyinfo"}>会社情報</Link>
            </H3>
            <div className="mx-auto grid justify-center gap-4 grid-cols-1">
              <div>
                <Paragraph className="font-bold">会社名</Paragraph>
                <Paragraph>株式会社 Loose and Fluffy</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">法人登記番号</Paragraph>
                <Paragraph>1011501030467</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">住所</Paragraph>
                <Paragraph>〒116-0013 東京都 荒川区 西日暮里6丁目51-9 プレシス西日暮里205</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">電話番号</Paragraph>
                <Paragraph>080-9124-7606</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">E-mail</Paragraph>
                <Paragraph>
                  <a href="mailto:looseandfluffy@yahoo.co.jp">looseandfluffy＠yahoo.co.jp</a>
                </Paragraph>
              </div>
            </div>
          </div>
        </InViewFadeIn>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
