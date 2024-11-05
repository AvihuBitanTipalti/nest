import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { WizardService } from './wizard.service';
import { AuthGuard } from './auth.guard';

@Controller('wizards')
export class WizardController {
  constructor(private readonly wizardService: WizardService) {}

  @Get()
  getGreeting(): string {
    return this.wizardService.getGreeting();
  }

  @Get('protected')
  @UseGuards(AuthGuard) // Apply guard to this route
  getProtected(): string {
    return this.wizardService.getProtected();
  }

  @Get('error')
  getError() {
    return this.wizardService.getError();
  }

  @Get('pipe/:id')
  getPipeExample(@Param('id', ParseIntPipe) id: number) {
    return this.wizardService.getPipeExample(id);
  }
}
