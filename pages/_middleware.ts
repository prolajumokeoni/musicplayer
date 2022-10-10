import { NextResponse } from "next/server"

const signedinPages = ['/', '/playList', '/library']

export default function middleware(req) {
	 if(signedinPages.find((p) => p === req.nextUrl.pathname)) {
		const token = req.cookies.TRAX_ACESS_TOKEN
		if(!token){
			return NextResponse.redirect('/signin')
		}
	 }

	}
