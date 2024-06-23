import { Icons } from "@/components/ui/icons";
import { Link } from "@/components/ui/link";

export function Footer(): JSX.Element {
  return (
    <footer className="mx-auto max-w-screen-2xl mt-4 py-4 px-4 md:px-8">
      <div className="border-t border-gray-800 text-center text-sm text-gray-400">
        <div className="flex space-x-6 py-6 justify-center">
          <Link
            target="_blank"
            href="https://www.instagram.com/yanaka_omusubi/"
            rel="noopener"
            className="text-gray-600"
          >
            <Icons.instagram className="w-5 h-5" />
          </Link>
          <Link target="_blank" href="https://x.com/omusubi_yanaka" rel="noopener" className="text-gray-600">
            <Icons.twitter className="w-4 h-4" />
          </Link>
        </div>
        <p>© 2024 - lose and fluffy All rights reserved.</p>
      </div>
    </footer>
  );
}
