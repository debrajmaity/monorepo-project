import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '@app/my-library';

@Injectable()
export class AppService {
  constructor(private readonly myLibraryService: MyLibraryService) {}

  getHello(): string {
    return this.myLibraryService.getHello();
  }
}
