using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        private readonly IServiceManager _service;

        public CatalogController(IServiceManager service)
        {
            _service = service;
        }

        [HttpGet("processory")]
        public async Task<ActionResult> GetAllCpu()
        {
            try
            {
                var productsResult = await _service.ProductService.GetAllProductsAsync(trackChanges: false);
                return Ok(productsResult);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
