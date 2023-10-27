
import { NextRequest, NextResponse } from 'next/server';
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "petranikpeter@gmail.com", // Your email where you'll receive emails
            from: "ivanapeter2024@gmail.com", // your website email address here
            subject: `Ivana & Peter Wedding 2024`,
            html: `<div>You've got a mail</div>`,
        });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { error: error.message },
            {
                status: error.statusCode || 500,
            },
        );
    }


    return NextResponse.json(
        {
            body: "Thank you",
            path: req.nextUrl.pathname,
            query: req.nextUrl.search,
            cookies: req.cookies.getAll(),
        },
        {
            status: 200,
        },
    );

}