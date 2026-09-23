
class Token {
	constructor(material) {
	  this.material = material;
	}
   
	go() {
	  return `https://go.getblock.io/${this.material}/`;
	}
   
	token() {
	  return this.material;
	}
}

export const getblock = {
	"shared": {
		"base": {
			"mainnet": {
				"jsonRpc": [
					new Token ('02151f191a384908836044e9d332146d')
				]
			}
		},
		"eth": {
			"mainnet": {
				"jsonRpc": [
					new Token ('6cec419f87ce4626adb3b86a18c67668')
				]
			}
		}
	}
}
