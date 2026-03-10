"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare, 
  Monitor, 
  Sparkles, 
  Send,
  QrCode,
} from "lucide-react"

export default function AgentsPage() {
  const features = [
    {
      icon: QrCode,
      title: "Brand-consistent AI identity",
      description: "Trained on your workflows, integrated with your tools.",
    },
    {
      icon: Monitor,
      title: "Persistent memory & computer",
      description: "24/7 cloud assistant that keeps full context and memory.",
    },
    {
      icon: Sparkles,
      title: "Custom skills",
      description: "Equip your assistant with expert knowledge in specific areas.",
    },
    {
      icon: MessageSquare,
      title: "Works in your messenger",
      description: "Available on Telegram. More coming soon.",
    },
  ]

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="mb-8 text-xl font-semibold">Agents</h1>

      {/* Messaging Apps Illustration */}
      <div className="relative mb-8 h-56 w-full max-w-lg">
        {/* Line messaging icon */}
        <div className="absolute left-[30%] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg">
          <span className="text-xs font-bold">LINE</span>
        </div>
        
        {/* Messenger icon */}
        <div className="absolute right-[25%] top-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00B2FF] to-[#006AFF] text-white shadow-lg">
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.438 5.482 3.688 7.17v3.587l3.425-1.89c.916.254 1.89.39 2.887.39 5.523 0 10-4.145 10-9.257S17.523 2 12 2z"/>
          </svg>
        </div>
        
        {/* Telegram icon */}
        <div className="absolute left-[12%] top-[35%] flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg">
          <Send className="h-6 w-6" />
        </div>
        
        {/* WhatsApp icon */}
        <div className="absolute right-[12%] top-[30%] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>

        {/* Central WorkwithMe card */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-2xl bg-background p-4 shadow-xl ring-1 ring-border">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                <WorkwithMeLogo />
              </div>
              <span className="font-semibold">WorkwithMe</span>
              <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-36 rounded bg-muted" />
              <div className="h-2 w-28 rounded bg-muted" />
            </div>
          </div>
        </div>

        {/* Phone frame behind */}
        <div className="absolute left-1/2 top-[40%] -z-10 h-40 w-48 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-4 border-muted bg-muted/30" />
      </div>

      {/* Deploy Section */}
      <h2 className="mb-8 text-center font-serif text-3xl">
        Deploy your agent for business
      </h2>

      {/* Features Grid */}
      <div className="grid w-full max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border">
            <CardContent className="p-6">
              <feature.icon className="mb-4 h-6 w-6 text-muted-foreground" />
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Telegram CTA */}
      <Button className="mt-12 gap-2 bg-foreground text-background hover:bg-foreground/90">
        <TelegramIcon />
        Get started on Telegram
      </Button>

      {/* Coming Soon */}
      <div className="mt-6 flex flex-col items-center">
        <p className="mb-3 text-sm text-muted-foreground">Coming soon</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-sm">WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.438 5.482 3.688 7.17v3.587l3.425-1.89c.916.254 1.89.39 2.887.39 5.523 0 10-4.145 10-9.257S17.523 2 12 2z"/>
            </svg>
            <span className="text-sm">Messenger</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-xs">L</div>
            <span className="text-sm">Line</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkwithMeLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3C10.5 3 9.5 4 9 5C8.5 4.5 7.5 4 6 4C4 4 2 5.5 2 8C2 11 5 14 9 17C10 17.7 11 18 12 18C13 18 14 17.7 15 17C19 14 22 11 22 8C22 5.5 20 4 18 4C16.5 4 15.5 4.5 15 5C14.5 4 13.5 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}
