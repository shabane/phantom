import express, { Express, NextFunction, Request, Response } from "express";
const app: Express = express();
import { MAX_FILE_UPLOADS, nameIt } from "./config";

import multer from "multer";
// const upload = multer({ dest: "uploads/" });

app.get("/api/file/", (req: Request, res: Response) => {
	res.send("Post Your Files here");
});

const storage = multer.diskStorage({
	destination: function(req: Request, file: any, cb: any) {
		cb(null, "uploads/");
	},
	filename: function(req: Request, file: any, cb: any) {
		cb(null, nameIt() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

app.post(
	"/api/file/",
	upload.array("files", MAX_FILE_UPLOADS),
	(req: Request, res: Response) => {
		console.log("we are here");
		res.send("we recived your files");
	},
);

app.listen(3000, () => {
	console.log("App Listen on 3000");
});
