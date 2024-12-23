import { nameIt } from "./config";
import { mail, sendMail } from "./mailer";
console.log(nameIt());
console.log("------------------");

mail.verify((res, rej) => {
	if (rej) {
		console.log(rej);
		return;
	}
	console.log(res);
});
sendMail("m.mohamadshabane@gmail.com", "test", "text", "<h1> html <h1>");
console.log("------------------");
