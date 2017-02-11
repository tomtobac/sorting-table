export class Company {
	constructor(
		public company: string,
		public domain: string,
		public info: {
			country: string,
			cash: number
		}
	) { }
}
