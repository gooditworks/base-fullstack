const env = {
  sentryEnv: process.env.NEXT_PUBLIC_SENTRY_ENV,
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  logdnaApp: process.env.NEXT_PUBLIC_LOGDNA_APP,
  logdnaKey: process.env.NEXT_PUBLIC_LOGDNA_KEY,
  vercelUrl: process.env.VERCEL_URL,
  port: process.env.PORT || "3000"
}

export default env
