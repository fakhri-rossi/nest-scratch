import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/")
  getRootRoute() {
    return "Hello, World!";
  }

  @Get("/contact")
  getContactPage() {
    return "This is contact!";
  }
}
