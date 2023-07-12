import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from '@app/tag/tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  findAll(): Promise<TagEntity[]> {
    return this.tagService.findAll();
  }
}
