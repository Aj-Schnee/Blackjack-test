let dealer = document.querySelector('#dealerContainer');
let dealerTotal = document.querySelector('#dealerTotal');
let player = document.querySelector('#playerContainer');
let playerTotal = document.querySelector('#playerTotal');
let hit = document.querySelector('#hit');
let stay = document.querySelector('#stay');
let split = document.querySelector('#split');
let splitHit = document.querySelector('#splitHit');
let fold = document.querySelector('#fold');
let newGame = document.querySelector('#newGame');
let newModal = document.querySelector('#newModal');

const deck = [
	{
		cardView: '../Root/img/acespades.png',
		value: 11
	},
	{
		cardView: '../Root/img/twospades.png',
		value: 2
	},
	{
		cardView: '../Root/img/threespades.png',
		value: 3
	},
	{
		cardView: '../Root/img/fourspades.png',
		value: 4
	},
	{
		cardView: '../Root/img/fivespades.png',
		value: 5
	},
	{
		cardView: '../Root/img/sixspades.png',
		value: 6
	},
	{
		cardView: '../Root/img/sevenspades.png',
		value: 7
	},
	{
		cardView: '../Root/img/eightspades.png',
		value: 8
	},
	{
		cardView: '../Root/img/ninespades.png',
		value: 9
	},
	{
		cardView: '../Root/img/tenspades.png',
		value: 10
	},
	{
		cardView: '../Root/img/jackspades.png',
		value: 10
	},
	{
		cardView: '../Root/img/queenspades.png',
		value: 10
	},
	{
		cardView: '../Root/img/kingspades.png',
		value: 10
	},
	{
		cardView: '../Root/img/acehearts.png',
		value: 11
	},
	{
		cardView: '../Root/img/twohearts.png',
		value: 2
	},
	{
		cardView: '../Root/img/threehearts.png',
		value: 3
	},
	{
		cardView: '../Root/img/fourhearts.png',
		value: 4
	},
	{
		cardView: '../Root/img/fivehearts.png',
		value: 5
	},
	{
		cardView: '../Root/img/sixhearts.png',
		value: 6
	},
	{
		cardView: '../Root/img/sevenhearts.png',
		value: 7
	},
	{
		cardView: '../Root/img/eighthearts.png',
		value: 8
	},
	{
		cardView: '../Root/img/ninehearts.png',
		value: 9
	},
	{
		cardView: '../Root/img/tenhearts.png',
		value: 10
	},
	{
		cardView: '../Root/img/jackhearts.png',
		value: 10
	},
	{
		cardView: '../Root/img/queenhearts.png',
		value: 10
	},
	{
		cardView: '../Root/img/kinghearts.png',
		value: 10
	},
	{
		cardView: '../Root/img/aceclubs.png',
		value: 11
	},
	{
		cardView: '../Root/img/twoclubs.png',
		value: 2
	},
	{
		cardView: '../Root/img/threeclubs.png',
		value: 3
	},
	{
		cardView: '../Root/img/fourclubs.png',
		value: 4
	},
	{
		cardView: '../Root/img/fiveclubs.png',
		value: 5
	},
	{
		cardView: '../Root/img/sixclubs.png',
		value: 6
	},
	{
		cardView: '../Root/img/sevenclubs.png',
		value: 7
	},
	{
		cardView: '../Root/img/eightclubs.png',
		value: 8
	},
	{
		cardView: '../Root/img/nineclubs.png',
		value: 9
	},
	{
		cardView: '../Root/img/tenclubs.png',
		value: 10
	},
	{
		cardView: '../Root/img/jackclubs.png',
		value: 10
	},
	{
		cardView: '../Root/img/queenclubs.png',
		value: 10
	},
	{
		cardView: '../Root/img/kingclubs.png',
		value: 10
	},
	{
		cardView: '../Root/img/acediamonds.png',
		value: 11
	},
	{
		cardView: '../Root/img/twodiamonds.png',
		value: 2
	},
	{
		cardView: '../Root/img/threediamonds.png',
		value: 3
	},
	{
		cardView: '../Root/img/fourdiamonds.png',
		value: 4
	},
	{
		cardView: '../Root/img/fivediamonds.png',
		value: 5
	},
	{
		cardView: '../Root/img/sixdiamonds.png',
		value: 6
	},
	{
		cardView: '../Root/img/sevendiamonds.png',
		value: 7
	},
	{
		cardView: '../Root/img/eightdiamonds.png',
		value: 8
	},
	{
		cardView: '../Root/img/ninediamonds.png',
		value: 9
	},
	{
		cardView: '../Root/img/tendiamonds.png',
		value: 10
	},
	{
		cardView: '../Root/img/jackdiamonds.png',
		value: 10
	},
	{
		cardView: '../Root/img/queendiamonds.png',
		value: 10
	},
	{
		cardView: '../Root/img/kingdiamonds.png',
		value: 10
	}
];

let newSplit = document.createElement('p');
let newP = document.createElement('p');
let newD = document.createElement('p');

let total = 0;
let dealerT = 0;
let gameOn = false;
let gameLive = true;
let dealerShow = [];
let playerShow = [];
let splitShow = [];

