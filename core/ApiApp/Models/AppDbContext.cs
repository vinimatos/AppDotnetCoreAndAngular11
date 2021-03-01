using Microsoft.EntityFrameworkCore;

namespace ApiApp.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :
            base(options)
        { }
        
        public DbSet<Product> Product { get; set; }
    }
}
