import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Less structure, more intelligence.</h3>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div>
            <h4 className="mb-4 text-sm font-semibold">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground">Web app</Link></li>
              <li><Link href="#" className="hover:text-foreground">AI design</Link></li>
              <li><Link href="#" className="hover:text-foreground">AI slides</Link></li>
              <li><Link href="#" className="hover:text-foreground">Browser operator</Link></li>
              <li><Link href="#" className="hover:text-foreground">Wide Research</Link></li>
              <li><Link href="#" className="hover:text-foreground">Mail WorkwithMe</Link></li>
              <li><Link href="#" className="hover:text-foreground">Slack integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-foreground">Docs</Link></li>
              <li><Link href="#" className="hover:text-foreground">Updates</Link></li>
              <li><Link href="#" className="hover:text-foreground">Help center</Link></li>
              <li><Link href="#" className="hover:text-foreground">Trust center</Link></li>
              <li><Link href="#" className="hover:text-foreground">API</Link></li>
              <li><Link href="/team" className="hover:text-foreground">Team plan</Link></li>
              <li><Link href="#" className="hover:text-foreground">Startups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Community</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Events</Link></li>
              <li><Link href="#" className="hover:text-foreground">Fellows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Download</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Mobile app</Link></li>
              <li><Link href="#" className="hover:text-foreground">Windows app</Link></li>
              <li><Link href="#" className="hover:text-foreground">My Browser</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Business</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/team" className="hover:text-foreground">Team plan</Link></li>
              <li><Link href="#" className="hover:text-foreground">SSO</Link></li>
              <li><Link href="#" className="hover:text-foreground">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">About us</Link></li>
              <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground">For business</Link></li>
              <li><Link href="#" className="hover:text-foreground">For media</Link></li>
              <li><Link href="#" className="hover:text-foreground">Terms of service</Link></li>
              <li><Link href="#" className="hover:text-foreground">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">© 2026 WorkwithMe</p>
          <div className="text-sm text-muted-foreground">English</div>
        </div>
      </div>
    </footer>
  )
}
