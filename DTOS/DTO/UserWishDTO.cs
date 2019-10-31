using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class UserWishDTO
    {
        public decimal UserWishId { get; set; }
        public Nullable<decimal> UserId { get; set; }
        public string Title { get; set; }
        public Nullable<decimal> Status { get; set; }

    }
}
