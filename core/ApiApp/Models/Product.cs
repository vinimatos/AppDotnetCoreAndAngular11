using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Models
{
    public class Product
    {
        public long Id { get; set; }

        [FromForm(Name = "Name")]
        public string Name { get; set; }


        [Column(TypeName = "decimal(15,2)")]
        [FromForm(Name = "SalePrice")]
        public decimal SalePrice { get; set; }

        [FromForm(Name = "Image")]

        public string Image { get; set; }

    }
}
