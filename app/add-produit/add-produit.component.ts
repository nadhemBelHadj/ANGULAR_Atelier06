import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  msg : string;
  constructor(private produitService: ProduitService,
             private router :Router       ) 
      { }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
      console.log(prod);
      });
    this.router.navigate(['produits']);
   }

  ngOnInit() {
  }


  
}
