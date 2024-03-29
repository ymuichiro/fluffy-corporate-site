import InViewFadeIn from "@/components/atom/moleculs/inview-fadein";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { H1, H2, H3, Paragraph } from "@/components/ui/typography";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import { Locale } from "@/i18n-config";
import { getLanguage } from "@/get-language";
import Link from "next/link";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function IndexPage({ params: { lang } }: Props) {
  const dictionary = await getLanguage(lang);

  return (
    <>
      <section className="bg-gradient-to-br from-violet-400 via-pink-400 to-orange-400">
        <div className="absolute -bottom-1 left-0 bg-gradient-to-t from-background to-transparent h-[50svh] w-full" />
        <div className="absolute top-2 right-4">
          <Link href={`/${lang === "ja" ? "en" : "ja"}/`} className="text-primary-foreground">
            {lang === "ja" ? "EN" : "JA"}
          </Link>
        </div>
        <div className="flex flex-col items-center text-center justify-center h-[100svh]">
          <div className="flex flex-col justify-center items-center max-w-screen-md animate-pulse p-10 sm:p-24 bg-gray-200/30 backdrop-blur-lg rounded-full aspect-square border border-gray-200/30 shadow-lg">
            <H1 className="text-5xl max-w-[90vw] font-semibold tracking-tight sm:text-6xl py-3 text-primary-foreground opacity-100">
              {dictionary.index.hero_title}
            </H1>
            <Paragraph className="text-primary-foreground max-w-[max-w-[90vw]] leading-8">
              {dictionary.index.hero_description}
            </Paragraph>
          </div>
        </div>
      </section>
      <section id="features" className="container py-8 md:py-12">
        <InViewFadeIn className="flex flex-col justify-between gap-6 sm:gap-5 md:gap-10 lg:flex-row space-y-6">
          <div className="flex flex-col justify-center text-center md:text-left gap-10 lg:py-12 lg:text-left w-full lg:w-5/12 xl:py-24">
            <H2>{dictionary.index.introduce_company_title}</H2>
            <p>{dictionary.index.introduce_company_description}</p>
          </div>
          <div className="overflow-hidden lg:h-auto w-full lg:w-7/12 flex justify-center items-center">
            <Image
              loading="eager"
              className="rounded-lg shadow-lg animate-in"
              src={LogoImage.src}
              alt="lose and fluffy logo"
              height={1024}
              width={1024}
            />
          </div>
        </InViewFadeIn>
      </section>
      <section
        id="onigiris"
        className="container bg-slate-50 py-8 md:py-12 lg:py-24 min-h-[80svh] flex flex-col justify-center items-center"
      >
        <InViewFadeIn className="space-y-6 w-full">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <H2>{dictionary.index.introduce_product_title}</H2>
            <Paragraph className="max-w-[85%] text-muted-foreground">
              {dictionary.index.introduce_product_description}
            </Paragraph>
          </div>
          <div className="mx-auto grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              {
                name: dictionary.index.product_onigiris_1_name,
                description: dictionary.index.product_onigiris_1_description,
                image: LogoImage.src,
              },
              {
                name: dictionary.index.product_onigiris_2_name,
                description: dictionary.index.product_onigiris_2_description,
                image: LogoImage.src,
              },
              {
                name: dictionary.index.product_onigiris_3_name,
                description: dictionary.index.product_onigiris_3_description,
                image: LogoImage.src,
              },
            ].map((item, index) => (
              <Card className="flex flex-col justify-between p-2" key={index}>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src={item.image} />
                  </Avatar>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </InViewFadeIn>
      </section>

      <section
        id="onigiris"
        className="container py-8 md:py-12 lg:py-24 min-h-[80svh] flex flex-col justify-center items-center"
      >
        <InViewFadeIn className="space-y-6 w-full">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-12 text-center">
            <div>
              <H2>{dictionary.index.product_onigiri_nft_title}</H2>
              <Paragraph className="text-muted-foreground">
                {dictionary.index.product_onigiri_nft_description}
              </Paragraph>
            </div>
            <div className="relative p-0">
              <div className="absolute top-0 left-0 blur-lg w-full h-full rounded-lg bg-gradient-to-br from-violet-400 via-pink-400 to-orange-400" />
              <Card className="flex flex-col sm:flex-row justify-center items-center py-12 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
                <CardHeader>
                  <Avatar className="h-60 w-60">
                    <AvatarImage src={LogoImage.src} />
                  </Avatar>
                </CardHeader>
                <CardContent className="flex items-start justify-center flex-col py-4 sm:pl-0 max-w-sm">
                  <CardTitle className="text-lg text-primary-foreground">
                    {dictionary.index.product_onigiri_nft_title}
                  </CardTitle>
                  <CardDescription className="text-start text-primary-foreground">
                    {dictionary.index.product_onigiri_nft_description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </InViewFadeIn>
      </section>

      <section id="shop" className="container py-8 md:py-12 lg:py-24 min-h-[60vh] md:max-w-[64rem]">
        <InViewFadeIn className="space-y-10">
          <div>
            <H3 className="py-10">{dictionary.index.introduce_shop_title}</H3>
            <div className="mx-auto grid justify-center gap-8 grid-cols-1 sm:grid-cols-2">
              <div>
                <Paragraph className="font-bold">{dictionary.index.introduce_shop_open_days_title}</Paragraph>
                <Paragraph>{dictionary.index.introduce_shop_open_days_content}</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">{dictionary.index.introduce_shop_open_hours_title}</Paragraph>
                <Paragraph>{dictionary.index.introduce_shop_open_hours_content}</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">{dictionary.index.introduce_shop_location_title}</Paragraph>
                <Paragraph>{dictionary.index.introduce_shop_location_content}</Paragraph>
              </div>
              <div>
                <Paragraph className="font-bold">{dictionary.index.introduce_shop_phone_title}</Paragraph>
                <Paragraph className="text-sm">{dictionary.index.introduce_shop_phone_content}</Paragraph>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477.529341833053!2d139.7573583935791!3d35.73200569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dd0a0b260fb%3A0xa428ba1d9495d7f9!2sNishi-Nippori%20Station!5e0!3m2!1sen!2sjp!4v1711586358873!5m2!1sen!2sjp"
              style={{ border: 0, width: "100%", height: 450 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </InViewFadeIn>
      </section>
      <hr />
      <section id="questions" className="container space-y-6 py-20 md:max-w-[64rem] flex flex-col items-stretch">
        <H3>{dictionary.index.questions_title}</H3>
        <Paragraph className="text-muted-foreground">{dictionary.index.questions_description}</Paragraph>
        <Accordion type="single" collapsible>
          {dictionary.index.questions_items.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section>
        <Footer locale={lang} />
      </section>
    </>
  );
}
