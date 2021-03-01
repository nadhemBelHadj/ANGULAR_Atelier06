import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[]; //un tableau de Produit
  produit = new Produit();

  apiURL: string = 'http://localhost:8080/produits/api';

  constructor(private http : HttpClient) {
   
   }

   
    listeProduit(): Observable<Produit[]>{
      return this.http.get<Produit[]>(this.apiURL);
    }
  

    ajouterProduit( prod: Produit):Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions);
    }

    supprimerProduit(id : number) {
     const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
    }
    

    consulterProdui(id: number): Observable<Produit> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Produit>(url);
    }

       
    updateProduit(prod :Produit) : Observable<Produit>
    {  
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);
    }

   

}