hit.disabled = true;
stay.disabled = true;
fold.disabled = true;
split.disabled = true;
splitHit.disabled = true;

randomNum = (arr) => {
	const a = Math.floor(Math.random() * arr.length);
	return a;
};

playerHand = () => {
	let a = randomNum(deck);
	let b = deck.splice(a, 1);
	playerShow.push(b);
};

dealerHand = () => {
	let a = randomNum(deck);
	let b = deck.splice(a, 1);
	dealerShow.push(b);
};

dealerCard = () => {
	dealerHand();
	newImgDealer();
	totalSumDealer();
	dealerT = Number(newD.innerText);
	if (dealerT === 21) {
		console.log('House 21');
	} else if (dealerT > 21) {
		console.log('House busted');
	} else if (dealerT === 17 || dealerT > 17) {
		console.log('House stays');
	} else {
		dealerCard();
	}
};

newImgPlayer = () => {
	let p = playerShow[playerShow.length - 1][0];
	let img = document.createElement('img');
	player.appendChild(img);
	img.src = p.cardView;
};

newImgDealer = () => {
	let p = dealerShow[dealerShow.length - 1][0];
	let img = document.createElement('img');
	dealer.appendChild(img);
	img.src = p.cardView;
};

shuffle = () => {
	for (let i = 0; i < playerShow.length; i++) {
		deck.push(playerShow[i].pop());
	}
	for (let i = 0; i < dealerShow.length; i++) {
		deck.push(dealerShow[i].pop());
	}
};

totalSumPlayer = () => {
	let playerSum = 0;
	for (let i = 0; i < playerShow.length; i++) {
		playerSum += playerShow[i][0].value;
		newP.innerText = playerSum;
	}
};

totalSumDealer = () => {
	let dealerSum = 0;
	for (let i = 0; i < dealerShow.length; i++) {
		dealerSum += dealerShow[i][0].value;
		newD.innerText = dealerSum;
	}
};

removeChildPlayer = () => {
	while (player.firstChild) {
		player.removeChild(player.firstChild);
	}
};

removeChildDealer = () => {
	while (dealer.firstChild) {
		dealer.removeChild(dealer.firstChild);
	}
};

newGame.addEventListener('click', () => {
	gameLive = true;
	shuffle();
	dealerShow = [];
	playerShow = [];
	hit.disabled = false;
	stay.disabled = false;
	fold.disabled = false;
	newGame.disabled = true;
	playerHand();
	newImgPlayer();
	playerHand();
	newImgPlayer();
	dealerHand();
	newImgDealer();
	totalSumPlayer();
	totalSumDealer();
	playerTotal.appendChild(newP);
	dealerTotal.appendChild(newD);
	total = Number(newP.innerText);
	// 21 win
	if (total === 21) {
		console.log('win 21');
		newGame.disabled = true;
		fold.disabled = false;
		hit.disabled = true;
		stay.disabled = true;
		split.disabled = true;
	}
	// split
	if (playerShow[0][0].value === playerShow[1][0].value) {
		split.disabled = false;
		player.appendChild(newSplit);
		newSplit.innerText = 'Would you like to split?';
		split.addEventListener('click', () => {
			let a = playerShow.pop();
			splitShow.push(a);
			console.log(a, splitShow);
			split.disabled = true;
			splitHit.disabled = false;
		});
		console.log('split');
	}
	// dobledown
});

hit.addEventListener('click', () => {
	playerHand();
	newImgPlayer();
	totalSumPlayer();
	total = Number(newP.innerText);
	if (total === 21) {
		console.log('win 21 with hitting');
		newGame.disabled = false;
		fold.disabled = true;
		hit.disabled = true;
		stay.disabled = true;
	}
	if (total > 21) {
		console.log('busted');
		hit.disabled = true;
		stay.disabled = true;
		fold.disabled = false;
		newGame.disabled = true;
	}
});

stay.addEventListener('click', () => {
	total = Number(newP.innerText);
	if (!splitHit.disabled) {
		splitShow.push(deck[randomNum(deck)].value);
		newSplit.innerText = splitShow;
		if (total === 21) {
			console.log('win 21 with second split card');
			newGame.disabled = false;
			fold.disabled = true;
			hit.disabled = true;
			stay.disabled = true;
			split.disabled = true;
		}
		if (total > 21) {
			console.log('busted');
		}
	} else {
		hit.disabled = true;
		stay.disabled = true;
		dealerCard();
		if (total > dealerT || dealerT >= 22) {
			console.log(`player : ${total}, dealer: ${dealerT}`, 'nice player win');
		}
		if ((dealerT >= total && dealerT < 22) || dealerT === 21) {
			console.log(`player : ${total}, dealer: ${dealerT}`, 'house wins you suck');
		}
	}
	hit.disabled = true;
	stay.disabled = true;
	fold.disabled = false;
});

fold.addEventListener('click', () => {
	removeChildDealer();
	removeChildPlayer();
	dealerSum = 0;
	playerSum = 0;
	dealerTotal.innerText = '';
	playerTotal.innerText = '';
	hit.disabled = true;
	stay.disabled = true;
	fold.disabled = true;
	newGame.disabled = false;
	newModal.style.display = 'block';
});
