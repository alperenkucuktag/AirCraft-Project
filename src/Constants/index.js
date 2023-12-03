export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.02369",
    bl_lng: "27.406082",
    tr_lat: "43.650528",
    tr_lng: "44.896316",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "b64219935amsh404cf538c9d4a8cp16e803jsn05b1e1db1c0e",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const options2 = {
  headers: {
    "X-RapidAPI-Key": "b64219935amsh404cf538c9d4a8cp16e803jsn05b1e1db1c0e",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

//elimde olan dizi

// [
//     [20...],
//     [20...],
//     [20...],
// ]

//Elde etmek istediğimiz

// [
//     {
//         id:"",
//         code:""
//     }
// ]
