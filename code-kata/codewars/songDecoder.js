/* A song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music,
he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
* 
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space. */

function songDecoder (song) {
  let str = ''
  if (song.length <= 200) {
    str = song.split('WUB').join(' ').replace(/  +/g, ' ').trim(' ')
    return str
  }
  return str
}

songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB') // 'WE ARE THE CHAMPIONS MY FRIEND'
songDecoder('WUBAWUBBWUBC') // 'A B C'
songDecoder('AWUBWUBBWUBWUBCWUBWUB') // 'A B C'
