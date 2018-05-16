import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './bioproducts/product';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ProductService: ' + message);
  }

  private productsUrl = 'api/products';  // URL to web api

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
        tap(products => this.log(`Fetched products`)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`Fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /** PUT: update the product on the server */
  updateProduct (product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log(`Updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /** POST: add a new product to the server */
  addProduct (product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((hero: Product) => this.log(`Added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addHero'))
    );
}

/** DELETE: delete the product from the server */
deleteProduct (product: Product | number): Observable<Product> {
  const id = typeof product === 'number' ? product : product.id;
  const url = `${this.productsUrl}/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.delete<Product>(url, httpOptions).pipe(
    tap(_ => this.log(`Deleted product id=${id}`)),
    catchError(this.handleError<Product>('deleteProduct'))
  );
}

/* GET heroes whose name contains search term */
searchProducts(term: string): Observable<Product[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Product[]>(`api/products/?name=${term}`).pipe(
    tap(_ => this.log(`Found heroes matching "${term}"`)),
    catchError(this.handleError<Product[]>('searchProducts', []))
  );
}


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
