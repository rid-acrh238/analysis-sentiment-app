import { Header } from "@/components/header"
import { AnalysisForm } from "@/components/analysis-form"
import { SentimentDashboard } from "@/components/sentiment-dashboard"
import { FeatureCards } from "@/components/feature-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-balance">Aplikasi Analisis Sentimen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Menganalisis sentimen publik terhadap suatu topik berdasarkan komentar di media sosial.
          </p>
        </section>

        <AnalysisForm />
        <SentimentDashboard />
        <FeatureCards />
      </main>
    </div>
  )
}
