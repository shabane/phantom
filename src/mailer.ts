import nodemailer, { TransportOptions } from "nodemailer";
import {
	EMAIL_AUTH_PASSWORD,
	EMAIL_AUTH_USER,
	EMAIL_FROM,
	EMAIL_HOST,
	EMAIL_PORT,
	EMAIL_SECURE,
} from "./config.ts";

export let mail = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: EMAIL_PORT,
	secure: EMAIL_SECURE, // use TLS
	auth: {
		user: EMAIL_AUTH_USER,
		pass: EMAIL_AUTH_PASSWORD,
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false,
	},
} as TransportOptions);

export function sendMail(
	to: string,
	subject: string,
	text: string,
	html: string,
): void {
	let message = {
		from: EMAIL_FROM,
		to: to,
		subject: subject,
		text: text,
		html: html,
	};
	mail.sendMail(message, (rej, res) => {
		//TODO: change to using debug
		if (rej) {
			console.log(rej.message);
		} else {
			console.log(res);
		}
	});
}
