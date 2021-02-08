AOS.init({
  duration: 1050,
})


const movies = [
	
	{
		name:'Jaws',
		about:"A police chief, a marine scientist and a fisherman spring into action after a white shark terrorises the inhabitants of Amity, a quiet island.",
		img:'Images/jaws.jpg',
		rating:'8.5🌟'		
	},
	
	{
		name:'The little things',
		about:"Deputy Sheriff Joe Deke Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who has been terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
		img:'Images/little.jpg',
		rating:'6.3🌟'		
	},
	
	{
		name:'Birds of Prey',
		about:'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.',
		img:'Images/bird.jpg',
		rating:'7🌟'		
	},
	
	{
		name:'Godzilla',
		about:"Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
		img:'Images/god.jpg',
		rating:'8🌟'		
	},
	
	{
		name:'Bad Boys for Life',
		about:'Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.',
		img:'Images/bad.jpg',
		rating:'7🌟'		
	},
	
	{
		name:'Jumanji: The Next Level',
		about:'As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.',
		img:'Images/jum.jpg',
		rating:'7.3🌟'		
	},
	
	{
		name:'King Kong',
		about:'In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady.',
		img:'Images/king.jpg',
		rating:'8.5🌟'		
	},
	
	{
		name:'Life in a Year',
		about:'A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.',
		img:'Images/life.jpg',
		rating:'8🌟'		
	},
	
	{
		name:"Legionnaire's Trail",
		about:"Noreno, a half-Roman, is entrusted with the mission of crossing the snowy mountains of Armenia, swarming with Parthian patrols, to seek help for his slowly dying men.",
		img:'Images/leg.jpg',
		rating:'7🌟'		
	},
	
	{
		name:'Joker',
		about:"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
		img:'Images/joker.jpg',
		rating:'9.2🌟'		
	},
	
	{
		name:'Extraction',
		about:'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.',
		img:'Images/ext.jpg',
		rating:'7🌟'		
	},
	
	{
		name:'Code 8',
		about:"In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother.",
		img:'Images/code.jpg',
		rating:'6🌟'		
	}

];

const card_body=document.getElementById('cards');
var card_content='';

for(let i=0;i<movies.length;i++)
{
	var divs=document.createElement('div');
	card_content='<div class="card " ><img class="card-img-top" src="'+movies[i].img+'"><div class="card-body"><h5 class="card-title">'+movies[i].name+'</h5></div></div>';	
	card_content+='<div class="info"><h6>'+movies[i].about+'</h6><br><h5>'+movies[i].rating+'</h5></div>';
	divs.classList.add("col-md-3");
	divs.innerHTML=card_content;
	card_body.appendChild(divs);	
}

