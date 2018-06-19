function theBeatlesPlay (musician, instruments) 
{
  var newMusic = []
 for ( let i = 0; i < musician.length; i++) 
 {
 newMusic.push(`${musician[i]} plays ${instruments[i]}`) 
 } 
 return newMusic
  }
  
  function johnLennonFacts (facts) {var i = 0
  while (i < facts.length) {facts.push(`${facts[i]}!!!`)} return facts}
  