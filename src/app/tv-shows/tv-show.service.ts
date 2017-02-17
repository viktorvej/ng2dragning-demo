import { Injectable } from '@angular/core';

@Injectable()
export class TvShowService {
 tvShows:any = [
    {
      title: "Game of Thrones",
      genre: "Adventure, Drama, Fantasy",
      rating: 9,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
      title: "Breaking Bad",
      genre: "Crime, Drama, Thriller",
      rating: 8,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
    },
    {
      title: "New Girl",
      genre: "Comedy",
      rating: 9,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTAyMzEzNzI3OF5BMl5BanBnXkFtZTgwNDkxNjA4OTE@._V1_.jpg"
    },
    {
      title: "Billions",
      genre: "Drama",
      rating: 8,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MzE3NzkwMV5BMl5BanBnXkFtZTgwMDEzNDA5MDI@._V1_.jpg"
    }
  ];

  getTvShows() {
    return this.tvShows;
  }
}