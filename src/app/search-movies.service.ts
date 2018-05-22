import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class SearchMoviesService {
    
    urlBase: string = "https://api.themoviedb.org/3/search/movie?api_key=";
    urlApiKey: string = "2ef0e172cccb74cf3f977101b78f4d06";
    urlQuery: string = "&query=";
    urlMovie: string = "";
    
    // https://api.themoviedb.org/3/search/movie?api_key=2ef0e172cccb74cf3f977101b78f4d06&query=godzilla
    
    // Once you have been issued a key, an example request looks like this (replacing the {api_key} text with your own API key):
    // https://api.themoviedb.org/3/movie/76341?api_key={api_key}
    
    // Images -- You'll notice that movie, TV and person objects contain references 
    // to different file paths. In order to generate a fully working image URL, 
    // you'll need 3 pieces of data. Those pieces are a base_url, a file_size and 
    // a file_path.
    
    constructor(private http: HttpClient) { }
    
    getData (){
        results: any = this.http.get(this.urlBase + this.urlApiKey + this.urlQuery + this.urlMovie);
        console.log(results);
        return results;
    }

}
