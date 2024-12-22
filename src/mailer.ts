import nodemailer from "nodemailer";
import {
	EMAIL_AUTH_PASSWORD,
	EMAIL_AUTH_USER,
	EMAIL_FROM,
	EMAIL_HOST,
	EMAIL_PORT,
	EMAIL_SECURE,
} from "./config.ts";

export const mail = nodemailer.createTransport({
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
});
