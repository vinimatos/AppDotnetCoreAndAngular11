using ApiApp.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext context;

        public ProductRepository(AppDbContext context)
        {
            this.context = context;
        }
        public long Insert(Product product)
        {
            context.Product.Add(product);
            context.SaveChanges();
            return product.Id;
        }

        public Product GetById(long id)
        {
            return context.Product.Where(c => c.Id == id).FirstOrDefault();
        }

        public async Task<List<Product>> List()
        {
            return this.context.Product.ToList();
        }

        public async Task<string> UploadFilesAsync(IFormFileCollection file)
        {
            string fileName, path = "";
            try
            {
                var extension = "." + file[0].FileName.Split('.')[file[0].FileName.Split('.').Length - 1];
                fileName = DateTime.Now.Ticks + extension;

                var pathBuilt = Path.Combine(Directory.GetCurrentDirectory(), "Upload\\files");

                if (!Directory.Exists(pathBuilt))
                {
                    Directory.CreateDirectory(pathBuilt);
                }

                 path = Path.Combine(Directory.GetCurrentDirectory(), "Upload\\files",
                   fileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file[0].CopyToAsync(stream);
                }

            }
            catch (Exception e)
            {
                //log error
            }

            return path;
        }
       

        public async Task Update(Product product)
        {
            context.Update(product);
            context.SaveChanges();
        }

        public async Task Delete(long id)
        {
            var product = GetById(id);
            context.Remove(product);
            context.SaveChanges();
        }

    }
}
