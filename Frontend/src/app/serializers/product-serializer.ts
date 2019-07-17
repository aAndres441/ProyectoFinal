import {Product} from '../pages/product/model/product.model';

export class ProductSerializer {
    fromJson(json: any): Product {
        const product: Product = {
            id: json.id,
            nombre : json.nombre,
            imagen: json.imagen,
            descripcion: json.descripcion,
            tmstmp : json.tmstmp
        };
        return product;
    }
}