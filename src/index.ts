import express, { Express, Request, Response } from "express";
const app: Express = express();
import {
	EMAIL_LINK_THEME,
	EMAIL_SUBJECT,
	EMAIL_THEME,
	MAX_FILE_UPLOADS,
	nameIt,
	SITE_DOMAIL,
	UPLOAD_DIR,
} from "./config";

import multer from "multer";
// const upload = multer({ dest: "uploads/" });

import { sendMail } from "./mailer";

// serving uploaded files
app.use("/file", express.static(UPLOAD_DIR));

app.get("/api/file/", (_: Request, res: Response) => {
	res.send("Post Your Files here");
});

const storage = multer.diskStorage({
	destination: function(_: Request, file: any, cb: any) {
		cb(null, UPLOAD_DIR);
	},

	filename: function(_: Request, file: any, cb: any) {
		cb(null, nameIt() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

app.post(
	"/api/file",
	upload.single("file"),
	(req: Request, res: Response) => {
		if (!req.file) {
			res.status(400).send("please send a file");
		}

		if (!req.query.mail) {
			res.status(400).send("please provide an email");
		}

		let text: string = EMAIL_THEME + "</br>" + SITE_DOMAIL +
			"/" +
			req.file?.path;
		sendMail(
			req.query.mail as string,
			EMAIL_SUBJECT,
			text + req.file?.path,
			text + req.file?.path,
		);
		res.send("your file will send");
	},
);

app.listen(3000, () => {
	console.log("App Listen on 3000");
});
