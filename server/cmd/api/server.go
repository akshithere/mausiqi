package main
import "github.com/gofiber/fiber/v2"

func main(){
	app:= fiber.New();
	apiV1 := app.Group("/v1");
	apiV1.Get("/", func (c *fiber.Ctx) error {
		return c.SendString("from v1")
	})
	apiV2 := app.Group("/v2");
	apiV2.Get("/", func (c *fiber.Ctx) error {
		return c.SendString("from v2")
	})

	app.Listen(":3000")
}