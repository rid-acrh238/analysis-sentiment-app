"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, MessageCircle, Users, Calendar } from "lucide-react"

const sentimentData = {
  positive: 45,
  negative: 25,
  neutral: 30,
  totalComments: 1247,
  totalUsers: 892,
  timeRange: "7 hari terakhir",
}

const trendingTopics = [
  { topic: "Kebijakan Ekonomi", sentiment: "positive", score: 78 },
  { topic: "Infrastruktur", sentiment: "neutral", score: 52 },
  { topic: "Pendidikan", sentiment: "negative", score: 34 },
  { topic: "Kesehatan", sentiment: "positive", score: 82 },
]

export function SentimentDashboard() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Dashboard Analisis</h2>
        <p className="text-muted-foreground">Hasil analisis sentimen terkini</p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Komentar</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sentimentData.totalComments.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <Calendar className="inline h-3 w-3 mr-1" />
              {sentimentData.timeRange}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pengguna Unik</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sentimentData.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% dari minggu lalu</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sentimen Dominan</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Positif</div>
            <p className="text-xs text-muted-foreground">{sentimentData.positive}% dari total komentar</p>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Sentimen</CardTitle>
          <CardDescription>Persentase sentimen berdasarkan analisis komentar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Positif</span>
              </div>
              <span className="text-sm text-muted-foreground">{sentimentData.positive}%</span>
            </div>
            <Progress value={sentimentData.positive} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Minus className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Netral</span>
              </div>
              <span className="text-sm text-muted-foreground">{sentimentData.neutral}%</span>
            </div>
            <Progress value={sentimentData.neutral} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium">Negatif</span>
              </div>
              <span className="text-sm text-muted-foreground">{sentimentData.negative}%</span>
            </div>
            <Progress value={sentimentData.negative} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle>Topik Trending</CardTitle>
          <CardDescription>Topik yang paling banyak dibicarakan dengan skor sentimen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trendingTopics.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{item.topic}</span>
                  <Badge
                    variant={
                      item.sentiment === "positive"
                        ? "default"
                        : item.sentiment === "negative"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {item.sentiment === "positive" ? "Positif" : item.sentiment === "negative" ? "Negatif" : "Netral"}
                  </Badge>
                </div>
                <div className="text-sm font-medium">Skor: {item.score}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
