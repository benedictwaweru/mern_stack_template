import crypto from "crypto";

/** Hashing, salting, generate OTPs */
export class Password {
	constructor() {
		super();
	}

	async generateSalt() {}
}

/** OAuth, Basic password auth, rate limiting, JWT, reCaptcha, fingerprints, certificates, OTPs, Links sent via email, SSO */
export class Authentication {}

/** Symmetric(AES, DES(obsolete), 3DES), Asymmetric(RSA, ECC), File hashing(SHA-2, SHA-3), FDE, File Encryption, end-to-end, DB Encryption, SSL/TLS, Cloud */
export class Encryption {}
