export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'API' | 'Fullstack' | 'Mobile Apps'
  stack: string[]
  thumbnail: string | string[]
  demoUrl?: string
  sourceUrl?: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  category: string
  icon: string
  skills: Skill[]
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
}

export const PROJECTS: Project[] = [
  {
    id: 'school-library',
    title: 'Perpustakaan Sekolah',
    description: 'School library management system built with React, Bootstrap, and MySQL, featuring book search, member accounts, and loan tracking.',
    longDescription: `A school library management system built with React, Bootstrap, and MySQL. It provides a searchable book catalog, member registration, loan tracking, and borrowing history. The responsive UI makes it easy for students and staff to browse collections, request books, and manage returns.\n\nThe backend uses MySQL to store books, members, and loan records. The interface combines React components with Bootstrap styling to create a consistent, user-friendly experience for both library users and administrators.`,
    category: 'Fullstack',
    stack: ['React', 'HTML', 'MySQL', 'Bootstrap', 'CSS'],
    thumbnail: '/perpustakaan-sekolah.png',
    demoUrl: 'https://perpustakaan-react-azure.vercel.app/',
    sourceUrl: 'https://github.com/muhamadfajarramdani/Perpustakaan-React',
  },
  {
    id: 'Management-Ekstrakurikuler-dan-Seni-Budaya-Sekolah',
    title: 'Management Ekstrakurikuler dan Seni Budaya Sekolah',
    description: 'Extracurricular and arts activity management system built with Laravel, Bootstrap, and MySQL for schedules, participants, and reports.',
    longDescription: `An extracurricular and arts activity management system built with Laravel, Bootstrap, and MySQL. It supports event scheduling, participant registration, activity tracking, and report generation for school coordinators.\n\nThe system provides responsive forms and a centralized dashboard for monitoring programs and attendance, while Laravel handles backend workflows and MySQL stores event, participant, and report data.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Html', 'Javascript', 'CSS', 'Bootstrap', 'MySQL'],
    thumbnail: '/management-ekstrakurikuler-seni-budaya.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani/Managemen-Ekstrakurikuler---Seni-Budaya',
  },
  {
    id: 'pengaduan-masyarakat',
    title: 'Pengaduan Masyarakat',
    description: 'Community complaint portal built with Laravel, Bootstrap, and MySQL for submitting reports, categorizing issues, and managing admin reviews.',
    longDescription: `A community complaint portal built with Laravel, Bootstrap, and MySQL. Users can submit reports, choose issue categories, attach evidence, and track the status of each case.\n\nThe admin dashboard centralizes complaint review, assignment, and follow-up, while API integration enables structured report workflows and improves transparency across the response process.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Html', 'Javascript', 'CSS', 'API Integration', 'Bootstrap', 'MySQL'],
    thumbnail: '/pengaduan-masyarakat.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani/Pengaduan-Masyarakat-Laravel',
  },
  {
    id: 'uks-pengetesan-darah',
    title: 'UKS: Pengetesan Darah',
    description: 'School health service blood testing module built with Laravel, PostgreSQL, and Bootstrap for student health records and test results.',
    longDescription: `A school health service blood testing module built with Laravel, PostgreSQL, and Bootstrap. It captures student blood test details, stores health metrics, and provides secure access for health staff.\n\nThe module includes historical test results, student health profiles, and reporting features to monitor wellness trends over time. Bootstrap ensures a clean interface while Laravel manages backend validation and data processing.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Javascript', 'SASS', 'CSS', 'Bootstrap', 'API Integration', 'PostgreSQL', 'PHP'],
    thumbnail: '/blood-test.png',
    demoUrl: 'https://app.kejar.id/',
    sourceUrl: 'https://app.kejar.id/',
  },
  {
    id: 'beep-test',
    title: 'UKS: Beep Test',
    description: 'School health service beep test module built with Laravel, PostgreSQL, and Bootstrap for tracking fitness scores and student performance.',
    longDescription: `A school health service beep test module built with Laravel, PostgreSQL, and Bootstrap. It records participant fitness scores, calculates performance levels, and generates result summaries for health staff.\n\nThe module includes structured test management, participant tracking, and Bootstrap-powered forms for consistent data entry. Laravel handles backend scoring logic and secure result storage.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Javascript', 'SASS', 'CSS', 'Bootstrap', 'API Integration', 'PostgreSQL', 'PHP'],
    thumbnail: '/beep-test.png',
    demoUrl: 'https://app.kejar.id/',
    sourceUrl: 'https://app.kejar.id/',
  },
  {
    id: 'kbm-reguler',
    title: 'Kunjungan UKS: KBM Reguler',
    description: 'Regular school health visit tracker built with Laravel, SASS, and PostgreSQL for logging student wellness checks and nurse notes.',
    longDescription: `A regular school health visit tracker built with Laravel, SASS, and PostgreSQL. It manages routine health visits during classroom sessions, logs student conditions, and stores nurse assessment notes.\n\nThe interface uses SASS for maintainable styling and Bootstrap components for consistent forms and cards, while Laravel powers backend workflows and secure storage of visit records.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Javascript', 'SASS', 'CSS', 'Bootstrap', 'API Integration', 'PostgreSQL', 'PHP'],
    thumbnail: '/kbm-reguler.png',
    demoUrl: 'https://app.kejar.id/',
    sourceUrl: 'https://app.kejar.id/',
  },
  {
    id: 'praktik-phbs-sikat',
    title: 'Praktik PHBS: Sikat Gigi',
    description: 'Hygiene education module built with Laravel and Bootstrap to teach proper tooth brushing and track student participation.',
    longDescription: `A hygiene education module built with Laravel and Bootstrap that teaches proper tooth brushing techniques and promotes healthy habits. It includes lesson pages, interactive content, and progress tracking.\n\nThe app uses Bootstrap for clean layouts and Laravel for backend content management, helping students learn PHBS routines with structured guidance and classroom support tools.`,
    category: 'Fullstack',
    stack: ['Laravel', 'Javascript', 'SASS', 'CSS', 'Bootstrap', 'API Integration', 'PostgreSQL', 'PHP'],
    thumbnail: '/praktik-phbs.png',
    demoUrl: 'https://app.kejar.id/',
    sourceUrl: 'https://app.kejar.id/',
  },
  {
    id: 'api-blood-test',
    title: 'API: Blood Test',
    description: 'API for managing student blood test data, including result entry, examination history, data validation, and condition monitoring.',
    longDescription: `An API built with Laravel and Lumen for managing student blood health check data. It supports secure endpoints for test result submission, historical examination records, validation of health parameters, and condition monitoring. The API is designed to integrate with school health applications and dashboards, providing structured access to blood test metrics and enabling health staff to monitor changes over time.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/blood-test.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'api-beep-test',
    title: 'API: Beep Test',
    description: 'API for managing fitness beep test results, including score storage, achievement levels, test history, and performance evaluation.',
    longDescription: `An API built with Laravel and Lumen for managing beep test fitness assessments. It stores scores, achievement levels, test history, and performance evaluations for participants. The service enables fitness tracking, historical comparisons, and performance reporting, supporting integration with student wellness portals and health administration tools.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/beep-test.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'api-tooth-brush',
    title: 'API: Tooth Brush',
    description: 'API for managing daily tooth brushing activity, including habit logging, status tracking, discipline monitoring, and hygiene summaries.',
    longDescription: `An API built with Laravel and Lumen for managing daily tooth brushing activities. It logs user hygiene habits, tracks completion status, monitors discipline, and generates hygiene activity summaries. This API supports health education systems by providing endpoints for habit recording, progress tracking, and compliance monitoring.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/praktik-phbs.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'api-memorization-target',
    title: 'API: Memorization Target',
    description: 'API for managing user memorization targets, including Quran memorization goals, target periods, and collection relationships.',
    longDescription: `An API built with Laravel and Lumen for managing user memorization targets. It supports creating memorization goals, assigning target periods, and linking targets to collection records. The API is designed to serve education platforms with structured target management and relational data handling for memorization tasks.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/setoran-hafalan.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'api-pivot-memorization-collection',
    title: 'API: Pivot Memorization Collection',
    description: 'API for managing many-to-many relations between memorization data and verses, including grouping and synchronization of memorization collections.',
    longDescription: `An API built with Laravel and Lumen for managing pivot relations between memorization entries and Quran verses. It handles many-to-many grouping, collection synchronization, and query-optimized data access. This service enables robust relation handling for memorization collections and supports efficient retrieval of linked memorization and verse records.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/setoran-hafalan.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'api-wudhu',
    title: 'API: Wudhu',
    description: 'API for managing wudhu practice data, including step recording, completion status, validation, and daily worship activity monitoring.',
    longDescription: `An API built with Laravel and Lumen for managing wudhu practice data. It records washing steps, tracks completion status, validates practice, and monitors daily worship activity. The API supports religious education systems with endpoints for activity logging, methodology validation, and progress monitoring for users.`,
    category: 'API',
    stack: ['Laravel', 'Lumen', 'PostgreSQL', 'Docker', 'Postman', 'PHP'],
    thumbnail: '/praktik-wudhu.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'app-tiketing',
    title: 'App Tiketing',
    description: 'Simple ticket purchasing system built with Flutter, Dart, and Firebase for easy event ticket management.',
    longDescription: `A mobile application for purchasing event tickets built with Flutter and Dart. It integrates with Firebase for authentication, real-time database, and cloud storage to handle ticket sales, user accounts, and event management.

The app provides a user-friendly interface for browsing events, selecting tickets, and completing secure payments through Firebase integration.`,
    category: 'Mobile Apps',
    stack: ['Flutter', 'Dart', 'Firebase'],
    thumbnail: '/app-tiketing.png',
    demoUrl: '#',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
  {
    id: 'membuat-surat-sakit',
    title: 'Membuat Surat Sakit',
    description: 'Medical certificate creation app with image carousel (7 screenshots) available on Play Store (kejar.id) for parents to generate and send sick notes to teachers.',
    longDescription: `A mobile application for creating and sending medical certificates directly to teachers, available on the Play Store through kejar.id. Built with Flutter and Dart, it integrates Firebase for secure data handling and real-time notifications.

Parents can easily generate sick notes with medical details and send them instantly to school staff, streamlining the absence reporting process. Features an image carousel showcasing 7 app screenshots.`,
    category: 'Mobile Apps',
    stack: ['Flutter', 'Dart', 'Firebase'],
    thumbnail: ['/app-surat-sakit-1.png', '/app-surat-sakit-2.png', '/app-surat-sakit-3.png', '/app-surat-sakit-4.png', '/app-surat-sakit-5.png', '/app-surat-sakit-6.png', '/app-surat-sakit-7.png'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.kejar.id',
    sourceUrl: 'https://github.com/muhamadfajarramdani',
  },
]

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'React', level: 50 },
      { name: 'TailwindCSS', level: 70 },
      { name: 'TypeScript', level: 50 },
    ],
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Lumen', level: 85 },
      { name: 'REST API', level: 82 }
    ],
  },
  {
    category: 'Database',
    icon: '⬡',
    skills: [
      { name: 'MySQL', level: 95 },
      { name: 'PostgreSQL', level: 40 },
      { name: 'MongoDB', level: 30 },
    ],
  },
  {
    category: 'Tools',
    icon: '⬡',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 60 },
      { name: 'Postman', level: 80 },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior Fullstack Developer Intern',
    company: 'CV IDS Rumah Pendidikan Indonesia',
    period: 'Jun 2025 – Dec 2025',
    description: 'Developing and maintaining internal enterprise tools using Laravel and Lumen. Led the migration of a legacy PHP monolith to a modern microservices architecture, reducing API response time by 43%.',
    tags: ['Laravel', 'Lumen', 'Javascript', 'PHP', 'SASS', 'CSS','PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 'exp-2',
    role: 'Junior Fullstack Developer',
    company: 'CV IDS Rumah Pendidikan Indonesia',
    period: 'Feb 2026 – jun 2026',
    description: 'Built responsive UI components for a SaaS product serving 2,000+ users. Implemented state management with Zustand and integrated REST APIs. Improved Lighthouse performance score from 61 to 94.',
    tags: ['Laravel', 'Lumen', 'Javascript', 'PHP', 'SASS', 'CSS','PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Jan 2026 - Present',
    description: 'Designed and developed 8+ client websites including company profiles, landing pages, and small e-commerce stores. Handled full project lifecycle from requirements to deployment on Vercel and cPanel hosting.',
    tags: ['Laravel', 'Lumen', 'Javascript', 'PHP', 'SASS', 'CSS','Bootstrap', 'Tailwind', 'Git', 'MySQL'],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-rest-apis-with-go',
    title: 'Building Production REST APIs with Go',
    date: '2024-11-15',
    summary: 'A practical guide to building fast, maintainable REST APIs in Go — from project structure and middleware to JWT auth and PostgreSQL integration.',
    tags: ['Go', 'API', 'Backend', 'PostgreSQL'],
    content: `# Building Production REST APIs with Go

After spending two years building backends with Node.js, I decided to explore Go for a task management API. The result was eye-opening — not just because of performance gains, but because Go forces you to think clearly about error handling and concurrency from day one.

## Why Go for APIs?

Go compiles to a single binary, has a built-in HTTP server, and its concurrency model via goroutines makes it naturally suited for I/O-heavy work. For a REST API that spends most of its time waiting on database queries, this matters.

## Project Structure

I follow a clean layered architecture:

\`\`\`
taskcore/
├── cmd/api/          # Entry point
├── internal/
│   ├── handler/      # HTTP handlers
│   ├── service/      # Business logic
│   ├── repository/   # Database access
│   └── middleware/   # Auth, logging, rate limit
├── pkg/              # Shared utilities
└── migrations/       # SQL migrations
\`\`\`

## Middleware Chain

The middleware chain handles authentication, request logging, and rate limiting before touching business logic:

\`\`\`go
router.Use(
  middleware.Logger(),
  middleware.RateLimit(100, time.Minute),
  middleware.CORS(allowedOrigins),
)
\`\`\`

## JWT Authentication

Rather than using a library, I implemented JWT validation manually using \`golang-jwt/jwt/v5\`. This keeps the dependency tree lean and gives full control over claims structure and validation logic.

\`\`\`go
func (m *AuthMiddleware) Validate(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    token := extractBearerToken(r)
    claims, err := m.jwtService.Verify(token)
    if err != nil {
      respondError(w, http.StatusUnauthorized, "invalid token")
      return
    }
    ctx := context.WithValue(r.Context(), userKey, claims.UserID)
    next.ServeHTTP(w, r.WithContext(ctx))
  })
}
\`\`\`

## Error Handling

Go's explicit error handling is verbose but transparent. I wrap errors with context at each layer:

\`\`\`go
task, err := s.repo.FindByID(ctx, id)
if err != nil {
  return nil, fmt.Errorf("service.GetTask: %w", err)
}
\`\`\`

This creates a clear error chain that makes debugging in production much easier than stack traces in Node.

## Performance Results

After load testing with k6, the Go API handled **4,200 requests/second** on a single $6/month VPS — compared to ~1,100 req/s for the equivalent Node.js service. Memory usage sat at ~18MB vs ~180MB.

## Takeaways

Go is not always the right tool. If you need rapid iteration, complex ORMs, or a rich ecosystem, Node still wins. But for performance-critical APIs where you want predictable behavior and minimal runtime overhead, Go is a genuine pleasure to work with.
`,
  },
  {
    slug: 'react-19-features-i-actually-use',
    title: 'React 19 Features I Actually Use Day-to-Day',
    date: '2024-09-28',
    summary: 'Moving past the hype — a working developer\'s take on which React 19 features genuinely improve the developer experience and which ones require a mental model shift.',
    tags: ['React', 'Frontend', 'TypeScript'],
    content: `# React 19 Features I Actually Use Day-to-Day

React 19 shipped with a lot of fanfare. After six months of using it in production, here's an honest breakdown of what I reach for daily and what I still haven't found a compelling use case for.

## Actions and \`useActionState\`

This is the one that changed how I think about forms. Previously, handling async form submissions meant a tangle of \`useState\` hooks:

\`\`\`tsx
// Before React 19
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

async function handleSubmit(e: FormEvent) {
  e.preventDefault()
  setLoading(true)
  try {
    await submitForm(data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
\`\`\`

With \`useActionState\`:

\`\`\`tsx
const [state, submitAction, isPending] = useActionState(
  async (prev: State, formData: FormData) => {
    const result = await submitForm(Object.fromEntries(formData))
    if (!result.ok) return { error: result.message }
    return { success: true }
  },
  { error: null }
)
\`\`\`

The form now self-manages its loading and error state. This pattern becomes especially powerful with Server Actions in Next.js.

## \`use()\` Hook

\`use()\` lets you read a Promise or Context inside render. The Promise variant works like Suspense but in a more composable way:

\`\`\`tsx
function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise) // suspends until resolved
  return <h1>{user.name}</h1>
}
\`\`\`

I use this for deferred data passed down from server components. For client-only apps, \`useQuery\` from React Query still beats it for features like refetching and cache management.

## Improved \`ref\` as Props

No more \`forwardRef\` gymnastics. Refs are just props now:

\`\`\`tsx
function Input({ ref, ...props }: InputProps & { ref?: React.Ref<HTMLInputElement> }) {
  return <input ref={ref} {...props} />
}
\`\`\`

This one sounds minor but saves real cognitive overhead when building component libraries.

## \`useOptimistic\`

Great for chat UIs and comment sections where you want instant UI feedback before the server confirms:

\`\`\`tsx
const [optimisticMessages, addOptimistic] = useOptimistic(
  messages,
  (state, newMessage: Message) => [...state, { ...newMessage, pending: true }]
)
\`\`\`

## What I Don't Use Much

**Document Metadata API** — useful for non-Next.js apps, but if you're on a meta-framework, it handles \`<title>\` and \`<meta>\` already.

**React Compiler (experimental)** — not in production yet. The auto-memoization is compelling but I'm waiting for stable.

## Bottom Line

React 19 is a genuine step forward. The forms/actions story alone is worth upgrading for. If you're on React 18, the migration is mostly painless — the main breaking change is the removal of legacy render APIs.
`,
  },
]
