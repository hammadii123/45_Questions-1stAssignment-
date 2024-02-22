function make_album(artistName: string, titleName: string, tracks: number | null) {
  const album: { artist: string; title: string; tracks: number | null } = {
    artist: artistName,
    title: titleName,
    tracks: null, 
  };

 
  if (tracks !== null) {
    album.tracks = tracks;
  }

  return album;
}


const album1 = make_album("Hammad", "Doorie", null);
const album2 = make_album("Atif Aslam", "Pheli dafa", null);
const album3 = make_album("Arijit Singh", "Me rang sharbaton ka", null);

const album4 = make_album("Udit", "Phela Nasha", 2);


console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
