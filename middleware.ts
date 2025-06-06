import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Check if the request is coming from www subdomain
  if (hostname.startsWith('www.')) {
    // Create the new URL without www
    const newUrl = new URL(url.pathname, `https://myfitnesspalalternatives.app`)
    return NextResponse.redirect(newUrl, { status: 301 })
  }

  // Check if the request is not using HTTPS
  if (url.protocol === 'http:') {
    // Create the new URL with HTTPS
    const newUrl = new URL(url.pathname, `https://${hostname}`)
    return NextResponse.redirect(newUrl, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 