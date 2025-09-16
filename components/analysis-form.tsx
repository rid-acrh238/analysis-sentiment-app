"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Upload, Zap } from "lucide-react"

export function AnalysisForm() {
  const [topic, setTopic] = useState("")
  const [comments, setComments] = useState("")
  const [platform, setPlatform] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">Mulai Analisis Sentimen</CardTitle>
        <CardDescription>Masukkan topik dan komentar media sosial untuk menganalisis sentimen publik</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Topik Analisis</label>
            <Input
              placeholder="Contoh: Kebijakan pemerintah terbaru"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Platform Media Sosial</label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">Twitter/X</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Komentar untuk Dianalisis</label>
          <Textarea
            placeholder="Masukkan komentar media sosial yang ingin dianalisis, atau upload file..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={6}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Upload className="h-4 w-4 mr-2" />
            Upload File CSV
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Search className="h-4 w-4 mr-2" />
            Scrape Otomatis
          </Button>
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !topic || !comments}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                Menganalisis...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Analisis Sekarang
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
