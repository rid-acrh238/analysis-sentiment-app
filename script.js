// DOM Elements
const topicInput = document.getElementById("topic-input")
const platformSelect = document.getElementById("platform-select")
const commentsInput = document.getElementById("comments-input")
const analyzeBtn = document.getElementById("analyze-btn")
const analyzeText = document.getElementById("analyze-text")
const dashboard = document.getElementById("dashboard")

// State management
let isAnalyzing = false

// Event listeners
analyzeBtn.addEventListener("click", handleAnalyze)
topicInput.addEventListener("input", validateForm)
commentsInput.addEventListener("input", validateForm)

// Form validation
function validateForm() {
  const topic = topicInput.value.trim()
  const comments = commentsInput.value.trim()

  if (topic && comments && !isAnalyzing) {
    analyzeBtn.disabled = false
    analyzeBtn.classList.remove("opacity-50", "cursor-not-allowed")
  } else {
    analyzeBtn.disabled = true
    analyzeBtn.classList.add("opacity-50", "cursor-not-allowed")
  }
}

// Handle analysis
async function handleAnalyze() {
  if (isAnalyzing) return

  const topic = topicInput.value.trim()
  const comments = commentsInput.value.trim()
  const platform = platformSelect.value

  if (!topic || !comments) {
    alert("Mohon isi topik dan komentar untuk dianalisis")
    return
  }

  // Start analysis
  isAnalyzing = true
  analyzeBtn.disabled = true
  analyzeBtn.classList.add("opacity-50", "cursor-not-allowed")

  // Show loading state
  analyzeText.innerHTML = `
        <div class="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full inline-block"></div>
        Menganalisis...
    `

  try {
    // Simulate API call
    await simulateAnalysis(topic, comments, platform)

    // Show results
    showDashboard()

    // Scroll to dashboard
    dashboard.scrollIntoView({ behavior: "smooth" })
  } catch (error) {
    console.error("Analysis error:", error)
    alert("Terjadi kesalahan saat menganalisis. Silakan coba lagi.")
  } finally {
    // Reset button state
    isAnalyzing = false
    analyzeBtn.disabled = false
    analyzeBtn.classList.remove("opacity-50", "cursor-not-allowed")
    analyzeText.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Analisis Sekarang
        `
  }
}

// Simulate analysis process
function simulateAnalysis(topic, comments, platform) {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      console.log(`[v0] Analyzing topic: ${topic}`)
      console.log(`[v0] Platform: ${platform}`)
      console.log(`[v0] Comments length: ${comments.length}`)
      resolve()
    }, 3000)
  })
}

// Show dashboard with animation
function showDashboard() {
  dashboard.classList.remove("hidden")
  dashboard.style.opacity = "0"
  dashboard.style.transform = "translateY(20px)"

  // Animate in
  setTimeout(() => {
    dashboard.style.opacity = "1"
    dashboard.style.transform = "translateY(0)"
  }, 100)

  // Animate progress bars
  setTimeout(() => {
    animateProgressBars()
  }, 500)
}

// Animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll('[style*="width:"]')
  progressBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0%"
    setTimeout(() => {
      bar.style.width = width
    }, 100)
  })
}

// Initialize form validation on page load
document.addEventListener("DOMContentLoaded", () => {
  validateForm()

  // Add smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
})

// Add some sample data for demonstration
const sampleComments = [
  "Kebijakan ini sangat bagus untuk ekonomi kita",
  "Saya tidak setuju dengan pendekatan ini",
  "Perlu ada perbaikan dalam implementasinya",
  "Hasilnya cukup memuaskan sejauh ini",
  "Masih banyak yang perlu diperbaiki",
]

// Auto-fill sample data (for demo purposes)
function fillSampleData() {
  topicInput.value = "Kebijakan Ekonomi Terbaru"
  platformSelect.value = "twitter"
  commentsInput.value = sampleComments.join("\n")
  validateForm()
}

// Add sample data button (hidden, can be triggered via console)
window.fillSampleData = fillSampleData
