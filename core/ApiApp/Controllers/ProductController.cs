using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiApp.Models;
using ApiApp.Service;

namespace ApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        [Route("List")]
        //c async Task<ActionResult<IEnumerable<Product>>>
        public async Task<ActionResult<IEnumerable<Product>>> ListAsync()
        {
            return await _productService.ListAsync();
        }

        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add([FromForm] Product product)
        {
            var files = Request.Form.Files;

            await _productService.AddAsync(product, files);

            return Ok();
        }


        [HttpGet]
        [Route("GetById/{id}")]
        public ActionResult GetById(long id)
        {
            var result = _productService.GetById(id);

            return Ok(result);
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromForm] Product product)
        {
            var files = Request.Form.Files;

            await _productService.Update(product, files);

            return Ok();
        }

        [HttpGet]
        [Route("Delete/{id}")]
        public ActionResult Delete(long id)
        {
            var result = _productService.Delete(id);

            return Ok();
        }

    }
}
