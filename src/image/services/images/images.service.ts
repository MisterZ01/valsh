import { Image } from './../../../models/image.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImagesService {

    async createImgSite(image_site: string, description_site: string) {

        const img = new Image();
        img.image_site= image_site,
        img.description_site= description_site,

        console.log(img);
        return await img.save()


         }
}
