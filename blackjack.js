let dealer = document.querySelector('#dealerContainer');
let dealerTotal = document.querySelector('#dealerTotal');
let player = document.querySelector('#playerContainer');
let playerTotal = document.querySelector('#playerTotal');
let hit = document.querySelector('#hit');
let stay = document.querySelector('#stay');
// let split = document.querySelector('#split');
// let splitHit = document.querySelector('#splitHit');
let fold = document.querySelector('#fold');
let newGame = document.querySelector('#newGame');
let newModal = document.querySelector('.modal');
let modalnote = document.querySelector('#modalnote');

const deck = [
	{
		cardView: './img/acespades.png',
		value: 11
	},
	{
		cardView: './img/twospades.png',
		value: 2
	},
	{
		cardView: './img/threespades.png',
		value: 3
	},
	{
		cardView: './img/fourspades.png',
		value: 4
	},
	{
		cardView: './img/fivespades.png',
		value: 5
	},
	{
		cardView: './img/sixspades.png',
		value: 6
	},
	{
		cardView: './img/sevenspades.png',
		value: 7
	},
	{
		cardView: './img/eightspades.png',
		value: 8
	},
	{
		cardView: './img/ninespades.png',
		value: 9
	},
	{
		cardView: './img/tenspades.png',
		value: 10
	},
	{
		cardView: './img/jackspades.png',
		value: 10
	},
	{
		cardView: './img/queenspades.png',
		value: 10
	},
	{
		cardView: './img/kingspades.png',
		value: 10
	},
	{
		cardView: './img/acehearts.png',
		value: 11
	},
	{
		cardView: './img/twohearts.png',
		value: 2
	},
	{
		cardView: './img/threehearts.png',
		value: 3
	},
	{
		cardView: './img/fourhearts.png',
		value: 4
	},
	{
		cardView: './img/fivehearts.png',
		value: 5
	},
	{
		cardView: './img/sixhearts.png',
		value: 6
	},
	{
		cardView: './img/sevenhearts.png',
		value: 7
	},
	{
		cardView: './img/eighthearts.png',
		value: 8
	},
	{
		cardView: './img/ninehearts.png',
		value: 9
	},
	{
		cardView: './img/tenhearts.png',
		value: 10
	},
	{
		cardView: './img/jackhearts.png',
		value: 10
	},
	{
		cardView: './img/queenhearts.png',
		value: 10
	},
	{
		cardView: './img/kinghearts.png',
		value: 10
	},
	{
		cardView: './img/aceclubs.png',
		value: 11
	},
	{
		cardView: './img/twoclubs.png',
		value: 2
	},
	{
		cardView: './img/threeclubs.png',
		value: 3
	},
	{
		cardView: './img/fourclubs.png',
		value: 4
	},
	{
		cardView: './img/fiveclubs.png',
		value: 5
	},
	{
		cardView: './img/sixclubs.png',
		value: 6
	},
	{
		cardView: './img/sevenclubs.png',
		value: 7
	},
	{
		cardView: './img/eightclubs.png',
		value: 8
	},
	{
		cardView: './img/nineclubs.png',
		value: 9
	},
	{
		cardView: './img/tenclubs.png',
		value: 10
	},
	{
		cardView: './img/jackclubs.png',
		value: 10
	},
	{
		cardView: './img/queenclubs.png',
		value: 10
	},
	{
		cardView: './img/kingclubs.png',
		value: 10
	},
	{
		cardView: './img/acediamonds.png',
		value: 11
	},
	{
		cardView: './img/twodiamonds.png',
		value: 2
	},
	{
		cardView: './img/threediamonds.png',
		value: 3
	},
	{
		cardView: './img/fourdiamonds.png',
		value: 4
	},
	{
		cardView: './img/fivediamonds.png',
		value: 5
	},
	{
		cardView: './img/sixdiamonds.png',
		value: 6
	},
	{
		cardView: './img/sevendiamonds.png',
		value: 7
	},
	{
		cardView: './img/eightdiamonds.png',
		value: 8
	},
	{
		cardView: './img/ninediamonds.png',
		value: 9
	},
	{
		cardView: './img/tendiamonds.png',
		value: 10
	},
	{
		cardView: './img/jackdiamonds.png',
		value: 10
	},
	{
		cardView: './img/queendiamonds.png',
		value: 10
	},
	{
		cardView: './img/kingdiamonds.png',
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
// split.disabled = true;
// splitHit.disabled = true;

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

setTimeout(() => {
	newModal.style.display = 'none';
}, 2000);

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
		newModal.style.display = 'block';
		modalnote.innerText = 'You hit 21, You win!!!';
		setTimeout(() => {
			newModal.style.display = 'none';
		}, 2000);
	}
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
		newModal.style.display = 'block';
		modalnote.innerText = 'You hit 21, You win!!!';
		setTimeout(() => {
			newModal.style.display = 'none';
		}, 2000);
	}
	if (total > 21) {
		console.log('busted');
		hit.disabled = true;
		stay.disabled = true;
		fold.disabled = false;
		newGame.disabled = true;
		newModal.style.display = 'block';
		modalnote.innerText = 'Busted';
		setTimeout(() => {
			newModal.style.display = 'none';
		}, 2000);
	}
});
stay.addEventListener('click', () => {
	total = Number(newP.innerText);
	if (total === 21) {
		console.log('win 21 with  split card');
		newGame.disabled = false;
		fold.disabled = true;
		hit.disabled = true;
		stay.disabled = true;
		split.disabled = true;
	}
	if (total > 21) {
		console.log('busted');
		hit.disabled = true;
		stay.disabled = true;
		fold.disabled = false;
		newGame.disabled = true;
		newModal.style.display = 'block';
		modalnote.innerText = 'Busted';
		setTimeout(() => {
			newModal.style.display = 'none';
		}, 2000);
	} else {
		hit.disabled = true;
		stay.disabled = true;
		dealerCard();
		if (total > dealerT || dealerT >= 22) {
			newModal.style.display = 'block';
			modalnote.innerText = 'You win!!';
			setTimeout(() => {
				newModal.style.display = 'none';
			}, 2000);
			console.log(`player : ${total}, dealer: ${dealerT}`, 'nice player win');
		}
		if ((dealerT >= total && dealerT < 22) || dealerT === 21) {
			newModal.style.display = 'block';
			modalnote.innerText = 'House wins';
			setTimeout(() => {
				newModal.style.display = 'none';
			}, 2000);
			console.log(`player : ${total}, dealer: ${dealerT}`, 'house wins');
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
});
