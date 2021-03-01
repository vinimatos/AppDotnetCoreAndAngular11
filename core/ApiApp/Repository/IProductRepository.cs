using ApiApp.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Repository
{
    public interface IProductRepository
    {
        long Insert(Product product);

        Task<List<Product>> List();

        Task<string> UploadFilesAsync(IFormFileCollection file);

        Product GetById(long id);

        Task Update(Product product);

        Task Delete(long id);
    }
}
