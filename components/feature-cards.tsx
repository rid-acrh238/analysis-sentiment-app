import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BarChart3, Shield, Zap, Globe, Download } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Machine Learning",
    description: "Menggunakan algoritma pembelajaran mesin canggih untuk analisis sentimen yang akurat",
  },
  {
    icon: BarChart3,
    title: "Visualisasi Data",
    description: "Dashboard interaktif dengan grafik dan chart yang mudah dipahami",
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    description: "Perlindungan data pengguna dengan enkripsi tingkat enterprise",
  },
  {
    icon: Zap,
    title: "Analisis Real-time",
    description: "Pemrosesan data secara real-time untuk hasil yang selalu terkini",
  },
  {
    icon: Globe,
    title: "Multi Platform",
    description: "Mendukung analisis dari berbagai platform media sosial populer",
  },
  {
    icon: Download,
    title: "Export Laporan",
    description: "Unduh hasil analisis dalam format PDF, Excel, atau CSV",
  },
]

export function FeatureCards() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Fitur Unggulan</h2>
        <p className="text-muted-foreground">Teknologi terdepan untuk analisis sentimen yang komprehensif</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
