using ApiApp.Models;
using ApiApp.Repository;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Service
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<List<Product>> ListAsync()
        {
            return await _productRepository.List();
        }

        public async Task<long> AddAsync(Product product, IFormFileCollection files)
        {
            var local_file = await _productRepository.UploadFilesAsync(files);
            product.Image = local_file;
            var result = _productRepository.Insert(product);

            return result;
        }

        public Product GetById(long id)
        {
            return _productRepository.GetById(id);
        }

        public async Task Update(Product product, IFormFileCollection files)
        {
            var local_file = await _productRepository.UploadFilesAsync(files);
            product.Image = local_file;
            await _productRepository.Update(product);
        }

        public Task Delete(long id)
        {
            return _productRepository.Delete(id);
        }
    }
}
