
class User {
	constructor(user) {
		this.name = user.name;
		this.username = user.username;
		this.website = user.website;
	}
	
	get title() {
		const titleMatch = this.name.match(titleRegex);
		
		if(titleMatch) {
			return titleMatch[1];
		}
		
		return undefined;
	}
	
	get firstName() {
		const splittedName = this.name.split(' ');
		
		if(hasTitle(this)) {
			// removes the title and returns the substring that after the title (first name)
			return splittedName.slice(1)[0];
		}
		
		return splittedName[0];
	}
	
	get lastName() {
		const splittedName = this.name.split(' ');
		
		if(hasTitle(this)) {
			return splittedName.slice(2).join(' ');
		}
		
		return splittedName.slice(1).join(' ');
	}
}

const titleRegex = /(Mr(s)?\.)/;

const hasTitle = (user) => {
	return titleRegex.test(user.name);
};

export { User };