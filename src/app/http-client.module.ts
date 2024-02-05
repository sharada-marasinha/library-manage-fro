import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, FormsModule, CommonModule],
  exports: [HttpClientModule, FormsModule, CommonModule],
})
export class HttpClientModuleModule {}