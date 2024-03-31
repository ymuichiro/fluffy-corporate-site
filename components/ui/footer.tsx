import { Icons } from "@/components/ui/icons";
import { Link } from "@/components/ui/link";
import { Locale } from "@/i18n-config";

export function Footer({ locale }: { locale: Locale }): JSX.Element {
  return (
    <footer className="mx-auto max-w-screen-2xl mt-4 py-4 px-4 md:px-8">
      <div className="border-t border-gray-800 text-center text-sm text-gray-400">
        <div className="flex space-x-6 py-6 justify-center">
          <Link
            target="_blank"
            href="https://www.instagram.com/loose_and_fluffy/"
            rel="noopener"
            className="text-gray-600"
          >
            <Icons.instagram className="w-5 h-5" />
          </Link>
          <Link target="_blank" href="https://twitter.com/anpanmanringo?s=11" rel="noopener" className="text-gray-600">
            <Icons.twitter className="w-4 h-4" />
          </Link>
          <div className="flex-grow flex justify-end">
            <Link href={`/${locale === "ja" ? "en" : "ja"}/`} className="text-primary">
              {locale === "ja" ? "EN" : "JA"}
            </Link>
          </div>
        </div>
        <p>© 2024 - lose and fluffy All rights reserved.</p>
      </div>
    </footer>
  );
}
