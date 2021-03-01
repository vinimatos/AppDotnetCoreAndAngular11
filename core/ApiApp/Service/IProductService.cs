using ApiApp.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Service
{
    public interface IProductService
    {
        Task<long> AddAsync(Product product, IFormFileCollection files);

        Task<List<Product>> ListAsync();

        Product GetById(long id);
        Task Update(Product product, IFormFileCollection files);

        Task Delete(long id);
    }
}
